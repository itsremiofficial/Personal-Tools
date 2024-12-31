import { FC } from 'react';
import { IconProps } from "../../types";

const IconBatteryFull: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.34" : "1"} d="M20.5 9.5C22 9.5 22 10 22 11V13C22 14 22 14.5 20.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M6.38086 10C6.71086 11.31 6.71086 12.69 6.38086 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M9.88086 10C10.2109 11.31 10.2109 12.69 9.88086 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M13.3809 10C13.7109 11.31 13.7109 12.69 13.3809 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M13 19H7C3 19 2 18 2 14V10C2 6 3 5 7 5H13C17 5 18 6 18 10V14C18 18 17 19 13 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.4192 8.99998C20.2792 8.98998 20.0992 8.97998 19.8992 8.97998C19.5092 8.97998 19.1992 9.28998 19.1992 9.67998V14.33C19.1992 14.72 19.5092 15.03 19.8992 15.03C20.0992 15.03 20.2692 15.02 20.4392 15.01C21.9992 14.83 21.9992 13.73 21.9992 12.93V11.07C21.9992 10.27 21.9992 9.16998 20.4192 8.99998Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M14.5 4.87004L5.52 19.09C2.87 18.71 2 17.27 2 13.86V10.14C2 6.04004 3.25 4.79004 7.35 4.79004H12.93C13.51 4.79004 14.03 4.81004 14.5 4.87004Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.2792 10.1401V13.8601C18.2792 16.8101 15.8792 19.2101 12.9292 19.2101H7.44922L16.2292 5.31006C17.7492 6.00006 18.2792 7.46006 18.2792 10.1401Z" fill="currentColor" /><path d="M4.00088 22.2501C3.86088 22.2501 3.72088 22.2101 3.60088 22.1301C3.25088 21.9101 3.14088 21.4501 3.37088 21.1001L15.3709 2.10012C15.5909 1.75012 16.0609 1.65012 16.4009 1.87012C16.7509 2.09012 16.8609 2.55012 16.6309 2.90012L4.63088 21.9001C4.49088 22.1301 4.25088 22.2501 4.00088 22.2501Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBatteryFull;