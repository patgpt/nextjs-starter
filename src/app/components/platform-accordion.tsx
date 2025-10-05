"use client";

import { Accordion } from "@ark-ui/react/accordion";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import type { ReactNode } from "react";

export interface PlatformItem {
  id: string;
  title: string;
  description: string;
  details: ReactNode;
}

interface PlatformAccordionProps {
  items: PlatformItem[];
}

export function PlatformAccordion({ items }: PlatformAccordionProps) {
  return (
    <Accordion.Root
      defaultValue={[items[0]?.id]}
      multiple
      className="space-y-4"
    >
      {items.map((item, index) => (
        <Accordion.Item
          key={item.id}
          value={item.id}
          className="overflow-hidden rounded-2xl border border-base-200 bg-base-100/80"
        >
          <Accordion.ItemTrigger asChild>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-base-content hover:bg-base-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80"
            >
              <span className="flex items-center gap-3 text-lg">
                <span className="badge badge-primary badge-sm hidden align-middle lg:inline-flex">
                  {index + 1}
                </span>
                {item.title}
              </span>
              <Accordion.ItemIndicator asChild>
                <ChevronDown className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
              </Accordion.ItemIndicator>
            </button>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent asChild>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <div className="space-y-2 border-t border-base-200 bg-base-200/50 px-6 py-5 text-sm text-base-content/80">
                <p className="font-medium text-base-content">
                  {item.description}
                </p>
                <div className="text-base-content/70">{item.details}</div>
              </div>
            </motion.div>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
