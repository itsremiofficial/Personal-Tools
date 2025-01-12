import { FC } from 'react';

const IconSearchZoomIn: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M9.87012 11.7002H14.8701" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.3701 14.2002V9.2002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g><path d="M12.1699 21C17.4166 21 21.6699 16.7467 21.6699 11.5C21.6699 6.25329 17.4166 2 12.1699 2C6.92322 2 2.66992 6.25329 2.66992 11.5C2.66992 16.7467 6.92322 21 12.1699 21Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22.6699 22L20.6699 20" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.1699 21C17.4166 21 21.6699 16.7467 21.6699 11.5C21.6699 6.25329 17.4166 2 12.1699 2C6.92322 2 2.66992 6.25329 2.66992 11.5C2.66992 16.7467 6.92322 21 12.1699 21Z" fill="currentColor" /><path d="M21.9695 22.0001C21.7895 22.0001 21.6095 21.9301 21.4795 21.8001L19.6195 19.9401C19.3495 19.6701 19.3495 19.2301 19.6195 18.9501C19.8895 18.6801 20.3295 18.6801 20.6095 18.9501L22.4695 20.8101C22.7395 21.0801 22.7395 21.5201 22.4695 21.8001C22.3295 21.9301 22.1495 22.0001 21.9695 22.0001Z" fill="currentColor" /><path d="M14.8701 10.9502H13.1201V9.2002C13.1201 8.7902 12.7801 8.4502 12.3701 8.4502C11.9601 8.4502 11.6201 8.7902 11.6201 9.2002V10.9502H9.87012C9.46012 10.9502 9.12012 11.2902 9.12012 11.7002C9.12012 12.1102 9.46012 12.4502 9.87012 12.4502H11.6201V14.2002C11.6201 14.6102 11.9601 14.9502 12.3701 14.9502C12.7801 14.9502 13.1201 14.6102 13.1201 14.2002V12.4502H14.8701C15.2801 12.4502 15.6201 12.1102 15.6201 11.7002C15.6201 11.2902 15.2801 10.9502 14.8701 10.9502Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9695 22.0001C21.7895 22.0001 21.6095 21.9301 21.4795 21.8001L19.6195 19.9401C19.3495 19.6701 19.3495 19.2301 19.6195 18.9501C19.8895 18.6801 20.3295 18.6801 20.6095 18.9501L22.4695 20.8101C22.7395 21.0801 22.7395 21.5201 22.4695 21.8001C22.3295 21.9301 22.1495 22.0001 21.9695 22.0001Z" fill="currentColor" /><path d="M12.1699 2C6.92992 2 2.66992 6.26 2.66992 11.5C2.66992 16.74 6.92992 21 12.1699 21C17.4099 21 21.6699 16.74 21.6699 11.5C21.6699 6.26 17.4099 2 12.1699 2ZM14.8699 12.45H13.1199V14.2C13.1199 14.61 12.7799 14.95 12.3699 14.95C11.9599 14.95 11.6199 14.61 11.6199 14.2V12.45H9.86992C9.45992 12.45 9.11992 12.11 9.11992 11.7C9.11992 11.29 9.45992 10.95 9.86992 10.95H11.6199V9.2C11.6199 8.79 11.9599 8.45 12.3699 8.45C12.7799 8.45 13.1199 8.79 13.1199 9.2V10.95H14.8699C15.2799 10.95 15.6199 11.29 15.6199 11.7C15.6199 12.11 15.2799 12.45 14.8699 12.45Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSearchZoomIn as IconComponent).keywords = [
  "search",
  "zoom",
  "in",
  "seek",
  "look for",
  "explore",
  "lookup",
  "research",
  "look",
  "hunting",
  "hunt",
  "seeking",
  "whizz",
  "surge",
  "soar",
  "rapid climb",
  "rapid growth",
  "soar up",
  "soar upwards",
  "whizz along",
  "zoom along",
  "cbs",
  "nsis",
  "nih",
  "nsi",
  "establishment",
  "immigration",
  "without",
  "elected",
  "adherents"
];

export default IconSearchZoomIn as IconComponent;