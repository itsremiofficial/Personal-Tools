import { FC } from 'react';
import { IconProps } from "../../types";

const IconProgrammingArrows: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 22C20.6569 22 22 20.6569 22 19C22 17.3431 20.6569 16 19 16C17.3431 16 16 17.3431 16 19C16 20.6569 17.3431 22 19 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M19 16V6.5C19 5.4 18.1 4.5 17 4.5H11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14 2L11 4.5L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 8V17.5C5 18.6 5.9 19.5 7 19.5H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10 22L13 19.5L10 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M5 8C6.65685 8 8 6.65685 8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5C2 6.65685 3.34315 8 5 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17.0809 14.1599C14.2909 12.2999 9.74094 12.2999 6.93094 14.1599C5.66094 14.9999 4.96094 16.1499 4.96094 17.3799C4.96094 18.6099 5.66094 19.7499 6.92094 20.5899C8.32094 21.5299 10.1609 21.9999 12.0009 21.9999C13.8409 21.9999 15.6809 21.5299 17.0809 20.5899C18.3409 19.7399 19.0409 18.5999 19.0409 17.3599C19.0309 16.1399 18.3409 14.9899 17.0809 14.1599Z" fill="currentColor" /><path d="M11.3702 19.26C11.2102 19.26 11.0502 19.19 10.9302 19.08L9.67023 17.82C9.43023 17.58 9.43023 17.18 9.67023 16.94C9.91023 16.7 10.3102 16.7 10.5502 16.94L11.3702 17.76L13.4502 15.68C13.6902 15.44 14.0902 15.44 14.3302 15.68C14.5702 15.92 14.5702 16.32 14.3302 16.56L11.8102 19.08C11.6902 19.2 11.5302 19.26 11.3702 19.26Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconProgrammingArrows;