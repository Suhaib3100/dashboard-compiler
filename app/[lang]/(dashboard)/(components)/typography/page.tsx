"use client";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
const TypographyPage = () => {
  const displayTableHeading = [
    {
      tableHeader: "Display Font Size: Bold",
      tableData: [
        {
          displaySize: "Display 5xl",
          heading: "This is Display Heading 1",
          textSize: "48px / 3rem",
          lineHeight: "1",
        },
        {
          displaySize: "Display 4xl",
          heading: "This is Display Heading 2",
          textSize: "36px / 2.25rem",
          lineHeight: "40px / 2.5rem",
        },
        {
          displaySize: "Display 3xl",
          heading: "This is Display Heading 3",
          textSize: "30px / 1.875rem",
          lineHeight: "36px  / 2.25rem",
        },
        {
          displaySize: "Display 2xl",
          heading: "This is Display Heading 4",
          textSize: "24px / 1.5rem",
          lineHeight: "32px / 2rem",
        },
        {
          displaySize: "Display xl",
          heading: "This is Display Heading 5",
          textSize: "20px / 1.25rem",
          lineHeight: "1.75rem / 28px",
        },
      ],
    },
  ];
  const displayTableBody = [
    {
      tableHeader: "Body Font Size: Normal",
      tableData: [
        {
          displaySize: "Body lg",
          heading: "This is Body text 1",
          textSize: "18px / 1.125rem",
          lineHeight: " 1.75rem / 28px",
        },
        {
          displaySize: "Body base",
          heading: "This is Body text 1",
          textSize: "16px / 1rem",
          lineHeight: "1.5rem / 24px",
        },
        {
          displaySize: "Body sm",
          heading: "This is Body text 3",
          textSize: "14px / 0.875rem",
          lineHeight: "1.25rem / 20px",
        },
        {
          displaySize: "Body xs",
          heading: "This is Body text 4",
          textSize: "12px / 0.75rem",
          lineHeight: "1rem / 16px",
        },
      ],
    },
  ];

  return (
    <div>
      <Card className="h-full p-6 space-y-7">
        <div className="flex flex-wrap justify-between items-center">
          <div className="space-y-4">
            <h1 className="text-4xl text-foreground font-semibold">Inter</h1>
            <div className="space-y-1 text-wrap">
              <p className="text-xs sm:text-base text-muted-foreground font-normal sm:font-medium tracking-wide sm:tracking-widest uppercase">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
              </p>
              <p className="text-xs sm:text-base text-muted-foreground font-normal sm:font-medium tracking-wide sm:tracking-widest lowercase">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
              </p>
              <p className="text-xs sm:text-base text-muted-foreground font-normal sm:font-medium tracking-wide sm:tracking-widest ">
                1234567890
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-14">
            <div className="space-y-2 font-normal ">
              <div className="space-x-2 text-4xl ">
                <span>A</span>
                <span>a</span>
              </div>
              <p className="text-base text-right">Regular</p>
            </div>
            <div className="space-y-2 font-medium ">
              <div className="space-x-2 text-4xl ">
                <span>A</span>
                <span>a</span>
              </div>
              <p className="text-base text-right">Medium</p>
            </div>
            <div className="space-y-2 font-semibold ">
              <div className="space-x-2 text-4xl ">
                <span>A</span>
                <span>a</span>
              </div>
              <p className="text-base text-semibold">Semibold</p>
            </div>
            <div className="space-y-2 font-bold ">
              <div className="space-x-2 text-4xl ">
                <span>A</span>
                <span>a</span>
              </div>
              <p className="text-base text-right">Bold</p>
            </div>
          </div>
        </div>
        <hr className="-mx-6" />
        {displayTableHeading.map((data1st, index) => (
          <div key={index} className="w-full !mt-0">
            <div className="border-0 !border-b-[1px] ">
              <div className="font-semibold text- text-2xl py-6">
                {data1st.tableHeader}
              </div>
            </div>
            {data1st.tableData.map((data, index) => (
              <div key={index} className="border-0">
                <div className="border-0 !border-b-[1px] flex flex-wrap items-center">
                  <p className="py-6 font-medium text-lg flex-none min-w-[200px] sm:min-w-[100px]">
                    {data.displaySize}
                  </p>
                  <div className="w-max flex-1 pl-0 sm:pl-10 min-w-[200px] sm:min-w-[100px]">
                    <p
                      className={cn("py-6 font-bold text-left ", {
                        "text-5xl ": data.textSize == "48px / 3rem",
                        "text-4xl ": data.textSize == "36px / 2.25rem",
                        "text-3xl ": data.textSize == "30px / 1.875rem",
                        "text-2xl ": data.textSize == "24px / 1.5rem",
                        "text-xl ": data.textSize == "20px / 1.25rem",
                      })}
                    >
                      {data.heading}
                    </p>
                  </div>
                  <div className="text-start sm:text-end py-6 space-y-2 flex-none">
                    <p className="font-medium text-muted-foreground">
                      Text Size:{" "}
                      <span className="text-foreground ml-2">
                        {data.textSize}
                      </span>
                    </p>
                    <p className="font-medium text-muted-foreground">
                      Line Height:{" "}
                      <span className="text-foreground ml-2">
                        {data.lineHeight}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
        <br />
        <br />
        {displayTableBody.map((data1st, index) => (
          <div key={index} className="w-full !mt-0">
            <div className="border-0 !border-b-[1px] ">
              <div className="font-semibold text- text-2xl py-6">
                {data1st.tableHeader}
              </div>
            </div>
            {data1st.tableData.map((data, index) => (
              <div key={index} className="border-0">
                <div className="border-0 !border-b-[1px] flex flex-wrap items-center">
                  <p className="py-6 font-medium text-lg flex-none min-w-[200px] sm:min-w-[100px]">
                    {data.displaySize}
                  </p>
                  <div className="w-max flex-1 pl-0 sm:pl-10 min-w-[200px] sm:min-w-[100px]">
                    <p
                      className={cn("py-6 font-normal text-left ", {
                        "text-lg ": data.textSize == "18px / 1.125rem",
                        "text-base ": data.textSize == "16px / 1rem",
                        "text-sm ": data.textSize == "14px / 0.875rem",
                        "text-xs ": data.textSize == "12px / 0.75rem",
                      })}
                    >
                      {data.heading}
                    </p>
                  </div>
                  <div className="text-start sm:text-end py-6 space-y-2 flex-none">
                    <p className="font-medium text-muted-foreground">
                      Text Size:{" "}
                      <span className="text-foreground ml-2">
                        {data.textSize}
                      </span>
                    </p>
                    <p className="font-medium text-muted-foreground">
                      Line Height:{" "}
                      <span className="text-foreground ml-2">
                        {data.lineHeight}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Card>
    </div>
  );
};

export default TypographyPage;
