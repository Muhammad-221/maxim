import { NavLink } from "react-router-dom";

export default function ErrorPage(){
    return(
        <div className="error">
            <div>
                <span>404</span>
                <h3>Page not found</h3>
                <p>Sorry, we couldn’t find the page you’re looking for.</p>
                <NavLink to="/">Go back home</NavLink>
            </div>
        </div>
    )
}