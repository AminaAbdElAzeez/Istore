import "./PagenationRoutes.css";

function PagenationRoutes({route,title}) {
  return (
    <div className="pagenation-routes">
      <p>
        <span>{route}</span> / {title}{" "}
      </p>
    </div>
  );
}

export default PagenationRoutes;
