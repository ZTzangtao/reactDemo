import React from 'react'
import ReactDOM from 'react-dom'

/**
 组件生命周期
 */
class UpdateCycle extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    // 打豆豆
    handleClick = () => {
        // this.setState({
        //     count: this.state.count + 1
        // })

        // 演示强制更新：
        this.forceUpdate()
    }

    render() {
        console.warn('--父组件-- 生命周期钩子函数：render')
        return (
            <div>
                <Counter count={this.state.count} />
                <button id="btn" onClick={this.handleClick}>打豆豆</button>
            </div>
        )
    }
}

class Counter extends React.Component {
    render() {
        console.warn('--子组件-- 生命周期钩子函数：render')
        return <h1>统计豆豆被打的次数:{this.props.count}</h1>
    }
}

export default UpdateCycle