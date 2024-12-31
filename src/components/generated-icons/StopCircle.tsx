import { FC } from 'react';
import { IconProps } from "@/types";

const IconStopCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9707 22C17.4936 22 21.9707 17.5228 21.9707 12C21.9707 6.47715 17.4936 2 11.9707 2C6.44786 2 1.9707 6.47715 1.9707 12C1.9707 17.5228 6.44786 22 11.9707 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.7295 16.23H13.2695C15.3895 16.23 16.2295 15.38 16.2295 13.27V10.73C16.2295 8.61002 15.3795 7.77002 13.2695 7.77002H10.7295C8.60953 7.77002 7.76953 8.62002 7.76953 10.73V13.27C7.76953 15.38 8.61953 16.23 10.7295 16.23Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M11.9707 22C17.4936 22 21.9707 17.5228 21.9707 12C21.9707 6.47715 17.4936 2 11.9707 2C6.44786 2 1.9707 6.47715 1.9707 12C1.9707 17.5228 6.44786 22 11.9707 22Z" fill="currentColor" /><path d="M10.7695 16.23H13.2295C14.8895 16.23 16.2295 14.89 16.2295 13.23V10.77C16.2295 9.11002 14.8895 7.77002 13.2295 7.77002H10.7695C9.10953 7.77002 7.76953 9.11002 7.76953 10.77V13.23C7.76953 14.89 9.10953 16.23 10.7695 16.23Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconStopCircle;