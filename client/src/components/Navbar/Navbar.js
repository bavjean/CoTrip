import React from 'react';
import "./Navbar.css";
import Logo from "../Logo/Logo"
import Burger from "../Burger/Burger"
import ProfilePicture from "../ProfilePicture/ProfilePicture"

// Function based React Component
const Navbar = (props) => {

  // Default Class to apply to Component
  let classList = `Navbar`;
  let menuShow = false;

  const DisplayMenu = () => {
    menuShow = !menuShow;
  }

  return (
    <div className={classList}>
      <div className="Navbar__logo">
        <Logo clickable to="/route" />
      </div>
      <ProfilePicture type="small" link="#" image={Image} />
      <div className="Navbar__burger">
        <Burger menuShow="DisplayMenu" />
      </div>
    </div>
  );
}

export default Navbar;
