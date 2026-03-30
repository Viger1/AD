/**
 * Official-style SVG payment brand icons.
 * Each icon reproduces the recognizable shape/color of the brand mark.
 */

export function VisaIcon() {
  return (
    <svg viewBox="0 0 48 32" className="w-12 h-8">
      <rect width="48" height="32" rx="4" fill="#1A1F71" />
      <text x="24" y="21" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" fontStyle="italic" fontFamily="Arial, sans-serif">VISA</text>
    </svg>
  );
}

export function MastercardIcon() {
  return (
    <svg viewBox="0 0 48 32" className="w-12 h-8">
      <rect width="48" height="32" rx="4" fill="#252525" />
      <circle cx="19" cy="16" r="9" fill="#EB001B" />
      <circle cx="29" cy="16" r="9" fill="#F79E1B" />
      <path d="M24 9.17a9 9 0 000 13.66 9 9 0 000-13.66z" fill="#FF5F00" />
    </svg>
  );
}

export function AmexIcon() {
  return (
    <svg viewBox="0 0 48 32" className="w-12 h-8">
      <rect width="48" height="32" rx="4" fill="#006FCF" />
      <text x="24" y="20" textAnchor="middle" fill="white" fontSize="9" fontWeight="800" fontFamily="Arial, sans-serif">AMEX</text>
    </svg>
  );
}

export function JcbIcon() {
  return (
    <svg viewBox="0 0 48 32" className="w-12 h-8">
      <rect width="48" height="32" rx="4" fill="#FFFFFF" />
      <rect x="8" y="6" width="10" height="20" rx="3" fill="#0E4C96" />
      <rect x="19" y="6" width="10" height="20" rx="3" fill="#E31837" />
      <rect x="30" y="6" width="10" height="20" rx="3" fill="#007940" />
      <text x="13" y="20" textAnchor="middle" fill="white" fontSize="6" fontWeight="700" fontFamily="Arial">J</text>
      <text x="24" y="20" textAnchor="middle" fill="white" fontSize="6" fontWeight="700" fontFamily="Arial">C</text>
      <text x="35" y="20" textAnchor="middle" fill="white" fontSize="6" fontWeight="700" fontFamily="Arial">B</text>
    </svg>
  );
}

export function DiscoverIcon() {
  return (
    <svg viewBox="0 0 48 32" className="w-12 h-8">
      <rect width="48" height="32" rx="4" fill="#FFFFFF" />
      <rect width="48" height="32" rx="4" fill="#F6F6F6" />
      <circle cx="30" cy="16" r="8" fill="#F47216" />
      <text x="14" y="19" fill="#231F20" fontSize="8" fontWeight="700" fontFamily="Arial">D</text>
    </svg>
  );
}

export function UnionPayIcon() {
  return (
    <svg viewBox="0 0 48 32" className="w-12 h-8">
      <rect width="48" height="32" rx="4" fill="#FFFFFF" />
      <rect x="4" y="4" width="18" height="24" rx="3" fill="#E21836" />
      <rect x="15" y="4" width="18" height="24" rx="3" fill="#00447C" />
      <rect x="26" y="4" width="18" height="24" rx="3" fill="#007B84" />
      <text x="24" y="20" textAnchor="middle" fill="white" fontSize="6" fontWeight="700" fontFamily="Arial">UP</text>
    </svg>
  );
}

export function PaypalIcon() {
  return (
    <svg viewBox="0 0 48 32" className="w-12 h-8">
      <rect width="48" height="32" rx="4" fill="#FFFFFF" />
      <rect width="48" height="32" rx="4" fill="#F7F9FA" />
      <text x="10" y="21" fill="#003087" fontSize="11" fontWeight="800" fontStyle="italic" fontFamily="Arial">P</text>
      <text x="20" y="21" fill="#009CDE" fontSize="11" fontWeight="800" fontStyle="italic" fontFamily="Arial">P</text>
      <text x="28" y="18" fill="#003087" fontSize="7" fontWeight="600" fontFamily="Arial">ay</text>
      <text x="28" y="24" fill="#009CDE" fontSize="7" fontWeight="600" fontFamily="Arial">al</text>
    </svg>
  );
}

export function ApplePayIcon() {
  return (
    <svg viewBox="0 0 48 32" className="w-12 h-8">
      <rect width="48" height="32" rx="4" fill="#000000" />
      {/* Apple logo simplified */}
      <path d="M14 11c.5-1.2 1.8-2 3-2 .8 0 1.5.4 2 .4s1.2-.5 2.1-.5c1.3 0 2.3.8 2.8 1.9-1.2.7-2 1.9-2 3.3 0 1.6 1 3 2.3 3.5-.3.9-.7 1.7-1.3 2.4-.6.8-1.3 1.5-2.2 1.5-.9 0-1.2-.5-2.2-.5s-1.3.5-2.1.5c-.9 0-1.7-.8-2.3-1.6C13.4 18.4 13 16 14 13.5V11z" fill="white" />
      <text x="33" y="20" textAnchor="middle" fill="white" fontSize="8" fontWeight="600" fontFamily="Arial">Pay</text>
    </svg>
  );
}

export function GooglePayIcon() {
  return (
    <svg viewBox="0 0 48 32" className="w-12 h-8">
      <rect width="48" height="32" rx="4" fill="#FFFFFF" />
      <rect width="48" height="32" rx="4" fill="#F7F9FA" stroke="#E8E8E8" strokeWidth="0.5" />
      {/* G */}
      <path d="M14 16a5 5 0 119.8 1H17v-2h5.2a3 3 0 10-1 3.5l1.5 1.2A5 5 0 0114 16z" fill="#4285F4" />
      <text x="33" y="20" textAnchor="middle" fill="#5F6368" fontSize="7.5" fontWeight="500" fontFamily="Arial">Pay</text>
    </svg>
  );
}

export function SamsungPayIcon() {
  return (
    <svg viewBox="0 0 48 32" className="w-12 h-8">
      <rect width="48" height="32" rx="4" fill="#1428A0" />
      <text x="24" y="15" textAnchor="middle" fill="white" fontSize="6" fontWeight="500" fontFamily="Arial">SAMSUNG</text>
      <text x="24" y="24" textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="Arial">Pay</text>
    </svg>
  );
}

export function KlarnaIcon() {
  return (
    <svg viewBox="0 0 48 32" className="w-12 h-8">
      <rect width="48" height="32" rx="4" fill="#FFB3C7" />
      <text x="24" y="20" textAnchor="middle" fill="#17120F" fontSize="10" fontWeight="800" fontFamily="Arial">Klarna</text>
    </svg>
  );
}

export function AlipayIcon() {
  return (
    <svg viewBox="0 0 48 32" className="w-12 h-8">
      <rect width="48" height="32" rx="4" fill="#1677FF" />
      <text x="24" y="15" textAnchor="middle" fill="white" fontSize="6" fontWeight="600" fontFamily="Arial">支付宝</text>
      <text x="24" y="24" textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="Arial">Alipay</text>
    </svg>
  );
}

export function WechatPayIcon() {
  return (
    <svg viewBox="0 0 48 32" className="w-12 h-8">
      <rect width="48" height="32" rx="4" fill="#07C160" />
      {/* Two chat bubbles */}
      <ellipse cx="20" cy="14" rx="7" ry="5.5" fill="white" opacity="0.9" />
      <ellipse cx="28" cy="18" rx="6" ry="5" fill="white" opacity="0.7" />
      <circle cx="17" cy="13" r="1" fill="#07C160" />
      <circle cx="23" cy="13" r="1" fill="#07C160" />
      <text x="24" y="28" textAnchor="middle" fill="white" fontSize="5" fontWeight="600" fontFamily="Arial">WeChat Pay</text>
    </svg>
  );
}

export function IdealIcon() {
  return (
    <svg viewBox="0 0 48 32" className="w-12 h-8">
      <rect width="48" height="32" rx="4" fill="#FFFFFF" />
      <rect width="48" height="32" rx="4" fill="#CC0066" />
      <text x="24" y="20" textAnchor="middle" fill="white" fontSize="10" fontWeight="800" fontFamily="Arial">iDEAL</text>
    </svg>
  );
}

export function BancontactIcon() {
  return (
    <svg viewBox="0 0 48 32" className="w-12 h-8">
      <rect width="48" height="32" rx="4" fill="#005498" />
      <circle cx="18" cy="16" r="6" fill="#FFD800" />
      <circle cx="30" cy="16" r="6" fill="#005498" stroke="#FFD800" strokeWidth="1" />
      <text x="24" y="28" textAnchor="middle" fill="white" fontSize="5" fontWeight="600" fontFamily="Arial">Bancontact</text>
    </svg>
  );
}

export function BoletoIcon() {
  return (
    <svg viewBox="0 0 48 32" className="w-12 h-8">
      <rect width="48" height="32" rx="4" fill="#2D2D2D" />
      {/* Barcode lines */}
      {[8, 11, 13, 16, 18, 21, 23, 25, 28, 30, 33, 35, 37, 40].map((x, i) => (
        <rect key={i} x={x} y="6" width={i % 3 === 0 ? 2 : 1} height="16" fill="white" opacity="0.8" />
      ))}
      <text x="24" y="28" textAnchor="middle" fill="white" fontSize="5.5" fontWeight="600" fontFamily="Arial">Boleto</text>
    </svg>
  );
}

export function PixIcon() {
  return (
    <svg viewBox="0 0 48 32" className="w-12 h-8">
      <rect width="48" height="32" rx="4" fill="#FFFFFF" />
      <rect width="48" height="32" rx="4" fill="#F0F5F0" />
      {/* PIX diamond shape */}
      <g transform="translate(24,14)">
        <rect x="-6" y="-6" width="12" height="12" rx="2" fill="#32BCAD" transform="rotate(45)" />
        <rect x="-3" y="-3" width="6" height="6" rx="1" fill="#FFFFFF" transform="rotate(45)" />
      </g>
      <text x="24" y="28" textAnchor="middle" fill="#32BCAD" fontSize="6" fontWeight="800" fontFamily="Arial">PIX</text>
    </svg>
  );
}

export function AfterpayIcon() {
  return (
    <svg viewBox="0 0 48 32" className="w-12 h-8">
      <rect width="48" height="32" rx="4" fill="#B2FCE4" />
      <text x="24" y="20" textAnchor="middle" fill="#000000" fontSize="8" fontWeight="800" fontFamily="Arial">afterpay</text>
    </svg>
  );
}

export function AffirmIcon() {
  return (
    <svg viewBox="0 0 48 32" className="w-12 h-8">
      <rect width="48" height="32" rx="4" fill="#0FA0EA" />
      <text x="24" y="20" textAnchor="middle" fill="white" fontSize="9" fontWeight="800" fontFamily="Arial">affirm</text>
    </svg>
  );
}

export function ZipIcon() {
  return (
    <svg viewBox="0 0 48 32" className="w-12 h-8">
      <rect width="48" height="32" rx="4" fill="#AA8FFF" />
      <text x="24" y="21" textAnchor="middle" fill="white" fontSize="13" fontWeight="800" fontFamily="Arial">zip</text>
    </svg>
  );
}

/** Map method name → icon component */
export const PAYMENT_ICON_MAP: Record<string, React.ReactNode> = {
  Visa: <VisaIcon />,
  Mastercard: <MastercardIcon />,
  "American Express": <AmexIcon />,
  JCB: <JcbIcon />,
  Discover: <DiscoverIcon />,
  UnionPay: <UnionPayIcon />,
  PayPal: <PaypalIcon />,
  "Apple Pay": <ApplePayIcon />,
  "Google Pay": <GooglePayIcon />,
  "Samsung Pay": <SamsungPayIcon />,
  Klarna: <KlarnaIcon />,
  Alipay: <AlipayIcon />,
  "WeChat Pay": <WechatPayIcon />,
  iDEAL: <IdealIcon />,
  Bancontact: <BancontactIcon />,
  Boleto: <BoletoIcon />,
  PIX: <PixIcon />,
  Afterpay: <AfterpayIcon />,
  Affirm: <AffirmIcon />,
  Zip: <ZipIcon />,
};
