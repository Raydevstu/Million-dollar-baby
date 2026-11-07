import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
