import CallCenterLayout from "./CallCenter";
import ServiceJobs from "./ServiceData";

export default function SectionService(){
    return(
        <section className="div">
            <ServiceJobs/>
            <CallCenterLayout/>
        </section>
    )
}