export default {
    singular: true,

    routes: [
        /**
         * NOTE:
         * path: /开头表示根路径 .开头表示当前路径
         * component: 
         *      不可以以 / 开头，否则会报错。(如： /Dashboard/Analysis in ./src/page/.umi/router.js)
         *      可以以 ./ 开头，或直接写 page目录下的文件|文件夹名称即可。
         *      (component的值是以 /src/page/目录为起点开始算)
         */
        {
            path: "/",  // 这里可以为 / 也可以为 .
            component: "../layout", // component 组件路径，其值以 /src/page/ 目录为起点
            routes: [
                { path: ".", component: "./HelloWorld" },
                { path: "./helloworld", component: "./HelloWorld" },
                {
                    path: "./dashboard",
                    routes: [
                        { path: './analysis', component: './Dashboard/Analysis'},
                        { path: './monitor', component: './Dashboard/Monitor'},
                        { path: './workplace', component: './Dashboard/Workplace'},
                    ],
                },
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