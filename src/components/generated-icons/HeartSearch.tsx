import { FC } from 'react';
import { IconProps } from "@/types";

const IconHeartSearch: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.49 12.0001C21.81 10.9801 22 9.88012 22 8.69012C22 5.60012 19.51 3.1001 16.44 3.1001C14.62 3.1001 13.01 3.98015 12 5.34015C10.99 3.98015 9.37 3.1001 7.56 3.1001C4.49 3.1001 2 5.60012 2 8.69012C2 15.6901 8.48 19.8201 11.38 20.8201C11.55 20.8801 11.77 20.9101 12 20.9101" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.7391 21.0001C19.5064 21.0001 20.9391 19.5674 20.9391 17.8001C20.9391 16.0328 19.5064 14.6001 17.7391 14.6001C15.9717 14.6001 14.5391 16.0328 14.5391 17.8001C14.5391 19.5674 15.9717 21.0001 17.7391 21.0001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.5391 21.6001L20.5391 20.6001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.44 3.1001C14.63 3.1001 13.01 3.98008 12 5.33008C10.99 3.98008 9.37 3.1001 7.56 3.1001C4.49 3.1001 2 5.60009 2 8.69009C2 9.88009 2.19 10.9801 2.52 12.0001C4.1 17.0001 8.97 19.9901 11.38 20.8101C11.72 20.9301 12.28 20.9301 12.62 20.8101C15.03 19.9901 19.9 17.0001 21.48 12.0001C21.81 10.9801 22 9.88009 22 8.69009C22 5.60009 19.51 3.1001 16.44 3.1001Z" fill="currentColor" /><path d="M21.77 20.68L21.01 19.92C21.41 19.32 21.64 18.6 21.64 17.83C21.64 15.72 19.93 14.01 17.82 14.01C15.71 14.01 14 15.72 14 17.83C14 19.94 15.71 21.65 17.82 21.65C18.59 21.65 19.31 21.42 19.91 21.02L20.67 21.78C20.82 21.93 21.02 22.01 21.22 22.01C21.42 22.01 21.62 21.93 21.77 21.78C22.08 21.47 22.08 20.98 21.77 20.68Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconHeartSearch;