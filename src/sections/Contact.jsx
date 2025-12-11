import SectionTitle from "../components/Title";

export default function ContactSection(){
    return(
        <section id="contact" className="contact">
            <SectionTitle 
                title={"Contact"}
                prg={"ecessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"}
            />
            <div className="data">
                <div className="data-conect">
                    <div>
                        <div className="icon">
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div>
                            <span>Address</span>
                            <p>A108 Adam Street, New York, NY 535022</p>
                        </div>
                    </div>
                    <div>
                        <div className="icon">
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <div>
                            <span>Call Us</span>
                            <p>+1 5589 55488 55</p>
                        </div>
                    </div>
                    <div>
                        <div className="icon">
                            <i className="fa-regular fa-envelope"></i>
                        </div>
                        <div>
                            <span>Email Us</span>
                            <p>info@example.com</p>
                        </div>
                    </div>
                    <div className="map">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d197194.43049343748!2d-73.99263646810613!3d40.74030433648756!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown.%20Conference%20Center!5e0!3m2!1sen!2sus!4v1748294383457!5m2!1sen!2sus"
                            width="100%" 
                            height="100%" 
                            border ="0" 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
                <div className="data-personal">
                    <form action="">
                        <div className="ne">
                            <div>
                                <p>Your Name</p>
                                <input type="text"/>
                            </div>
                            <div>
                                <p>Your Email</p>
                                <input type="text"/>
                            </div>
                        </div>
                        <div>
                            <p>Subject</p>
                            <input type="text"/>
                        </div>
                        <div>
                            <p>Message</p>
                            <textarea name="message" id=""></textarea>
                        </div>
                        <button>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}