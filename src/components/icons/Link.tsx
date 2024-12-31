import { FC } from 'react';
import { IconProps } from "../../types";

const IconLink1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9902 17.5H16.5002C19.5202 17.5 22.0002 15.03 22.0002 12C22.0002 8.98 19.5302 6.5 16.5002 6.5H14.9902" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 6.5H7.5C4.47 6.5 2 8.97 2 12C2 15.02 4.47 17.5 7.5 17.5H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.41 21.42C12.63 22.19 11.36 22.19 10.58 21.42L8.87 19.73C8.31 19.17 7.54 18.86 6.75 18.86H6C4.34 18.86 3 17.53 3 15.89V4.97998C3 3.33998 4.34 2.01001 6 2.01001H18C19.66 2.01001 21 3.33998 21 4.97998V15.89C21 17.52 19.66 18.86 18 18.86Z" fill="currentColor" /><path d="M16.5805 9.56998C16.3905 9.29998 16.0705 9.15 15.6905 9.15H13.7405C13.6105 9.15 13.4905 9.09998 13.4105 8.99998C13.3305 8.89998 13.2905 8.76998 13.3105 8.62998L13.5505 7.06998C13.6505 6.60998 13.3405 6.07997 12.8805 5.92997C12.4505 5.76997 11.9405 5.98995 11.7405 6.28995L9.80048 9.16996V8.80997C9.80048 8.10997 9.50047 7.81998 8.76047 7.81998H8.27048C7.53048 7.81998 7.23047 8.10997 7.23047 8.80997V13.59C7.23047 14.29 7.53048 14.58 8.27048 14.58H8.76047C9.46047 14.58 9.76047 14.31 9.79047 13.67L11.2605 14.8C11.4605 15 11.9105 15.11 12.2305 15.11H14.0805C14.7205 15.11 15.3605 14.63 15.5005 14.04L16.6705 10.48C16.8005 10.16 16.7705 9.82998 16.5805 9.56998Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconLink1;