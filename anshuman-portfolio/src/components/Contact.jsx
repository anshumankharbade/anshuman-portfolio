import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { FaCheck, FaCopy, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { PROFILE } from "../constants/site";
import { SOCIAL_LINKS } from "../constants/social";
import useClock from "../hooks/useClock";
import { spring } from "../lib/motion";
import GlassCard from "./ui/GlassCard";
import SectionTitle from "./ui/SectionTitle";

const TOPICS = [
  { id: "project", label: "A project", hint: "Tell me what you want to build, your timeline and budget range." },
  { id: "job", label: "A job", hint: "Share the role, the company and how I can help." },
  { id: "hello", label: "Just saying hi", hint: "Say hello, ask a question or share some feedback." },
];

const press = { whileHover: { scale: 1.05 }, whileTap: { scale: 0.92 }, transition: spring };

const fieldClass =
  "peer glass-inner w-full rounded-2xl px-4 pb-2 pt-6 text-base text-ink outline-none ring-accent/60 transition-shadow focus:ring-2";
const labelClass =
  "pointer-events-none absolute left-4 top-4 origin-left text-base text-ink-faint transition-all duration-200 " +
  "peer-focus:top-2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs";

export default function Contact() {
  const time = useClock(PROFILE.timeZone);
  const [topic, setTopic] = useState(TOPICS[0]);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [count, setCount] = useState(0);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`; // clipboard blocked: fall back to the mail app
    }
  };

  // Posts to Netlify Forms. The matching hidden form lives in index.html so Netlify detects it at
  // deploy time. Submissions appear in the Netlify dashboard (Forms tab). It does not send under `npm run dev`.
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const body = new URLSearchParams(new FormData(form)).toString();
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!res.ok) throw new Error(`Form request failed: ${res.status}`);
      form.reset();
      setCount(0);
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="mx-auto w-full max-w-6xl px-4 pb-24 pt-16 sm:px-6 lg:px-8 lg:pt-24"
    >
      <SectionTitle id="contact-title" title="Contact">
        Let&rsquo;s discuss your project, or just say hello. I typically respond within 24 hours.
      </SectionTitle>

      <div className="grid gap-4 lg:grid-cols-5 lg:gap-5">
        {/* quick actions */}
        <div className="grid gap-4 lg:col-span-2">
          <GlassCard lift={4} className="p-5">
            <div className="flex items-center gap-3">
              <span className="glass-inner grid size-11 place-items-center rounded-2xl text-lg text-accent" aria-hidden="true">
                <FaEnvelope />
              </span>
              <div className="min-w-0">
                <p className="text-sm text-ink-faint">Email</p>
                <p className="text-[15px] font-bold [overflow-wrap:anywhere] sm:text-base">{PROFILE.email}</p>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <m.button
                type="button"
                onClick={copyEmail}
                {...press}
                className="glass-inner inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm font-bold text-ink"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <m.span
                    key={copied ? "ok" : "copy"}
                    aria-hidden="true"
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.4, opacity: 0 }}
                    transition={spring}
                  >
                    {copied ? <FaCheck /> : <FaCopy />}
                  </m.span>
                </AnimatePresence>
                {copied ? "Copied" : "Copy address"}
              </m.button>
              <m.a
                href={`mailto:${PROFILE.email}`}
                {...press}
                className="inline-flex h-10 items-center rounded-full bg-gradient-to-br from-[var(--btn-from)] to-[var(--btn-to)] px-4 text-sm font-bold text-white"
              >
                Write an email
              </m.a>
            </div>
            <span className="sr-only" role="status">
              {copied ? "Email address copied" : ""}
            </span>
          </GlassCard>

          <GlassCard lift={4} className="relative p-5">
            <div className="flex items-center gap-3">
              <span className="glass-inner grid size-11 place-items-center rounded-2xl text-xl text-[#1aa85a]" aria-hidden="true">
                <FaWhatsapp />
              </span>
              <div>
                <p className="text-sm text-ink-faint">Prefer chat?</p>
                <a
                  href={PROFILE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold after:absolute after:inset-0 after:rounded-3xl"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </GlassCard>

          <GlassCard lift={4} className="p-5">
            <div className="flex items-center gap-3">
              <span className="glass-inner grid size-11 place-items-center rounded-2xl text-lg text-accent" aria-hidden="true">
                <FaMapMarkerAlt />
              </span>
              <div>
                <p className="font-bold">{PROFILE.location}</p>
                <p className="text-sm tabular-nums text-ink-soft">{time} local time</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard interactive={false} className="flex items-center gap-2 p-3">
            {SOCIAL_LINKS.map((s) => (
              <m.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                {...press}
                className="glass-inner grid size-12 place-items-center rounded-2xl text-ink"
              >
                {s.icon}
              </m.a>
            ))}
          </GlassCard>
        </div>

        {/* message form */}
        <GlassCard as="div" interactive={false} className="p-6 sm:p-8 lg:col-span-3">
          <form name="contact" onSubmit={handleSubmit} className="space-y-5">
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="topic" value={topic.label} />
            {/* Honeypot: hidden from people, bots tend to fill it in */}
            <p className="hidden">
              <label>
                Don&rsquo;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <fieldset>
              <legend className="mb-3 text-sm font-semibold text-ink-soft">What is this about?</legend>
              <div className="flex flex-wrap gap-2">
                {TOPICS.map((t) => {
                  const selected = topic.id === t.id;
                  return (
                    <m.button
                      key={t.id}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setTopic(t)}
                      whileTap={{ scale: 0.92 }}
                      transition={spring}
                      className={`relative rounded-full px-4 py-2 text-sm font-semibold ${selected ? "text-white" : "glass-inner text-ink-soft hover:text-ink"}`}
                    >
                      <m.span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--btn-from)] to-[var(--btn-to)]"
                        initial={false}
                        animate={{ opacity: selected ? 1 : 0, scale: selected ? 1 : 0.8 }}
                        transition={spring}
                      />
                      <span className="relative">{t.label}</span>
                    </m.button>
                  );
                })}
              </div>
            </fieldset>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="relative">
                <input id="contact-name" name="name" type="text" required autoComplete="name" placeholder=" " className={fieldClass} />
                <label htmlFor="contact-name" className={labelClass}>
                  Name
                </label>
              </div>
              <div className="relative">
                <input id="contact-email" name="email" type="email" required autoComplete="email" placeholder=" " className={fieldClass} />
                <label htmlFor="contact-email" className={labelClass}>
                  Email address
                </label>
              </div>
            </div>

            <div>
              <div className="relative">
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  maxLength={1000}
                  placeholder=" "
                  onInput={(e) => setCount(e.target.value.length)}
                  className={`${fieldClass} resize-none`}
                />
                <label htmlFor="contact-message" className={labelClass}>
                  Message
                </label>
              </div>
              <p className="mt-2 flex justify-between gap-4 text-sm text-ink-faint">
                <span>{topic.hint}</span>
                <span className="tabular-nums">{count}/1000</span>
              </p>
            </div>

            <AnimatePresence>
              {status === "error" && (
                <m.p
                  role="alert"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={spring}
                  className="rounded-2xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-ink"
                >
                  Your message could not be sent. Try again, or email me at{" "}
                  <a href={`mailto:${PROFILE.email}`} className="font-bold underline">
                    {PROFILE.email}
                  </a>
                  .
                </m.p>
              )}
            </AnimatePresence>

            <m.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: status === "sending" ? 1 : 1.03 }}
              whileTap={{ scale: 0.94 }}
              transition={spring}
              className="inline-flex h-12 min-w-44 items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[var(--btn-from)] to-[var(--btn-to)] px-7 text-base font-bold text-white disabled:opacity-80"
            >
              {status === "sending" && (
                <span aria-hidden="true" className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              )}
              {status === "sent" && <FaCheck aria-hidden="true" />}
              {status === "sending" ? "Sending" : status === "sent" ? "Message sent" : "Send message"}
            </m.button>
            <p className="sr-only" role="status">
              {status === "sent" ? "Your message was sent. I will reply as soon as I can." : ""}
            </p>
          </form>
        </GlassCard>
      </div>
    </section>
  );
}
