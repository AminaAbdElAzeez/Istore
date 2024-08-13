import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import LeftForm from "../../components/LeftForm/LeftForm";
import image from "../../assets/Icon-Google.png";
import "./SignUp.css";
import { AuthContext } from "../../AuthContext/AuthContext";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { signUp } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    try {
      await signUp(formData);
      navigate("/login");
    } catch (error) {
      console.error("Sign up failed:", error);
      setError("Failed to sign up. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="sign-up">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <LeftForm />
          </div>
          <div className="col-lg-5">
            <div className="sign-up-form">
              <h2 className="sign-up-title">Create an account</h2>
              <p className="sign-up-desc">Enter your details below</p>
              <form className="sign-form" onSubmit={handleSignUp}>
                <input
                  type="text"
                  placeholder="Name..."
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  placeholder="Email..."
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
                <button
                  type="submit"
                  className="sign-up-submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing up..." : "Create Account"}
                </button>
                <button type="button" className="sign-up-google">
                  <img src={image} alt="google" />
                  Sign up with Google
                </button>
                <p className="sign-up-have-account">
                  Already have an account? <Link to="/login">Log in</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
