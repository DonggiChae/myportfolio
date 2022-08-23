import { Link, useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import macFace from "../mimoji/macFace.png"

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 20px;
  font-weight: 500;
  padding: 20px 60px;
  color: white;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  margin-right: 25px;
  color: ${(props) => props.theme.white.darker};
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &:hover {
    color: ${(props) => props.theme.white.lighter};
  }
`;


const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  bottom: -5px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.red};
`;


const navVariants = {
  top: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  scroll: {
    backgroundColor: "rgba(0, 0, 0, 1)",
  },
};

interface IForm {
  keyword: string;
}

function Header() {
  const homeMatch = useMatch("/myportfolio/");
  const aboutMatch = useMatch("/myportfolio/about");
  const skillsMatch = useMatch("/myportfolio/skills");
  const skillsIdMatch = useMatch("/myportfolio/skills/:id");
  const contactMatch = useMatch("/myportfolio/contact");
  const navAnimation = useAnimation();
  const { scrollY } = useViewportScroll();
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        navAnimation.start("scroll");
      } else {
        navAnimation.start("top");
      }
    });
  }, [scrollY, navAnimation]);
  return (
    <Nav variants={navVariants} animate={navAnimation} initial={"top"}>
      <Col>
        <Link to='/'>
        <Logo src={macFace}/>
        </Link>
        <Items>
          <Item>
            <Link to="/">
              Home {homeMatch && <Circle layoutId="circle" />}
            </Link>
          </Item>
          <Item>
            <Link to="/about">
              About {aboutMatch && <Circle layoutId="circle" />}
            </Link>
          </Item>
          <Item>
            <Link to="/skills">
              Skills {skillsMatch && <Circle layoutId="circle" />} {skillsIdMatch && <Circle layoutId="circle" />}
            </Link>
          </Item>
          <Item>
            <Link to="/contact">
              Contact {contactMatch && <Circle layoutId="circle" />}
            </Link>
          </Item>
        </Items>
      </Col>
    </Nav>
  );
}

export default Header;