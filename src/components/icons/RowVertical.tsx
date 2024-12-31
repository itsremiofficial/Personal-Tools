import { FC } from 'react';
import { IconProps } from "../../types";

const IconRulerPen: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.4707 19V5C21.4707 3 20.4707 2 18.4707 2H14.4707C12.4707 2 11.4707 3 11.4707 5V19C11.4707 21 12.4707 22 14.4707 22H18.4707C20.4707 22 21.4707 21 21.4707 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.4707 6H16.4707" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.4707 18H15.4707" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.4707 13.9502L16.4707 14.0002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.4707 10H14.4707" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M5.4893 2C3.8593 2 2.5293 3.33 2.5293 4.95V17.91C2.5293 18.36 2.7193 19.04 2.9493 19.43L3.7693 20.79C4.7093 22.36 6.2593 22.36 7.1993 20.79L8.0193 19.43C8.2493 19.04 8.4393 18.36 8.4393 17.91V4.95C8.4393 3.33 7.1093 2 5.4893 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.4393 7H2.5293" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M13.5 4.1V19.9C13.5 21.4 14.14 22 15.73 22H19.77C21.36 22 22 21.4 22 19.9V4.1C22 2.6 21.36 2 19.77 2H15.73C14.14 2 13.5 2.6 13.5 4.1Z" fill="currentColor" /><path d="M2 4.1V19.9C2 21.4 2.64 22 4.23 22H8.27C9.86 22 10.5 21.4 10.5 19.9V4.1C10.5 2.6 9.86 2 8.27 2H4.23C2.64 2 2 2.6 2 4.1Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconRulerPen;