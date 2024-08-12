import "./LeftAccount.css";

function LeftAccount() {
  return (
    <div className="left-account">
      <h4 className="left-account-title">Manage My Account</h4>
      <ul className="left-account-list">
        <li>My Profile</li>
        <li>Address Book</li>
        <li>My Payment Options</li>
      </ul>
      <h4 className="left-account-title">My Orders</h4>
      <ul className="left-account-list">
        <li>My Returns</li>
        <li>My Cancellations</li>
      </ul>
      <h4 className="left-account-title">My WishList</h4>
    </div>
  );
}

export default LeftAccount;
