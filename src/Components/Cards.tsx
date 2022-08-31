import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projectDetail } from "../data/data";

const Article = styled(motion.div)`
  background: rgb(240, 239, 239, 0);
  color: black;
  max-width: 30vw;
  height: 380px;
  overflow: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  border: solid;
  border-width: 0.5em;
  border-color: black;

`
const Section = styled.div`
  width: 100%;
  hight: 100%;
`

const Title = styled.h1`
  position: relative;
  margin-left: 2%;
  font-size: 3em;
  font-weight: 600;
  color: white;
  z-index: 1;
`

const Content =styled.p`
  font-size: 1.5em;
  display: flex;
  flex-direction: column;
`
const Img = styled.img`
  max-width: 100%;
  height: auto;
`

function Cards(props: projectDetail) {

  return(
    <Article>
      <Link to={props.id}>
      <Section>
        <Title>
            {props.name}
        </Title>
      </Section>
      <Img src={require(`../data/img/${props.img}`)}/>
      </Link>
    </Article>
  );
}

export default Cards;