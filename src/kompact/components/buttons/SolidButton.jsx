import BaseButton from "./BaseButton";

export default class SolidButton extends BaseButton {
  constructor(props) {
    super(props);
    this.bg = "var(--mainbrand)";
    this.fg = "var(--lightshade)";
    this.outlineWidth = "0px";
  }
}
