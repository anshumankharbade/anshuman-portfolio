import { useState, useEffect, useRef, useCallback } from "react";

/**
 * Custom hook to determine which section is currently active based on scroll position.
 * @param {Array} sections - Array of section objects with `id` property.
 * @param {number} offset - Offset from top (in pixels) to consider a section active.
 * @param {Object} isUserScrollingRef - Ref object that indicates if a programmatic scroll is in progress.
 * @returns {[string, function]} - Active section ID and a setter to manually update it.
 */
export const useActiveSection = (sections, offset = 100, isUserScrollingRef = { current: false }) => {
  const [activeSection, setActiveSection] = useState("hero");
  const rafRef = useRef(null);
  const lastActiveRef = useRef("hero");
  const lastUpdateTimeRef = useRef(Date.now());

  const updateActiveSection = useCallback(() => {
    // Skip updates during programmatic scroll
    if (isUserScrollingRef.current) return;

    // Throttle: allow at most one update per 150ms
    const now = Date.now();
    if (now - lastUpdateTimeRef.current < 150) return;

    const scrollPosition = window.scrollY + offset;
    let newActive = "hero";

    // Reverse loop: pick the last section whose top is above scrollPosition
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i].id);
      if (section && section.offsetTop <= scrollPosition) {
        newActive = sections[i].id;
        break;
      }
    }

    if (newActive !== lastActiveRef.current) {
      lastActiveRef.current = newActive;
      lastUpdateTimeRef.current = now;
      setActiveSection(newActive);
    }
  }, [sections, offset, isUserScrollingRef]);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateActiveSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once to set initial active section
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateActiveSection]);

  // Also update on resize (in case section positions change)
  useEffect(() => {
    const handleResize = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateActiveSection);
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [updateActiveSection]);

  return [activeSection, setActiveSection];
};