import girl from "../assets/girl.webp";

const star = "0,-6 1.53,-2.1 5.71,-1.85 2.47,0.8 3.53,4.85 0,2.6 -3.53,4.85 -2.47,0.8 -5.71,-1.85 -1.53,-2.1";

function AppTile() {
  return (
    <div className="app-tile" aria-hidden="true">
      <svg viewBox="0 0 64 64">
        <path d="M26 44 V17 L48 12 V38" stroke="#ffffff" strokeWidth="5" strokeLinejoin="round" fill="none" />
        <circle cx="20" cy="45" r="7.5" fill="#ffffff" />
        <circle cx="42" cy="39" r="7.5" fill="#ffffff" />
        <polygon points={star} transform="translate(55 24)" fill="#f6d36b" />
        <polygon points={star} transform="translate(52 50) scale(0.7)" fill="#f7a8c4" />
      </svg>
    </div>
  );
}

function RoomDecor() {
  return (
    <div className="room-decor" aria-hidden="true">
      <div className="platform" />
      <div className="cloud cloud-a" />
      <div className="cloud cloud-b" />

      <svg className="lamp" viewBox="0 0 100 220">
        <defs>
          <radialGradient id="lamp-glow" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#fff3c4" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#fff3c4" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="lamp-shade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c8b3f3" />
            <stop offset="100%" stopColor="#9a80da" />
          </linearGradient>
        </defs>
        <line x1="50" y1="0" x2="50" y2="120" stroke="#9d84dd" strokeWidth="3" />
        <ellipse cx="50" cy="186" rx="46" ry="30" fill="url(#lamp-glow)" />
        <rect x="44" y="114" width="12" height="14" rx="4" fill="#9d84dd" />
        <path d="M20 166 C20 140 33 124 50 124 C67 124 80 140 80 166 Z" fill="url(#lamp-shade)" />
        <ellipse cx="50" cy="167" rx="11" ry="6" fill="#fff4cf" />
      </svg>

      <svg className="shelf" viewBox="0 0 160 210">
        <rect x="18" y="22" width="22" height="58" rx="5" fill="#a9c1ec" />
        <rect x="42" y="16" width="24" height="64" rx="5" fill="#f3aabb" />
        <rect x="68" y="26" width="22" height="54" rx="5" fill="#f5d589" />
        <rect x="0" y="80" width="160" height="12" rx="6" fill="#ecc79f" />
        <ellipse cx="96" cy="164" rx="34" ry="28" fill="#f8c6d2" />
        <path d="M68 146 L72 122 L88 140 Z M124 146 L120 122 L104 140 Z" fill="#f8c6d2" />
        <circle cx="86" cy="160" r="3" fill="#6b4a5a" />
        <circle cx="106" cy="160" r="3" fill="#6b4a5a" />
        <path d="M92 168 Q96 172 100 168" stroke="#6b4a5a" strokeWidth="2" strokeLinecap="round" fill="none" />
        <ellipse cx="78" cy="170" rx="6" ry="3.5" fill="#f28ea6" opacity="0.6" />
        <ellipse cx="114" cy="170" rx="6" ry="3.5" fill="#f28ea6" opacity="0.6" />
        <rect x="0" y="192" width="160" height="12" rx="6" fill="#ecc79f" />
      </svg>

      <svg className="big-plant" viewBox="0 0 160 260">
        <defs>
          <linearGradient id="big-plant-leaf" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#9ec77a" />
            <stop offset="100%" stopColor="#5f8f45" />
          </linearGradient>
          <linearGradient id="big-plant-pot" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c7b1f1" />
            <stop offset="100%" stopColor="#9e85dc" />
          </linearGradient>
        </defs>
        <ellipse cx="46" cy="96" rx="44" ry="18" transform="rotate(-40 46 96)" fill="url(#big-plant-leaf)" />
        <ellipse cx="112" cy="84" rx="44" ry="18" transform="rotate(38 112 84)" fill="url(#big-plant-leaf)" />
        <ellipse cx="76" cy="54" rx="40" ry="16" transform="rotate(-80 76 54)" fill="url(#big-plant-leaf)" />
        <ellipse cx="38" cy="150" rx="40" ry="16" transform="rotate(-18 38 150)" fill="url(#big-plant-leaf)" />
        <ellipse cx="120" cy="142" rx="40" ry="16" transform="rotate(20 120 142)" fill="url(#big-plant-leaf)" />
        <path d="M34 180 H126 L116 250 Q114 258 106 258 H54 Q46 258 44 250 Z" fill="url(#big-plant-pot)" />
      </svg>

      <svg className="succulent" viewBox="0 0 120 200">
        <path d="M24 120 L10 196 M96 120 L110 196 M40 120 L34 196 M80 120 L86 196" stroke="#d9a877" strokeWidth="6" strokeLinecap="round" />
        <rect x="14" y="112" width="92" height="12" rx="6" fill="#e5b98a" />
        <path d="M60 72 C50 40 54 20 60 8 C66 20 70 40 60 72 Z" fill="#8cbc68" />
        <path d="M58 76 C36 58 26 40 24 26 C38 32 52 48 58 76 Z" fill="#7fb05e" />
        <path d="M62 76 C84 58 94 40 96 26 C82 32 68 48 62 76 Z" fill="#7fb05e" />
        <path d="M56 82 C34 78 20 68 14 58 C30 58 46 66 56 82 Z" fill="#97c574" />
        <path d="M64 82 C86 78 100 68 106 58 C90 58 74 66 64 82 Z" fill="#97c574" />
        <path d="M26 76 H94 L88 112 H32 Z" fill="#b39be9" />
        <rect x="22" y="70" width="76" height="12" rx="6" fill="#c7b3f3" />
      </svg>
    </div>
  );
}

export default function ProfileLayout({ title, subtitle, children }) {
  return (
    <div className="room">
      <RoomDecor />

      <div className="stage">
        <img className="girl-img girl-back" src={girl} alt="" />

        <main className="tall-card">
          <AppTile />
          <h1 className="hello">{title}</h1>
          <p className="hello-sub">{subtitle}</p>
          {children}
        </main>

        <img className="girl-img girl-front" src={girl} alt="" aria-hidden="true" />
      </div>
    </div>
  );
}
