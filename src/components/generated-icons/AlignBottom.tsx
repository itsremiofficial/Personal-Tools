import { FC } from 'react';
import { IconProps } from "@/types";

const IconAlignBottom: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.2598 5.1001V16.9001C19.2598 18.4001 18.6198 19.0001 17.0298 19.0001H15.9898C14.3998 19.0001 13.7598 18.4001 13.7598 16.9001V5.1001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5.25977 5.1001V11.9001C5.25977 13.4001 5.89977 14.0001 7.48977 14.0001H8.52977C10.1198 14.0001 10.7598 13.4001 10.7598 11.9001V5.1001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 5H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.98 19.3799H17.02C18.61 19.3799 19.25 18.7799 19.25 17.2599V5.37988H13.75V17.2599C13.76 18.7799 14.4 19.3799 15.98 19.3799Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M7.48 14.3799H8.52C10.11 14.3799 10.75 13.7699 10.75 12.2599V5.37988H5.25V12.2599C5.26 13.7699 5.9 14.3799 7.48 14.3799Z" fill="currentColor" /><path d="M21.25 6.11988H2.75C2.34 6.11988 2 5.78988 2 5.37988C2 4.96988 2.34 4.62988 2.75 4.62988H21.25C21.66 4.62988 22 4.96988 22 5.37988C22 5.78988 21.66 6.11988 21.25 6.11988Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconAlignBottom;