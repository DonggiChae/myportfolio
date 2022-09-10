import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projectDetail } from "../../data/data";

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


const Title = styled.h1`
  position: relative;
  margin-left: 2%;
  font-size: 3em;
  font-weight: 600;
  color: white;
  z-index: 1;
`

const Img = styled.img`
  max-width: 100%;
  height: auto;
`

function Cards(props: projectDetail) {

  return(
    <Article>
      <div className="w-full h-full">
        <Title>
            {props.name}
        </Title>
        <Img src={require(`../../data/img/${props.img}`)}/>
      </div>
    </Article>
  );
}

export default Cards;