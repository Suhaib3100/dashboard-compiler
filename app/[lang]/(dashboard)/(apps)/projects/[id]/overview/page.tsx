"use client";
import OverdueTask from "./overdue-task";
import ProjectBudget from "./project-budget";
import ProjectDeadline from "./project-deadline";
import ProjectProgress from "./project-progress";
import ReportChart from "./report-chart";
import TopContributer from "./top-contributer";
import UpcomingDeadline from "./upcoming-deadlines";
import WorkloadChart from "./workload";
import WorksNote from "./works-note";

const Overview = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6 xl:col-span-5 2xl:col-span-3">
          <ProjectDeadline />
        </div>
        <div className="col-span-12 lg:col-span-6 xl:col-span-7 2xl:col-span-4">
          <ProjectProgress />
        </div>
        <div className="col-span-12 2xl:col-span-5">
          <WorkloadChart />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 2xl:col-span-8">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12">
              <div className="dashtail-legend">
                <ReportChart />
              </div>
            </div>
            <div className="col-span-12 md:col-span-7">
              <OverdueTask />
            </div>
            <div className="col-span-12 md:col-span-5">
              <ProjectBudget />
            </div>
          </div>
        </div>
        <div className="col-span-12 2xl:col-span-4">
          <WorksNote />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <TopContributer />
        </div>
        <div className="col-span-12 lg:col-span-5">
          <UpcomingDeadline />
        </div>
      </div>
    </div>
  );
};

export default Overview;
