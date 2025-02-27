import { Handle, Position } from '@xyflow/react';

const TriangleNode = () => {
  return (
    <div className="relative w-[40px] h-[40px] flex items-center justify-center">
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 40 34.64" 
        className="absolute"
      >
        <polygon 
          points="20,0 0,34.64 40,34.64" 
          fill="transparent" 
          stroke="black" 
          strokeWidth="1"
        />
      </svg>
      <Handle type="target" position={Position.Top} className="z-10" />
      <Handle type="source" position={Position.Bottom} className="z-10" />
    </div>
  );
};

export default TriangleNode;
