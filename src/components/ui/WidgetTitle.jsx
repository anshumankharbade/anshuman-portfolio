// Header used by every dashboard widget: icon chip + h3.
export default function WidgetTitle({ icon, children }) {
  return (
    <div className="flex items-center gap-3">
      <span className="glass-inner grid size-10 shrink-0 place-items-center rounded-2xl text-lg text-accent" aria-hidden="true">
        {icon}
      </span>
      <h3 className="text-xl font-bold tracking-tight">{children}</h3>
    </div>
  );
}
