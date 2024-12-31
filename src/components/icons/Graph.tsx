import { FC } from 'react';
import { IconProps } from "../../types";

const IconGraph: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18.32 12.0002C20.92 12.0002 22 11.0002 21.04 7.72018C20.39 5.51018 18.49 3.61018 16.28 2.96018C13 2.00018 12 3.08018 12 5.68018V8.56018C12 11.0002 13 12.0002 15 12.0002H18.32Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20.0004 14.6998C19.0704 19.3298 14.6304 22.6898 9.58042 21.8698C5.79042 21.2598 2.74042 18.2098 2.12042 14.4198C1.31042 9.38977 4.65042 4.94977 9.26042 4.00977" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.3992 12.9498L16.8892 15.2098L13.6992 12.0198L16.9192 8.7998L21.3992 11.0498C22.1892 11.4398 22.1892 12.5598 21.3992 12.9498Z" fill="currentColor" /><path d="M16.9193 8.80009L13.6993 12.0201L4.0293 2.3501L16.9193 8.80009Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M13.7 12.0202L4.12 21.6003L3.55 21.8902C2.83 22.2402 2 21.7302 2 20.9302V3.07025C2 2.27025 2.83 1.76024 3.55 2.11024L4.03 2.35025L13.7 12.0202Z" fill="currentColor" /><path d="M16.8891 15.21L4.11914 21.6L13.6991 12.02L16.8891 15.21Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconGraph;