import React from 'react';

/**
 * 组件： MyBox (作为一个容器组件，其中嵌套的子组件是可以由外界传递进来的)
 * 属性： subComponent 这个属性指定的JavaScript值(变量/JSX块/HTML代码块等)会被渲染。
 */
class MyBox extends React.Component {
    render() {
        var element = (
            <div>
                {this.props.subComponent}
            </div>
        );
        return element;
    }
}

class MyCard extends React.Component {

    render() {
        // - 使用父组件的属性(自定义任意属性即可)传递要渲染的子组件 (可替换)
        // var son = ( <h1>你好啊，世界。 111</h1> );
        var son = ( <h1>你好啊，世界。 222</h1> );
        var element = (
            <MyBox subComponent={son}>
            </MyBox>
        );
        
        return element;
    }
    
}

export default MyCard;