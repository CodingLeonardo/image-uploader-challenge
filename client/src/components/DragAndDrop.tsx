import { FC, ReactNode, DragEvent, HTMLAttributes } from "react";

interface DragAndDropProps extends HTMLAttributes<HTMLDivElement> {
  handleDragging: (dragging: boolean) => void;
  handleDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  children: ReactNode;
}

const DragAndDrop: FC<DragAndDropProps> = ({
  handleDragging,
  handleDrop,
  children,
  ...attrs
}) => {
  const handleDragStart = () => {
    handleDragging(true);
  };

  const handleDragEnd = () => handleDragging(false);

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
  };

  return (
    <div
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      {...attrs}
    >
      {children}
    </div>
  );
};

export default DragAndDrop;
