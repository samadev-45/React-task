const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: "lightcoral",
        color: "white",
        padding: "1rem 0",
      }}
    >
      <h2 style={{ margin: 0, textAlign: "center" }}>My Website</h2>
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          justifyContent: "center",
          gap: "5rem",
          padding: 0,
          margin: "1rem 0 0 0",
        }}
      >
        <li>Home</li>
        <li>News</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default Navbar;
