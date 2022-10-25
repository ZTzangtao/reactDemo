# reactDemo
this is a demo for react test


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