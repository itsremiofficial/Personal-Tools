import { FC } from 'react';
import { IconProps } from "../../types";

const IconPrinterSlash: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M7.25 7H16.75V5C16.75 3 16 2 13.75 2H10.25C8 2 7.25 3 7.25 5V7Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.9703 15H16.0003V19C16.0003 21 15.0003 22 13.0003 22H11.0003C9.31031 22 8.33031 21.29 8.07031 19.86" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 18C4 18 3 17 3 15V10C3 8 4 7 6 7H16.59" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.97 7.52002C20.66 8.00002 21 8.83002 21 10V15C21 17 20 18 18 18H16V15H13" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M17 15H15.79" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7 11H9" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 2L2 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.2409 7.22005V16.7901C20.2409 18.7501 18.111 19.98 16.411 19L12.261 16.61L8.11094 14.21C6.41094 13.23 6.41094 10.78 8.11094 9.80004L12.261 7.40004L16.411 5.01006C18.111 4.03006 20.2409 5.25005 20.2409 7.22005Z" fill="currentColor" /><path d="M3.75977 18.9298C3.34977 18.9298 3.00977 18.5898 3.00977 18.1798V5.81982C3.00977 5.40982 3.34977 5.06982 3.75977 5.06982C4.16977 5.06982 4.50977 5.40982 4.50977 5.81982V18.1798C4.50977 18.5898 4.16977 18.9298 3.75977 18.9298Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconPrinterSlash;