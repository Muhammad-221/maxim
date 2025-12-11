export default function BarsComp({click, classlist}){
    return(
        <div className="menu">
            <div className="bars">
                <i className={`fa-solid fa-bars ${classlist}`} onClick={click}/>
            </div>
        </div>
    )
}