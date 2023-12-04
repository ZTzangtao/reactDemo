// 1 导入react


import React from 'react'
import { createRoot } from "react-dom/client";
import ReactDOM from 'react-dom'
//引入css
import './css/index.css'
import Hello from "./Hello";
import ControlledComponent from "./js/controlledComponent";
import NonControlledComponent from "./js/nonControlledComponent"
import BasedOnPractice from "./js/basedOnPractice";
import PropsDemo from "./js/propsDemo"
import ParentDemo from "./js/parentDemo";
import ChildDemo from "./js/childDemo";
import Counter from "./js/counter";
import ContextDemo from "./js/contextDemo";
import ChildrenDemo from "./js/childernDemo";
import PropsValidDemo from "./js/propsValidDemo";
import UpdateCycle from "./js/ComponentLifeCycle/updateCycle";
import CreateCycle from "./js/ComponentLifeCycle/createCycle";
import Mouse from "./js/HighLevelComponent/mouseComponent";
import img from './img/ys.jpg';
import PropTypes from 'prop-types';
import MousePositionTest from "./js/HighLevelComponent/highLevelComponent";
import ReactPrinciple from "./js/ReactPrinciple/reactPrinciple";

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

// const Test = () =>{
//        return <button>我是button组件</button>
// }
//Mouse.propType = {
//    children: PropTypes.func.isRequired
//}
// jsx转换过程
// const element = <h1 className="greeting">Hello JSX!</h1>
// const element = React.createElement(
//     'h1',
//     {
//             className: 'greeting'
//             },
//     'Hello JSX!'
// );
// console.log(element)
// ReactDOM.render(element, document.getElementById('root'))

// class App extends React.Component {
//     render() {
//         return ( <ReactPrinciple />
// <MousePositionTest />
//            <div>
//                <h1>render props 模式</h1>
//                {/*
//                <Mouse render={(mouse) => {
//                   return <p>鼠标当前的位置 {mouse.x}, {mouse.y}</p>
//                }} />
//                */}
//                <Mouse>
//                    {mouse => {
//                        return (<p>鼠标的位置: {mouse.x} {mouse.y}</p>)
//                       }
//                    }
//                </Mouse>
//
//                {/* 猫捉老鼠 */}
//                <Mouse>
//                {mouse => (
//                 <img src={img} alt="索儿"
//                 style={{
//                    position: 'absolute',
//                    top: mouse.y - 150,
//                    left: mouse.x - 150
//                    }} />
//                )}
//                </Mouse>
//
//
//{/*
//                <Mouse render={mouse => {
//                    return <img src={img} alt="索儿" style={{
//                        position: 'absolute',
//                        top: mouse.y - 150,
//                        left: mouse.x - 150
//                    }} />
//                }}></Mouse>
//*/}
//
//            </div>

//         );
//     }
// }

class App extends React.Component {
    state =  {
        color: '#369'
    }

    getColor() {
        return Math.floor(Math.random() * 256)
    }

    changeBG = () => {
        this.setState(() => {
            return {
                color: `rgb(${this.getColor()}, ${this.getColor()}, ${this.getColor()})`
            }
        })
    }
    render() {
        console.log('根组件')
        return (
            <div className="app" style={{backgroundColor: this.state.color}}>
                <button onClick={this.changeBG}>根组件 - 切换样式状态</button>
                <div className="app-wrapper">
                    <Parent1 />
                    <Parent2 />
                </div>
            </div>
        )
    }
}

// -----------------------------------------------左侧-------------------------------------------
class Parent1 extends React.Component {
    state = {
        count: 0
    }

    handleClick = () => {
        this.setState(state => ({count: state.count + 1}))
    }
    render() {
        console.log('左侧父组件')
        return (
            <div className="parent">
                <h2>
                    左侧 - 父组件1
                    <button onClick={this.handleClick}>点我({this.state.count})</button>
                </h2>
                <div className="parent-wrapper">
                    <Child1 />
                    <Child2 />
                </div>
            </div>
        )
    }
}

class Child1 extends React.Component {
    render() {
        console.log('左侧子组件 - 1')
        return <div className="child">子组件1-1</div>
    }
}
class Child2 extends React.Component {
    render() {
        console.log('左侧子组件 - 2')
        return <div className="child">子组件1-2</div>
    }
}

// -----------------------------------------------右侧-------------------------------------------

class Parent2 extends React.Component {
    state = {
        count: 0
    }

    handleClick = () => {
        this.setState(state => ({count: state.count + 1}))
    }
    render() {
        console.log('右侧父组件')
        return (
            <div className="parent">
                <h2>
                    右侧 - 父组件2
                    <button onClick={this.handleClick}>点我({this.state.count})</button>
                </h2>
                <div className="parent-wrapper">
                    <Child3 />
                    <Child4 />
                </div>
            </div>
        )
    }
}

class Child3 extends React.Component {
    render() {
        console.log('右侧子组件 - 1')
        return <div className="child">子组件2-1</div>
    }
}
class Child4 extends React.Component {
    render() {
        console.log('右侧子组件 - 2')
        return <div className="child">子组件2-2</div>
    }
}

// 渲染React元素
// new
const container = document.getElementById('root')
const root = createRoot(container)
// root.render(<BasedOnPractice />)
// root.render(<ParentDemo />)
// root.render(<ChildDemo />)
// root.render(<Counter />)
// root.render(<ContextDemo />)
// root.render(<CreateCycle />)
// root.render(<UpdateCycle />)
root.render(<App />)
// root.render(<PropsValidDemo colors={['red','blue']}
//         fn={() => {}}
//                             pageSize={20}
// />)
// root.render(<ChildrenDemo>
//     {() => console.log('这是一个函数节点')}
//         {/*<Test/>*/}
//         {/*<p>我是子节点，是一个p标签</p>*/}
// </ChildrenDemo>)

// 传递数据
// root.render(<PropsDemo name="jack" age={19}
//                        // 传递数组
//                        colors={['red', 'green', 'blue']}
//                        // 传递函数
//                        fn={()=>{console.log('这是一个函数')}}
//                        // 传递jsx
//                        tag={<p>这是一个p标签</p>}
// />)

// no longer supported
// ReactDOM.render(list, document.getElementById('root'))