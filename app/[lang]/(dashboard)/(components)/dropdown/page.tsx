"use client";
import Card from "@/components/ui/card-snippet";
import BasicDropdown from "./default-dropdown";
import SoftDropdown from "./soft-dropdown";
import SizeDropdown from "./size-dropdown";
import {
  alignmentOptions,
  customDropdown,
  defaultDropdown,
  dropdownMenuContent,
  dropdownMenuItemColor,
  dropdownMenuWithDescription,
  dropdownMenuWithIcon,
  dropdownMenuWithShortcut,
  outlineDropdown,
  outlineSplitDropdown,
  sizeDropdown,
  softDropdown,
  splitDropdown,
} from "./source-code";
import SplitDropdown from "./split-dropdown";
import OutlineSplitDropdown from "./outline-split-dropdown";
import AlignmentOptions from "./alignment-options";
import DropdownMenuItemColor from "./dropdown-menu-item-color";
import OutlineDropdown from "./outline-dropdown";
import WithDescription from "./with-description";
import WithIcon from "./with-icon";
import MenuContent from "./menu-content";
import WithShortcut from "./with-shortcut";
import CustomDropdown from "./custom-dropdown";

const DropdownPage = () => {
  return (
    <div className=" space-y-5">
      <Card title="Default Dropdown" code={defaultDropdown}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">variant</code> prop is used to
          change the background color of the Button.
        </p>
        <div className=" flex flex-wrap gap-5">
          <BasicDropdown />
        </div>
      </Card>
      <Card title="Soft Dropdown" code={softDropdown}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">variant='soft'</code> prop is used
          to change for soft color
        </p>
        <div className=" flex flex-wrap gap-5">
          <SoftDropdown />
        </div>
      </Card>
      <Card title="Outline Dropdown" code={outlineDropdown}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">variant='outline'</code> prop is
          used to change for soft color
        </p>
        <div className=" flex flex-wrap gap-5">
          <OutlineDropdown />
        </div>
      </Card>
      <Card title="Size Dropdown" code={sizeDropdown}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">size</code> prop is used to change
          for size of button
        </p>
        <div className=" flex flex-wrap gap-5">
          <SizeDropdown />
        </div>
      </Card>
      <Card title="Split Dropdown" code={splitDropdown}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">variant</code> prop is used to
          change for split of button
        </p>
        <div className=" flex flex-wrap gap-5">
          <SplitDropdown />
        </div>
      </Card>
      <Card title="Outline Split Dropdown" code={outlineSplitDropdown}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary"> variant="outline"</code> prop is
          used to change for outline color
        </p>
        <div className=" flex flex-wrap gap-5">
          <OutlineSplitDropdown />
        </div>
      </Card>

      <Card title="Alignment Options" code={alignmentOptions}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">align</code> prop is used to change
          for align button tooltip
        </p>
        <div className=" flex flex-wrap gap-5 ">
          <AlignmentOptions />
        </div>
      </Card>
      <Card title="Dropdown Menu Color Item" code={dropdownMenuItemColor}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">variant</code> prop is used to
          change for color
        </p>
        <div className=" flex flex-wrap gap-5 ">
          <DropdownMenuItemColor />
        </div>
      </Card>
      <Card title="Dropdown Menu With Icon" code={dropdownMenuWithIcon}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">variant</code> prop is used to
          change for color
        </p>
        <div className=" flex flex-wrap gap-5 ">
          <WithIcon />
        </div>
      </Card>
      <Card title="Dropdown Menu With  Content" code={dropdownMenuContent}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">variant</code> prop is used to
          change for color
        </p>
        <div className=" flex flex-wrap gap-5 ">
          <MenuContent />
        </div>
      </Card>
      <Card title="Dropdown Menu With Shortcut" code={dropdownMenuWithShortcut}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">variant</code> prop is used to
          change for color
        </p>
        <div className=" flex flex-wrap gap-5 ">
          <WithShortcut />
        </div>
      </Card>
      <Card
        title="Dropdown Menu With Description"
        code={dropdownMenuWithDescription}
      >
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">variant</code> prop is used to
          change for color
        </p>
        <div className=" flex flex-wrap gap-5 ">
          <WithDescription />
        </div>
      </Card>
      <Card title="Custom Dropdown Items Style" code={customDropdown}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">button as image</code> change the
          appearance of dropdown button.
        </p>
        <div className=" flex flex-wrap gap-5 ">
          <CustomDropdown />
        </div>
      </Card>
    </div>
  );
};
export default DropdownPage;
