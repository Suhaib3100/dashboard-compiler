import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, X } from "lucide-react";

const Skills = () => {

  return (
    <Card>
      <CardHeader className="border-none mb-3">
        <CardTitle className="flex-1 text-lg font-medium text-default-800"> Skills </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 items-center">
          {
            ["HTML", "HTML 5", "CSS", "JavaScript", "React", "Nextjs", "Vue JS", "Nuxt JS", "PHP", "Tailwind"].map((item, index) => (
              <Badge
                key={`skill-${index}`}
                className="text-xs font-medium text-default-500 bg-default-100 dark:bg-default-50 flex items-center gap-2.5 cursor-pointer group "
              >
                {item}
                <X className="w-3 h-3 hidden  group-hover:block" />
              </Badge>
            ))
          }
        </div>
        <Button
          className="mt-5 w-full text-primary font-semibold text-xs hover:bg-primary hover:text-primary-foreground"
          color="secondary"
        >
          <Plus className="w-[18px] h-[18px] me-1" />
          Add Skills
        </Button>
      </CardContent>
    </Card>
  );
};

export default Skills;