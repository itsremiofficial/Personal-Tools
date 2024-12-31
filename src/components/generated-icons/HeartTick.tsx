import { FC } from 'react';
import { IconProps } from "@/types";

const IconHeartTick: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.0004 17.1999C22.0004 18.0999 21.7504 18.9499 21.3004 19.6699C20.4704 21.0599 18.9504 21.9999 17.2004 21.9999C15.4504 21.9999 13.9204 21.0599 13.1004 19.6699C12.6604 18.9499 12.4004 18.0999 12.4004 17.1999C12.4004 14.5499 14.5504 12.3999 17.2004 12.3999C19.8504 12.3999 22.0004 14.5499 22.0004 17.1999Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.3301 17.2L16.5101 18.38L19.0701 16.02" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22 8.69012C22 10.6601 21.49 12.4001 20.69 13.9101C19.81 12.9801 18.57 12.4001 17.2 12.4001C14.55 12.4001 12.4 14.5501 12.4 17.2001C12.4 18.4301 12.87 19.5501 13.63 20.4001C13.26 20.5701 12.92 20.7101 12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.69012C2 5.60012 4.49 3.1001 7.56 3.1001C9.37 3.1001 10.99 3.98014 12 5.33014C13.01 3.98014 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.60012 22 8.69012Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.2004 12.3999C14.5504 12.3999 12.4004 14.5499 12.4004 17.1999C12.4004 18.0999 12.6504 18.9499 13.1004 19.6699C13.9304 21.0599 15.4504 21.9999 17.2004 21.9999C18.9504 21.9999 20.4804 21.0599 21.3004 19.6699C21.7404 18.9499 22.0004 18.0999 22.0004 17.1999C22.0004 14.5499 19.8504 12.3999 17.2004 12.3999ZM19.5804 16.5699L17.0204 18.9299C16.8804 19.0599 16.6904 19.1299 16.5104 19.1299C16.3204 19.1299 16.1304 19.0599 15.9804 18.9099L14.8004 17.7299C14.5104 17.4399 14.5104 16.9599 14.8004 16.6699C15.0904 16.3799 15.5704 16.3799 15.8604 16.6699L16.5304 17.3399L18.5604 15.4599C18.8604 15.1799 19.3404 15.1999 19.6204 15.4999C19.9004 15.8099 19.8804 16.2899 19.5804 16.5699Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22 8.69009C22 9.88009 21.81 10.9801 21.48 12.0001C21.27 12.6701 21 13.3101 20.68 13.9001C19.8 12.9701 18.57 12.4001 17.2 12.4001C14.55 12.4001 12.4 14.5501 12.4 17.2001C12.4 18.4301 12.87 19.5501 13.63 20.4001C13.26 20.5701 12.92 20.7101 12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.97 19.9901 4.1 17.0001 2.52 12.0001C2.19 10.9801 2 9.88009 2 8.69009C2 5.60009 4.49 3.1001 7.56 3.1001C9.37 3.1001 10.99 3.98008 12 5.33008C13.01 3.98008 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.60009 22 8.69009Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconHeartTick;