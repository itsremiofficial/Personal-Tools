import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconWadOfMoney: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 19.0005C6.19108 19.0005 4.78661 19.0005 3.77772 18.3264C3.34096 18.0345 2.96596 17.6595 2.67412 17.2228C2 16.2139 2 14.8094 2 12.0005C2 9.19156 2 7.7871 2.67412 6.77821C2.96596 6.34145 3.34096 5.96644 3.77772 5.67461C4.78661 5.00049 6.19108 5.00049 9 5.00049L15 5.00049C17.8089 5.00049 19.2134 5.00049 20.2223 5.67461C20.659 5.96644 21.034 6.34145 21.3259 6.77821C22 7.7871 22 9.19156 22 12.0005C22 14.8094 22 16.2139 21.3259 17.2228C21.034 17.6595 20.659 18.0345 20.2223 18.3264C19.2134 19.0005 17.8089 19.0005 15 19.0005H9Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M9 9.00049C7.34315 9.00049 6 10.3436 6 12.0005C6 13.6573 7.34315 15.0005 9 15.0005" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M15 9.00049C16.6569 9.00049 18 10.3436 18 12.0005C18 13.6573 16.6569 15.0005 15 15.0005" stroke="currentColor" strokeWidth={width} /><path d="M9 5.00049V18.5005" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M15 5.00049V18.5005" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.25 19.0004H15.75C18.0674 18.9951 19.3075 18.9381 20.2223 18.3268C20.659 18.035 21.034 17.66 21.3259 17.2232C22 16.2143 22 14.8098 22 12.0009C22 9.19199 22 7.78753 21.3259 6.77864C21.034 6.34188 20.659 5.96687 20.2223 5.67504C19.3075 5.06378 18.0674 5.00678 15.75 5.00146H14.25V9.00049H15C16.6569 9.00049 18 10.3436 18 12.0005C18 13.6573 16.6569 15.0005 15 15.0005H14.25V19.0004Z" fill="currentColor" /><path d="M9.75 19.0004V15.0005H9C7.34315 15.0005 6 13.6573 6 12.0005C6 10.3436 7.34315 9.00049 9 9.00049H9.75V5.00146H8.25C5.93257 5.00678 4.69253 5.06378 3.77772 5.67504C3.34096 5.96687 2.96596 6.34188 2.67412 6.77864C2 7.78753 2 9.19199 2 12.0009C2 14.8098 2 16.2143 2.67412 17.2232C2.96596 17.66 3.34096 18.035 3.77772 18.3268C4.69253 18.9381 5.93258 18.9951 8.25 19.0004H9.75Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M9.75 19.0005L14.25 19.0005V5.00049H9.75V19.0005Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.25 5.00103C5.93257 5.00635 4.69253 5.06335 3.77772 5.67461C3.34096 5.96644 2.96596 6.34145 2.67412 6.77821C2 7.7871 2 9.19156 2 12.0005C2 14.8094 2 16.2139 2.67412 17.2228C2.96596 17.6595 3.34096 18.0345 3.77772 18.3264C4.69253 18.9376 5.93258 18.9946 8.25 18.9999V14.906C6.95608 14.5729 6 13.3984 6 12.0005C6 10.6026 6.95608 9.42803 8.25 9.095V5.00103Z" fill="currentColor" /><path d="M9.75 19.0005L14.25 19.0005V5.00049H9.75V19.0005Z" fill="currentColor" /><path d="M15.75 5.00103V9.095C17.0439 9.42803 18 10.6026 18 12.0005C18 13.3984 17.0439 14.5729 15.75 14.906V18.9999C18.0674 18.9946 19.3075 18.9376 20.2223 18.3264C20.659 18.0345 21.034 17.6595 21.3259 17.2228C22 16.2139 22 14.8094 22 12.0005C22 9.19156 22 7.7871 21.3259 6.77821C21.034 6.34145 20.659 5.96644 20.2223 5.67461C19.3075 5.06335 18.0674 5.00635 15.75 5.00103Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWadOfMoney as IconComponentType).keywords = [
  "wad",
  "of",
  "money",
  "cram",
  "heap",
  "cud",
  "chew",
  "slew",
  "mess",
  "bundle",
  "muckle",
  "mickle",
  "bsf",
  "fos",
  "fso",
  "office",
  "osb",
  "tso",
  "tsos",
  "cup of tea",
  "flight of fancy",
  "rich",
  "monied",
  "wealthy",
  "affluent",
  "loaded",
  "flush",
  "muni",
  "finance",
  "financing"
];

export default IconWadOfMoney as IconComponentType;