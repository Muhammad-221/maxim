import AlwaysOpenExample from "../components/Accordion";
import SectionTitle from "../components/Title";

export default function FrequentlySection(){
    return(
        <section className="Frequently">
            <SectionTitle 
                title={"Frequently"}
                prg={"ecessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"}
            />
            <AlwaysOpenExample
                num={"0"}
                title={"Non consectetur a erat nam at lectus urna duis?"}
                lorem={"Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non."}
            />
            <AlwaysOpenExample
                num={"1"}
                title={"Feugiat scelerisque varius morbi enim nunc faucibus?"}
                lorem={"Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui."}
            />
            <AlwaysOpenExample
                num={"2"}
                title={"Dolor sit amet consectetur adipiscing elit pellentesque?"}
                lorem={"Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis"}
            />
            <AlwaysOpenExample
                num={"3"}
                title={"Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?"}
                lorem={"Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui."}
            />
            <AlwaysOpenExample
                num={"4"}
                title={"Tempus quam pellentesque nec nam aliquam sem et tortor?"}
                lorem={"Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in"}
            />
            <AlwaysOpenExample
                num={"5"}
                title={"Perspiciatis quod quo quos nulla quo illum ullam?"}
                lorem={"Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed in suscipit sequi. Distinctio ipsam dolore et."}
            />
        </section>
    )
}