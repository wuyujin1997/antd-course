export default {
    singular: true,

    routes: [
        {
            path: "/",
            component: "../layout", // component 组件路径，其值以 /src/page/ 目录为起点
            routes: [
                { path: "DemoCard", component: "./DemoCard" }
            ]
        }
    ],

    plugins: [
        ["umi-plugin-react", {
            // 更多配置项
            antd: true,
        }],
    ],
    
};