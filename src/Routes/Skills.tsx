import styled from "styled-components";
import { AnimatePresence, LayoutGroup} from "framer-motion";
import { useParams} from "react-router-dom";
import Carousel from "../Components/carousel";
import CardDetail from "../Components/CardDetail";


const Wrapper = styled.div`
  background: black;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenterCarousel = styled.div`
  padding-top: 10%;
  width: 95%;
`;



function Skills() {
  const { id } = useParams();

  return(
  <Wrapper>
    <CenterCarousel>
      <LayoutGroup>
        <Carousel />
        <AnimatePresence>
          {id && <CardDetail selectedId={id} layoutId={id}/>}
        </AnimatePresence>
      </LayoutGroup>
    </CenterCarousel>
  </Wrapper>
  );
};
export default Skills;