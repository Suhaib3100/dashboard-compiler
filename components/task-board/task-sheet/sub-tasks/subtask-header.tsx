"use client"

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Icon } from "@iconify/react";


const SubTaskHeader = () => {

  return (
    <form className="py-5 px-6 pb-8 border-b border-default-200">
      <div className="flex items-center gap-1 mb-2">
        <div className="mt-1">
          <Checkbox className="w-4 h-4" color="secondary" />
        </div>
        <input
          type="text"
          defaultValue="Project Title"
          className="h-7 w-full text-sm font-medium text-default-900 rounded-sm focus:border focus:border-default-200 focus:outline-none px-1 focus:bg-default-50"
        />
      </div>

      <div className="flex gap-1 relative">
        <div className="mt-1">
          <Icon
            icon="heroicons:information-circle"
            className="w-5 h-5 text-default-900"
          />
        </div>
        <textarea
          className="w-full h-16 border-none focus:border-none focus:outline-none p-1 text-sm text-default-700 peer"
          placeholder="Add Task Descriptions"
          rows={1}
        />
        <Button className="  text-xs h-6 py-0" type="submit">
          Save
        </Button>

      </div>
    </form>
  );
};

export default SubTaskHeader;