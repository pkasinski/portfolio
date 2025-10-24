interface ExperienceProps {
  className?: string;
  timeSpan?: string;
  organization?: string;
  role?: string;
  children?: React.ReactNode;
}

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
      <p className="description-text text-medium-responsive">{children}</p>
    </div>
  );
}
