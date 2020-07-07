import {
    Tabs,
} from "antd";

const {
    TabPane,
} = Tabs;

/**
 * 组件的`受控`和`非受控`
 * 设计得当的组件应该：同时支持“受控”和“非受控”两种形式。
 * 非受控：该组件可以自己管理状态state。
 * 受控：该组件可以由其父组件管理状态(由开发者传值操作)
 */

export default class DemoTabs extends React.Component {

    state = {
        activeKey: "3",
    }

    // 使用 ES6 的箭头函数，会自动绑定其中的 this 的指向。
    onTabChange = (activeKey) => {
        console.log("点击之前激活的TabPane: %s\n点击之后激活的TabPane: %s", this.state.activeKey, activeKey);
        this.setState({
            activeKey: activeKey,
        });
    }
    
    render() {

        // 非受控：
        // Tabs组件中的多个TabPane，默认激活哪个？第一个。
        // var element = (
        //     <Tabs>
        //         <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
        //         <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
        //     </Tabs>
        // );

        // 受控：
        // 通过设置 Tabs 标签的 activeKey 属性，可以从 Tabs组件外部决定：Tabs中激活第几个TabPane。
        var element = (
            <Tabs activeKey={this.state.activeKey} onChange={this.onTabChange}>
                <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
            </Tabs>
        );
        
        return element;
    }
    
}