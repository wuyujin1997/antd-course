export default {
    singular: true,

    routes: [
        {
            path: "/",
            component: "./HelloWorld",
        },

        // 新增路由
        // path 以 / 开头表示绝对路径，以项目根路径为起点
        // component 指定使用的组件， 以 /src/page/目录为起点计算(umi约定)。
        { path: "/DemoCard", component: "./DemoCard" }
        
    ],

    plugins: [
        ["umi-plugin-react", {
            // 更多配置项
            antd: true,
        }],
    ],
    
};