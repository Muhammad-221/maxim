
export default function TabComp({classN, action, icon, tit, prg}){
    return(
        <div className={classN} onClick={action}>
            <div className="icon">{icon}</div>
            <div className="txt">
                <span>{tit}</span>
                <p>{prg}</p>
            </div>
        </div>
    )
}