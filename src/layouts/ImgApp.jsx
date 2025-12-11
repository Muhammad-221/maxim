import ImageComp from "../components/Image";
import ImgOne from "../assets/images/portfolio/app-1.jpg";
import ImgTwo from "../assets/images/portfolio/app-2.jpg";
import ImgThree from "../assets/images/portfolio/app-3.jpg";

export default function AppImg(){
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