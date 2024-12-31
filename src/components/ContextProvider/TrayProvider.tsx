import React, { createContext, useState, PropsWithChildren } from 'react';

export interface TrayProviderProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const TrayContext = createContext<TrayProviderProps | null>(null);

export const TrayProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <TrayContext.Provider value={{ open, setOpen }}>
      {children}
    </TrayContext.Provider>
  );
};

export default TrayProvider;
