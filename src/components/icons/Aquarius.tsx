import { FC } from 'react';
import { IconProps } from "../../types";

const IconAquarius: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 16C15.87 16 19 12.87 19 9C19 5.13 15.87 2 12 2C8.13 2 5 5.13 5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 16V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15 19H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.75 9C19.75 4.73 16.27 1.25 12 1.25C7.73 1.25 4.25 4.73 4.25 9C4.25 9.41 4.59 9.75 5 9.75C5.41 9.75 5.75 9.41 5.75 9C5.75 5.55 8.55 2.75 12 2.75C15.45 2.75 18.25 5.55 18.25 9C18.25 12.45 15.45 15.25 12 15.25C11.59 15.25 11.25 15.59 11.25 16V22C11.25 22.41 11.59 22.75 12 22.75C12.41 22.75 12.75 22.41 12.75 22V16.71C16.67 16.33 19.75 13.02 19.75 9Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15 19.75H9C8.59 19.75 8.25 19.41 8.25 19C8.25 18.59 8.59 18.25 9 18.25H15C15.41 18.25 15.75 18.59 15.75 19C15.75 19.41 15.41 19.75 15 19.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconAquarius;