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
        this.setState({
            count: this.state.count + 1
        })

        // 演示强制更新：
        // this.forceUpdate()
    }

    render() {
        console.warn('--父组件-- 生命周期钩子函数：render')
        return (
            <div>

                {
                    this.state.count > 3 ?
                        <p>豆豆被打死了~</p> :
                        <Counter count={this.state.count} />
                }

                <button id="btn" onClick={this.handleClick}>打豆豆</button>
            </div>
        )
    }
}

class Counter extends React.Component {
    render() {
        // console.warn('--子组件-- 生命周期钩子函数：render')
        return <h1 id="title">统计豆豆被打的次数:{this.props.count}</h1>
    }
    // 注意：如果要调用setState()更新状态，必须要放在一个 if 条件中
    // 因为：如果直接调用更新状态 setState()更新状态，也会导致递归更新！！！
    /*
    componentDidUpdate(prevProps) {
        console.warn('--子组件-- 生命周期钩子函数：componentDidUpdate')

        // 正确做法：
        // 做法: 比较更新前后的props是否相同，来决定是否重新渲染组件
        console.log('上一次的props：', prevProps, '当前的props：', this.props)
        if (prevProps.count != this.props.count) {
            // this.setState({})
            // 发送ajax请求的代码
        }

        // 错误演示！！！
        // this.setState({})

        // 获取DOM
        // const title = document.getElementById('title');
        // console.log(title.innerHTML)
    }
*/

    componentDidMount() {
        // 开启定时器
        this.timeId = setInterval(() => {
            console.log('定时器正在执行~')
        }, 500)
    }

    componentWillUnmount() {
        console.warn('生命周期钩子函数：componentWillUnmount')

        // 清理定时器
        clearInterval(this.timeId)
    }


}
export default UpdateCycle