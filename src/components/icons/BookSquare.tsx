import { FC } from 'react';
import { IconProps } from "../../types";

const IconBookSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M18.3801 15.2702V7.58023C18.3801 6.81023 17.7601 6.25024 17.0001 6.31024H16.9601C15.6201 6.42024 13.5901 7.11025 12.4501 7.82025L12.3401 7.89026C12.1601 8.00026 11.8501 8.00026 11.6601 7.89026L11.5001 7.79025C10.3701 7.08025 8.34012 6.41023 7.00012 6.30023C6.24012 6.24023 5.62012 6.81025 5.62012 7.57025V15.2702C5.62012 15.8802 6.1201 16.4602 6.7301 16.5302L6.9101 16.5602C8.2901 16.7402 10.4301 17.4502 11.6501 18.1202L11.6801 18.1302C11.8501 18.2302 12.1301 18.2302 12.2901 18.1302C13.5101 17.4502 15.6601 16.7502 17.0501 16.5602L17.2601 16.5302C17.8801 16.4602 18.3801 15.8902 18.3801 15.2702Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 8.1001V17.6601" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.82C4.17 2 2 4.17 2 7.81V16.18C2 19.82 4.17 21.99 7.81 21.99H16.18C19.82 21.99 21.99 19.82 21.99 16.18V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M16.25 2.0002V12.42C16.25 13.06 16.06 13.54 15.73 13.73C15.39 13.93 14.85 13.83 14.25 13.47L12.93 12.68C12.42 12.37 11.58 12.37 11.07 12.68L9.75 13.47C9.15 13.83 8.61 13.92 8.27 13.73C7.94 13.54 7.75 13.06 7.75 12.42V2.00027C7.77327 2.00009 7.79661 2 7.82 2H16.19C16.21 2 16.23 2.00007 16.25 2.0002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBookSquare;