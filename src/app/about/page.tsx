import { authors, pages } from ".velite";
import { Award, Compass, Globe2, HeartHandshake, Rocket } from "lucide-react";
import { MotionBox } from "../components/motion-box";
import { RichText } from "../components/rich-text";

export const metadata = {
  title: "About",
  description:
    "Meet the Lumosphere team building the future of intelligent cloud operations.",
};

const values = [
  {
    title: "Customer trust",
    description:
      "We partner closely with platform, SRE, and product teams to translate reliability investments into measurable business outcomes.",
    icon: HeartHandshake,
  },
  {
    title: "Velocity with safety",
    description:
      "Shipping fast should never mean shipping blind. We obsess over guardrails that empower engineers to create boldly.",
    icon: Rocket,
  },
  {
    title: "Open collaboration",
    description:
      "We contribute to open standards and share our learnings so the broader community can thrive.",
    icon: Globe2,
  },
];

const milestones = [
  {
    year: "2021",
    title: "Lumosphere founded",
    detail:
      "Three former infrastructure leads set out to unify observability, automation, and developer analytics into a single AI-native platform.",
  },
  {
    year: "2022",
    title: "Seed round & first enterprise",
    detail:
      "Raised $12M led by Hyperlane Ventures and onboarded our first Fortune 500 customer, powering global payments uptime.",
  },
  {
    year: "2023",
    title: "Automation engine launch",
    detail:
      "Released self-healing runbooks and AI incident copilots, reducing toil hours by 60% for design partners.",
  },
  {
    year: "2024",
    title: "Global footprint",
    detail:
      "Expanded to three regions, achieved SOC 2 Type II, and launched partner ecosystem across 18 integration providers.",
  },
];

export default function AboutPage() {
  const aboutPage = pages.find((page) => page.slug === "about");
  const author = authors[0];

  return (
    <div className="space-y-20 pb-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary/10 via-base-100 to-primary/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,theme(colors.secondary)/0.12,transparent_60%)]" />
        <div className="relative mx-auto w-full max-w-5xl px-4 py-20 sm:px-6">
          <MotionBox className="space-y-6">
            <span className="badge badge-outline border-secondary/40 text-secondary">
              Our story
            </span>
            <h1 className="text-4xl font-bold text-base-content sm:text-5xl">
              Building the operating system for resilient, human-centered
              software teams
            </h1>
            <p className="max-w-3xl text-lg text-base-content/70">
              Lumosphere exists to help engineering-led companies deliver
              customer value faster, safer, and with deeper intelligence. We
              blend AI-driven automation with empathetic design to elevate the
              developer experience.
            </p>
          </MotionBox>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          <MotionBox className="lg:col-span-2">
            {aboutPage && (
              <RichText
                className="prose prose-lg max-w-none text-base-content/80 dark:prose-invert"
                html={aboutPage.content}
              />
            )}
          </MotionBox>
          <MotionBox
            delay={0.1}
            className="space-y-4 rounded-3xl border border-base-200 bg-base-100/80 p-6"
          >
            <h2 className="text-xl font-semibold text-base-content">
              By the numbers
            </h2>
            <ul className="space-y-3 text-sm text-base-content/70">
              <li className="flex items-center gap-3">
                <Award className="h-5 w-5 text-primary" /> 18 enterprise
                customers in production
              </li>
              <li className="flex items-center gap-3">
                <Compass className="h-5 w-5 text-primary" /> Teams operating
                across 14 countries
              </li>
              <li className="flex items-center gap-3">
                <Rocket className="h-5 w-5 text-primary" /> 4 major product
                releases each quarter
              </li>
            </ul>
          </MotionBox>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <MotionBox className="space-y-8 rounded-3xl border border-base-200 bg-base-100/80 p-8">
          <h2 className="text-3xl font-semibold text-base-content sm:text-4xl">
            What guides us every day
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <MotionBox
                  key={value.title}
                  delay={0.05 * index}
                  className="rounded-2xl border border-base-200 bg-base-200/60 p-6"
                >
                  <Icon className="h-8 w-8 text-secondary" />
                  <h3 className="mt-4 text-xl font-semibold text-base-content">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-base-content/70">
                    {value.description}
                  </p>
                </MotionBox>
              );
            })}
          </div>
        </MotionBox>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <MotionBox className="space-y-6">
          <h2 className="text-3xl font-semibold text-base-content sm:text-4xl">
            Milestones
          </h2>
          <div className="relative border-l border-base-200 pl-6">
            {milestones.map((milestone, index) => (
              <MotionBox
                key={milestone.year}
                delay={0.05 * index}
                className="relative mb-10 last:mb-0"
              >
                <span className="absolute -left-[31px] flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-base-100 text-xs font-semibold text-primary">
                  {milestone.year}
                </span>
                <h3 className="text-xl font-semibold text-base-content">
                  {milestone.title}
                </h3>
                <p className="mt-2 text-sm text-base-content/70">
                  {milestone.detail}
                </p>
              </MotionBox>
            ))}
          </div>
        </MotionBox>
      </section>

      {author && (
        <section className="mx-auto w-full max-w-4xl px-4 sm:px-6">
          <MotionBox className="flex flex-col gap-6 rounded-3xl border border-base-200 bg-base-100/80 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-xl font-semibold text-primary">
                {author.title.charAt(0)}
              </div>
              <div>
                <p className="text-lg font-semibold text-base-content">
                  {author.title}
                </p>
                {author.bio && (
                  <p className="text-sm text-base-content/70">{author.bio}</p>
                )}
              </div>
            </div>
            <div className="text-sm text-base-content/60">
              Let’s create systems that empower engineers to move fearlessly.
            </div>
          </MotionBox>
        </section>
      )}
    </div>
  );
}
