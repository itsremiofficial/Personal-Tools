import { FC } from 'react';
import { IconProps } from "../../types";

const IconReceived: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 17.5L19 3.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 7.22998V17.5H15.27" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M3.5 22H20.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8.90024 16.5299C9.38024 16.0099 10.1203 16.0499 10.5403 16.6199L11.1403 17.4199C11.6103 18.0499 12.3902 18.0499 12.8602 17.4199L13.4503 16.6299C13.8703 16.0699 14.6102 16.0299 15.0902 16.5399C16.1402 17.6599 16.9902 17.2899 16.9902 15.7199V9.08988C16.9902 6.71988 16.4302 6.12988 14.2102 6.12988H9.77023C7.55023 6.12988 6.99023 6.71988 6.99023 9.08988V15.7199C7.00023 17.2699 7.86024 17.6399 8.90024 16.5299Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconReceived;