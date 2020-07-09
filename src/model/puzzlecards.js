/**
 * dva model 的定义
 * 至少有两个成员：
 *  namespace: model的命名空间|唯一表示。
 *  state: 该 model 管理的数据。
 */
console.log('加载 src/model/puzzlecards.js')
export default {
    namespace: 'puzzlecards',
    state: {
        data: [
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
        counter: 100,
    },
    reducers: {
        /**
         * 这是一个 reducer
         * 入参：
         *  state: 旧的 state
         *  {}: 包含一些信息，一般用 payload 表示载荷信息。
         * 
         * 返回值： 新的 state (必须是新构造的，不能把旧的 state 的引用返回)
         *  (reducer、 React 的 setState(prevState => {...}) 对比)
         */
        addNewCard(state, { payload: newCard }) {
            const nextCounter = state.counter + 1;
            const newCardWithId = {
                ...newCard,
                id: nextCounter,
            };
            const nextData = state.data.concat(newCardWithId);
            return {
                data: nextData,
                counter: nextCounter,
            };
        }
    },
};