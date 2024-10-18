import { getDictionary } from "@/app/dictionaries";
import ProjectPageView from "./page-view";

interface DashboardProps {
  params: {
    lang: any;
  };
}

const ProjectPage = async ({ params: { lang } }: DashboardProps) => {
  const trans = await getDictionary(lang);
  return <ProjectPageView trans={trans} />;
};

export default ProjectPage;
