import { Handle, Position } from '@xyflow/react';

const RectangleNode = () => {
  return (
    <div className="w-[120px] h-[40px] border border-black flex items-center justify-center">
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default RectangleNode;
