
import Card from "@/components/ui/card-snippet";
import DefaultBadge from "./default-badge";
import OutlineBadge from "./outline-badge";
import SoftBadge from "./soft-badges";
import BadgesWithIcon from "./badges-with-icon";
import BadgesStyle from "./badges-style";
import DotStyleBadge from "./dot-style-badge";
import BadgeAlignment from "./badge-alignment";
import BadgeVisibility from "./badge-visibility";

import {
  badgeAlignment,
  badgeVisibility,
  badgesStyle,
  badgesWithIcon,
  defaultBadge,
  dotStyleBadge,
  outlineBadge,
  softBadge,
} from "./souce-code";

const BadgePage = () => {
  return (
    <div className=" space-y-5">
      <Card title="Default badges" code={defaultBadge}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">variant="secondary"</code> prop is
          used to change color of badge
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-5">
          <DefaultBadge />
        </div>
      </Card>
      <Card title="Outline badges" code={outlineBadge}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">variant="outline"</code> prop is
          used to change outline of badge
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-5">
          <OutlineBadge />
        </div>
      </Card>
      <Card title="Soft badges" code={softBadge}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">variant="soft"</code> prop is used
          to change background of badge
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-5">
          <SoftBadge />
        </div>
      </Card>
      <Card title="Badges With Icon" code={badgesWithIcon}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">Icon</code> component is used to
          change Icon of badge
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-5">
          <BadgesWithIcon />
        </div>
      </Card>
      <Card title="Styled badges" code={badgesStyle}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">Avatar</code> component is used to
          change the design of badge
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-5">
          <BadgesStyle />
        </div>
      </Card>
      <Card title="Dot badges" code={dotStyleBadge}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">badge and avatar</code> component
          is used to change the design of badge and the badge is dot.
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-5">
          <DotStyleBadge />
        </div>
      </Card>
      <Card title="Badges Position" code={badgeAlignment}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">badge </code> component different
          position is used to change the design of badge .
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-5">
          <BadgeAlignment />
        </div>
      </Card>
      <Card title="Advance Badge Options" code={badgeVisibility}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">visibility</code> of badge depend
          on button that can show and hide the badge and increment and decrement
          button helps to perform.
        </p>
        <div className="flex gap-6 items-center">
          <BadgeVisibility />
        </div>
      </Card>
    </div>
  );
};

export default BadgePage;
