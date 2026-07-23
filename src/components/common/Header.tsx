import { memo } from "react";
import { usePageHeader } from "@/hooks/usePageHeader";
import { useSidebar } from "@/hooks/useSidebar";
import { IconHamburgerMenu } from "../icons/version01";
import { AnimatePresence, motion } from "motion/react";
import { EASE_OUT } from "@/lib/ease";
import { Button } from "./Button";

const Header = () => {
  const { props: pageProps } = usePageHeader();
  const { toggleMobile } = useSidebar();

  return (
    <div className="border-b border-border bg-background px-4 py-3 md:h-20">
      <div className="w-full flex items-center justify-between gap-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={pageProps.title || "default"}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              visible: {
                transition: { staggerChildren: 0.05 },
              },
              hidden: {
                transition: { staggerChildren: 0.03, staggerDirection: -1 },
              },
            }}
            className="flex gap-3 min-w-0 items-center"
          >
            {pageProps.headerIcon && (
              <motion.span
                variants={{
                  visible: { opacity: 1, x: 0, y: 0 },
                  hidden: { opacity: 0, x: -6, y: 4 },
                }}
                transition={{ duration: 0.2, ease: EASE_OUT }}
                className="shrink-0"
              >
                {pageProps.headerIcon}
              </motion.span>
            )}
            <div className="min-w-0">
              <motion.h2
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 6 },
                }}
                transition={{ duration: 0.2, ease: EASE_OUT }}
                className="text-base lg:text-xl font-medium truncate"
              >
                {pageProps.title || "Page"}
              </motion.h2>
              {pageProps.description && (
                <motion.p
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 6 },
                  }}
                  transition={{ duration: 0.2, ease: EASE_OUT }}
                  className="text-xs lg:text-sm text-muted-foreground truncate"
                >
                  {pageProps.description}
                </motion.p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
        <Button
          onClick={toggleMobile}
          size="icon"
          className="md:hidden rounded-full size-11 shrink-0"
          aria-label="Open menu"
        >
          <IconHamburgerMenu className="size-5" duotone={false} />
        </Button>
      </div>
    </div>
  );
};

Header.displayName = "Header";

export { Header };
export default memo(Header);
