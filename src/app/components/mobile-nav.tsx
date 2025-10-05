"use client";

import { Dialog } from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

export type NavItem = {
  label: string;
  href: string;
};

interface MobileNavProps {
  navItems: NavItem[];
}

export function MobileNav({ navItems }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={(details) => setOpen(details.open)}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="Open navigation menu"
          className="btn btn-circle btn-ghost md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </Dialog.Trigger>

      <AnimatePresence>
        {open ? (
          <Portal>
            <Dialog.Backdrop asChild>
              <motion.div
                className="fixed inset-0 bg-base-content/60 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            </Dialog.Backdrop>
            <Dialog.Positioner className="fixed inset-0 flex items-start justify-end p-4">
              <Dialog.Content asChild>
                <motion.div
                  className="w-full max-w-xs rounded-[1.75rem] border border-base-200 bg-base-100/95 shadow-2xl shadow-primary/10"
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 40, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 280, damping: 26 }}
                >
                  <div className="flex items-center justify-between border-b border-base-200/80 px-5 py-4">
                    <div>
                      <Dialog.Title className="text-xs font-semibold uppercase tracking-[0.3em] text-base-content/70">
                        Navigation
                      </Dialog.Title>
                    </div>
                    <Dialog.CloseTrigger asChild>
                      <button
                        type="button"
                        aria-label="Close navigation menu"
                        className="btn btn-circle btn-ghost"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </Dialog.CloseTrigger>
                  </div>
                  <nav className="space-y-1 px-5 py-4">
                    {navItems.map((item) => (
                      <Dialog.CloseTrigger asChild key={item.href}>
                        <Link
                          href={item.href}
                          className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition hover:bg-base-200/80"
                        >
                          <span>{item.label}</span>
                        </Link>
                      </Dialog.CloseTrigger>
                    ))}
                  </nav>
                </motion.div>
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        ) : null}
      </AnimatePresence>
    </Dialog.Root>
  );
}
