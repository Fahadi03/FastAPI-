import ProfileLayout from "../components/ProfileLayout";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <ProfileLayout title={`Hi, ${user.username}!`} subtitle="So happy to see you here">
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
    </ProfileLayout>
  );
}
