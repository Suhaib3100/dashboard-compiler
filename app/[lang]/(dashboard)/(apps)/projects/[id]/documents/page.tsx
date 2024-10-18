import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import DocCard from "./doc-card";

const data = [
  {
    id: 1,
    title: "dashtail docs",
    text: "It will be as simple as occidental in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.",
    last_view: "6 Jan 2024",
    time: "6:22PM"
  },
  {
    id: 2,
    title: "Activity Data Maker",
    text: "It will be as simple as occidental in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.",
    last_view: "6 Jan 2024",
    time: "9:51PM"
  },
  {
    id: 3,
    title: "Activity Data Maker",
    text: "It will be as simple as occidental in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.",
    last_view: "6 Jan 2024",
    time: "9:51PM"
  },
  {
    id: 4,
    title: "Activity Data Maker",
    text: "It will be as simple as occidental in fact, it will be Occidental. To an English person, .",
    last_view: "6 Jan 2024",
    time: "9:51PM"
  },
  {
    id: 5,
    title: "Activity Data Maker",
    text: "It will be as simple as occidental in fact, it will be Occidental..",
    last_view: "6 Jan 2024",
    time: "9:51PM"
  },
  {
    id: 6,
    title: "Activity Data Maker",
    text: "It will be as simple as occidental in fact, it will be Occidental. ",
    last_view: "6 Jan 2024",
    time: "9:51PM"
  },
  {
    id: 7,
    title: "Activity Data Maker",
    text: "It will be as simple as occidental in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.",
    last_view: "6 Jan 2024",
    time: "9:51PM"
  },
]
export type Document = (typeof data)[number];
const Documents = () => {

  return (
    <Card>
      <CardHeader
        className="flex-col lg:flex-row lg:items-center gap-4 border-none mb-3"
      >
        <div className="flex-1">
          <div className="text-xl font-medium text-default-900">Project Docs</div>
          <div className="text-sm font-medium text-default-600">
            Total <span className="text-default-700">03</span>  files, <span className="text-default-700">19MB</span> space usage
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-[208px]">
            <Input type="text" placeholder="Search document" />
          </div>
          <Button>
            <Plus className="w-4 h-4 ltr:mr-1 rtl:ml-1" />
            Create Document
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-6">
          {data.map(item => <DocCard key={item.id} item={item} />)}
        </div>
      </CardContent>

    </Card>
  );
};

export default Documents;