import { FC } from 'react';

const IconFlag: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.82031 2V22" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M5.82031 4H17.0203C19.7203 4 20.3203 5.5 18.4203 7.4L17.2203 8.6C16.4203 9.4 16.4203 10.7 17.2203 11.4L18.4203 12.6C20.3203 14.5 19.6203 16 17.0203 16H5.82031" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.82031 22C5.41031 22 5.07031 21.66 5.07031 21.25V2.75C5.07031 2.34 5.41031 2 5.82031 2C6.23031 2 6.57031 2.34 6.57031 2.75V21.25C6.57031 21.66 6.23031 22 5.82031 22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.6895 12.33L17.4695 11.11C17.1795 10.86 17.0095 10.49 16.9995 10.08C16.9795 9.62999 17.1595 9.17999 17.4895 8.84999L18.6895 7.64999C19.7295 6.60999 20.1195 5.60999 19.7895 4.81999C19.4695 4.03999 18.4795 3.60999 17.0195 3.60999H5.81945C5.60945 3.61999 5.43945 3.78999 5.43945 3.99999V16C5.43945 16.21 5.60945 16.38 5.81945 16.38H17.0195C18.4595 16.38 19.4295 15.94 19.7595 15.15C20.0895 14.35 19.7095 13.36 18.6895 12.33Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.6903 12.33L17.4703 11.11C17.1803 10.86 17.0103 10.49 17.0003 10.08C16.9803 9.63 17.1603 9.18 17.4903 8.85L18.6903 7.65C19.7303 6.61 20.1203 5.61 19.7903 4.82C19.4703 4.04 18.4803 3.61 17.0203 3.61H6.57031V2.75C6.57031 2.34 6.23031 2 5.82031 2C5.41031 2 5.07031 2.34 5.07031 2.75V21.25C5.07031 21.66 5.41031 22 5.82031 22C6.23031 22 6.57031 21.66 6.57031 21.25V16.37H17.0203C18.4603 16.37 19.4303 15.93 19.7603 15.14C20.0903 14.35 19.7103 13.36 18.6903 12.33Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFlag as IconComponent).keywords = [
  "flag",
  "ensign",
  "flagstone",
  "pin",
  "swag",
  "sag",
  "slacken off",
  "ease off",
  "droop",
  "ease up"
];

export default IconFlag as IconComponent;