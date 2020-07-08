import React from 'react';

import {
    Card,
    Button,
} from 'antd';

export default class PuzzleCardsPage extends React.Component {

    // 构造方法
    constructor(props) {
        super(props);
        this.counter = 100;
        // 初始化状态 state
        this.state  = {
            cardList: [
                {
                    id: 1,
                    setup: 'Did you hear about the two silk worms in a race?',
                    punchline: 'It ended in a tie',
                },
                {
                    id: 2,
                    setup: 'What happens to a frog\'s car when it breaks down?',
                    punchline: 'It gets toad away',
                },
            ],
        };
    }

    addNewCard = () => {
        var callback = (prevState) => {
            // 保存之前的卡片列表(的数据)
            const prevCardList = prevState.cardList;

            // 新的card对象
            this.counter += 1;
            const card = {
                id: this.counter,
                setup: `test setup ${this.counter}`,
                punchline: `test punchline ${this.counter}`,
            };

            // 新的cardList数据
            const newCardList = prevCardList.concat(card);

            // 返回state毒地想
            return {
                cardList: newCardList,
            };
        };
        this.setState(callback);
    }
    
    // 渲染组件
    render() {
        return (
            <div>
                {
                    this.state.cardList.map((card) => {
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
                    <Button onClick={this.addNewCard}> 添加卡片 </Button>
                </div>
            </div>
        );
    }
    
}