import React, { DragEventHandler } from "react"
import Image from "../assets/image.svg"

interface DragAndDropProps { handleDragging: (dragging: boolean) => void,
  handleDrop: any }

const DragAndDrop = ({ handleDragging, handleDrop }: DragAndDropProps) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text', "hola")
    handleDragging(true)
  }

  // const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
  //   event.preventDefault()
  //   console.log(event);
  //   handleDropping()
  //   const file = event.dataTransfer.files[0]
  //   if (file) {
      
  //   }
  // }

  const handleDragEnd = () => handleDragging(false)

  return (
    <div className="ImageUploader-dragdrop" draggable="true" onDragStart={handleDragStart} onDragEnd={handleDragEnd} onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
      <img src={Image} alt="" />
      <h3>Drag & Drop your image here</h3>
    </div>
  )
}

export default DragAndDrop