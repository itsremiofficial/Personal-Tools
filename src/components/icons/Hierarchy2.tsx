import { FC } from 'react';
import { IconProps } from "../../types";

const IconHierarchy2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.25 22C7.04493 22 8.5 20.5449 8.5 18.75C8.5 16.9551 7.04493 15.5 5.25 15.5C3.45507 15.5 2 16.9551 2 18.75C2 20.5449 3.45507 22 5.25 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 8C6.65685 8 8 6.65685 8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5C2 6.65685 3.34315 8 5 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M5 15V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.12891 15C5.57891 13.25 7.1789 11.95 9.0689 11.96L12.4989 11.97C15.1189 11.98 17.3489 10.3 18.1689 7.95996" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.44 3.1001C14.63 3.1001 13.01 3.98008 12 5.33008C10.99 3.98008 9.37 3.1001 7.56 3.1001C4.49 3.1001 2 5.60009 2 8.69009C2 9.88009 2.19 10.9801 2.52 12.0001C4.1 17.0001 8.97 19.9901 11.38 20.8101C11.72 20.9301 12.28 20.9301 12.62 20.8101C15.03 19.9901 19.9 17.0001 21.48 12.0001C21.81 10.9801 22 9.88009 22 8.69009C22 5.60009 19.51 3.1001 16.44 3.1001Z" fill="currentColor" /><path d="M14.8392 9.16C13.9392 8.26 13.2292 8.55 12.6192 9.16L9.07921 12.7C8.93921 12.84 8.80921 13.1 8.77921 13.29L8.58921 14.64C8.51921 15.13 8.85921 15.47 9.34921 15.4L10.6992 15.21C10.8892 15.18 11.1592 15.05 11.2892 14.91L14.8292 11.37C15.4492 10.77 15.7392 10.06 14.8392 9.16Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconHierarchy2;