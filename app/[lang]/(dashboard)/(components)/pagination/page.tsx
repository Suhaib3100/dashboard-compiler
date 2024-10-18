import Card from "@/components/ui/card-snippet";
import DefaultPagination from "./dafault-pagi";

const PaginationPage = () => {
  return (
    <div className="space-y-5">
      <Card title="Default Pagination">
        <DefaultPagination />
      </Card>
    </div>
  );
};

export default PaginationPage;
