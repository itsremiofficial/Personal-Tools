import { FC } from 'react';
import { IconProps } from "@/types";

const IconLamp1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7807 13.6502V18.5902H3.2207V13.6502C3.2207 8.83018 7.1207 4.93018 11.9407 4.93018H12.0607C16.8807 4.93018 20.7807 8.83018 20.7807 13.6502Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 2V4.92999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.6496 18.5898C15.5196 20.4998 13.9296 21.9998 11.9996 21.9998C10.0696 21.9998 8.47961 20.4998 8.34961 18.5898H15.6496Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.7807 14.18V17.12C20.7807 18.22 19.8807 19.12 18.7807 19.12H5.2207C4.1207 19.12 3.2207 18.22 3.2207 17.12V14.18C3.2207 9.35998 7.1207 5.45998 11.9407 5.45998H12.0607C16.8807 5.44998 20.7807 9.35998 20.7807 14.18Z" fill="currentColor" /><path d="M12.75 2.53003V5.49003C12.52 5.47003 12.29 5.46003 12.06 5.46003H11.94C11.71 5.46003 11.48 5.47003 11.25 5.49003V2.53003C11.25 2.12003 11.59 1.78003 12 1.78003C12.41 1.78003 12.75 2.12003 12.75 2.53003Z" fill="currentColor" /><path d="M15.3197 19.1101C15.1997 20.8501 13.7597 22.2201 11.9997 22.2201C10.2397 22.2201 8.78969 20.8501 8.67969 19.1101H15.3197Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconLamp1;