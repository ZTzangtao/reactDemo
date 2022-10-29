import React from 'react'
import ReactDOM from 'react-dom'

/**
 * props
 */
// 类组件
class PropsDemo extends React.Component {
    // 推荐使用props作为constructor的参数！！
    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        console.log(this.props)
        this.props.fn()

        // 修改props的值：错误演示！！！
        // this.props.name = 'zt'

        return (
            <div>
                <h1>props:{this.props.name}</h1>
                {this.props.tag}
            </div>
        )
    }
}
// 接收数据
// const PropsDemo = (props) => {
//     // props 是一个对象
//     console.log(props)
//     return (
//         <div>
//             <h1>props:{props.name}</h1>
//         </div>
//
//     )
// }

export default PropsDemo