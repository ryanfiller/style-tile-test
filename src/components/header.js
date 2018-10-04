import React from 'react'
import SVG  from 'react-inlinesvg'
import { Link } from 'gatsby'
import logo from "../images/logo-color.svg";

const Header = ({ siteTitle }) => {
  return (
    <header className="site-header">
    <Link to="/" className="site-header__logo">
      <SVG src={logo} />
    </Link>
      {siteTitle}
    </header>
  )
};

export default Header;