import React from 'react'
import ReactDOM from 'react-dom'


// 父组件
class ParentDemo extends React.Component {
    state = {
        lastName: 'zz'
    }

    render() {
        return (
            <div className="parent">
                父组件：
                <Child name={this.state.lastName} />
            </div>
        )
    }
}

// 子组件
const Child = (props) => {
    return (
        <div className="child">
            <p>子组件：接收到父组件的数据：{props.name}</p>
        </div>

    )
}

export default ParentDemo