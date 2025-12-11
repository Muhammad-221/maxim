import SectionPortfolio from "../layouts/PortfolioSection";
import ServiceHead from "../layouts/ServiceHeader";

export default function PortfolioDetails(){
    return(
        <>
            <main>
                <ServiceHead title={"Portfolio Details"}/>
            </main>
            <SectionPortfolio/>
        </>
    )
}