"use client";
import Card from "@/components/ui/card-snippet";
import { Watermark } from "@/components/ui/watermark";
import DemoApp from "./demo-app";
const WaterMarkPage = () => {
  return (
    <div className=" space-y-5">
      <Card title="Basic Watermark" >
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">text</code> props change the
          watermark by changing the text value.
        </p>
        <Watermark text="DashTail">
          <div className="bg-default-900 dark:bg-default-50 text-white text-lg  rounded-lg shadow-lg  h-[500px] p-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum et
            neque esse labore nemo repellendus assumenda. Amet voluptatibus
            pariatur voluptates hic debitis et, illum officiis fuga, aliquid
            blanditiis maxime itaque deleniti repellendus at rerum sequi unde.
            Consequatur accusantium id odio.
          </div>
        </Watermark>
      </Card>
      <Card title="Multi Line Watermark">
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">multiline</code> props change the
          watermark from one line to different line.
        </p>
        <Watermark gutter={60} multiline text={`DashTail\nCodeshaper`}>
          <div className="bg-default-900 dark:bg-default-50 text-white text-lg   rounded-lg shadow-lg  h-[500px] p-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum et
            neque esse labore nemo repellendus assumenda. Amet voluptatibus
            pariatur voluptates hic debitis et, illum officiis fuga, aliquid
            blanditiis maxime itaque deleniti repellendus at rerum sequi unde.
            Consequatur accusantium id odio.
          </div>
        </Watermark>
      </Card>
      <Card title="Image Watermark">
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">image</code> props change the
          watermark text or image .
        </p>
        <Watermark text="image backgroun" image="/images/watermark/codeshaperlogo.png">
          <div className=" text-muted-foreground text-lg bg-background h-[500px] rounded-lg shadow-[0px_0px_5px_1px_rgba(0,0,0,0.3)] p-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum et
            neque esse labore nemo repellendus assumenda. Amet voluptatibus
            pariatur voluptates hic debitis et, illum officiis fuga, aliquid
            blanditiis maxime itaque deleniti repellendus at rerum sequi unde.
            Consequatur accusantium id odio.
          </div>
        </Watermark>
      </Card>
      <Card title="Multi Functional Watermark">
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The{" "}
          <code className="text-primary">
            text, textColor, gutter, opacity, rotate, textSize,
          </code>{" "}
          props change the watermark text size color rotation, textSize and
          opacity .
        </p>
        <DemoApp />
      </Card>
    </div>
  );
};

export default WaterMarkPage;
