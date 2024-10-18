
import icon1 from "@/public/images/landing-page/icon-1.png"
import icon2 from "@/public/images/landing-page/icon-2.png"
import icon3 from "@/public/images/landing-page/icon-3.png"
import icon4 from "@/public/images/landing-page/icon-4.png"
import icon5 from "@/public/images/landing-page/icon-5.png"
import icon6 from "@/public/images/landing-page/icon-6.png"
import icon7 from "@/public/images/landing-page/icon-7.png"
import icon8 from "@/public/images/landing-page/icon-8.png"
import icon9 from "@/public/images/landing-page/icon-9.png"
import icon10 from "@/public/images/landing-page/icon-10.png"
import icon11 from "@/public/images/landing-page/icon-11.png"
import icon12 from "@/public/images/landing-page/icon-12.png"
import Image from "next/image";
const AboutDashtail = () => {
  const data = [
    {
      id: 1,
      title: "User Experience",
      desc: "Crafted with the end-user in mind, ensuring a smooth, intuitive, and engaging interface that enhances overall productivity and satisfaction.",
      icon: icon1
    },
    {
      id: 2,
      title: "Developer Experience",
      desc: "Offers a seamless development workflow with well-organized code, comprehensive documentation, and tools that simplify customization.",
      icon: icon2
    },
    {
      id: 3,
      title: "Latest Framework",
      desc: "Built on the latest versions of Next.js and Tailwind CSS, providing a cutting-edge foundation for modern, fast, and responsive web applications.",
      icon: icon3
    },
    {
      id: 4,
      title: "Rich Library",
      desc: "Comes packed with a wide array of components, pages, and apps enabling developers to quickly assemble complex interfaces with minimal effort.",
      icon: icon4
    },
    {
      id: 5,
      title: "Multiple Layouts",
      desc: "Features a variety of layout options to accommodate different design  preferences, ensuring flexibility in presenting content.",
      icon: icon5
    },
    {
      id: 6,
      title: "Style Customizer",
      desc: "Includes a dynamic style customizer, allowing for easy adjustments of themes, colors, sidebar, etc. to match your brand identity perfectly.",
      icon: icon6
    },
    {
      id: 7,
      title: "Starter Kit",
      desc: "A comprehensive starter kit that gets your project off the ground quickly, equipped with essential elements and a guide to best practices.",
      icon: icon7
    },
    {
      id: 8,
      title: "Customize With Ease",
      desc: "Designed for effortless customization, enabling you to tailor every aspect of the application to fit your specific requirements.",
      icon: icon8
    },
    {
      id: 9,
      title: "Value For Money",
      desc: "Offers an unbeatable combination of advanced features, robust performance, and affordability, providing real value for your investment.",
      icon: icon9
    },
    {
      id: 10,
      title: "Well Documented",
      desc: "Accompanied by  documentation that covers every feature, component, and development practice to ensure  leverage the template's capabilities.",
      icon: icon10
    },
    {
      id: 11,
      title: "Regular Updates",
      desc: "Continuously improved with regular updates that introduce new features, optimizations, and fixes, keeping your application modern and secure.",
      icon: icon11
    },
    {
      id: 12,
      title: "Dedicated Support",
      desc: "Backend by a team of  knowledgeable support professionals ready to assist with any questions or challenges you might encounter.",
      icon: icon12
    }
  ]
  return (
    <section className="py-16 2xl:py-[120px]" id="whyDashTail">
      <div className="container">

        <div className="max-w-[670px] mx-auto">
          <h2 className="text-center text-xl xl:text-3xl xl:leading-[46px] font-semibold text-default-900 mb-3">
            Why Choose  <span className="text-primary">DashTail</span>
          </h2>
          <p className="text-base xl:leading-7 text-center text-default-700 ">
            Transform your development experience with our ultra-customizable, developer-friendly admin template: crafting exceptional user journeys made effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16 mt-[90px]">
          {
            data.map((item, index) => (
              <div
                key={`about-dashtail-${index}`}
                className="relative text-center border border-dotted border-default-300 rounded-sm py-6 pb-8 px-6 hover:border-primary hover:border-solid">
                <div className="w-[72px] h-[72px] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Image src={item.icon} alt={item.title} className="w-full h-full object-cover" priority={true} />
                </div>
                <div className="">
                  <h3 className="text-base xl:text-xl font-semibold text-default-600 mb-3 pt-6">{item.title}</h3>
                  <p className="text-sm xl:text-base text-default-700">{item.desc}</p>
                </div>
              </div>
            ))
          }
        </div>

      </div>
    </section>
  );
};

export default AboutDashtail;