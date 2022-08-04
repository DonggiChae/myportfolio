import styled from "styled-components";
import { motion, AnimatePresence} from "framer-motion";
import AboutDetail from "./aboutDetail";
import { useRecoilState } from "recoil";
import { isAboutOpenAtom } from "../atoms";

import whisperMotion from '../mimoji/whisperMotion.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
  background: black;
  overflow-x: hidden;
`;

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Frame = styled.div`
  width: 35%;
  height: 35%;
`
const Mimoji = styled.img`
  width: 95%;
  height: 95%;
  padding-top: 15%;
`

const Article = styled.article`
  color: white;
  width: 35%;
  height: 35%;
  display: flex;
`

const Title = styled.h1`
  padding-bottom: 20px;
`
const Icon = styled(motion.div)`
  height: 150px;
  width: 150px;

`

const iconVariants = {
  hover: {
    scale:1.2,
    x: 30,
    transition: { duration: 0.2 },
  }
}



function About() {
  const [isAboutOpen , setAboutOpen] = useRecoilState<boolean>(isAboutOpenAtom);
  const toggleAbout = () => setAboutOpen((prev: boolean) => !prev);
  return (
    <Wrapper>
      <AnimatePresence>
        <Main>
          <Frame>
            <Mimoji src={whisperMotion} />
          </Frame>
          <Article>
            {isAboutOpen ? (
              <AboutDetail></AboutDetail>
            ): (
              <Icon variants={iconVariants} whileHover="hover" onClick={toggleAbout}>
                <FontAwesomeIcon icon={faCommentDots} size="10x"/>  
              </Icon>
            )}
          </Article>
        </Main>
      </AnimatePresence>
    </Wrapper>
    
  );
}
export default About;