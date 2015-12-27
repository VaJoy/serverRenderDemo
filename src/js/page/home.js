/**
 * Created by vajoy on 2015/12/25.
 */
import React from 'react';
import ReactDOM from 'react-dom';
var List = require('../component/List'); //因为组件里不能使用export default List，所以这里只能用require

var lis = syncData.names.map(function(item, i){   //li没法加key
    return (
        <li>{item.name}</li>
    )
});
ReactDOM.render(
    <List {...syncData.props}>
        {lis}
    </List>,
    document.getElementById('wrap')
);