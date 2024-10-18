"use client"
import ReactFlow, { Background, Node, Panel } from 'reactflow';
import 'reactflow/dist/style.css';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import './style.css';

const nodes:Node[] = [
  {
    id: '1',
    data: { label: 'this is an example flow for the <Panel /> component' },
    position: { x: 0, y: 0 },
  },
];

function Flow() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Panel Position</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='w-full h-[calc(100vh-280px)]'>
          <ReactFlow nodes={nodes} fitView>
            <Panel position="top-left">top-left</Panel>
            <Panel position="top-center">top-center</Panel>
            <Panel position="top-right">top-right</Panel>
            <Panel position="bottom-left">bottom-left</Panel>
            <Panel position="bottom-center">bottom-center</Panel>
            <Panel position="bottom-right">bottom-right</Panel>
            <Background/>
          </ReactFlow>
        </div>
      </CardContent>
    </Card>
  );
}

export default Flow;