
import DashboardDropdown from "@/components/dashboard-dropdown";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { data } from "./data";
import ListItem from "./list-item";
import DetailsCard from "./details-card";

const TopContributer = () => {
  return (
    <Card>
      <CardHeader className="flex-row justify-between items-center gap-4 mb-0 border-none p-6">
        <CardTitle>Top Contributer</CardTitle>
        <DashboardDropdown />
      </CardHeader>
      <CardContent className="pt-0 ">

        <div className="pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-6">
            {
              data.slice(0, 3).map((item:any, index:number) => <DetailsCard
                key={item.id}
                item={item}
                index={index + 1}
              />)
            }

          </div>
          <div className="mt-8 ">
            {data.slice(3).map((item:any, index:number) =>
              <ListItem
                key={`customer-${item.id}`}
                item={item}
                index={index + 3}
              />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopContributer;