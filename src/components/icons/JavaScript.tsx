import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconJavaScript: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.12009 2H19.8901C20.4901 2 20.9501 2.52 20.8801 3.11L19.0801 19.33C19.0401 19.73 18.7501 20.07 18.3601 20.18L12.2801 21.92C12.1001 21.97 11.9101 21.97 11.7301 21.92L5.65012 20.18C5.26012 20.07 4.98009 19.73 4.93009 19.33L3.1301 3.11C3.0601 2.52 3.52009 2 4.12009 2Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.62 7.00977V15.9898L7.5 15.0898" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.5004 7L13.3503 7.45V12.4L16.5004 11.95V15.1L12.9004 16" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M4.12009 2H19.8901C20.4901 2 20.9501 2.52 20.8801 3.11L19.0801 19.33C19.0401 19.73 18.7501 20.07 18.3601 20.18L12.2801 21.92C12.1001 21.97 11.9101 21.97 11.7301 21.92L5.65012 20.18C5.26012 20.07 4.98009 19.73 4.93009 19.33L3.1301 3.11C3.0601 2.52 3.52009 2 4.12009 2Z" fill="currentColor" /><path d="M10.6198 16.7398C10.5498 16.7398 10.4798 16.7298 10.4098 16.7098L7.28983 15.8098C6.88983 15.6898 6.65988 15.2798 6.77988 14.8798C6.88988 14.4798 7.30987 14.2598 7.70987 14.3698L9.86985 14.9898V7.00977C9.86985 6.59977 10.2098 6.25977 10.6198 6.25977C11.0298 6.25977 11.3698 6.59977 11.3698 7.00977V15.9798C11.3698 16.2198 11.2599 16.4398 11.0699 16.5798C10.9399 16.6798 10.7798 16.7398 10.6198 16.7398Z" fill="currentColor" /><path d="M12.9001 16.7498C12.5601 16.7498 12.2601 16.5198 12.1701 16.1798C12.0701 15.7798 12.3101 15.3698 12.7201 15.2698L15.7501 14.5098V12.8098L13.4601 13.1398C13.2401 13.1698 13.0301 13.1098 12.8601 12.9598C12.7001 12.8198 12.6001 12.6098 12.6001 12.3898V7.44982C12.6001 7.07982 12.8701 6.75982 13.2401 6.70982L16.3901 6.25982C16.8001 6.19982 17.1801 6.48982 17.2401 6.89982C17.3001 7.30982 17.0101 7.68982 16.6001 7.74982L14.1001 8.09982V11.5298L16.3901 11.1998C16.6101 11.1698 16.8201 11.2298 16.9901 11.3798C17.1501 11.5198 17.2501 11.7298 17.2501 11.9498V15.0998C17.2501 15.4398 17.0201 15.7398 16.6801 15.8298L13.0801 16.7298C13.0201 16.7398 12.9601 16.7498 12.9001 16.7498Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconJavaScript as IconComponentType).keywords = [
  "java",
  "script",
  "coffee",
  "sumatra",
  "bali",
  "javascript",
  "cuppa",
  "idl",
  "dancing",
  "dry",
  "joe",
  "handwriting",
  "book",
  "playscript",
  "hand",
  "transcript",
  "write",
  "transcription",
  "file",
  "pattern"
];

export default IconJavaScript as IconComponentType;