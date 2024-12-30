import { useCallback, useContext, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useResizeObserver } from "../../hooks";
import { Copy01Icon } from "hugeicons-react";
import { cn } from "../../hooks/formatSvgCode";
import { Button } from "./button";
import { toast } from "sonner";
import {
  TrayContext,
  TrayProviderProps,
} from "../ContextProvider/ContextProvider";
import { ViewType } from "../../types";
import CodeHighlight from "../Common/CodeHighlight";

const backdropVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const viewVariants = {
  initial: {
    opacity: 0,
    scale: 1,
    y: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 4,
    scale: 0.95,
  },
};

const containerVariants = {
  initial: {
    y: "calc(100% + 4rem)",
  },
  animate: {
    y: 0,
  },
  exit: {
    y: "calc(100% + 4rem)",
  },
};

const DefaultView = () => {
  const { setActiveView } = useContext(TrayContext) as TrayProviderProps;
  const codeText = `export interface IconProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
    width?: string | number;
}`;
  const handleCopy = () => {
    navigator.clipboard.writeText(codeText);
    toast.success("Copied to clipboard!", {
      className: "toast-success",
    });
  };

  return (
    <div className="private-key__container">
      <div className="flex justify-between items-center my-4">
        <h3 className="text-xl text-icu-900 dark:text-icu-400">Icon Props</h3>
        {/* <SecurityCheckIcon className="size-12 text-icu-400 " /> */}
      </div>
      <p className="text-icu-900 mb-4 dark:text-icu-600">
        Add below types in your type definitions and enter the relative (to the
        icons folder) path of your types.
      </p>

      <div className="p-4 rounded-3xl flex flex-col bg-icu-200 dark:bg-icu-1000/70">
        <div className="pb-2 border-b mb-3 flex justify-between items-center border-icu-300 dark:border-icu-900/50">
          <span>Types</span>
          <Button
            variant={"neutral"}
            size={"sm"}
            onClick={handleCopy}
            className="flex items-center gap-2 text-sm rounded-lg transition-colors"
          >
            <Copy01Icon className="size-4" />
            Copy
          </Button>
        </div>
        <code className="whitespace-pre-wrap">
          <CodeHighlight>
            <pre>{codeText}</pre>
          </CodeHighlight>
        </code>
      </div>

      {/* <div className="flex justify-between gap-2">
        <Button
          className="grow !rounded-full"
          onClick={() => setActiveView("default")}
        >
          <FingerPrintScanIcon />
          Cancel
        </Button>
        <Button
          className="grow !rounded-full"
          onClick={() => setActiveView("default")}
        >
          <FingerPrintScanIcon />
          Reveal
        </Button>
      </div> */}
    </div>
  );
};

// const RemoveView = () => {
//   const { setActiveView } = useContext(TrayContext) as TrayProviderProps;
//   return (
//     <div className="private-key__container">
//       <InformationCircleIcon className="size-12" />
//       <h3 className="private-key--title">Are you sure?</h3>
//       <p className="private-key--description private-key--description--no-border">
//         You haven't backed up your private key yet. If you remove it, you could
//         lose access forever. We suggest tapping and backing up your wallet first
//         with a valid recovery method.
//       </p>

//       <div className="private-key--button--container">
//         <button
//           className="private-key--button cursor-pointer"
//           onClick={() => setActiveView("default")}
//         >
//           Cancel
//         </button>
//         <button
//           className="private-key--button private-key--button--remove cursor-pointer"
//           onClick={() => setActiveView("default")}
//         >
//           Continue
//         </button>
//       </div>
//     </div>
//   );
// };

// const SecretView = () => {
//   const { setActiveView } = useContext(TrayContext) as TrayProviderProps;
//   return (
//     <div className="private-key__container">
//       <Setting06Icon className="size-14 text-icu-600" />
//       <h3 className="private-key--title">Secret Recovery Phrase</h3>
//       <p className="private-key--description">
//         Your Secret Recovery Phrase is the key used to back up your wallet. Keep
//         it secret at all times.
//       </p>
//       <ul className="private-key--list">
//         <li>
//           <SecurityCheckIcon />
//           Keep your Secret Phrase safe
//         </li>
//         <li>
//           <CreditCardIcon />
//           Don't share it with anyone else
//         </li>
//         <li>
//           <UnavailableIcon />
//           If you lose it, we can't recover it
//         </li>
//       </ul>
//       <div className="private-key--button--container">
//         <button
//           className="private-key--button cursor-pointer"
//           onClick={() => setActiveView("default")}
//         >
//           Cancel
//         </button>
//         <button
//           className="private-key--button private-key--button--reveal cursor-pointer"
//           onClick={() => setActiveView("default")}
//         >
//           <FingerPrintScanIcon />
//           Reveal
//         </button>
//       </div>
//     </div>
//   );
// };

// const IconPropView = () => {
//   const { setActiveView } = useContext(TrayContext) as TrayProviderProps;
//   return (
//     <div className="flex flex-col gap-2">
//       <div className="flex justify-between my-2 border-b pb-3 border-icu-300">
//         <h3 className="text-icu-800">Options</h3>
//       </div>
//       <div className="flex flex-col gap-2">
//         <Button
//           variant={"neutral"}
//           className="!px-4 w-full gap-2 justify-start"
//           onClick={() => {
//             setActiveView("forward");
//           }}
//         >
//           What are &#60;IconProp&#62; types?
//         </Button>
//         <Button
//           variant={"neutral"}
//           className="!px-4 w-full gap-2 justify-start"
//           onClick={() => {
//             setActiveView("secret");
//           }}
//         >
//           How to define path?
//         </Button>
//       </div>
//     </div>
//   );
// };

const Tray = () => {
  const { open, setOpen, activeView } = useContext(
    TrayContext
  ) as TrayProviderProps;

  const views: Record<ViewType, JSX.Element> = {
    default: <DefaultView />,
    forward: <DefaultView />,
    secret: <DefaultView />,
    remove: <DefaultView />,
  };

  const ref = useRef<HTMLDivElement>(null);

  const onResize = useCallback(
    (target: HTMLDivElement) => {
      if (ref.current) {
        ref.current.style.height = `${target.offsetHeight}px`;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [open]
  );

  const contentRef = useResizeObserver(onResize);

  return (
    <AnimatePresence mode="wait">
      {open && (
        <div className="tray__container ">
          <>
            <motion.div
              variants={backdropVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="tray__backdrop"
              onClick={() => setOpen(false)}
            />
            <motion.div
              drag="y"
              dragConstraints={{ top: 0, bottom: 100 }}
              dragSnapToOrigin={true}
              dragElastic={0.1}
              onDragEnd={(_, info) => info.offset.y > 100 && setOpen(false)}
              className="tray__content--wrapper--primary "
            >
              <motion.div
                variants={containerVariants}
                transition={{
                  duration: 0.125,
                }}
                ref={ref}
                className="tray__content--wrapper"
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <motion.div ref={contentRef} className="tray__content">
                  <div className="bg-icu-100 dark:bg-icu-900 p-4 rounded-4xl relative">
                    <button
                      className={cn(
                        "absolute h-2 w-14 rounded-full left-1/2 transform -translate-x-1/2 top-2",
                        "bg-icu-300 dark:bg-icu-800"
                      )}
                      onClick={() => setOpen(false)}
                    ></button>
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.div
                        variants={viewVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        key={activeView}
                        transition={{
                          duration: 0.15,
                        }}
                      >
                        {views[activeView as ViewType]}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Tray;
