import { FC } from 'react';
import { IconProps } from "../../types";

const IconNoteRemove: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M7 14H12" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M7 5.95996L3.25 2.20996" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.96094 2.25L3.21094 6" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path opacity={duotone ? "0.4" : "1"} d="M7 10H15" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M10 2H16C19.33 2.18 21 3.41 21 7.99V16" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 9.00977V15.9798C3 19.9898 4 21.9998 9 21.9998H12C12.17 21.9998 14.84 21.9998 15 21.9998" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M21 16L15 22V19C15 17 16 16 18 16H21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M7.37 22H16.62C19.31 22 21.49 19.82 21.49 17.13V8.37C21.49 5.68 19.31 3.5 16.62 3.5H7.37C4.68 3.5 2.5 5.68 2.5 8.37V17.12C2.5 19.82 4.68 22 7.37 22Z" fill="currentColor" /><path d="M8.28906 6.29C7.86906 6.29 7.53906 5.95 7.53906 5.54V2.75C7.53906 2.34 7.86906 2 8.28906 2C8.70906 2 9.03906 2.34 9.03906 2.75V5.53C9.03906 5.95 8.70906 6.29 8.28906 6.29Z" fill="currentColor" /><path d="M15.7109 6.29C15.2909 6.29 14.9609 5.95 14.9609 5.54V2.75C14.9609 2.33 15.3009 2 15.7109 2C16.1309 2 16.4609 2.34 16.4609 2.75V5.53C16.4609 5.95 16.1309 6.29 15.7109 6.29Z" fill="currentColor" /><path d="M12 14.75H10.31V13C10.31 12.59 9.97 12.25 9.56 12.25C9.15 12.25 8.81 12.59 8.81 13V14.75H7C6.59 14.75 6.25 15.09 6.25 15.5C6.25 15.91 6.59 16.25 7 16.25H8.81V18C8.81 18.41 9.15 18.75 9.56 18.75C9.97 18.75 10.31 18.41 10.31 18V16.25H12C12.41 16.25 12.75 15.91 12.75 15.5C12.75 15.09 12.41 14.75 12 14.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconNoteRemove;