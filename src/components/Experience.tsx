import type { ExperienceProps } from "./Experience.types";

export default function Experience({
  className,
  timeSpan,
  organization,
  role,
  children,
}: ExperienceProps) {
  return (
    <div className={className}>
      <p className="heading heading-small">{timeSpan}</p>
      <p className="heading heading-small">{organization}</p>
      <p className="heading heading-medium">{role}</p>
      <p className="text-medium">{children}</p>
    </div>
  );
}
