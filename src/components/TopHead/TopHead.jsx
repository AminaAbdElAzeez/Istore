import "./TopHead.css";

function TopHead({ sub, title }) {
  return (
    <div className="top-head">
      <h4 className="sub-title">{sub}</h4>
      <h2 className="title">{title}</h2>
    </div>
  );
}

export default TopHead;
