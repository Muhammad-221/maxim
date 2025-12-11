import SectionTitle from "../components/Title";
import DivideLayout from "../layouts/DivideAbout";
import ImageLayout from "../layouts/ImageAbout";
import UllamcoLayout from "../layouts/UllamcoAbout";

export default function AboutSection(){
    return(
        <section id="about" className="about">
            <SectionTitle 
                title={"About"}
                prg={"ecessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"}
            />
            <UllamcoLayout/>
            <DivideLayout/>
            <ImageLayout/>
        </section>
    )
}