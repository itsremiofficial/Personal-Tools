import { createContext } from "react";
import { TrayProviderProps } from "./TrayProvider";

export const TrayContext = createContext<TrayProviderProps | null>(null);
