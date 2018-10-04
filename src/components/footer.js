import React from 'react'
import SVG  from 'react-inlinesvg'
import { Link } from 'gatsby'
import rocket from "../images/rocket-color.svg";

const Footer = ({ siteTitle }) => {
  return (
    <footer className="site-footer">
        <Link to="/" >
            See All
        </Link>
        <SVG src={rocket} className="site-footer__rocket" />
    </footer>
  )
};

export default Footer;