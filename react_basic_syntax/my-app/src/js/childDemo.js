import React from 'react'
import ReactDOM from 'react-dom'


// 父组件
class ChildDemo extends React.Component {

    state = {
        parentMsg: ''
    }

    // 提供回调函数，用来接收数据
    getChildMsg = (data) => {
        console.log('接收到子组件中传递过来的数据：', data)

        this.setState({
            parentMsg: data
        })
    }

    render() {
        return (
            <div className="parent">
                父组件：{this.state.parentMsg}
                <Child getMsg={this.getChildMsg}>我是子节点</Child>
            </div>
        )
    }
}

// 子组件
class Child extends React.Component {

    state = {
        msg: 'ss'
    }

    handleClick = () => {
        console.log(this.props)
        // 子组件调用父组件中传递过来的回调函数
        this.props.getMsg(this.state.msg)
    }

    render() {
        return (
            <div className="child">
                子组件： <button onClick={this.handleClick}>点我，给父组件传递数据</button>
            </div>
        )
    }
}

export default ChildDemo