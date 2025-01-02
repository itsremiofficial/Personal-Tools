import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconThermometer: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.0955 10.0002L18.396 11.3008M13.896 13.1997L15.1966 14.5002M10.6868 16.4089L11.9873 17.7095M5.57866 20.5578L5.96229 20.1742C6.39492 19.7415 7.00076 19.529 7.60886 19.5966L8.40799 19.6854C9.32013 19.7867 10.2289 19.468 10.8778 18.819L19.8202 9.87667C21.3933 8.30359 21.3933 5.75313 19.8202 4.18005C18.2471 2.60697 15.6967 2.60698 14.1236 4.18005L5.18123 13.1224C4.53228 13.7714 4.2135 14.6801 4.31485 15.5923L4.40364 16.3914C4.47121 16.9995 4.25869 17.6053 3.82606 18.038L3.44243 18.4216C2.85252 19.0115 2.85252 19.9679 3.44243 20.5578C4.03233 21.1477 4.98875 21.1477 5.57866 20.5578Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.5" : "1"} d="M9 15.0002L15.5 8.50024" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M5.96229 20.1742L5.57866 20.5578C4.98875 21.1477 4.03233 21.1477 3.44243 20.5578C2.85252 19.9679 2.85252 19.0115 3.44243 18.4216L3.82606 18.038C4.25869 17.6053 4.47121 16.9995 4.40364 16.3914L4.31485 15.5923C4.2135 14.6801 4.53228 13.7714 5.18123 13.1224L14.1236 4.18005C15.6967 2.60698 18.2471 2.60697 19.8202 4.18005C21.3933 5.75313 21.3933 8.30359 19.8202 9.87667L10.8778 18.819C10.2289 19.468 9.32013 19.7867 8.40799 19.6854L7.60886 19.5966C7.00076 19.529 6.39492 19.7415 5.96229 20.1742Z" fill="currentColor" /><path d="M12.5176 17.1793L11.4569 18.24C11.4569 18.2399 11.4569 18.24 11.4569 18.24L10.1562 16.9393C9.8633 16.6464 9.8633 16.1715 10.1562 15.8786C10.4491 15.5857 10.924 15.5857 11.2169 15.8786L12.5176 17.1793C12.5176 17.1793 12.5175 17.1793 12.5176 17.1793Z" fill="currentColor" /><path d="M15.7268 13.97L14.6662 15.0307C14.6661 15.0307 14.6662 15.0307 14.6662 15.0307L13.3655 13.73C13.0726 13.4371 13.0726 12.9622 13.3655 12.6693C13.6584 12.3764 14.1332 12.3764 14.4261 12.6693L15.7268 13.97C15.7269 13.9701 15.7268 13.97 15.7268 13.97Z" fill="currentColor" /><path d="M18.9262 10.7706L17.8656 11.8313C17.8655 11.8312 17.8656 11.8313 17.8656 11.8313L16.5649 10.5306C16.272 10.2377 16.272 9.76281 16.5649 9.46991C16.8578 9.17702 17.3327 9.17702 17.6255 9.46991L18.9262 10.7706C18.9263 10.7707 18.9262 10.7706 18.9262 10.7706Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M16.0303 7.96991C16.3232 8.26281 16.3232 8.73768 16.0303 9.03057L9.53033 15.5306C9.23744 15.8235 8.76256 15.8235 8.46967 15.5306C8.17678 15.2377 8.17678 14.7628 8.46967 14.4699L14.9697 7.96991C15.2626 7.67702 15.7374 7.67702 16.0303 7.96991Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5.96229 20.1742L5.57866 20.5578C4.98875 21.1477 4.03233 21.1477 3.44243 20.5578C2.85252 19.9679 2.85252 19.0115 3.44243 18.4216L3.82606 18.038C4.25869 17.6053 4.47121 16.9995 4.40364 16.3914L4.31485 15.5923C4.2135 14.6801 4.53228 13.7714 5.18123 13.1224L14.1236 4.18005C15.6967 2.60698 18.2471 2.60697 19.8202 4.18005C21.3933 5.75313 21.3933 8.30359 19.8202 9.87667L18.9265 10.7704L17.626 9.46991C17.3331 9.17702 16.8583 9.17702 16.5654 9.46991C16.2725 9.76281 16.2725 10.2377 16.5654 10.5306L17.8658 11.831L15.7271 13.9698L14.4266 12.6693C14.1337 12.3764 13.6588 12.3764 13.3659 12.6693C13.0731 12.9622 13.0731 13.4371 13.3659 13.73L14.6664 15.0305L12.5178 17.1791L11.2173 15.8786C10.9244 15.5857 10.4496 15.5857 10.1567 15.8786C9.86379 16.1715 9.86379 16.6464 10.1567 16.9393L11.4571 18.2397L10.8778 18.819C10.2289 19.468 9.32013 19.7867 8.40799 19.6854L7.60886 19.5966C7.00076 19.529 6.39492 19.7415 5.96229 20.1742ZM16.0303 9.03057C16.3232 8.73768 16.3232 8.26281 16.0303 7.96991C15.7374 7.67702 15.2626 7.67702 14.9697 7.96991L8.46967 14.4699C8.17678 14.7628 8.17678 15.2377 8.46967 15.5306C8.76256 15.8235 9.23744 15.8235 9.53033 15.5306L16.0303 9.03057Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconThermometer as IconComponentType).keywords = [
  "thermometer",
  "barometer",
  "temperature",
  "bulb",
  "logger",
  "curve",
  "reading",
  "registrar",
  "freddy",
  "psychrometer"
];

export default IconThermometer as IconComponentType;