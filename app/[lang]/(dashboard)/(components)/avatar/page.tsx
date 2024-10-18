

import Card from "@/components/ui/card-snippet";

import {
  avatarBorder,
  avatarBorderColor,
  avatarLetter,
  avatarSize,
  avatarGroupCustom,
  avatarGroupMax,
  avatarGroupSize,
  avatarGroupTotal,
  avatarsTonal,
  fallbackAvatar,
  imageAvatar,
  roundedAvatar,
  avatarGroupBlock,
  avatarWithTooltip,
} from "./source-code";
import FallbackAvatar from "./fallback-avatar";
import ImageAvatar from "./image-avatar";
import AvatarSize from "./avatar-size";
import RoundedAvatar from "./rounded-avatar";
import AvatarBorder from "./avatar-border";
import AvatarGroup from "./avatar-group-block";
import AvatarsTonal from "./avatars-tonal";
import AvatarsLetter from "./avatars-letter";
import AvatarBorderColor from "./avatar-border-color";
import AvatarGroupMax from "./avatar-group-max";
import AvatarGroupTotal from "./avatar-group-total";
import AvatarGroupCustom from "./avatar-group-custom";
import AvatarGroupSize from "./avatar-group-size";
import AvatarWithTooltip from "./avatar-with-tooltip";

const AvatarPage = () => {
  return (
    <div className=" grid xl:grid-cols-2 grid-cols-1 gap-5 ">
      <Card title="Avatars Letter" code={avatarLetter}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary">Avatar</code> component to wrap the
          other avatar component in it.{" "}
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-5">
          <AvatarsLetter />
        </div>
      </Card>
      <Card title="Avatars Tonal" code={avatarsTonal}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">AvatarFallback</code> component of
          for representing the user in different color.
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-5">
          <AvatarsTonal />
        </div>
      </Card>
      <Card title="Avatars Icon" code={fallbackAvatar}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">AvatarFallback</code> component of
          for representing the user in different color if the avatar is not
          loaded.
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-5">
          <FallbackAvatar />
        </div>
      </Card>
  
   

      <Card title="Avatars Image" code={imageAvatar}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">AvatarImage</code> component to
          show image if available.
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-5">
          <ImageAvatar />
        </div>
      </Card>
      <Card title="Avatars Sizes" code={avatarSize}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary">Avatar</code> component to wrap the
          other avatar component in it.{" "}
          <code className="text-primary">Size </code> can be change by tailwind
          css class.
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-5">
          <AvatarSize />
        </div>
      </Card>
      <Card title="Avatars Rounded" code={roundedAvatar}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          We can change the <code className="text-primary">Rounded </code>{" "}
          option by using different tailwind class ex: rounded-full.
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-5">
          <RoundedAvatar />
        </div>
      </Card>
      <Card title="Avatars Bordered" code={avatarBorder}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          We can <code className="text-primary">border </code>the avatar by
          using border tailwind class.
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-5">
          <AvatarBorder />
        </div>
      </Card>
      <Card title="Avatars Colored Border" code={avatarBorderColor}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          We can change color of the{" "}
          <code className="text-primary">border </code> by using border tailwind
          class in different color.
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-5">
          <AvatarBorderColor />
        </div>
      </Card>
      <Card title="Avatars Group" code={avatarGroupBlock}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary">AvatarGroup </code> can wrap the other
          avatar component.
        </p>

        <AvatarGroup />
      </Card>
      <Card title="Avatars Group Max Count" code={avatarGroupMax}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          In AvatarGroup <code className="text-primary">max </code>prop can
          limit the avatar can be displayed.
        </p>
        <AvatarGroupMax />
      </Card>
      <Card title="Avatars Group Total Count" code={avatarGroupTotal}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          In AvatarGroup <code className="text-primary">total </code>prop can
          count the avatar but only display what max prop limits.
        </p>
        <AvatarGroupTotal />
      </Card>
      <Card title="Avatars Group Custom Count" code={avatarGroupCustom}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          In AvatarGroup <code className="text-primary">custom </code>prop can
          count the avatar how many are left to show.
        </p>
        <AvatarGroupCustom />
      </Card>
      <Card title="Avatars Group Size" code={avatarGroupSize}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          In AvatarGroup <code className="text-primary">size </code> can
          customize by the tailwind class in different group.
        </p>
        <AvatarGroupSize />
      </Card>
      <Card title="Avatars With Tooltip" code={avatarWithTooltip}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          In AvatarGroup you can use <code className="text-primary">tooltip component </code> to
          display user name.
        </p>
        <AvatarWithTooltip />
      </Card>  
    </div>
  );
};

export default AvatarPage;
