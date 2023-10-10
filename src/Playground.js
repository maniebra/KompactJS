import Icon from "./favicon.ico";
import "./Playground.css";
import SolidButton from "./kompact/components/buttons/SolidButton";
import BaseButton from "./kompact/components/buttons/BaseButton";
import SecondaryButton from "./kompact/components/buttons/SecondaryButton";
import OutlineButton from "./kompact/components/buttons/OutlineButton";
import DashedButton from "./kompact/components/buttons/DashedButton";
import OutlineOnlyButton from "./kompact/components/buttons/OutlineOnlyButton";
import TransparentButton from "./kompact/components/buttons/TransparentButton";

function App() {
  return (
    <div className="playground">
      <BaseButton content="Base Button" />
      <SolidButton content="Solid Button" />
      <SecondaryButton content="Secondary Button" />
      <OutlineButton content="Outline Button" />
      <DashedButton content="Dashed Button" />
      <OutlineOnlyButton content="Outline-only Button" />
      <TransparentButton content="Transparent Button" />
    </div>
  );
}

export default App;
