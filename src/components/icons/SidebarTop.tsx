import { FC } from 'react';
import { IconProps } from "../../types";

const IconSignpost: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2195 2H8.95956C8.55956 2 8.17953 2.14 7.86953 2.38L5.67953 4.13C4.79953 4.83 4.79953 6.15999 5.67953 6.85999L7.86953 8.60999C8.17953 8.85999 8.56956 8.98999 8.95956 8.98999H17.2195C18.1895 8.98999 18.9695 8.20999 18.9695 7.23999V3.73999C18.9695 2.77999 18.1895 2 17.2195 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.80078 12H15.0608C15.4608 12 15.8408 12.14 16.1508 12.38L18.3408 14.13C19.2208 14.83 19.2208 16.16 18.3408 16.86L16.1508 18.61C15.8408 18.86 15.4508 18.99 15.0608 18.99H6.80078C5.83078 18.99 5.05078 18.21 5.05078 17.24V13.74C5.05078 12.78 5.83078 12 6.80078 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 12V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path opacity={duotone ? "0.4" : "1"} d="M12 22V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9 22H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M2 7.81V16.19C2 19.83 4.17 22 7.81 22H16.19C16.39 22 16.59 21.99 16.78 21.98C18.01 21.9 19.05 21.55 19.87 20.95C20.29 20.66 20.66 20.29 20.95 19.87C21.64 18.92 22 17.68 22 16.19V7.81C22 4.37 20.06 2.24 16.78 2.03C16.59 2.01 16.39 2 16.19 2H7.81C6.32 2 5.08 2.36 4.13 3.05C3.71 3.34 3.34 3.71 3.05 4.13C2.36 5.08 2 6.32 2 7.81Z" fill="currentColor" /><path d="M15.2793 2V22H16.1893C16.3893 22 16.5893 21.99 16.7793 21.98V2.03C16.5893 2.01 16.3893 2 16.1893 2H15.2793Z" fill="currentColor" /><path d="M9.0307 15.3099C9.2207 15.3099 9.4107 15.2399 9.5607 15.0899L12.1207 12.5299C12.4107 12.2399 12.4107 11.7599 12.1207 11.4699L9.5607 8.90988C9.2707 8.61988 8.7907 8.61988 8.5007 8.90988C8.2107 9.19988 8.2107 9.67988 8.5007 9.96988L10.5207 11.9999L8.5007 14.0299C8.2107 14.3199 8.2107 14.7999 8.5007 15.0899C8.6407 15.2399 8.8307 15.3099 9.0307 15.3099Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSignpost;