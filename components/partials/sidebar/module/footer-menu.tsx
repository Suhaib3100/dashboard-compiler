import React from "react";
import { Icon } from "@iconify/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Settings } from "@/components/svg";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
const FooterMenu = () => {
  const { data: session } = useSession();
  return (
    <div className="space-y-5 flex flex-col items-center justify-center pb-6">
      <button className="w-11 h-11  mx-auto text-default-500 flex items-center justify-center  rounded-md transition-all duration-200 hover:bg-primary hover:text-primary-foreground">
        <Settings className=" h-8 w-8" />
      </button>
      <div>
        {session?.user?.image && (
          <Image
            src={session?.user?.image}
            alt={session?.user?.name ?? ""}
            width={36}
            height={36}
            className="rounded-full"
          />
        )}
      </div>
    </div>
  );
};
export default FooterMenu;
