import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { useRecoilState } from "recoil";
import { isAboutOpenAtom } from "../Atoms/atoms";
import { Iaboutme, aboutMe } from "../data/data";


const Article = styled(motion.article)`
  background: #f0efef;
  border-radius: 30px;
  color: black;
  font-family: 'Noto Sans KR', sans-serif;
  width: 100%;
  height: 600px;
  overflow: auto;
  margin-top: 100px;
  &::-webkit-scrollbar {
    display: none;
  }

`
const Section = styled.section`
  padding: 3%;
`

const ExitButton = styled.button`
  border: 0;
  border-radius: 30px;
  font-size: 1.5em;
  margin-top: 1%;
  margin-left: 90%;
  position: sticky;
  top: 20px;
`

const Title = styled.div`
  padding-bottom: 20px;
  margin-left: 2%;
  font-size: 3em;
  font-weight: 600;
`
const Title2 = styled.div`
  padding-bottom: 20px;
  margin-left: 2%;
  font-size: 2em;
  font-weight: 500;
`

const Content =styled.p`
  font-size: 1.5em;
  display: flex;
  flex-direction: column;
`
const aboutDetailVariants = {
  hidden: {
    scale: 0.4,
    x : - 200,
  },
  visible: {
    scale: 1,
    x: 0,
  },
  exit: {
    scale: 0,
  },
}


function AboutDetail() {
  const [isAboutOpen , setAboutOpen] = useRecoilState<boolean>(isAboutOpenAtom);
  const toggleAbout = () => setAboutOpen((prev: boolean) => !prev);

  return(
    <Article
      variants={aboutDetailVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 1 }}
    >
      <ExitButton onClick={toggleAbout}>
        <FontAwesomeIcon icon={faCircleXmark} />
      </ExitButton>
      <Section>
        <Title>
          About Me
        </Title>
        <Content>
          {aboutMe.simpleCoverLetter}
        </Content>
      </Section>
      <Section>
        <Title2>
          Position
        </Title2>
        <Content>
          {aboutMe.position}
        </Content>
      </Section>
      <Section>
        <Title2>
          Skills
        </Title2>
        <Content>
          {aboutMe.skills}
        </Content>
      </Section>
    </Article>
  );
}

export default AboutDetail;