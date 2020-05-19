import React, { Component } from 'react';
import { incrementAction,decrementAction } from './store/actions'
//import TodoList from './todoList'

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }

  increment = () => {
    //1.获取select的value值
    let value = this.refs.selectDOM.value*1;
    //2.生成action对象
    let actionObj = incrementAction(value);
    //3.分发action，本质：调用reducer，将action对象传给reducer
    this.props.store.dispatch(actionObj);
  }

  decrement = () => {
    let value = this.refs.selectDOM.value*1;
    this.props.store.dispatch(decrementAction(value));
  }
  handleOddIncrement = () => {
    let value = this.refs.selectDOM.value*1;
    if(value%2!==0){
      this.props.store.dispatch(incrementAction(value))
    }
  }
  handleAsyncIncrement = () => {
    setTimeout(() => {
      this.increment();
    }, 1000);
  }
  render() { 
    //从redux的store对象中获取state的值
    const count = this.props.store.getState();
    return ( 
      <div>
        <h3>counter:{count}</h3>
        <select ref='selectDOM'>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        &nbsp;&nbsp;
        <button onClick={this.increment}> + </button>&nbsp;&nbsp;
        <button onClick={this.decrement}> - </button>&nbsp;&nbsp;
        <button onClick={this.handleOddIncrement}>increment id odd</button>&nbsp;&nbsp;
        <button onClick={this.handleAsyncIncrement}>increment async</button>&nbsp;&nbsp;
      </div>
    );
  }
}
 
export default App;
