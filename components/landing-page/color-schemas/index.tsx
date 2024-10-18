
import Workload from "./workload";
import ThemeChange from "./theme-change";
import UsersStat from "./users-stat";

const ColorSchemas = () => {
  return (
    <section className="py-16 2xl:py-[120px]" id="themes">
      <div className="container">
        <div className="max-w-[670px] mx-auto">
          <h2 className="text-center text-xl xl:text-3xl xl:leading-[46px] font-semibold text-default-900 mb-3">
            Color  <span className="text-primary">Schemes</span>
          </h2>
          <p className="text-base xl:leading-7 text-center text-default-700 ">
            Define your digital environment: navigate through our comprehensive selection of customizable color schemes, perfect for matching any  brand identity.
          </p>
        </div>
        <div className="mt-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className=" border-l border-t border-default-300 bg-default-100 pt-3 pl-3 rounded-xl">
              <Workload />
            </div>
            <div className="border border-default-300 rounded-xl bg-default-100 p-6">
              <div className="max-w-[286px] mx-auto">
                <p className="text-lg xl:text-xl font-semibold text-default-600 text-center">
                  Express Your Own Style With Use One Click</p>
              </div>
              <ThemeChange />
            </div>
            <div className=" border-l border-t border-default-300 bg-default-100 pt-3 pl-3 rounded-xl">
              <UsersStat />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorSchemas;




