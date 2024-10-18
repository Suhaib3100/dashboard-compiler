"use client";

import { Card } from "@/components/ui/card";
import { Icon } from "@iconify/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ecard1 from "@/public/images/card/ecard1.png";
import ecard2 from "@/public/images/card/ecard2.png";
import ecard3 from "@/public/images/card/ecard3.png";
import Image from "next/image";
import { useState } from "react";

const ECommerceCard = () => {
  const [count, setCount] = useState<number>(5);
  return (
    <div className="p-5 space-y-5 bg-background rounded-md shadow-sm">

      <div className="text-base font-medium text-default-900 mb-1 py-2">Ecommerce Card</div>

      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        <Card className="p-4 rounded-md group">
          <Link href="#">
            <div className=" relative h-[191px] flex flex-col justify-center items-center mb-3 rounded-md">
              <div className="w-full overflow-hidden rounded-md relative z-10 bg-default-100 dark:bg-default-200 h-full ">
                <Image
                  alt=""
                  className=" h-full w-full  object-contain p-6   transition-all duration-300 group-hover:scale-105"
                  src={ecard1}
                />
                <Badge color="destructive" className="absolute top-3 ltr:left-3 rtl:right-3">
                  -50%
                </Badge>

                <div className="hover-box flex flex-col invisible absolute top-3 ltr:right-2 rtl:left-2 opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 space-y-[6px]">

                  <button className="rounded-full bg-background p-2 ">
                    <Icon
                      icon="ph:heart-fill"
                      className="text-muted-foreground hover:text-destructive  h-4 w-4"
                    />
                  </button>
                  <button className="rounded-full bg-background p-2  ">
                    <Icon
                      icon="ph:eye"
                      className="text-muted-foreground hover:text-destructive  h-4 w-4"
                    />
                  </button>
                  <button className="rounded-full bg-background p-2 ">
                    <Icon
                      icon="jam:refresh-reverse"
                      className="text-muted-foreground hover:text-destructive  h-4 w-4"
                    />
                  </button>

                </div>
              </div>
            </div>
          </Link>

          <div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-xs	text-secondary-foreground uppercase font-normal"> Men</p>
              <span className="flex items-center text-secondary-foreground  font-normal text-xs gap-x-1  ">
                <Icon icon="ph:star-fill" className="text-yellow-400" />
                <span>4.8</span>
              </span>
            </div>
            <h6 className="text-secondary-foreground text-base	font-medium	mb-[6px] truncate	">
              <Link href="#">Card Group Hover Full</Link>
            </h6>
            <p className="text-default-500 dark:text-default-500  text-sm  font-normal mb-2">
              The best cotton black branded shirt.
            </p>
            <p className="mb-4 space-x-4">
              <span className="text-secondary-foreground text-base	font-medium mt-2">
                $489
              </span>
              <del className="text-default-500 dark:text-default-500  font-normal text-base">
                $700
              </del>
            </p>
            <Button className="w-full" variant="outline">
              <Icon icon="heroicons:shopping-bag" className="w-4 h-4 ltr:mr-2 rtl:ml-2 " />
              Add to Cart
            </Button>
          </div>
        </Card>

        <Card className="p-4 rounded-md ">
          <Link href="#">
            <div className=" relative h-[191px] flex flex-col justify-center items-center mb-3 rounded-md">
              <div className="w-full overflow-hidden rounded-md relative z-10 bg-default-100 dark:bg-default-200 h-full group">
                <Image
                  alt=""
                  className="  h-full w-full  object-contain p-6   transition-all duration-300 group-hover:scale-105"
                  src={ecard2}
                />

                <Badge color="destructive" className="absolute top-3 ltr:left-3 rtl:right-3">
                  -35%
                </Badge>

                <div className="hover-box flex flex-col invisible absolute top-3 ltr:right-2 rtl:left-2 opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 space-y-[6px]">
                  <>
                    <button className="rounded-full bg-background p-2 ">
                      <Icon
                        icon="ph:heart-fill"
                        className="text-muted-foreground hover:text-destructive  h-4 w-4"
                      />
                    </button>
                    <button className="rounded-full bg-background p-2  ">
                      <Icon
                        icon="ph:eye"
                        className="text-muted-foreground hover:text-destructive  h-4 w-4"
                      />
                    </button>
                    <button className="rounded-full bg-background p-2 ">
                      <Icon
                        icon="jam:refresh-reverse"
                        className="text-muted-foreground hover:text-destructive  h-4 w-4"
                      />
                    </button>
                  </>
                </div>
              </div>
            </div>
          </Link>

          <div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-xs	text-secondary-foreground uppercase font-normal">
                Men
              </p>
              <span className="flex items-center text-secondary-foreground  font-normal text-xs gap-x-1  ">
                <Icon icon="ph:star-fill" className="text-yellow-400" />
                <span>4.8</span>
              </span>
            </div>
            <h6 className="text-secondary-foreground text-base	font-medium	mb-[6px] truncate	">
              <Link href="#">Card Image Hover</Link>
            </h6>
            <p className="text-default-500 text-sm  font-normal mb-2">
              The best cotton black branded shirt.
            </p>
            <p className="mb-4 space-x-4">
              <span className="text-secondary-foreground text-base	font-medium mt-2">
                $489
              </span>
              <del className="text-default-500  font-normal text-base">
                $700
              </del>
            </p>
            <Button className="w-full">
              <Icon icon="heroicons:shopping-bag" className="w-4 h-4 ltr:mr-2 rtl:ml-2 " />
              Add to Cart
            </Button>
          </div>
        </Card>
        <Card className="p-4 rounded-md ">
          <Link href="#">
            <div className=" relative h-[191px] flex flex-col justify-center items-center mb-3 rounded-md">
              <div className="w-full overflow-hidden rounded-md relative z-10 bg-default-100 dark:bg-default-200 h-full group">
                <Image
                  alt=""
                  className="  h-full w-full  object-contain p-6  transition-all duration-300 group-hover:scale-105"
                  src={ecard3}
                />

                <Badge color="destructive" className="absolute top-3 ltr:left-3 rtl:right-3">
                  -40%
                </Badge>

                <div className="hover-box flex flex-col invisible absolute top-3 ltr:right-2 rtl:left-2 opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 space-y-[6px]">
                  <button className="rounded-full bg-background p-2 ">
                    <Icon
                      icon="ph:heart-fill"
                      className="text-muted-foreground hover:text-destructive  h-4 w-4"
                    />
                  </button>
                  <button className="rounded-full bg-background p-2  ">
                    <Icon
                      icon="ph:eye"
                      className="text-muted-foreground hover:text-destructive  h-4 w-4"
                    />
                  </button>
                  <button className="rounded-full bg-background p-2 ">
                    <Icon
                      icon="jam:refresh-reverse"
                      className="text-muted-foreground hover:text-destructive  h-4 w-4"
                    />
                  </button>
                </div>
              </div>
            </div>
          </Link>

          <div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-xs	text-secondary-foreground uppercase font-normal">
                Men
              </p>
              <span className="flex items-center text-secondary-foreground  font-normal text-xs gap-x-1  ">
                <Icon icon="ph:star-fill" className="text-yellow-400" />
                <span>4.8</span>
              </span>
            </div>
            <h6 className="text-secondary-foreground text-base	font-medium	mb-[6px] truncate	">
              <Link href="#">Box Card Counter Button</Link>
            </h6>
            <p className="text-default-500  text-sm  font-normal mb-2">
              The best cotton black branded shirt.
            </p>
            <p className="mb-4 space-x-4 rtl:space-x-reverse">
              <span className="text-secondary-foreground text-base	font-medium mt-2">
                $489
              </span>
              <del className="text-default-500   font-normal text-base">
                $700
              </del>
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 space-x-4 rtl:space-x-reverse items-center ">
                <div className="flex-1 h-10 flex border border-1 border-primary delay-150 ease-in-out  ltr:divide-x-[1px] rtl:divide-x-reverse text-sm font-normal divide-primary rounded">
                  <button
                    type="button"
                    className="flex-none px-4 text-primary hover:bg-primary hover:text-primary-300  disabled:cursor-not-allowed disabled:opacity-50 "
                    onClick={() => setCount(prevCount => prevCount - 1)}
                  >
                    <Icon icon="eva:minus-fill" />
                  </button>

                  <div className="flex-1 text-base py-2 flex items-center min-w-[45px] justify-center text-primary font-medium">
                    {count}
                  </div>
                  <button
                    type="button"
                    className="flex-none px-4 text-primary hover:bg-primary hover:text-primary-300  disabled:cursor-not-allowed disabled:opacity-50 "
                    onClick={() => setCount(prevCount => prevCount + 1)}
                  >
                    <Icon icon="eva:plus-fill" />
                  </button>
                </div>
              </div>
              <Button variant="outline" className="py-2 px-5 flex-none">
                <Icon icon="heroicons:shopping-bag" className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
        <Card className="p-4 rounded-md ">
          <Link href="#">
            <div className=" relative h-[191px] flex flex-col justify-center items-center mb-3 rounded-md">
              <div className="w-full overflow-hidden rounded-md relative z-10 bg-default-100 dark:bg-default-200 h-full group">
                <Image
                  alt=""
                  className="  h-full w-full  object-contain p-6   transition-all duration-300 group-hover:scale-105"
                  src={ecard1}
                />

                <Badge color="destructive" className="absolute top-3 ltr:left-3 rtl:right-3">
                  -40%
                </Badge>

                <div className="flex flex-col invisible absolute top-3 ltr:right-2 rtl:left-2 opacity-0 group-hover:visible group-hover:opacity-100 transition duration-300 space-y-1.5">
                  <>
                    <button className="rounded-full bg-background p-2 ">
                      <Icon
                        icon="ph:heart-fill"
                        className="text-muted-foreground hover:text-destructive  h-4 w-4"
                      />
                    </button>
                    <button className="rounded-full bg-background p-2  ">
                      <Icon
                        icon="ph:eye"
                        className="text-muted-foreground hover:text-destructive  h-4 w-4"
                      />
                    </button>
                    <button className="rounded-full bg-background p-2 ">
                      <Icon
                        icon="jam:refresh-reverse"
                        className="text-muted-foreground hover:text-destructive  h-4 w-4"
                      />
                    </button>
                  </>
                </div>
              </div>
            </div>
          </Link>

          <div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-xs	text-secondary-foreground uppercase font-normal">
                Men
              </p>
              <span className="flex items-center text-secondary-foreground  font-normal text-xs gap-x-1  ">
                <Icon icon="ph:star-fill" className="text-yellow-400" />
                <span>4.8</span>
              </span>
            </div>
            <h6 className="text-secondary-foreground text-base	font-medium	mb-[6px] truncate	">
              <Link href="#">New Polo Shirt</Link>
            </h6>
            <p className="text-default-500   text-sm  font-normal mb-2">
              The best cotton black branded shirt.
            </p>
            <p className="mb-4 ltr:space-x-4 rtl:space-x-reverse">
              <span className="text-secondary-foreground text-base	font-medium mt-2">
                $489
              </span>
              <del className="text-default-500 font-normal text-base">
                $700
              </del>
            </p>

            <Button className="w-full" variant="outline">
              <Icon icon="heroicons:shopping-bag" className="w-4 h-4 ltr:mr-2 rtl:ml-2 " />
              Add to Cart
            </Button>
          </div>
        </Card>
      </div>
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-5">
        <Card className="p-3 rounded-md md:flex sm:flex-none md:gap-3">
          <Link href="#">
            <div className=" relative h-[208px] w-[210px] flex flex-col justify-center items-center  mb-3 md:mb-0 rounded-md">
              <div className="w-full overflow-hidden rounded-md relative z-10 bg-default-100 dark:bg-default-200 h-full group">
                <Image
                  alt=""
                  className="  h-full w-full  object-contain p-6   transition-all duration-300 group-hover:scale-105"
                  src={ecard1}
                />

                <Badge color="destructive" className="absolute top-3 ltr:left-3 rtl:right-3">
                  -42%
                </Badge>

                <div className="hover-box flex flex-col invisible absolute top-3 ltr:right-2 rtl:left-2 opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 space-y-[6px]">
                  <>
                    <button className="rounded-full bg-background p-2 ">
                      <Icon
                        icon="ph:heart-fill"
                        className="text-muted-foreground hover:text-destructive  h-4 w-4"
                      />
                    </button>
                    <button className="rounded-full bg-background p-2  ">
                      <Icon
                        icon="ph:eye"
                        className="text-muted-foreground hover:text-destructive  h-4 w-4"
                      />
                    </button>
                    <button className="rounded-full bg-background p-2 ">
                      <Icon
                        icon="jam:refresh-reverse"
                        className="text-muted-foreground hover:text-destructive  h-4 w-4"
                      />
                    </button>
                  </>
                </div>
              </div>
            </div>
          </Link>

          <div className="md:mt-3 mt-0 w-full">
            <p className="text-xs	text-foreground uppercase font-normal mb-1">
              Men
            </p>
            <h6 className="text-foreground text-lg	font-medium	mb-1 truncate	">
              <Link href="#">Classical Black T-Shirt</Link>
            </h6>
            <p className="text-muted-foreground  text-sm  font-medium mb-1">
              The best cotton black branded shirt.
            </p>
            <p className="mb-[5px] ltr:space-x-4 rtl:space-x-reverse">
              <span className="text-foreground text-lg	font-semibold mt-2">
                $489
              </span>
              <del className="text-muted-foreground  font-normal text-base">
                $700
              </del>
            </p>
            <div className="flex items-center mb-[9px] text-secondary-foreground  font-normal text-base gap-x-2">
              <div className="space-x-1 flex items-center ">
                <Icon icon="ph:star-fill" className="text-yellow-400" />
                <Icon icon="ph:star-fill" className="text-yellow-400" />
                <Icon icon="ph:star-fill" className="text-yellow-400" />
                <Icon icon="ph:star-fill" className="text-yellow-400" />
                <Icon icon="ph:star-fill" className="text-yellow-400" />
              </div>
              <span>4.8</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex-auto ltr:space-x-4 rtl:space-x-reverse items-center ">
                <div className="flex-1 h-10 flex border border-1 border-primary delay-150 ease-in-out  ltr:divide-x-[1px] rtl:divide-x-reverse text-sm font-normal divide-primary rounded">
                  <button
                    type="button"
                    className="flex-none px-4 text-primary hover:bg-primary hover:text-primary-300  disabled:cursor-not-allowed disabled:opacity-50 "
                  >
                    <Icon icon="eva:minus-fill" />
                  </button>

                  <div className="flex-1 text-base py-2 flex items-center min-w-[45px] justify-center text-primary font-medium">
                    5
                  </div>
                  <button
                    type="button"
                    className="flex-none px-4 text-primary hover:bg-primary hover:text-primary-300  disabled:cursor-not-allowed disabled:opacity-50 "
                  >
                    <Icon icon="eva:plus-fill" />
                  </button>
                </div>
              </div>
              <Button className="flex-auto">
                <Icon icon="heroicons:shopping-bag" className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-3 rounded-md md:flex md:gap-3 sm:flex-none">
          <Link href="#">
            <div className=" relative h-[208px] w-[210px] flex flex-col justify-center items-center mb-3 md:mb-0 rounded-md">
              <div className="w-full overflow-hidden rounded-md relative z-10 bg-default-100 dark:bg-default-200 h-full group">
                <Image
                  alt=""
                  className="  h-full w-full  object-contain p-6   transition-all duration-300 group-hover:scale-105"
                  src={ecard1}
                />

                <Badge color="destructive" className="absolute top-3 ltr:left-3 rtl:right-3">
                  -40%
                </Badge>

                <div className="hover-box flex flex-col invisible absolute top-3 ltr:right-2 rtl:left-2 opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 space-y-[6px]">
                  <>
                    <button className="rounded-full bg-background p-2 ">
                      <Icon
                        icon="ph:heart-fill"
                        className="text-muted-foreground hover:text-destructive  h-4 w-4"
                      />
                    </button>
                    <button className="rounded-full bg-background p-2  ">
                      <Icon
                        icon="ph:eye"
                        className="text-muted-foreground hover:text-destructive  h-4 w-4"
                      />
                    </button>
                    <button className="rounded-full bg-background p-2 ">
                      <Icon
                        icon="jam:refresh-reverse"
                        className="text-muted-foreground hover:text-destructive  h-4 w-4"
                      />
                    </button>
                  </>
                </div>
              </div>
            </div>
          </Link>

          <div className="md:mt-3 mt-0 w-full">
            <p className="text-xs	text-foreground uppercase font-normal mb-1">
              Men
            </p>
            <h6 className="text-foreground text-lg	font-medium	mb-1 truncate	">
              <Link href="#">Classical Black T-Shirt</Link>
            </h6>
            <p className="text-muted-foreground  text-sm  font-medium mb-1">
              The best cotton black branded shirt.
            </p>
            <p className="mb-[5px] ltr:space-x-4 rtl:space-x-reverse">
              <span className="text-foreground text-lg	font-semibold mt-2">
                $489
              </span>
              <del className="text-muted-foreground  font-normal text-base">
                $700
              </del>
            </p>
            <div className="flex items-center mb-[9px] text-secondary-foreground  font-normal text-base gap-x-2">
              <div className="space-x-1 flex items-center ">
                <Icon icon="ph:star-fill" className="text-yellow-400" />
                <Icon icon="ph:star-fill" className="text-yellow-400" />
                <Icon icon="ph:star-fill" className="text-yellow-400" />
                <Icon icon="ph:star-fill" className="text-yellow-400" />
                <Icon icon="ph:star-fill" className="text-yellow-400" />
              </div>
              <span>4.8</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex-auto ltr:space-x-4 rtl:space-x-reverse items-center ">
                <div className="flex-1 ltr:space-x-4 rtl:space-x-reverse items-center ">
                  <div className="flex-1 h-10 flex border border-1 border-primary delay-150 ease-in-out  divide-x-[1px] rtl:divide-x-reverse text-sm font-normal divide-primary rounded">
                    <button
                      type="button"
                      className="flex-none px-4 text-primary hover:bg-primary hover:text-primary-300  disabled:cursor-not-allowed disabled:opacity-50 "
                    >
                      <Icon icon="eva:minus-fill" />
                    </button>

                    <div className="flex-1 text-base py-2 flex items-center min-w-[45px] justify-center text-primary font-medium">
                      5
                    </div>
                    <button
                      type="button"
                      className="flex-none px-4 text-primary hover:bg-primary hover:text-primary-300  disabled:cursor-not-allowed disabled:opacity-50 "
                    >
                      <Icon icon="eva:plus-fill" />
                    </button>
                  </div>
                </div>
              </div>
              <Button className="flex-auto" variant="outline">
                <Icon icon="heroicons:shopping-bag" className="w-4 h-4 ltr:mr-2 rtl:ml-2 " />
                Add to Cart
              </Button>
            </div>
          </div>
        </Card>
      </div>


    </div>
  );
};

export default ECommerceCard;
