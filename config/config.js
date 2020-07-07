export default {
    singular: true,

    routes: [
        {
            path: "/",
            component: "./HelloWorld",
        }
    ],

    plugins: [
        ["umi-plugin-react", {
            // 更多配置项
        }],
    ],
    
};