import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconFlash: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.31993 13.28H12.4099V20.48C12.4099 21.54 13.7299 22.04 14.4299 21.24L21.9999 12.64C22.6599 11.89 22.1299 10.72 21.1299 10.72H18.0399V3.51997C18.0399 2.45997 16.7199 1.95997 16.0199 2.75997L8.44994 11.36C7.79994 12.11 8.32993 13.28 9.31993 13.28Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.5 4H1.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.5 20H1.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M4.5 12H1.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.0005 3.66992V20.3299L11.2005 21.2399C10.0905 22.4999 9.1805 22.1599 9.1805 20.4799V13.2799H6.0905C4.6905 13.2799 4.3005 12.4199 5.2305 11.3699L12.0005 3.66992Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.77 12.6299L12 20.3299V3.6699L12.8 2.7599C13.91 1.4999 14.82 1.8399 14.82 3.5199V10.7199H17.91C19.31 10.7199 19.7 11.5799 18.77 12.6299Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFlash as IconComponentType).keywords = [
  "flash",
  "twinkle",
  "twinkling",
  "glint",
  "flare",
  "blink",
  "wink",
  "scud",
  "trice",
  "loud"
];

export default IconFlash as IconComponentType;