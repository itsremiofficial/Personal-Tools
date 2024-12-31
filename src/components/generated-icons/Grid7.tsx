import { FC } from 'react';
import { IconProps } from "@/types";

const IconGrid7: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M22 10H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 10V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 10V22H7.81C4.17 22 2 19.83 2 16.19V10H12Z" fill="currentColor" /><path d="M22 7.81V10H2V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81Z" fill="currentColor" /><path opacity={duotone ? "0.6" : "1"} d="M22 10V16.19C22 19.83 19.83 22 16.19 22H12V10H22Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconGrid7;