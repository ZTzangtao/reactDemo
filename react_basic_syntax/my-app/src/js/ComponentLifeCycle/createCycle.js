import React from 'react'
import ReactDOM from 'react-dom'

/**
   组件生命周期
 */
class CreateCycle extends React.Component {

    constructor(props) {
        super(props);

        // 初始化state
        this.state = {
            count: 0
        }

        // 处理this 指向问题

        console.warn('生命周期钩子函数： constructor')

        // const title = document.getElementById('title')
        // console.log(title)
    }
    // 1 进行DOM操作
    // 2 发送ajax请求，获取远程数据
    componentDidMount() {

        // axios.get('http://api...')
        // const title = document.getElementById('title')
        // console.log(title)
        console.warn('生命周期钩子函数： componentDidMount')
    }

    render() {
        // 错误演示！！！ 不要在render调用setState()
        // this.setState({
        //     count: 1
        // })
        const title = document.getElementById('title')
        console.log(title)
        console.warn('生命周期钩子函数： render')
        return (
            <div>
                <h1 id="title">统计豆豆被打的次数:</h1>
                <button id="btn">打豆豆</button>
            </div>
        )
    }
}
export default CreateCycle