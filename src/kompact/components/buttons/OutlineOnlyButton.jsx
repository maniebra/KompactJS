import BaseButton from "./BaseButton";

export default class OutlineOnlyButton extends BaseButton {
  constructor(props) {
    super(props);
    this.bg = "var(--lightshade)";
    this.fg = "var(--darkshade)";
    this.outlineWidth = "2px";
    this.outlineStyle = "solid";
    this.outlineColor = "var(--darkshade)";
  }
}
