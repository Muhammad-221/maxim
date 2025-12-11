import LinksLayout from "../layouts/LinksLayout";
import Footer from "../layouts/FooterLayout";
import ArrowComp from "../components/ArrowUp";
import { useEffect, useState } from "react";

export default function Landing({page}){
    const [isScroll, setsScroll] = useState(false);
    useEffect(() =>{
        const handleScroll = () =>{
            if(window.scrollY > 93){
                setsScroll(true);
            }
            else{
                setsScroll(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () =>{
            window.removeEventListener('scroll', handleScroll);
        }
    },[])

    return(
        <>
            <LinksLayout navScroll={{backgroundColor: isScroll ? "rgba(0,0,0,0.9)" : "rgba(0,0,0,0.8)", transition: ".5s"}}/>
            <ArrowComp scrollUP={{display: isScroll ? "flex" : "none", transition: ".7s"}}/>
            {page}
            <Footer/>
        </>
    )
}