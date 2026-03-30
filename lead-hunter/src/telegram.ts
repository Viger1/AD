import https from "https";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN ?? "";
const CHAT_ID = process.env.TELEGRAM_CHAT_ID ?? "";

function telegramRequest(
  method: string,
  body: Record<string, unknown>,
): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body);
    const req = https.request(
      {
        hostname: "api.telegram.org",
        path: `/bot${BOT_TOKEN}/${method}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(data),
        },
      },
      (res) => {
        let buf = "";
        res.on("data", (chunk) => (buf += chunk));
        res.on("end", () => {
          try {
            resolve(JSON.parse(buf));
          } catch {
            resolve(buf);
          }
        });
      },
    );
    req.on("error", reject);
    req.write(data);
    req.end();
  });
}

/** Send a text message to the configured chat */
export async function sendMessage(text: string): Promise<void> {
  if (!BOT_TOKEN || !CHAT_ID) {
    console.log("[TG] Not configured, printing to console:");
    console.log(text);
    return;
  }
  await telegramRequest("sendMessage", {
    chat_id: CHAT_ID,
    text,
    parse_mode: "Markdown",
  });
}

/** Poll for the latest reply from the user (simple one-shot) */
export async function waitForReply(
  timeoutMs = 300_000,
): Promise<string | null> {
  if (!BOT_TOKEN || !CHAT_ID) {
    console.log("[TG] Not configured. Enter reply in console:");
    return new Promise((resolve) => {
      process.stdin.once("data", (data) => resolve(data.toString().trim()));
    });
  }

  const start = Date.now();
  let lastUpdateId = 0;

  // Clear old updates first
  const initial = (await telegramRequest("getUpdates", {
    offset: -1,
  })) as { result?: Array<{ update_id: number }> };
  if (initial.result?.length) {
    lastUpdateId = initial.result[initial.result.length - 1].update_id + 1;
  }

  while (Date.now() - start < timeoutMs) {
    const response = (await telegramRequest("getUpdates", {
      offset: lastUpdateId,
      timeout: 30,
    })) as {
      result?: Array<{
        update_id: number;
        message?: { chat: { id: number }; text?: string };
      }>;
    };

    if (response.result) {
      for (const update of response.result) {
        lastUpdateId = update.update_id + 1;
        if (
          update.message?.chat.id === Number(CHAT_ID) &&
          update.message?.text
        ) {
          return update.message.text;
        }
      }
    }
  }
  return null;
}
