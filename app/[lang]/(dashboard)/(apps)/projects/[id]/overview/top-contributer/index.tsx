import { data } from "./data";
import ListItem from "./list-item";
import DetailsCard from "./details-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TopContributer = () => {
  return (

    <Card>
      <CardHeader className="border-none pt-6 pl-6">
        <CardTitle>Top Contributor</CardTitle>
      </CardHeader>
      <CardContent >
        <div className="grid grid-cols-3 gap-x-8 mt-20">
          {data.map((item, index) =>
            index > 2 ?
              <ListItem key={item.id} item={item} index={index} />
              :
              <DetailsCard key={item.id} item={item} index={index} />
          )}
        </div>
      </CardContent>
    </Card>

  );
};

export default TopContributer;