import BaseButton from "./BaseButton";

export default class SecondaryButton extends BaseButton {
  constructor(props) {
    super(props);
    this.bg = "var(--lightaccent)";
    this.fg = "var(--darkshade)";
    this.outlineWidth = "0px";
  }
}
