import { FC } from 'react';
import { IconProps } from "../../types";

const IconJavaScript: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.12009 2H19.8901C20.4901 2 20.9501 2.52 20.8801 3.11L19.0801 19.33C19.0401 19.73 18.7501 20.07 18.3601 20.18L12.2801 21.92C12.1001 21.97 11.9101 21.97 11.7301 21.92L5.65012 20.18C5.26012 20.07 4.98009 19.73 4.93009 19.33L3.1301 3.11C3.0601 2.52 3.52009 2 4.12009 2Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.62 7.00977V15.9898L7.5 15.0898" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.5004 7L13.3503 7.45V12.4L16.5004 11.95V15.1L12.9004 16" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M10.7509 2.45007C11.4509 1.86007 12.5809 1.86007 13.2609 2.45007L14.8409 3.80007C15.1409 4.05007 15.7109 4.26007 16.1109 4.26007H17.8109C18.8709 4.26007 19.7409 5.13007 19.7409 6.19007V7.89007C19.7409 8.29007 19.9509 8.85007 20.2009 9.15007L21.5509 10.7301C22.1409 11.4301 22.1409 12.5601 21.5509 13.2401L20.2009 14.8201C19.9509 15.1201 19.7409 15.6801 19.7409 16.0801V17.7801C19.7409 18.8401 18.8709 19.7101 17.8109 19.7101H16.1109C15.7109 19.7101 15.1509 19.9201 14.8509 20.1701L13.2709 21.5201C12.5709 22.1101 11.4409 22.1101 10.7609 21.5201L9.18086 20.1701C8.88086 19.9201 8.31086 19.7101 7.92086 19.7101H6.17086C5.11086 19.7101 4.24086 18.8401 4.24086 17.7801V16.0701C4.24086 15.6801 4.04086 15.1101 3.79086 14.8201L2.44086 13.2301C1.86086 12.5401 1.86086 11.4201 2.44086 10.7301L3.79086 9.14007C4.04086 8.84007 4.24086 8.28007 4.24086 7.89007V6.20007C4.24086 5.14007 5.11086 4.27007 6.17086 4.27007H7.90086C8.30086 4.27007 8.86086 4.06007 9.16086 3.81007L10.7509 2.45007Z" fill="currentColor" /><path d="M12 16.8701C11.45 16.8701 11 16.4201 11 15.8701C11 15.3201 11.44 14.8701 12 14.8701C12.55 14.8701 13 15.3201 13 15.8701C13 16.4201 12.56 16.8701 12 16.8701Z" fill="currentColor" /><path d="M12 13.7199C11.59 13.7199 11.25 13.3799 11.25 12.9699V8.12988C11.25 7.71988 11.59 7.37988 12 7.37988C12.41 7.37988 12.75 7.71988 12.75 8.12988V12.9599C12.75 13.3799 12.42 13.7199 12 13.7199Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconJavaScript;