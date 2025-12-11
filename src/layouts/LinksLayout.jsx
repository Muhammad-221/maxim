import { useState } from "react";
import BarsComp from "../components/Bars";
import WindowList from "./WindList";
import PageLogo from "../components/Logo";
import ListComp from "../components/List";

export default function LinksLayout({navScroll}){
    const [isCollabsed, setIsCollabsed] = useState(false);
    const changeCollabse = () => setIsCollabsed(prev => !prev);
    
    return(
        <>
            <header style={navScroll}>
                <PageLogo/>
                <nav>
                    <a href="#home" >Home</a>
                    <a href="#about" >About</a>
                    <a href="#services" >Services</a>
                    <a href="#portfolio" >Portfolio</a>
                    <a href="#team" >Team</a>
                    <ListComp classN={"drop"}/>
                    <a href="#contact" >Contact</a>
                </nav>
                <BarsComp
                    click={changeCollabse}
                    classlist={isCollabsed ? "hidden" : ""}
                />
            </header>
            <WindowList
                click={changeCollabse}
                classlist={isCollabsed ? "hs" : ""}
            />
        </>
    )
}