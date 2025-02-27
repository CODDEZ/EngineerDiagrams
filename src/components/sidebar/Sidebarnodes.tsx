const nodeTypes = [
  { id: "circle", label: "Circle Node"},
  { id: "square", label: "Square Node"},
  { id: "rectangle", label: "Rectangle Node" },
  { id: "triangle", label: "Triangle Node" }
];

export default function Sidebarnodes() {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="p-4 text-white">
      <h2 className="text-xl font-bold mb-4">Nodes</h2>
      <div className="flex flex-col gap-2">
        {nodeTypes.map((node) => (
          <div
            key={node.id}
            className="p-2 bg-gray-700 rounded cursor-move hover:bg-gray-600 transition-colors"
            onDragStart={(e) => onDragStart(e, node.id)}
            draggable
          >
            {node.label}
          </div>
        ))}
      </div>
    </div>
  );
}
