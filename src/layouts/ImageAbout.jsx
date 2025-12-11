import { useState } from "react";
import img1 from "../assets/images/tabs-1.jpg";
import img2 from "../assets/images/tabs-2.jpg";
import img3 from "../assets/images/tabs-3.jpg";
import TabComp from "../components/Tab";

export default function ImageLayout(){
    const [isActiveTabs, setIsActiveTabs] = useState("imgOne")
    const images = {
        imgOne : img1,
        imgTwo : img2,
        imgThree : img3
    }
    
    return(
        <div className="tabs-data">
            <div className="tabs">
                <TabComp
                    classN={`tab1 ${(isActiveTabs === "imgOne" ? "act" : "")}`}
                    action={() => setIsActiveTabs("imgOne")}
                    icon={<i className="fa-solid fa-binoculars"></i>}
                    tit={"Modi sit est dela pireda nest"}
                    prg={"Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"}
                />
                <TabComp
                    classN={`tab2 ${(isActiveTabs === "imgTwo" ? "act" : "")}`}
                    action={() => setIsActiveTabs("imgTwo")}
                    icon={<i className="fa-solid fa-dice-d6"></i>}
                    tit={"Unde praesenti mara setra le"}
                    prg={"Recusandae atque nihil. Delectus vitae non similique magnam molestiae sapiente similique tenetur aut voluptates sed voluptas ipsum voluptas"}
                />
                <TabComp
                    classN={`tab3 ${(isActiveTabs === "imgThree" ? "act" : "")}`}
                    action={() => setIsActiveTabs("imgThree")}
                    icon={<i className="fa-regular fa-sun"></i>}
                    tit={"Pariatur explica nitro dela"}
                    prg={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Debitis nulla est maxime voluptas dolor aut"}
                />
            </div>
            <div className="image">
                <img src={images[isActiveTabs]} alt="img" id="img"/>
            </div>
        </div>
    )
}