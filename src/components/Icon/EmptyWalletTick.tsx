import { FC } from 'react';
import { IconProps } from "../../types";

const IconEmptyWalletTick: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H7.63C7.94 21.74 8.21 21.42 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C4.06 15 3.19 15.33 2.5 15.88V11.51C2.5 9.44001 4.18999 7.75 6.25999 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2.5 12.4098V7.83986C2.5 6.64986 3.23 5.58982 4.34 5.16982L12.28 2.16982C13.52 1.69982 14.85 2.61985 14.85 3.94985V7.74983" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22.5608 13.9702V16.0302C22.5608 16.5802 22.1208 17.0302 21.5608 17.0502H19.6008C18.5208 17.0502 17.5308 16.2602 17.4408 15.1802C17.3808 14.5502 17.6208 13.9602 18.0408 13.5502C18.4108 13.1702 18.9208 12.9502 19.4808 12.9502H21.5608C22.1208 12.9702 22.5608 13.4202 22.5608 13.9702Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 19C9 19.75 8.79 20.46 8.42 21.06C8.21 21.42 7.94 21.74 7.63 22C6.93 22.63 6.01 23 5 23C3.54 23 2.27 22.22 1.58 21.06C1.21 20.46 1 19.75 1 19C1 17.74 1.58 16.61 2.5 15.88C3.19 15.33 4.06 15 5 15C7.21 15 9 16.79 9 19Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M3.43945 19L4.42944 19.99L6.55945 18.02" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M8.81945 9.74994C7.96945 9.74994 7.11945 9.42994 6.46945 8.77994C6.17945 8.48994 6.17945 8.00994 6.46945 7.71994C6.75945 7.42994 7.23945 7.42994 7.52945 7.71994C8.23945 8.42994 9.39945 8.42994 10.1095 7.71994C10.3995 7.42994 10.8795 7.42994 11.1695 7.71994C11.4595 8.00994 11.4595 8.48994 11.1695 8.77994C10.5195 9.41994 9.66945 9.74994 8.81945 9.74994Z" fill="currentColor" /><path d="M15.1808 9.74994C14.3308 9.74994 13.4808 9.42994 12.8308 8.77994C12.5408 8.48994 12.5408 8.00994 12.8308 7.71994C13.1208 7.42994 13.6008 7.42994 13.8908 7.71994C14.6008 8.42994 15.7608 8.42994 16.4708 7.71994C16.7608 7.42994 17.2408 7.42994 17.5308 7.71994C17.8208 8.00994 17.8208 8.48994 17.5308 8.77994C16.8808 9.41994 16.0308 9.74994 15.1808 9.74994Z" fill="currentColor" /><path d="M15.6009 12.6201H8.40086C7.70086 12.6201 7.13086 13.1901 7.13086 13.9001C7.13086 16.5901 9.32086 18.7801 12.0109 18.7801C14.7009 18.7801 16.8909 16.5901 16.8909 13.9001C16.8809 13.2001 16.3009 12.6201 15.6009 12.6201Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconEmptyWalletTick;