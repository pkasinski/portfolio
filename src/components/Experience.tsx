import type { ExperienceProps } from "./Experience.types";

export default function Experience({
  className,
  timeSpan,
  organization,
  role,
  description,
}: ExperienceProps) {
  return (
    <div className={className}>
      <p className="heading-small">{timeSpan}</p>
      <p className="heading-small">{organization}</p>
      <p className="text-big">{role}</p>
      <p className="text-medium">{description}</p>
    </div>
  );
}
