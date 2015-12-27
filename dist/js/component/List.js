'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by VaJoy on 2015/11/14.
 */
var isNode = typeof window === 'undefined';

if (!isNode) {
    require('css/component/List'); //require样式其实有违初衷
}

var List = _react2.default.createClass({
    displayName: 'List',
    render: function render() {
        return _react2.default.createElement(
            'ul',
            { className: 'vlist color-' + this.props.color, onClick: this.handleClick },
            this.props.children
        );
    },

    handleClick: function handleClick(e) {
        console.log(e.target);
    }
});

module.exports = List; //没法用export default List