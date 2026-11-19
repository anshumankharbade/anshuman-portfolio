export default function SectionTitle({ id, title, children }) {
  return (
    <div className="mb-8 max-w-2xl">
      <h2 id={id} className="title-gradient text-4xl font-extrabold tracking-tight sm:text-5xl">
        {title}
      </h2>
      {children && <p className="mt-3 text-base leading-relaxed text-ink-soft sm:text-lg">{children}</p>}
    </div>
  );
}
