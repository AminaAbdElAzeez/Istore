import { useState, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LeftForm from "../../components/LeftForm/LeftForm";
import "./LoginIn.css";
import { AuthContext } from "../../AuthContext/AuthContext";

function LoginIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      setError("");

      if (!formData.email || !formData.password) {
        setError("Please fill in all fields.");
        return;
      }

      setIsLoading(true);
      try {
        await login(formData);
        navigate("/");
      } catch (error) {
        console.error("Login failed:", error);
        setError("Failed to login. Please try again.");
      } finally {
        setIsLoading(false);
      }
    },
    [formData, login, navigate]
  );

  return (
    <section className="sign-up">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <LeftForm />
          </div>
          <div className="col-lg-5">
            <div className="login-in-form">
              <h2 className="sign-up-title">Log in to Exclusive</h2>
              <p className="sign-up-desc">Enter your details below</p>
              <form className="login-form" onSubmit={handleLogin}>
                <input
                  type="email"
                  placeholder="Email or phone Number..."
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  placeholder="Password..."
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {error && <p className="error-message">{error}</p>}
                <div className="login-btn">
                  <button type="submit" className="login" disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Login in"}
                  </button>
                  <a className="forget-password" href="/#">
                    Forget Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginIn;
