import { Handle, Position } from '@xyflow/react';

const CircleNode = () => {
  return (
    <div className="w-[40px] h-[40px] border border-black rounded-full flex items-center justify-center">
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default CircleNode;
