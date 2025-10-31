import { useRef } from "react";
import "../App.css";
import "./Project.css";

interface ProjectProps {
  title: string;
  techStack: string;
  description: string;
  thumbnailUrl: string;
}

export default function Project({
  title,
  techStack,
  description,
  thumbnailUrl,
}: ProjectProps) {
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
          <p className="project-title text-medium">{title}</p>
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
        <div className="image-container">
          <img src={thumbnailUrl} className="project-image" />
          <div className="button-container">
            <button className="next-button">
              <span className="material-symbols-outlined">arrow_left_alt</span>
            </button>
            <button className="previous-button">
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </button>
          </div>
        </div>
        <div className="text-container">
          <p className="title heading">{title}</p>
          <p className="tech-stack">Tech Stack: {techStack}</p>
          <p className="description text-small">{description}</p>
        </div>
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
