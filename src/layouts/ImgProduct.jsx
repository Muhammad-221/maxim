import ImageComp from "../components/Image";
import ImgOne from "../assets/images/portfolio/product-1.jpg";
import ImgTwo from "../assets/images/portfolio/product-2.jpg";
import ImgThree from "../assets/images/portfolio/product-3.jpg";

export default function ProductImg(){
    return(
        <div className="items">
            <ImageComp
                imag={ImgOne}
            />
            <ImageComp
                imag={ImgTwo}
            />
            <ImageComp
                imag={ImgThree}
            />
        </div>
    )
}