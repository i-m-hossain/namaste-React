const Title = () => {
  return (
    <img
      className="logo"
      src="https://play-lh.googleusercontent.com/1keEOkk2GrxZpaRH73-vDqpAXhJNU9tbP5mfk82X6YxH8EhnU2JPOb5w1FLUJiqkEg"
      alt="FOOD-PANDA"
    />
  );
};

const Header = () => {
  return (
    <nav className="navbar">
      <Title />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Login</li>
        <li>Cart</li>
      </ul>
    </nav>
  );
};

export default Header;
