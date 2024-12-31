import { FC } from 'react';
import { IconProps } from "@/types";

const IconArrowBottom: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0005 6H14.6705C17.9805 6 19.3405 8.35 17.6805 11.22L16.3405 13.53L15.0005 15.84C13.3405 18.71 10.6305 18.71 8.97054 15.84L7.63054 13.53L6.29054 11.22C4.66054 8.35 6.01054 6 9.33054 6H12.0005Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.32919 6H14.6692C17.9892 6 19.3392 8.35 17.6892 11.22L16.9492 12.5C16.7692 12.81 16.4392 13 16.0792 13H7.91919C7.55919 13 7.22919 12.81 7.04919 12.5L6.30919 11.22C4.65919 8.35 6.00919 6 9.32919 6Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M8.78957 14H15.2196C15.6096 14 15.8496 14.42 15.6496 14.75L15.0096 15.85C13.3596 18.72 10.6396 18.72 8.98957 15.85L8.34957 14.75C8.15957 14.42 8.39957 14 8.78957 14Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconArrowBottom;