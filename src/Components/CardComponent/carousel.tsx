import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards"
import { useRecoilState } from "recoil";
import { isCardStopAtom } from "../../Atoms/atoms";
import styled from "styled-components";
import { projects } from "../../data/data";

const Container = styled.div`
  font-size: 1.2em;
`


function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, 
        display: "white", 
        background: "black" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ 
        ...style, 
        display: "white", 
        background: "black",
        }}
      onClick={onClick}
    />
  );
}


export default function Carousel () {
  const [cardStop , setCardStop] = useRecoilState(isCardStopAtom);
  const toggleCard = () => setCardStop((prev) => !prev);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 3,
    speed: 500,
    swipeToSlide: true,
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
    return (
      <Container>
        <Slider {...settings}>
        {projects.map((card, index) =>
          <Cards {...projects[index]} key={projects[index].id} />
        )}
        </Slider>
      </Container>
  );
};