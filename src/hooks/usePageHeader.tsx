import { createContext, useContext, useState, type ReactNode } from "react";

export interface PageHeaderProps {
  title?: string;
  headerIcon?: ReactNode;
  description?: string;
}

interface PageHeaderContextValue {
  props: PageHeaderProps;
  setProps: (props: PageHeaderProps) => void;
}

const PageHeaderContext = createContext<PageHeaderContextValue>({
  props: {},
  setProps: () => {},
});

export const PageHeaderProvider = ({ children }: { children: ReactNode }) => {
  const [props, setProps] = useState<PageHeaderProps>({});
  return (
    <PageHeaderContext.Provider value={{ props, setProps }}>
      {children}
    </PageHeaderContext.Provider>
  );
};

export const usePageHeader = () => useContext(PageHeaderContext);
