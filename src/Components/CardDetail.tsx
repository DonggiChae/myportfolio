import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {  projects, projectDetail} from '../data/data';

const Container = styled(motion.div)`
  background: rgb(219, 219, 219, 0.3);
  position: absolute;
  top:0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 1;
` 


const Article = styled(motion.article)`
  background: #f0efef;
  color: black;
  position: absolute;
  top: 10%; 
  left: 10%;
  width: 80%;
  height: 80%;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  opacity: 1;
  z-index: 10;
`
const Section = styled.section`
  padding: 3%;
`
const Exit = styled.div`
  font-size: 2em;
  margin-left: 90%;
`

const Title = styled.h1`
  padding-bottom: 20px;
  margin-left: 2%;
  font-size: 3em;
  font-weight: 600;
`

const Title2 = styled.h1`
  padding-bottom: 20px;
  margin-left: 2%;
  font-size: 2em;
  font-weight: 600;
`

const Content =styled.p`
  font-size: 1.5em;
  display: flex;
  margin-left: 2%;
  padding-bottom: 20px;
  flex-direction: column;
`
const cardDetailVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15 }
  },
}


function CardDetail({ selectedId }: { selectedId: string , layoutId: string}) {
  const project = projects.find(project => project.id === selectedId) as projectDetail;
  

  return(
    <Container transition={{ duration: 0.15, delay: 0.1 }}>
      <Link to="/myportfolio/skills"></Link>
      <Article 
      variants={cardDetailVariants} 
      initial='hidden'
      animate='visible'
      exit='exit'
      transition={{ duration: 0.2, delay: 0.1 }}
      style={{ pointerEvents: "auto" }}
      className="overlay"
      >
        <Section>
          <Link to="/skills">
            <Exit>
              x
            </Exit>
          </Link>
          <Title>
            {project.name}
          </Title>
          <Title2>
            Description
          </Title2>
          <Content>
            {project.description}
          </Content>
          <Title2>
            Stacks
          </Title2>
          <Content>
            {project.stacks}
          </Content>
          <a href={project.github}>
            <Title2>
              Github
            </Title2>
            <Content>
              {project.github}
            </Content>
          </a>
        </Section>
      </Article>
    </Container>
  );
}

export default CardDetail;