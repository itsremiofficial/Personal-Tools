import { FC } from 'react';
import { IconProps } from "../../types";

const IconEye: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M15.5799 11.9999C15.5799 13.9799 13.9799 15.5799 11.9999 15.5799C10.0199 15.5799 8.41992 13.9799 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C13.9799 8.41992 15.5799 10.0199 15.5799 11.9999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.9998 20.2702C15.5298 20.2702 18.8198 18.1902 21.1098 14.5902C22.0098 13.1802 22.0098 10.8102 21.1098 9.40021C18.8198 5.80021 15.5298 3.72021 11.9998 3.72021C8.46984 3.72021 5.17984 5.80021 2.88984 9.40021C1.98984 10.8102 1.98984 13.1802 2.88984 14.5902C5.17984 18.1902 8.46984 20.2702 11.9998 20.2702Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.0303 22H13.9902C13.5702 22 13.2402 21.66 13.2402 21.25C13.2402 20.84 13.5802 20.5 13.9902 20.5H21.0303C21.4503 20.5 21.7803 20.84 21.7803 21.25C21.7803 21.66 21.4503 22 21.0303 22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.41 16.3401L10.66 21.0901C9.54997 22.2001 7.77002 22.2601 6.59002 21.2701C6.52002 21.2101 6.46002 21.1501 6.40002 21.0901L5.53003 20.2201L3.73999 18.4301L2.88 17.5701C2.81 17.5001 2.75 17.4301 2.69 17.3601C1.71 16.1801 1.78 14.4201 2.88 13.3201L6.57 9.64008L7.63 8.58008L15.41 16.3401Z" fill="currentColor" /><path d="M21.1208 10.6399L15.4108 16.3399L7.63086 8.57994L13.3409 2.87994C14.5109 1.70994 16.4308 1.70994 17.6008 2.87994L21.1208 6.38994C22.2908 7.55994 22.2908 9.46994 21.1208 10.6399Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconEye;