"use client"
import React, { ChangeEvent, memo } from 'react';
import { Handle, useReactFlow, useStoreApi, Position, NodeProps } from 'reactflow';

const options: { value: string; label: string }[] = [
  {
    value: 'smoothstep',
    label: 'Smoothstep',
  },
  {
    value: 'step',
    label: 'Step',
  },
  {
    value: 'default',
    label: 'Bezier (default)',
  },
  {
    value: 'straight',
    label: 'Straight',
  },
];

interface SelectProps {
  value: string;
  handleId: string;
  nodeId: string;
}
function Select({ value, handleId, nodeId }: SelectProps) {
  const { setNodes } = useReactFlow();
  const store = useStoreApi();

  const onChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    const { nodeInternals } = store.getState();
    setNodes(
      Array.from(nodeInternals.values()).map((node) => {
        if (node.id === nodeId) {
          node.data = {
            ...node.data,
            selects: {
              ...node.data.selects,
              [handleId]: evt.target.value,
            },
          };
        }

        return node;
      })
    );
  };

  return (
    <div className="custom-node__select">
      <div>Edge Type</div>
      <select className="nodrag" onChange={onChange} value={value}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Handle type="source" position={Position.Right} id={handleId} />
    </div>
  );
}

interface CustomNodeProps extends NodeProps {
  data: {
    selects: { [key: string]: string };
  };
}

function CustomNode({ id, data }: CustomNodeProps) {
  return (
    <>
      <div className="custom-node__header">
        This is a <strong>custom node</strong>
      </div>
      <div className="custom-node__body">
        {Object.keys(data.selects).map((handleId) => (
          <Select key={handleId} nodeId={id} value={data.selects[handleId]} handleId={handleId} />
        ))}
      </div>
    </>
  );
}

export default memo(CustomNode);
