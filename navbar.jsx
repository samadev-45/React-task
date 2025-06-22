const Navbar = () => {
  return (
    <nav style={{ color:"white",backgroundColor:"lightcoral",textAlign:"center" }}>
      <h2>My Website</h2>
      <ul style={{listStyleType:"none", display:"flex",justifyContent:"center",gap:"10rem"}}>
        <li>Home</li>
        <li>News</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default Navbar;
