import { NavLink } from "react-router-dom";

export default function DataCenter(){
    return(
        <div className="txt-cntr">
            <h2>Welcome to Our Maxim</h2>
            <p>We are team of talented designers making websites with Bootstrap</p>
            <NavLink to="#">Get Started</NavLink>
        </div>
    )
}