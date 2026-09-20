import { Component } from "react";

// A render crash anywhere below this component would leave a blank white page.
// This catches it and shows something the user can act on instead.
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Unexpected UI error:", error, info);
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <div className="fallback">
        <div className="fallback-card">
          <h1>Something broke</h1>
          <p className="muted">
            The page ran into an unexpected problem. Reloading usually fixes it.
          </p>
          <button type="button" className="primary" onClick={() => window.location.reload()}>
            Reload the page
          </button>
        </div>
      </div>
    );
  }
}
