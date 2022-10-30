import React from 'react'
import ReactDOM from 'react-dom'

/**
 * props 校验
 */
import PropTypes from 'prop-types'

const PropsValidDemo = (props) => {
    const arr = props.colors
    const list = arr.map( (item, index) => <li key = {index}>{item}</li> )
    return <ul>{list}</ul>
}
// 添加props校验
PropsValidDemo.propTypes = {
    colors: PropTypes.array
}

export default PropsValidDemo