"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, Node, Edge, OnConnect } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes: Node[] = [
  {
    id: 'horizontal-1',
    type: 'input',
    data: { label: 'Input' },
    position: { x: 0, y: 80 },
  },
  {
    id: 'horizontal-2',
    data: { label: 'A Node' },
    position: { x: 250, y: 0 },
  },
  {
    id: 'horizontal-3',
    data: { label: 'Node 3' },
    position: { x: 250, y: 160 },
  },
  {
    id: 'horizontal-4',
    data: { label: 'Node 4' },
    position: { x: 500, y: 0 },
  },
  {
    id: 'horizontal-5',
    data: { label: 'Node 5' },
    position: { x: 500, y: 100 },
  },
  {
    id: 'horizontal-6',
    data: { label: 'Node 6' },
    position: { x: 500, y: 230 },
  },
  {
    id: 'horizontal-7',
    data: { label: 'Node 7' },
    position: { x: 750, y: 50 },
  },
  {
    id: 'horizontal-8',
    data: { label: 'Node 8' },
    position: { x: 750, y: 300 },
  },
];

const initialEdges: Edge[] = [
  {
    id: 'horizontal-e1-2',
    source: 'horizontal-1',
    type: 'smoothstep',
    target: 'horizontal-2',
    animated: true,
  },
  {
    id: 'horizontal-e1-3',
    source: 'horizontal-1',
    type: 'smoothstep',
    target: 'horizontal-3',
    animated: true,
  },
  {
    id: 'horizontal-e1-4',
    source: 'horizontal-2',
    type: 'smoothstep',
    target: 'horizontal-4',
    label: 'edge label',
  },
  {
    id: 'horizontal-e3-5',
    source: 'horizontal-3',
    type: 'smoothstep',
    target: 'horizontal-5',
    animated: true,
  },
  {
    id: 'horizontal-e3-6',
    source: 'horizontal-3',
    type: 'smoothstep',
    target: 'horizontal-6',
    animated: true,
  },
  {
    id: 'horizontal-e5-7',
    source: 'horizontal-5',
    type: 'smoothstep',
    target: 'horizontal-7',
    animated: true,
  },
  {
    id: 'horizontal-e6-8',
    source: 'horizontal-6',
    type: 'smoothstep',
    target: 'horizontal-8',
    animated: true,
  },
];

const HorizontalFlow = () => {
  const [nodes, _, onNodesChange] = useNodesState<Node[]>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>(initialEdges);
  const onConnect: OnConnect = useCallback((params) => setEdges((els) => addEdge(params, els)), []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Horizontal Flow</CardTitle>
      </CardHeader>
      <CardContent className="overflow-auto">
        <div className='w-full h-[calc(100vh-280px)]'>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            attributionPosition="bottom-left"
          ></ReactFlow>
        </div>
      </CardContent>
    </Card>
  );
};

export default HorizontalFlow;
