"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useCallback } from "react";
import ReactFlow, {
  addEdge,
  ConnectionLineType,
  Panel,
  useNodesState,
  useEdgesState,
  OnConnect,
  Node,
  Edge,
} from "reactflow";
import dagre from "dagre";

import { initialNodes, initialEdges } from "./nodes-edge";

import "reactflow/dist/style.css";
import { Button } from "@/components/ui/button";

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 172;
const nodeHeight = 36;

const getLayoutedElements = (nodes: Node[], edges: Edge[], direction = "TB") => {
  const isHorizontal = direction === "LR";
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);

    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };

    return node;
  });

  return { nodes, edges };
};

const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  initialNodes,
  initialEdges
);

const DagreeTree = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

  const onConnect: OnConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          { ...params, type: ConnectionLineType.SmoothStep, animated: true },
          eds
        )
      ),
    []
  );
  const onLayout: (direction: string) => void = useCallback(
    (direction) => {
      const { nodes: layoutedNodes, edges: layoutedEdges } =
        getLayoutedElements(nodes, edges, direction);

      setNodes([...layoutedNodes]);
      setEdges([...layoutedEdges]);
    },
    [nodes, edges]
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Horizontal Flow</CardTitle>
      </CardHeader>
      <CardContent className="overflow-auto">
        <div className="w-full h-[calc(100vh-280px)]">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            connectionLineType={ConnectionLineType.SmoothStep}
            fitView
          >
            <Panel position="top-right">
              <div className="flex flex-wrap item-center gap-2">
                <Button
                  onClick={() => onLayout("TB")}
                  variant="outline"
                  className=" rounded"
                >
                  Vertical Layout
                </Button>
                <Button
                  onClick={() => onLayout("LR")}
                  variant="outline"
                  className="rounded"
                >
                  Horizontal Layout
                </Button>
              </div>
            </Panel>
          </ReactFlow>
        </div>
      </CardContent>
    </Card>
  );
};

export default DagreeTree;
