import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const signUp = async (newUserData) => {
    // منطق التسجيل (يرجى تعديل هذا بناءً على متطلباتك)
    // هنا نقوم بتسجيل المستخدم الجديد بدون تسجيل الدخول تلقائيًا
    // على سبيل المثال: إرسال البيانات إلى الخادم
    // const response = await fetch('/api/signup', {
    //   method: 'POST',
    //   body: JSON.stringify(newUserData),
    //   headers: { 'Content-Type': 'application/json' },
    // });
    // const result = await response.json();
    // إعداد بيانات المستخدم في الذاكرة المحلية فقط بعد تسجيل الدخول
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
