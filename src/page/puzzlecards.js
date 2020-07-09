import React from 'react';

import {
    Card,
    Button,
} from 'antd';

import {
    connect,
} from 'dva';

const namespace = 'puzzlecards';

/**
 * 这个函数是 connect函数的第一个入参
 * @param {*} state 这其实是dva中所有state的总和。所以要用 state[namespace] 获取指定的 state。
 * @returns 对象。这个对象会被 dva 并入到 props 中。
 */
const mapStateToProps = (state) => {
    console.log('state(所有namespace的state): ', state);
    const theNewState = state[namespace];   // 获取指定 namespace 的对象的 state
    const theCardList = theNewState.data;   // 获取 state.cardList
    console.log('theCardList: ', theCardList);
    return {
        cardList: theCardList
    };
};

// 向组件注入方法： this.props.onClickAdd
const mapDispatchToProps = (dispatch) => {
    const onClickAdd = (newCard) => {
        const action = {
            type: `${namespace}/addNewCard`,
            payload: newCard,
        };
        dispatch(action);
    }
    return {
        onClickAdd,
    };
};

/**
 * connect
 *  让组件拿到两样东西： 1. model 中的数据； 2. 改变 model 的方法。
 * 
 * connect 是一个JS函数，接受入参。
 * mapStateToProps: 第一个参数是函数，这个函数可以把 dva model 中的 state 通过 props 传递到组件内部。
 * 即： 将 dva model 中的 state 注入到组件中。
 * 
 * mapDispatchToProps:
 *  以 dispatcher 为入参，
 *  返回一个挂着函数的对象(这些函数会被 dva 并入 props ，注入给组件使用)。
 */
@connect(mapStateToProps, mapDispatchToProps)
export default class PuzzleCardsPage extends React.Component {

    render() {
        // 通过 this.props 访问 cardList
        return (
            <div>
                {
                    this.props.cardList.map((card) => {
                        return (
                            <Card key={card.id}>
                                <div>Q: {card.setup}</div>
                                <div>
                                    <strong>A: {card.punchline}</strong>
                                </div>
                            </Card>
                        );
                    })
                }
                <div>
                    <Button onClick={() => {
                        this.props.onClickAdd({
                            setup: 'test-dispatcher setup',
                            punchline: 'test-dispatcher punchline',
                        })
                    }}> 添加卡片 </Button>
                </div>
            </div>
        );
    }
    
    // 构造方法
    // constructor(props) {
    //     super(props);
    //     this.counter = 100;
    //     // 初始化状态 state
    //     this.state  = {
    //         cardList: [
    //             {
    //                 id: 1,
    //                 setup: 'Did you hear about the two silk worms in a race?',
    //                 punchline: 'It ended in a tie',
    //             },
    //             {
    //                 id: 2,
    //                 setup: 'What happens to a frog\'s car when it breaks down?',
    //                 punchline: 'It gets toad away',
    //             },
    //         ],
    //     };
    // }

    // addNewCard = () => {
    //     var callback = (prevState) => {
    //         // 保存之前的卡片列表(的数据)
    //         const prevCardList = prevState.cardList;

    //         // 新的card对象
    //         this.counter += 1;
    //         const card = {
    //             id: this.counter,
    //             setup: `test setup ${this.counter}`,
    //             punchline: `test punchline ${this.counter}`,
    //         };

    //         // 新的cardList数据
    //         const newCardList = prevCardList.concat(card);

    //         // 返回state毒地想
    //         return {
    //             cardList: newCardList,
    //         };
    //     };
    //     this.setState(callback);
    // }
    
    // 渲染组件
    // render() {
    //     return (
    //         <div>
    //             {
    //                 this.state.cardList.map((card) => {
    //                     return (
    //                         <Card key={card.id}>
    //                             <div>Q: {card.setup}</div>
    //                             <div>
    //                                 <strong>A: {card.punchline}</strong>
    //                             </div>
    //                         </Card>
    //                     );
    //                 })
    //             }
    //             <div>
    //                 <Button onClick={this.addNewCard}> 添加卡片 </Button>
    //             </div>
    //         </div>
    //     );
    // }
    
}