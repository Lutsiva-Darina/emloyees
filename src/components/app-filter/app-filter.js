import { Component } from "react";
import "./app-filter.css";
class AppFilter extends Component{
    constructor(props){
        super(props)
        this.state={
            filter:""
        }
    }
    filterClick = (e)=>{
        let currentFilter = e.currentTarget.getAttribute("data-toggle");
        console.log(currentFilter);
        this.props.updateFilter(currentFilter);
    }
    render(){
        return(
            <div className="btn-group">
            <button type="button"
                    className="btn btn-light" data-toggle = "all" onClick={this.filterClick}>
                    Все сотрудники
            </button>
            <button type="button"
                    className="btn btn-outline-light" data-toggle = "increase" onClick={this.filterClick}>
                    На повышение
            </button>
            <button type="button"
                    className="btn btn-outline-light" data-toggle = "moreThen1000" onClick={this.filterClick}>
                    З/П больше 1000$
            </button>
        </div> 
        )
    }
}
export default AppFilter;