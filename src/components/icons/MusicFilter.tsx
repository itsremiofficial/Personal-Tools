import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMusicFilter: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 3H22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 9H11" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 15H8" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 21H6" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M11.8402 22.0001C13.0441 22.0001 14.0202 21.0241 14.0202 19.8201C14.0202 18.6161 13.0441 17.6401 11.8402 17.6401C10.6362 17.6401 9.66016 18.6161 9.66016 19.8201C9.66016 21.0241 10.6362 22.0001 11.8402 22.0001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.9995 18.3699V9.85993C21.9995 8.04993 20.8595 7.79993 19.7095 8.10993L15.3595 9.29993C14.5695 9.51993 14.0195 10.1399 14.0195 11.0499V12.57V13.59V19.82" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.8206 20.5499C21.0246 20.5499 22.0006 19.5739 22.0006 18.3699C22.0006 17.166 21.0246 16.1899 19.8206 16.1899C18.6166 16.1899 17.6406 17.166 17.6406 18.3699C17.6406 19.5739 18.6166 20.5499 19.8206 20.5499Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.0195 13.5999L21.9995 11.4199" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 3.75H2C1.59 3.75 1.25 3.41 1.25 3C1.25 2.59 1.59 2.25 2 2.25H22C22.41 2.25 22.75 2.59 22.75 3C22.75 3.41 22.41 3.75 22 3.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M11 9.75H2C1.59 9.75 1.25 9.41 1.25 9C1.25 8.59 1.59 8.25 2 8.25H11C11.41 8.25 11.75 8.59 11.75 9C11.75 9.41 11.41 9.75 11 9.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M8 15.75H2C1.59 15.75 1.25 15.41 1.25 15C1.25 14.59 1.59 14.25 2 14.25H8C8.41 14.25 8.75 14.59 8.75 15C8.75 15.41 8.41 15.75 8 15.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M6 21.75H2C1.59 21.75 1.25 21.41 1.25 21C1.25 20.59 1.59 20.25 2 20.25H6C6.41 20.25 6.75 20.59 6.75 21C6.75 21.41 6.41 21.75 6 21.75Z" fill="currentColor" /><path d="M21.8602 7.68019C21.2702 7.23019 20.4602 7.14022 19.5102 7.40022L15.1602 8.58021C13.9902 8.90021 13.2702 9.85018 13.2702 11.0502V13.6002V17.2802C12.8502 17.0402 12.3602 16.8902 11.8402 16.8902C10.2302 16.8902 8.91016 18.2002 8.91016 19.8202C8.91016 21.4302 10.2202 22.7502 11.8402 22.7502C13.4602 22.7502 14.7702 21.4402 14.7702 19.8202V14.1702L21.2502 12.4002V15.8302C20.8302 15.5902 20.3402 15.4402 19.8202 15.4402C18.2102 15.4402 16.8902 16.7502 16.8902 18.3702C16.8902 19.9802 18.2002 21.3002 19.8202 21.3002C21.4402 21.3002 22.7502 19.9902 22.7502 18.3702V11.4202V9.87019C22.7502 8.86019 22.4502 8.12019 21.8602 7.68019ZM11.8402 21.2502C11.0502 21.2502 10.4102 20.6102 10.4102 19.8202C10.4102 19.0302 11.0502 18.3902 11.8402 18.3902C12.6302 18.3902 13.2702 19.0302 13.2702 19.8202C13.2702 20.6102 12.6302 21.2502 11.8402 21.2502ZM19.8202 19.8002C19.0302 19.8002 18.3902 19.1602 18.3902 18.3702C18.3902 17.5802 19.0302 16.9402 19.8202 16.9402C20.6102 16.9402 21.2502 17.5802 21.2502 18.3702C21.2502 19.1602 20.6102 19.8002 19.8202 19.8002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMusicFilter as IconComponentType).keywords = [
  "music",
  "filter",
  "sheet music",
  "euphony",
  "medicine",
  "melody",
  "symphony",
  "orchestra",
  "musician",
  "song",
  "singing",
  "filtrate",
  "filter out",
  "percolate",
  "permeate",
  "trickle",
  "sink in",
  "strain",
  "dribble",
  "separate out"
];

export default IconMusicFilter as IconComponentType;