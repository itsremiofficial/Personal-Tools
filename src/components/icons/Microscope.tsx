import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMicroscope: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0291 10.7702L20.6891 6.98022C21.2591 6.60022 21.4091 5.82022 21.0291 5.26022L19.2091 2.5502C18.8291 1.9802 18.0491 1.8302 17.4891 2.2102L11.8291 6.00021L15.0291 10.7702Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.1732 6.47932L7.39551 9.6792L9.95541 13.5013L14.7331 10.3015L12.1732 6.47932Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.82955 15.9004L9.77955 13.2604L7.53955 9.92041L3.58955 12.5604C3.12955 12.8704 3.00955 13.4904 3.31955 13.9504L4.44955 15.6304C4.74955 16.0804 5.36955 16.2004 5.82955 15.9004Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.0496 12.2002L7.55957 22.0002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 12.2002L16.44 22.0002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M14.8387 10.9001L20.4987 7.11007C21.0687 6.73007 21.2187 5.9501 20.8387 5.3901L19.0187 2.68008C18.6387 2.11008 17.8587 1.96009 17.2987 2.34009L11.6387 6.13009L14.8387 10.9001Z" fill="currentColor" /><path d="M14.5197 10.4201L12.7597 11.6001L10.0897 13.3901L9.73969 13.6201L9.57969 13.3801L7.33968 10.0401L7.17969 9.80008L11.9597 6.6001L14.5197 10.4201Z" fill="currentColor" /><path d="M5.63912 16.02L9.58912 13.38L7.34912 10.04L3.39912 12.68C2.93912 12.99 2.81912 13.61 3.12912 14.07L4.25912 15.75C4.55912 16.21 5.17912 16.33 5.63912 16.02Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.5594 21.8101C16.4594 21.8501 16.3494 21.8801 16.2494 21.8801C15.9594 21.8801 15.6894 21.7101 15.5594 21.4301L11.8294 13.1901L8.04941 21.4401C7.91941 21.7101 7.64941 21.8801 7.35941 21.8801C7.25941 21.8801 7.14941 21.8501 7.04941 21.8101C6.67941 21.6301 6.50941 21.1901 6.67941 20.8101L10.0894 13.3901L12.7594 11.6001L16.9294 20.8201C17.0994 21.1901 16.9294 21.6401 16.5594 21.8101Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMicroscope as IconComponentType).keywords = [
  "microscope",
  "microscopy",
  "microscopic",
  "focus",
  "spotlight",
  "lubricating",
  "magnification",
  "scope",
  "magnifier",
  "macroscope"
];

export default IconMicroscope as IconComponentType;