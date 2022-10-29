# reactDemo
this is a demo for react test
https://www.bilibili.com/video/BV14y4y1g7M4?p=1&vd_source=4c152a79323ff566b857cd6c07e0dd4b
##note
1、初始化项目，命令：npx create-react-app my-app
2、项目启动，在项目根目录执行命令： npm start
### npx 命令介绍
    npm v5.2.0引入的一条命令
    目的：提升包内提供的命令行工具的使用体验、
    原来：先安装脚手架包，再使用这个包中提供的命令
    现在：无需安装脚手架包，就可以直接使用这个包提供的命令
    补充说明
    1.推荐使用：npx create-react-app my-app
    2. npm init react-app my-app
    3. yarn create react-app my-app
        yarn是Facebook发布的包管理器，可以看做是npm的替代品，功能与npm相同
        安装包 yarn add
        安装项目依赖项：yarn

##JSX简介
    JSX是JavaScript XML的简写，表示在JavaScript代码中写XML（HTML）格式的代码
    优势：声明式语法更加直观、与HMTL结构相似，降低了学习成本、提升开发效率
__JSX是React的核心内容__
    
##创建组建方式
    使用函数创建组件
        函数组件名称必须以大写字母开头
        函数组件必须有返回值，表示该组件的结构
        如果返回值为null，表示不渲染任何内容
    使用类创建组件
        类名称必须以大写字母开头
        类组件应该继承React.Component父类，从而可以使用父类中提供的方法或属性
        类组件必须提供render()方法
        render()必须有返回值，表示该组件的结构
    把组件放到一个单独的JS文件中

##事件绑定
    React事件绑定语法与DOM事件语法相似
    语法：on + 事件名称 = {事件处理程序}， 比如： onClick={()=> {}}
    注意：React事件采用驼峰命名法，比如：onMouseEnter、onFocus

##事件对象
    可以通过事件处理程序的参数获取到事件对象
    React中的事件对象叫做：合成事件（对象）
    合成事件：兼容所有浏览器，无需担心跨浏览器兼容性问题

##有状态组件和无状态组件
    函数组件又叫做无状态组件，类组件又叫做有状态组件
    状态（state）即数据
    函数组件没有自己的状态，只负责数据展示（静）
    类组件有自己的状态，负责更新UI，让页面"动"起来

    state的基本使用
    状态（state）即数据，是组件内部的私有数据，只能在组件内部使用
    state的值是对象，表示一个组件中可以有多个数据
    获取状态：this.state
    setState()修改状态
    状态是可变的
    语法：this.setState({要修改的数据})
    注意：不要直接修改state中的值，这是错误的！
    setState()作用：1.修改state 2.更新UI
    思想：数据驱动视图
    推荐：将逻辑抽离到单独的方法中，保证JSX结构清晰

##事件绑定this指向
    1. 箭头函数
    2. Function.prototype.bind()
    3. class的实例方法
### 1. 箭头函数
    利用箭头函数自身不绑定this的特点

### 2.Function.prototype.bind()
    利用es5中的bind方法，将事件处理程序中的this与组件实例绑定到一起

### 3. class实例方法
    利用箭头函数形式的class实例方法
    注意：该语法是实验性语法，但是，由于babel的存在可以直接使用
##事件绑定this指向 总结
    1. 推荐：使用class的实例方法
    2. 箭头函数
    3. bind方法

## 表单处理
    受控组件
    HTML中的表单元素是可输入的，也就是有自己的可变状态
    而，React中可变的状态通常保存在state中，并且只能通过setState()方法来修改
    React将state与表单元素值value绑定到一起，由state的值来控制表单元素的值
    受控组件:其值受到React控制的表单元素

### 受控组件
    步骤：
        1. 在state中添加一个状态，作为表单元素的value值(控制表单元素值的来源)
        2. 给表单元素绑定change事件，将表单元素的值设置为state的值(控制表单元素值的变化)
    示例总结：
        1. 文本框、富文本框、下拉框 操作value属性
        2. 复选框 操作checked属性
    多表单元素优化：
        问题：每个表单元素都有一个单独的事件处理程序处理太繁琐
        优化：使用一个事件处理程序同时处理多个表单元素
    多表单元素优化步骤：
        1. 给表单元素添加name属性，名称与state相同
        2. 根据表单元素类型获取对应值
        3. 在change事件处理程序中通过[name]来修改对应的state