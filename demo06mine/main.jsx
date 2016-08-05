/**
 * Created by zhouzilong on 2016/8/5.
 */
var React = require('react'),
    ReactDOM = require('react-dom'),
    style = require('./app.css');

ReactDOM.render(
    <div>
        <h1 className={style.h1}>HelloWorld</h1>
        <h2 className="h2">HelloWorld</h2>
    </div>,
    document.getElementById("example")
);