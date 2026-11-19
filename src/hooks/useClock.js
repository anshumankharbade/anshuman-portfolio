import { useEffect, useMemo, useState } from "react";

// Live local time for a time zone, e.g. "10:42 pm". Updates every 15 s (minute precision is enough).
export default function useClock(timeZone) {
  const format = useMemo(
    () => new Intl.DateTimeFormat("en-IN", { hour: "numeric", minute: "2-digit", hour12: true, timeZone }),
    [timeZone],
  );
  const [now, setNow] = useState(() => format.format(new Date()));

  useEffect(() => {
    const tick = () => setNow(format.format(new Date()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, [format]);

  return now;
}
