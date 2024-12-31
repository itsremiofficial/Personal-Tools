import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconGraph: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18.32 12.0002C20.92 12.0002 22 11.0002 21.04 7.72018C20.39 5.51018 18.49 3.61018 16.28 2.96018C13 2.00018 12 3.08018 12 5.68018V8.56018C12 11.0002 13 12.0002 15 12.0002H18.32Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20.0004 14.6998C19.0704 19.3298 14.6304 22.6898 9.58042 21.8698C5.79042 21.2598 2.74042 18.2098 2.12042 14.4198C1.31042 9.38977 4.65042 4.94977 9.26042 4.00977" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.6702 6.9499C21.0302 4.7799 19.2202 2.9699 17.0502 2.3299C15.4002 1.8499 14.2602 1.8899 13.4702 2.4799C12.5202 3.1899 12.4102 4.4699 12.4102 5.3799V7.8699C12.4102 10.3299 13.5302 11.5799 15.7302 11.5799H18.6002C19.5002 11.5799 20.7902 11.4699 21.5002 10.5199C22.1102 9.7399 22.1602 8.5999 21.6702 6.9499Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.9094 13.3597C18.6494 13.0597 18.2694 12.8897 17.8794 12.8897H14.2994C12.5394 12.8897 11.1094 11.4597 11.1094 9.69966V6.11966C11.1094 5.72966 10.9394 5.34966 10.6394 5.08966C10.3494 4.82966 9.94941 4.70966 9.56941 4.75966C7.21941 5.05966 5.05941 6.34966 3.64941 8.28966C2.22941 10.2397 1.70941 12.6197 2.15941 14.9997C2.80941 18.4397 5.55941 21.1897 9.00941 21.8397C9.55941 21.9497 10.1094 21.9997 10.6594 21.9997C12.4694 21.9997 14.2194 21.4397 15.7094 20.3497C17.6494 18.9397 18.9394 16.7797 19.2394 14.4297C19.2894 14.0397 19.1694 13.6497 18.9094 13.3597Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGraph as IconComponentType).keywords = [
  "graph",
  "graphical record",
  "diagram",
  "flowchart",
  "figure",
  "graphical",
  "chart",
  "map",
  "design",
  "graphically"
];

export default IconGraph as IconComponentType;