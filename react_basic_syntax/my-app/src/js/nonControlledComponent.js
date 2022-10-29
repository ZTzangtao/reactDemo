import React from 'react'
import ReactDOM from 'react-dom'

/**
    非受控组件
 */
class NonControlledComponent extends React.Component {
    constructor() {
        super()

        // 创建ref
        this.txtRef = React.createRef()
    }

    // 获取文本框的值
    getTxt = () => {
        console.log('文本框值为', this.txtRef.current.value)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.txtRef} />
                <br/>
                <button onClick={this.getTxt}>获取文本框的值</button>
            </div>
        )
    }

}
export default NonControlledComponent