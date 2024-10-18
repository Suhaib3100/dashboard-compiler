export const basicDialog = `"use client";
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
const BasicDialog = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Basic Modal</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-base font-medium ">
              What is Modals in UI Design?
            </DialogTitle>
          </DialogHeader>

            <div className="text-sm text-default-500  space-y-4">
              <p>
                <span className="text-primary font-medium">France</span> is the
                most visited country in the world with 117,109,000 international
                tourists, thanks to its rich history and iconic landmarks.
              </p>
              <p>
                France's magnetic City of Light is a perennial tourist
                destination, drawing visitors with its iconic attractions, like
                the Eiffel Tower and the Louvre, and its unmistakable je ne sais
                quoi. Quaint cafes, trendy shopping districts and Haussmann
                architecture give Paris its timeless beauty. But the city's best
                asset is that you're likely to discover something new with each
                trip or season (read: Paris is always a good idea). To best
                explore France's ever-changing capital, get lost wandering the
                charming cobblestone streets, learn its secrets on a walking
                tour head to dynamic art exhibits like the Atelier des Lumières
                or gourmandize at the latest restaurants and pastry shops
              </p>
            </div>
            <DialogFooter className="mt-8">
            <DialogClose asChild>
              <Button type="submit" variant="outline">
                Disagree
              </Button>
            </DialogClose>

              <Button type="submit">Agree</Button>
            </DialogFooter>

        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BasicDialog;
`;
export const sizesDialog = `"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
const DialogSizes = () => {
  return (
    <div className="flex flex-wrap  gap-x-5 gap-y-4 ">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open xs Modal</Button>
        </DialogTrigger>
        <DialogContent size="xs">
          <DialogHeader>
            <DialogTitle className="text-base font-medium text-default-700 ">
              What is the world's number one tourist destination?
            </DialogTitle>
          </DialogHeader>

          <div className="text-sm text-default-500  space-y-4">
            <p>
              <span className="text-primary font-medium">France</span> is the
              most visited country in the world with 117,109,000 international
              tourists, thanks to its rich history and iconic landmarks.
            </p>
            <p>
              France's magnetic City of Light is a perennial tourist
              destination, drawing visitors with its iconic attractions, like
              the Eiffel Tower and the Louvre, and its unmistakable je ne sais
              quoi. Quaint cafes, trendy shopping districts and Haussmann
              architecture give Paris its timeless beauty. But the city's best
              asset is that you're likely to discover something new with each
              trip or season (read: Paris is always a good idea). To best
              explore France's ever-changing capital, get lost wandering the
              charming cobblestone streets, learn its secrets on a walking
              tour head to dynamic art exhibits like the Atelier des Lumières
              or gourmandize at the latest restaurants and pastry shops
            </p>
          </div>
          <DialogFooter className="mt-8">
            <DialogClose asChild>
              <Button type="submit" variant="outline">
                Disagree
              </Button>
            </DialogClose>
            <Button type="submit">Agree</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open sm Modal</Button>
        </DialogTrigger>
        <DialogContent size="sm">
          <DialogHeader>
            <DialogTitle className="text-base font-medium text-default-700 ">
              What is the world's number one tourist destination?
            </DialogTitle>
          </DialogHeader>

          <div className="text-sm text-default-500  space-y-4">
            <p>
              <span className="text-primary font-medium">France</span> is the
              most visited country in the world with 117,109,000 international
              tourists, thanks to its rich history and iconic landmarks.
            </p>
            <p>
              France's magnetic City of Light is a perennial tourist
              destination, drawing visitors with its iconic attractions, like
              the Eiffel Tower and the Louvre, and its unmistakable je ne sais
              quoi. Quaint cafes, trendy shopping districts and Haussmann
              architecture give Paris its timeless beauty. But the city's best
              asset is that you're likely to discover something new with each
              trip or season (read: Paris is always a good idea). To best
              explore France's ever-changing capital, get lost wandering the
              charming cobblestone streets, learn its secrets on a walking
              tour head to dynamic art exhibits like the Atelier des Lumières
              or gourmandize at the latest restaurants and pastry shops
            </p>
          </div>
          <DialogFooter className="mt-8">
            <DialogClose asChild>
              <Button type="submit" variant="outline">
                Disagree
              </Button>
            </DialogClose>
            <Button type="submit">Agree</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open md Modal</Button>
        </DialogTrigger>
        <DialogContent size="md">
          <DialogHeader>
            <DialogTitle className="text-base font-medium text-default-700 ">
              What is the world's number one tourist destination?
            </DialogTitle>
          </DialogHeader>

          <div className="text-sm text-default-500  space-y-4">
            <p>
              <span className="text-primary font-medium">France</span> is the
              most visited country in the world with 117,109,000 international
              tourists, thanks to its rich history and iconic landmarks.
            </p>
            <p>
              France's magnetic City of Light is a perennial tourist
              destination, drawing visitors with its iconic attractions, like
              the Eiffel Tower and the Louvre, and its unmistakable je ne sais
              quoi. Quaint cafes, trendy shopping districts and Haussmann
              architecture give Paris its timeless beauty. But the city's best
              asset is that you're likely to discover something new with each
              trip or season (read: Paris is always a good idea). To best
              explore France's ever-changing capital, get lost wandering the
              charming cobblestone streets, learn its secrets on a walking
              tour head to dynamic art exhibits like the Atelier des Lumières
              or gourmandize at the latest restaurants and pastry shops
            </p>
          </div>
          <DialogFooter className="mt-8">
            <DialogClose asChild>
              <Button type="submit" variant="outline">
                Disagree
              </Button>
            </DialogClose>
            <Button type="submit">Agree</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open lg Modal</Button>
        </DialogTrigger>
        <DialogContent size="lg">
          <DialogHeader>
            <DialogTitle className="text-base font-medium text-default-700 ">
              What is the world's number one tourist destination?
            </DialogTitle>
          </DialogHeader>
          <div className="text-sm text-default-500  space-y-4">
            <p>
              <span className="text-primary font-medium">France</span> is the
              most visited country in the world with 117,109,000 international
              tourists, thanks to its rich history and iconic landmarks.
            </p>
            <p>
              France's magnetic City of Light is a perennial tourist
              destination, drawing visitors with its iconic attractions, like
              the Eiffel Tower and the Louvre, and its unmistakable je ne sais
              quoi. Quaint cafes, trendy shopping districts and Haussmann
              architecture give Paris its timeless beauty. But the city's best
              asset is that you're likely to discover something new with each
              trip or season (read: Paris is always a good idea). To best
              explore France's ever-changing capital, get lost wandering the
              charming cobblestone streets, learn its secrets on a walking
              tour head to dynamic art exhibits like the Atelier des Lumières
              or gourmandize at the latest restaurants and pastry shops
            </p>
          </div>
          <DialogFooter className="mt-8">
            <DialogClose asChild>
              <Button type="submit" variant="outline">
                Disagree
              </Button>
            </DialogClose>
            <Button type="submit">Agree</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open xl Modal</Button>
        </DialogTrigger>
        <DialogContent size="xl">
          <DialogHeader>
            <DialogTitle className="text-base font-medium text-default-700 ">
              What is the world's number one tourist destination?
            </DialogTitle>
          </DialogHeader>

          <div className="text-sm text-default-500  space-y-4">
            <p>
              <span className="text-primary font-medium">France</span> is the
              most visited country in the world with 117,109,000 international
              tourists, thanks to its rich history and iconic landmarks.
            </p>
            <p>
              France's magnetic City of Light is a perennial tourist
              destination, drawing visitors with its iconic attractions, like
              the Eiffel Tower and the Louvre, and its unmistakable je ne sais
              quoi. Quaint cafes, trendy shopping districts and Haussmann
              architecture give Paris its timeless beauty. But the city's best
              asset is that you're likely to discover something new with each
              trip or season (read: Paris is always a good idea). To best
              explore France's ever-changing capital, get lost wandering the
              charming cobblestone streets, learn its secrets on a walking
              tour head to dynamic art exhibits like the Atelier des Lumières
              or gourmandize at the latest restaurants and pastry shops
            </p>
          </div>
          <DialogFooter className="mt-8">
            <DialogClose asChild>
              <Button type="submit" variant="outline">
                Disagree
              </Button>
            </DialogClose>
            <Button type="submit">Agree</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open 2xl Modal</Button>
        </DialogTrigger>
        <DialogContent size="2xl">
          <DialogHeader>
            <DialogTitle className="text-base font-medium text-default-700 ">
              What is the world's number one tourist destination?
            </DialogTitle>
          </DialogHeader>

          <div className="text-sm text-default-500  space-y-4">
            <p>
              <span className="text-primary font-medium">France</span> is the
              most visited country in the world with 117,109,000 international
              tourists, thanks to its rich history and iconic landmarks.
            </p>
            <p>
              France's magnetic City of Light is a perennial tourist
              destination, drawing visitors with its iconic attractions, like
              the Eiffel Tower and the Louvre, and its unmistakable je ne sais
              quoi. Quaint cafes, trendy shopping districts and Haussmann
              architecture give Paris its timeless beauty. But the city's best
              asset is that you're likely to discover something new with each
              trip or season (read: Paris is always a good idea). To best
              explore France's ever-changing capital, get lost wandering the
              charming cobblestone streets, learn its secrets on a walking
              tour head to dynamic art exhibits like the Atelier des Lumières
              or gourmandize at the latest restaurants and pastry shops
            </p>
          </div>
          <DialogFooter className="mt-8">
            <DialogClose asChild>
              <Button type="submit" variant="outline">
                Disagree
              </Button>
            </DialogClose>
            <Button type="submit">Agree</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open 3xl Modal</Button>
        </DialogTrigger>
        <DialogContent size="3xl">
          <DialogHeader>
            <DialogTitle className="text-base font-medium text-default-700 ">
              What is the world's number one tourist destination?
            </DialogTitle>
          </DialogHeader>

          <div className="text-sm text-default-500  space-y-4">
            <p>
              <span className="text-primary font-medium">France</span> is the
              most visited country in the world with 117,109,000 international
              tourists, thanks to its rich history and iconic landmarks.
            </p>
            <p>
              France's magnetic City of Light is a perennial tourist
              destination, drawing visitors with its iconic attractions, like
              the Eiffel Tower and the Louvre, and its unmistakable je ne sais
              quoi. Quaint cafes, trendy shopping districts and Haussmann
              architecture give Paris its timeless beauty. But the city's best
              asset is that you're likely to discover something new with each
              trip or season (read: Paris is always a good idea). To best
              explore France's ever-changing capital, get lost wandering the
              charming cobblestone streets, learn its secrets on a walking
              tour head to dynamic art exhibits like the Atelier des Lumières
              or gourmandize at the latest restaurants and pastry shops
            </p>
          </div>
          <DialogFooter className="mt-8">
            <DialogClose asChild>
              <Button type="submit" variant="outline">
                Disagree
              </Button>
            </DialogClose>
            <Button type="submit">Agree</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open 4xl Modal</Button>
        </DialogTrigger>
        <DialogContent size="4xl">
          <DialogHeader>
            <DialogTitle className="text-base font-medium text-default-700 ">
              What is the world's number one tourist destination?
            </DialogTitle>
          </DialogHeader>
          <div className="text-sm text-default-500  space-y-4">
            <p>
              <span className="text-primary font-medium">France</span> is the
              most visited country in the world with 117,109,000 international
              tourists, thanks to its rich history and iconic landmarks.
            </p>
            <p>
              France's magnetic City of Light is a perennial tourist
              destination, drawing visitors with its iconic attractions, like
              the Eiffel Tower and the Louvre, and its unmistakable je ne sais
              quoi. Quaint cafes, trendy shopping districts and Haussmann
              architecture give Paris its timeless beauty. But the city's best
              asset is that you're likely to discover something new with each
              trip or season (read: Paris is always a good idea). To best
              explore France's ever-changing capital, get lost wandering the
              charming cobblestone streets, learn its secrets on a walking
              tour head to dynamic art exhibits like the Atelier des Lumières
              or gourmandize at the latest restaurants and pastry shops
            </p>
          </div>
          <DialogFooter className="mt-8">
            <DialogClose asChild>
              <Button type="submit" variant="outline">
                Disagree
              </Button>
            </DialogClose>
            <Button type="submit">Agree</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open 5xl Modal</Button>
        </DialogTrigger>
        <DialogContent size="5xl">
          <DialogHeader>
            <DialogTitle className="text-base font-medium text-default-700 ">
              What is the world's number one tourist destination?
            </DialogTitle>
          </DialogHeader>
          <div className="text-sm text-default-500  space-y-4">
            <p>
              <span className="text-primary font-medium">France</span> is the
              most visited country in the world with 117,109,000 international
              tourists, thanks to its rich history and iconic landmarks.
            </p>
            <p>
              France's magnetic City of Light is a perennial tourist
              destination, drawing visitors with its iconic attractions, like
              the Eiffel Tower and the Louvre, and its unmistakable je ne sais
              quoi. Quaint cafes, trendy shopping districts and Haussmann
              architecture give Paris its timeless beauty. But the city's best
              asset is that you're likely to discover something new with each
              trip or season (read: Paris is always a good idea). To best
              explore France's ever-changing capital, get lost wandering the
              charming cobblestone streets, learn its secrets on a walking
              tour head to dynamic art exhibits like the Atelier des Lumières
              or gourmandize at the latest restaurants and pastry shops
            </p>
          </div>
          <DialogFooter className="mt-8">
            <DialogClose asChild>
              <Button type="submit" variant="outline">
                Disagree
              </Button>
            </DialogClose>
            <Button type="submit">Agree</Button>
          </DialogFooter>

        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button> Open full Modal</Button>
        </DialogTrigger>
        <DialogContent size="full">
          <DialogHeader>
            <DialogTitle className="text-base font-medium text-default-700 ">
              What is the world's number one tourist destination?
            </DialogTitle>
          </DialogHeader>
          <div className="text-sm text-default-500  space-y-4 h-screen overflow-y-auto">
            <p>
              <span className="text-primary font-medium">France</span> is the
              most visited country in the world with 117,109,000 international
              tourists, thanks to its rich history and iconic landmarks.
            </p>
            <p>
              France's magnetic City of Light is a perennial tourist
              destination, drawing visitors with its iconic attractions, like
              the Eiffel Tower and the Louvre, and its unmistakable je ne sais
              quoi. Quaint cafes, trendy shopping districts and Haussmann
              architecture give Paris its timeless beauty. But the city's best
              asset is that you're likely to discover something new with each
              trip or season (read: Paris is always a good idea). To best
              explore France's ever-changing capital, get lost wandering the
              charming cobblestone streets, learn its secrets on a walking
              tour head to dynamic art exhibits like the Atelier des Lumières
              or gourmandize at the latest restaurants and pastry shops
            </p>
          </div>
          <DialogFooter className="absolute bottom-0 left-0 w-full py-3 pr-12 bg-background flex-row gap-4 justify-end">
            <DialogClose asChild>
              <Button type="submit" variant="outline">
                Disagree
              </Button>
            </DialogClose>
            <Button type="submit">Agree</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogSizes;
`;
export const colorsDialog = `"use client";
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
                <Button type="submit" variant="outline">
                  Disagree
                </Button>
              </DialogClose>
              <Button type="submit" color="primary">
                Agree
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
                <Button type="submit" variant="outline">
                  Disagree
                </Button>
              </DialogClose>
              <Button type="submit" color="success">
                Agree
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
                <Button type="submit" variant="outline">
                  Disagree
                </Button>
              </DialogClose>
              <Button type="submit" color="warning">
                Agree
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
                <Button type="submit" variant="outline">
                  Disagree
                </Button>
              </DialogClose>
              <Button type="submit" color="destructive">
                Agree
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
                <Button type="submit" variant="outline">
                  Disagree
                </Button>
              </DialogClose>
              <Button type="submit" color="info">
                Agree
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
                <Button type="submit" variant="outline">
                  Disagree
                </Button>
              </DialogClose>
              <Button type="submit" color="dark">
                Agree
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default DialogColors;
`;
export const nondismissableDialog = `"use client";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
const DialogNonDismisable = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button color="dark" variant="soft">
          Open Modal
        </Button>
      </DialogTrigger>
      <DialogContent className="p-6" size="md">
        <div className="flex flex-col items-center text-center">
          <span className="text-8xl text-success">
            <Icon icon="iconoir:emoji" />
          </span>
          <h3 className="mt-6 mb-4 text-success text-xl font-semibold">
            Now We're Happy Together
          </h3>
          <p className="text-sm text-default-500 ">
            Your body knows that if it achieves an objective, your mind will
            flood the body with dopamine causing you to feel happy. This isn't
            just true of achieving big goals.
          </p>
        </div>
        <DialogFooter className="mt-8">
          <DialogClose asChild>
            <Button type="submit" color="success"> Close </Button>
          </DialogClose>

        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogNonDismisable;
`;
export const dialogPlacement = `"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { faker } from "@faker-js/faker";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
const DialogPlacement = () => {
  return (
    <div className="flex flex-wrap  gap-x-5 gap-y-4 ">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Left</Button>
        </DialogTrigger>
        <DialogContent size="md" className="left-2 translate-x-0">

          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <Avatar className="w-[72px] h-[72px]">
                <AvatarImage src={faker.image.avatarLegacy()} />
                <AvatarFallback>SN</AvatarFallback>
              </Avatar>
              <Badge
                color="success"
                className=" h-2 w-2  p-0  absolute top-[2px] right-[8px]"
              ></Badge>
            </div>
            <h3 className="text-lg font-semibold text-default-950 dark:text-primary-foreground">
              Jenyyfer Nolan
            </h3>
            <span className="text-sm text-default-500  mt-1 block">
              UX/UI Designer
            </span>
            <p className="text-sm text-default-500  mt-3">
              I am a UI/UX Designer with over 2.5 years of experience in the
              field. I sincerely believe that by working together,
              extraordinary friendships can be made all over the world
            </p>
          </div>
          <hr className="my-5 border-border" />
          <DialogFooter className="sm:justify-center">
            <DialogClose asChild>
              <Button type="submit" variant="outline"> Close </Button>
            </DialogClose>
            <Button type="submit" > Follow me  </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Right</Button>
        </DialogTrigger>
        <DialogContent className="left-['unset'] right-2 translate-x-0">

          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <Avatar className="w-[72px] h-[72px]">
                <AvatarImage src={faker.image.avatarLegacy()} />
                <AvatarFallback>SN</AvatarFallback>
              </Avatar>
              <Badge
                color="success"
                className=" h-2 w-2  p-0  absolute top-[2px] right-[8px]"
              ></Badge>
            </div>
            <h3 className="text-lg font-semibold text-default-950 dark:text-primary-foreground">
              Jenyyfer Nolan
            </h3>
            <span className="text-sm text-default-500  mt-1 block">
              UX/UI Designer
            </span>
            <p className="text-sm text-default-500  mt-3">
              I am a UI/UX Designer with over 2.5 years of experience in the
              field. I sincerely believe that by working together,
              extraordinary friendships can be made all over the world
            </p>
          </div>
          <hr className="my-5 border-border" />
          <DialogFooter className="sm:justify-center">
            <DialogClose asChild>
              <Button type="submit" variant="outline"> Close </Button>
            </DialogClose>
            <Button type="submit">
              Follow me
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Top</Button>
        </DialogTrigger>
        <DialogContent className="top-2 translate-y-0">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <Avatar className="w-[72px] h-[72px]">
                <AvatarImage src={faker.image.avatarLegacy()} />
                <AvatarFallback>SN</AvatarFallback>
              </Avatar>
              <Badge
                color="success"
                className=" h-2 w-2  p-0  absolute top-[2px] right-[8px]"
              ></Badge>
            </div>
            <h3 className="text-lg font-semibold text-default-950 dark:text-primary-foreground">
              Jenyyfer Nolan
            </h3>
            <span className="text-sm text-default-500  mt-1 block">
              UX/UI Designer
            </span>
            <p className="text-sm text-default-500  mt-3">
              I am a UI/UX Designer with over 2.5 years of experience in the
              field. I sincerely believe that by working together,
              extraordinary friendships can be made all over the world
            </p>
          </div>
          <hr className="my-5 border-border" />
          <DialogFooter className="sm:justify-center">
            <DialogClose asChild>
              <Button type="submit" variant="outline"> Close </Button>
            </DialogClose>
            <Button type="submit">
              Follow me
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Center</Button>
        </DialogTrigger>
        <DialogContent>
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <Avatar className="w-[72px] h-[72px]">
                <AvatarImage src={faker.image.avatarLegacy()} />
                <AvatarFallback>SN</AvatarFallback>
              </Avatar>
              <Badge
                color="success"
                className=" h-2 w-2  p-0  absolute top-[2px] right-[8px]"
              ></Badge>
            </div>
            <h3 className="text-lg font-semibold text-default-950 dark:text-primary-foreground">
              Jenyyfer Nolan
            </h3>
            <span className="text-sm text-default-500  mt-1 block">
              UX/UI Designer
            </span>
            <p className="text-sm text-default-500  mt-3">
              I am a UI/UX Designer with over 2.5 years of experience in the
              field. I sincerely believe that by working together,
              extraordinary friendships can be made all over the world
            </p>
          </div>
          <hr className="my-5 border-border" />
          <DialogFooter className="sm:justify-center">
            <DialogClose asChild>
              <Button type="submit" variant="outline"> Close </Button>
            </DialogClose>
            <Button type="submit">
              Follow me
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Bottom</Button>
        </DialogTrigger>
        <DialogContent className="top-['unset'] bottom-2 translate-y-0">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <Avatar className="w-[72px] h-[72px]">
                <AvatarImage src={faker.image.avatarLegacy()} />
                <AvatarFallback>SN</AvatarFallback>
              </Avatar>
              <Badge
                color="success"
                className=" h-2 w-2  p-0  absolute top-[2px] right-[8px]"
              ></Badge>
            </div>
            <h3 className="text-lg font-semibold text-default-950 dark:text-primary-foreground">
              Jenyyfer Nolan
            </h3>
            <span className="text-sm text-default-500  mt-1 block">
              UX/UI Designer
            </span>
            <p className="text-sm text-default-500  mt-3">
              I am a UI/UX Designer with over 2.5 years of experience in the
              field. I sincerely believe that by working together,
              extraordinary friendships can be made all over the world
            </p>
          </div>
          <hr className="my-5 border-border" />
          <DialogFooter className="sm:justify-center">
            <DialogClose asChild>
              <Button type="submit" variant="outline"> Close </Button>
            </DialogClose>
            <Button type="submit">
              Follow me
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Top Left</Button>
        </DialogTrigger>
        <DialogContent className="left-2 top-2 translate-y-0 translate-x-0">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <Avatar className="w-[72px] h-[72px]">
                <AvatarImage src={faker.image.avatarLegacy()} />
                <AvatarFallback>SN</AvatarFallback>
              </Avatar>
              <Badge
                color="success"
                className=" h-2 w-2  p-0  absolute top-[2px] right-[8px]"
              ></Badge>
            </div>
            <h3 className="text-lg font-semibold text-default-950 dark:text-primary-foreground">
              Jenyyfer Nolan
            </h3>
            <span className="text-sm text-default-500  mt-1 block">
              UX/UI Designer
            </span>
            <p className="text-sm text-default-500  mt-3">
              I am a UI/UX Designer with over 2.5 years of experience in the
              field. I sincerely believe that by working together,
              extraordinary friendships can be made all over the world
            </p>
          </div>
          <hr className="my-5 border-border" />
          <DialogFooter className="sm:justify-center">
            <DialogClose asChild>
              <Button type="submit" variant="outline"> Close </Button>
            </DialogClose>
            <Button type="submit" color="success">
              Follow me
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Top Right</Button>
        </DialogTrigger>
        <DialogContent className="left-['unset'] top-2 right-2 translate-y-0 translate-x-0">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <Avatar className="w-[72px] h-[72px]">
                <AvatarImage src={faker.image.avatarLegacy()} />
                <AvatarFallback>SN</AvatarFallback>
              </Avatar>
              <Badge
                color="success"
                className=" h-2 w-2  p-0  absolute top-[2px] right-[8px]"
              ></Badge>
            </div>
            <h3 className="text-lg font-semibold text-default-950 dark:text-primary-foreground">
              Jenyyfer Nolan
            </h3>
            <span className="text-sm text-default-500  mt-1 block">
              UX/UI Designer
            </span>
            <p className="text-sm text-default-500  mt-3">
              I am a UI/UX Designer with over 2.5 years of experience in the
              field. I sincerely believe that by working together,
              extraordinary friendships can be made all over the world
            </p>
          </div>
          <hr className="my-5 border-border" />
          <DialogFooter className="sm:justify-center">
            <DialogClose asChild>
              <Button type="submit" variant="outline"> Close </Button>
            </DialogClose>
            <Button type="submit">
              Follow me
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Bottom Left</Button>
        </DialogTrigger>
        <DialogContent className="top-['unset'] left-2 bottom-2 translate-y-0 translate-x-0">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <Avatar className="w-[72px] h-[72px]">
                <AvatarImage src={faker.image.avatarLegacy()} />
                <AvatarFallback>SN</AvatarFallback>
              </Avatar>
              <Badge
                color="success"
                className=" h-2 w-2  p-0  absolute top-[2px] right-[8px]"
              ></Badge>
            </div>
            <h3 className="text-lg font-semibold text-default-950 dark:text-primary-foreground">
              Jenyyfer Nolan
            </h3>
            <span className="text-sm text-default-500  mt-1 block">
              UX/UI Designer
            </span>
            <p className="text-sm text-default-500  mt-3">
              I am a UI/UX Designer with over 2.5 years of experience in the
              field. I sincerely believe that by working together,
              extraordinary friendships can be made all over the world
            </p>
          </div>
          <hr className="my-5 border-border" />
          <DialogFooter className="sm:justify-center">
            <DialogClose asChild>
              <Button type="submit" variant="outline"> Close </Button>
            </DialogClose>
            <Button type="submit">
              Follow me
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Bottom Center</Button>
        </DialogTrigger>
        <DialogContent className="top-['unset'] bottom-2 translate-y-0">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <Avatar className="w-[72px] h-[72px]">
                <AvatarImage src={faker.image.avatarLegacy()} />
                <AvatarFallback>SN</AvatarFallback>
              </Avatar>
              <Badge
                color="success"
                className=" h-2 w-2  p-0  absolute top-[2px] right-[8px]"
              ></Badge>
            </div>
            <h3 className="text-lg font-semibold text-default-950 dark:text-primary-foreground">
              Jenyyfer Nolan
            </h3>
            <span className="text-sm text-default-500  mt-1 block">
              UX/UI Designer
            </span>
            <p className="text-sm text-default-500  mt-3">
              I am a UI/UX Designer with over 2.5 years of experience in the
              field. I sincerely believe that by working together,
              extraordinary friendships can be made all over the world
            </p>
          </div>
          <hr className="my-5 border-border" />
          <DialogFooter className="sm:justify-center">
            <DialogClose asChild>
              <Button type="submit" variant="outline"> Close </Button>
            </DialogClose>
            <Button type="submit">
              Follow me
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Bottom Right</Button>
        </DialogTrigger>
        <DialogContent className="top-['unset'] left-['unset'] bottom-2 right-2 translate-x-0 translate-y-0">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <Avatar className="w-[72px] h-[72px]">
                <AvatarImage src={faker.image.avatarLegacy()} />
                <AvatarFallback>SN</AvatarFallback>
              </Avatar>
              <Badge
                color="success"
                className=" h-2 w-2  p-0  absolute top-[2px] right-[8px]"
              ></Badge>
            </div>
            <h3 className="text-lg font-semibold text-default-950 dark:text-primary-foreground">
              Jenyyfer Nolan
            </h3>
            <span className="text-sm text-default-500  mt-1 block">
              UX/UI Designer
            </span>
            <p className="text-sm text-default-500  mt-3">
              I am a UI/UX Designer with over 2.5 years of experience in the
              field. I sincerely believe that by working together,
              extraordinary friendships can be made all over the world
            </p>
          </div>
          <hr className="my-5 border-border" />
          <DialogFooter className="sm:justify-center">
            <DialogClose asChild>
              <Button type="submit" variant="outline"> Close </Button>
            </DialogClose>
            <Button type="submit">
              Follow me
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogPlacement;
`;
export const formModal = `"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import Flatpickr from "react-flatpickr";
const DialogForm = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Form</Button>
      </DialogTrigger>
      <DialogContent size="2xl">
        <DialogHeader className="p-0">
          <DialogTitle className="text-base font-medium text-default-700 ">
            Create a New Account
          </DialogTitle>
        </DialogHeader>
        <div>
          <div className="h-[290px]">
            <ScrollArea className="h-full">
              <div className="sm:grid  sm:grid-cols-2 sm:gap-5 space-y-4 sm:space-y-0">
                <div className="flex flex-col gap-2">
                  <Label>First Name</Label>
                  <Input type="text" placeholder="Enter first name" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Last Name</Label>
                  <Input type="text" placeholder="Enter last name" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Email Address</Label>
                  <Input type="email" placeholder="Enter email address" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Phone Number</Label>
                  <Input type="number" placeholder="Your phone number" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Set Password</Label>
                  <Input type="number" placeholder="Your phone number" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Date of birth</Label>
                  <Flatpickr
                    className='w-full border border-default-200 focus:border-primary focus:outline-none h-10 rounded-md px-2 placeholder:text-default-600'
                    placeholder='Date of birth'
                  />
                </div>
                <div className="col-span-2 flex  items-center gap-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-xs text-default-700 cursor-pointer">
                    You agree to our Terms, Privacy Policy. You may receive SMS
                    notifications from us and can opt out at any time.
                  </Label>
                </div>
              </div>
            </ScrollArea>
          </div>

          <div className=" flex justify-center gap-3 mt-4">
            <DialogClose asChild>
              <Button type="button" variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="button">Create Account </Button>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm font-medium text-default-700 ">
              Already Have An Account?
              <Link href="/dashboard" className="text-success"> Sign In  </Link>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogForm;
`;
export const autoDistroyAble = `"use client";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useEffect, useState } from "react";

const DialogAutoDestroyable = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      const timeout = setTimeout(() => {
        setOpen(false);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [open])
  return (
    <>
      <Dialog open={open}>
        <Button type="button" onClick={() => setOpen(true)}>Open Modal Close in 5s</Button>
        <DialogContent >
          <DialogHeader>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-sm border border-border grid place-content-center">
                <Icon icon="heroicons:square-3-stack-3d" className="w-5 h-5 text-default-500" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-default-700  mb-1"> Select Plan</h4>
                <p className="text-xs text-default-500 ">
                  This modal will be destroyed after 5 second.
                </p>
              </div>
            </div>
          </DialogHeader>
          <RadioGroup defaultValue="1" className="cursor-pointer">
            <div className="sm:grid sm:grid-cols-2 mt-5 sm:gap-5">
              <Label htmlFor="basic" className="border-2 rounded-sm border-border p-3">
                <div className="flex justify-between items-center">
                  <h3 className="grow text-xs font-semibold text-default-700 ">
                    Basic Plan
                  </h3>
                  <RadioGroupItem value="1" id="basic" />
                </div>
                <div className="mt-1">
                  <h3 className="text-base font-semibold text-default-950 dark:text-primary-foreground">
                    $40/User
                  </h3>
                  <p className="text-[10px] text-default-500">
                    Includes 20GB individual data
                  </p>
                </div>
                <ul className="mt-3 space-y-[6px]">
                  <li className="flex items-center gap-[6px]">
                    <span className="text-primary text-xl">
                      <Icon icon="ri:checkbox-circle-line" />
                    </span>
                    <span>32+ Pages</span>
                  </li>
                  <li className="flex items-center gap-[6px]">
                    <span className="text-primary text-xl">
                      <Icon icon="ri:checkbox-circle-line" />
                    </span>
                    <span>Basic Report</span>
                  </li>
                  <li className="flex items-center gap-[6px]">
                    <span className="text-primary text-xl">
                      <Icon icon="ri:checkbox-circle-line" />
                    </span>
                    <span>UI Components</span>
                  </li>
                  <li className="flex items-center gap-[6px]">
                    <span className="text-primary text-xl">
                      <Icon icon="ri:checkbox-circle-line" />
                    </span>
                    <span>Customer Support</span>
                  </li>
                  <li className="flex items-center gap-[6px]">
                    <span className="text-primary text-xl">
                      <Icon icon="ri:checkbox-circle-line" />
                    </span>
                    <span>Lifetime Code Support</span>
                  </li>
                </ul>
              </Label>
              <Label htmlFor="standard" className="border-2 rounded-sm border-border p-3">
                <div className="flex justify-between items-center">
                  <h3 className="grow text-xs font-semibold text-default-700 ">
                    Standard Plan
                  </h3>
                  <RadioGroupItem value="2" id="standard" />
                </div>
                <div className="mt-1">
                  <h3 className="text-base font-semibold text-default-950 dark:text-primary-foreground">
                    $40/User
                  </h3>
                  <p className="text-[10px] text-default-500">
                    Includes 20GB individual data
                  </p>
                </div>
                <ul className="mt-3 space-y-[6px]">
                  <li className="flex items-center gap-[6px]">
                    <span className="text-primary text-xl">
                      <Icon icon="ri:checkbox-circle-line" />
                    </span>
                    <span>32+ Pages</span>
                  </li>
                  <li className="flex items-center gap-[6px]">
                    <span className="text-primary text-xl">
                      <Icon icon="ri:checkbox-circle-line" />
                    </span>
                    <span>Basic Report</span>
                  </li>
                  <li className="flex items-center gap-[6px]">
                    <span className="text-primary text-xl">
                      <Icon icon="ri:checkbox-circle-line" />
                    </span>
                    <span>UI Components</span>
                  </li>
                  <li className="flex items-center gap-[6px]">
                    <span className="text-primary text-xl">
                      <Icon icon="ri:checkbox-circle-line" />
                    </span>
                    <span>Customer Support</span>
                  </li>
                  <li className="flex items-center gap-[6px]">
                    <span className="text-primary text-xl">
                      <Icon icon="ri:checkbox-circle-line" />
                    </span>
                    <span>Lifetime Code Support</span>
                  </li>
                </ul>
              </Label>
            </div>
          </RadioGroup>
          <DialogFooter className="mt-6">
            <Button type="submit" variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="submit">Start Plan</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogAutoDestroyable;
`;
export const withRadioInput = `"use client";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const RadioInputsDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Modal With Radio Inputs</Button>
      </DialogTrigger>
      <DialogContent size="md" >
        <DialogHeader>
          <span>Select Your Course</span>
        </DialogHeader>
        <RadioGroup defaultValue="ux">
          <ul className="space-y-4 w-full">
            <li className="border-2 border-default-200 rounded-sm p-3 group hover:border-primary">
              <RadioGroupItem value="ux" className="hidden" id="job_1" />
              <Label htmlFor="job_1" className="w-full">
                <div className="flex items-center">
                  <div className="grow flex flex-col gap-1">
                    <h3 className="text-sm font-semibold text-default-950 group-hover:text-primary">UX/UI Design Course</h3>
                    <span className="text-xs text-default-600">DashTail</span>
                    <span className="text-xs text-default-600">20 seats available</span>
                  </div>
                  <div>
                    <span className="text-xl"><Icon icon="ph:arrow-right-light" /></span>
                  </div>
                </div>
              </Label>
            </li>
            <li className="border-2 border-default-200 rounded-sm p-3 group hover:border-primary">
              <RadioGroupItem value="php-laravel" className="hidden" id="job_2" />
              <Label htmlFor="job_2" className="w-full">
                <div className="flex items-center">
                  <div className="grow flex flex-col gap-1">
                    <h3 className="text-sm font-semibold text-default-950 group-hover:text-primary">PHP/Laravel Course</h3>
                    <span className="text-xs text-default-600">DashTail</span>
                    <span className="text-xs text-default-600">20 seats available</span>
                  </div>
                  <div>
                    <span className="text-xl"><Icon icon="ph:arrow-right-light" /></span>
                  </div>
                </div>
              </Label>
            </li>
            <li className="border-2 border-default-200 rounded-sm p-3 group hover:border-primary">
              <RadioGroupItem value="marketting" className="hidden" id="job_3" />
              <Label htmlFor="job-3" className="w-full">
                <div className="flex items-center">
                  <div className="grow flex flex-col gap-1">
                    <h3 className="text-sm font-semibold text-default-950 group-hover:text-primary">Digital Marketing Course</h3>
                    <span className="text-xs text-default-600">DashTail</span>
                    <span className="text-xs text-default-600">20 seats available</span>
                  </div>
                  <div>
                    <span className="text-xl"><Icon icon="ph:arrow-right-light" /></span>
                  </div>
                </div>
              </Label>
            </li>
          </ul>
        </RadioGroup>
        <DialogFooter className="mt-4 p-5">
          <DialogClose asChild><Button type="button" variant="outline">Cancel</Button></DialogClose>
          <Button type="submit">Purchase Course</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RadioInputsDialog;
`;
export const withTimeline = `"use client";
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
import BasicTimeline from "../timeline/basic-timeline";
const DialogWithTimeline = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Modal With Timeline</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-base font-medium ">
              Submit Your Weekly Report
            </DialogTitle>
          </DialogHeader>
          <BasicTimeline />
          <DialogFooter>
            <DialogClose asChild><Button type="button" variant="outline">Close</Button></DialogClose>
            <Button type="submit">Okay</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogWithTimeline;
`;
export const withProgressBar = `"use client";
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
import { Icon } from '@iconify/react';
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const DialogWithProgressbar = () => {
  const [value2, setValue2] = useState(96);
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Modal With Progressbar</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-base font-medium text-warning"> Almost out of storage </DialogTitle>
          </DialogHeader>
          <div>
            <div className="text-sm font-semibold text-default-950 mb-2">Approaching Full Capacity</div>
            <p className="text-xs text-default-700">If you run out, you can't back up photos, or send and receive any documents.</p>
          </div>
          <div className="flex justify-between">
            <Label className="flex items-center gap-2">
              <span className="text-xl"><Icon icon="ic:outline-cloud" /></span>
              My Storage
            </Label>
            <Label>{value2}% used</Label>
          </div>
          <Progress value={value2} color="warning" />
          <DialogFooter className="sm:justify-start mt-5" >
            <Button type="submit" color="primary">Upgrade To Pro</Button>
            <DialogClose asChild> <Button type="submit" variant="outline">Cancel</Button></DialogClose>
          </DialogFooter>

        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogWithProgressbar;
`;
export const scrollableDialog = `"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DialogClose } from "@radix-ui/react-dialog";

import waterfall from "@/public/images/all-img/water-fall.jpg";
import Image from "next/image";

const ScrollableDialog = () => {
  return (
    <div className="flex flex-wrap  gap-x-5 gap-y-4 ">
      <Dialog>
        <DialogTrigger asChild>
          <Button type="button">Inside</Button>
        </DialogTrigger>
        <DialogContent className="overflow-y-auto max-h-screen p-0">
          <div className="h-[300px] sm:h-[600px]  w-full">
            <ScrollArea className="h-full p-5 ">
              <div className="h-[150px] sm:h-[212px]">
                <Image
                  src={waterfall}
                  className="w-full h-full object-cover rounded-sm"
                  alt=""
                />
              </div>
              <h3 className="text-lg font-semibold text-default-950 dark:text-primary-foreground mt-5">
                The most wonderful sea beach in the world
              </h3>
              <div className="mt-4 space-y-6">
                <div>
                  <h4 className="text-base font-semibold text-default-800  mb-3">
                    1. Saud Beach, Philippines
                  </h4>
                  <p className="text-sm text-default-500 ">
                    If you're searching for Southeast Asian beach bliss,
                    super-mellow Saud Beach on the island of Luzon is a sure
                    thing. Its white sand pitches gradually into the
                    clear-as-glass water, like a real-world example of a
                    zero-entry swimming pool. Swim in the peaceful waves, lunch
                    under a thatch-roof cabana under the palms, or hire an
                    outrigger for excursions on the water.
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-default-800  mb-3">
                    2. Elafonissi Beach, Greece
                  </h4>
                  <p className="text-sm text-default-500 ">
                    Crete's Elafonissi Beach's immense popularity comes from its
                    pretty pinkish sand, warm lagoon-like waters, and very wild
                    feel. Elafonissi Beach is actually an island, separated from
                    the mainland by the shallow water and sandbars that only
                    disappear under about three feet of water at high tide.
                    Facilities are limited to palapa-covered sun loungers and a
                    handful of tavernas for fresh seafood. If Elafonissi is too
                    packed, try Balos Lagoon in the north.
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-default-800  mb-3">
                    3. Nungwi Beach, Tanzania
                  </h4>
                  <p className="text-sm text-default-500 ">
                    Located in a buzzing fishing village of the same name on
                    Zanzibar Island, Nungwi Beach is one of Tanzania's most-
                    Crete's Elafonissi Beach's immense popularity comes from its
                    pretty pinkish sand, warm lagoon-like waters, and very wild
                    feel. Elafonissi Beach is actually an island, separated from
                    the mainland by the shallow water and sandbars that only
                    disappear under about three feet of water at high tide.
                    Facilities are limited to palapa-covered sun loungers and a
                    handful of tavernas for fresh seafood. If Elafonissi is too
                    packed, try Balos Lagoon in the north.
                  </p>
                </div>
              </div>
            </ScrollArea>
          </div>
          <DialogFooter className="px-5 py-3 pt-0 gap-2">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Close
              </Button>
            </DialogClose>
            <Button type="submit" className="underline">
              Follow
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ScrollableDialog;
`;
export const backdropDialog = `"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const DialogBackdrop = () => {

  return (
    <div className="flex flex-wrap  gap-x-5 gap-y-4 ">
      <Dialog>
        <DialogTrigger asChild>
          <Button type="button">Default</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-base font-medium">
              Your modals component has been published
            </DialogTitle>
          </DialogHeader>
          <Tabs defaultValue="link" className="w-full">
            <TabsList className=" bg-transparent p-0 border-b-2 w-full rounded-none justify-start">
              <TabsTrigger
                className="capitalize  data-[state=active]:shadow-none pl-0  data-[state=active]:bg-transparent data-[state=active]:text-primary transition duration-150
                 before:transition-all before:duration-150 relative before:absolute before:left-1/2 before:-bottom-[2px] before:h-[2px] before:-translate-x-1/2 before:w-0 data-[state=active]:before:bg-primary data-[state=active]:before:w-full"
                value="code"
              >
                Embed code
              </TabsTrigger>
              <TabsTrigger
                className="capitalize  data-[state=active]:shadow-none pl-0  data-[state=active]:bg-transparent data-[state=active]:text-primary transition duration-150 
                before:transition-all before:duration-150 relative before:absolute before:left-1/2 before:-bottom-[2px] before:h-[2px] before:-translate-x-1/2 before:w-0 data-[state=active]:before:bg-primary data-[state=active]:before:w-full"
                value="link"
              >
                Share link
              </TabsTrigger>
            </TabsList>
            <TabsContent value="code">
              <h2 className="my-6 text-sm font-medium text-default-700 ">
                Start using your modals components by coping the web address
                below
              </h2>
              <div className="flex flex-row gap-2 mb-2">
                <Input
                  type="text"
                  placeholder="https://share.modals.comps.com/component5xwo6a"
                />
                <Button type="button">Copy</Button>
              </div>
              <Link
                href="preview"
                className="text-xs font-medium text-default-700  underline"
              >
                Preview link in new tab
              </Link>
              <div className="flex items-center gap-2 mt-5">
                <Checkbox id="cb_1" />
                <Label
                  htmlFor="cb_1"
                  className="grow-1 text-xs font-medium text-default-700 "
                >
                  Don’t show this again{" "}
                </Label>
              </div>
            </TabsContent>
            <TabsContent value="link">
              <h2 className="my-6 text-sm font-medium text-default-700 ">
                Start using your modals components by coping the web address
                below
              </h2>
              <div className="flex flex-row gap-2 mb-2">
                <Input
                  type="text"
                  placeholder="https://share.modals.comps.com/component5xwo6a"
                />
                <Button type="button">Copy</Button>
              </div>
              <Link
                href="preview"
                className="text-xs font-medium text-default-700  underline"
              >
                Preview link in new tab
              </Link>
              <div className="flex items-center gap-2 mt-5">
                <Checkbox id="cb2" />
                <Label
                  htmlFor="cb2"
                  className="grow-1 text-xs font-medium text-default-700 "
                >
                  Don’t show this again
                </Label>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>





      <Dialog>
        <DialogTrigger asChild>
          <Button type="button">Without Blur</Button>
        </DialogTrigger>
        <DialogContent overlayClass="backdrop-blur-none">
          <DialogHeader>
            <DialogTitle className="text-base font-medium ">
              Your modals component has been published
            </DialogTitle>
          </DialogHeader>

          <Tabs defaultValue="link" className=" w-full">
            <TabsList className="bg-transparent p-0 border-b-2 w-full rounded-none justify-start">
              <TabsTrigger
                className="capitalize  data-[state=active]:shadow-none pl-0  data-[state=active]:bg-transparent data-[state=active]:text-primary transition duration-150 
                before:transition-all before:duration-150 relative before:absolute before:left-1/2 before:-bottom-[2px] before:h-[2px] before:-translate-x-1/2
                 before:w-0 data-[state=active]:before:bg-primary data-[state=active]:before:w-full"
                value="code"
              >
                Embed code
              </TabsTrigger>
              <TabsTrigger
                className="capitalize  data-[state=active]:shadow-none pl-0  data-[state=active]:bg-transparent data-[state=active]:text-primary transition duration-150 
                before:transition-all before:duration-150 relative before:absolute before:left-1/2 before:-bottom-[2px] before:h-[2px] before:-translate-x-1/2
                before:w-0 data-[state=active]:before:bg-primary data-[state=active]:before:w-full"
                value="link"
              >
                Share link
              </TabsTrigger>
            </TabsList>
            <TabsContent value="code">
              <h2 className="my-6 text-sm font-medium text-default-700 ">
                Start using your modals components by coping the web address
                below
              </h2>
              <div className="flex flex-row gap-2 mb-2">
                <Input
                  type="text"
                  placeholder="https://share.modals.comps.com/component5xwo6a"
                />
                <Button type="button">Copy</Button>
              </div>
              <Link
                href="preview"
                className="text-xs font-medium text-default-700  underline"
              >
                Preview link in new tab
              </Link>
              <div className="flex items-center gap-2 mt-5">
                <Checkbox id="cb3" />
                <Label
                  htmlFor="cb3"
                  className="grow-1 text-xs font-medium text-default-700 "
                >
                  Don’t show this again
                </Label>
              </div>
            </TabsContent>
            <TabsContent value="link">
              <h2 className="my-6 text-sm font-medium text-default-700 ">
                Start using your modals components by coping the web address
                below
              </h2>
              <div className="flex flex-row gap-2 mb-2">
                <Input
                  type="text"
                  placeholder="https://share.modals.comps.com/component5xwo6a"
                />
                <Button type="button">Copy</Button>
              </div>
              <Link
                href="preview"
                className="text-xs font-medium text-default-700  underline"
              >
                Preview link in new tab
              </Link>
              <div className="flex items-center gap-2 mt-5">
                <Checkbox id="cb4" />
                <Label
                  htmlFor="cb4"
                  className="grow-1 text-xs font-medium text-default-700 "
                >
                  Don’t show this again
                </Label>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Transparent</Button>
        </DialogTrigger>
        <DialogContent overlayClass="backdrop-blur-none bg-transparent">
          <DialogHeader>
            <DialogTitle className="text-base font-medium ">
              Your modals component has been published
            </DialogTitle>
          </DialogHeader>

          <Tabs defaultValue="link" className=" w-full">
            <TabsList className=" bg-transparent p-0 border-b-2 w-full rounded-none justify-start">
              <TabsTrigger
                className="capitalize  data-[state=active]:shadow-none pl-0  data-[state=active]:bg-transparent data-[state=active]:text-primary transition duration-150 
                before:transition-all before:duration-150 relative before:absolute before:left-1/2 before:-bottom-[2px] before:h-[2px] before:-translate-x-1/2 before:w-0 data-[state=active]:before:bg-primary data-[state=active]:before:w-full"
                value="code"
              >
                Embed code
              </TabsTrigger>
              <TabsTrigger
                className="capitalize  data-[state=active]:shadow-none pl-0  data-[state=active]:bg-transparent data-[state=active]:text-primary transition duration-150
                 before:transition-all before:duration-150 relative before:absolute before:left-1/2 before:-bottom-[2px] before:h-[2px] before:-translate-x-1/2 before:w-0 data-[state=active]:before:bg-primary data-[state=active]:before:w-full"
                value="link"
              >
                Share link
              </TabsTrigger>
            </TabsList>
            <TabsContent value="code">
              <h2 className="my-6 text-sm font-medium text-default-700 ">
                Start using your modals components by coping the web address
                below
              </h2>
              <div className="flex flex-row gap-2 mb-2">
                <Input
                  type="text"
                  placeholder="https://share.modals.comps.com/component5xwo6a"
                />
                <Button type="button">Copy</Button>
              </div>
              <Link
                href="preview"
                className="text-xs font-medium text-default-700  underline"
              >
                Preview link in new tab
              </Link>
              <div className="flex items-center gap-2 mt-5">
                <Checkbox id="cb5" />
                <Label
                  htmlFor="cb5"
                  className="grow-1 text-xs font-medium text-default-700 "
                >
                  Don’t show this again
                </Label>
              </div>
            </TabsContent>
            <TabsContent value="link">
              <h2 className="my-6 text-sm font-medium text-default-700 ">
                Start using your modals components by coping the web address
                below
              </h2>
              <div className="flex flex-row gap-2 mb-2">
                <Input
                  type="text"
                  placeholder="https://share.modals.comps.com/component5xwo6a"
                />
                <Button type="button">Copy</Button>
              </div>
              <Link
                href="preview"
                className="text-xs font-medium text-default-700  underline"
              >
                Preview link in new tab
              </Link>
              <div className="flex items-center gap-2 mt-5">
                <Checkbox id="cb6" />
                <Label
                  htmlFor="cb6"
                  className="grow-1 text-xs font-medium text-default-700 "
                >
                  Don’t show this again
                </Label>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Customization Backdrop</Button>
        </DialogTrigger>
        <DialogContent overlayClass=" bg-gradient-to-b from-background/60 to-primary/30">
          <DialogHeader>
            <DialogTitle className="text-base font-medium ">
              Your modals component has been published
            </DialogTitle>
          </DialogHeader>

          <Tabs defaultValue="link" className=" w-full">
            <TabsList className=" bg-transparent p-0 border-b-2 w-full rounded-none justify-start">
              <TabsTrigger
                className="capitalize  data-[state=active]:shadow-none pl-0  data-[state=active]:bg-transparent data-[state=active]:text-primary transition duration-150 
                before:transition-all before:duration-150 relative before:absolute before:left-1/2 before:-bottom-[2px] before:h-[2px] before:-translate-x-1/2 before:w-0 data-[state=active]:before:bg-primary data-[state=active]:before:w-full"
                value="code"
              >
                Embed code
              </TabsTrigger>
              <TabsTrigger
                className="capitalize  data-[state=active]:shadow-none pl-0 data-[state=active]:bg-transparent data-[state=active]:text-primary transition duration-150 
                before:transition-all before:duration-150 relative before:absolute before:left-1/2 before:-bottom-[2px] before:h-[2px] before:-translate-x-1/2 before:w-0 data-[state=active]:before:bg-primary data-[state=active]:before:w-full"
                value="link"
              >
                Share link
              </TabsTrigger>
            </TabsList>
            <TabsContent value="code">
              <h2 className="my-6 text-sm font-medium text-default-700 ">
                Start using your modals components by coping the web address
                below
              </h2>
              <div className="flex flex-row gap-2 mb-2">
                <Input
                  type="text"
                  placeholder="https://share.modals.comps.com/component5xwo6a"
                />
                <Button type="button">Copy</Button>
              </div>
              <Link
                href="preview"
                className="text-xs font-medium text-default-700  underline"
              >
                Preview link in new tab
              </Link>
              <div className="flex items-center gap-2 mt-5">
                <Checkbox id="cb7" />
                <Label
                  htmlFor="cb7"
                  className="grow-1 text-xs font-medium text-default-700 "
                >
                  Don’t show this again
                </Label>
              </div>
            </TabsContent>
            <TabsContent value="link">
              <h2 className="my-6 text-sm font-medium text-default-700 ">
                Start using your modals components by coping the web address
                below
              </h2>
              <div className="flex flex-row gap-2 mb-2">
                <Input
                  type="text"
                  placeholder="https://share.modals.comps.com/component5xwo6a"
                />
                <Button type="button">Copy</Button>
              </div>
              <Link
                href="preview"
                className="text-xs font-medium text-default-700  underline"
              >
                Preview link in new tab
              </Link>
              <div className="flex items-center gap-2 mt-5">
                <Checkbox id="cb7" />
                <Label
                  htmlFor="cb7"
                  className="grow-1 text-xs font-medium text-default-700 "
                >
                  Don’t show this again
                </Label>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogBackdrop;
`;
export const multiStepSlider = `"use client";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import slider1 from "@/public/images/all-img/slider-1.png";
import Image from "next/image";
const MultiStepSliderDialog = () => {

  return (
    <div className="flex flex-wrap  gap-x-5 gap-y-4 ">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Modal</Button>
        </DialogTrigger>
        <DialogContent size="2xl" className="p-10">
          <Swiper
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
            className="w-full h-full multistep-dialog-wrap pb-2"
          >
            <SwiperSlide>
              <div className="h-[300px] md:h-[410px] rounded-md">
                <Image
                  src={slider1}
                  className="w-full h-full object-cover  rounded-md"
                  alt=""
                />
              </div>
              <div className="my-5 pb-5">
                <p className="text-sm text-default-500  text-center">
                  If we’re talking about the world’s most beautiful mountains,
                  you’ve got to begin with Mount Fuji. Aesthetically speaking,
                  it’s one of the most iconic mountains on the planet.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[300px] md:h-[410px] rounded-md">
                <Image
                  src={slider1}
                  className="w-full h-full object-cover rounded-md"
                  alt=""
                />
              </div>
              <div className="my-5 pb-5">
                <p className="text-sm text-default-500  text-center">
                  If we’re talking about the world’s most beautiful mountains,
                  you’ve got to begin with Mount Fuji. Aesthetically speaking,
                  it’s one of the most iconic mountains on the planet.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[300px] md:h-[410px] rounded-md">
                <Image
                  src={slider1}
                  className="w-full h-full object-cover rounded-md"
                  alt=""
                />
              </div>
              <div className="my-5 pb-5">
                <p className="text-sm text-default-500  text-center">
                  If we’re talking about the world’s most beautiful mountains,
                  you’ve got to begin with Mount Fuji. Aesthetically speaking,
                  it’s one of the most iconic mountains on the planet.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="flex justify-between items-center">
            <button
              type="button"
              className="prev text-sm font-medium text-primary flex items-center gap-1 cursor-pointer" >
              <span>
                <Icon icon="line-md:chevron-small-double-left" />
              </span>
              Previous
            </button>
            <button
              type="button"
              className="next text-sm font-medium text-primary flex items-center gap-1"
            >
              Next
              <span>
                <Icon icon="line-md:chevron-small-double-right" />
              </span>
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MultiStepSliderDialog;
`;

export const counterDialog = `"use client";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

const CounterDialog = () => {
  const [count, setCount] = useState(19);
  const handleDecrement = () => {
    setCount((prevcount) => prevcount - 1);
  };
  const handleIncrement = () => {
    setCount((prevcount) => prevcount + 1);
  };
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Counter Dialog</Button>
        </DialogTrigger>
        <DialogContent size="md" className="p-0">
          <DialogHeader>
            <div className="flex items-center gap-3 p-5">
              <div className="h-12 w-12 rounded-sm border border-border grid place-content-center">
                <Icon icon="heroicons:square-3-stack-3d" className="w-5 h-5 text-default-500" />
              </div>
              <div>
                <div className="text-base font-semibold text-default-700  mb-1">
                  Booking Seat
                </div>
                <p className="text-xs text-default-500 ">
                  Select how many seat you need
                </p>
              </div>
            </div>
          </DialogHeader>
          <hr />
          <div>
            <div className="border border-border flex max-w-[300px] rounded-sm mx-auto mb-8 mt-4">
              <button
                type="button"
                className="text-xl w-[72px] h-[50px] flex justify-center items-center border-r border-border"
                onClick={handleDecrement}
              >
                <Icon icon="ic:round-minus" />
              </button>
              <span className="grow shrink text-center flex justify-center items-center text-lg font-semibold text-default-950">
                {count}
              </span>
              <button
                type="button"
                className="text-xl w-[72px] h-[50px] flex justify-center items-center border-l border-border"
                onClick={handleIncrement}
              >
                <Icon icon="ic:round-plus" />
              </button>
            </div>
            <hr />
            <ul className="p-5 space-y-2">
              <li className="flex justify-between">
                <span className="text-sm font-semibold text-default-700">
                  Price Per Seat
                </span>{" "}
                <span className="text-sm font-semibold text-default-700">
                  $100
                </span>{" "}
              </li>
              <li className="flex justify-between">
                <span className="text-sm font-semibold text-default-700">
                  Total
                </span>{" "}
                <span className="text-sm font-semibold text-default-700">
                  $1900
                </span>{" "}
              </li>
            </ul>
          </div>
          <DialogFooter className=" p-5">
            <DialogClose asChild><Button type="submit" variant="outline"> Cancel</Button></DialogClose>
            <Button type="submit">Purchase Seat</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CounterDialog;
`;

export const toggleDialog = `"use client";
import { Icon } from '@iconify/react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
const ToggleDialog = () => {

  const [activeIndex, setActiveIndex] = useState(1);
  const totalSlide = 2;
  const handleNextSlide = () => {
    setActiveIndex(activeIndex + 1)
  }
  const handlePrevSlide = () => {
    if (activeIndex > 1) {
      setActiveIndex(activeIndex - 1)
    }
    setActiveIndex(1)
  }
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Basic Modal</Button>
        </DialogTrigger>
        <DialogContent size="2xl" className="p-0">
          <DialogHeader className="p-6 pb-2">
            <DialogTitle className="text-base font-medium"> Add Your Address</DialogTitle>
          </DialogHeader>
          <div className='max-h-[300px]'>
            <ScrollArea className="h-full px-6">
              {
                activeIndex === 1 &&
                <div className="sm:grid  sm:grid-cols-2 sm:gap-5 space-y-4 sm:space-y-0">
                  <div className="flex flex-col gap-2">
                    <Label>First Name</Label>
                    <Input type="text" placeholder="Enter first name" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label>Last Name</Label>
                    <Input type="text" placeholder="Enter last name" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label>Country/Region</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Your Country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bd">Bangladesh</SelectItem>
                        <SelectItem value="in">India</SelectItem>
                        <SelectItem value="aus">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label>Street Address</Label>
                    <Input type="text" placeholder="Street address" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label>Town/City</Label>
                    <Input type="text" placeholder="Your town/city" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label>District</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select district" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dh">Dhaka</SelectItem>
                        <SelectItem value="ctg">Chattogram</SelectItem>
                        <SelectItem value="syl">Sylhet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label>Phone</Label>
                    <Input type="number" placeholder="Your phone number" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label>Email Address</Label>
                    <Input type="email" placeholder="Enter email address" />
                  </div>
                </div>
              }

              {
                activeIndex === 2 &&
                <div className='flex flex-col items-center '>
                  <span className='text-7xl text-success'>
                    <Icon icon="material-symbols:check-circle-outline" />
                  </span>
                  <h3 className='mt-3 text-success  text-2xl font-semibold'>Congratulations</h3>
                  <p className='mt-4 text-lg font-semibold text-default-600'>You Updated Your Address</p>

                  </div>
              }

            </ScrollArea>
          </div>
          <div className="p-6 pt-4 flex justify-between">
            <Button type="submit" variant="outline" onClick={handlePrevSlide}>Previous</Button>
            {
              activeIndex === totalSlide ?
                <DialogClose asChild><Button type="button">Close</Button></DialogClose>
                :
                <Button type="submit" onClick={handleNextSlide}>Next</Button>
            }
          </div>
        </DialogContent>
      </Dialog>

    </>
  );
};

export default ToggleDialog;
`;
