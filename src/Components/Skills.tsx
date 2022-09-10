import styled from "styled-components";
import { AnimatePresence, LayoutGroup} from "framer-motion";
import { useParams} from "react-router-dom";
import CardDetail from "./CardComponent/CardDetail";
import Cards from "./CardComponent/Cards";
import { projects } from "../data/data";

const Wrapper = styled.div`
  background: black;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Noto Sans KR', sans-serif;
  width : 80%;
`;

const CenterCarousel = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`;



function Skills() {


  return(
  <Wrapper>
    <CenterCarousel>
      {projects.map((card, index) =>
          <Cards {...projects[index]} key={projects[index].id} />
        )}
    </CenterCarousel>
  </Wrapper>
  );
};
export default Skills;