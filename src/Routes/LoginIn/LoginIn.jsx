import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LeftForm from "../../components/LeftForm/LeftForm";
import "./LoginIn.css";
import { AuthContext } from "../../AuthContext/AuthContext";

function LoginIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // تحقق من صحة بيانات تسجيل الدخول
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const userData = {
        email: email,
        password: password,
      };

      await login(userData); // تأكد من أن دالة login هي دالة غير متزامنة إذا كانت تقوم بإجراء عمليات غير متزامنة
      navigate("/"); // إعادة التوجيه للصفحة الرئيسية بعد تسجيل الدخول
    } catch (error) {
      console.error("Login failed:", error);
      alert("Failed to login. Please try again.");
    }

    // إعادة تعيين الحقول بعد تسجيل الدخول بنجاح (اختياري)
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
            <div className="login-in-form">
              <h2 className="sign-up-title">Log in to Exclusive</h2>
              <p className="sign-up-desc">Enter your details below</p>
              <form className="login-form" onSubmit={handleLogin}>
                <input
                  type="email"
                  placeholder="Email or phone Number..."
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
                <div className="login-btn">
                  <button type="submit" className="login">
                    Login in
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
