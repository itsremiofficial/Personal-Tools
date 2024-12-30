import { FC } from 'react';
import { IconProps } from "../../types";

const IconBox: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M3.16992 7.43994L11.9999 12.5499L20.7699 7.46991" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 21.61V12.54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.9306 2.48L4.59061 5.45003C3.38061 6.12003 2.39062 7.80001 2.39062 9.18001V14.83C2.39062 16.21 3.38061 17.89 4.59061 18.56L9.9306 21.53C11.0706 22.16 12.9406 22.16 14.0806 21.53L19.4206 18.56C20.6306 17.89 21.6206 16.21 21.6206 14.83V9.18001C21.6206 7.80001 20.6306 6.12003 19.4206 5.45003L14.0806 2.48C12.9306 1.84 11.0706 1.84 9.9306 2.48Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M16.9998 13.2401V9.58014L7.50977 4.1001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17 4.96V12.08C17 14.07 15.59 14.84 13.86 13.8L12.54 13C12.24 12.82 11.76 12.82 11.46 13L10.14 13.8C8.41 14.84 7 14.07 7 12.08V4.99C7.01 3 8.01 2 10 2H14C15.98 2 16.98 2.99 17 4.96Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22 11.9V14.93C22 19.98 20 22 15 22H9C4 22 2 19.98 2 14.93V11.9C2 7.65996 3.41 5.55996 6.82 4.98996H7V12.08C7 14.07 8.41 14.84 10.14 13.8L11.46 13C11.76 12.82 12.24 12.82 12.54 13L13.86 13.8C15.59 14.84 17 14.07 17 12.08V4.95996C20.54 5.47996 22 7.58996 22 11.9Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBox;