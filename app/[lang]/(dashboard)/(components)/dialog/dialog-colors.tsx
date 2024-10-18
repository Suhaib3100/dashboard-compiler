"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const DialogColors = () => {
  return (
    <div>
      <div className="flex flex-wrap  gap-x-5 gap-y-4 ">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Primary</Button>
          </DialogTrigger>
          <DialogContent size="md">
            <DialogHeader>
              <DialogTitle className="text-base font-medium text-default-700 ">
                What's the most popular city?
              </DialogTitle>
            </DialogHeader>
            <div className="text-sm text-default-500  space-y-4">
              <p>
                <span className="text-primary font-medium">Bangkok.</span> This
                famous busy city in Thailand ranks as the top-visited city in
                the world. Bangkok welcomed 21.2 million visitors! Imagine 21
                million people flocking to one city, crazy! The review puts
                Bangkok as the most visited city in the world, with
                approximately 22 million international visitors. More detailed
                studies reveal visitor patterns, such as an average of 4.7
                nights stay and an average spending of USD $173 daily.
              </p>
            </div>
            <DialogFooter className="mt-8">
              <DialogClose asChild>
                <Button  variant="outline" color="warning">
                  close
                </Button>
              </DialogClose>
              <Button  >
                Save
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Button color="secondary">Secondary</Button>
          </DialogTrigger>
          <DialogContent size="md">
            <DialogHeader>
              <DialogTitle className="text-base font-medium text-default-700 ">
                What's the most popular city?
              </DialogTitle>
            </DialogHeader>
            <div className="text-sm text-default-500  space-y-4">
              <p>
                <span className="text-primary font-medium">Bangkok.</span> This
                famous busy city in Thailand ranks as the top-visited city in
                the world. Bangkok welcomed 21.2 million visitors! Imagine 21
                million people flocking to one city, crazy! The review puts
                Bangkok as the most visited city in the world, with
                approximately 22 million international visitors. More detailed
                studies reveal visitor patterns, such as an average of 4.7
                nights stay and an average spending of USD $173 daily.
              </p>
            </div>
            <DialogFooter className="mt-8">
              <DialogClose asChild>
                <Button  variant="outline" color="warning">
                  close
                </Button>
              </DialogClose>
              <Button  >
                Save
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Button color="success">Success</Button>
          </DialogTrigger>
          <DialogContent size="md">
            <DialogHeader>
              <DialogTitle className="text-base font-medium text-default-700 ">
                What's the most popular city?
              </DialogTitle>
            </DialogHeader>
            <div className="text-sm text-default-500  space-y-4">
              <p>
                <span className="text-success font-medium">Bangkok.</span> This
                famous busy city in Thailand ranks as the top-visited city in
                the world. Bangkok welcomed 21.2 million visitors! Imagine 21
                million people flocking to one city, crazy! The review puts
                Bangkok as the most visited city in the world, with
                approximately 22 million international visitors. More detailed
                studies reveal visitor patterns, such as an average of 4.7
                nights stay and an average spending of USD $173 daily.
              </p>
            </div>
            <DialogFooter className="mt-8">
              <DialogClose asChild>
                <Button  variant="outline" color="warning">
                  close
                </Button>
              </DialogClose>
              <Button  color="success">
                Save
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Button color="warning">Warning</Button>
          </DialogTrigger>
          <DialogContent size="md">
            <DialogHeader>
              <DialogTitle className="text-base font-medium text-default-700 ">
                What's the most popular city?
              </DialogTitle>
            </DialogHeader>
            <div className="text-sm text-default-500  space-y-4">
              <p>
                <span className="text-warning font-medium">Bangkok.</span> This
                famous busy city in Thailand ranks as the top-visited city in
                the world. Bangkok welcomed 21.2 million visitors! Imagine 21
                million people flocking to one city, crazy! The review puts
                Bangkok as the most visited city in the world, with
                approximately 22 million international visitors. More detailed
                studies reveal visitor patterns, such as an average of 4.7
                nights stay and an average spending of USD $173 daily.
              </p>
            </div>
            <DialogFooter className="mt-8">
              <DialogClose asChild>
                <Button  variant="outline" color="warning">
                  close
                </Button>
              </DialogClose>
              <Button  color="warning">
                Save
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Button color="destructive">Destructive</Button>
          </DialogTrigger>
          <DialogContent size="md">
            <DialogHeader>
              <DialogTitle className="text-base font-medium text-default-700 ">
                What's the most popular city?
              </DialogTitle>
            </DialogHeader>
            <div className="text-sm text-default-500  space-y-4">
              <p>
                <span className="text-destructive font-medium">Bangkok.</span>{" "}
                This famous busy city in Thailand ranks as the top-visited city
                in the world. Bangkok welcomed 21.2 million visitors! Imagine 21
                million people flocking to one city, crazy! The review puts
                Bangkok as the most visited city in the world, with
                approximately 22 million international visitors. More detailed
                studies reveal visitor patterns, such as an average of 4.7
                nights stay and an average spending of USD $173 daily.
              </p>
            </div>
            <DialogFooter className="mt-8">
              <DialogClose asChild>
                <Button  variant="outline" color="warning">
                  close
                </Button>
              </DialogClose>
              <Button  color="destructive">
                Save
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Button color="info">Info</Button>
          </DialogTrigger>
          <DialogContent size="md">
            <DialogHeader>
              <DialogTitle className="text-base font-medium text-default-700 ">
                What's the most popular city?
              </DialogTitle>
            </DialogHeader>
            <div className="text-sm text-default-500  space-y-4">
              <p>
                <span className="text-info font-medium">Bangkok.</span> This
                famous busy city in Thailand ranks as the top-visited city in
                the world. Bangkok welcomed 21.2 million visitors! Imagine 21
                million people flocking to one city, crazy! The review puts
                Bangkok as the most visited city in the world, with
                approximately 22 million international visitors. More detailed
                studies reveal visitor patterns, such as an average of 4.7
                nights stay and an average spending of USD $173 daily.
              </p>
            </div>
            <DialogFooter className="mt-8">
              <DialogClose asChild>
                <Button  variant="outline" color="warning">
                  close
                </Button>
              </DialogClose>
              <Button  color="info">
                Save
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Button color="dark">Dark</Button>
          </DialogTrigger>
          <DialogContent size="md">
            <DialogHeader>
              <DialogTitle className="text-base font-medium text-default-700 ">
                What's the most popular city?
              </DialogTitle>
            </DialogHeader>
            <div className="text-sm text-default-500  space-y-4">
              <p>
                <span className="text-default-950 dark:text-primary-foreground font-medium">
                  Bangkok.
                </span>
                This famous busy city in Thailand ranks as the top-visited city
                in the world. Bangkok welcomed 21.2 million visitors! Imagine 21
                million people flocking to one city, crazy! The review puts
                Bangkok as the most visited city in the world, with
                approximately 22 million international visitors. More detailed
                studies reveal visitor patterns, such as an average of 4.7
                nights stay and an average spending of USD $173 daily.
              </p>
            </div>
            <DialogFooter className="mt-8">
              <DialogClose asChild>
                <Button  variant="outline" color="warning">
                  close
                </Button>
              </DialogClose>
              <Button  color="dark">
                Save
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default DialogColors;
