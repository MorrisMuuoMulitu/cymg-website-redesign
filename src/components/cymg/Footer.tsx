"use client";

import { useState, type FormEvent } from "react";
import {
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Facebook,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/cymg-data";
import { useRouter } from '@/components/cymg/Router'
import type { PageName } from '@/components/cymg/Router'

/* ------------------------------------------------------------------ */
/*  CYMG brand green — the real logo color                            */
/* ------------------------------------------------------------------ */
const CYMG_GREEN = '#0B5F11'

/* ------------------------------------------------------------------ */
/*  Social link data — verified URLs from cymg-data.ts                */
/* ------------------------------------------------------------------ */
const socialItems = [
  {
    href: SOCIAL_LINKS.instagram,
    label: "Instagram",
    Icon: Instagram,
  },
  {
    href: SOCIAL_LINKS.twitter,
    label: "X / Twitter",
    Icon: Twitter,
  },
  {
    href: SOCIAL_LINKS.youtube,
    label: "YouTube",
    Icon: Youtube,
  },
  {
    href: SOCIAL_LINKS.linkedin,
    label: "LinkedIn",
    Icon: Linkedin,
  },
  {
    href: SOCIAL_LINKS.facebook,
    label: "Facebook",
    Icon: Facebook,
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Footer link column data — uses SPA navigation                     */
/* ------------------------------------------------------------------ */
const thematicLinks: { label: string; page: PageName }[] = [
  { label: "Chemicals & Waste", page: "working-groups" },
  { label: "Nature & Ecosystems", page: "working-groups" },
  { label: "Ocean Science", page: "working-groups" },
  { label: "Sustainable Finance", page: "working-groups" },
  { label: "Science-Policy", page: "working-groups" },
];

const uneaLinks: { label: string; page: PageName }[] = [
  { label: "UNEA Hub", page: "unea" },
  { label: "Blog", page: "blog" },
  { label: "Documents", page: "documents" },
  { label: "Contact", page: "contact" },
];

const connectLinks: { label: string; page: PageName }[] = [
  { label: "Join CYMG", page: "join" },
  { label: "Contact", page: "contact" },
  { label: "Team", page: "team" },
  { label: "Regions", page: "regions" },
];

/* ------------------------------------------------------------------ */
/*  Column heading                                                    */
/* ------------------------------------------------------------------ */
function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="mb-4 text-xs font-semibold uppercase tracking-widest"
      style={{ fontFamily: "var(--font-geist-mono), monospace" }}
    >
      {children}
    </h3>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer link — uses SPA router                                     */
/* ------------------------------------------------------------------ */
function FooterLink({
  page,
  children,
  onClick,
}: {
  page: PageName;
  children: React.ReactNode;
  onClick: (page: PageName) => void;
}) {
  return (
    <button
      onClick={() => onClick(page)}
      className="block text-sm leading-relaxed text-[#E8E4D9]/70 transition-colors duration-200 hover:text-white text-left"
      style={{ '--hover-color': CYMG_GREEN } as React.CSSProperties}
      onMouseEnter={(e) => (e.currentTarget.style.color = CYMG_GREEN)}
      onMouseLeave={(e) => (e.currentTarget.style.color = '')}
    >
      {children}
    </button>
  );
}

/* ================================================================== */
/*  Footer Component                                                  */
/* ================================================================== */
export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const { navigate } = useRouter();

  async function handleSubscribe(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setError("");
    setSubmitting(true);
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to subscribe");
      }

      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <footer
      className="bg-ink text-[#E8E4D9] dark:bg-[#0a0f1a]"
      role="contentinfo"
    >
      {/* ── Main grid ──────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-8">
          {/* ── Column 1: About ────────────────────────────────── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              {/* SVG logo with white filter for dark bg */}
              <img
                src="/cymg-logo.svg"
                alt="CYMG"
                className="h-10 w-auto brightness-0 invert"
              />
            </div>

            <p className="mt-3 text-sm leading-relaxed text-[#E8E4D9]/70">
              The official UN-recognised children-and-youth constituency
              engaging with UNEP, UNEA, and UNEP-administered Multilateral
              Environmental Agreements.
            </p>

            {/* Social icons */}
            <nav
              className="mt-6 flex items-center gap-3"
              aria-label="Social media links"
            >
              {socialItems.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow CYMG on ${label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E8E4D9]/15 text-[#E8E4D9]/60 transition-all duration-200 hover:border-[#0B5F11] hover:text-[#0B5F11]"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </nav>
          </div>

          {/* ── Column 2: Thematic Areas ───────────────────────── */}
          <div>
            <ColumnHeading>Thematic Areas</ColumnHeading>
            <ul className="space-y-2.5" role="list">
              {thematicLinks.map(({ label, page }) => (
                <li key={label}>
                  <FooterLink page={page} onClick={navigate}>{label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: UNEA & Documents ─────────────────────── */}
          <div>
            <ColumnHeading>UNEA &amp; Documents</ColumnHeading>
            <ul className="space-y-2.5" role="list">
              {uneaLinks.map(({ label, page }) => (
                <li key={label}>
                  <FooterLink page={page} onClick={navigate}>{label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4: Connect ──────────────────────────────── */}
          <div>
            <ColumnHeading>Connect</ColumnHeading>
            <ul className="space-y-2.5" role="list">
              {connectLinks.map(({ label, page }) => (
                <li key={label}>
                  <FooterLink page={page} onClick={navigate}>{label}</FooterLink>
                </li>
              ))}
            </ul>

            {/* Newsletter signup */}
            <div className="mt-8">
              <label
                htmlFor="footer-newsletter"
                className="mb-2 block text-xs font-semibold uppercase tracking-widest text-[#E8E4D9]/50"
                style={{ fontFamily: "var(--font-geist-mono), monospace" }}
              >
                Stay informed
              </label>

              <form
                onSubmit={handleSubscribe}
                className="mt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2"
              >
                <input
                  id="footer-newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="h-10 w-full rounded-full border border-[#E8E4D9]/20 bg-transparent px-4 text-sm text-[#E8E4D9] placeholder:text-[#E8E4D9]/35 focus:border-[#0B5F11] focus:outline-none focus:ring-1 focus:ring-[#0B5F11]"
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full px-5 text-sm font-medium text-white transition-colors duration-200 hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
                  style={{ backgroundColor: CYMG_GREEN }}
                  aria-label="Subscribe to newsletter"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
                      Subscribing…
                    </>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>

              {error && (
                <p className="mt-2 text-xs text-clay">{error}</p>
              )}

              {submitted && (
                <p className="mt-2 text-xs" style={{ color: CYMG_GREEN }}>
                  Thank you for subscribing!
                </p>
              )}
            </div>
          </div>
        </div>

        {/* ── Legal line ────────────────────────────────────────── */}
        <div className="mt-12 sm:mt-14 border-t border-[#E8E4D9]/10 pt-6 pb-[env(safe-area-inset-bottom,0px)] text-center">
          <p className="text-xs text-[#E8E4D9]/40">
            All rights reserved &copy; 2025 Children and Youth Major Group to
            UNEP
          </p>
        </div>
      </div>
    </footer>
  );
}
