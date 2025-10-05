"use client";

import { SegmentGroup } from "@ark-ui/react/segment-group";
import { Monitor, Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import type { ComponentProps } from "react";
import { useTheme } from "./theme-context";

type ThemeValue = "light" | "dark" | "system";

type IconProps = ComponentProps<typeof Sun>;

const THEME_OPTIONS: Array<{
  value: ThemeValue;
  label: string;
  description: string;
  icon: (props: IconProps) => JSX.Element;
}> = [
  {
    value: "light",
    label: "Light",
    description: "Bright, vibrant surfaces",
    icon: (props) => <Sun {...props} />,
  },
  {
    value: "dark",
    label: "Dark",
    description: "Low-light friendly",
    icon: (props) => <Moon {...props} />,
  },
  {
    value: "system",
    label: "Auto",
    description: "Match device setting",
    icon: (props) => <Monitor {...props} />,
  },
];

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <div className="flex items-center gap-3">
      <SegmentGroup.Root
        value={theme}
        onValueChange={(details) => {
          setTheme(details.value as ThemeValue);
        }}
        aria-label="Toggle color theme"
        className="relative flex h-11 items-center gap-1 rounded-full border border-base-200 bg-base-100/70 p-1 shadow-sm backdrop-blur"
      >
        <SegmentGroup.Indicator asChild>
          <motion.div
            layoutId="theme-toggle-indicator"
            className="absolute inset-y-1 rounded-full bg-base-200/80 shadow-inner"
            style={{
              translate: "var(--segment-group-indicator-translate-x, 0) var(--segment-group-indicator-translate-y, 0)",
              width: "var(--segment-group-indicator-width, auto)",
            }}
            transition={{ type: "spring", stiffness: 360, damping: 26 }}
          />
        </SegmentGroup.Indicator>
        {THEME_OPTIONS.map((option) => (
          <SegmentGroup.Item
            key={option.value}
            value={option.value}
            className="group relative z-10 flex min-w-0 flex-1 cursor-pointer items-center justify-center rounded-full"
          >
            <motion.span
              className="flex w-full items-center justify-center gap-2 rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-wide text-base-content/60 transition data-[state=on]:text-base-content group-data-[state=on]:text-base-content sm:text-sm"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <option.icon className="h-4 w-4" />
              <SegmentGroup.ItemText className="hidden sm:inline">
                {option.label}
              </SegmentGroup.ItemText>
            </motion.span>
            <SegmentGroup.ItemControl className="absolute inset-0 rounded-full" />
            <SegmentGroup.ItemHiddenInput />
          </SegmentGroup.Item>
        ))}
      </SegmentGroup.Root>

      <div className="hidden flex-col leading-tight text-xs text-base-content/60 sm:flex">
        <span className="font-semibold uppercase tracking-wide text-base-content/70">
          Theme
        </span>
        <span className="capitalize text-base-content/70">{resolvedTheme}</span>
      </div>
    </div>
  );
}
