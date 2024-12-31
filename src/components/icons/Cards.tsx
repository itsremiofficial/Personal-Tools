import { FC } from 'react';
import { IconProps } from "../../types";

const IconCards: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12.6099H19" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M19 10.2798V17.4298C18.97 20.2798 18.19 20.9998 15.22 20.9998H5.78003C2.76003 20.9998 2 20.2498 2 17.2698V10.2798C2 7.5798 2.63 6.70981 5 6.56981C5.24 6.55981 5.50003 6.5498 5.78003 6.5498H15.22C18.24 6.5498 19 7.2998 19 10.2798Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22 6.73V13.72C22 16.42 21.37 17.29 19 17.43V10.28C19 7.3 18.24 6.55 15.22 6.55H5.78003C5.50003 6.55 5.24 6.56 5 6.57C5.03 3.72 5.81003 3 8.78003 3H18.22C21.24 3 22 3.75 22 6.73Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5.25 17.8101H6.96997" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.10938 17.8101H12.5494" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 22H2.75C2.34 22 2 21.66 2 21.25C2 20.84 2.34 20.5 2.75 20.5H21.25C21.66 20.5 22 20.84 22 21.25C22 21.66 21.66 22 21.25 22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.5909 13.7002L13.3609 20.9302C11.9409 22.3502 9.65086 22.3502 8.24086 20.9402L3.63086 16.3302L15.9909 3.97021L20.6009 8.58021C22.0109 9.99021 22.0109 12.2802 20.5909 13.7002Z" fill="currentColor" /><path d="M15.9906 3.97016L3.62055 16.3302L2.71055 15.4202C1.30055 14.0102 1.30055 11.7202 2.72055 10.3002L9.95055 3.07016C11.3706 1.65016 13.6606 1.65016 15.0705 3.06016L15.9906 3.97016Z" fill="currentColor" /><path d="M12.8903 17.5999L11.5403 18.9499C11.2603 19.2299 10.8103 19.2299 10.5303 18.9499C10.2503 18.6699 10.2503 18.2199 10.5303 17.9399L11.8803 16.5899C12.1603 16.3099 12.6103 16.3099 12.8903 16.5899C13.1703 16.8699 13.1703 17.3199 12.8903 17.5999Z" fill="currentColor" /><path d="M17.2694 13.22L14.5794 15.91C14.2994 16.19 13.8494 16.19 13.5694 15.91C13.2894 15.63 13.2894 15.18 13.5694 14.9L16.2594 12.21C16.5394 11.93 16.9894 11.93 17.2694 12.21C17.5394 12.49 17.5394 12.94 17.2694 13.22Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconCards;