"use client";
import Card from "@/components/ui/card-snippet";
import BasicDialog from "./basic-dialog";
import DialogNonDismisable from "./dialog-nondismisable";
import DialogForm from "./dialog-form";
import DialogSizes from "./dialog-sizes";
import DialogColors from "./dialog-colors";
import DialogPlacement from "./dialog-placement";
import ScrollableDialog from "./scrollable-dialog";
import DialogBackdrop from "./backdrop-dialog";
import MultiStepSliderDialog from "./multistep-slider-dialog";
import DialogAutoDestroyable from "./dialog-autodestroyable";
import CounterDialog from "./counter-dialog";
import RadioInputsDialog from "./radio-inputs-dialog";
import DialogWithTimeline from "./dialog-with-timeline";
import DialogWithProgressbar from "./dialog-with-progressbar";
import ToggleDialog from "./toggle-dialog";
import {
  autoDistroyAble,
  backdropDialog,
  basicDialog,
  colorsDialog,
  counterDialog,
  dialogPlacement,
  formModal,
  multiStepSlider,
  nondismissableDialog,
  scrollableDialog,
  sizesDialog,
  toggleDialog,
  withProgressBar,
  withRadioInput,
  withTimeline,
} from "./source-code";
const DialogPage = () => {
  return (
    <div className="space-y-6">
      <Card title="Basic Modal" code={basicDialog}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          No need to provide props for our default modal.
        </p>
        <BasicDialog />
      </Card>
      <Card title="Sizes" code={sizesDialog}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          {" "}
          The <span className="text-primary">size</span> prop is used to change
          the modal size. Our available sizes are{" "}
          <span className="text-primary">
            xs,sm,md,lg,xl,2xl,3xl,4xl,5xl and full
          </span>
        </p>
        <DialogSizes />
      </Card>
      <Card title="Colors" code={colorsDialog}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          {" "}
          The color <span className="text-primary">size</span> prop is used to
          change the modal size. Our available sizes are{" "}
          <span className="text-primary">
            xs,sm,md,lg,xl,2xl,3xl,4xl,5xl and full
          </span>
        </p>
        <DialogColors />
      </Card>
      <Card title="Non Dismissable" code={nondismissableDialog}>
        <div className="mb-4">
          <p className="text-sm text-default-400">
            It's a non dismissable modal
          </p>
        </div>
        <div className="flex flex-wrap  gap-x-5 gap-y-4 ">
          <DialogNonDismisable />
        </div>
      </Card>
      <Card title="Placement" code={dialogPlacement}>
        <div className="mb-4">
          <p className="text-sm text-default-500 ">
            Easily change position using custom css in <span className="text-primary">Dialog Content</span> component.
          </p>
        </div>
        <DialogPlacement />
      </Card>
      <Card title="Overflow Scroll" code={scrollableDialog}>
        <div className="mb-4">
          <p className="text-sm text-default-500 ">
            Create Scrollable Dialog using our <span className="text-primary">ScrollArea Component</span>.
          </p>
        </div>
        <div className="flex flex-wrap  gap-x-5 gap-y-4 ">
          <ScrollableDialog />
        </div>
      </Card>
      <Card title="Form" code={formModal}>
        <div className="mb-4">
          <p className="text-sm text-default-500 ">
            Use <span className="text-primary">form</span> in modal.
          </p>
        </div>
        <div className="flex flex-wrap  gap-x-5 gap-y-4 ">
          <DialogForm />
        </div>
      </Card>
      <Card title="Backdrop" code={backdropDialog}>
        <div className="mb-4">
          <p className="text-sm text-default-500 ">
            Create beautiful backdrop design with our <span className="text-primary">overlayClass</span>
          </p>
        </div>
        <DialogBackdrop />
      </Card>
      <Card title="Multi Step Slider" code={multiStepSlider}>
        <div className="mb-4">
          <p className="text-sm text-default-500 ">
            Use Slider in our dialog for creating multistep  <span className="text-primary">slider</span>
          </p>
        </div>
        <MultiStepSliderDialog />
      </Card>
      <Card title="Auto Destroyable Modal" code={autoDistroyAble}>
        <div className="mb-4">
          <p className="text-sm text-default-500 ">
            Auto Destroyable dialog will close after  <span className="text-primary">5s</span>
          </p>
        </div>
        <DialogAutoDestroyable />
      </Card>
      <Card title="Counter Modal" code={counterDialog}>
        <div className="mb-4">
          <p className="text-sm text-default-500 ">
            Use  state for changing <span className="text-primary">state. </span>
          </p>
        </div>
        <CounterDialog />
      </Card>
      <Card title="Modal With Radio Inputs" code={withRadioInput}>
        <div className="mb-4">
          <p className="text-sm text-default-500 ">
            Use  <span className="text-primary">RadioGroup and RadioGroupItem</span> component to use radio input.
          </p>
        </div>
        <RadioInputsDialog />
      </Card>
      <Card title="Dialog With Timeline" code={withTimeline}>
        <div className="mb-4">
          <p className="text-sm text-default-500 ">
            You can use timeline component in <span className="text-primary">dialog component</span>.
          </p>
        </div>
        <DialogWithTimeline />
      </Card>
      <Card title="Dialog With Progressbar" code={withProgressBar}>
        <div className="mb-4">
          <p className="text-sm text-default-500 ">
            You can use  <span className="text-primary">progressbar</span> in dialog component.
          </p>
        </div>
        <DialogWithProgressbar />
      </Card>

      <Card title="Toggle Between Modal" code={toggleDialog}>
        <div className="mb-4">
          <p className="text-sm text-default-500 ">
            Use simple condition for  <span className="text-primary">toggle</span>  modal
          </p>
        </div>
        <ToggleDialog />
      </Card>
    </div>
  );
};

export default DialogPage;
