import { FC } from 'react';
import { IconProps } from "../../types";

const IconLamp1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7807 13.6502V18.5902H3.2207V13.6502C3.2207 8.83018 7.1207 4.93018 11.9407 4.93018H12.0607C16.8807 4.93018 20.7807 8.83018 20.7807 13.6502Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 2V4.92999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.6496 18.5898C15.5196 20.4998 13.9296 21.9998 11.9996 21.9998C10.0696 21.9998 8.47961 20.4998 8.34961 18.5898H15.6496Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M15.8897 8.11007C14.4097 6.64007 12.0097 6.64007 10.5397 8.11007C9.50971 9.13007 9.19971 10.6101 9.59971 11.9101L7.24971 14.2601C7.08971 14.4301 6.96971 14.7601 7.00971 15.0001L7.15971 16.0901C7.20971 16.4501 7.54971 16.7901 7.90971 16.8401L8.99971 17.0001C9.23971 17.0301 9.56971 16.9301 9.73971 16.7501L10.1497 16.3401C10.2497 16.2501 10.2497 16.0901 10.1497 15.9901L9.17971 15.0201C9.03971 14.8801 9.03971 14.6401 9.17971 14.4901C9.31971 14.3501 9.55971 14.3501 9.70971 14.4901L10.6797 15.4601C10.7697 15.5501 10.9297 15.5501 11.0297 15.4601L12.0897 14.4101C13.3797 14.8101 14.8597 14.5001 15.8897 13.4801C17.3697 11.9901 17.3697 9.59007 15.8897 8.11007ZM13.2497 12.0001C12.5597 12.0001 11.9997 11.4401 11.9997 10.7501C11.9997 10.0601 12.5597 9.50007 13.2497 9.50007C13.9397 9.50007 14.4997 10.0601 14.4997 10.7501C14.4997 11.4401 13.9397 12.0001 13.2497 12.0001Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconLamp1;