export const defaultBadge = `"use client";
import { Badge } from "@/components/ui/badge";
const DefaultBadge = () => {
  return (
    <>
      <Badge>Badge</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="info">Info</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="destructive">Danger</Badge>
      <Badge color="dark">Dark</Badge>
    </>
  );
};

export default DefaultBadge;
`;
export const outlineBadge = `import { Badge } from "@/components/ui/badge";

const OutlineBadge = () => {
  return (
    <>
      <Badge variant="outline">Primary</Badge>
      <Badge color="secondary" variant="outline">
        Secondary
      </Badge>
      <Badge color="success" variant="outline">
        Success
      </Badge>
      <Badge color="info" variant="outline">
        Info
      </Badge>
      <Badge color="warning" variant="outline">
        Warning
      </Badge>
      <Badge color="destructive" variant="outline">
        Danger
      </Badge>
      <Badge color="dark" variant="outline">
        Dark
      </Badge>
    </>
  );
};
export default OutlineBadge;
`;
export const softBadge = `import { Badge } from "@/components/ui/badge";

const SoftBadge = () => {
  return (
    <>
      <Badge variant="soft">Primary</Badge>
      <Badge color="secondary" variant="soft">
        Secondary
      </Badge>
      <Badge color="success" variant="soft">
        Success
      </Badge>
      <Badge color="info" variant="soft">
        Info
      </Badge>
      <Badge color="warning" variant="soft">
        Warning
      </Badge>
      <Badge color="destructive" variant="soft">
        Danger
      </Badge>
      <Badge color="dark" variant="soft">
        Dark
      </Badge>
    </>
  );
};

export default SoftBadge;
`;
export const badgesWithIcon = `"use client";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
const BadgesWithIcon = () => {
  return (
    <>
      <Badge>
        <Star className=" mr-1 h-3 w-3" />
        Badge
      </Badge>
      <Badge color="secondary">
        <Star className=" mr-1 h-3 w-3" />
        Secondary
      </Badge>
      <Badge color="success">
        <Star className=" mr-1 h-3 w-3" />
        Success
      </Badge>
      <Badge color="info">
        <Star className=" mr-1 h-3 w-3" />
        Info
      </Badge>
      <Badge color="warning">
        <Star className=" mr-1 h-3 w-3" />
        Warning
      </Badge>
      <Badge color="destructive">
        <Star className=" mr-1 h-3 w-3" />
        Danger
      </Badge>
      <Badge color="dark">
        <Star className=" mr-1 h-3 w-3" />
        Dark
      </Badge>
    </>
  );
};

export default BadgesWithIcon;
`;
export const badgesStyle = `import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { faker } from "@faker-js/faker";
const BadgesStyle = () => {
  return (
    <>
      <div className="relative inline-block">
        <Avatar>
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <Badge className=" w-5 h-5 p-0  items-center justify-center absolute left-[calc(100%-12px)] bottom-[calc(100%-12px)]">
          1
        </Badge>
      </div>
      <div className="relative inline-block">
        <Avatar>
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <Badge
          color="secondary"
          className=" w-5 h-5 p-0  items-center justify-center absolute left-[calc(100%-12px)] bottom-[calc(100%-12px)]"
        >
          1
        </Badge>
      </div>
      <div className="relative inline-block">
        <Avatar>
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <Badge
          color="success"
          className=" w-5 h-5 p-0  items-center justify-center absolute left-[calc(100%-12px)] bottom-[calc(100%-12px)]"
        >
          1
        </Badge>
      </div>
      <div className="relative inline-block">
        <Avatar>
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <Badge
          color="info"
          className=" w-5 h-5 p-0  items-center justify-center absolute left-[calc(100%-12px)] bottom-[calc(100%-12px)]"
        >
          1
        </Badge>
      </div>
      <div className="relative inline-block">
        <Avatar>
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <Badge
          color="destructive"
          className=" w-5 h-5 p-0  items-center justify-center absolute left-[calc(100%-12px)] bottom-[calc(100%-12px)]"
        >
          1
        </Badge>
      </div>
      <div className="relative inline-block">
        <Avatar>
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <Badge
          color="warning"
          className=" w-5 h-5 p-0  items-center justify-center absolute left-[calc(100%-12px)] bottom-[calc(100%-12px)]"
        >
          1
        </Badge>
      </div>
    </>
  );
};

export default BadgesStyle;
`;
export const dotStyleBadge = `import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { faker } from "@faker-js/faker";
const DotStyleBadge = () => {
  return (
    <>
      <div className="relative inline-block">
        <Avatar>
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <Badge className=" h-2 w-2  p-0  items-center justify-center absolute left-[calc(100%-8px)] bottom-[calc(100%-8px)]"></Badge>
      </div>
      <div className="relative inline-block">
        <Avatar>
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <Badge
          color="secondary"
          className=" h-2 w-2  p-0  items-center justify-center absolute left-[calc(100%-8px)] bottom-[calc(100%-8px)]"
        ></Badge>
      </div>
      <div className="relative inline-block">
        <Avatar>
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <Badge
          color="success"
          className=" h-2 w-2  p-0  items-center justify-center absolute left-[calc(100%-8px)] bottom-[calc(100%-8px)]"
        ></Badge>
      </div>
      <div className="relative inline-block">
        <Avatar>
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <Badge
          color="info"
          className=" h-2 w-2  p-0  items-center justify-center absolute left-[calc(100%-8px)] bottom-[calc(100%-8px)]"
        ></Badge>
      </div>
      <div className="relative inline-block">
        <Avatar>
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <Badge
          color="destructive"
          className=" h-2 w-2  p-0  items-center justify-center absolute left-[calc(100%-8px)] bottom-[calc(100%-8px)]"
        ></Badge>
      </div>
      <div className="relative inline-block">
        <Avatar>
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <Badge
          color="warning"
          className=" h-2 w-2  p-0  items-center justify-center absolute left-[calc(100%-8px)] bottom-[calc(100%-8px)]"
        ></Badge>
      </div>
    </>
  );
};

export default DotStyleBadge;
`;
export const badgeAlignment = `import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { faker } from "@faker-js/faker";
const BadgeAlignment = () => {
  return (
    <>
      <div className="relative inline-block">
        <Avatar>
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <Badge className=" h-2 w-2  p-0  items-center justify-center absolute left-[calc(100%-8px)] bottom-[calc(100%-8px)]"></Badge>
      </div>
      <div className="relative inline-block">
        <Avatar>
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <Badge className=" h-2 w-2  p-0  items-center justify-center absolute left-[calc(100%-8px)] top-[calc(100%-8px)]"></Badge>
      </div>
      <div className="relative inline-block">
        <Avatar>
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <Badge className=" h-2 w-2  p-0  items-center justify-center absolute right-[calc(100%-8px)] bottom-[calc(100%-8px)]"></Badge>
      </div>
      <div className="relative inline-block">
        <Avatar>
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <Badge className=" h-2 w-2  p-0  items-center justify-center absolute right-[calc(100%-8px)] top-[calc(100%-8px)]"></Badge>
      </div>
    </>
  );
};

export default BadgeAlignment;
`;
export const badgeVisibility = `import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { faker } from "@faker-js/faker";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
const BadgeVisibility = () => {
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(true);
  return (
    <>
      <div className="relative inline-block">
        <Avatar>
          <AvatarImage src={faker.image.avatarLegacy()} />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        {show && count > 0 && (
          <Badge className=" h-5 w-5  p-0 text-xs font-normal items-center justify-center absolute left-[calc(100%-8px)] bottom-[calc(100%-8px)]">
            {count}
          </Badge>
        )}
      </div>
      <div className="flex">
        <Button
          className="rounded-r-[0px] rounded-s-lg "
          color="secondary"
          variant="outline"
          onClick={() => setCount(Math.max(count - 1, 0))}
          disabled={!show}
        >
          -
        </Button>
        <Button
          className="rounded-r-lg rounded-s-[0px]

"
          color="secondary"
          variant="outline"
          onClick={() => setCount(Math.max(count + 1))}
          disabled={!show}
        >
          +
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Switch
          id="airplane-mode"
          checked={show}
          onCheckedChange={() => setShow(!show)}
        />
        <Label htmlFor="airplane-mode">Show</Label>
      </div>
    </>
  );
};

export default BadgeVisibility;
`;
