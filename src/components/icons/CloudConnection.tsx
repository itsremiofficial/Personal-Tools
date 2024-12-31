import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCloudConnection: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.36973 9.51017C2.28973 9.80017 2.29973 15.7102 6.36973 16.0002H16.0297C17.1997 16.0102 18.3297 15.5702 19.1997 14.7802C22.0597 12.2802 20.5297 7.28015 16.7597 6.80015C15.4097 -1.33985 3.61974 1.75017 6.40974 9.51017" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 16V19" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 23C13.1046 23 14 22.1046 14 21C14 19.8954 13.1046 19 12 19C10.8954 19 10 19.8954 10 21C10 22.1046 10.8954 23 12 23Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18 21H14" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10 21H6" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.2007 14.7799C18.3407 15.5699 17.2007 16.0099 16.0307 15.9999H6.3707C2.3007 15.7099 2.2907 9.79993 6.3707 9.50993H6.41071C3.62071 1.74993 15.4107 -1.34009 16.7607 6.79991C20.5307 7.27991 22.0607 12.2899 19.2007 14.7799Z" fill="currentColor" /><path d="M18.75 21C18.75 21.41 18.41 21.75 18 21.75H14C13.95 21.75 13.91 21.75 13.86 21.73C13.57 22.47 12.84 23 12 23C11.16 23 10.43 22.47 10.14 21.73C10.09 21.75 10.05 21.75 10 21.75H6C5.59 21.75 5.25 21.41 5.25 21C5.25 20.59 5.59 20.25 6 20.25H10C10.05 20.25 10.09 20.25 10.14 20.27C10.34 19.75 10.75 19.34 11.27 19.14C11.25 19.09 11.25 19.05 11.25 19V16H12.75V19C12.75 19.05 12.75 19.09 12.73 19.14C13.25 19.34 13.66 19.75 13.86 20.27C13.91 20.25 13.95 20.25 14 20.25H18C18.41 20.25 18.75 20.59 18.75 21Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCloudConnection as IconComponentType).keywords = [
  "cloud",
  "connection",
  "fog",
  "mist",
  "befog",
  "haze over",
  "becloud",
  "dapple",
  "mottle",
  "sully",
  "defile",
  "connexion",
  "connectedness",
  "connective",
  "joining",
  "connector",
  "link",
  "connecter",
  "association",
  "connecting"
];

export default IconCloudConnection as IconComponentType;