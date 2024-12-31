import { FC } from 'react';
import { IconProps } from "../../types";

const IconDocumentCode2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 22H16C19.5 22 21 20 21 17V7C21 4 19.5 2 16 2H8C4.5 2 3 4 3 7V14" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M4 17L2 19L4 21" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7 17L9 19L7 21" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M2.34904 13.96C2.73904 14.52 3.42904 14.84 4.21904 14.84H8.31904C8.58904 14.84 8.83904 14.95 9.00904 15.15C9.18904 15.35 9.25904 15.63 9.21904 15.92L8.70904 19.2C8.48904 20.18 9.13904 21.28 10.119 21.61C11.029 21.95 12.099 21.49 12.529 20.84L16.739 14.57L16.859 14.37V5.53003L16.709 5.38003L13.539 2.93003C13.119 2.51003 12.169 2.28003 11.499 2.28003H7.59904C6.25904 2.28003 4.90904 3.29003 4.60904 4.52003L2.14904 12.01C1.89904 12.72 1.96904 13.42 2.34904 13.96Z" fill="currentColor" /><path d="M18.7894 17.6099H19.8194C21.3694 17.6099 21.9994 17.0099 21.9994 15.5299V5.4799C21.9994 3.9999 21.3694 3.3999 19.8194 3.3999H18.7894C17.2394 3.3999 16.6094 3.9999 16.6094 5.4799V15.5399C16.6094 17.0099 17.2394 17.6099 18.7894 17.6099Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconDocumentCode2;