import { NavLink } from "react-router-dom";

export default function ListComp({classN, click1, action1, rotate1, click2, action2, rotate2}){
    return(
        <li className={classN} onClick={click1}>
                Dropdown<i className={`fa-solid fa-chevron-down fa-xs ${rotate1}`}/>
            <ul className={`list1 ${action1}`}>
                <li>
                    <NavLink to="#">Dropdown 1</NavLink>
                </li>
                <li 
                    className="deeb" 
                    onClick={(e) =>{
                        e.stopPropagation();
                        click2();
                    }}
                >
                    Deeb Dropdown<i className={`fa-solid fa-chevron-down fa-xs ${rotate2}`}/>
                    <ul className={`list2 ${action2}`}>
                        <li>
                            <NavLink to="#">Deeb Dropdown 1</NavLink>
                        </li>
                        <li>
                            <NavLink to="#">Deeb Dropdown 2</NavLink>
                        </li>
                        <li>
                            <NavLink to="#">Deeb Dropdown 3</NavLink>
                        </li>
                        <li>
                            <NavLink to="#">Deeb Dropdown 4</NavLink>
                        </li>
                        <li>
                            <NavLink to="#">Deeb Dropdown 5</NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to="#">Dropdown 2</NavLink>
                </li>
                <li>
                    <NavLink to="#">Dropdown 3</NavLink>
                </li>
                <li>
                    <NavLink to="#">Dropdown 4</NavLink>
                </li>
            </ul>
        </li>
    )
}