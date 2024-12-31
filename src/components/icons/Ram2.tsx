import { FC } from 'react';
import { IconProps } from "../../types";

const IconRanking: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3 8.1101L14.62 10.7501C14.8 11.1101 15.28 11.4701 15.68 11.5301L18.07 11.9301C19.6 12.1901 19.96 13.2901 18.86 14.3901L17 16.2501C16.69 16.5601 16.51 17.1701 16.61 17.6101L17.14 19.9201C17.56 21.7401 16.59 22.4501 14.98 21.5001L12.74 20.1701C12.33 19.9301 11.67 19.9301 11.26 20.1701L9.01996 21.5001C7.40996 22.4501 6.43995 21.7401 6.85995 19.9201L7.38998 17.6101C7.48998 17.1801 7.30997 16.5701 6.99997 16.2501L5.13998 14.3901C4.03998 13.2901 4.39996 12.1801 5.92996 11.9301L8.31997 11.5301C8.71997 11.4601 9.19997 11.1101 9.37997 10.7501L10.7 8.1101C11.41 6.6801 12.59 6.6801 13.3 8.1101Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6 9V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18 9V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 4V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18.5 10V12.17C18.5 12.7 18.71 13.21 19.09 13.59L19.91 14.41C20.29 14.79 20.5 15.3 20.5 15.83V17C20.5 19.85 19.12 21.8 16.01 21.98L15.99 18.99C15.98 17.89 15.09 17 13.99 17H9.98C8.87 17 7.98 17.9 7.98 19L7.99 21.98C4.83 21.8 3.5 19.85 3.5 17V7C3.5 4 4.97 2 8.5 2H15.5C18.97 2 20.5 4 20.5 7V8C20.5 8.55 20.05 9 19.5 9C18.95 9 18.5 9.45 18.5 10Z" fill="currentColor" /><path d="M16.0105 21.98C15.8505 21.99 15.6805 22 15.5005 22H8.50047C8.32047 22 8.15047 22 7.99047 21.98L7.98047 19C7.98047 17.9 8.87047 17 9.98047 17H13.9905C15.0905 17 15.9805 17.89 15.9905 18.99L16.0105 21.98Z" fill="currentColor" /><path d="M13.9707 8.53003H7.9707C7.5607 8.53003 7.2207 8.19003 7.2207 7.78003C7.2207 7.37003 7.5607 7.03003 7.9707 7.03003H13.9707C14.3807 7.03003 14.7207 7.37003 14.7207 7.78003C14.7207 8.19003 14.3907 8.53003 13.9707 8.53003Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconRanking;