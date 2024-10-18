"use client";
import {  signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import avatar1 from "@/public/images/avatar/avatar-1.jpg";
import avatar2 from "@/public/images/avatar/avatar-2.jpg";
import avatar3 from "@/public/images/avatar/avatar-3.jpg";
import avatar4 from "@/public/images/avatar/avatar-4.jpg";
import avatar5 from "@/public/images/avatar/avatar-5.jpg";
import { ChevronDown } from "lucide-react";
import { Icon } from "@iconify/react";
import Link from "next/link";
const CustomDropdown = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild className=" cursor-pointer">
          <div className=" flex items-center  gap-x-3">
            <Avatar>
              <AvatarImage src={avatar1.src} />
              <AvatarFallback>MA</AvatarFallback>
            </Avatar>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="start">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Icon icon="heroicons:user" className="w-3 h-3 ltr:mr-2 rtl:ml-2 " />
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icon icon="heroicons:credit-card" className="w-3 h-3 ltr:mr-2 rtl:ml-2 " />
              Billing
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icon icon="heroicons:cog-6-tooth" className="w-3 h-3 ltr:mr-2 rtl:ml-2 " />
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icon icon="ri:command-fill" className="w-3 h-3 ltr:mr-2 rtl:ml-2 " />
              Keyboard shortcuts
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Icon icon="heroicons:user-group" className="w-3 h-3 ltr:mr-2 rtl:ml-2 " />
              Team
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Icon icon="heroicons:user-plus" className="w-3 h-3 ltr:mr-2 rtl:ml-2 " />
                Invite users
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <Icon icon="heroicons:envelope" className="w-3 h-3 ltr:mr-2 rtl:ml-2 " />
                    Email
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Icon
                      icon="heroicons:chat-bubble-bottom-center"
                      className="w-3 h-3 ltr:mr-2 rtl:ml-2 "
                    />
                    Message
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>More...</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>
              <Icon icon="heroicons:plus" className="w-3 h-3 ltr:mr-2 rtl:ml-2 " />
              New Team
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Icon icon="heroicons:users" className="w-3 h-3 ltr:mr-2 rtl:ml-2 " />
            GitHub
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon
              icon="streamline:customer-support-1"
              className="w-3 h-3 ltr:mr-2 rtl:ml-2 "
            />
            Support
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <Icon icon="heroicons:cloud" className="w-3 h-3 ltr:mr-2 rtl:ml-2 " />
            API
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Icon icon="heroicons:power" className="w-3 h-3 ltr:mr-2 rtl:ml-2 " />
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className=" cursor-pointer">
          <div className=" flex items-center  gap-x-3">
            <Avatar>
              <AvatarImage src={avatar2.src} />
              <AvatarFallback>MA</AvatarFallback>
            </Avatar>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 p-0" align="end">
          <DropdownMenuLabel className="flex gap-2 items-center mb-1 p-3">
            <Avatar>
              <AvatarImage src={avatar2.src} />
              <AvatarFallback>MA</AvatarFallback>
            </Avatar>
            <div>
              <div className="text-sm font-medium text-default-800 capitalize ">
                Mcc Callem
              </div>
              <Link
                href="/dashboard"
                className="text-xs text-default-600 hover:text-primary"
              >
                @uxuidesigner
              </Link>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuGroup>
            {[
              {
                name: "profile",
                icon: "heroicons:user",
                shortcut: "⇧⌘P",
              },
              {
                name: "Billing",
                icon: "heroicons:megaphone",
                shortcut: "⌘B",
              },
              {
                name: "Settings",
                icon: "heroicons:paper-airplane",
                shortcut: "⌘S",
              },
              {
                name: "Keyboard shortcuts",
                icon: "heroicons:language",
                shortcut: "⌘K",
              },
            ].map((item, index) => (
              <Link
                href="/dashboard"
                key={`info-menu-${index}`}
                className="cursor-pointer"
              >
                <DropdownMenuItem className="flex items-center gap-2 text-sm font-medium text-default-600 capitalize px-3 py-1.5 dark:hover:bg-background cursor-pointer">
                  <Icon icon={item.icon} className="w-4 h-4 " />
                  {item.name}
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link href="/dashboard" className="cursor-pointer">
              <DropdownMenuItem className="flex items-center gap-2 text-sm font-medium text-default-600 capitalize px-3 py-1.5 dark:hover:bg-background cursor-pointer">
                <Icon icon="heroicons:user-group" className="w-4 h-4 " />
                team
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="flex items-center gap-2 text-sm font-medium text-default-600 capitalize px-3 py-1.5 dark:hover:bg-background">
                <Icon icon="heroicons:user-plus" className="w-4 h-4 " />
                Invite user
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {[
                    {
                      name: "email",
                    },
                    {
                      name: "message",
                    },
                    {
                      name: "facebook",
                    },
                  ].map((item, index) => (
                    <Link
                      href="/dashboard"
                      key={`message-sub-${index}`}
                      className="cursor-pointer"
                    >
                      <DropdownMenuItem className="text-sm font-medium text-default-600 capitalize px-3 py-1.5 dark:hover:bg-background cursor-pointer">
                        {item.name}
                      </DropdownMenuItem>
                    </Link>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <Link href="/dashboard">
              <DropdownMenuItem className="flex items-center gap-2 text-sm font-medium text-default-600 capitalize px-3 py-1.5 dark:hover:bg-background cursor-pointer">
                <Icon icon="heroicons:variable" className="w-4 h-4 " />
                Github
              </DropdownMenuItem>
            </Link>

            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="flex items-center gap-2 text-sm font-medium text-default-600 capitalize px-3 py-1.5 dark:hover:bg-background cursor-pointer">
                <Icon icon="heroicons:phone" className="w-4 h-4 " />
                Support
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {[
                    {
                      name: "portal",
                    },
                    {
                      name: "slack",
                    },
                    {
                      name: "whatsapp",
                    },
                  ].map((item, index) => (
                    <Link href="/dashboard" key={`message-sub-${index}`}>
                      <DropdownMenuItem className="text-sm font-medium text-default-600 capitalize px-3 py-1.5 dark:hover:bg-background cursor-pointer">
                        {item.name}
                      </DropdownMenuItem>
                    </Link>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="mb-0 dark:bg-background" />
          <DropdownMenuItem
            onSelect={() => signOut()}
            className="flex items-center gap-2 text-sm font-medium text-default-600 capitalize my-1 px-3 dark:hover:bg-background cursor-pointer"
          >
            <Icon icon="heroicons:power" className="w-4 h-4 " />
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className=" cursor-pointer">
          <div className=" flex items-center  gap-x-3">
            <Avatar>
              <AvatarImage src={avatar3.src} />
              <AvatarFallback>MA</AvatarFallback>
            </Avatar>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56" align="start">
          <DropdownMenuLabel className="flex gap-2 items-center mb-1 p-3">
            <Avatar>
              <AvatarImage src={avatar3.src} />
              <AvatarFallback>MA</AvatarFallback>
            </Avatar>
            <div>
              <div className="text-sm font-medium text-default-800 capitalize ">
                Jenifar Josef
              </div>
              <Link
                href="/dashboard"
                className="text-xs text-default-600 hover:text-primary"
              >
                @uxuidesigner
              </Link>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuGroup>
            {[
              {
                name: "profile",
                icon: "heroicons:user",
              },
              {
                name: "Billing",
                icon: "heroicons:megaphone",
              },
              {
                name: "Settings",
                icon: "heroicons:paper-airplane",
              },
              {
                name: "Keyboard shortcuts",
                icon: "heroicons:language",
              },
            ].map((item, index) => (
              <Link
                href="/dashboard"
                key={`info-menu-${index}`}
                className="cursor-pointer"
              >
                <DropdownMenuItem className="flex items-center gap-2 text-sm font-medium text-default-600 capitalize px-3 py-1.5 dark:hover:bg-background cursor-pointer">
                  <Icon icon={item.icon} className="w-4 h-4 " />
                  {item.name}
                </DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link href="/dashboard" className="cursor-pointer">
              <DropdownMenuItem className="flex items-center gap-2 text-sm font-medium text-default-600 capitalize px-3 py-1.5 dark:hover:bg-background cursor-pointer">
                <Icon icon="heroicons:user-group" className="w-4 h-4 " />
                team
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="flex items-center gap-2 text-sm font-medium text-default-600 capitalize px-3 py-1.5 dark:hover:bg-background">
                <Icon icon="heroicons:user-plus" className="w-4 h-4 " />
                Invite user
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {[
                    {
                      name: "email",
                    },
                    {
                      name: "message",
                    },
                    {
                      name: "facebook",
                    },
                  ].map((item, index) => (
                    <Link
                      href="/dashboard"
                      key={`message-sub-${index}`}
                      className="cursor-pointer"
                    >
                      <DropdownMenuItem className="text-sm font-medium text-default-600 capitalize px-3 py-1.5 dark:hover:bg-background cursor-pointer">
                        {item.name}
                      </DropdownMenuItem>
                    </Link>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <Link href="/dashboard">
              <DropdownMenuItem className="flex items-center gap-2 text-sm font-medium text-default-600 capitalize px-3 py-1.5 dark:hover:bg-background cursor-pointer">
                <Icon icon="heroicons:variable" className="w-4 h-4 " />
                Github
              </DropdownMenuItem>
            </Link>

            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="flex items-center gap-2 text-sm font-medium text-default-600 capitalize px-3 py-1.5 dark:hover:bg-background cursor-pointer">
                <Icon icon="heroicons:phone" className="w-4 h-4 " />
                Support
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {[
                    {
                      name: "portal",
                    },
                    {
                      name: "slack",
                    },
                    {
                      name: "whatsapp",
                    },
                  ].map((item, index) => (
                    <Link href="/dashboard" key={`message-sub-${index}`}>
                      <DropdownMenuItem className="text-sm font-medium text-default-600 capitalize px-3 py-1.5 dark:hover:bg-background cursor-pointer">
                        {item.name}
                      </DropdownMenuItem>
                    </Link>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="mb-0 dark:bg-background" />
          <DropdownMenuItem
            onSelect={() => signOut()}
            className="flex items-center gap-2 text-sm font-medium text-default-600 capitalize my-1 px-3 dark:hover:bg-background cursor-pointer"
          >
            <Icon icon="heroicons:power" className="w-4 h-4 " />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className=" cursor-pointer">
          <div className=" flex items-center  gap-x-3">
            <Avatar>
              <AvatarImage src={avatar4.src} />
              <AvatarFallback>MA</AvatarFallback>
            </Avatar>
            <div className="flex-none text-zinc-600 dark:text-primary-foreground text-sm font-normal items-center lg:flex hidden overflow-hidden text-ellipsis whitespace-nowrap">
              <span className="overflow-hidden text-ellipsis whitespace-nowrap w-[85px] block">
                <span className="block overflow-hidden text-ellipsis">
                  Mottasin Leemon
                </span>
                <span className="block text-xs overflow-hidden text-ellipsis text-zinc-300">
                  leemon@mottasin
                </span>
              </span>
              <span className="text-base inline-block ml-1 ">
                <ChevronDown absoluteStrokeWidth className="w-5 h-5" />
              </span>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="start">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Billing
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Keyboard shortcuts
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Email</DropdownMenuItem>
                  <DropdownMenuItem>Message</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>More...</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>
              New Team
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>GitHub</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuItem disabled>API</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className=" cursor-pointer">
          <div className=" flex items-center  gap-x-3">
            <Avatar>
              <AvatarImage src={avatar5.src} />
              <AvatarFallback>MA</AvatarFallback>
            </Avatar>

            <div className="flex-none text-zinc-600 dark:text-primary-foreground text-sm font-normal items-center lg:flex hidden overflow-hidden text-ellipsis whitespace-nowrap">
              <span className="overflow-hidden text-ellipsis whitespace-nowrap w-[85px] block">
                Iftekhar Alam
              </span>
              <span className="text-base inline-block ml-1 ">
                <ChevronDown absoluteStrokeWidth className="w-5 h-5" />
              </span>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Billing
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Keyboard shortcuts
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Email</DropdownMenuItem>
                  <DropdownMenuItem>Message</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>More...</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>
              New Team
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>GitHub</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuItem disabled>API</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CustomDropdown;
