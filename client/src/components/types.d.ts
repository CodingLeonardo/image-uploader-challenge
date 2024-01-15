import { ChangeEvent, DragEvent, FormEvent } from "react"

export type FileEvent = ChangeEvent<HTMLInputElement> & {
  target: EventTarget & { files: FileList };
};

export type FormImageUploaderProps = {
  onSubmit: (event: FormEvent) => void,
  onChange: (event: FileEvent) => void,
  onDrop: (event: DragEvent<HTMLDivElement>) => void
}

export type ImageUploadedProps = {
  img: string
}

export type DragAndDropProps = { 
  handleDragging: (dragging: boolean) => void,
  handleDrop: any 
}