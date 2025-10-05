import { authors, posts } from ".velite";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CheckCircle,
  LineChart,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { MotionBox } from "./components/motion-box";
import {
  PlatformAccordion,
  type PlatformItem,
} from "./components/platform-accordion";

interface SolutionCard {
  title: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
}

const metrics = [
  { label: "Deployments orchestrated", value: "12k+/month" },
  { label: "Incidents auto-resolved", value: "87%" },
  { label: "Mean time to detect", value: "< 45 sec" },
  { label: "Customer NPS", value: "68" },
];

const platformItems: PlatformItem[] = [
  {
    id: "ai-observability",
    title: "AI-first observability graph",
    description:
      "Correlate logs, traces, and metrics in real-time with an adaptive knowledge graph that understands your architecture.",
    details: (
      <ul className="list-disc space-y-1 pl-5">
        <li>
          Enriched telemetry stitched across services, environments, and feature
          flags
        </li>
        <li>
          Predictive incident clustering powered by transformer-based anomaly
          detection
        </li>
        <li>
          Instant replay timelines to understand before, during, and after any
          regression
        </li>
      </ul>
    ),
  },
  {
    id: "workflow-automation",
    title: "Self-healing runbooks",
    description:
      "Codify expert knowledge as reusable automations that remediate issues, roll back releases, or open on-call tickets in seconds.",
    details: (
      <ul className="list-disc space-y-1 pl-5">
        <li>Drag-and-drop orchestration with Git-backed version history</li>
        <li>
          Guardrails with approval gates, dry runs, and automatic rollback paths
        </li>
        <li>
          Integrations with PagerDuty, Jira, Slack, and ServiceNow out of the
          box
        </li>
      </ul>
    ),
  },
  {
    id: "developer-insights",
    title: "Continuous developer insights",
    description:
      "Reduce toil through real-time analytics on delivery velocity, quality, and platform usage trends.",
    details: (
      <ul className="list-disc space-y-1 pl-5">
        <li>
          End-to-end visibility across CI pipelines, deployments, and experiment
          outcomes
        </li>
        <li>
          Customizable scorecards aligned to reliability, cost, and customer
          impact goals
        </li>
        <li>
          AI summaries that surface anomalies and prescribe recommended actions
        </li>
      </ul>
    ),
  },
];

const solutions: SolutionCard[] = [
  {
    title: "Operational intelligence",
    description:
      "Unify telemetry into one pane of glass with proactive anomaly detection, trending, and RCA guidance.",
    icon: LineChart,
    highlights: [
      "Golden signal dashboards",
      "L3-level root cause narratives",
      "Predictive alert noise reduction",
    ],
  },
  {
    title: "Automated resilience",
    description:
      "Codify self-healing workflows that mitigate risk without slowing shipping velocity.",
    icon: ShieldCheck,
    highlights: [
      "Policy-driven release guards",
      "SLO-aware remediation",
      "Ticketless incident recovery",
    ],
  },
  {
    title: "Intelligent dev loops",
    description:
      "Give engineering teams feedback loops that shorten cycle time and unlock continuous delivery.",
    icon: Workflow,
    highlights: [
      "Lead time and DORA analytics",
      "AI pair navigator for on-call",
      "Actionable retros with hotspots",
    ],
  },
];

const trustBadges = [
  "FissionCloud",
  "Hyperlane",
  "Atlas Robotics",
  "QuantumOps",
  "Nordic Systems",
];

export default function Home() {
  const featuredPosts = [...posts]
    .filter((post) => !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const primaryAuthor = authors[0];
  const authorQuote =
    primaryAuthor?.bio ??
    "Our team obsesses over reliability so yours can focus on product.";

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-base-100 to-secondary/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,theme(colors.primary)/0.12,transparent_60%)]" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-24 sm:px-6 lg:flex-row lg:items-center">
          <MotionBox className="flex-1 space-y-6">
            <span className="badge badge-primary badge-outline border-primary/40 bg-primary/5 text-primary">
              AI-powered delivery platform
            </span>
            <h1 className="text-4xl font-bold leading-tight text-base-content sm:text-5xl lg:text-6xl">
              Deploy with confidence. Recover in minutes. Learn continuously.
            </h1>
            <p className="max-w-xl text-lg text-base-content/70">
              Lumosphere gives platform teams a single pane to observe,
              automate, and improve complex cloud ecosystems. Ship features
              faster with fewer incident hours and richer customer insights.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/blog"
                className="btn btn-primary rounded-3xl text-sm font-semibold uppercase tracking-wide"
              >
                Explore insights
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#contact"
                className="btn btn-outline rounded-3xl text-sm font-semibold uppercase tracking-wide"
              >
                Talk to an architect
              </Link>
            </div>
          </MotionBox>

          <MotionBox delay={0.15} className="flex-1">
            <div className="rounded-3xl border border-base-200 bg-base-100/80 p-6 shadow-xl shadow-primary/5 backdrop-blur">
              <div className="grid grid-cols-2 gap-5">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-base-200 bg-base-200/60 p-4"
                  >
                    <p className="text-sm font-medium text-base-content/60">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-xl font-semibold text-base-content">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
              {primaryAuthor && (
                <div className="mt-6 rounded-2xl border border-base-200 bg-base-200/80 p-5 text-sm text-base-content/70">
                  <p className="font-semibold text-base-content">
                    &ldquo;{authorQuote}&rdquo;
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-wide text-base-content/60">
                    {primaryAuthor.title} • Principal Platform Architect
                  </p>
                </div>
              )}
            </div>
          </MotionBox>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-base-200 bg-base-100/90 p-8 shadow-md">
          <div className="pointer-events-none absolute inset-x-0 -top-28 h-56 bg-[radial-gradient(60%_60%_at_50%_0%,theme(colors.primary)/0.18,transparent)]" />
          <div className="relative">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-base-content/60">
              Trusted by teams scaling globally
            </p>
            <div className="mt-6 grid grid-cols-2 items-center gap-4 text-sm text-base-content/60 sm:grid-cols-5">
              {trustBadges.map((badge, index) => (
                <MotionBox
                  key={badge}
                  delay={0.05 * index}
                  className="flex justify-center"
                >
                  <span className="rounded-xl border border-base-200/70 bg-base-200/60 px-4 py-2 font-semibold text-base-content/70 shadow-sm">
                    {badge}
                  </span>
                </MotionBox>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2.25rem] border border-base-200 bg-gradient-to-br from-base-100 via-base-100 to-secondary/10 px-6 py-10 shadow-xl sm:px-10">
          <div className="pointer-events-none absolute -left-24 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,theme(colors.secondary)/0.25,transparent)]" />
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,theme(colors.primary)/0.18,transparent)]" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <MotionBox className="space-y-4">
              <span className="badge badge-outline border-secondary text-secondary">
                Platform overview
              </span>
              <h2 className="text-3xl font-semibold text-base-content sm:text-4xl">
                A connected nervous system for your platform operations
              </h2>
              <p className="text-base text-base-content/70">
                Align engineering, SRE, and product teams with real-time
                context, AI-generated remediation, and measurable business
                outcomes.
              </p>
              <div className="grid gap-3 text-sm text-base-content/60 sm:grid-cols-2">
                <div className="rounded-2xl border border-base-200 bg-base-100/70 p-4 shadow-sm">
                  <p className="font-semibold text-base-content">99.95%+</p>
                  <p>
                    Availability maintained across hybrid and multi-cloud
                    estates.
                  </p>
                </div>
                <div className="rounded-2xl border border-base-200 bg-base-100/70 p-4 shadow-sm">
                  <p className="font-semibold text-base-content">72%</p>
                  <p>Reduction in alert fatigue after automating playbooks.</p>
                </div>
              </div>
            </MotionBox>
            <div className="relative">
              <PlatformAccordion items={platformItems} />
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2.25rem] border border-base-200 bg-base-100/95 p-8 shadow-xl sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,theme(colors.primary)/0.08_35%,transparent_70%)]" />
          <div className="relative flex flex-col gap-6">
            <MotionBox className="space-y-4">
              <span className="badge badge-secondary/20 badge-outline border-secondary/40 text-secondary">
                Solutions
              </span>
              <h2 className="text-3xl font-semibold text-base-content sm:text-4xl">
                Opinionated building blocks for every growth stage
              </h2>
              <p className="max-w-3xl text-base text-base-content/70">
                From fintech scale-ups to global enterprises, Lumosphere adapts
                to your compliance, security, and reliability requirements
                without sacrificing developer happiness.
              </p>
            </MotionBox>
            <div className="grid gap-6 md:grid-cols-3">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <MotionBox
                    key={solution.title}
                    delay={0.05 * index}
                    className="flex h-full flex-col rounded-3xl border border-base-200/80 bg-base-100/80 p-6 shadow-lg shadow-primary/5 backdrop-blur"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 text-xl font-semibold text-base-content">
                      {solution.title}
                    </h3>
                    <p className="mt-2 text-sm text-base-content/70">
                      {solution.description}
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-base-content/70">
                      {solution.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </MotionBox>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="insights" className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2.25rem] border border-base-200 bg-base-100/95 p-8 shadow-md sm:p-10">
          <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <MotionBox className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="badge badge-info badge-outline border-info/40 text-info">
                Engineering insights
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-base-content sm:text-4xl">
                Stay ahead with deep dives from our platform team
              </h2>
              <p className="mt-2 max-w-2xl text-base text-base-content/70">
                Curated perspectives on scaling distributed systems, improving
                on-call wellbeing, and harnessing AI responsibly in production.
              </p>
            </div>
            <Link href="/blog" className="btn btn-outline rounded-3xl">
              View all articles
            </Link>
          </MotionBox>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featuredPosts.map((post, index) => (
              <MotionBox
                key={post.slug}
                delay={0.05 * index}
                className="flex h-full flex-col rounded-3xl border border-base-200 bg-base-100/85 p-6 shadow-sm shadow-primary/5"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {post.category}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-base-content">
                  <Link href={`/blog/${post.slug}`} className="link-hover link">
                    {post.title}
                  </Link>
                </h3>
                {post.description && (
                  <p className="mt-3 flex-1 text-sm text-base-content/70">
                    {post.description}
                  </p>
                )}
                <div className="mt-4 flex items-center justify-between text-xs text-base-content/60">
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span>{post.metadata.readingTime} min read</span>
                </div>
              </MotionBox>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <MotionBox className="overflow-hidden rounded-3xl border border-base-200 bg-gradient-to-br from-secondary/10 via-base-100 to-primary/10 p-8 shadow-xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <span className="badge badge-outline border-base-200 text-base-content/70">
                Ready to get started?
              </span>
              <h2 className="text-3xl font-semibold text-base-content sm:text-4xl">
                Partner with Lumosphere for proactive reliability at scale
              </h2>
              <p className="text-base text-base-content/70">
                Book a 45-minute architecture session to map your critical
                workflows, identify quick wins, and outline a phased rollout
                tailored to your stack.
              </p>
            </div>
            <form className="flex w-full max-w-md flex-col gap-3 rounded-2xl border border-base-200 bg-base-100/90 p-6">
              <div>
                <label
                  className="text-sm font-semibold text-base-content"
                  htmlFor="company"
                >
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Acme Robotics"
                  className="input input-bordered mt-2 w-full"
                  required
                />
              </div>
              <div>
                <label
                  className="text-sm font-semibold text-base-content"
                  htmlFor="email"
                >
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  className="input input-bordered mt-2 w-full"
                  required
                />
              </div>
              <div>
                <label
                  className="text-sm font-semibold text-base-content"
                  htmlFor="focus"
                >
                  Top initiative
                </label>
                <select
                  id="focus"
                  name="focus"
                  className="select select-bordered mt-2 w-full"
                >
                  <option>Incident automation</option>
                  <option>Observability modernization</option>
                  <option>Developer insights</option>
                  <option>Compliance &amp; governance</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary rounded-3xl">
                Schedule discovery
              </button>
            </form>
          </div>
        </MotionBox>
      </section>
    </div>
  );
}
