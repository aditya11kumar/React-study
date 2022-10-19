// var React = require("react"); or
import React from "react";
//var ReactDOM = require("react-dom");
import ReactDOM from "react-dom";

//ReactDOM.render("where to show","what to show","where to stop")
//ReactDOM.render(<h1>hello world!</h1>, document.getElementById("root"));
//here render can take only single HTML element
//for removing this problem we can use div

ReactDOM.render(
  <div>
    <h1>Hello world</h1>
    <p>this is a paragraph</p>
    <h2>List</h2>
    <ul>
      <li>hi</li>
      <li>hello</li>
    </ul>
  </div>,
  document.getElementById("root")
);
