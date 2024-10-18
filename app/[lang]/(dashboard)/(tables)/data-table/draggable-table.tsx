"use client"
import { Grip } from "lucide-react";
import React, { useState } from 'react';
import { DndContext, useSensor, useSensors, PointerSensor, closestCenter, DragEndEvent } from '@dnd-kit/core';
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy, } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from '@/components/ui/button';

interface DataItem {
  id: number;
  name: string;
  email: string;
  age: number;
  point: number;
}

const columns = ["Id", "Name", "Email", "Age", "Point"];
const initialData: DataItem[] = [
  { id: 1, name: "Mike", email: "mike1@example.com", age: 41, point: 81 },
  { id: 2, name: "John", email: "john2@example.com", age: 24, point: 37 },
  { id: 3, name: "Peter", email: "peter3@example.com", age: 42, point: 25 },
  { id: 4, name: "Peter", email: "peter4@example.com", age: 42, point: 77 },
  { id: 5, name: "Paul", email: "paul5@example.com", age: 30, point: 72 },
  { id: 6, name: "Mark", email: "mark6@example.com", age: 19, point: 9 },
  { id: 7, name: "Peter", email: "peter7@example.com", age: 56, point: 20 },
  { id: 8, name: "Mike", email: "mike8@example.com", age: 57, point: 80 },
  { id: 9, name: "Mary", email: "mary9@example.com", age: 41, point: 69 },
  { id: 10, name: "Alice", email: "alice10@example.com", age: 42, point: 79 }
]

interface DraggableRowProps {
  id: number;
  data: DataItem;
}


function DraggableTable() {
  const [data, setData] = useState<DataItem[]>(initialData);
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      setData((currentData) => {
        const oldIndex = currentData.findIndex(item => item.id === active.id);
        const newIndex = currentData.findIndex(item => item.id === over?.id);
        return arrayMove(currentData, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={data} strategy={verticalListSortingStrategy}>
        <div className='w-full h-full overflow-hidden'>
          <Table className="overflow-hidden">
            <TableHeader className="bg-default-100">
              <TableRow>
                {
                  columns.map(column => (
                    <TableHead key={column} >{column}</TableHead>
                  ))
                }
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item) => (
                <DraggableRow key={item.id} id={item.id} data={item} />
              ))}
            </TableBody>
          </Table>
        </div>
      </SortableContext>
    </DndContext>
  );
}

function DraggableRow({ id, data }: DraggableRowProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <TableRow
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="cursor-move"
    >
      <TableCell>
        <Button
          type="button"
          size="icon"
          className="h-5 w-5 bg-default-100 rounded hover:bg-default-200 cursor-move ltr:mr-2 rtl:ml-2"
        >
          <Grip className="w-3 h-3 text-default-400" />
        </Button>
        {data.id}</TableCell>
      <TableCell>{data.name}</TableCell>
      <TableCell>{data.email}</TableCell>
      <TableCell>{data.age}</TableCell>
      <TableCell>{data.point}</TableCell>
    </TableRow>
  );
}

export default DraggableTable;
