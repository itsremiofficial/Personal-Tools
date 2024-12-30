import { FC } from 'react';
import { IconProps } from "../../types";

const IconArrowCircleDown: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.4707 10.7402L12.0007 14.2602L15.5307 10.7402" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.32919 6H14.6692C17.9892 6 19.3392 8.35 17.6892 11.22L16.9492 12.5C16.7692 12.81 16.4392 13 16.0792 13H7.91919C7.55919 13 7.22919 12.81 7.04919 12.5L6.30919 11.22C4.65919 8.35 6.00919 6 9.32919 6Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M8.78957 14H15.2196C15.6096 14 15.8496 14.42 15.6496 14.75L15.0096 15.85C13.3596 18.72 10.6396 18.72 8.98957 15.85L8.34957 14.75C8.15957 14.42 8.39957 14 8.78957 14Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconArrowCircleDown;