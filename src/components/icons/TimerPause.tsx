import { FC } from 'react';
import { IconProps } from "../../types";

const IconTimerStart: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 8V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 22C7.17 22 3.25 18.08 3.25 13.25C3.25 8.42 7.17 4.5 12 4.5C16.83 4.5 20.75 8.42 20.75 13.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9 2H15" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14.9004 18.4998V17.3398C14.9004 15.9098 15.9204 15.3198 17.1604 16.0398L18.1604 16.6198L19.1604 17.1998C20.4004 17.9198 20.4004 19.0898 19.1604 19.8098L18.1604 20.3898L17.1604 20.9698C15.9204 21.6898 14.9004 21.0998 14.9004 19.6698V18.4998Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.0001 21.9999C16.7884 21.9999 20.6701 18.1182 20.6701 13.3299C20.6701 8.5416 16.7884 4.65991 12.0001 4.65991C7.21177 4.65991 3.33008 8.5416 3.33008 13.3299C3.33008 18.1182 7.21177 21.9999 12.0001 21.9999Z" fill="currentColor" /><path d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75Z" fill="currentColor" /><path d="M14.8906 3.45H9.11062C8.71062 3.45 8.39062 3.13 8.39062 2.73C8.39062 2.33 8.71062 2 9.11062 2H14.8906C15.2906 2 15.6106 2.32 15.6106 2.72C15.6106 3.12 15.2906 3.45 14.8906 3.45Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconTimerStart;