import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMicroscope: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.699 10.77L21.359 6.97998C21.929 6.59998 22.079 5.81998 21.699 5.25998L19.879 2.54996C19.499 1.97996 18.719 1.82996 18.159 2.20996L12.499 5.99997L15.699 10.77Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.8431 6.47932L8.06543 9.6792L10.6253 13.5013L15.403 10.3015L12.8431 6.47932Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M6.49948 15.8999L10.4495 13.2599L8.20948 9.91992L4.25947 12.5599C3.79947 12.8699 3.67947 13.4899 3.98947 13.9499L5.11947 15.6299C5.41947 16.0799 6.03948 16.1999 6.49948 15.8999Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.7195 12.2L8.22949 21.9999" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 12.2L17.1099 21.9999" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5096 10.9001L21.1696 7.11007C21.7396 6.73007 21.8896 5.9501 21.5096 5.3901L19.6896 2.68008C19.3096 2.11008 18.5296 1.96009 17.9696 2.34009L12.3096 6.13009L15.5096 10.9001Z" fill="currentColor" /><path d="M15.1896 10.4201L13.4296 11.6001L10.7596 13.3901L10.4096 13.6201L10.2496 13.3801L8.00961 10.0401L7.84961 9.80008L12.6296 6.6001L15.1896 10.4201Z" fill="currentColor" /><path d="M6.31002 16.02L10.26 13.38L8.02002 10.04L4.07002 12.68C3.61002 12.99 3.49002 13.61 3.80002 14.07L4.93002 15.75C5.23002 16.21 5.85002 16.33 6.31002 16.02Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17.2303 21.8101C17.1303 21.8501 17.0203 21.8801 16.9203 21.8801C16.6303 21.8801 16.3603 21.7101 16.2303 21.4301L12.5003 13.1901L8.72031 21.4401C8.59031 21.7101 8.32031 21.8801 8.03031 21.8801C7.93031 21.8801 7.82031 21.8501 7.72031 21.8101C7.35031 21.6301 7.18031 21.1901 7.35031 20.8101L10.7603 13.3901L13.4303 11.6001L17.6003 20.8201C17.7703 21.1901 17.6003 21.6401 17.2303 21.8101Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5096 10.9001L21.1696 7.11008C21.7396 6.73008 21.8896 5.95008 21.5096 5.39008L19.6896 2.68008C19.3096 2.11008 18.5296 1.96008 17.9696 2.34008L12.3096 6.13008L15.5096 10.9001Z" fill="currentColor" /><path d="M15.1896 10.4201L13.4296 11.6001L10.7596 13.3901L10.4096 13.6201L10.2496 13.3801L8.00961 10.0401L7.84961 9.8001L12.6296 6.6001L15.1896 10.4201Z" fill="currentColor" /><path d="M6.31002 16.02L10.26 13.38L8.02002 10.04L4.07002 12.68C3.61002 12.99 3.49002 13.61 3.80002 14.07L4.93002 15.75C5.23002 16.21 5.85002 16.33 6.31002 16.02Z" fill="currentColor" /><path d="M17.2303 21.8101C17.1303 21.8501 17.0203 21.8801 16.9203 21.8801C16.6303 21.8801 16.3603 21.7101 16.2303 21.4301L12.5003 13.1901L8.72031 21.4401C8.59031 21.7101 8.32031 21.8801 8.03031 21.8801C7.93031 21.8801 7.82031 21.8501 7.72031 21.8101C7.35031 21.6301 7.18031 21.1901 7.35031 20.8101L10.7603 13.3901L13.4303 11.6001L17.6003 20.8201C17.7703 21.1901 17.6003 21.6401 17.2303 21.8101Z" fill="currentColor" /></svg> 
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