import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LeftForm from "../../components/LeftForm/LeftForm";
import image from "../../assets/Icon-Google.png";
import "./SignUp.css";
import { AuthContext } from "../../AuthContext/AuthContext";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useContext(AuthContext); // استخدام دالة signUp من AuthContext بدلاً من login
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    // تحقق من صحة بيانات المستخدم
    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // بيانات المستخدم الجديد
    const newUser = {
      name: name,
      email: email,
      password: password,
    };

    try {
      await signUp(newUser); // تسجيل المستخدم
      navigate("/"); // إعادة التوجيه بعد التسجيل
    } catch (error) {
      console.error("Sign up failed:", error);
      alert("Failed to sign up. Please try again.");
    }

    // إعادة تعيين الحقول بعد التسجيل بنجاح (اختياري)
    setName("");
    setEmail("");
    setPassword("");
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="submit" className="sign-up-account">
                  Create Account
                </button>
                <button type="button" className="sign-up-submit">
                  <img src={image} alt="google" />
                  Sign up with Google
                </button>
                <p className="sign-up-have-account">
                  Already have an account? <a href="/login">Log in</a>
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
