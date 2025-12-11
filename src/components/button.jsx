import { NavLink } from "react-router-dom";

export default function ButtonComp({classN, icon, title, prag}){
    return(
        <NavLink to="/Service Details" className={classN}>
            <div>
                {icon}
            </div>
            <div className="serv">
                <h4>{title}</h4>
                <p>{prag}</p>
                <span>Learn More<i className="fa-solid fa-arrow-right"/></span>
            </div>
        </NavLink>
    )
}