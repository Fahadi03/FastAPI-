import { Navigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, loading, connectionError, retry } = useAuth();

  if (loading) {
    return <p className="centered">Loading...</p>;
  }

  // We still hold a token but could not reach the server: do not throw the user
  // out to the login page, let them retry once the server is back.
  if (!user && connectionError) {
    return (
      <div className="fallback">
        <div className="fallback-card">
          <h1>Cannot reach the server</h1>
          <p className="error">{connectionError}</p>
          <button type="button" className="primary" onClick={retry}>
            Try again
          </button>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
