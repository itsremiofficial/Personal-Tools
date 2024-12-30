import { FC } from 'react';
import { IconProps } from "../../types";

const IconBatteryEmpty1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 19H7C3 19 2 18 2 14V10C2 6 3 5 7 5H13C17 5 18 6 18 10V14C18 18 17 19 13 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M20.5 9.5C22 9.5 22 10 22 11V13C22 14 22 14.5 20.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M6.38086 10C6.71086 11.31 6.71086 12.69 6.38086 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.93 4.79004H7.35C3.25 4.79004 2 6.04004 2 10.14V13.86C2 17.96 3.25 19.21 7.35 19.21H12.93C17.03 19.21 18.28 17.96 18.28 13.86V10.14C18.28 6.04004 17.03 4.79004 12.93 4.79004Z" fill="currentColor" /><path d="M20.4192 8.99998C20.2792 8.98998 20.0992 8.97998 19.8992 8.97998C19.5092 8.97998 19.1992 9.28998 19.1992 9.67998V14.33C19.1992 14.72 19.5092 15.03 19.8992 15.03C20.0992 15.03 20.2692 15.02 20.4392 15.01C21.9992 14.83 21.9992 13.73 21.9992 12.93V11.07C21.9992 10.27 21.9992 9.16998 20.4192 8.99998Z" fill="currentColor" /><path d="M10.0097 16.24C9.83969 16.24 9.65969 16.18 9.51969 16.06C9.20969 15.79 9.16969 15.32 9.43969 15L11.2397 12.89C11.2497 12.86 11.2397 12.83 11.2197 12.8C11.1997 12.76 11.1597 12.74 11.1097 12.74H9.11969C8.52969 12.74 8.00969 12.44 7.70969 11.93C7.41969 11.42 7.41969 10.82 7.70969 10.31L9.41969 8.05003C9.66969 7.72003 10.1397 7.65003 10.4697 7.90003C10.7997 8.15003 10.8697 8.62003 10.6197 8.95003L8.96969 11.14C8.99969 11.1 8.99969 11.14 9.01969 11.19C9.03969 11.23 9.07969 11.25 9.12969 11.25H11.1397C11.7297 11.25 12.2497 11.55 12.5497 12.06C12.8397 12.57 12.8397 13.17 12.5497 13.68C12.5297 13.72 12.4997 13.76 12.4697 13.79L10.5997 15.98C10.4397 16.16 10.2297 16.24 10.0097 16.24Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBatteryEmpty1;