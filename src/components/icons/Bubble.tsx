import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBubble: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5909 12.26C18.4242 12.26 20.7209 9.96323 20.7209 7.13C20.7209 4.29678 18.4242 2 15.5909 2C12.7577 2 10.4609 4.29678 10.4609 7.13C10.4609 9.96323 12.7577 12.26 15.5909 12.26Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /><path opacity={duotone ? "0.4" : "1"} d="M6.35928 19.4398C8.06032 19.4398 9.4393 18.0608 9.4393 16.3598C9.4393 14.6587 8.06032 13.2798 6.35928 13.2798C4.65825 13.2798 3.2793 14.6587 3.2793 16.3598C3.2793 18.0608 4.65825 19.4398 6.35928 19.4398Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /><path opacity={duotone ? "0.4" : "1"} d="M16.6205 21.9999C18.0344 21.9999 19.1805 20.8537 19.1805 19.4399C19.1805 18.026 18.0344 16.8799 16.6205 16.8799C15.2067 16.8799 14.0605 18.026 14.0605 19.4399C14.0605 20.8537 15.2067 21.9999 16.6205 21.9999Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.5909 1.75C12.6209 1.75 10.2109 4.16 10.2109 7.13C10.2109 10.1 12.6209 12.51 15.5909 12.51C18.5609 12.51 20.9709 10.1 20.9709 7.13C20.9709 4.16 18.5609 1.75 15.5909 1.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M6.35928 13.03C4.52928 13.03 3.0293 14.52 3.0293 16.36C3.0293 18.2 4.51928 19.69 6.35928 19.69C8.18928 19.69 9.6893 18.2 9.6893 16.36C9.6893 14.52 8.18928 13.03 6.35928 13.03Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.6205 16.6201C15.0705 16.6201 13.8105 17.8801 13.8105 19.4301C13.8105 20.9801 15.0705 22.2401 16.6205 22.2401C18.1705 22.2401 19.4305 20.9801 19.4305 19.4301C19.4305 17.8801 18.1705 16.6201 16.6205 16.6201Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBubble as IconComponentType).keywords = [
  "bubble",
  "guggle",
  "ripple",
  "burble",
  "gurgle",
  "belch",
  "burp",
  "eruct",
  "babble",
  "foam"
];

export default IconBubble as IconComponentType;