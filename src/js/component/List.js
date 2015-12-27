/**
 * Created by VaJoy on 2015/11/14.
 */
var isNode = typeof window === 'undefined';
import React from 'react';
if(!isNode){
    require('css/component/List');  //require样式其实有违初衷
}

var List = React.createClass({
    render() {
        return (
            <ul className={'vlist color-' + this.props.color} onClick={this.handleClick}>
                {this.props.children}
            </ul>
        );
    },
    handleClick: function (e) {
        console.log(e.target);
    }
});


module.exports = List; //没法用export default List