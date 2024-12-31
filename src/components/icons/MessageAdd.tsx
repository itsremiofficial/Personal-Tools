import { FC } from 'react';
import { IconProps } from "../../types";

const IconMessageFavorite: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H12" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.1997 4.62008C14.8697 3.63008 15.2597 2.41008 16.3397 2.07008C16.8997 1.90008 17.5997 2.04008 17.9997 2.57008C18.3797 2.02008 19.0997 1.90008 19.6597 2.07008C20.7397 2.40008 21.1297 3.63008 20.7997 4.62008C20.2897 6.19008 18.4997 7.00008 17.9997 7.00008C17.4997 7.00008 15.7297 6.20008 15.1997 4.62008Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.9965 11H16.0054" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.9945 11H12.0035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.99451 11H8.00349" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M7 18.4302H11L15.45 21.3902C16.11 21.8302 17 21.3602 17 20.5602V18.4302C20 18.4302 22 16.4302 22 13.4302V7.43018C22 4.43018 20 2.43018 17 2.43018H7C4 2.43018 2 4.43018 2 7.43018V13.4302C2 16.4302 4 18.4302 7 18.4302Z" fill="currentColor" /><path d="M15.5 11.25H8.5C8.09 11.25 7.75 10.91 7.75 10.5C7.75 10.09 8.09 9.75 8.5 9.75H15.5C15.91 9.75 16.25 10.09 16.25 10.5C16.25 10.91 15.91 11.25 15.5 11.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMessageFavorite;