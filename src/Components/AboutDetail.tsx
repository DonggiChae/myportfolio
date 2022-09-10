import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { useRecoilState } from "recoil";
import { isAboutOpenAtom } from "../Atoms/atoms";
import { Iaboutme, aboutMe } from "../data/data";



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

function AboutDetail() {
  const [isAboutOpen , setAboutOpen] = useRecoilState<boolean>(isAboutOpenAtom);
  const toggleAbout = () => setAboutOpen((prev: boolean) => !prev);

  return(
    <div className="text-white font-mono max-h-screen mr-56">
      <div className="m-12">
        <Title>
          About Me
        </Title>
        <Content>
          {aboutMe.simpleCoverLetter}
        </Content>
      </div>
      <div className="m-12">
        <Title2>
          Position
        </Title2>
        <Content>
          {aboutMe.position}
        </Content>
      </div>
      <div className="m-12">
        <Title2>
          Skills
        </Title2>
        <Content>
          {aboutMe.skills}
        </Content>
      </div>
    </div>
  );
}

export default AboutDetail;