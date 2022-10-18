import { Component } from 'react/cjs/react.development';
import './employees-add-form.css';
class EmployeesAddForm extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
            salary:""
        }
    }
    onValueChange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.addNewEmployee(this.state.name, this.state.salary);

    }
    render(){
        const {name,salary} = this.state;
        return(
            <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex" onSubmit={this.onSubmit}>
                <input type="text"
                    className="form-control new-post-label"
                    placeholder={name} 
                    onChange={this.onValueChange}
                    value={name} //this.state.name
                    name="name"/>
                <input type="number"
                    className="form-control new-post-label"
                    placeholder={salary}
                    onChange={this.onValueChange} 
                    value={salary}
                    name="salary"/>

                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
        )
    }
}
export default EmployeesAddForm;