import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';
import { Component } from 'react';
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      data:[
        {id:"0",name:"John Smith", salary:"1000", increase:true, rise:false},
        {id:"1",name:"Anna Jonson", salary:"700", increase:true, rise:false},
        {id:"2",name:"Sava Brown", salary:"1400", increase:false, rise:false},
      ],
      text:"",
      filter:"all"
    }
  }
  deleteItem=(id)=>{
    this.setState(({data})=>{
      let dataNew = data.filter(el=>el.id !== id); // создала новый массив без id, которій совпал
      return{
        data:dataNew
      }
    })
  }
  addNewEmployee = (name, salary)=>{
    const newEmployee={
      id:this.state.data.length,
      name:name,
      salary:salary,
      increase:false,
      rise:false
    }
    if(name.length>3 && salary>0){
        this.setState(({data})=>{
      const newArray = [ ...data, newEmployee ]; // https://qna.habr.com/q/488034
      return{
        data:newArray
      }
    })
    }
    else{
      alert("wrong data")
    }
  
  }

  /***** FOR APP INFO */
  // countCookies = (id)=>{
  //   // this.setState(({data})=>{
  //   //   const index = data.findIndex (el =>el.id === id); // найти индекс элемента с которым буду работать
  //   //   console.log(index);
  //   //   const oldObj = data[index];
  //   //   const newItem = {...oldObj, increase : !oldObj.increase} // если свойство с этим назаванием есть в данных, то так можно изменить свойство
  //   //   let newMas = [...data.splice(0, index), newItem, ...data.splice(index+1)]
  //   //   console.log(newMas)
  //   //   // return{
  //   //   //   data:newMas
  //   //   // }
  //   // })
  //   this.setState(({data})=>({
  //     data:data.map(item=>{ // по правилу мутабельноси создали новый объект, чтобы его изменить
  //       if(item.id === id){
  //         return {...item, increase:!item.increase}
  //       }
  //       return item
  //     })
  //   }))
  // }
  countProps = (id, prop)=>{
    this.setState(({data})=>({
      data:data.map(item=>{
        if(item.id === id){
          return {...item, [prop]:!item[prop]}
        }
        return item
      })
    }))
  }
  searchText = (items, text)=>{
    if(text.length === 0){
      return items
    }
    return items.filter(el=>el.name.indexOf(text) > -1)
  }
  //для поднятия событий 
  updateInput = (text)=>{
    this.setState({
      text:text, //меняю состояние текста в app присваивая ему текст из другой компоненты
    })
  }
  
  //метод для поднятия состояния, чтобі передать фильтр в state
  updateFilter = (filter)=>{
    this.setState({
      filter:filter, //меняю состояние текста в app присваивая ему текст из другой компоненты
    })
  }
  filter = (items,filter)=>{
    if(filter === 'increase'){
      return items.filter(el=>el.increase === true)
    }
    else if (filter === 'moreThen1000'){
      return items.filter(el=>el.salary>1000)
    }
    else{
      return items
    }
  }
  // changeSalary = (text)=>{
  //   console.log(text)
  // }
  render(){
    const {data, text, filter} = this.state;
    let length = data.length;
    let increaseLength = data.filter(el=>el.increase).length;
    let visibleData = this.searchText(data, text);
    let filterData = this.filter(visibleData, filter);
    return(
      <div className="app">
      <AppInfo countLength = {length} increaseLength = {increaseLength}/>

      <div className="search-panel">
          <SearchPanel updateInput = {this.updateInput}/>
          <AppFilter updateFilter = {this.updateFilter} filter ={filter} />
      </div>
      
      <EmployeesList data={filterData} onDeleteApp ={this.deleteItem} countProp = {this.countProps} 
      />
      <EmployeesAddForm addNewEmployee = {this.addNewEmployee}/>
  </div>
    )
  }
}
export default App;
