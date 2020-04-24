import React, { Component,Fragment } from 'react'
import TodoItem from './todoItem'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      inputValue:'',
      list:[]
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }
  handleInputChange(e) {
    const value = e.target.value;
    this.setState(()=>({
      inputValue:value
    }))
  }

  handleBtnClick() {
    this.setState((prevState)=>({
      list: [...prevState.list,prevState.inputValue],
      inputValue:""
    }))
  }
  /**
   * react点击事件传参数三种方法
   * 1、this.handleItemDelete.bind(this,index) 定义方法时，事件对象作为最后一个参数传入
   * 2、()=>{this.handleItemDelete(index)} 事件对象作为第二个参数传递
   * 3、handleItemDelete=(index)=>{ return ()=>{}},返回一个函数，事件对象在返回的函数中
   *    
  **/
  // handleItemDelete = (index)=>{
  //   return () =>{
  //     const list = [...this.state.list];
  //     list.splice(index,1);
  //     this.setState({
  //       list:list
  //     })
  //   }
  // }
  handleItemDelete(index) {
    this.setState((prevState)=>{
      const list = [...prevState.list];
      list.splice(index,1);
      return {list};
    })
  }
  
  getTodoItem() {
    return(
      this.state.list.map((item,index)=>{
        return (
          <div key={index}>
            <TodoItem 
              content={item} 
              index={index}
              deleteItem={this.handleItemDelete}
            />
            {
              // <li key={index}
              //   //onClic={this.handleItemDelete.bind(this,index)}
              //   //onClick={()=>this.handleItemDelete(index)}
              //   onClick={this.handleItemDelete(index)}
              //   dangerouslySetInnerHTML={{__html:item}}
              // />
            }
          </div>                                  
        )
      })                    
    )
  }

  render() { 
    return ( 
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          { /**表单受控组件input写法**/ }
          <input id="insertArea"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    );
  }
}
 
export default TodoList;