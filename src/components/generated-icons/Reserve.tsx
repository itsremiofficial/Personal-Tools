import { FC } from 'react';
import { IconProps } from "@/types";

const IconReserve: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9707 22H4.9707C1.9707 22 1.9707 20.65 1.9707 19V18C1.9707 17.45 2.4207 17 2.9707 17H20.9707C21.5207 17 21.9707 17.45 21.9707 18V19C21.9707 20.65 21.9707 22 18.9707 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20.7195 13V17H3.26953V13C3.26953 9.16 5.97953 5.95 9.58953 5.18C10.1295 5.06 10.6895 5 11.2695 5H12.7195C13.2995 5 13.8695 5.06 14.4095 5.18C18.0195 5.96 20.7195 9.16 20.7195 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M14.5 4.5C14.5 4.74 14.47 4.96 14.41 5.18C13.87 5.06 13.3 5 12.72 5H11.27C10.69 5 10.13 5.06 9.59 5.18C9.53 4.96 9.5 4.74 9.5 4.5C9.5 3.12 10.62 2 12 2C13.38 2 14.5 3.12 14.5 4.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M15 11H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.9707 18V19C21.9707 20.65 21.9707 22 18.9707 22H4.9707C1.9707 22 1.9707 20.65 1.9707 19V18C1.9707 17.45 2.4207 17 2.9707 17H20.9707C21.5207 17 21.9707 17.45 21.9707 18Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.7195 13V17H3.26953V13C3.26953 9.16 5.97953 5.95 9.58953 5.18C10.1295 5.06 10.6895 5 11.2695 5H12.7195C13.2995 5 13.8695 5.06 14.4095 5.18C18.0195 5.96 20.7195 9.16 20.7195 13Z" fill="currentColor" /><path d="M14.5 4.5C14.5 4.74 14.47 4.96 14.41 5.18C13.87 5.06 13.3 5 12.72 5H11.27C10.69 5 10.13 5.06 9.59 5.18C9.53 4.96 9.5 4.74 9.5 4.5C9.5 3.12 10.62 2 12 2C13.38 2 14.5 3.12 14.5 4.5Z" fill="currentColor" /><path d="M15 11.75H9C8.59 11.75 8.25 11.41 8.25 11C8.25 10.59 8.59 10.25 9 10.25H15C15.41 10.25 15.75 10.59 15.75 11C15.75 11.41 15.41 11.75 15 11.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconReserve;