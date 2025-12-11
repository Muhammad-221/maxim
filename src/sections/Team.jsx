import TeamComp from "../components/Profile";
import SectionTitle from "../components/Title";
import ImgOne from "../assets/images/team/team-1.jpg";
import ImgTwo from "../assets/images/team/team-2.jpg";
import ImgThree from "../assets/images/team/team-3.jpg";
import ImgFour from "../assets/images/team/team-4.jpg";

export default function TeamSection(){
    return(
        <section id="team" className="team">
            <SectionTitle title={"Team"}/>
            <div>
                <TeamComp
                    img={ImgOne}
                    name={"Walter White"}
                    job={"Chief Executive Officer"}
                />
                <TeamComp
                    img={ImgTwo}
                    name={"Sarah Jhonson"}
                    job={"Product Manager"}
                />
                <TeamComp
                    img={ImgThree}
                    name={"William Anderson"}
                    job={"CTO"}
                />
                <TeamComp
                    img={ImgFour}
                    name={"Amanda Jepson"}
                    job={"untant"}
                />
            </div>
        </section>
    )
}