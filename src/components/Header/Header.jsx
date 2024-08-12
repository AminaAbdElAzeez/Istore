import BottomHeader from "./BottomHeader/BottomHeader";
import TopHeader from "./TopHeader/TopHeader";

function Header() {
  return (
    <header
      style={{
        position: "fixed",
        top: "0px",
        width: "100%",
        zIndex: "9999",
      }}
    >
      <TopHeader />
      <BottomHeader />
    </header>
  );
}

export default Header;
