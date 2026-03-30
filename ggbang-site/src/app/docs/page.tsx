import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollBackground } from "@/components/ScrollBackground";

export const metadata = {
  title: "API Documentation | GGBANG Payment Gateway",
  description:
    "GGBANG REST API documentation for payment integration. Create payments, query transactions, process refunds, and manage webhooks.",
};

function CodeBlock({ code, lang = "bash" }: { readonly code: string; readonly lang?: string }) {
  return (
    <pre className="p-4 rounded-xl bg-[#1A2332] text-[#E8E8F0] text-sm overflow-x-auto leading-relaxed">
      <code>{code}</code>
    </pre>
  );
}

export default function DocsPage() {
  return (
    <>
      <ScrollBackground />
      <Header />
      <main className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-3xl sm:text-4xl font-bold mb-4 text-[var(--color-text)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            API Documentation
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] mb-12">
            Integrate GGBANG payments into your application with our RESTful API.
          </p>

          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-[var(--color-text)]" style={{ fontFamily: "var(--font-display)" }}>
              Overview
            </h2>
            <div className="p-6 rounded-2xl glass-card space-y-4">
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                The GGBANG API is organized around REST. It accepts JSON-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes and authentication.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-[var(--color-text)]">Base URL</span>
                  <p className="text-[var(--color-text-muted)] mt-1 font-mono">https://api.ggbang.com/v1</p>
                </div>
                <div>
                  <span className="font-semibold text-[var(--color-text)]">Sandbox URL</span>
                  <p className="text-[var(--color-text-muted)] mt-1 font-mono">https://sandbox.ggbang.com/v1</p>
                </div>
              </div>
            </div>
          </section>

          {/* Authentication */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-[var(--color-text)]" style={{ fontFamily: "var(--font-display)" }}>
              Authentication
            </h2>
            <div className="p-6 rounded-2xl glass-card space-y-4">
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                Authenticate API requests by including your API key in the <code className="px-1.5 py-0.5 rounded bg-[#612FFF]/10 text-[#612FFF] text-xs font-mono">Authorization</code> header.
              </p>
              <CodeBlock code={`curl https://api.ggbang.com/v1/payments \\
  -H "Authorization: Bearer sk_live_your_api_key" \\
  -H "Content-Type: application/json"`} />
              <p className="text-[var(--color-text-muted)] text-xs">
                API keys are available in your <strong>Dashboard → Settings → API Keys</strong>. Use <code className="font-mono">sk_test_</code> keys for sandbox and <code className="font-mono">sk_live_</code> for production.
              </p>
            </div>
          </section>

          {/* Create Payment */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-[var(--color-text)]" style={{ fontFamily: "var(--font-display)" }}>
              Create a Payment
            </h2>
            <div className="p-6 rounded-2xl glass-card space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-md bg-green-100 text-green-700 text-xs font-bold font-mono">POST</span>
                <span className="text-sm font-mono text-[var(--color-text)]">/v1/payments</span>
              </div>
              <p className="text-[var(--color-text-secondary)] text-sm">
                Creates a new payment intent. Returns a checkout URL to redirect your customer, or use the payment ID for server-side processing.
              </p>
              <h3 className="text-sm font-semibold text-[var(--color-text)]">Request</h3>
              <CodeBlock lang="json" code={`curl -X POST https://api.ggbang.com/v1/payments \\
  -H "Authorization: Bearer sk_live_your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 9900,
    "currency": "USD",
    "payment_methods": ["card", "paypal", "apple_pay"],
    "description": "Order #12345",
    "customer_email": "customer@example.com",
    "return_url": "https://yourstore.com/success",
    "cancel_url": "https://yourstore.com/cancel",
    "metadata": {
      "order_id": "12345",
      "customer_id": "cust_789"
    }
  }'`} />
              <h3 className="text-sm font-semibold text-[var(--color-text)]">Response</h3>
              <CodeBlock lang="json" code={`{
  "id": "pay_1a2b3c4d5e6f",
  "status": "pending",
  "amount": 9900,
  "currency": "USD",
  "checkout_url": "https://checkout.ggbang.com/pay/pay_1a2b3c4d5e6f",
  "payment_methods": ["card", "paypal", "apple_pay"],
  "created_at": "2026-03-30T10:00:00Z",
  "expires_at": "2026-03-30T10:30:00Z"
}`} />
            </div>
          </section>

          {/* Query Payment */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-[var(--color-text)]" style={{ fontFamily: "var(--font-display)" }}>
              Retrieve a Payment
            </h2>
            <div className="p-6 rounded-2xl glass-card space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-700 text-xs font-bold font-mono">GET</span>
                <span className="text-sm font-mono text-[var(--color-text)]">/v1/payments/:id</span>
              </div>
              <CodeBlock code={`curl https://api.ggbang.com/v1/payments/pay_1a2b3c4d5e6f \\
  -H "Authorization: Bearer sk_live_your_api_key"`} />
              <h3 className="text-sm font-semibold text-[var(--color-text)]">Response</h3>
              <CodeBlock lang="json" code={`{
  "id": "pay_1a2b3c4d5e6f",
  "status": "succeeded",
  "amount": 9900,
  "currency": "USD",
  "payment_method": "card",
  "card": {
    "brand": "visa",
    "last4": "4242",
    "exp_month": 12,
    "exp_year": 2028
  },
  "created_at": "2026-03-30T10:00:00Z",
  "paid_at": "2026-03-30T10:02:15Z"
}`} />
            </div>
          </section>

          {/* Refund */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-[var(--color-text)]" style={{ fontFamily: "var(--font-display)" }}>
              Create a Refund
            </h2>
            <div className="p-6 rounded-2xl glass-card space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-md bg-green-100 text-green-700 text-xs font-bold font-mono">POST</span>
                <span className="text-sm font-mono text-[var(--color-text)]">/v1/refunds</span>
              </div>
              <CodeBlock code={`curl -X POST https://api.ggbang.com/v1/refunds \\
  -H "Authorization: Bearer sk_live_your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "payment_id": "pay_1a2b3c4d5e6f",
    "amount": 9900,
    "reason": "customer_request"
  }'`} />
            </div>
          </section>

          {/* Webhooks */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-[var(--color-text)]" style={{ fontFamily: "var(--font-display)" }}>
              Webhooks
            </h2>
            <div className="p-6 rounded-2xl glass-card space-y-4">
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                GGBANG sends webhook events to your server when payment status changes. Configure your webhook endpoint in <strong>Dashboard → Settings → Webhooks</strong>.
              </p>
              <h3 className="text-sm font-semibold text-[var(--color-text)]">Event Types</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[var(--color-border)]">
                      <th className="text-left py-2 pr-4 font-semibold text-[var(--color-text)]">Event</th>
                      <th className="text-left py-2 font-semibold text-[var(--color-text)]">Description</th>
                    </tr>
                  </thead>
                  <tbody className="text-[var(--color-text-secondary)]">
                    <tr className="border-b border-[var(--color-border)]"><td className="py-2 pr-4 font-mono text-xs">payment.succeeded</td><td className="py-2">Payment completed successfully</td></tr>
                    <tr className="border-b border-[var(--color-border)]"><td className="py-2 pr-4 font-mono text-xs">payment.failed</td><td className="py-2">Payment attempt failed</td></tr>
                    <tr className="border-b border-[var(--color-border)]"><td className="py-2 pr-4 font-mono text-xs">payment.expired</td><td className="py-2">Payment session expired</td></tr>
                    <tr className="border-b border-[var(--color-border)]"><td className="py-2 pr-4 font-mono text-xs">refund.created</td><td className="py-2">Refund initiated</td></tr>
                    <tr className="border-b border-[var(--color-border)]"><td className="py-2 pr-4 font-mono text-xs">refund.completed</td><td className="py-2">Refund processed successfully</td></tr>
                    <tr><td className="py-2 pr-4 font-mono text-xs">chargeback.created</td><td className="py-2">Chargeback dispute opened</td></tr>
                  </tbody>
                </table>
              </div>
              <h3 className="text-sm font-semibold text-[var(--color-text)]">Webhook Payload Example</h3>
              <CodeBlock lang="json" code={`{
  "event": "payment.succeeded",
  "data": {
    "id": "pay_1a2b3c4d5e6f",
    "status": "succeeded",
    "amount": 9900,
    "currency": "USD",
    "paid_at": "2026-03-30T10:02:15Z"
  },
  "timestamp": "2026-03-30T10:02:16Z",
  "signature": "sha256=..."
}`} />
            </div>
          </section>

          {/* SDKs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-[var(--color-text)]" style={{ fontFamily: "var(--font-display)" }}>
              SDKs & Plugins
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { name: "Node.js", install: "npm install @ggbang/sdk", status: "stable" },
                { name: "Python", install: "pip install ggbang", status: "stable" },
                { name: "PHP", install: "composer require ggbang/sdk", status: "stable" },
                { name: "Java", install: "Maven / Gradle", status: "stable" },
                { name: "Shopify Plugin", install: "Shopify App Store", status: "available" },
                { name: "WooCommerce Plugin", install: "WordPress Plugin Directory", status: "available" },
              ].map((sdk) => (
                <div key={sdk.name} className="p-4 rounded-xl glass-card">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-[var(--color-text)]">{sdk.name}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-medium">
                      {sdk.status}
                    </span>
                  </div>
                  <code className="text-xs text-[var(--color-text-muted)] font-mono">{sdk.install}</code>
                </div>
              ))}
            </div>
          </section>

          {/* Sandbox */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--color-text)]" style={{ fontFamily: "var(--font-display)" }}>
              Sandbox & Testing
            </h2>
            <div className="p-6 rounded-2xl glass-card space-y-4">
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                Use our sandbox environment to test your integration before going live. Sandbox transactions are simulated — no real money moves.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[var(--color-border)]">
                      <th className="text-left py-2 pr-4 font-semibold text-[var(--color-text)]">Test Card</th>
                      <th className="text-left py-2 pr-4 font-semibold text-[var(--color-text)]">Result</th>
                      <th className="text-left py-2 font-semibold text-[var(--color-text)]">CVV</th>
                    </tr>
                  </thead>
                  <tbody className="text-[var(--color-text-secondary)] font-mono text-xs">
                    <tr className="border-b border-[var(--color-border)]"><td className="py-2 pr-4">4242 4242 4242 4242</td><td className="py-2 pr-4">Success</td><td className="py-2">Any 3 digits</td></tr>
                    <tr className="border-b border-[var(--color-border)]"><td className="py-2 pr-4">4000 0000 0000 0002</td><td className="py-2 pr-4">Declined</td><td className="py-2">Any 3 digits</td></tr>
                    <tr className="border-b border-[var(--color-border)]"><td className="py-2 pr-4">4000 0000 0000 3220</td><td className="py-2 pr-4">3DS Required</td><td className="py-2">Any 3 digits</td></tr>
                    <tr><td className="py-2 pr-4">4000 0000 0000 9995</td><td className="py-2 pr-4">Insufficient Funds</td><td className="py-2">Any 3 digits</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
