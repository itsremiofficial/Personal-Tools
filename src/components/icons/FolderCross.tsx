import { FC } from 'react';
import { IconProps } from "../../types";

const IconFolderCross: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M13.8095 15.7304L10.2695 12.1904" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.7705 12.2305L10.2305 15.7705" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M14.8205 3.5199V9.1799L9.1805 14.8199V13.2799H6.0905C4.6905 13.2799 4.3005 12.4199 5.2305 11.3699L12.0005 3.6699L12.8005 2.7599C13.9105 1.4999 14.8205 1.8399 14.8205 3.5199Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.7697 12.63L11.9997 20.33L11.1997 21.24C10.0897 22.5 9.17969 22.16 9.17969 20.48V17.82L16.2797 10.72H17.9097C19.3097 10.72 19.6997 11.58 18.7697 12.63Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconFolderCross;