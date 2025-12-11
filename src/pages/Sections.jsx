import Home from "../sections/Home";
import AboutSection from "../sections/About";
import ServicesSection from "../sections/Services";
import PortfolioSection from "../sections/Portfolio";
import TeamSection from "../sections/Team";
import FrequentlySection from "../sections/Frequently";
import ContactSection from "../sections/Contact";

export default function Sections(){
    return(
        <>
            <Home/>
            <AboutSection/>
            <ServicesSection/>
            <PortfolioSection/>
            <TeamSection/>
            <FrequentlySection/>
            <ContactSection/>
        </>
    )
}