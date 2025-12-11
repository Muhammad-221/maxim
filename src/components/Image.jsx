import { NavLink } from "react-router-dom";

export default function ImageComp({imag}){
    return(
        <div className="item">
            <img src={imag} alt="img"/>
            <div className="icon">
                <i className="fa-solid fa-magnifying-glass-plus"/>
                <NavLink to="/Portfolio Details">
                    <i className="fa-solid fa-paperclip"/>
                </NavLink>
            </div>
        </div>
    )
}