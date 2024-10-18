import { Card, CardContent } from "@/components/ui/card";
import { demoMenus } from "./../data";
import { useState } from "react";
import { cn } from "@/lib/utils";
import ShowCaseContent from "./showcase-content";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const ShowCase = () => {
  const [tab, setTab] = useState<string>("components");
  const menus = demoMenus || [];
  const [currentSubMenu, setCurrentSubMenu] = useState<any[]>(menus[0].child || []);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleSubMenu = (index: number) => {
    setActiveIndex(index);
    if (menus[index].child) {
      setCurrentSubMenu(menus[index].child);
    }
  };

  // filter is   currentSubMenu have  nested
  const currentSubMenuFiltered = currentSubMenu.filter((item) => !item.nested);
  //  filter only for  currentSubMenu nested
  const currentSubMenuWithNested = currentSubMenu.filter((item) => item.nested);

  return (
    <section className="py-16 2xl:py-[100px] bg-default-100" id="elements">
      <div className="container">
        <div className="max-w-[670px] mx-auto">
          <h2 className="text-xl lg:text-xl 2xl:text-3xl 2xl:leading-[46px] font-semibold text-default-900 text-center mb-3">
            Extensive UI <span className="text-primary">Elements</span>
          </h2>
          <p className="text-base leading-7 text-center text-default-700">
            DashTail provides a rich set of pre-built dashboards, layouts, apps, pages, charts, forms, tables,
            maps, etc. perfect for crafting advanced web applications.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mt-12">
          <div className="flex-none w-full lg:w-[382px] ">
            <Card className="bg-background">
              <CardContent className="py-6 px-0">
                <ul className="space-y-5 xl:space-y-6">
                  {menus?.map((item, i) => (
                    <li
                      key={`landing-page-tab-${i}`}
                      onClick={() => {
                        toggleSubMenu(i);
                      }}
                      className="flex items-center px-6 cursor-pointer"
                    >
                      <div
                        className={cn(
                          "flex-1 flex items-center gap-3 text-default-600",
                          {
                            "text-primary": i === activeIndex,
                          }
                        )}
                      >
                        <item.icon className="w-6 h-6" />
                        <span className={cn("text-base xl:text-xl font-medium ")}>
                          {item.title}
                        </span>
                      </div>
                      <div className="flex-none text-base ">
                        (0{item?.child?.length})
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="flex-1">
            {currentSubMenuWithNested.length > 0 && (
              <div>
                <Tabs
                  defaultValue={currentSubMenuWithNested[0].title}
                  className="inline-block p-0 w-full "
                >
                  <TabsList className="bg-background rounded-md   p-0 border-b-2 py-7   w-full justify-start gap-10">
                    {currentSubMenuWithNested?.map((tab, index) => (
                      <TabsTrigger
                        key={`tab-${index}`}
                        value={tab.title}
                        className="capitalize  data-[state=active]:shadow-none  data-[state=active]:bg-transparent data-[state=active]:text-primary transition duration-150 before:transition-all before:duration-150 relative before:absolute
                            before:left-1/2 before:-bottom-[30px] before:h-[2px] px-3
                            before:-translate-x-1/2 before:w-0 data-[state=active]:before:bg-primary data-[state=active]:before:w-full"
                      >
                        <tab.icon className="h-5 w-5 mr-2" />
                        <span className="text-sm font-medium text-default-700">
                          {tab.title}
                        </span>
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {currentSubMenuWithNested?.map((tab, index) => (
                    <TabsContent key={`tab2-${index}`} value={tab.title}>
                      <div className=" grid grid-cols-1 xl:grid-cols-2 gap-5">
                        {tab?.nested?.map((megaChild: any, mkindex: number) => (
                          <ShowCaseContent
                            content={megaChild}
                            key={`show-content-tab-${mkindex}`}
                          />
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            )}
            {currentSubMenuFiltered.length > 0 && (
              <div className="grid  grid-cols-1 xl:grid-cols-2 gap-5">
                {currentSubMenuFiltered?.map((content, j) => (
                  <ShowCaseContent
                    content={content}
                    key={`landing-content-${j}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
