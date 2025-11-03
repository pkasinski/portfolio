import { useEffect, useRef, useState } from "react";
import "../App.css";
import "./Project.css";

interface ProjectProps {
  title: string;
  techStack: string;
  description: string;
  thumbnailUrl: string;
  imageUrls: string[];
}

export default function Project({
  title,
  techStack,
  description,
  thumbnailUrl,
  imageUrls,
}: ProjectProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState<number>(0);

  const openDialog = () => {
    dialogRef.current?.showModal();
    setIsOpen(true);
  };

  const closeDialog = () => {
    dialogRef.current?.close();
    setIsOpen(false);
  };

  const changeImage = (direction: "next" | "previous") => {
    setImageIndex((prevIndex) => {
      const numImages = imageUrls.length;
      if (direction === "next") {
        return (prevIndex + 1) % numImages;
      } else {
        return (prevIndex - 1 + numImages) % numImages;
      }
    });
  };

  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "ArrowRight") {
          changeImage("next");
        } else if (e.key === "ArrowLeft") {
          changeImage("previous");
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen]);

  // Disable scrolling underneath the dialog.
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div className="project-card" onClick={openDialog}>
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
            closeDialog();
          }
        }}
      >
        <div className="media-container">
          {imageUrls[imageIndex].endsWith(".webm") ? (
            <video
              key={imageUrls[imageIndex]}
              className="project-media"
              controls
              autoPlay
              muted
            >
              <source src={imageUrls[imageIndex]} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={imageUrls[imageIndex]} className="project-media" />
          )}
          {imageUrls.length > 1 && (
            <div className="button-container">
              <button
                className="previous-button"
                onClick={() => changeImage("previous")}
              >
                <span className="material-symbols-outlined">
                  arrow_left_alt
                </span>
              </button>
              <button
                className="next-button"
                onClick={() => changeImage("next")}
              >
                <span className="material-symbols-outlined">
                  arrow_right_alt
                </span>
              </button>
            </div>
          )}
        </div>
        <div className="text-container">
          <p className="title heading">{title}</p>
          <p className="tech-stack">Tech Stack: {techStack}</p>
          <p className="description text-small">{description}</p>
        </div>
        <button className="close-button" onClick={closeDialog}>
          <span className="material-symbols-outlined">close</span>
        </button>
      </dialog>
    </>
  );
}
