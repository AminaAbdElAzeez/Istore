import LeftAccount from "../../components/LeftAccount/LeftAccount";
import PagenationRoutes from "../../components/PagenationRoutes/PagenationRoutes";
import RightAccount from "../../components/RightAccount/RightAccount";
import "./Account.css";

function Account() {
  return (
    <section className="account">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <PagenationRoutes route="Home /" title="My Account" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <LeftAccount />
          </div>
          <div className="col-lg-8">
            <RightAccount />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Account;
