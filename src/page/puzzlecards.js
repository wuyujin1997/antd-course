import React from 'react';

import {
    Card,
} from 'antd';

export default class PuzzleCardsPage extends React.Component {

    // 构造方法
    constructor(props) {
        super(props);
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
            </div>
        );
    }
    
}