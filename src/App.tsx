import { useState, useRef, useCallback } from 'react';
import  { ReactFlow,
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  Connection,
  Edge,
  Node,
  ReactFlowInstance
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import Sidebar from './components/sidebar/Sidebar';
import { CircleNode, SquareNode, RectangleNode, TriangleNode } from './types/nodeTypes/index';

// Define custom node types
const customNodeTypes = {
  circle: CircleNode,
  square: SquareNode,
  rectangle: RectangleNode,
  triangle: TriangleNode,
};

const initialNodes: Node[] = [];
const initialEdges: Edge[] = [];

function App() {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance | null>(null);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onInit = useCallback(
    (instance: ReactFlowInstance) => setReactFlowInstance(instance),
    []
  );

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      if (!reactFlowWrapper.current || !reactFlowInstance) return;

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      // Check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      // Create label based on the node type
      let label = '';
      switch(type) {
        case 'circle': label = 'Circle Node'; break;
        case 'square': label = 'Square Node'; break;
        case 'rectangle': label = 'Rectangle Node'; break;
        case 'triangle': label = 'Triangle Node'; break;
        default: label = 'Node';
      }

      const newNode: Node = {
        id: `${type}-${Date.now()}`,
        type,
        position,
        data: { label },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, setNodes]
  );

  return (
    <div className="h-screen w-screen flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <ReactFlowProvider>
          <div ref={reactFlowWrapper} className="h-full w-full">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onInit={onInit}
              onDrop={onDrop}
              onDragOver={onDragOver}
              nodeTypes={customNodeTypes}
              fitView
            >
              <Background />
              <Controls />
            </ReactFlow>
          </div>
        </ReactFlowProvider>
      </div>
    </div>
  );
}

export default App;
