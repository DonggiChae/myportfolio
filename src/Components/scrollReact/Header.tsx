import React from "react"
import { Link } from "react-scroll"


const Header = () => {
  return (
    <div className="w-1/10 fixed mt-5 font-semibold text-lg right-20">
      <div className="flex flex-col gap-y-5">
        <Link to="Home" spy={true} smooth={true}>
          <span>Home</span>
        </Link>
        <Link to="About" spy={true} smooth={true}>
          <span>About</span>
        </Link>
        <Link to="Skills" spy={true} smooth={true}>
          <span>Skills</span>
        </Link>
        <Link to="Contact" spy={true} smooth={true}>
          <span>Contact</span>
        </Link>
      </div>
    </div>
  )
}

export default Header;