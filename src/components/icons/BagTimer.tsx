import { FC } from 'react';
import { IconProps } from "../../types";

const IconBagTimer: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 19C14.2091 19 16 17.2091 16 15C16 12.7909 14.2091 11 12 11C9.79086 11 8 12.7909 8 15C8 17.2091 9.79086 19 12 19Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.25 13.75V14.68C12.25 15.03 12.07 15.36 11.76 15.54L11 16" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.0008 22H15.0008C19.0208 22 19.7408 20.39 19.9508 18.43L20.7008 12.43C20.9708 9.99 20.2708 8 16.0008 8H8.0008C3.7308 8 3.0308 9.99 3.3008 12.43L4.0508 18.43C4.2608 20.39 4.9808 22 9.0008 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.24 5.58006H18.84L15.46 2.20006C15.19 1.93006 14.75 1.93006 14.47 2.20006C14.2 2.47006 14.2 2.91006 14.47 3.19006L16.86 5.58006H7.14L9.53 3.19006C9.8 2.92006 9.8 2.48006 9.53 2.20006C9.26 1.93006 8.82 1.93006 8.54 2.20006L5.17 5.58006H4.77C3.87 5.58006 2 5.58006 2 8.14006C2 9.11006 2.2 9.75006 2.62 10.1701C2.86 10.4201 3.15 10.5501 3.46 10.6201C3.75 10.6901 4.06 10.7001 4.36 10.7001H19.64C19.95 10.7001 20.24 10.6801 20.52 10.6201C21.36 10.4201 22 9.82006 22 8.14006C22 5.58006 20.13 5.58006 19.24 5.58006Z" fill="currentColor" /><path d="M19.6509 10.7001H4.36094C4.07094 10.7001 3.75094 10.6901 3.46094 10.6101L4.72094 18.3001C5.00094 20.0201 5.75094 22.0001 9.08094 22.0001H14.6909C18.0609 22.0001 18.6609 20.3101 19.0209 18.4201L20.5309 10.6101C20.2509 10.6801 19.9509 10.7001 19.6509 10.7001ZM12.0009 18.5001C9.66094 18.5001 7.75094 16.5901 7.75094 14.2501C7.75094 13.8401 8.09094 13.5001 8.50094 13.5001C8.91094 13.5001 9.25094 13.8401 9.25094 14.2501C9.25094 15.7701 10.4809 17.0001 12.0009 17.0001C13.5209 17.0001 14.7509 15.7701 14.7509 14.2501C14.7509 13.8401 15.0909 13.5001 15.5009 13.5001C15.9109 13.5001 16.2509 13.8401 16.2509 14.2501C16.2509 16.5901 14.3409 18.5001 12.0009 18.5001Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBagTimer;