import React from 'react'

class Index extends React.Component {
    state = {
        txt: '',
        content: '',
        city: 'bj',
        isChecked: false
    }

    handleChange = (e) => {
        // 获取当前的DOM对象、
        const target = e.target

        // 根据类型获取值
        const value = target.type === 'checkbox' ? target.checked : target.value

        // 获取name
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                {/* 文本框 */}
                <input type="text" value={this.state.txt} name="txt" onChange={this.handleChange} />
                <br />
                {/* 富文本框 */}
                <textarea value={this.state.content} name="content" onChange={this.handleChange}></textarea>
                <br />
                {/* 下拉框 */}
                <select value={this.state.city} name="city" onChange={this.handleChange}>
                    <option value="sh">上海</option>
                    <option value="bj">北京</option>
                    <option value="gz">广州</option>
                </select>
                <br />
                {/* 复选框 */}
                <input type = "checkbox" name="isChecked" checked={this.state.isChecked} onChange={this.handleChange} />
            </div>
        )
    }
}
export default Index