import ImageComp from "../components/Image";
import ImgOne from "../assets/images/portfolio/books-1.jpg";
import ImgTwo from "../assets/images/portfolio/books-2.jpg";
import ImgThree from "../assets/images/portfolio/books-3.jpg";

export default function BooksImg(){
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