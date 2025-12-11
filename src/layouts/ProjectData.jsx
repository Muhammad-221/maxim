import { NavLink } from "react-router-dom";

export default function ProjectInformation(){
    return(
        <div className="inform">
            <div className="proj">
                <div className="tit">Project information</div>
                <div>
                    <span>Category:</span>
                    <p> Web design</p>
                </div>
                <div>
                    <span>Client:</span>
                    <p>ASU Company</p>
                </div>
                <div>
                    <span>Project date:</span>
                    <p> 01 March, 2020</p>
                </div>
                <div>
                    <span>Project URL:</span>
                    <p><NavLink to="#"> www.example.com</NavLink></p>
                </div>
            </div>
            <div className="data">
                <span>Exercitationem repudiandae officiis neque suscipit</span>
                <p>
                    Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                </p>
            </div>
        </div>
    )
}