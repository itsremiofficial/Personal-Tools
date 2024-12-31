import { FC } from 'react';
import { IconProps } from "@/types";

const IconVolumeMute: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 9.99979V13.9998C5.5 15.9998 6.5 16.9998 8.5 16.9998H9.93C10.3 16.9998 10.67 17.1098 10.99 17.2998L13.91 19.1298C16.43 20.7098 18.5 19.5598 18.5 16.5898V7.40979C18.5 4.42979 16.43 3.28979 13.91 4.86979L10.99 6.69979C10.67 6.88979 10.3 6.99979 9.93 6.99979H8.5C6.5 6.99979 5.5 7.99979 5.5 9.99979Z" stroke="currentColor" strokeWidth="1.5" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.25 7.41021V16.5902C19.25 18.3102 18.63 19.6002 17.52 20.2202C17.07 20.4702 16.57 20.5902 16.05 20.5902C15.25 20.5902 14.39 20.3202 13.51 19.7702L10.59 17.9402C10.39 17.8202 10.16 17.7502 9.93 17.7502H9V6.25021H9.93C10.16 6.25021 10.39 6.18021 10.59 6.06021L13.51 4.23021C14.97 3.32021 16.4 3.16021 17.52 3.78021C18.63 4.40021 19.25 5.69021 19.25 7.41021Z" fill="currentColor" /><path d="M9 6.25V17.75H8.5C6.08 17.75 4.75 16.42 4.75 14V10C4.75 7.58 6.08 6.25 8.5 6.25H9Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconVolumeMute;