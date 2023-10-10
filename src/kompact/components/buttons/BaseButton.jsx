import React from "react";
import "./../../styles/components/buttons.css";

export default class BaseButton extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.content = props.content ? props.content : " Base Button";
    this.bg = props.bg ? props.bg : "var(--lightshade)";
    this.fg = props.fg ? props.fg : "var(--darkshade)";
    this.outlineWidth = props.outlineWidth ? props.outlineWidth : "2px";
    this.outlineColor = props.outlineColor
      ? props.outlineColor
      : "var(--darkshade)";
    this.outlineStyle = props.outlineStyle ? props.outlineStyle : "groove";
  }
  render() {
    var style = {
      backgroundColor: this.bg,
      color: this.fg,
      borderWidth: this.outlineWidth,
      borderStyle: this.outlineStyle,
      borderColor: this.outlineColor,
    };
    return <button style={style}>{this.content}</button>;
  }
}
