import imgOne from "../assets/images/about.jpg";

export default function UllamcoLayout(){
    return(
        <div className="img-data">
            <div className="image">
                <img src={imgOne} alt="about"/>
            </div>
            <div className="data">
                <div className="div-data">
                    <p className="p1">Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="itm1">
                    <div>
                        <i className="fa-solid fa-sitemap" style={{color: "#ffffff"}}/>
                    </div>
                    <div>
                        <span>Ullamco laboris nisi ut aliquip consequat</span>
                        <p>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
                    </div>
                </div>
                <div className="itm2">
                    <div>
                        <i className="fa-solid fa-compress" style={{color: "#ffffff"}}/>
                    </div>
                    <div>
                        <span>Magnam soluta odio exercitationem reprehenderi</span>
                        <p>Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi</p>
                    </div>
                </div>
                <div className="prag">
                    <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
            </div>
        </div>
    )
}