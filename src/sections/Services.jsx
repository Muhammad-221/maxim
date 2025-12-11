import SectionTitle from "../components/Title";
import ButtonComp from "../components/button";

export default function ServicesSection(){

    return(
        <section id="services" className="services">
            <SectionTitle 
                title={"Services"}
                prg={"ecessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"}
            />
            <div className="servdata">
                <ButtonComp
                    classN={"serv1"}
                    icon={<i className="fa-solid fa-tower-broadcast"></i>}
                    title={"Nesciunt Mete"}
                    prag={"Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur."}
                />
                <ButtonComp
                    classN={"serv2"}
                    icon={<i className="fa-solid fa-tower-broadcast"></i>}
                    title={"Eosle Commodi"}
                    prag={"Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem."}
                />
                <ButtonComp
                    classN={"serv3"}
                    icon={<i className="fa-solid fa-display"></i>}
                    title={"Ledo Markt"}
                    prag={"Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti."}
                />
                <ButtonComp
                    classN={"serv4"}
                    icon={<i className="fa-regular fa-square"></i>}
                    title={"Asperiores Commodi"}
                    prag={"Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque."}
                />
                <ButtonComp
                    classN={"serv5"}
                    icon={<i className="fa-regular fa-calendar-minus"></i>}
                    title={"Velit Doloremque."}
                    prag={"Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore."}
                />
                <ButtonComp
                    classN={"serv6"}
                    icon={<i className="fa-regular fa-message"></i>}
                    title={"Dolori Architecto"}
                    prag={"Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim."}
                />
            </div>
        </section>
    )
}