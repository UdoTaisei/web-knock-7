import { Link } from "react-router-dom";
function Header() {
  return (
    <header style={{ padding: "10px", backgroundColor: "#eee" }}>
      <h1>ヘッダー</h1>
    
        <nav style={{ display: "flex", gap: "10px" }}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
    </header>
  );
}

export default Header;
