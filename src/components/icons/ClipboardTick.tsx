import { FC } from 'react';
import { IconProps } from "../../types";

const IconClipboardTick: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M9.31055 14.7002L10.8105 16.2002L14.8105 12.2002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 4.02002C19.33 4.20002 21 5.43002 21 10V16C21 20 20 22 15 22H9C4 22 3 20 3 16V10C3 5.44002 4.67 4.20002 8 4.02002" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.2391 3.6499H7.75906C5.28906 3.6499 3.28906 5.6599 3.28906 8.1199V17.5299C3.28906 19.9899 5.29906 21.9999 7.75906 21.9999H16.2291C18.6991 21.9999 20.6991 19.9899 20.6991 17.5299V8.1199C20.7091 5.6499 18.6991 3.6499 16.2391 3.6499Z" fill="currentColor" /><path d="M14.3498 2H9.64977C8.60977 2 7.75977 2.84 7.75977 3.88V4.82C7.75977 5.86 8.59977 6.7 9.63977 6.7H14.3498C15.3898 6.7 16.2298 5.86 16.2298 4.82V3.88C16.2398 2.84 15.3898 2 14.3498 2Z" fill="currentColor" /><path d="M14.5295 15.6199L13.0795 14.1699L14.4795 12.7699C14.7695 12.4799 14.7695 11.9999 14.4795 11.7099C14.1895 11.4199 13.7095 11.4199 13.4195 11.7099L12.0195 13.1099L10.5695 11.6599C10.2795 11.3699 9.79945 11.3699 9.50945 11.6599C9.21945 11.9499 9.21945 12.4299 9.50945 12.7199L10.9595 14.1699L9.46945 15.6599C9.17945 15.9499 9.17945 16.4299 9.46945 16.7199C9.61945 16.8699 9.80945 16.9399 9.99945 16.9399C10.1895 16.9399 10.3795 16.8699 10.5295 16.7199L12.0195 15.2299L13.4695 16.6799C13.6195 16.8299 13.8095 16.8999 13.9995 16.8999C14.1895 16.8999 14.3795 16.8299 14.5295 16.6799C14.8195 16.3899 14.8195 15.9199 14.5295 15.6199Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconClipboardTick;