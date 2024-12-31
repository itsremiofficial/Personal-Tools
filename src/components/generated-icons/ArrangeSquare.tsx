import { FC } from 'react';
import { IconProps } from "@/types";

const IconArrangeSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M17.1494 13.8203L14.1094 16.8603" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.84961 13.8203H17.1496" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.84961 10.1801L9.88961 7.14014" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.1496 10.1802H6.84961" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M17.8496 13.5301C17.7696 13.3501 17.6296 13.2001 17.4396 13.1201C17.3496 13.0801 17.2496 13.0601 17.1496 13.0601H6.84961C6.43961 13.0601 6.09961 13.4001 6.09961 13.8101C6.09961 14.2201 6.43961 14.5601 6.84961 14.5601H15.3496L13.5896 16.3201C13.2996 16.6101 13.2996 17.0901 13.5896 17.3801C13.7396 17.5301 13.9296 17.6001 14.1196 17.6001C14.3096 17.6001 14.4996 17.5301 14.6496 17.3801L17.6896 14.3401C17.7596 14.2701 17.8096 14.1901 17.8496 14.1001C17.9196 13.9201 17.9196 13.7101 17.8496 13.5301Z" fill="currentColor" /><path d="M6.15016 10.4701C6.23016 10.6501 6.37016 10.8001 6.56016 10.8801C6.65016 10.9201 6.75016 10.9401 6.85016 10.9401H17.1602C17.5702 10.9401 17.9102 10.6001 17.9102 10.1901C17.9102 9.78009 17.5702 9.44009 17.1602 9.44009H8.66016L10.4202 7.68009C10.7102 7.39009 10.7102 6.91009 10.4202 6.62009C10.1302 6.33009 9.65016 6.33009 9.36016 6.62009L6.32016 9.65009C6.25016 9.72009 6.19016 9.81009 6.15016 9.90009C6.08016 10.0801 6.08016 10.2901 6.15016 10.4701Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconArrangeSquare;