import { FC } from 'react';
import { IconProps } from "../../types";

const IconDirectboxSend: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M12 8V2L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 2L14 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M7 12C3 12 3 13.79 3 16V17C3 19.76 3 22 8 22H16C20 22 21 19.76 21 17V16C21 13.79 21 12 17 12C16 12 15.72 12.21 15.2 12.6L14.18 13.68C13 14.94 11 14.94 9.81 13.68L8.8 12.6C8.28 12.21 8 12 7 12Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5 12V10C5 7.99004 5 6.33004 8 6.04004" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M19 12V10C19 7.99004 19 6.33004 16 6.04004" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.2105 13.24L14.3604 20.78C13.0604 22.21 10.9404 22.21 9.64044 20.78L2.79044 13.24C2.02044 12.39 1.77044 10.85 2.23044 9.8L3.03044 8H20.9704L21.7705 9.8C22.2304 10.85 21.9805 12.39 21.2105 13.24Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.9693 7.9999H3.0293L4.78929 4.0399C5.25929 2.9999 5.99929 2.1499 7.6993 2.1499H16.2993C17.9993 2.1499 18.7393 2.9999 19.2093 4.0399L20.9693 7.9999Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconDirectboxSend;