import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { useRecoilState } from "recoil";
import { isAboutOpenAtom } from "../Atoms/atoms";
import { Iaboutme, aboutMe } from "../data/data";


const Section = styled.section`
  padding: 3%;
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
    <div className="text-white font-mono max-h-screen mr-56">
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
    </div>
  );
}

export default AboutDetail;