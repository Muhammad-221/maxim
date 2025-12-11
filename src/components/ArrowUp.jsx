export default function ArrowComp({scrollUP}){
    const scrollTop = () => window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    return(
        <div className="scroll-top" style={scrollUP} onClick={scrollTop}>
            <i className="fa-solid fa-arrow-up"/>
        </div>
    )
}