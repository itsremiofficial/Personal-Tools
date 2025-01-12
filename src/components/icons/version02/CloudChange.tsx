import { FC } from 'react';

const IconCloudChange: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.77971 11.85C5.95971 12.05 5.96971 16.15 8.77971 16.35H15.4497C16.2597 16.36 17.0397 16.05 17.6397 15.51C19.6197 13.78 18.5597 10.31 15.9597 9.98001C15.0297 4.34001 6.87974 6.48 8.80974 11.85" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M2.66992 15C2.66992 18.87 5.79992 22 9.66992 22L8.61993 20.25" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22.6699 9C22.6699 5.13 19.5399 2 15.6699 2L16.7199 3.75" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.77971 11.85C5.95971 12.05 5.96971 16.15 8.77971 16.35H15.4497C16.2597 16.36 17.0397 16.05 17.6397 15.51C19.6197 13.78 18.5597 10.31 15.9597 9.98001C15.0297 4.34001 6.87974 6.48 8.80974 11.85" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M9.66992 22.75C5.39992 22.75 1.91992 19.27 1.91992 15C1.91992 14.59 2.25992 14.25 2.66992 14.25C3.07992 14.25 3.41992 14.59 3.41992 15C3.41992 17.96 5.47991 20.44 8.24991 21.09L7.97992 20.64C7.76992 20.28 7.87993 19.82 8.23993 19.61C8.58993 19.4 9.05993 19.51 9.26993 19.87L10.3199 21.62C10.4599 21.85 10.4599 22.14 10.3299 22.37C10.1899 22.6 9.93992 22.75 9.66992 22.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22.6699 9.75C22.2599 9.75 21.9199 9.41 21.9199 9C21.9199 6.04 19.8599 3.55997 17.0899 2.90997L17.3599 3.35999C17.5699 3.71999 17.4599 4.18001 17.0999 4.39001C16.7499 4.60001 16.2799 4.49001 16.0699 4.13L15.0199 2.38C14.8799 2.15 14.8799 1.86 15.0099 1.63C15.1399 1.39 15.3898 1.25 15.6598 1.25C19.9298 1.25 23.4098 4.73 23.4098 9C23.4198 9.41 23.0799 9.75 22.6699 9.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.77971 11.85C5.95971 12.05 5.96971 16.15 8.77971 16.35H15.4497C16.2597 16.36 17.0397 16.05 17.6397 15.51C19.6197 13.78 18.5597 10.31 15.9597 9.98001C15.0297 4.34001 6.87971 6.48001 8.80971 11.85" fill="currentColor" /><path d="M9.66992 22.75C5.39992 22.75 1.91992 19.27 1.91992 15C1.91992 14.59 2.25992 14.25 2.66992 14.25C3.07992 14.25 3.41992 14.59 3.41992 15C3.41992 17.96 5.47992 20.44 8.24992 21.09L7.97992 20.64C7.76992 20.28 7.87992 19.82 8.23992 19.61C8.58992 19.4 9.05992 19.51 9.26992 19.87L10.3199 21.62C10.4599 21.85 10.4599 22.14 10.3299 22.37C10.1899 22.6 9.93992 22.75 9.66992 22.75Z" fill="currentColor" /><path d="M22.6699 9.75C22.2599 9.75 21.9199 9.41 21.9199 9C21.9199 6.04 19.8599 3.56 17.0899 2.91L17.3599 3.36C17.5699 3.72 17.4599 4.18 17.0999 4.39C16.7499 4.6 16.2799 4.49 16.0699 4.13L15.0199 2.38C14.8799 2.15 14.8799 1.86 15.0099 1.63C15.1499 1.4 15.3999 1.25 15.6699 1.25C19.9399 1.25 23.4199 4.73 23.4199 9C23.4199 9.41 23.0799 9.75 22.6699 9.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCloudChange as IconComponent).keywords = [
  "cloud",
  "change",
  "fog",
  "mist",
  "befog",
  "haze over",
  "becloud",
  "dapple",
  "mottle",
  "sully",
  "defile",
  "alteration",
  "alter",
  "convert",
  "interchange",
  "vary",
  "modification",
  "variety",
  "transfer",
  "exchange"
];

export default IconCloudChange as IconComponent;