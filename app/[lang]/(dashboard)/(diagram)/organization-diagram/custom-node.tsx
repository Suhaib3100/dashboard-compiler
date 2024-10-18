"use client"
import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import Image from 'next/image';
function CustomNode({ data }: any) {
  return (
    <div className="px-4 py-2 shadow-md rounded  border border-default-300">
      <div className="flex">
        <div className="rounded-full w-8 h-8 flex justify-center items-center ">
          <Image src={data.avatar} alt="avatar name" className='w-full h-full object-cover rounded-full' priority={true} />
        </div>
        <div className="ml-2">
          <div className="text-xs font-medium text-default-900">{data.name}</div>
          <div className="text-xs text-default-700">{data.job}</div>
        </div>
      </div>

      <Handle type="target" position={Position.Top} className="w-16 bg-teal-500 opacity-0 invisible" />
      <Handle type="source" position={Position.Bottom} className="w-16 bg-teal-500 opacity-0 invisible" />
    </div>
  );
}

export default memo(CustomNode);
