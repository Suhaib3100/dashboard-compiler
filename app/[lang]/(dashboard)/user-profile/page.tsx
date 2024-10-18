
import ProfileProgress from './overview/profile-progress';
import UserInfo from './overview/user-info';
import Portfolio from './overview/portfolio';
import Skills from './overview/skills';
import Connections from "./overview/connections"
import Teams from "./overview/teams"
import About from "./overview/about"
import RecentActivity from "./overview/recent-activity"
import Projects from './overview/projects';
const Overview = () => {
  return (
    <div className="pt-6 grid grid-cols-12 gap-6">
      <div className="col-span-12 lg:col-span-4 space-y-6">
        <ProfileProgress />
        <UserInfo />
        <Portfolio />
        <Skills />
        <Connections />
        <Teams />
      </div>
      <div className="col-span-12 lg:col-span-8 space-y-6">
        <About />
        <RecentActivity />
        <Projects />
      </div>
    </div>
  );
};

export default Overview;