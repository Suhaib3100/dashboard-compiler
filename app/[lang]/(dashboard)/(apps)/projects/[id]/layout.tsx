import React from "react";
import { Card, CardFooter } from "@/components/ui/card";
import { getProject } from "@/config/project-config";
import Link from "next/link";

import ProjectHeader from "./project-header";
import PageLink from "./page-link";

const singleProjectLayout = async ({ children, params }: { children: React.ReactNode; params: { id: string } }) => {
  const { id } = params;
  const project = await getProject(id);

  return (
    <div>
      <Card className="mb-6">
        <ProjectHeader project={project} />
        <CardFooter className="gap-x-4 gap-y-3  lg:gap-x-6 pb-0 pt-6 flex-wrap">
          <PageLink id={id} />
        </CardFooter>
      </Card>
      {children}
    </div>
  );
};

export default singleProjectLayout;
