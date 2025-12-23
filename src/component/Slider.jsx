import { Carousel, Container } from "react-bootstrap";
import logo from "../../public/logo.png";

const caroData = [
  {
    id: 1,
    title: "Carosuel",
    subTitle: "Sub Caro",
    image: logo,
  },
  {
    id: 2,
    title: "Carosuel",
    subTitle: "Sub Caro",
    image: logo,
  },
  {
    id: 3,
    title: "Carosuel",
    subTitle: "Sub Caro",
    image: logo,
  },
  {
    id: 4,
    title: "Carosuel",
    subTitle: "Sub Caro",
    image: logo,
  },
];

function Slider() {
  return (
    <Container fluid>
      <Carousel style={{ height: "100vh" }}>
        {caroData.map((caro) => (
          <Carousel.Item key={caro.id} interval={5000}>
            <img src={caro.image} alt={`caro image ${caro.id}`} />
            <Carousel.Caption>
              <h3 style={{ color: "gold" }}>
                {caro.title}
                {caro.id}
              </h3>
              <p style={{ color: "red" }}>
                {caro.subTitle}
                {caro.id}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default Slider;
