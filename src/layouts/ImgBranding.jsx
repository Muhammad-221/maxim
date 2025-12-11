import ImageComp from "../components/Image";
import ImgOne from "../assets/images/portfolio/branding-1.jpg";
import ImgTwo from "../assets/images/portfolio/branding-2.jpg";
import ImgThree from "../assets/images/portfolio/branding-3.jpg";

export default function BrandingImg(){
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