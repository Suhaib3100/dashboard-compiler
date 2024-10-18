"use client"
import React, { useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, MiniMap, Controls, Node, Edge, OnConnect } from 'reactflow';
import 'reactflow/dist/base.css';
import CustomNode from './custom-node';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import avatar1 from "@/public/images/avatar/avatar-2.jpg";
import avatar2 from "@/public/images/avatar/avatar-3.jpg";
import avatar3 from "@/public/images/avatar/avatar-4.jpg";
import avatar4 from "@/public/images/avatar/avatar-5.jpg";
const nodeTypes = {
  custom: CustomNode,
};

const initNodes: Node[] = [
  {
    id: '1',
    type: 'custom',
    data: { name: 'Jane Doe', job: 'CEO', avatar: avatar1 },
    position: { x: 0, y: 0 },
  },
  {
    id: '2',
    type: 'custom',
    data: { name: 'Amrita Deb', job: 'Support Engineer', avatar: avatar2 },
    position: { x: -200, y: 100 },
  },
  {
    id: '3',
    type: 'custom',
    data: { name: 'Kristi Price', job: 'Developer', avatar: avatar3 },
    position: { x: 0, y: 130 },
  },
  {
    id: '4',
    type: 'custom',
    data: { name: 'John Lee', job: 'Content Writer', avatar: avatar4 },
    position: { x: 200, y: 100 },
  },
];

const initEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
  },
  {
    id: 'e1-3',
    source: '1',
    target: '3',
  },
  {
    id: 'e1-4',
    source: '1',
    target: '4',
  }
];

const OrganizationTree = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>(initEdges);

  const onConnect: OnConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Organization Tree</CardTitle>
      </CardHeader>
      <CardContent className="overflow-auto">
        <div className='w-full h-[calc(100vh-280px)]'>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView
          >
            <MiniMap />
            <Controls />
          </ReactFlow>
        </div>
      </CardContent>
    </Card>

  );
};

export default OrganizationTree;