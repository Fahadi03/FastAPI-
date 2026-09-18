import AuthLayout from "../components/AuthLayout";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <AuthLayout title={`Hi, ${user.username}`} subtitle="You're logged in">
      <dl className="details">
        <dt>User ID</dt>
        <dd>{user.id}</dd>

        <dt>Username</dt>
        <dd>{user.username}</dd>

        <dt>Joined</dt>
        <dd>{new Date(user.created_at).toLocaleString()}</dd>
      </dl>

      <button type="button" className="primary" onClick={logout}>
        Log out
      </button>
    </AuthLayout>
  );
}
