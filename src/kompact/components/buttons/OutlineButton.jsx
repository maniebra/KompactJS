import BaseButton from "./BaseButton";

export default class OutlineButton extends BaseButton {
  constructor(props) {
    super(props);
    this.bg = "var(--lightaccent)";
    this.fg = "var(--darkshade)";
    this.outlineWidth = "2px";
    this.outlineStyle = "solid";
    this.outlineColor = "var(--darkshade)";
  }
}
