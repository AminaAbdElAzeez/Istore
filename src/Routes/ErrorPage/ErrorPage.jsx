import { Link } from "react-router-dom";
import "./ErrorPage.css";
import PagenationRoutes from "../../components/PagenationRoutes/PagenationRoutes";

function ErrorPage() {
  return (
    <section className="error">
      <div className="row">
        <div className="col-lg-12">
          <PagenationRoutes route="Home" title="404Error" />
        </div>
      </div>
      <h2>404 Not Found</h2>
      <p className="error-desc">
        Your visited page not found. You may go home page.
      </p>
      <Link to="/">Back to Home Page</Link>
    </section>
  );
}

export default ErrorPage;
