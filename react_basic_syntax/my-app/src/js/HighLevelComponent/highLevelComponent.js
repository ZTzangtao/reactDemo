import React from 'react'
import ReactDOM from 'react-dom'
import img from '../../img/ys.jpg';
/*
    高阶组件
*/
// 创建高阶组件
function withMouse(WrappedComponent) {
    // 该组件提供复用的状态逻辑
    class Mouse extends React.Component {
        //  鼠标状态
        state = {
            x: 0,
            y: 0
        }

        // 鼠标移动事件的事件处理程序
        handleMouseMove = (e) => {
            this.setState({
                x: e.clientX,
                y: e.clientY
            })
        }

        componentWillUnmount() {
            window.removeEventListener('mousemove', this.handleMouseMove)
        }

        // 控制鼠标状态的逻辑
        componentDidMount() {
            window.addEventListener('mousemove', this.handleMouseMove)
        }
        render() {
            console.log('Mouse: ', this.props)
            return <WrappedComponent {...this.state} {...this.props} />
        }
    }

    // 设置 displayName
    Mouse.displayName = `WithMouse${getDisplayName(WrappedComponent)}`
    return Mouse
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}


// 用来测试高阶组件
const Position = props => {
    console.log('Position: ', props)
    return (

    <p>
        鼠标当前位置: (x: {props.x}, y: {props.y})
    </p>
  )
}

// 猫捉老鼠的组件:
const Cat = props => (
    <img src={img}
        alt="" style={{
        position: "absolute",
        top: props.y - 150,
        left: props.x - 150
    }}
    />
)

// 获取增强后的组件:
const MousePosition =  withMouse(Position)

// 调用高阶组件来增强猫捉老鼠的组件:
const MouseCat = withMouse(Cat)

class MousePositionTest extends React.Component {
    render() {
        return (
            <div>
                <h1>高阶组件</h1>
                <MousePosition a="1" />
                <MouseCat />
            </div>
        )
    }
}

export default MousePositionTest