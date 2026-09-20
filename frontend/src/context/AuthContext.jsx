import { createContext, useCallback, useContext, useEffect, useState } from "react";

import api, { setUnauthorizedHandler } from "../api/client";
import getErrorMessage from "../lib/errorMessage";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [connectionError, setConnectionError] = useState("");

  const loadUser = useCallback(async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setConnectionError("");

    try {
      const response = await api.get("/me");
      setUser(response.data);
    } catch (err) {
      const status = err.response?.status;

      if (status === 401 || status === 403) {
        // The token really is invalid - forget it.
        localStorage.removeItem("token");
        setUser(null);
      } else {
        // Server asleep, offline, database down: keep the token so the user
        // stays logged in once the problem clears.
        setConnectionError(getErrorMessage(err));
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  useEffect(() => {
    // Any request that gets a 401 mid-session logs the user out here.
    setUnauthorizedHandler(() => {
      setUser(null);
      setConnectionError("");
    });

    return () => setUnauthorizedHandler(null);
  }, []);

  async function login(username, password) {
    const formData = new URLSearchParams();
    formData.append("username", username);
    formData.append("password", password);

    const response = await api.post("/login", formData);

    localStorage.setItem("token", response.data.access_token);

    const me = await api.get("/me");
    setUser(me.data);
    setConnectionError("");
  }

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
    setConnectionError("");
  }

  return (
    <AuthContext.Provider
      value={{ user, loading, connectionError, retry: loadUser, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
