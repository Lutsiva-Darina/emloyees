
import "./app-filter.css";
const  AppFilter =(props)=>{
    let buttons = [
        {name:"all", label:"Все сотрудники"},
        {name:"increase", label:"На повышение"},
        {name:"moreThen1000", label:"З/П больше 1000$"},
    ]
    const filterClick = (e)=>{
        let currentFilter = e.currentTarget.getAttribute("data-toggle");
        props.updateFilter(currentFilter);
    }
    const masButtons = buttons.map(el=>{
        let active = props.filter === el.name;
        const clazz = active ? "btn-light" : "btn-outline-light";
        return(
                <button type="button"
                    className={`btn ${clazz}`} 
                    data-toggle = {el.name} 
                    key = {el.name} 
                    onClick={filterClick} >
                    {el.label}
                </button>
        )
    })

        // console.log(clazz);
        return(
            <div className="btn-group">
            {masButtons}
        </div> 
    )
}

export default AppFilter;