"use client";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CardImage from "@/public/images/landing-page/pricing-card-avatar.png";
import Image from "next/image";
const PricingPlan = () => {
  return (
    <section className="py-16 2xl:py-[120px]" id="pricing">
      <div className="container">

        <div className="max-w-[670px] mx-auto ">
          <h2 className="text-center text-xl xl:text-3xl xl:leading-[46px] font-semibold text-default-900 mb-3">
            Pricing  <span className="text-primary">Plan</span>
          </h2>
          <p className="text-base xl:leading-7 text-center text-default-700 ">
            DashTail stands as a prudent investment, safeguarding you against thousands in potential expenses.
            With every update, amplify its value even further.
          </p>
        </div>

        <div className="mt-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-x-12">
            {/* card one */}
            <div className="bg-default-100 rounded-xl py-10 px-7 flex flex-col">
              <div className="flex-none">
                <div className="flex mb-3">
                  <h4 className="flex-1 text-xl xl:text-2xl  font-semibold text-default-900">
                    Regular License
                  </h4>
                  <span className="flex-none text-xl xl:text-2xl  font-semibold text-primary">
                    $<span className="underline">9</span>
                  </span>
                </div>
                <p className="text-sm xl:text-base  text-default-600">
                  Suitable for you or one client, this license covers a single end
                  product that is accessible to end users{" "}
                  <span className="font-medium text-primary">
                    without charge.
                  </span>
                </p>
              </div>
              <div className="flex-1">
                <div className="text-base xl:text-xl font-semibold text-default-900 mt-5 mb-3 xl:mb-5 ">
                  What’s Included
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Icon
                      icon="heroicons:check-16-solid"
                      className="w-4 h-4 text-success"
                    />
                    <span className="text-sm xl:text-base  text-default-900">
                      Quality assurance by Envato
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon
                      icon="heroicons:check-16-solid"
                      className="w-4 h-4 text-success"
                    />
                    <span className="text-sm xl:text-base  text-default-900">
                      Free lifetime updates.
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon
                      icon="heroicons:check-16-solid"
                      className="w-4 h-4 text-success"
                    />
                    <span className="text-sm xl:text-base  text-default-900">
                      Support for six months.
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon
                      icon="heroicons:x-mark-16-solid"
                      className="w-4 h-4 text-destructive"
                    />
                    <span className="text-sm xl:text-base text-default-900">
                      Customization guidance and consultancy.
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon
                      icon="heroicons:x-mark-16-solid"
                      className="w-4 h-4 text-destructive"
                    />
                    <span className="text-sm xl:text-base  text-default-900">
                      Remote Support, Skype support.
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon
                      icon="heroicons:x-mark-16-solid"
                      className="w-4 h-4 text-destructive"
                    />
                    <span className="text-sm xl:text-base  text-default-900">
                      Anydesk/Teamviewer support.
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon
                      icon="heroicons:x-mark-16-solid"
                      className="w-4 h-4 text-destructive"
                    />
                    <span className="text-sm xl:text-base  text-default-900">
                      Free installation.
                    </span>
                  </li>
                </ul>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Icon
                    icon="heroicons:check-16-solid"
                    className="w-4 h-4 text-success"
                  />
                  <span className="text-sm xl:text-base  text-default-900">
                    Quality assurance by Envato
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon
                    icon="heroicons:check-16-solid"
                    className="w-4 h-4 text-success"
                  />
                  <span className="text-sm xl:text-base  text-default-900">
                    Free lifetime updates.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon
                    icon="heroicons:check-16-solid"
                    className="w-4 h-4 text-success"
                  />
                  <span className="text-sm xl:text-base  text-default-900">
                    Support for six months.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon
                    icon="heroicons:x-mark-16-solid"
                    className="w-4 h-4 text-destructive"
                  />
                  <span className="text-sm xl:text-base text-default-900">
                    Customization guidance and consultancy.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon
                    icon="heroicons:x-mark-16-solid"
                    className="w-4 h-4 text-destructive"
                  />
                  <span className="text-sm xl:text-base  text-default-900">
                    Remote Support, Skype support.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon
                    icon="heroicons:x-mark-16-solid"
                    className="w-4 h-4 text-destructive"
                  />
                  <span className="text-sm xl:text-base  text-default-900">
                    Anydesk/Teamviewer support.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon
                    icon="heroicons:x-mark-16-solid"
                    className="w-4 h-4 text-destructive"
                  />
                  <span className="text-sm xl:text-base  text-default-900">
                    Free installation.
                  </span>
                </li>
              </ul>
              <Button asChild>
                <Link href="https://1.envato.market/dashtail-regular" target="__blank" className="mt-8 xl:mt-12 w-full">
                  Buy Now
                </Link>
              </Button>
            </div>

            {/* card two */}

            <div className="bg-default-100 rounded-xl py-8 px-6 border border-primary relative flex flex-col">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary font-medium text-primary-foreground py-1 px-3 rounded text-base ">
                Featured
              </span>
              <div className="flex-none">
                <div className="flex mb-3">
                  <h4 className="flex-1 text-xl xl:text-2xl  font-semibold text-default-900">
                    Extend License
                  </h4>
                  <span className="flex-none text-xl xl:text-2xl  font-semibold text-primary">
                    $<span className="underline">300</span>
                  </span>
                </div>
                <p className="text-sm xl:text-base  text-default-600">
                  Suitable for you or one client, this license covers a single end
                  product that is accessible to end users{" "}
                  <span className="font-medium text-primary">
                    without charge.
                  </span>
                </p>
              </div>
              <div className="flex-1">

                <div className="text-base  font-semibold text-default-900 mt-5 mb-3 xl:mb-5">
                  What’s Included
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Icon
                      icon="heroicons:check-16-solid"
                      className="w-4 h-4 text-success"
                    />
                    <span className="text-sm xl:text-base  text-default-900">
                      Quality assurance by Envato
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon
                      icon="heroicons:check-16-solid"
                      className="w-4 h-4 text-success"
                    />
                    <span className="text-sm xl:text-base  text-default-900">
                      Free lifetime updates.
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon
                      icon="heroicons:check-16-solid"
                      className="w-4 h-4 text-success"
                    />
                    <span className="text-sm xl:text-base  text-default-900">
                      Support for six months.
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon
                      icon="heroicons:check-16-solid"
                      className="w-4 h-4 text-success"
                    />
                    <span className="text-sm xl:text-base  text-default-900">
                      Customization guidance and consultancy.
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon
                      icon="heroicons:check-16-solid"
                      className="w-4 h-4 text-success"
                    />
                    <span className="text-sm xl:text-base  text-default-900">
                      Remote Support, Skype support.
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon
                      icon="heroicons:check-16-solid"
                      className="w-4 h-4 text-success"
                    />
                    <span className="text-sm xl:text-base  text-default-900">
                      Anydesk/Teamviewer support.
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon
                      icon="heroicons:check-16-solid"
                      className="w-4 h-4 text-success"
                    />
                    <span className="text-sm xl:text-base text-default-900">
                      Free installation.
                    </span>
                  </li>
                </ul>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Icon
                    icon="heroicons:check-16-solid"
                    className="w-4 h-4 text-success"
                  />
                  <span className="text-sm xl:text-base  text-default-900">
                    Quality assurance by Envato
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon
                    icon="heroicons:check-16-solid"
                    className="w-4 h-4 text-success"
                  />
                  <span className="text-sm xl:text-base  text-default-900">
                    Free lifetime updates.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon
                    icon="heroicons:check-16-solid"
                    className="w-4 h-4 text-success"
                  />
                  <span className="text-sm xl:text-base  text-default-900">
                    Support for six months.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon
                    icon="heroicons:check-16-solid"
                    className="w-4 h-4 text-success"
                  />
                  <span className="text-sm xl:text-base  text-default-900">
                    Customization guidance and consultancy.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon
                    icon="heroicons:check-16-solid"
                    className="w-4 h-4 text-success"
                  />
                  <span className="text-sm xl:text-base  text-default-900">
                    Remote Support, Skype support.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon
                    icon="heroicons:check-16-solid"
                    className="w-4 h-4 text-success"
                  />
                  <span className="text-sm xl:text-base  text-default-900">
                    Anydesk/Teamviewer support.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon
                    icon="heroicons:check-16-solid"
                    className="w-4 h-4 text-success"
                  />
                  <span className="text-sm xl:text-base text-default-900">
                    Free installation.
                  </span>
                </li>
              </ul>
              <Button asChild>
                <Link href="https://1.envato.market/dashtail-extended" target="__blank" className="mt-8 xl:mt-12 w-full">
                  Buy Now
                </Link>
              </Button>
            </div>

            {/* card three */}

            <div className="bg-default-100 rounded-xl py-8 px-6 flex flex-col">
              <div className="flex-none">
                <h4 className="text-xl xl:text-2xl font-semibold text-primary mb-3">
                  Custom License
                </h4>
                <p className="text-sm xl:text-base  text-default-600">
                  Should your business necessitate a unique licensing
                  arrangement, please
                  <Link href="https://codeshaper.net/" className="text-primary mx-1 hover:underline">
                    Get In Touch
                  </Link>
                  to explore customized solutions.
                </p>
              </div>
              <div className="flex-1 flex flex-col justify-center mt-8 lg:mt-0">
                <Image src={CardImage} alt="pricing card image" priority={true} />
              </div>
              <Button asChild>
                <Link href="https://codeshaper.net/contact-us" target="__blank" className="mt-8 xl:mt-12 w-full">
                  Contact us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
