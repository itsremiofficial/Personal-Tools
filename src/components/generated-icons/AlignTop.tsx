import { FC } from 'react';
import { IconProps } from "@/types";

const IconAlignTop: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.2598 18.9V7.1C19.2598 5.6 18.6198 5 17.0298 5H15.9898C14.3998 5 13.7598 5.6 13.7598 7.1V18.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5.25977 18.9V12.1C5.25977 10.6 5.89977 10 7.48977 10H8.52977C10.1198 10 10.7598 10.6 10.7598 12.1V18.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 19H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16.5395 4.62012H15.4995C13.9095 4.62012 13.2695 5.22012 13.2695 6.74012V18.6201H18.7695V6.74012C18.7595 5.22012 18.1195 4.62012 16.5395 4.62012Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M8.02 9.62012H6.98C5.39 9.62012 4.75 10.2301 4.75 11.7401V18.6201H10.25V11.7401C10.25 10.2301 9.6 9.62012 8.02 9.62012Z" fill="currentColor" /><path d="M2.75 17.8799H21.25C21.66 17.8799 22 18.2199 22 18.6299C22 19.0399 21.66 19.3799 21.25 19.3799H2.75C2.34 19.3799 2 19.0399 2 18.6199C2 18.1999 2.34 17.8799 2.75 17.8799Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconAlignTop;