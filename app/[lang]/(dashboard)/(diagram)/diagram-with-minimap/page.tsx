"use client"
import ReactFlow, { Edge, MiniMap, Node } from 'reactflow';
import 'reactflow/dist/style.css';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
const defaultNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Input Node' },
    position: { x: 250, y: 25 },
    style: { backgroundColor: '#6ede87', color: 'white' },
  },

  {
    id: '2',
    data: { label: <div>Default Node</div> },
    position: { x: 100, y: 125 },
    style: { backgroundColor: '#ff0072', color: 'white' },
  },
  {
    id: '3',
    type: 'output',
    data: { label: 'Output Node' },
    position: { x: 250, y: 250 },
    style: { backgroundColor: '#6865A5', color: 'white' },
  },
];
const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3', animated: true },
];

const nodeColor = (node:any) => {
  switch (node.type) {
    case 'input':
      return '#6ede87';
    case 'output':
      return '#6865A5';
    default:
      return '#ff0072';
  }
};

function withMiniMap() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Flow with Mini Map</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='w-full h-[calc(100vh-280px)]'>
          <ReactFlow defaultNodes={defaultNodes} defaultEdges={initialEdges} fitView>
            <MiniMap nodeColor={nodeColor} nodeStrokeWidth={3} zoomable pannable />
          </ReactFlow>
        </div>
      </CardContent>
    </Card>
  );
}

export default withMiniMap;
