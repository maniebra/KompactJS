import BaseButton from "./BaseButton";

export default class DashedButton extends BaseButton {
  constructor(props) {
    super(props);
    this.bg = "var(--lightaccent)";
    this.fg = "var(--darkshade)";
    this.outlineWidth = "2px";
    this.outlineColor = "var(--darkShade)";
    this.outlineStyle = "dashed";
  }
}
