export default function Mascot() {
  return (
    <svg className="mascot" viewBox="0 0 260 214" aria-hidden="true">
      <defs>
        <radialGradient id="mascot-skin" cx="42%" cy="38%" r="70%">
          <stop offset="0%" stopColor="#ffeadf" />
          <stop offset="70%" stopColor="#fbd3bd" />
          <stop offset="100%" stopColor="#f0b99c" />
        </radialGradient>
        <linearGradient id="mascot-hair" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#8e5c3d" />
          <stop offset="55%" stopColor="#6e4329" />
          <stop offset="100%" stopColor="#50301c" />
        </linearGradient>
        <linearGradient id="mascot-hoodie" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#cdbaf5" />
          <stop offset="100%" stopColor="#9c82dc" />
        </linearGradient>
        <linearGradient id="mascot-iris" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1f130c" />
          <stop offset="60%" stopColor="#3d2415" />
          <stop offset="100%" stopColor="#7b4b2c" />
        </linearGradient>
        <clipPath id="mascot-mouth">
          <path d="M115 137 Q130 139 145 137 Q144 156 130 157 Q116 156 115 137 Z" />
        </clipPath>
      </defs>

      {/* Hoodie body */}
      <path d="M36 214 C36 176 72 152 130 152 C188 152 224 176 224 214 Z" fill="url(#mascot-hoodie)" />
      <path d="M64 180 C84 166 106 162 128 162" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="6" strokeLinecap="round" fill="none" />

      <g transform="rotate(7 130 118)">
        {/* Hair behind the face, falling past the shoulders */}
        <path
          d="M60 120 C52 72 84 38 130 38 C178 38 208 72 200 122 C198 150 208 170 216 184 C198 192 182 188 172 178 L90 178 C78 190 60 192 44 184 C54 168 62 150 60 120 Z"
          fill="url(#mascot-hair)"
        />
        <path d="M70 150 C66 164 60 174 52 180" stroke="#9a6747" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6" />
        <path d="M192 150 C196 164 202 172 208 180" stroke="#9a6747" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6" />

        {/* Messy bun */}
        <circle cx="114" cy="34" r="27" fill="url(#mascot-hair)" />
        <path d="M92 32 C100 14 126 10 138 24" stroke="#a97553" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.75" />
        <path d="M96 44 C106 30 124 28 136 38" stroke="#4d2d1a" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6" />
        <path d="M136 30 C146 30 150 38 146 46" stroke="#6e4329" strokeWidth="4" strokeLinecap="round" fill="none" />

        {/* Face */}
        <path
          d="M76 110 C76 78 100 64 130 64 C160 64 184 78 184 110 C184 142 162 164 130 164 C98 164 76 142 76 110 Z"
          fill="url(#mascot-skin)"
        />
        <ellipse cx="110" cy="96" rx="22" ry="11" fill="#ffffff" opacity="0.2" />

        {/* Side-swept fringe */}
        <path
          d="M70 108 C66 70 94 50 132 50 C168 50 194 70 190 108 C184 94 174 86 162 82 C168 92 168 100 164 106 C154 90 138 80 118 78 C110 86 102 92 92 96 C96 88 98 82 98 78 C88 86 78 96 70 108 Z"
          fill="url(#mascot-hair)"
        />
        <path d="M100 60 C120 52 150 54 172 72" stroke="#b27e5b" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.65" />
        <path d="M122 78 C138 72 154 76 164 88" stroke="#4d2d1a" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5" />

        {/* Locks framing the face */}
        <path d="M76 98 C64 122 70 150 58 174 C74 170 86 152 86 128 C86 116 83 106 76 98 Z" fill="url(#mascot-hair)" />
        <path d="M184 98 C196 122 192 148 202 170 C186 166 178 148 178 128 Z" fill="url(#mascot-hair)" />

        {/* Brows */}
        <path d="M92 97 Q104 88 118 94" stroke="#5e3822" strokeWidth="5" strokeLinecap="round" fill="none" />
        <path d="M142 93 Q155 86 168 94" stroke="#5e3822" strokeWidth="5" strokeLinecap="round" fill="none" />

        {/* Winking eye */}
        <path d="M94 117 Q106 106 118 116" stroke="#2a1a12" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        <path d="M95 116 L88 113" stroke="#2a1a12" strokeWidth="3" strokeLinecap="round" />
        <path d="M97 112 L91 107" stroke="#2a1a12" strokeWidth="3" strokeLinecap="round" />

        {/* Open eye */}
        <ellipse cx="155" cy="116" rx="11" ry="13.5" fill="url(#mascot-iris)" />
        <circle cx="159" cy="110" r="4.6" fill="#ffffff" />
        <circle cx="151" cy="122" r="2" fill="#ffffff" opacity="0.85" />
        <path d="M141 106 Q155 97 169 105" stroke="#2a1a12" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M168 105 L174 100" stroke="#2a1a12" strokeWidth="3" strokeLinecap="round" />

        {/* Nose and cheeks */}
        <ellipse cx="130" cy="128" rx="3.5" ry="2.2" fill="#e8a283" opacity="0.8" />
        <ellipse cx="99" cy="131" rx="12" ry="7" fill="#f58ea8" opacity="0.5" />
        <ellipse cx="161" cy="133" rx="12" ry="7" fill="#f58ea8" opacity="0.5" />

        {/* Open smile with teeth and tongue */}
        <path d="M115 137 Q130 139 145 137 Q144 156 130 157 Q116 156 115 137 Z" fill="#8f2a3f" />
        <g clipPath="url(#mascot-mouth)">
          <path d="M112 134 H148 V142 Q130 145 112 142 Z" fill="#ffffff" />
          <ellipse cx="132" cy="155" rx="10" ry="6" fill="#f27b8e" />
        </g>
      </g>

      {/* Arm raised to the cheek */}
      <path d="M206 212 C202 190 196 172 186 158" stroke="#ae96e6" strokeWidth="28" strokeLinecap="round" fill="none" />
      <ellipse cx="186" cy="156" rx="15" ry="9" fill="#c9b5f3" />
      <path
        d="M170 150 C166 139 171 127 182 125 C193 123 199 132 197 143 C195 151 187 157 178 156 C174 155 171 153 170 150 Z"
        fill="url(#mascot-skin)"
      />
      <path d="M176 134 Q182 131 188 134" stroke="#e3a283" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <path d="M175 141 Q181 138 188 141" stroke="#e3a283" strokeWidth="1.6" strokeLinecap="round" fill="none" />

      {/* Arm resting on the card */}
      <path d="M18 212 C24 194 58 186 104 192 C114 194 116 208 106 212 Z" fill="url(#mascot-hoodie)" />
      <ellipse cx="96" cy="194" rx="12" ry="7" fill="#c9b5f3" />
      <path
        d="M104 200 C104 192 112 188 120 190 C128 192 130 200 126 205 C122 210 110 210 106 206 Z"
        fill="url(#mascot-skin)"
      />
      <path d="M113 196 Q118 195 122 198" stroke="#e3a283" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}
