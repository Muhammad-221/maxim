import { NavLink } from "react-router-dom";

export default function ServiceJobs(){
    return(
        <div className="jobs">
            <div className="track">
                <NavLink to="#" className="actt bold">Web Design</NavLink>
                <NavLink to="#">Software Development</NavLink>
                <NavLink to="#">Product Management</NavLink>
                <NavLink to="#">Graphic Design</NavLink>
                <NavLink to="#">Marketing</NavLink>
            </div>
            <div className="data">
                <span>Enim qui eos rerum in delectus</span>
                <p>
                    Nam voluptatem quasi numquam quas fugiat ex temporibus quo est. Quia aut quam quod facere ut non occaecati ut aut. Nesciunt mollitia illum tempore corrupti sed eum reiciendis. Maxime modi rerum.
                </p>
            </div>
        </div>
    )
}