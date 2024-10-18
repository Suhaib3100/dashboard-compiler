"use client"
import React, { useCallback } from 'react';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  NodeTypes,
  ReactFlowInstance,
  OnConnect,
  Node,
  Edge,
} from 'reactflow';

import { nodes as initialNodes, edges as initialEdges } from './initial-element';
import CustomNode from './custom-node';
import 'reactflow/dist/style.css';
import './overview.css';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const nodeTypes: NodeTypes = {
  custom: CustomNode,
};

const minimapStyle = {
  height: 120,
};

const onInit = (reactFlowInstance: ReactFlowInstance) => console.log('flow loaded:', reactFlowInstance);

const OverviewFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>(initialEdges);
  const onConnect: OnConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  const edgesWithUpdatedTypes = edges.map((edge) => {
    if (edge.sourceHandle) {
      const edgeType = (nodes as any).find((node: any) => node.type === 'custom').data.selects[edge.sourceHandle];
      edge.type = edgeType;
    }
    return edge;
  });




  return (
    <Card>
      <CardHeader>
        <CardTitle>Overview</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <div className='w-full h-[calc(100vh-280px)]'>
          <ReactFlow
            nodes={nodes}
            edges={edgesWithUpdatedTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={onInit}
            fitView
            attributionPosition="top-right"
            nodeTypes={nodeTypes}
          >
            <MiniMap style={minimapStyle} zoomable pannable />
            <Controls />
            <Background color="#aaa" gap={16} />
          </ReactFlow>
        </div>
      </CardContent>
    </Card>


  );
};

export default OverviewFlow;
