import React from "react";
import ReactDOM from 'react-dom'

class ReactPrinciple extends React.Component {
    state = {
        count: 1
    }

    handleClick = () => {
        // 此处 更新state
        // 注意: 异步更新数据！！！
        // this.setState({
        //     count: this.state.count + 1
        // })
        // // console.log('count: ', this.state.count) // 1
        // this.setState({
        //     count: this.state.count + 1 // 1 + 1
        // })
        // console.log('count: ', this.state.count) // 1

        // 推荐语法:
        // 注意: 这种语法也是异步更新state的！
        this.setState((state, props) => {
            return {
                count: state.count + 1 // 1 + 1
            }
        })

        this.setState((state, props) => {
            console.log('第二次调用: ', this.state.count)
            return {
                count: state.count + 1
            }
        })
        console.log('count: ', this.state.count) // 1
    }

    render() {
        // console.log('render')
        return (
            <div>
                <h1>计算器: {this.state.count}</h1>
                <button onClick={this.handleClick}>+1</button>
            </div>
        )
    }
}
export default ReactPrinciple