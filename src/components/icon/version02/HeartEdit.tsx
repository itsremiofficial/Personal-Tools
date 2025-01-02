import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconHeartEdit: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.1599 12.0001C22.4799 10.9801 22.6699 9.88012 22.6699 8.69012C22.6699 5.60012 20.1799 3.1001 17.1099 3.1001C15.2899 3.1001 13.6799 3.98015 12.6699 5.34015C11.6599 3.98015 10.0399 3.1001 8.22992 3.1001C5.15992 3.1001 2.66992 5.60012 2.66992 8.69012C2.66992 15.6901 9.14992 19.8201 12.0499 20.8201C12.2199 20.8801 12.4399 20.9101 12.6699 20.9101" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M19.88 15.74L16.34 19.2801C16.2 19.4201 16.07 19.68 16.04 19.87L15.85 21.22C15.78 21.71 16.12 22.05 16.61 21.98L17.96 21.79C18.15 21.76 18.42 21.63 18.55 21.49L22.09 17.95C22.7 17.34 22.99 16.63 22.09 15.73C21.2 14.84 20.49 15.13 19.88 15.74Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.3701 16.25C19.6701 17.33 20.5101 18.17 21.5901 18.47" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M17.1099 3.1001C15.2999 3.1001 13.6799 3.98008 12.6699 5.33008C11.6599 3.98008 10.0399 3.1001 8.22992 3.1001C5.15992 3.1001 2.66992 5.60009 2.66992 8.69009C2.66992 9.88009 2.85992 10.9801 3.18992 12.0001C4.76992 17.0001 9.63992 19.9901 12.0499 20.8101C12.3899 20.9301 12.9499 20.9301 13.2899 20.8101C15.6999 19.9901 20.5699 17.0001 22.1499 12.0001C22.4799 10.9801 22.6699 9.88009 22.6699 8.69009C22.6699 5.60009 20.1799 3.1001 17.1099 3.1001Z" fill="currentColor" /><path d="M15.5101 9.16025C14.6101 8.26025 13.9001 8.55025 13.2901 9.16025L9.75011 12.7003C9.61011 12.8403 9.48011 13.1003 9.45011 13.2903L9.26011 14.6403C9.19011 15.1303 9.53011 15.4702 10.0201 15.4002L11.3701 15.2102C11.5601 15.1802 11.8301 15.0502 11.9601 14.9102L15.5001 11.3702C16.1201 10.7702 16.4101 10.0602 15.5101 9.16025Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.1099 3.1001C15.2999 3.1001 13.6799 3.9801 12.6699 5.3301C11.6599 3.9801 10.0399 3.1001 8.22992 3.1001C5.15992 3.1001 2.66992 5.6001 2.66992 8.6901C2.66992 9.8801 2.85992 10.9801 3.18992 12.0001C4.76992 17.0001 9.63992 19.9901 12.0499 20.8101C12.3899 20.9301 12.9499 20.9301 13.2899 20.8101C15.6999 19.9901 20.5699 17.0001 22.1499 12.0001C22.4799 10.9801 22.6699 9.8801 22.6699 8.6901C22.6699 5.6001 20.1799 3.1001 17.1099 3.1001ZM15.5099 11.3801L11.9699 14.9201C11.8299 15.0601 11.5699 15.1901 11.3799 15.2201L10.0299 15.4001C9.53992 15.4701 9.19992 15.1301 9.26992 14.6401L9.45992 13.2901C9.48992 13.1001 9.61992 12.8301 9.75992 12.7001L13.2999 9.1601C13.9099 8.5501 14.6199 8.2601 15.5199 9.1601C16.4099 10.0601 16.1199 10.7701 15.5099 11.3801Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHeartEdit as IconComponentType).keywords = [
  "heart",
  "edit",
  "nerve",
  "marrow",
  "eye",
  "nub",
  "pith",
  "bosom",
  "spunk",
  "core",
  "meat",
  "redact",
  "edit out",
  "cut",
  "editor",
  "edition",
  "publication",
  "publish",
  "publishing",
  "authoring"
];

export default IconHeartEdit as IconComponentType;