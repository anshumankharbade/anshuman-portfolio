// One spring for every press / hover / reveal, so the whole UI feels like the same material.
export const spring = { type: "spring", stiffness: 300, damping: 20 };

// Slightly calmer variant for large surfaces (sheets, panels).
export const springSheet = { type: "spring", stiffness: 260, damping: 24 };

// A spring with no overshoot, for things that change height (accordions), where bounce looks like a glitch.
export const springSettle = { type: "spring", stiffness: 300, damping: 30 };
