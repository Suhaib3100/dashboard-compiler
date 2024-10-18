import Card from "@/components/ui/card-snippet";
import DefaultSteps from "./default-steps";
import StepsWithLineSpace from "./steps-with-linespace";
import StepsSize from "./steps-size";
import VSteps from "./v-steps";
import VStepsLineSpace from "./vsteps-with-linspace";
import VStepsWithContent from "./vsteps-with-content";
import StepsWithDataContent from "./steps-with-datacontent";
import StepsWithAction from "./steps-with-action";
import AlterNativeLabel from "./alternative-label";
import ErrorAlertSteps from "./error-alert-step";
import ClickableStep from "./clickable-step";

import {
  alterNativeLabel,
  alternativeLabelStepGap,
  clickableStep,
  defaultSteps,
  errorAlertSteps,
  stepsSize,
  stepsWithAction,
  stepsWithDataContent,
  stepsWithLineSpace,
  vStepsLineSpace,
  vStepsWithContent,
  verticalSteps,
} from "./source-code";
import AlternativeLabelStepGap from "./alternative-label-step-gap";

const StepsPage = () => {
  return (
    <div className="space-y-5">
      <Card title="Default Steps" code={defaultSteps}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">Stepper</code> component wraps
          other steps component that holds the design and{" "}
          <code className="text-primary">current</code> prop says which steps is
          it in.
        </p>
        <div className="max-w-xl">
          <DefaultSteps />
        </div>
      </Card>
      <Card title="With Line Space Steps" code={stepsWithLineSpace}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          When <code className="text-primary">gap</code> property uses in
          stepper component there will be a gap between the node and line.
        </p>
        <div className="max-w-xl">
          <StepsWithLineSpace />
        </div>
      </Card>
      <Card title="Clickable Steps" code={clickableStep}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">Stepper</code> component wraps
          other steps component that holds the design also{" "}
          <code className="text-primary">current</code> prop says which steps is
          in it and next and previous button helps the current steps to move
          forward and backward.
        </p>
        <div className="max-w-xl">
          <ClickableStep />
        </div>
      </Card>
      <Card title="Sizes Steps" code={stepsSize}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary">size</code> prop in stepper component
          makes steps in different size like "sm" "md" "lg" and "xl".
        </p>
        <div className="space-y-4 max-w-xl">
          <StepsSize />
        </div>
      </Card>

      <Card title="Vertical Steps" code={verticalSteps}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary">direction</code> prop in stepper
          component makes steps in 'vertical' or 'horizontal'.
        </p>
        <VSteps />
      </Card>
      <Card title="Vertical With Line Space" code={vStepsLineSpace}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary">gap</code> prop in direction stepper
          component makes steps in 'vertical' or 'horizontal' spaces between
          nodes and lines.
        </p>
        <VStepsLineSpace />
      </Card>
      <Card title="Vertical Steps With Content" code={vStepsWithContent}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary">Collapsible</code> component in step
          component using <code className="text-primary">open </code>prop to
          open the <code className="text-primary">CollapsibleContent </code>
          component to show the{" "}
          <code className="text-primary">StepDescription </code> component data
          as conditioned.
        </p>
        <VStepsWithContent />
      </Card>
      <Card title="With Data Content" code={stepsWithDataContent}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-6">
          <code className="text-primary">content</code> prop in stepper
          component makes content in 'right' or 'bottom' to show in different
          steps.
        </p>
        <StepsWithDataContent />
      </Card>
      <Card title="Content With Action Step" code={stepsWithAction}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary">current</code> prop in activestep
          function stepper component makes content in 'right' or 'bottom' to
          show in different steps. The{" "}
          <code className="text-primary">Stepper</code> component wraps other
          steps component that holds the design also{" "}
          <code className="text-primary">current</code> prop says which steps is
          in it and next and previous button helps the current steps to move
          forward and backward.
        </p>
        <StepsWithAction />
      </Card>
      <Card title="Alternative label" code={alterNativeLabel}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary">alternativeLabel</code> prop in stepper
          component makes content in bottom center with a extra description to
          show with steps number.
        </p>
        <AlterNativeLabel />
      </Card>
      <Card title="Alternative label Gap" code={alternativeLabelStepGap}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary">alternativeLabel</code> prop with
          <code className="text-primary"> gap </code> prop in stepper component
          makes content in bottom center with a extra description to show with
          steps number and make a space between node and line.
        </p>
        <AlternativeLabelStepGap />
      </Card>
      <Card title="Error Alert Step" code={errorAlertSteps}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary"> status </code> prop in stepper
          component with value 'error' makes label and node with destructive
          color and hold it there.
        </p>
        <ErrorAlertSteps />
      </Card>
    </div>
  );
};

export default StepsPage;
