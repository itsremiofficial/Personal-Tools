import { FC } from 'react';
import { IconProps } from "@/types";

const IconMouseSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M20.9597 17.84L19.3297 18.39C18.8797 18.54 18.5197 18.89 18.3697 19.35L17.8197 20.98C17.3497 22.39 15.3697 22.36 14.9297 20.95L13.0797 15C12.7197 13.82 13.8097 12.72 14.9797 13.09L20.9397 14.94C22.3397 15.38 22.3597 17.37 20.9597 17.84Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M15.4798 2H7.52977C4.06977 2 2.00977 4.05999 2.00977 7.51999V15.47C2.00977 18.93 4.07977 20.99 7.52977 20.99H15.4798C18.9398 20.99 20.9998 18.93 20.9998 15.47V7.51999C20.9998 4.05999 18.9298 2 15.4798 2Z" fill="currentColor" /><path d="M21.9597 18.84L20.3297 19.39C19.8797 19.54 19.5197 19.89 19.3697 20.35L18.8197 21.98C18.3497 23.39 16.3697 23.36 15.9297 21.95L14.0797 16C13.7197 14.82 14.8097 13.72 15.9797 14.09L21.9397 15.94C23.3397 16.38 23.3597 18.37 21.9597 18.84Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMouseSquare;