import { FC } from 'react';
import { IconProps } from "@/types";

const IconJudge: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.0105 18.5101L15.0605 13.5601" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.0602 13.56L11.5202 17.1C10.7402 17.88 9.47024 17.88 8.69024 17.1L4.45023 12.86C3.67023 12.08 3.67023 10.81 4.45023 10.03L11.5202 2.96C12.3002 2.18 13.5702 2.18 14.3502 2.96L18.5902 7.20002C19.3702 7.98002 19.3702 9.25001 18.5902 10.03L15.0602 13.56Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2 21H8" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.56055 7.91992L13.6306 14.9899" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.5393 19.04C20.3893 19.19 20.1993 19.26 20.0093 19.26C19.8193 19.26 19.6293 19.19 19.4793 19.04L14.5293 14.09L15.0593 13.56L15.5893 13.03L20.5393 17.98C20.8293 18.27 20.8293 18.75 20.5393 19.04Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M6.46938 9.28009L12.2694 15.0801C12.6594 15.4701 12.6594 16.1001 12.2694 16.4901L11.3694 17.4001C10.5594 18.2001 9.27937 18.2001 8.47937 17.4001L4.13938 13.0601C3.34938 12.2701 3.34938 10.9801 4.13938 10.1801L5.04938 9.27009C5.43938 8.89009 6.07938 8.89009 6.46938 9.28009Z" fill="currentColor" /><path d="M18.5895 10.1899L14.7795 13.9899C14.3795 14.3899 13.7395 14.3899 13.3395 13.9899L7.56953 8.21994C7.16953 7.81994 7.16953 7.17994 7.56953 6.77994L11.3795 2.96994C12.1695 2.17994 13.4595 2.17994 14.2595 2.96994L18.5995 7.30994C19.3795 8.09994 19.3795 9.37994 18.5895 10.1899Z" fill="currentColor" /><path d="M8 21.75H2C1.59 21.75 1.25 21.41 1.25 21C1.25 20.59 1.59 20.25 2 20.25H8C8.41 20.25 8.75 20.59 8.75 21C8.75 21.41 8.41 21.75 8 21.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconJudge;