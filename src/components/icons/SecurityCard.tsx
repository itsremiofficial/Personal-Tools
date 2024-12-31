import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSecurityCard: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M11.74 17.7499H17.66C17.57 17.8299 17.48 17.8999 17.39 17.9799L13.12 21.1799C11.71 22.2299 9.41001 22.2299 7.99001 21.1799L3.71001 17.9799C2.77001 17.2799 2 15.7299 2 14.5599V7.14986C2 5.92986 2.93001 4.57986 4.07001 4.14986L9.05 2.27986C9.87 1.96986 11.23 1.96986 12.05 2.27986L17.02 4.14986C17.97 4.50986 18.78 5.50986 19.03 6.52986H11.73C11.51 6.52986 11.31 6.53987 11.12 6.53987C9.27 6.64987 8.78999 7.31986 8.78999 9.42986V14.8598C8.79999 17.1598 9.39001 17.7499 11.74 17.7499Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.80078 11.2202H22.0008" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M22.0008 9.41977V14.9698C21.9808 17.1898 21.3708 17.7397 19.0608 17.7397H11.7408C9.39078 17.7397 8.80078 17.1498 8.80078 14.8398V9.40976C8.80078 7.30976 9.28078 6.63974 11.1308 6.51974C11.3208 6.51974 11.5208 6.50977 11.7408 6.50977H19.0608C21.4108 6.51977 22.0008 7.09977 22.0008 9.41977Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.3203 15.2598H12.6503" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.75 15.2598H18.02" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M9.41977 2.15994L3.91977 4.21994C2.86977 4.60994 2.00977 5.85993 2.00977 6.97993V15.0799C2.00977 15.8899 2.53977 16.9599 3.18977 17.4399L8.68977 21.5499C9.65977 22.2799 11.2498 22.2799 12.2198 21.5499L17.7198 17.4399C18.3698 16.9499 18.8998 15.8899 18.8998 15.0799V6.97993C18.8998 5.85993 18.0398 4.60994 16.9898 4.21994L11.4898 2.15994C10.9198 1.94994 9.98977 1.94994 9.41977 2.15994Z" fill="currentColor" /><path d="M19.2601 6.75977H12.4102C12.2102 6.75977 12.0201 6.76978 11.8401 6.76978C10.1201 6.86978 9.66016 7.49978 9.66016 9.45978V9.84978C9.66016 10.264 9.99594 10.5998 10.4102 10.5998H21.2502C21.6644 10.5998 22.0002 10.264 22.0002 9.84978V9.45978C22.0002 7.29978 21.4501 6.75977 19.2601 6.75977Z" fill="currentColor" /><path d="M10.4199 11.7002C10.0057 11.7002 9.66992 12.036 9.66992 12.4502V14.5402C9.66992 16.7002 10.2199 17.2502 12.4099 17.2502H19.2599C21.4099 17.2502 21.9799 16.7302 21.9999 14.6602V12.4502C21.9999 12.036 21.6641 11.7002 21.2499 11.7002H10.4199ZM13.2699 15.4702H12.0199C11.7199 15.4702 11.4799 15.2302 11.4799 14.9302C11.4799 14.6302 11.7199 14.3902 12.0199 14.3902H13.2699C13.5699 14.3902 13.8099 14.6302 13.8099 14.9302C13.8099 15.2302 13.5699 15.4702 13.2699 15.4702ZM17.3199 15.4702H14.8299C14.5299 15.4702 14.2899 15.2302 14.2899 14.9302C14.2899 14.6302 14.5299 14.3902 14.8299 14.3902H17.3199C17.6199 14.3902 17.8599 14.6302 17.8599 14.9302C17.8699 15.2302 17.6199 15.4702 17.3199 15.4702Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSecurityCard as IconComponentType).keywords = [
  "security",
  "card",
  "surety",
  "protection",
  "certificate",
  "security system",
  "security measures",
  "confidentiality",
  "safe",
  "secure",
  "peace",
  "scorecard",
  "batting order",
  "identity card",
  "visiting card",
  "calling card",
  "lineup",
  "poster",
  "placard",
  "tease"
];

export default IconSecurityCard as IconComponentType;