import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconStatusUp: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M6.87988 18.1501V16.0801" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 18.1498V14.0098" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.1201 18.1502V11.9302" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M17.1199 5.84961L16.6599 6.38961C14.1099 9.36961 10.6899 11.4796 6.87988 12.4296" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M14.1904 5.84961H17.1204V8.76961" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M6.88086 18.9001C6.47086 18.9001 6.13086 18.5601 6.13086 18.1501V16.0801C6.13086 15.6701 6.47086 15.3301 6.88086 15.3301C7.29086 15.3301 7.63086 15.6701 7.63086 16.0801V18.1501C7.63086 18.5701 7.29086 18.9001 6.88086 18.9001Z" fill="currentColor" /><path d="M12 18.9C11.59 18.9 11.25 18.56 11.25 18.15V14C11.25 13.59 11.59 13.25 12 13.25C12.41 13.25 12.75 13.59 12.75 14V18.15C12.75 18.57 12.41 18.9 12 18.9Z" fill="currentColor" /><path d="M17.1191 18.9002C16.7091 18.9002 16.3691 18.5602 16.3691 18.1502V11.9302C16.3691 11.5202 16.7091 11.1802 17.1191 11.1802C17.5291 11.1802 17.8691 11.5202 17.8691 11.9302V18.1502C17.8691 18.5702 17.5391 18.9002 17.1191 18.9002Z" fill="currentColor" /><path d="M17.871 5.8201C17.871 5.7701 17.851 5.7101 17.841 5.6601C17.831 5.6201 17.821 5.5701 17.811 5.5301C17.791 5.4901 17.761 5.4601 17.741 5.4201C17.711 5.3801 17.681 5.3301 17.641 5.3001C17.631 5.2901 17.631 5.2801 17.621 5.2801C17.591 5.2601 17.561 5.2501 17.531 5.2301C17.491 5.2001 17.441 5.1701 17.391 5.1501C17.341 5.1301 17.291 5.1301 17.241 5.1201C17.201 5.1101 17.171 5.1001 17.131 5.1001H14.201C13.791 5.1001 13.451 5.4401 13.451 5.8501C13.451 6.2601 13.791 6.6001 14.201 6.6001H15.451C13.071 9.1001 10.071 10.8601 6.70096 11.7101C6.30096 11.8101 6.05096 12.2201 6.15096 12.6201C6.23096 12.9601 6.54096 13.1901 6.88096 13.1901C6.94096 13.1901 7.00096 13.1801 7.06096 13.1701C10.631 12.2801 13.821 10.4301 16.371 7.8101V8.7801C16.371 9.1901 16.711 9.5301 17.121 9.5301C17.531 9.5301 17.871 9.1901 17.871 8.7801V5.8501C17.871 5.8401 17.871 5.8301 17.871 5.8201Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconStatusUp as IconComponentType).keywords = [
  "status",
  "up",
  "position",
  "condition",
  "belonging",
  "shape",
  "ranking",
  "rating",
  "establish",
  "availability",
  "item",
  "upbound",
  "upwardly",
  "ascending",
  "upward",
  "upwards",
  "rising",
  "astir",
  "ahead",
  "awake"
];

export default IconStatusUp as IconComponentType;