import './search-panel.css';
import { Component } from 'react';
class SearchPanel extends Component{
    constructor(props){
        super(props)
        this.state={
            text:""
        }
    }
    onChangeInput = (e)=>{
        let text = e.currentTarget.value;
        this.setState({
            text:text // текст из state поменять на  e.currentTarget.value;
        })
        this.props.updateInput(text);
    }
    render(){
        return(
            <div>
                 <input type="text"
                    className="form-control search-input"
                    placeholder="Найти сотрудника"
                    onChange={this.onChangeInput}
                    value={this.state.text}/>
            </div>
        )
    }
}
export default SearchPanel;