import { Link } from "react-router-dom";
import "./ErrorPage.css";

function ErrorPage() {
  return (
    <section className="error">
      <h2>404 Not Found</h2>
      <p className="error-desc">
        Your visited page not found. You may go home page.
      </p>
      <Link to="/">Back to Home Page</Link>
    </section>
  );
}

export default ErrorPage;
