import React from "react";
import "./Title.css";

function Title(props) {
  return <div>
    <div className="title">{props.children}</div>
    <ol>
      <li><strong>Click Any Image To Start!</strong></li>
      <li><strong>You score on every unique click.</strong></li>
      <li><strong>So don't click the same image twice!!!</strong></li>
      <li> <strong>HAVE FUN!!</strong></li>

    </ol>
  </div>
}

export default Title;
