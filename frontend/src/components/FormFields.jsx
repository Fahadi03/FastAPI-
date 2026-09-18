import { useState } from "react";

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="8" r="4.2" />
      <path d="M4 20.5c0-4.2 3.6-6.9 8-6.9s8 2.7 8 6.9c0 .6-.4.9-1 .9H5c-.6 0-1-.3-1-.9z" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.5 10V7.6a4.5 4.5 0 0 1 9 0V10h-2.2V7.6a2.3 2.3 0 0 0-4.6 0V10z" />
      <rect x="4.5" y="9.5" width="15" height="12" rx="3" />
    </svg>
  );
}

function EyeIcon({ crossed }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
      {crossed && <path d="M4 4l16 16" />}
    </svg>
  );
}

export function TextField({ id, label, ...inputProps }) {
  return (
    <div className="field">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <span className="field-icon" aria-hidden="true">
        <UserIcon />
      </span>
      <input id={id} placeholder={label} {...inputProps} />
    </div>
  );
}

export function PasswordField({ id, label, ...inputProps }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="field">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <span className="field-icon" aria-hidden="true">
        <LockIcon />
      </span>
      <input id={id} type={visible ? "text" : "password"} placeholder={label} {...inputProps} />
      <button
        type="button"
        className="eye"
        onClick={() => setVisible((current) => !current)}
        aria-label={visible ? "Hide password" : "Show password"}
      >
        <EyeIcon crossed={visible} />
      </button>
    </div>
  );
}
