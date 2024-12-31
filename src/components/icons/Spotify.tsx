import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSpotify: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.57031 9.32982C10.2003 7.88982 14.3103 8.39985 17.4903 10.6698" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.94043 12.3801C10.5904 11.3301 13.5904 11.7001 15.9104 13.3601" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.83008 15.4099C10.8201 14.6199 13.0701 14.9 14.8101 16.14" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path d="M17.4797 11.4202C17.3297 11.4202 17.1797 11.3702 17.0397 11.2802C14.0597 9.14015 10.2397 8.67015 6.83973 10.0302C6.44973 10.1802 6.01973 9.99015 5.86973 9.61015C5.71973 9.23015 5.90973 8.79015 6.28973 8.64015C10.1697 7.10015 14.5197 7.63016 17.9197 10.0702C18.2597 10.3102 18.3297 10.7801 18.0897 11.1201C17.9497 11.3101 17.7197 11.4202 17.4797 11.4202Z" fill="currentColor" /><path d="M15.9108 14.1102C15.7608 14.1102 15.6108 14.0602 15.4708 13.9702C13.3508 12.4502 10.6408 12.1202 8.21083 13.0802C7.83083 13.2302 7.39083 13.0402 7.24083 12.6602C7.09083 12.2702 7.28082 11.8402 7.66082 11.6902C10.5608 10.5402 13.8108 10.9402 16.3408 12.7602C16.6808 13.0002 16.7508 13.4702 16.5108 13.8102C16.3708 14.0002 16.1408 14.1102 15.9108 14.1102Z" fill="currentColor" /><path d="M14.8095 16.9001C14.6595 16.9001 14.5095 16.8501 14.3695 16.7601C12.8295 15.6601 10.8595 15.4201 9.0995 16.1101C8.7195 16.2601 8.2795 16.0701 8.1295 15.6901C7.9795 15.3001 8.1695 14.8701 8.5495 14.7201C10.7895 13.8301 13.2895 14.1401 15.2395 15.5401C15.5795 15.7801 15.6495 16.2501 15.4095 16.5901C15.2795 16.7901 15.0495 16.9001 14.8095 16.9001Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSpotify as IconComponentType).keywords = [
  "spotify",
  "ipod",
  "audioblog",
  "label",
  "folknik",
  "abba",
  "apple",
  "one-stop",
  "soundcloud rap",
  "music"
];

export default IconSpotify as IconComponentType;