"use client";
import Card from "@/components/ui/card-snippet";
import ReactSelectOption from "./react-select-options";
import BasicSelect from "./basic-select";


const ReactSelectPage = () => {
  return (
    <div className="space-y-5">
      <Card title="Basic React Select">
        <BasicSelect />
      </Card>
      <Card title="React Select Options">
        <ReactSelectOption />
      </Card>
    </div>
  );
};

export default ReactSelectPage;
