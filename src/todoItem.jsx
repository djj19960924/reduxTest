import React, { Component } from 'react'

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
    this.handleClick = this.handleClick.bind(this);
  }
  //子组件不允许直接修改父组件
  //子组件想修改父组件的值，其实就是子组件调用父组件的方法
  handleClick() {
    const { deleteItem,index } = this.props;
    deleteItem(index);
  }
  render() { 
    const { content } = this.props;
    return ( 
      <div onClick={this.handleClick}>
        {content}
      </div>
    );
  }
}
 
export default TodoItem;