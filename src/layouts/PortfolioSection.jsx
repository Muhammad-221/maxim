import ImgPortfolio from "../components/PortfolioImg";
import ProjectInformation from "./ProjectData";


export default function SectionPortfolio(){
    return(
        <section className="sect">
            <ImgPortfolio/>
            <ProjectInformation/>
        </section>
    )
}