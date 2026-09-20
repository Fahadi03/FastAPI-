// Turns any axios failure into one sentence a person can act on.
export default function getErrorMessage(error, fallback = "Something went wrong. Please try again.") {
  if (error?.code === "ECONNABORTED") {
    return "The server took too long to answer. It may be waking up - please try again in a moment.";
  }

  if (!error?.response) {
    // Request never reached the server: offline, server down, or CORS.
    return "Cannot reach the server. Check your internet connection and try again.";
  }

  const { status, data } = error.response;
  const detail = typeof data?.detail === "string" ? data.detail : null;

  if (detail) {
    return detail;
  }

  if (status === 401) {
    return "Your session has expired. Please log in again.";
  }

  if (status === 422) {
    return "Please check the details you entered.";
  }

  if (status >= 500) {
    return "The server had a problem. Please try again in a moment.";
  }

  return fallback;
}
