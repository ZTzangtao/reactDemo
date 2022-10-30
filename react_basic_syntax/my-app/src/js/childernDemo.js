import React from 'react'
import ReactDOM from 'react-dom'



const ChildrenDemo = (props) => {
    console.log(props)
    props.children()
    return (
        <div>
            <h1>组件标签的子节点</h1>
            {/*{props.children}*/}
        </div>
    )
}

export default ChildrenDemo