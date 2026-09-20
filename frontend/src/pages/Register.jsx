import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import api from "../api/client";
import getErrorMessage from "../lib/errorMessage";
import AuthLayout from "../components/AuthLayout";
import { PasswordField, TextField } from "../components/FormFields";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      await api.post("/register", { username, password });
      navigate("/login");
    } catch (err) {
      setError(getErrorMessage(err, "Registration failed"));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AuthLayout title="Join us" subtitle="Create an account to begin">
      <form onSubmit={handleSubmit}>
        <TextField
          id="username"
          label="Username"
          autoComplete="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          minLength={3}
          maxLength={50}
          required
        />

        <PasswordField
          id="password"
          label="Password (min 6)"
          autoComplete="new-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          minLength={6}
          maxLength={72}
          required
        />

        {error && <p className="error">{error}</p>}

        <button type="submit" className="primary" disabled={submitting}>
          {submitting ? "Creating..." : "Sign Up"}
        </button>
      </form>

      <p className="switch">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </AuthLayout>
  );
}
