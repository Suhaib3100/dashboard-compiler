import Card from "@/components/ui/card-snippet";
import BasicPopover from "./basic-popover";
import PopoverPosition from "./popover-position";
import UserPopover from "./user-popover";
import ProgressPopover from "./progress-popover";

const PopoverPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card title="Basic Popover">
        <BasicPopover />
      </Card>
      <Card title="Popover Position">
        <PopoverPosition />
      </Card>
      <Card title="User Profile">
          <UserPopover />
      </Card>
      <Card title="Progress Popover">
        <ProgressPopover />
      </Card>
    </div>
  );
};

export default PopoverPage;