"use client"
import Image from "next/image";
import admin from "@/public/images/all-img/admin.png"

const WelcomeBlock = () => {
  const data = [
    {
      title: "Today's Task",
      total: "123"
    },
    {
      title: "Overdue Task",
      total: "213"
    },
  ]
  return (
    <div className="w-full h-full bg-primary rounded-md  flex p-6 relative " >
      <div className="flex-1 ">
        <div className="text-lg md:text-2xl font-semibold text-primary-foreground mb-6">
          Welcome Back <br />
          Prantik!
        </div>

        <div className=" flex flex-col gap-4 sm:flex-row ">
          {
            data.map((item, index) => (
              <div
                key={`welcome-text-${index}`}
                className="flex items-center w-full max-w-[130px] p-3 rounded bg-primary-foreground/10 shadow backdrop-blur-sm"
              >
                <div className="flex-1">
                  <div className="text-xs font-semibold text-primary-foreground/80">{item.title}</div>
                  <div className="text-lg font-semibold text-primary-foreground">{item.total}</div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="absolute bottom-0 ltr:right-4 rtl:left-4 ltr:md:right-[30%] rtl:md:left-[30%] ltr:md:bottom-5 ltr:2xl:right-10 rtl:2xl:left-10 w-[100px] ">
        <Image src={admin} alt="user" className="w-full h-full object-cover" priority={true} />
      </div>

    </div>
  );
};

export default WelcomeBlock;