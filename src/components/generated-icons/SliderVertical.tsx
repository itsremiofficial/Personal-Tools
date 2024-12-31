import { FC } from 'react';
import { IconProps } from "@/types";

const IconSliderVertical: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 6H17C17.62 6 18.17 6.02 18.66 6.09C21.29 6.38 22 7.62 22 11V13C22 16.38 21.29 17.62 18.66 17.91C18.17 17.98 17.62 18 17 18H7C6.38 18 5.83 17.98 5.34 17.91C2.71 17.62 2 16.38 2 13V11C2 7.62 2.71 6.38 5.34 6.09C5.83 6.02 6.38 6 7 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.0001 18.0002C17.6201 18.0002 18.1701 17.9802 18.6601 17.9102C18.6701 18.0502 18.6701 18.1802 18.6701 18.3302V18.6702C18.6701 21.3302 18.0001 22.0002 15.3301 22.0002H8.67008C6.00008 22.0002 5.33008 21.3302 5.33008 18.6702V18.3302C5.33008 18.1802 5.33008 18.0502 5.34008 17.9102C5.83008 17.9802 6.38008 18.0002 7.00008 18.0002H17.0001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.67008 2H15.3301C18.0001 2 18.6701 2.67 18.6701 5.33V5.67C18.6701 5.82 18.6701 5.95 18.6601 6.09C18.1701 6.02 17.6201 6 17.0001 6H7.00008C6.38008 6 5.83008 6.02 5.34008 6.09C5.33008 5.95 5.33008 5.82 5.33008 5.67V5.33C5.33008 2.67 6.00008 2 8.67008 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18.9405 3.5H5.06055C4.65055 3.5 4.31055 3.16 4.31055 2.75C4.31055 2.34 4.65055 2 5.06055 2H18.9405C19.3505 2 19.6905 2.34 19.6905 2.75C19.6905 3.16 19.3505 3.5 18.9405 3.5Z" fill="currentColor" /><path d="M18.9405 22H5.06055C4.65055 22 4.31055 21.66 4.31055 21.25C4.31055 20.84 4.65055 20.5 5.06055 20.5H18.9405C19.3505 20.5 19.6905 20.84 19.6905 21.25C19.6905 21.66 19.3505 22 18.9405 22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M2.75 7.6001V16.4001C2.75 18.0601 4.09 19.4001 5.75 19.4001H18.25C19.91 19.4001 21.25 18.0601 21.25 16.4001V7.6001C21.25 5.9401 19.91 4.6001 18.25 4.6001H5.75C4.09 4.6001 2.75 5.9401 2.75 7.6001Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSliderVertical;