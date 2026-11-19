export default function Chip({ children, className = "" }) {
  return (
    <span
      className={`glass-inner inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium text-ink-soft ${className}`}
    >
      {children}
    </span>
  );
}
