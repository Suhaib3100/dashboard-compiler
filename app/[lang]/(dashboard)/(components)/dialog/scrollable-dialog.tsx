"use client";
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
          <div className="h-[300px] sm:h-[600px]  w-full ">
            <ScrollArea className="h-full p-5 ">
              <div className="h-[150px] sm:h-[212px] mt-5">
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
              <Button  variant="outline" color="warning">
                Close
              </Button>
            </DialogClose>
            <Button> Follow </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ScrollableDialog;
