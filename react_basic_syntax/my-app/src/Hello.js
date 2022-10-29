import React from 'react'

// 创建组件
class Hello extends React.Component {

    // constructor() {
    //     super()
    //     // 初始化state
    //     this.state = {
    //         count : 0
    //     }
    // }
    // 简化语法初始化state
    // state = {
    //     count: 0
    // }

    // constructor() {
    //     super()
    //     this.onIncrement = this.onIncrement.bind(this)
    // }
    //
    // onIncrement() {
    //     console.log('事件处理程序中的this：', this)
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }

    // onIncrement = () => {
    //     console.log('事件处理程序中的this：', this)
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }

    // handleClick() {
    //     console.log('单机事件触发了')
    // }
    //
    // handleClickA(e) {
    //     // 阻止浏览器的默认行为
    //     e.preventDefault()
    //     console.log('a标签的单机事件触发了')
    // }

    state = {
        txt: '',
        content: '',
        city: 'bj',
        isChecked: false
    }

    handleChange = (e) => {
        this.setState({
            txt: e.target.value
        })
    }
    // 处理富文本框的变化
    handleContent = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    // 处理下拉框的变化
    handleCity = (e) => {
        this.setState({
            city: e.target.value
        })
    }

    // 处理复选框的变化
    handleChecked = (e) => {
        this.setState({
            isChecked: e.target.checked
        })
    }

    render() {
        return (
            // <div>这是我第一个抽离到js文件中的组件
            //     <button onClick={this.handleClick}>点我，点我</button>
            //     <a href="http://baidu.com" onClick={this.handleClickA}>百度</a>
            // </div>
        <div>
            {/* 文本框 */}
            <input type="text" value={this.state.txt} onChange={this.handleChange} />
            <br />
            {/* 富文本框 */}
            <textarea value={this.state.content} onChange={this.handleContent}></textarea>
            <br />
            {/* 下拉框 */}
            <select value={this.state.city} onChange={this.handleCity}>
                <option value="sh">上海</option>
                <option value="bj">北京</option>
                <option value="gz">广州</option>
            </select>
            <br />
            {/* 复选框 */}
            <input type = "checkbox" checked={this.state.isChecked} onChange={this.handleChecked} />


            {/*<h1>计数器：{this.state.count}</h1>*/}
            {/*箭头函数中的this指向外部环境，此处为：render()方法*/}
            {/*<button onClick={() => this.onIncrement()}>+1</button>*/}
            {/*<button onClick={this.onIncrement}>+1</button>*/}

            {/*
            <button onClick={()=> {
                    this.setState({
                        count: this.state.count + 1
                    })
            }}>+1</button>
            */}
        </div>
        )
    }
}

// 函数组件
// function Hello() {
//
//     function handleClick() {
//         console.log('单机事件触发了')
//     }
//
//     return (
//         <div>这是我第一个抽离到js文件中的组件
//             <button onClick={handleClick}>点我，点我</button>
//         </div>
//     )
//
// }


// 导出组件
export default Hello