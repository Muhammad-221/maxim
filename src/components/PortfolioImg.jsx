import Carousel from 'react-bootstrap/Carousel';
import ImgOne from "../assets/images/portfolio/app-1.jpg";
import ImgTwo from "../assets/images/portfolio/product-1.jpg";
import ImgThree from "../assets/images/portfolio/branding-1.jpg";
import ImgFour from "../assets/images/portfolio/books-1.jpg";

function ImgPortfolio() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img src={ImgOne} alt="img"/>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img src={ImgTwo} alt="img"/>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img src={ImgThree} alt="img"/>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img src={ImgFour} alt="img"/>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImgPortfolio;