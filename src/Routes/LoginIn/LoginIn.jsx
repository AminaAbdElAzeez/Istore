import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // لإعادة التوجيه بعد تسجيل الدخول
import LeftForm from "../../components/LeftForm/LeftForm";
import "./LoginIn.css";
import { AuthContext } from "../../AuthContext//AuthContext";

function LoginIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext); // جلب دالة login من AuthContext
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // هنا يمكن إضافة منطق التحقق من صحة بيانات تسجيل الدخول
    const userData = {
      email: email,
      password: password,
      // يمكن إضافة المزيد من الحقول مثل الاسم الكامل أو الصورة الشخصية
    };

    login(userData); // تسجيل الدخول
    navigate("/"); // إعادة التوجيه للصفحة الرئيسية بعد تسجيل الدخول
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
