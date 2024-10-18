import { Button } from "@/components/ui/button";

const RaisedButton = () => {
  return (
    <>
      <Button className="shadow-md">Default</Button>
      <Button color="secondary" className="shadow-md"> Secondary </Button>
      <Button color="success" className="shadow-md">Success </Button>
      <Button color="info" className="shadow-md">  Info</Button>
      <Button color="warning" className="shadow-md">  Warning </Button>
      <Button color="destructive" className="shadow-md"> Danger</Button>
    </>
  );
};

export default RaisedButton;
