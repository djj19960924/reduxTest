<!--
 * @Author: your name
 * @Date: 2020-04-28 16:46:42
 * @LastEditTime: 2020-04-28 16:48:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\note.md
 -->

```
写法一
<Button onClick={this.delFolder.bind(this,"abc")}></Button>
定义delFolder方法
delFolder = (name,e)=>{
  alert(name)
}
用bind绑定，调用是作为第二个参数传递，不用显示传递事件对象，定义方法时，事件对象作为最后一个参数传入

写法二
<Button onClick={this.delFolder("abc")}></Button>
定义delFolder方法
delFolder = (name)=>{
  return (e)=>{
    console.log(e);
    console.log(key);
  }
}
返回一个函数，事件对象在返回的函数中

第三种写法
<Button onClick={（e）=>this.delFolder("abc",e)}></Button>
delFolder = (name,e)=>{
}
事件对象作为第二个参数传递
```


