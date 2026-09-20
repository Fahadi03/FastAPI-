import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  // The free backend sleeps when idle and can take ~50s to wake up, so allow
  // a long wait - but not forever, or the button would spin with no answer.
  timeout: 60000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// AuthContext registers what should happen when a token stops being accepted.
let onUnauthorized = null;

export function setUnauthorizedHandler(handler) {
  onUnauthorized = handler;
}

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const url = error.config?.url ?? "";
    const isLoginAttempt = url.includes("/login") || url.includes("/register");

    // A token we sent was rejected: it expired, or the account is gone. Drop it
    // and let the app send the user back to the login page.
    if (status === 401 && !isLoginAttempt && localStorage.getItem("token")) {
      localStorage.removeItem("token");
      onUnauthorized?.();
    }

    return Promise.reject(error);
  },
);

export default api;
