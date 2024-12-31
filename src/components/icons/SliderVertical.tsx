import { FC } from 'react';
import { IconProps } from "../../types";

const IconSliderVertical1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 5H16.5C17.12 5 17.67 5.02 18.16 5.09C20.79 5.38 21.5 6.62 21.5 10V14C21.5 17.38 20.79 18.62 18.16 18.91C17.67 18.98 17.12 19 16.5 19H7.5C6.88 19 6.33 18.98 5.84 18.91C3.21 18.62 2.5 17.38 2.5 14V10C2.5 6.62 3.21 5.38 5.84 5.09C6.33 5.02 6.88 5 7.5 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M4.5 2H19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5 22H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M15 2H9C7.34 2 6 3.34 6 5V19C6 20.66 7.34 22 9 22H15C16.66 22 18 20.66 18 19V5C18 3.34 16.66 2 15 2Z" fill="currentColor" /><path d="M18.6705 5.33008H18.3305C18.2105 5.33008 18.1005 5.33008 17.9805 5.34008C17.9905 5.39008 18.0005 5.44008 18.0005 5.50008V7.00008V17.0001V18.5001C18.0005 18.5601 17.9905 18.6101 17.9805 18.6601C18.0905 18.6701 18.2005 18.6701 18.3305 18.6701H18.6705C21.3305 18.6701 22.0005 18.0001 22.0005 15.3301V8.67008C22.0005 6.00008 21.3305 5.33008 18.6705 5.33008Z" fill="currentColor" /><path d="M6 18.5001V17.0001V7.00008V5.50008C6 5.44008 6.01 5.39008 6.02 5.34008C5.9 5.33008 5.79 5.33008 5.67 5.33008H5.33C2.67 5.33008 2 6.00008 2 8.67008V15.3301C2 18.0001 2.67 18.6701 5.33 18.6701H5.67C5.79 18.6701 5.9 18.6701 6.02 18.6601C6.01 18.6101 6 18.5601 6 18.5001Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSliderVertical1;