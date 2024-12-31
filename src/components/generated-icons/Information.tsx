import { FC } from 'react';
import { IconProps } from "@/types";

const IconInformation: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7509 2.44982C11.4509 1.85982 12.5809 1.85982 13.2609 2.44982L14.8409 3.79982C15.1409 4.04982 15.7109 4.25982 16.1109 4.25982H17.8109C18.8709 4.25982 19.7409 5.12982 19.7409 6.18982V7.88982C19.7409 8.28982 19.9509 8.84982 20.2009 9.14982L21.5509 10.7298C22.1409 11.4298 22.1409 12.5598 21.5509 13.2398L20.2009 14.8198C19.9509 15.1198 19.7409 15.6798 19.7409 16.0798V17.7798C19.7409 18.8398 18.8709 19.7098 17.8109 19.7098H16.1109C15.7109 19.7098 15.1509 19.9198 14.8509 20.1698L13.2709 21.5198C12.5709 22.1098 11.4409 22.1098 10.7609 21.5198L9.18086 20.1698C8.88086 19.9198 8.31086 19.7098 7.92086 19.7098H6.17086C5.11086 19.7098 4.24086 18.8398 4.24086 17.7798V16.0698C4.24086 15.6798 4.04086 15.1098 3.79086 14.8198L2.44086 13.2298C1.86086 12.5398 1.86086 11.4198 2.44086 10.7298L3.79086 9.13982C4.04086 8.83982 4.24086 8.27982 4.24086 7.88982V6.19982C4.24086 5.13982 5.11086 4.26982 6.17086 4.26982H7.90086C8.30086 4.26982 8.86086 4.05982 9.16086 3.80982L10.7509 2.44982Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M12 8.12988V12.9599" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.9941 16H12.0031" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M10.7509 2.45007C11.4509 1.86007 12.5809 1.86007 13.2609 2.45007L14.8409 3.80007C15.1409 4.05007 15.7109 4.26007 16.1109 4.26007H17.8109C18.8709 4.26007 19.7409 5.13007 19.7409 6.19007V7.89007C19.7409 8.29007 19.9509 8.85007 20.2009 9.15007L21.5509 10.7301C22.1409 11.4301 22.1409 12.5601 21.5509 13.2401L20.2009 14.8201C19.9509 15.1201 19.7409 15.6801 19.7409 16.0801V17.7801C19.7409 18.8401 18.8709 19.7101 17.8109 19.7101H16.1109C15.7109 19.7101 15.1509 19.9201 14.8509 20.1701L13.2709 21.5201C12.5709 22.1101 11.4409 22.1101 10.7609 21.5201L9.18086 20.1701C8.88086 19.9201 8.31086 19.7101 7.92086 19.7101H6.17086C5.11086 19.7101 4.24086 18.8401 4.24086 17.7801V16.0701C4.24086 15.6801 4.04086 15.1101 3.79086 14.8201L2.44086 13.2301C1.86086 12.5401 1.86086 11.4201 2.44086 10.7301L3.79086 9.14007C4.04086 8.84007 4.24086 8.28007 4.24086 7.89007V6.20007C4.24086 5.14007 5.11086 4.27007 6.17086 4.27007H7.90086C8.30086 4.27007 8.86086 4.06007 9.16086 3.81007L10.7509 2.45007Z" fill="currentColor" /><path d="M12 16.8701C11.45 16.8701 11 16.4201 11 15.8701C11 15.3201 11.44 14.8701 12 14.8701C12.55 14.8701 13 15.3201 13 15.8701C13 16.4201 12.56 16.8701 12 16.8701Z" fill="currentColor" /><path d="M12 13.7199C11.59 13.7199 11.25 13.3799 11.25 12.9699V8.12988C11.25 7.71988 11.59 7.37988 12 7.37988C12.41 7.37988 12.75 7.71988 12.75 8.12988V12.9599C12.75 13.3799 12.42 13.7199 12 13.7199Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconInformation;