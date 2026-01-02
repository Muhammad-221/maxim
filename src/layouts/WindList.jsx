import ListComp from "../components/List";
import { useState } from "react";

export default function WindowList({click, classlist}){
    const [isCollabsed1, setIsCollabsed1] = useState(false);
    const [isCollabsed2, setIsCollabsed2] = useState(false);
    const changeCollabse1 = () => setIsCollabsed1(prev => !prev);
    const changeCollabse2 = () => setIsCollabsed2(prev => !prev);
    return(
        <div className={`window-list ${classlist}`}>
            <div className="close">
                <i className="fa-solid fa-xmark" onClick={click}/>
            </div>
            <ul className="lists">
                <a href="#home" onClick={click}>Home</a>
                <a href="#about" onClick={click}>About</a>
                <a href="#services" onClick={click}>Services</a>
                <a href="#portfolio" onClick={click}>Portfolio</a>
                <a href="#team" onClick={click}>Team</a>
                <ListComp 
                    classN={"drop1"} 
                    click1={changeCollabse1} 
                    rotate1={isCollabsed1 ? "ro" : "hr"}
                    action1={isCollabsed1 ? "hs" : "hidden"} 
                    click2={changeCollabse2}
                    rotate2={isCollabsed2 ? "ro" : "hr"}
                    action2={isCollabsed2 ? "hs" : "hidden"} 
                />
                <a href="#contact" onClick={click}>Contact</a>
            </ul> 
        </div>
    )
}