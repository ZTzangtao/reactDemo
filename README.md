# reactDemo
this is a demo for react test

https://www.bilibili.com/video/BV14y4y1g7M4?p=1&vd_source=4c152a79323ff566b857cd6c07e0dd4b

素材下载地址： 已经更新数据库

链接：https://pan.baidu.com/s/1rAylbjRUh4rTgVwxRLfDeQ

提取码：2gdv
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
### 非受控组件
    说明：借助于ref，使用原生DOM方式来获取表单元素值
    ref的作用：获取DOM或组件
    使用步骤：
    1. 调用React.createRef()方法创建一个ref对象
    2. 将创建好的ref对象添加到文本框中
    3. 通过ref对象获取到文本框的值

## React组件基础
    1. 组件的两种创建方式：函数组件和类组件
    2. 无状态（函数）组件，负责静态结构展示
    3. 有状态（类）组件，负责更新UI，让页面动起来
    4. 绑定事件注意this指向问题
    5. 推荐使用受控组件来处理表单
    6. 完全利用JS语言的能力创建组件，这是React的思想

## 组件通讯介绍
    组件是独立封闭的单元，默认情况下，只能使用组件自己的数据。在组件化过程中，我们将一个完整的功能拆分成多个组件，
    以更好的完成整个应用的功能。而在这个过程中，多个组件之间不可避免的要共享某些数据。为了实现这些功能，就需要打破
    组件的独立封闭性，让其与外界沟通。这个过程就是组件通讯。

### 组件的props
    组件是封闭的，要接收外部数据应该通过props来实现
    props的作用：接收传递组件的数据
    传递数据: 给组件标签添加属性
    接收数据：函数组件通过参数props接收数据，类组件通过this.props接收数据
    特点：
    1. 可以给组件传递任意类型的数据
    2. props是只读的对象，只能读取属性的值，无法修改对象
    3. 注意：使用类组件时，如果写了构造函数，应该将props传递给super()，否则，无法在构造函数中获取到props！

### 组件通讯的三种方式
    组件之间的通讯分为3种：
    1. 父组件 -> 子组件
    2. 子组件 -> 父组件
    3. 兄弟组件

### 父组件传递数据给子组件
    1. 父组件提供要传递的state数据
    2. 给子组件标签添加属性，值为state中的数据
    3. 子组件中通过props接收父组件中传递的数据

### 子组件传递数据给父组件
    思路：利用回调函数，父组件提供回调，子组件调用，将要传递的数据作为回调函数的参数
    1. 父组件提供一个回调函数（用于接收数据）
    2. 将该函数作为属性的值，传递给子组件
    3. 子组件通过props调用回调函数
    4. 将子组件的数据作为参数传递给回调函数
    注意: 回调函数中this指向问题！

### 兄弟组件
    将共享状态提升到最近的公共父组件中，由公共父组件管理这个状态
    思想：状态提升
    公共组件职责：1. 提供共享状态 2. 提供操作共享状态的方法
    要通讯的子组件只需要通过props接收状态或操作状态的方法

## Context
    思考：App组件要传递数据给Child组件，该如何处理？
    更好的姿势：使用Context
    作用：跨组件传递数据（比如：主题、语言等）
    使用步骤：
    1. 调用React.createContext()创建Provider（提供数据）和Consumer（消费数据）两个组件
    2. 使用Provider组件作为父节点
    3. 设置value属性，表示要传递的数据
    4. 调用Consumer组件接收数据
    总结：
    1. 如果两个组件是远方亲戚（比如，嵌套多层）可以使用Context实现组件通讯
    2. Context提供了两个组件：Provider和Consumer
    3. Provider组件：用来提供数据
    4. Consumer组件：用来消费数据

## children属性
    children属性：表示组件组件标签的子节点，当组件标签有子节点时，props就会有该属性
    children属性与普通props一样，值可以是任意值（文本、React元素、组件，甚至是函数）

## props校验
    对于组件来说，props是外来的，无法保证组件使用者传入什么格式的数据
    如果传入的数据格式不对，可能会导致组件内部报错
    关键问题：组件的使用者不知道明确的错误原因
    props校验：允许在创建组件的时候，就指定props的类型、格式等
    作用：捕获使用组件时因为props导致的错误，给出明确的错误提示，增加组件的健壮性
    使用步骤
    1. 安装包 prop-types（yarn add prop-types/npm i props-types）
    2. 导入prop-types包
    3. 使用组件名 .propTypes={}来给组件的props添加校验规则
    4. 校验规则通过PropTypes对象来指定

### 约束规则
    1. 常见类型：array、bool、func、number、object、string
    2. React元素类型：element
    3. 必填项：isRequired
    4. 特定结构的对象：shape({})
    所有校验规则见以下网址:
    https://reactjs.org/docs/typechecking-with-proptypes.html

### props的默认值
    场景：分页组件 -> 每页显示条数
    作用：给props设置默认值，在未传入props时生效

# 组件的生命周期
## 组件的生命周期概述
    意义：组件的生命周期有助于理解组件的运行方式、完成更复杂的组件功能、分析组件错误原因等
    组件的生命周期：组件从被创建到挂载到页面中运行，再到组件不用时卸载的过程
    生命周期的每个阶段总是伴随着一些方法调用，这些方法就是生命周期的钩子函数。
    钩子函数的作用：为开发人员在不同阶段操作组件提供了时机。
    只有类组件才有生命周期

## 生命周期的三个阶段
    创建时 更新时 卸载时
    1. 每个阶段的执行时机
    2. 每个阶段钩子函数的执行顺序
    3. 每个阶段钩子函数的作用
    创建时（挂载阶段）
    执行时机：组件创建时（页面加载时）
    执行顺序：
    constructor() -> render() -> componentDidMount

| 钩子函数           | 触发时机          | 作用                               |
| :----:           | :----:           | :----: |
| constructor      | 创建组件时，最先执行 | 1.初始化state 2.为事件处理程序绑定this |
| render           | 每次组件渲染都会触发 | 渲染UI（注意：不能调用setState()）     |
| componentDidMount| 组件挂载(完成DOM渲染)后 | 1. 发送网络请求 2. DOM操作        |
    更新时（更新阶段）
    执行时机：1. setState() 2. forceUpdate() 3. 组件接收到新的props
    说明：以上三者任意一种变化，组件就会重新渲染
    执行顺序：render() -> componentDidUpdate()
| 钩子函数           | 触发时机          | 作用                                              |
| :----:           | :----:           | :----: |
| render           | 每次组件渲染都会触发 | 渲染UI（注意：不能调用setState()）                   |
| componentDidMount| 组件更新(完成DOM渲染)后 | 1. 发送网络请求 2. DOM操作 注意：如果要setState()必须放在if条件中        |
    卸载时(卸载阶段)
    执行时机：组件从页面中消失
| 钩子函数               | 触发时机           | 作用                                              |
| :----:               | :----:            | :----: |
| componentWillUnmount | 组件卸载(从页面中消失)| 执行清理工作（比如：清理定时器等）                   |
    不常用钩子函数
    componentWillMount
    componentWillReceiveProps
    componentWillUpdate
    getDerivedStateFromProps
    shouldComponentUpdate
    getSnapshotBeforeUpdate
## render-props和高阶组件
### React组件复用概述
    思考：如果两个组件中的部分功能相似或想通，该如何处理？
    处理方式：复用相似的功能（联想函数封装）
    复用什么？1. state 2. 操作state的方法（组件状态逻辑）
    两种方式：1. render props模式 2. 高阶组件（HOC）
    注意：这两种方式不是新的API，而是利用React自身特点的编码技巧，演化而成的固定模式（写法）
### render props 模式
    思路分析
    思路：将要复用的state和操作state的方法封装到一个组件中
    问题1：如何拿到该组件中复用的state？
    在使用组件中，添加一个值为函数的prop，通过函数参数来获取（需要组件内部实现）
    问题2：如何渲染任意UI？
    使用该函数的返回值作为要渲染的UI内容（需要组件内部实现）
    使用步骤
    1. 创建Mouse组件，在组件中提供复用的状态逻辑代码（1.状态 2.操作状态的方法）
    2. 将要复用的状态作为props.render(state)方法的参数，暴露到组件外部
    3. 使用props.render()的返回值作为要渲染的内容