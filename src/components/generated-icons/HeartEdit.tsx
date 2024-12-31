import { FC } from 'react';
import { IconProps } from "@/types";

const IconHeartEdit: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.49 12.0001C21.81 10.9801 22 9.88012 22 8.69012C22 5.60012 19.51 3.1001 16.44 3.1001C14.62 3.1001 13.01 3.98015 12 5.34015C10.99 3.98015 9.37 3.1001 7.56 3.1001C4.49 3.1001 2 5.60012 2 8.69012C2 15.6901 8.48 19.8201 11.38 20.8201C11.55 20.8801 11.77 20.9101 12 20.9101" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.2091 15.74L15.6691 19.2801C15.5291 19.4201 15.3991 19.68 15.3691 19.87L15.1791 21.22C15.1091 21.71 15.4491 22.05 15.9391 21.98L17.2891 21.79C17.4791 21.76 17.7491 21.63 17.8791 21.49L21.4191 17.95C22.0291 17.34 22.3191 16.63 21.4191 15.73C20.5291 14.84 19.8191 15.13 19.2091 15.74Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.6992 16.25C18.9992 17.33 19.8392 18.17 20.9192 18.47" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.44 3.1001C14.63 3.1001 13.01 3.98008 12 5.33008C10.99 3.98008 9.37 3.1001 7.56 3.1001C4.49 3.1001 2 5.60009 2 8.69009C2 9.88009 2.19 10.9801 2.52 12.0001C4.1 17.0001 8.97 19.9901 11.38 20.8101C11.72 20.9301 12.28 20.9301 12.62 20.8101C15.03 19.9901 19.9 17.0001 21.48 12.0001C21.81 10.9801 22 9.88009 22 8.69009C22 5.60009 19.51 3.1001 16.44 3.1001Z" fill="currentColor" /><path d="M14.8392 9.16C13.9392 8.26 13.2292 8.55 12.6192 9.16L9.07921 12.7C8.93921 12.84 8.80921 13.1 8.77921 13.29L8.58921 14.64C8.51921 15.13 8.85921 15.47 9.34921 15.4L10.6992 15.21C10.8892 15.18 11.1592 15.05 11.2892 14.91L14.8292 11.37C15.4492 10.77 15.7392 10.06 14.8392 9.16Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconHeartEdit;