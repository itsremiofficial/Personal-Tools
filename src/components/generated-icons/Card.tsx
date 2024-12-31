import { FC } from 'react';
import { IconProps } from "@/types";

const IconCard: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M2 8.50488H22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 16.5049H8" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.5 16.5049H14.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M6.44 3.50488H17.55C21.11 3.50488 22 4.38488 22 7.89488V16.1049C22 19.6149 21.11 20.4949 17.56 20.4949H6.44C2.89 20.5049 2 19.6249 2 16.1149V7.89488C2 4.38488 2.89 3.50488 6.44 3.50488Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 9V16.46C22 18.75 20.14 20.6 17.85 20.6H6.15C3.86 20.6 2 18.75 2 16.46V9H22Z" fill="currentColor" /><path d="M22 7.5399V8.9999H2V7.5399C2 5.2499 3.86 3.3999 6.15 3.3999H17.85C20.14 3.3999 22 5.2499 22 7.5399Z" fill="currentColor" /><path d="M8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25Z" fill="currentColor" /><path d="M14.5 17.25H10.5C10.09 17.25 9.75 16.91 9.75 16.5C9.75 16.09 10.09 15.75 10.5 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconCard;