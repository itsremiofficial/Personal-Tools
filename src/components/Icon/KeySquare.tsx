import { FC } from 'react';
import { IconProps } from "../../types";

const IconLamp: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.78962 14.69H18.2096C19.8696 14.69 20.8696 13.38 20.4396 11.78L18.2396 3.71C17.9796 2.77 16.9696 2 16.0096 2H7.98962C7.02962 2 6.01962 2.77 5.76962 3.7L3.56962 11.77C3.12962 13.38 4.12962 14.69 5.78962 14.69Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M12 15V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 22H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17 22.75H7C6.59 22.75 6.25 22.41 6.25 22C6.25 21.59 6.59 21.25 7 21.25H17C17.41 21.25 17.75 21.59 17.75 22C17.75 22.41 17.41 22.75 17 22.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18 19H6C3.79 19 2 17.21 2 15V6C2 3.79 3.79 2 6 2H18C20.21 2 22 3.79 22 6V15C22 17.21 20.21 19 18 19Z" fill="currentColor" /><path d="M17.2601 9.07007H13.5801C13.1701 9.07007 12.8301 8.73007 12.8301 8.32007C12.8301 7.91007 13.1701 7.57007 13.5801 7.57007H17.2601C17.6701 7.57007 18.0101 7.91007 18.0101 8.32007C18.0101 8.73007 17.6801 9.07007 17.2601 9.07007Z" fill="currentColor" /><path d="M10 9.32007C9.45 9.32007 9 8.87007 9 8.32007C9 7.77007 9.44 7.32007 10 7.32007C10.55 7.32007 11 7.77007 11 8.32007C11 8.87007 10.56 9.32007 10 9.32007Z" fill="currentColor" /><path d="M6.84961 9.32007C6.29961 9.32007 5.84961 8.87007 5.84961 8.32007C5.84961 7.77007 6.28961 7.32007 6.84961 7.32007H6.8596C7.4096 7.32007 7.8596 7.77007 7.8596 8.32007C7.8596 8.87007 7.39961 9.32007 6.84961 9.32007Z" fill="currentColor" /><path d="M17.2602 14.8599H6.75023C6.34023 14.8599 5.99023 14.5199 5.99023 14.1099C5.99023 13.6999 6.32022 13.3599 6.73022 13.3599H17.2602C17.6702 13.3599 18.0102 13.6999 18.0102 14.1099C18.0102 14.5199 17.6802 14.8599 17.2602 14.8599Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconLamp;