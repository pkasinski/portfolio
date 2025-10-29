import "../App.css";
import "./Project.css";

interface ProjectProps {
  projectTitle: string;
  thumbnailUrl: string;
}

export default function Project({ projectTitle, thumbnailUrl }: ProjectProps) {
  return (
    <div className="project">
      <div className="thumbnail-container">
        <img src={thumbnailUrl} className="thumbnail" />
      </div>
      <div className="text-container">
        <p className="project-title text-medium">{projectTitle}</p>
        <p className="details-text">View project details</p>
      </div>
    </div>
  );
}
