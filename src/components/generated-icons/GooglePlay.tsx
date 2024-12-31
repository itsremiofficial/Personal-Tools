import { FC } from 'react';
import { IconProps } from "@/types";

const IconGooglePlay: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.92 8.80024L13.7 12.0202L4.12 21.6003L3.54 21.8903C2.83 22.2403 2 21.7303 2 20.9303V3.07026C2 2.27026 2.83 1.76024 3.55 2.11024L16.92 8.80024Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M21.3995 12.9503L16.8795 15.2103L13.6895 12.0203L16.9095 8.80029L21.3995 11.0503C22.1895 11.4403 22.1895 12.5603 21.3995 12.9503Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.8901 15.21L4.12012 21.6L13.7001 12.02L16.8901 15.21Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.6998 12.0201L4.08984 2.41016" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.3992 12.9498L16.8892 15.2098L13.6992 12.0198L16.9192 8.7998L21.3992 11.0498C22.1892 11.4398 22.1892 12.5598 21.3992 12.9498Z" fill="currentColor" /><path d="M16.9193 8.80009L13.6993 12.0201L4.0293 2.3501L16.9193 8.80009Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M13.7 12.0202L4.12 21.6003L3.55 21.8902C2.83 22.2402 2 21.7302 2 20.9302V3.07025C2 2.27025 2.83 1.76024 3.55 2.11024L4.03 2.35025L13.7 12.0202Z" fill="currentColor" /><path d="M16.8891 15.21L4.11914 21.6L13.6991 12.02L16.8891 15.21Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconGooglePlay;