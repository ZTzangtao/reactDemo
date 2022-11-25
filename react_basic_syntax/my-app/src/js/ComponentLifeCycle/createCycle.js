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
        // const title = document.getElementById('title')
        // console.log(title)
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




// const fun1 = (arr,keyList) => {
//     if (!Array.isArray(arr) || arr?.length == 0) {
//         return null;
//     }
//     let allKeyList = Object.keys(arr[0]);
//     let noChangeKeys = allKeyList.filter((res) => !keyList.includes(res));
//     let targetArr = [];
//     for (let value of arr) {
//         if (targetArr.length == 0) {
//             for (let nokey of noChangeKeys) {
//                 value[nokey] = [value[nokey]];
//             }
//             targetArr.push(value);
//         } else {
//             let son = targetArr.find((res) => {
//                 let count = 0;
//                 for (let key of keyList) {
//                     if (res[key] == value[key]) {
//                         count++;
//                     } else {
//                         break;
//                     }
//                 }
//                 return count == keyList.length;
//             });
//             console.log(son)
//             if (!son) {
//                 for (let nokey of noChangeKeys) {
//                     value[nokey] = [value[nokey]];
//                 }
//                 targetArr.push(value);
//             } else {
//                 for (let nokey of noChangeKeys) {
//                     son[nokey].push(value[nokey]);
//                 }
//             }
//         }
//     }
//     return targetArr;
// };