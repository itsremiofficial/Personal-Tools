import { FC } from 'react';
import { IconProps } from "@/types";

const IconSignpost: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2195 2H8.95956C8.55956 2 8.17953 2.14 7.86953 2.38L5.67953 4.13C4.79953 4.83 4.79953 6.15999 5.67953 6.85999L7.86953 8.60999C8.17953 8.85999 8.56956 8.98999 8.95956 8.98999H17.2195C18.1895 8.98999 18.9695 8.20999 18.9695 7.23999V3.73999C18.9695 2.77999 18.1895 2 17.2195 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.80078 12H15.0608C15.4608 12 15.8408 12.14 16.1508 12.38L18.3408 14.13C19.2208 14.83 19.2208 16.16 18.3408 16.86L16.1508 18.61C15.8408 18.86 15.4508 18.99 15.0608 18.99H6.80078C5.83078 18.99 5.05078 18.21 5.05078 17.24V13.74C5.05078 12.78 5.83078 12 6.80078 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 12V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path opacity={duotone ? "0.4" : "1"} d="M12 22V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9 22H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18.9698 3.75V7.25C18.9698 8.22 18.1898 9 17.2198 9H8.95987C8.56987 9 8.17985 8.85999 7.86985 8.62L5.67984 6.87C4.80984 6.17 4.80984 4.83 5.67984 4.13L7.86985 2.38C8.17985 2.14 8.56987 2 8.95987 2H17.2198C18.1898 2 18.9698 2.78 18.9698 3.75Z" fill="currentColor" /><path d="M18.3408 16.87L16.1608 18.62C15.8508 18.86 15.4608 19 15.0608 19H6.80078C5.83078 19 5.05078 18.22 5.05078 17.25V13.75C5.05078 12.78 5.83078 12 6.80078 12H15.0608C15.4608 12 15.8508 12.14 16.1608 12.38L18.3408 14.13C19.2208 14.83 19.2208 16.17 18.3408 16.87Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M12.75 9H11.25V12H12.75V9Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.75 22C15.75 22.41 15.41 22.75 15 22.75H9C8.59 22.75 8.25 22.41 8.25 22C8.25 21.59 8.59 21.25 9 21.25H11.25V19H12.75V21.25H15C15.41 21.25 15.75 21.59 15.75 22Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSignpost;