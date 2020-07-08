/**
 * dva model 的定义
 * 至少有两个成员：
 *  namespace: model的命名空间|唯一表示。
 *  state: 该 model 管理的数据。
 */
console.log('加载 src/model/puzzlecards.js')
export default {
    namespace: 'puzzlecards',
    state: [
        {
            id: 1,
            setup: 'Did you hear about the two silk worms in a race? [from model]',
            punchline: 'It ended in a tie [from model]',
        },
        {
            id: 2,
            setup: 'What happens to a frog\'s car when it breaks down? [from model]',
            punchline: 'It gets toad away [from model]',
        },
    ],
};