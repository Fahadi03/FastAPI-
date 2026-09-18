export default function Decorations() {
  return (
    <div className="decor" aria-hidden="true">
      <div className="hill hill-a" />
      <div className="hill hill-b" />
      <div className="cloud cloud-left" />
      <div className="cloud cloud-right" />

      <svg className="plant" viewBox="0 0 170 260">
        <defs>
          <linearGradient id="plant-pot" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f2d6b6" />
            <stop offset="100%" stopColor="#d7ad86" />
          </linearGradient>
          <linearGradient id="plant-leaf" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a3c677" />
            <stop offset="100%" stopColor="#6c9848" />
          </linearGradient>
        </defs>
        <path d="M84 192 C82 140 86 90 90 36" stroke="#6c9848" strokeWidth="6" fill="none" strokeLinecap="round" />
        <ellipse cx="58" cy="152" rx="32" ry="14" transform="rotate(-28 58 152)" fill="url(#plant-leaf)" />
        <ellipse cx="114" cy="132" rx="32" ry="14" transform="rotate(26 114 132)" fill="url(#plant-leaf)" />
        <ellipse cx="60" cy="102" rx="29" ry="13" transform="rotate(-34 60 102)" fill="url(#plant-leaf)" />
        <ellipse cx="116" cy="80" rx="29" ry="13" transform="rotate(30 116 80)" fill="url(#plant-leaf)" />
        <ellipse cx="70" cy="54" rx="24" ry="11" transform="rotate(-40 70 54)" fill="url(#plant-leaf)" />
        <ellipse cx="104" cy="32" rx="20" ry="10" transform="rotate(36 104 32)" fill="url(#plant-leaf)" />
        <path d="M30 192 H140 L128 250 Q126 258 118 258 H52 Q44 258 42 250 Z" fill="url(#plant-pot)" />
        <rect x="24" y="184" width="122" height="18" rx="9" fill="#f5e0c6" />
      </svg>

      <svg className="flower" viewBox="0 0 140 220">
        <defs>
          <radialGradient id="flower-petal" cx="40%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#fbc3cd" />
            <stop offset="100%" stopColor="#ef8fa1" />
          </radialGradient>
          <linearGradient id="flower-pot" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f7a9b3" />
            <stop offset="100%" stopColor="#e2808e" />
          </linearGradient>
        </defs>
        <path d="M70 150 C68 120 72 96 70 70" stroke="#6c9848" strokeWidth="5" fill="none" strokeLinecap="round" />
        <ellipse cx="52" cy="124" rx="20" ry="9" transform="rotate(-30 52 124)" fill="#8fb863" />
        <ellipse cx="90" cy="116" rx="20" ry="9" transform="rotate(30 90 116)" fill="#8fb863" />
        <circle cx="70" cy="40" r="18" fill="url(#flower-petal)" />
        <circle cx="89" cy="54" r="18" fill="url(#flower-petal)" />
        <circle cx="82" cy="76" r="18" fill="url(#flower-petal)" />
        <circle cx="58" cy="76" r="18" fill="url(#flower-petal)" />
        <circle cx="51" cy="54" r="18" fill="url(#flower-petal)" />
        <circle cx="70" cy="60" r="12" fill="#f6d35b" />
        <path d="M26 150 H114 L104 208 Q102 216 94 216 H46 Q38 216 36 208 Z" fill="url(#flower-pot)" />
        <rect x="20" y="142" width="100" height="16" rx="8" fill="#f8bcc4" />
      </svg>
    </div>
  );
}
