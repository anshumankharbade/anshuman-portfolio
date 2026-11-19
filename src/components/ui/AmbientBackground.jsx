// Soft ambient light that drifts slowly behind everything. Only transforms are animated,
// so it stays on the compositor and costs almost nothing.
export default function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <span className="ambient-blob ambient-blob--1" />
      <span className="ambient-blob ambient-blob--2" />
      <span className="ambient-blob ambient-blob--3" />
    </div>
  );
}
