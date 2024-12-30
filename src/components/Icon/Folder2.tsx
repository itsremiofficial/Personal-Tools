import { FC } from 'react';
import { IconProps } from "../../types";

const IconFolder2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /><path opacity={duotone ? "0.4" : "1"} d="M8 2H17C19 2 20 3 20 5V6.38" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.0005 3.66992V20.3299L11.2005 21.2399C10.0905 22.4999 9.1805 22.1599 9.1805 20.4799V13.2799H6.0905C4.6905 13.2799 4.3005 12.4199 5.2305 11.3699L12.0005 3.66992Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.77 12.6299L12 20.3299V3.6699L12.8 2.7599C13.91 1.4999 14.82 1.8399 14.82 3.5199V10.7199H17.91C19.31 10.7199 19.7 11.5799 18.77 12.6299Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconFolder2;