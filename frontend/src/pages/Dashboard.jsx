import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="card">
      <h1>Welcome, {user.username}</h1>
      <p className="muted">You are logged in with a JWT token.</p>

      <dl className="details">
        <dt>User ID</dt>
        <dd>{user.id}</dd>

        <dt>Username</dt>
        <dd>{user.username}</dd>

        <dt>Joined</dt>
        <dd>{new Date(user.created_at).toLocaleString()}</dd>
      </dl>

      <button type="button" className="secondary" onClick={logout}>
        Log out
      </button>
    </div>
  );
}
