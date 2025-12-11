import AppImg from "./imgApp";
import BooksImg from "./ImgBooks";
import BrandingImg from "./ImgBranding";
import ProductImg from "./imgProduct";

export default function AllImg(){
    return(
        <div className="all">
            <AppImg/>
            <ProductImg/>
            <BrandingImg/>
            <BooksImg/>
        </div>
    )
}