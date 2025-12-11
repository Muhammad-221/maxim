import { NavLink } from "react-router-dom";

export default function TeamComp({img, name, job}){
    return(
        <div className="image">
            <img src={img} alt="img"/>
            <div>
                <div className="social">
                    <NavLink to="https://www.twitter.com/"><i className="fa-brands fa-x-twitter fa-sm"/></NavLink>
                    <NavLink to="https://www.facebook.com/"><i className="fa-brands fa-facebook fa-sm"/></NavLink>
                    <NavLink to="https://www.instagram.com/"><i className="fa-brands fa-instagram fa-sm"/></NavLink>
                    <NavLink to="https://www.linkedin.com/"><i className="fa-brands fa-linkedin fa-sm"/></NavLink>
                </div>
                <div className="username">
                    <span>{name}</span>
                    <p>{job}</p>
                </div>
            </div>
        </div>
    )
}