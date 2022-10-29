// 1 导入react

import React from 'react'
import { createRoot } from "react-dom/client";
import ReactDOM from 'react-dom'
//引入css
import './css/index.css'
import Hello from "./Hello";
import Index from "./js";
// 2 创建react元素
// const title = React.createElement('h1', null, 'Hello React 脚手架')

// 3 渲染react元素
// ReactDOM.render(title, document.getElementById('root'))

/*
    列表渲染
 */
//     const songs = [
//         {id: 1, name: 'heykong'},
//         {id: 2, name: '万有引力'},
//         {id: 3, name: '搵野做'}
//     ]
//
// const list = (
//     <ul>
//         {songs.map(item => <li key={item.id}>{item.name}</li>)}
//     </ul>
// )
/*
   条件渲染
 */
// const isloading = true
//if-else
// const loadData = () => {
//     if (isloading) {
//         return <div>loading</div>
//     }
//     return <div>数据加载完成，此处显示加载后的数据</div>
// }
//三元表达式
// const loadData = () => {
//     return  isloading ? (<div>loading</div>) : (<div>数据加载完成，此处显示加载后的数据</div>)
// }
//逻辑与运算符
// const loadData = () => {
//     return  isloading && (<div>loading</div>)
// }

/*
 *  JSX中使用JavaScript表达式
 */
// const name = 'Jack';
// const age = 19

// 使用JSX创建react元素
// const title = (
//     // <h1 className="title">Hello JSX, {name} 年龄：{age}<span>这是span</span></h1>
//     <h1>
//         条件渲染：
//         {loadData()}
//     </h1>
// )

// 函数组件
// function Hello() {
//     return (
//         <div>这是我的第一个函数组件</div>
//     )
// }
// 箭头函数
// const Hello = () => <div>这是我的第一个函数组件</div>


// const list = (
//     <h1 className="title" style={{ color: 'red', backgroundColor: 'skyblue' }}>
//         JSX的样式处理
//     </h1>
// )

/*
    类组件
 */
// class Hello extends React.Component {
//     render() {
//         return (
//             <div>
//                 这是我的第一个类组件
//             </div>
//         );
//     }
// }

// 渲染React元素
// new
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Index />)

// no longer supported
// ReactDOM.render(list, document.getElementById('root'))