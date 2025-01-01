import React, {
  createContext,
  useState,
  useCallback,
  PropsWithChildren,
} from "react";
import { ViewType } from "@/types";

export interface TrayProviderProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeView: ViewType;
  setActiveView: (view: ViewType) => void;
  openTray: (view?: ViewType) => void;
  closeTray: () => void;
}

export const TrayContext = createContext<TrayProviderProps | null>(null);

export const TrayProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [activeView, setActiveView] = useState<ViewType>("default");

  const openTray = useCallback((view: ViewType = "default") => {
    setActiveView(view);
    setOpen(true);
  }, []);

  const closeTray = useCallback(() => {
    setOpen(false);
    setTimeout(() => setActiveView("default"), 300);
  }, []);

  return (
    <TrayContext.Provider
      value={{
        open,
        setOpen,
        activeView,
        setActiveView,
        openTray,
        closeTray,
      }}
    >
      {children}
    </TrayContext.Provider>
  );
};

export default TrayProvider;
