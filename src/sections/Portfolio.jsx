import { useState } from "react";
import SectionTitle from "../components/Title";
import AllImg from "../layouts/imgAll";
import AppImg from "../layouts/imgApp";
import BooksImg from "../layouts/ImgBooks";
import BrandingImg from "../layouts/ImgBranding";
import ProductImg from "../layouts/imgProduct";

export default function PortfolioSection(){
    const [isActiveBtn, setIsActiveBtn] = useState("All");
    const veiwImages = () =>{
        if(isActiveBtn === "App"){
            return <AppImg/>
        }
        else if(isActiveBtn === "Product"){
            return <ProductImg/>
        }
        else if(isActiveBtn === "Branding"){
            return <BrandingImg/>
        }
        else if(isActiveBtn === "Books"){
            return <BooksImg/>
        }
        else{
            return <AllImg/>
        }
    }

    return(
        <section id="portfolio" className="portfolio">
            <SectionTitle 
                title={"Portfolio"}
                prg={"ecessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"}
            />
            <div>
                <div className="btn">
                    <button 
                        style={{color: isActiveBtn === "All" ? "rgb(27, 172, 145)" : ""}}
                        onClick={() => setIsActiveBtn("All")}
                    >
                        All
                    </button>
                    <button 
                        style={{color: isActiveBtn === "App" ? "rgb(27, 172, 145)" : ""}}
                        onClick={() => setIsActiveBtn("App")}
                    >
                        App
                    </button>
                    <button 
                        style={{color: isActiveBtn === "Product" ? "rgb(27, 172, 145)" : ""}}
                        onClick={() => setIsActiveBtn("Product")}
                    >
                        Product
                    </button>
                    <button 
                        style={{color: isActiveBtn === "Branding" ? "rgb(27, 172, 145)" : ""}}
                        onClick={() => setIsActiveBtn("Branding")}
                    >
                        Branding
                    </button>
                    <button 
                        style={{color: isActiveBtn === "Books" ? "rgb(27, 172, 145)" : ""}}
                        onClick={() => setIsActiveBtn("Books")}
                    >
                        Books
                    </button>
                </div>
                {veiwImages()}
            </div>
        </section>
    )
}