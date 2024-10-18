"use client"
import React, { useEffect, useState } from 'react';
import ReactFlow, { useNodesState, useEdgesState, Node, Edge } from 'reactflow';
import 'reactflow/dist/style.css';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import './updatenode.css';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const initialNodes: Node[] = [
  { id: '1', data: { label: 'Web application' }, position: { x: 250, y: 20 } },
  { id: '2', data: { label: 'Frontend' }, position: { x: 50, y: 140 } },
  { id: '3', data: { label: 'Backend' }, position: { x: 450, y: 140 } },
  { id: '4', data: { label: 'HTML' }, position: { x: 50, y: 220 } },
  { id: '5', data: { label: 'CSS' }, position: { x: 50, y: 300 } },
  { id: '6', data: { label: 'Javascript' }, position: { x: 50, y: 370 } },
  { id: '7', data: { label: 'PHP' }, position: { x: 450, y: 220 } },
  { id: '8', data: { label: 'Node JS' }, position: { x: 450, y: 300 } },
  { id: '9', data: { label: 'Database' }, position: { x: 450, y: 370 } },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '1', target: '3' },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e4-5', source: '4', target: '5' },
  { id: 'e5-6', source: '5', target: '6' },
  { id: 'e3-7', source: '3', target: '7' },
  { id: 'e7-8', source: '7', target: '8' },
  { id: 'e8-9', source: '8', target: '9' },
];
const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

const UpdateNode = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>(initialEdges);

  const [nodeName, setNodeName] = useState<string>('Web application');
  const [nodeBg, setNodeBg] = useState<string>('#fff');
  const [nodeHidden, setNodeHidden] = useState<boolean>(false);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === '1') {
          node.data = {
            ...node.data,
            label: nodeName,
          };
        }

        return node;
      })
    );
  }, [nodeName, setNodes]);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === '1') {
          node.style = { ...node.style, backgroundColor: nodeBg };
        }

        return node;
      })
    );
  }, [nodeBg, setNodes]);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === '1') {
          node.hidden = nodeHidden;
        }

        return node;
      })
    );
    setEdges((eds) =>
      eds.map((edge) => {
        if (edge.id === 'e1-2') {
          edge.hidden = nodeHidden;
        }

        return edge;
      })
    );
  }, [nodeHidden, setNodes, setEdges]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Update Data</CardTitle>
      </CardHeader>
      <CardContent className="overflow-auto">
        <div className='w-full h-[calc(100vh-280px)]'>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            defaultViewport={defaultViewport}
            minZoom={0.2}
            maxZoom={4}
            attributionPosition="bottom-left"
          >
            <div className="static lg:absolute top-2.5 right-2.5 lg:w-[300px] space-y-3">
              <div>
                <Label htmlFor="updateNode" className="mb-2">Update Name</Label>
                <Input value={nodeName} className="rounded-md" onChange={(evt) => setNodeName(evt.target.value)} />
              </div>
              <div>
                <Label className="updatenode__bglabel" htmlFor="NodeBackground">Background</Label>
                <Input value={nodeBg} id="NodeBackground" onChange={(evt) => setNodeBg(evt.target.value)} />
              </div>
              <div className="flex items-center gap-1.5">
                <Label htmlFor="hiddenNode" className="cursor-pointer">Hidden Node</Label>
                <input
                  type="checkbox"
                  checked={nodeHidden}
                  id="hiddenNode"
                  className="w-4 h-4 border border-default-300"
                  onChange={(evt) => setNodeHidden(evt.target.checked)}
                />
              </div>

            </div>
          </ReactFlow>
        </div>
      </CardContent>
    </Card>
  );
};

export default UpdateNode;
