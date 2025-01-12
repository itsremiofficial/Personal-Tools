import { FC } from 'react';

const IconPlayCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6396 22C18.1625 22 22.6396 17.5228 22.6396 12C22.6396 6.47715 18.1625 2 12.6396 2C7.1168 2 2.63965 6.47715 2.63965 12C2.63965 17.5228 7.1168 22 12.6396 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.41016 12.23V10.56C9.41016 8.48 10.8802 7.63 12.6802 8.67L14.1302 9.51L15.5802 10.35C17.3802 11.39 17.3802 13.09 15.5802 14.13L14.1302 14.97L12.6802 15.81C10.8802 16.85 9.41016 16 9.41016 13.92V12.23Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.6396 22C18.1625 22 22.6396 17.5228 22.6396 12C22.6396 6.47715 18.1625 2 12.6396 2C7.1168 2 2.63965 6.47715 2.63965 12C2.63965 17.5228 7.1168 22 12.6396 22Z" fill="currentColor" /><path d="M15.6403 10.23L12.7403 8.56C12.0203 8.14 11.1503 8.14 10.4303 8.56C9.71027 8.98 9.28027 9.72 9.28027 10.56V13.91C9.28027 14.74 9.71027 15.49 10.4303 15.91C10.7903 16.12 11.1903 16.22 11.5803 16.22C11.9803 16.22 12.3703 16.12 12.7303 15.91L15.6303 14.24C16.3503 13.82 16.7803 13.08 16.7803 12.24C16.8003 11.4 16.3703 10.65 15.6403 10.23Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6396 2C7.11965 2 2.63965 6.48 2.63965 12C2.63965 17.52 7.11965 22 12.6396 22C18.1596 22 22.6396 17.52 22.6396 12C22.6396 6.48 18.1696 2 12.6396 2ZM15.6396 14.23L12.7396 15.9C12.3796 16.11 11.9796 16.21 11.5896 16.21C11.1896 16.21 10.7996 16.11 10.4396 15.9C9.71965 15.48 9.28965 14.74 9.28965 13.9V10.55C9.28965 9.72 9.71965 8.97 10.4396 8.55C11.1596 8.13 12.0196 8.13 12.7496 8.55L15.6496 10.22C16.3696 10.64 16.7996 11.38 16.7996 12.22C16.7996 13.06 16.3696 13.81 15.6396 14.23Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPlayCircle as IconComponent).keywords = [
  "play",
  "circle",
  "frolic",
  "fun",
  "gambol",
  "caper",
  "romp",
  "toy",
  "make-believe",
  "pretend",
  "dally",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle"
];

export default IconPlayCircle as IconComponent;