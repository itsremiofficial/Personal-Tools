import { FC } from 'react';

const IconAirplane: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.70016 21.69L12.0302 19.73C12.3802 19.43 12.9602 19.43 13.3102 19.73L15.6402 21.69C16.1802 21.96 16.8402 21.69 17.0402 21.11L17.4802 19.78C17.5902 19.46 17.4802 18.99 17.2402 18.75L14.9702 16.47C14.8002 16.31 14.6702 15.99 14.6702 15.76V12.91C14.6702 12.49 14.9802 12.29 15.3702 12.45L20.2802 14.57C21.0502 14.9 21.6802 14.49 21.6802 13.65V12.36C21.6802 11.69 21.1802 10.92 20.5602 10.66L14.9702 8.25001C14.8102 8.18001 14.6702 7.97001 14.6702 7.79001V4.79001C14.6702 3.85001 13.9802 2.74001 13.1402 2.31001C12.8402 2.16001 12.4902 2.16001 12.1902 2.31001C11.3502 2.74001 10.6602 3.86001 10.6602 4.80001V7.80001C10.6602 7.98001 10.5202 8.19001 10.3602 8.26001L4.78016 10.67C4.16016 10.92 3.66016 11.69 3.66016 12.36V13.65C3.66016 14.49 4.29016 14.9 5.06016 14.57L9.97016 12.45C10.3502 12.28 10.6702 12.49 10.6702 12.91V15.76C10.6702 15.99 10.5402 16.31 10.3802 16.47L8.11016 18.75C7.87016 18.99 7.76016 19.45 7.87016 19.78L8.31016 21.11C8.49016 21.69 9.15016 21.97 9.70016 21.69Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6295 14.0401V12.9301C10.6295 12.5001 10.3095 12.2901 9.91949 12.4601L4.90949 14.6201C4.11949 14.9601 3.47949 14.5401 3.47949 13.6901V12.3701C3.47949 11.6901 3.98949 10.9001 4.61949 10.6401L10.3195 8.19006C10.4795 8.11006 10.6195 7.90006 10.6195 7.72006V4.66006C10.6195 3.70006 11.3295 2.55006 12.1795 2.11006C12.4795 1.96006 12.8395 1.96006 13.1395 2.11006C13.9995 2.55006 14.7095 3.69006 14.7095 4.65006V7.71006C14.7095 7.89006 14.8495 8.10006 15.0095 8.18006L16.0495 8.62006L10.6295 14.0401Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.8601 12.3701V13.6901C21.8601 14.5401 21.2201 14.9601 20.4301 14.6201L15.4201 12.4601C15.0201 12.3001 14.7101 12.5001 14.7101 12.9301V15.8401C14.7101 16.0701 14.8401 16.4001 15.0101 16.5601L17.3301 18.8901C17.5701 19.1301 17.6801 19.6101 17.5701 19.9401L17.1201 21.3001C16.9201 21.8901 16.2501 22.1601 15.7001 21.8901L13.3201 19.8901C12.9601 19.5801 12.3701 19.5801 12.0101 19.8901L9.63008 21.8901C9.08008 22.1701 8.41008 21.8901 8.23008 21.3001L7.78008 19.9401C7.67008 19.6001 7.78008 19.1301 8.02008 18.8901L10.3401 16.5601C10.5001 16.4001 10.6301 16.0701 10.6301 15.8401V14.0401L16.0501 8.62012L20.7201 10.6301C21.3501 10.9001 21.8601 11.6901 21.8601 12.3701Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7195 10.6301L16.0495 8.62006L15.0095 8.18006C14.8495 8.10006 14.7095 7.89006 14.7095 7.71006V4.65006C14.7095 3.69006 13.9995 2.55006 13.1395 2.11006C12.8395 1.96006 12.4795 1.96006 12.1795 2.11006C11.3295 2.55006 10.6195 3.70006 10.6195 4.66006V7.72006C10.6195 7.90006 10.4795 8.11006 10.3195 8.19006L4.61949 10.6401C3.98949 10.9001 3.47949 11.6901 3.47949 12.3701V13.6901C3.47949 14.5401 4.11949 14.9601 4.90949 14.6201L9.91949 12.4601C10.3095 12.2901 10.6295 12.5001 10.6295 12.9301V14.0401V15.8401C10.6295 16.0701 10.4995 16.4001 10.3395 16.5601L8.01949 18.8901C7.77949 19.1301 7.66949 19.6001 7.77949 19.9401L8.22949 21.3001C8.40949 21.8901 9.07949 22.1701 9.62949 21.8901L12.0095 19.8901C12.3695 19.5801 12.9595 19.5801 13.3195 19.8901L15.6995 21.8901C16.2495 22.1601 16.9195 21.8901 17.1195 21.3001L17.5695 19.9401C17.6795 19.6101 17.5695 19.1301 17.3295 18.8901L15.0095 16.5601C14.8395 16.4001 14.7095 16.0701 14.7095 15.8401V12.9301C14.7095 12.5001 15.0195 12.3001 15.4195 12.4601L20.4295 14.6201C21.2195 14.9601 21.8595 14.5401 21.8595 13.6901V12.3701C21.8595 11.6901 21.3495 10.9001 20.7195 10.6301Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAirplane as IconComponent).keywords = [
  "airplane",
  "aeroplane",
  "plane",
  "jetliner",
  "warplane",
  "helicopter",
  "aviation",
  "airport",
  "airliner",
  "aircraft"
];

export default IconAirplane as IconComponent;