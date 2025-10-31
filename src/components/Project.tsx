import { useRef } from "react";
import "../App.css";
import "./Project.css";

interface ProjectProps {
  projectTitle: string;
  thumbnailUrl: string;
}

export default function Project({ projectTitle, thumbnailUrl }: ProjectProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  return (
    <>
      <div
        className="project-card"
        onClick={() => dialogRef.current?.showModal()}
      >
        <div className="thumbnail-container">
          <img src={thumbnailUrl} className="thumbnail" />
        </div>
        <div className="text-container">
          <p className="project-title text-medium">{projectTitle}</p>
          <p className="details-text">View details</p>
        </div>
      </div>
      <dialog
        ref={dialogRef}
        className="project-dialog"
        onClick={(event) => {
          if (event.target instanceof HTMLDialogElement) {
            dialogRef.current?.close();
          }
        }}
      >
        <div className="image-container"></div>
        <div className="text-container"></div>
        <button
          className="close-button"
          onClick={() => dialogRef.current?.close()}
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      </dialog>
    </>
  );
}
