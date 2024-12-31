import { FC } from 'react';
import { IconProps } from "../../types";

const IconSliderVertical: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 6H17C17.62 6 18.17 6.02 18.66 6.09C21.29 6.38 22 7.62 22 11V13C22 16.38 21.29 17.62 18.66 17.91C18.17 17.98 17.62 18 17 18H7C6.38 18 5.83 17.98 5.34 17.91C2.71 17.62 2 16.38 2 13V11C2 7.62 2.71 6.38 5.34 6.09C5.83 6.02 6.38 6 7 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.0001 18.0002C17.6201 18.0002 18.1701 17.9802 18.6601 17.9102C18.6701 18.0502 18.6701 18.1802 18.6701 18.3302V18.6702C18.6701 21.3302 18.0001 22.0002 15.3301 22.0002H8.67008C6.00008 22.0002 5.33008 21.3302 5.33008 18.6702V18.3302C5.33008 18.1802 5.33008 18.0502 5.34008 17.9102C5.83008 17.9802 6.38008 18.0002 7.00008 18.0002H17.0001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.67008 2H15.3301C18.0001 2 18.6701 2.67 18.6701 5.33V5.67C18.6701 5.82 18.6701 5.95 18.6601 6.09C18.1701 6.02 17.6201 6 17.0001 6H7.00008C6.38008 6 5.83008 6.02 5.34008 6.09C5.33008 5.95 5.33008 5.82 5.33008 5.67V5.33C5.33008 2.67 6.00008 2 8.67008 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 5.06006V18.9401C3.5 19.3501 3.16 19.6901 2.75 19.6901C2.34 19.6901 2 19.3501 2 18.9401V5.06006C2 4.65006 2.34 4.31006 2.75 4.31006C3.16 4.31006 3.5 4.65006 3.5 5.06006Z" fill="currentColor" /><path d="M22 5.06006V18.9401C22 19.3501 21.66 19.6901 21.25 19.6901C20.84 19.6901 20.5 19.3501 20.5 18.9401V5.06006C20.5 4.65006 20.84 4.31006 21.25 4.31006C21.66 4.31006 22 4.65006 22 5.06006Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M7.59961 21.25H16.3996C18.0596 21.25 19.3996 19.91 19.3996 18.25V5.75C19.3996 4.09 18.0596 2.75 16.3996 2.75H7.59961C5.93961 2.75 4.59961 4.09 4.59961 5.75V18.25C4.59961 19.91 5.93961 21.25 7.59961 21.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSliderVertical;