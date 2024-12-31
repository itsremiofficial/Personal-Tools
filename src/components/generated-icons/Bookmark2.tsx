import { FC } from 'react';
import { IconProps } from "@/types";

const IconBookmark2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2C16 2 17 3.01 17 5.03V12.08C17 14.07 15.59 14.84 13.86 13.8L12.54 13C12.24 12.82 11.76 12.82 11.46 13L10.14 13.8C8.41 14.84 7 14.07 7 12.08V5.03C7 3.01 8 2 10 2H14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.82 4.98996C3.41 5.55996 2 7.65996 2 11.9V14.93C2 19.98 4 22 9 22H15C20 22 22 19.98 22 14.93V11.9C22 7.58996 20.54 5.47996 17 4.95996" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17 4.96V12.08C17 14.07 15.59 14.84 13.86 13.8L12.54 13C12.24 12.82 11.76 12.82 11.46 13L10.14 13.8C8.41 14.84 7 14.07 7 12.08V4.99C7.01 3 8.01 2 10 2H14C15.98 2 16.98 2.99 17 4.96Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22 11.9V14.93C22 19.98 20 22 15 22H9C4 22 2 19.98 2 14.93V11.9C2 7.65996 3.41 5.55996 6.82 4.98996H7V12.08C7 14.07 8.41 14.84 10.14 13.8L11.46 13C11.76 12.82 12.24 12.82 12.54 13L13.86 13.8C15.59 14.84 17 14.07 17 12.08V4.95996C20.54 5.47996 22 7.58996 22 11.9Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBookmark2;