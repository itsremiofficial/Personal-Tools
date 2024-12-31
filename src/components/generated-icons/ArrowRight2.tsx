import { FC } from 'react';
import { IconProps } from "@/types";

const IconArrowRight2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.54" : "1"}><path d="M8.5 12H14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.5 15L15.5 12L12.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M18.53 11.4699L14.24 7.1799C13.95 6.8899 13.47 6.8899 13.18 7.1799C12.89 7.4699 12.89 7.9499 13.18 8.2399L16.19 11.2499H6C5.59 11.2499 5.25 11.5899 5.25 11.9999C5.25 12.4099 5.59 12.7499 6 12.7499H16.19L13.18 15.7599C12.89 16.0499 12.89 16.5299 13.18 16.8199C13.33 16.9699 13.52 17.0399 13.71 17.0399C13.9 17.0399 14.09 16.9699 14.24 16.8199L18.53 12.5299C18.67 12.3899 18.75 12.1999 18.75 11.9999C18.75 11.7999 18.67 11.6099 18.53 11.4699Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconArrowRight2;