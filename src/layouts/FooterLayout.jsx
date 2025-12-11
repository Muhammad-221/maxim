import { NavLink } from "react-router-dom";

export default function Footer(){
    return(
        <footer>
            <div className="cont">
                <div className="box-1">
                    <div className="titl">
                        <NavLink to="#">Maxim</NavLink>
                    </div>
                    <div className="text">
                        <div className="one">
                            <div>A108 Adam Street</div>
                            <div>New York, NY 535022</div>
                        </div>
                        <div>
                            <div>
                                <span>Phone: </span>
                                +1 5589 55488 55
                            </div>
                            <div>
                                <span>Email: </span>
                                info@example.com
                            </div>
                        </div>
                    </div>
                    <div className="social">
                        <div>
                            <NavLink to="https://www.twitter.com/">
                                <i className="fa-brands fa-x-twitter fa-sm"/>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="https://www.facebook.com/">
                                <i className="fa-brands fa-facebook fa-sm"/>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="https://www.instagram.com/">
                                <i className="fa-brands fa-instagram fa-sm"/>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="https://www.linkedin.com/">
                                <i className="fa-brands fa-linkedin fa-sm"/>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="box-2">
                    <div>
                        <span>Useful Links</span>
                        <a href="#home">
                            <i className="fa-solid fa-angle-right"/>
                            Home
                        </a>
                        <a href="#about">
                            <i className="fa-solid fa-angle-right"/>
                            About us
                        </a>
                        <a href="#services">
                            <i className="fa-solid fa-angle-right"/>
                            Services
                        </a>
                        <a href="#">
                            <i className="fa-solid fa-angle-right"/>
                            Terms of service
                        </a>
                        <a href="#">
                            <i className="fa-solid fa-angle-right"/>
                            Privacy policy
                        </a>
                    </div>
                    <div>
                        <span>Our Services</span>
                        <NavLink to="#">
                            <i className="fa-solid fa-angle-right"/>
                            Web Design
                        </NavLink>
                        <NavLink to="#">
                            <i className="fa-solid fa-angle-right"/>
                            Web Development
                        </NavLink>
                        <NavLink to="#">
                            <i className="fa-solid fa-angle-right"/>
                            Product Management
                        </NavLink>
                        <NavLink to="#">
                            <i className="fa-solid fa-angle-right"/>
                            Marketing
                        </NavLink>
                        <NavLink to="#">
                            <i className="fa-solid fa-angle-right"/>
                            Graphic Design
                        </NavLink>
                    </div>
                </div>
                <div className="box-3">
                    <div className="text">
                        <span>Our Newsletter</span>
                        <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
                    </div>
                    <div className="search-cont">
                        <input type="search"/>
                        <input type="submit" value="Subscribe"/>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <div className="min">
                        © Copyright 
                        <span>Maxim</span> 
                        All Rights Reserved
                    </div>
                    <div>
                        Designed by 
                        <NavLink to="#">BootstrapMade</NavLink>
                    </div>
                </div>
            </div>
        </footer>
    )
}