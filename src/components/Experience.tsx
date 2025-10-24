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
      <p className="heading text-small">{timeSpan}</p>
      <p className="heading text-small">{organization}</p>
      <p className="heading text-big">{role}</p>
      <p className="text-medium-responsive">{children}</p>
    </div>
  );
}
