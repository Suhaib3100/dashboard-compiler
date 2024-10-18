import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
const data = [
  {
    task: "Zoom Meeting with client",
    date: "11 Jan 2024",
    host: "Michel Jeksone"
  },
  {
    task: "Zoom Meeting with client",
    date: "11 Jan 2024",
    host: "Michel Jeksone"
  },
  {
    task: "Zoom Meeting with client",
    date: "11 Jan 2024",
    host: "Michel Jeksone"
  },
  {
    task: "Zoom Meeting with client",
    date: "11 Jan 2024",
    host: "Michel Jeksone"
  },
  {
    task: "Zoom Meeting with client",
    date: "11 Jan 2024",
    host: "Michel Jeksone"
  },
]
const WorksNote = () => {

  return (
    <Card>
      <CardHeader className="flex-row border-none pt-6">
        <div className="flex-1">
          <div className="text-xl font-medium tex-default-900">What's on the Note!</div>
          <div className="text-sm font-medium text-default-600">Total 482 participants</div>
        </div>
        <Button
          type="button"
          color="secondary"
          variant="soft"
        >
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <Calendar />
        {/* task list */}
        <div className="space-y-5 mt-8">
          {
            data.map((item, index) => (
              <div
                className="flex justify-between items-center gap-4 pl-4 relative before:absolute before:top-0 before:left-0 before:h-full before:w-1 before:bg-default-200"
                key={`works-note-${index}`}
              >
                <div>
                  <div className="text-xs text-default-500 mb-1.5">{item.date}</div>
                  <div className="text-sm font-medium text-default-800 mb-[2px]">{item.task}</div>
                  <div className="text-xs text-default-600">Lead By
                    <span className="font-medium text-primary/90 ml-1">{item.host}</span>
                  </div>
                </div>
                <Button
                  type="button"
                  color="secondary"
                  variant="soft"
                  size="sm"
                  className="h-8"
                >
                  View
                </Button>
              </div>
            ))
          }
        </div>
      </CardContent>
    </Card>
  );
};

export default WorksNote;