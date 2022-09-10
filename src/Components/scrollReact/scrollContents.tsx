import React from "react"
import styled from "styled-components"
import Home from "../Home";
import AboutDetail from "../AboutDetail";
import Skills from "../Skills";
import Contact from "../Contact";


function ScrollContents() {
  return (
    <div className="">
      <div className="h-1/3" id="Home">
        <Home />
      </div>
      <div className="h-1/3" id="About">
        <AboutDetail />
      </div>
      <div className="h-1/3" id="Skills">
        <Skills />
      </div>
      <div className="h-1/3" id="Contact">
        <Contact />
      </div>
    </div>
  )
}

export default ScrollContents;