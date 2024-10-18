
import Card from "@/components/ui/card-snippet";
import DefaultKbd from "./default-kbd";
import KeysKbd from "./keys-kbd";
import SizeKbd from "./size-kbd";
import StyleKbd from "./style-kbd";
import InTextKbd from "./in-text-kbd";
import ArrowKbd from "./arrow-kbd";
import {
  arrowKbd,
  defaultKbd,
  inTextKbd,
  keysKbd,
  sizeKbd,
  styleKbd,
} from "./source-code";

const KbdPage = () => {
  return (
    <div className=" space-y-5">
      <Card title="Default Kbd" code={defaultKbd}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Keyboard key <code className="text-primary">Kbd </code> is a component
          to display which key or combination of keys performs a given action
        </p>
        <DefaultKbd />
      </Card>
      <Card title="Keys Kbd" code={keysKbd}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Keyboard key <code className="text-primary">Kbd </code> is a component
          to display which key or combination of keys performs a given action by
          showing keyboard in different..Each command{" "}
          <code className="text-primary">key </code> attribute that describes
          the action that the key performs.
        </p>
        <div className="space-y-5">
          <KeysKbd />
        </div>
      </Card>
      <Card title="Sizes Kbd" code={sizeKbd}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          In Keyboard key <code className="text-primary">size </code> prop make
          different size of the kbd keys.
        </p>
        <div className="space-y-5">
          <SizeKbd />
        </div>
      </Card>
      <Card title="Style Kbd" code={styleKbd}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          In Keyboard key with different combination make kbd style to show
          different style.
        </p>
        <div className="space-y-5">
          <StyleKbd />
        </div>
      </Card>
      <Card title="In text Kbd" code={inTextKbd}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          In text Kbd Keyboard key with make kbd into text to show different
          style.
        </p>
        <div className="space-y-5">
          <InTextKbd />
        </div>
      </Card>
      <Card title="Arrow Kbd" code={arrowKbd}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          In Arrow Kbd Keyboard key with make kbd direction to show different
          arrow like "up" "down" "left" "right" style.
        </p>
        <div className="space-y-5">
          <ArrowKbd />
        </div>
      </Card>
    </div>
  );
};

export default KbdPage;
