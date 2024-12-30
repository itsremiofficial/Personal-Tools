import { FC } from 'react';
import { IconProps } from "../../types";

const IconCloudAdd: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M5.5393 11.1201C0.859297 11.4501 0.859297 18.2601 5.5393 18.5901H7.45934" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.59003 11.1201C2.38003 2.19014 15.92 -1.37985 17.47 8.00015C21.8 8.55015 23.55 14.3201 20.27 17.1901C19.27 18.1001 17.98 18.6001 16.63 18.5901H16.54" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M17 16.5298C17 17.2698 16.84 17.9698 16.54 18.5898C16.46 18.7698 16.37 18.9398 16.27 19.0998C15.41 20.5498 13.82 21.5298 12 21.5298C10.18 21.5298 8.58998 20.5498 7.72998 19.0998C7.62998 18.9398 7.54002 18.7698 7.46002 18.5898C7.16002 17.9698 7 17.2698 7 16.5298C7 13.7698 9.24 11.5298 12 11.5298C14.76 11.5298 17 13.7698 17 16.5298Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.4404 16.5298L11.4304 17.5198L13.5604 15.5498" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path d="M15.7106 15.93C15.5806 15.93 15.4506 15.9 15.3306 15.82L12.2306 13.97C11.4606 13.51 10.8906 12.5 10.8906 11.61V7.51001C10.8906 7.10001 11.2306 6.76001 11.6406 6.76001C12.0506 6.76001 12.3906 7.10001 12.3906 7.51001V11.61C12.3906 11.97 12.6906 12.5 13.0006 12.68L16.1006 14.53C16.4606 14.74 16.5706 15.2 16.3606 15.56C16.2106 15.8 15.9606 15.93 15.7106 15.93Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconCloudAdd;