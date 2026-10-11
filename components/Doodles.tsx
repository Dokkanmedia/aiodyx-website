/* Hand-drawn accents: marker highlight behind words, sketched arrows and handwritten notes. */

export function Mark({ children, color = "yellow" }: { children: React.ReactNode; color?: "yellow" | "mint" | "pink" }) {
  return <span className={`hl hl-${color}`}>{children}</span>;
}

export function Underline({ children }: { children: React.ReactNode }) {
  return (
    <span className="ul">
      {children}
      <svg viewBox="0 0 200 14" preserveAspectRatio="none" aria-hidden="true">
        <path d="M3 9c40-6 90-8 194-3" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg className={`doodle-arrow ${className}`} viewBox="0 0 90 70" aria-hidden="true">
      <path d="M84 6C60 4 30 14 18 52" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M8 40l10 14 12-12" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Note({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={`note-hand ${className}`}>{children}</span>;
}
