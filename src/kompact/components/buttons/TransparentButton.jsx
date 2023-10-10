import BaseButton from "./BaseButton";

export default class TransparentButton extends BaseButton {
  constructor(props) {
    super(props);
    this.bg = "transparent";
    this.fg = "var(--darkshade)";
    this.outlineWidth = "0px";
  }
}
