import { FC } from 'react';
import { IconProps } from "@/types";

const IconKeySquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M16.2792 13.6096C15.1492 14.7396 13.5292 15.0896 12.0992 14.6396L9.50922 17.2196C9.32922 17.4096 8.95922 17.5296 8.68922 17.4896L7.48922 17.3296C7.08922 17.2796 6.72922 16.8996 6.66922 16.5096L6.50922 15.3096C6.46922 15.0496 6.59922 14.6796 6.77922 14.4896L9.35922 11.9096C8.91922 10.4796 9.25922 8.85965 10.3892 7.72965C12.0092 6.10965 14.6492 6.10965 16.2792 7.72965C17.8992 9.33965 17.8992 11.9796 16.2792 13.6096Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.4496 16.2799L9.59961 15.4199" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.3949 10.7002H13.4039" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M15.8897 8.11007C14.4097 6.64007 12.0097 6.64007 10.5397 8.11007C9.50971 9.13007 9.19971 10.6101 9.59971 11.9101L7.24971 14.2601C7.08971 14.4301 6.96971 14.7601 7.00971 15.0001L7.15971 16.0901C7.20971 16.4501 7.54971 16.7901 7.90971 16.8401L8.99971 17.0001C9.23971 17.0301 9.56971 16.9301 9.73971 16.7501L10.1497 16.3401C10.2497 16.2501 10.2497 16.0901 10.1497 15.9901L9.17971 15.0201C9.03971 14.8801 9.03971 14.6401 9.17971 14.4901C9.31971 14.3501 9.55971 14.3501 9.70971 14.4901L10.6797 15.4601C10.7697 15.5501 10.9297 15.5501 11.0297 15.4601L12.0897 14.4101C13.3797 14.8101 14.8597 14.5001 15.8897 13.4801C17.3697 11.9901 17.3697 9.59007 15.8897 8.11007ZM13.2497 12.0001C12.5597 12.0001 11.9997 11.4401 11.9997 10.7501C11.9997 10.0601 12.5597 9.50007 13.2497 9.50007C13.9397 9.50007 14.4997 10.0601 14.4997 10.7501C14.4997 11.4401 13.9397 12.0001 13.2497 12.0001Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconKeySquare;