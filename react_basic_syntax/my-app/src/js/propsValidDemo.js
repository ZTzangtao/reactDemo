import React from 'react'
import ReactDOM from 'react-dom'

/**
 * props 校验
 */
import PropTypes from 'prop-types'

const PropsValidDemo = (props) => {
    const arr = props.colors
    const list = arr.map((item, index) => <li key={index}>{item}</li>)
    return (
        <div>
            <ul>{list}</ul>
            <h1>此处展示props的默认值：{props.pageSize}</h1>
        </div>
    )
}
// 添加props校验
PropsValidDemo.propTypes = {
    // 属性 a 的类型：数值（number）
    a: PropTypes.number,

    // 属性 fn 的类型：函数（func）并且为必填项
    fn: PropTypes.func.isRequired,

    // 属性 tag 的类型：React元素（element）
    tag: PropTypes.element,

    // 属性 filter 的类型：对象（{area: '上海', price: 1999})
    filter: PropTypes.shape({
        area: PropTypes.string,
        price: PropTypes.number
    }),



    colors: PropTypes.array
}

PropsValidDemo.defaultProps = {
    pageSize: 10
}

export default PropsValidDemo