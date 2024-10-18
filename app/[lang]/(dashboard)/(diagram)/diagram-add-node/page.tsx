

"use client"
import React, { MouseEvent, TouchEvent, useCallback, useRef } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  ReactFlowProvider,
  Node,
  Edge,
  Connection,
  ReactFlowInstance,
  OnConnectStartParams,
  OnConnectEnd,
} from 'reactflow';
import 'reactflow/dist/style.css';

import './index.css';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type NodeType = Node;
type EdgeType = Edge;

const initialNodes: NodeType[] = [
  {
    id: '0',
    type: 'input',
    data: { label: 'Add Node' },
    position: { x: 0, y: 0 },
  },
];

let id = 1;
const getId = (): string => `${id++}`;

const AddNodeOnEdgeDrop = () => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const connectingNodeId = useRef<string | null>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState<NodeType[]>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<EdgeType[]>([]);
  const { screenToFlowPosition } = useReactFlow<ReactFlowInstance>();

  const onConnect = useCallback(
    (params: Connection | EdgeType) => {
      connectingNodeId.current = null;
      setEdges((eds) => addEdge(params, eds));
    },
    [setEdges]
  );

  const onConnectStart = useCallback(
    (_: MouseEvent | TouchEvent, { nodeId }: OnConnectStartParams) => {
      connectingNodeId.current = nodeId;
    },
    []
  );

  const onConnectEnd:OnConnectEnd = useCallback(
    (event) => {
      if (!connectingNodeId.current) return;

      const targetIsPane = (event.target as HTMLElement).classList.contains('react-flow__pane');
      if (targetIsPane) {
        const newId = getId();
        const newNode: NodeType = {
          id: newId,
          position: screenToFlowPosition({
            x: (event as any).clientX,
            y: (event as any).clientY,
          }),
          data: { label: `Node ${newId}` },
          type: undefined,
        };

        setNodes((nds) => nds.concat(newNode));
        if (connectingNodeId.current) {
          const newEdge: EdgeType = {
            id: `${connectingNodeId.current}-${newId}`,
            source: connectingNodeId.current,
            target: newId,
            type: 'default',
          };
          setEdges((eds) => eds.concat(newEdge));
        }
        connectingNodeId.current = null; 
      }
    },
    [screenToFlowPosition, setNodes, setEdges]
  );


  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Node</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='w-full h-[calc(100vh-280px)] react-add-node'>
          <div className="wrapper" ref={reactFlowWrapper}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onConnectStart={onConnectStart}
              onConnectEnd={onConnectEnd}
              fitView
              fitViewOptions={{ padding: 2 }}
              nodeOrigin={[0.5, 0]}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default () => (
  <ReactFlowProvider>
    <AddNodeOnEdgeDrop />
  </ReactFlowProvider>
);
