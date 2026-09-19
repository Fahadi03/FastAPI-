import Decorations from "./Decorations";
import Mascot from "./Mascot";

function Sparks({ side }) {
  return (
    <svg className={`spark spark-${side}`} viewBox="0 0 20 30" aria-hidden="true">
      <g stroke="#f4d35e" strokeWidth="3.5" strokeLinecap="round">
        <path d="M16 5 L8 2" />
        <path d="M16 15 L5 15" />
        <path d="M16 25 L8 28" />
      </g>
    </svg>
  );
}

export default function AuthLayout({ title, subtitle, art = <Mascot />, children }) {
  return (
    <div className="scene">
      <Decorations />

      <main className="panel">
        <svg className="heart" viewBox="0 0 32 28" aria-hidden="true">
          <path
            d="M16 27 C6 19 1 14 1 8.5 A7.5 7.5 0 0 1 16 5 A7.5 7.5 0 0 1 31 8.5 C31 14 26 19 16 27 Z"
            fill="#f28b9c"
          />
        </svg>

        <h1 className="title">
          <Sparks side="left" />
          {title}
          <Sparks side="right" />
        </h1>
        <p className="subtitle">{subtitle}</p>

        {art}

        <div className="form-card">{children}</div>
      </main>
    </div>
  );
}
