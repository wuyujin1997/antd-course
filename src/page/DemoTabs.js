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

    render() {

        // Tabs组件中的多个TabPane，默认激活哪个？第一个。
        var element = (
            <Tabs>
                <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
            </Tabs>
        );
        
        return element
    }
    
}