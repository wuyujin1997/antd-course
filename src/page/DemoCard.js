import {
    Card,
} from 'antd';

export default () => {

    const style = {
        width: '400px',
        margin: '30px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        border: '1px solid #e8e8e8',
    };

    const actions = [
        <a>操作一</a>,
        <a>操作二</a>,
    ];
      
    return (
        <Card style={style} actions={actions} />
    );
}