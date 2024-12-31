import { FC } from 'react';
import { IconProps } from "../../types";

const IconBubble: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5909 12.26C18.4242 12.26 20.7209 9.96323 20.7209 7.13C20.7209 4.29678 18.4242 2 15.5909 2C12.7577 2 10.4609 4.29678 10.4609 7.13C10.4609 9.96323 12.7577 12.26 15.5909 12.26Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /><path opacity={duotone ? "0.4" : "1"} d="M6.35928 19.4398C8.06032 19.4398 9.4393 18.0608 9.4393 16.3598C9.4393 14.6587 8.06032 13.2798 6.35928 13.2798C4.65825 13.2798 3.2793 14.6587 3.2793 16.3598C3.2793 18.0608 4.65825 19.4398 6.35928 19.4398Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /><path opacity={duotone ? "0.4" : "1"} d="M16.6205 21.9999C18.0344 21.9999 19.1805 20.8537 19.1805 19.4399C19.1805 18.026 18.0344 16.8799 16.6205 16.8799C15.2067 16.8799 14.0605 18.026 14.0605 19.4399C14.0605 20.8537 15.2067 21.9999 16.6205 21.9999Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 19.5V18H4.5C3.95 18 3.45 17.78 3.09 17.41C2.72 17.05 2.5 16.55 2.5 16C2.5 14.97 3.3 14.11 4.31 14.01C4.37 14 4.43 14 4.5 14H19.5C19.57 14 19.63 14 19.69 14.01C20.17 14.05 20.59 14.26 20.91 14.59C21.32 14.99 21.54 15.56 21.49 16.18C21.4 17.23 20.45 18 19.39 18H14.5V19.5C14.5 20.88 13.38 22 12 22C10.62 22 9.5 20.88 9.5 19.5Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.1702 5.3L19.6902 14.01C19.6302 14 19.5702 14 19.5002 14H4.50016C4.43016 14 4.37016 14 4.31016 14.01L3.83016 5.3C3.65016 3.53 5.04016 2 6.81016 2H17.1902C18.9602 2 20.3502 3.53 20.1702 5.3Z" fill="currentColor" /><path d="M8.74023 2V7C8.74023 7.41 8.40023 7.75 7.99023 7.75C7.58023 7.75 7.24023 7.41 7.24023 7V2H8.74023Z" fill="currentColor" /><path d="M12.75 2V4C12.75 4.41 12.41 4.75 12 4.75C11.59 4.75 11.25 4.41 11.25 4V2H12.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBubble;