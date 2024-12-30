import { FC } from 'react';
import { IconProps } from "../../types";

const IconPause: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M10.65 19.11V4.89C10.65 3.54 10.08 3 8.64 3H5.01C3.57 3 3 3.54 3 4.89V19.11C3 20.46 3.57 21 5.01 21H8.64C10.08 21 10.65 20.46 10.65 19.11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20.9996 19.11V4.89C20.9996 3.54 20.4296 3 18.9896 3H15.3596C13.9296 3 13.3496 3.54 13.3496 4.89V19.11C13.3496 20.46 13.9196 21 15.3596 21H18.9896C20.4296 21 20.9996 20.46 20.9996 19.11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M14.1506 22.0001H9.87057C8.34057 22.0001 7.20057 20.7601 7.49057 19.4301L8.19057 16.3501H15.8306L16.5306 19.4301C16.8506 20.8401 15.7806 22.0001 14.1506 22.0001Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.7692 13.7402L15.8292 16.3502H8.18916L5.24916 13.7402C3.53916 12.3402 3.53916 11.2602 4.83916 9.61018L10.0292 3.04018C10.3892 2.59018 10.8092 2.28018 11.2592 2.12018C11.7492 1.95018 12.2692 1.95018 12.7592 2.12018C13.2092 2.28018 13.6292 2.59018 13.9892 3.04018L19.1792 9.61018C20.4792 11.2602 20.4192 12.2802 18.7692 13.7402Z" fill="currentColor" /><path d="M12.7598 2.12018V6.97018C12.7598 7.38018 12.4198 7.72018 12.0098 7.72018C11.5998 7.72018 11.2598 7.38018 11.2598 6.97018V2.12018C11.7498 1.95018 12.2698 1.95018 12.7598 2.12018Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconPause;