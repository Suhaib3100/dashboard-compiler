import DashboardPageView from "./page-view";
import { getDictionary } from "@/app/dictionaries";

interface DashboardProps {
  params: {
    lang: any;
  };
}
const Dashboard = async ({ params: { lang } }: DashboardProps) => {
  const trans = await getDictionary(lang);
  return <DashboardPageView trans={trans} />;
};

export default Dashboard;
