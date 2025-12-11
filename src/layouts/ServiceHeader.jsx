import { NavLink } from "react-router-dom";

export default function ServiceHead({title}){
    return(
        <div className="heed">
            <h2>{title}</h2>
            <div>
                <NavLink to="/">Home </NavLink>
                <div> / </div>
                <span> {title}</span>
            </div>
        </div>
    )
}