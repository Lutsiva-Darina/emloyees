import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data,onDeleteApp, countProp}) => {
    const elements = data.map(el=>{
        return(
            <EmployeesListItem name={el.name} salary={el.salary} increase = {el.increase} rise = {el.rise} key={el.id}
            onDeleteList={()=>onDeleteApp(el.id)} countProp = {(e)=>countProp(el.id, e.currentTarget.getAttribute("data-toggle"))}/>
        )
    }) 
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;