import { getDictionary } from "@/app/dictionaries";
import EcommercePageView from "./page-view";

interface DashboardProps {
  params: {
    lang: any;
  };
}
const EcommercePage = async ({ params: { lang } }: DashboardProps) => {
  const trans = await getDictionary(lang);
  return <EcommercePageView trans={trans} />;
};

export default EcommercePage;
