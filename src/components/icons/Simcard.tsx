import { FC } from 'react';
import { IconProps } from "../../types";

const IconSimcard1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.54 6.54L16.47 3.47C15.53 2.53 14.26 2 12.93 2H8C5 2 3 4 3 7V17C3 20 5 22 8 22H16C19 22 21 20 21 17V10.07C21 8.74 20.47 7.47 19.54 6.54Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M10 18.5H14C15.65 18.5 17 17.15 17 15.5V12.5C17 10.85 15.65 9.5 14 9.5H10C8.35 9.5 7 10.85 7 12.5V15.5C7 17.15 8.35 18.5 10 18.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 9.5V18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.5 14H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18.9698 3.75V7.25C18.9698 8.22 18.1898 9 17.2198 9H8.95987C8.56987 9 8.17985 8.85999 7.86985 8.62L5.67984 6.87C4.80984 6.17 4.80984 4.83 5.67984 4.13L7.86985 2.38C8.17985 2.14 8.56987 2 8.95987 2H17.2198C18.1898 2 18.9698 2.78 18.9698 3.75Z" fill="currentColor" /><path d="M18.3408 16.87L16.1608 18.62C15.8508 18.86 15.4608 19 15.0608 19H6.80078C5.83078 19 5.05078 18.22 5.05078 17.25V13.75C5.05078 12.78 5.83078 12 6.80078 12H15.0608C15.4608 12 15.8508 12.14 16.1608 12.38L18.3408 14.13C19.2208 14.83 19.2208 16.17 18.3408 16.87Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M12.75 9H11.25V12H12.75V9Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.75 22C15.75 22.41 15.41 22.75 15 22.75H9C8.59 22.75 8.25 22.41 8.25 22C8.25 21.59 8.59 21.25 9 21.25H11.25V19H12.75V21.25H15C15.41 21.25 15.75 21.59 15.75 22Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSimcard1;