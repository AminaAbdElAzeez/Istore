import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import TopBtn from "../../components/TopBtn/TopBtn";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import "./Root.css";

function Root() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  return (
    <section className="root">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Header />
          <main>
            <Outlet />
            <TopBtn />
          </main>
          <Footer />
        </>
      )}
    </section>
  );
}

export default Root;
