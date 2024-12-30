import { FC } from 'react';
import { IconProps } from "../../types";

const IconXd: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.9599 8.47021V15.5302H16.1899C15.2099 15.5302 14.4199 14.7402 14.4199 13.7602C14.4199 12.7802 15.2099 11.9902 16.1899 11.9902H17.9599" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M6.04004 8.46973L11.69 15.5297" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.69 8.46973L6.04004 15.5297" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19 9C19 12.62 16.26 15.59 12.75 15.96C12.5 15.99 12.25 16 12 16C11.75 16 11.5 15.99 11.25 15.96C7.74 15.59 5 12.62 5 9C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9Z" fill="currentColor" /><path d="M15.75 19C15.75 19.41 15.41 19.75 15 19.75H12.75V22C12.75 22.41 12.41 22.75 12 22.75C11.59 22.75 11.25 22.41 11.25 22V19.75H9C8.59 19.75 8.25 19.41 8.25 19C8.25 18.59 8.59 18.25 9 18.25H11.25V15.96C11.5 15.99 11.75 16 12 16C12.25 16 12.5 15.99 12.75 15.96V18.25H15C15.41 18.25 15.75 18.59 15.75 19Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconXd;