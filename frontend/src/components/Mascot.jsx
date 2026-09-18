export default function Mascot() {
  return (
    <svg className="mascot" viewBox="0 0 240 180" aria-hidden="true">
      <defs>
        <radialGradient id="mascot-skin" cx="45%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#ffe8d9" />
          <stop offset="100%" stopColor="#f5c7aa" />
        </radialGradient>
        <linearGradient id="mascot-hoodie" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c8b4f2" />
          <stop offset="100%" stopColor="#9d84da" />
        </linearGradient>
        <linearGradient id="mascot-hair" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8d5d3f" />
          <stop offset="100%" stopColor="#5b3823" />
        </linearGradient>
      </defs>

      <path d="M44 180 C44 142 74 124 120 124 C166 124 196 142 196 180 Z" fill="url(#mascot-hoodie)" />

      <ellipse cx="120" cy="80" rx="62" ry="58" fill="url(#mascot-hair)" />
      <circle cx="120" cy="20" r="22" fill="url(#mascot-hair)" />
      <path d="M104 26 Q120 14 136 26" stroke="#a8765a" strokeWidth="3" fill="none" strokeLinecap="round" />

      <ellipse cx="120" cy="88" rx="50" ry="46" fill="url(#mascot-skin)" />
      <path
        d="M68 76 C76 36 164 30 173 76 C152 60 134 54 121 63 C104 52 86 60 68 76 Z"
        fill="url(#mascot-hair)"
      />

      <path d="M92 90 Q100 83 108 90" stroke="#3b2a22" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <ellipse cx="142" cy="89" rx="7" ry="8.5" fill="#3b2a22" />
      <circle cx="144.5" cy="86" r="2.4" fill="#ffffff" />

      <ellipse cx="91" cy="106" rx="9" ry="5" fill="#f59ab0" opacity="0.55" />
      <ellipse cx="151" cy="106" rx="9" ry="5" fill="#f59ab0" opacity="0.55" />
      <path d="M109 108 Q121 123 133 108 Z" fill="#b8405a" />

      <path
        d="M156 152 Q160 134 166 124"
        stroke="#b39de8"
        strokeWidth="18"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="166" cy="120" rx="13" ry="10.5" fill="url(#mascot-skin)" />

      <ellipse cx="74" cy="168" rx="36" ry="14" fill="url(#mascot-hoodie)" />
      <ellipse cx="166" cy="168" rx="36" ry="14" fill="url(#mascot-hoodie)" />
      <ellipse cx="98" cy="170" rx="11" ry="8" fill="url(#mascot-skin)" />
    </svg>
  );
}
