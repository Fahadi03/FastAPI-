import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthLayout from "../components/AuthLayout";
import { PasswordField, TextField } from "../components/FormFields";
import SocialButtons from "../components/SocialButtons";
import { useAuth } from "../context/AuthContext";
import getErrorMessage from "../lib/errorMessage";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      await login(username, password);
      navigate("/");
    } catch (err) {
      setError(getErrorMessage(err, "Login failed"));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AuthLayout title="Welcome" subtitle="Log in to start your journey">
      <form onSubmit={handleSubmit}>
        <TextField
          id="username"
          label="Username"
          autoComplete="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />

        <PasswordField
          id="password"
          label="Password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        {error && <p className="error">{error}</p>}

        <button type="submit" className="primary" disabled={submitting}>
          {submitting ? "Logging in..." : "Login"}
        </button>
      </form>

      <SocialButtons />

      <p className="switch">
        Don&apos;t have an account? <Link to="/register">Sign Up</Link>
      </p>
    </AuthLayout>
  );
}
