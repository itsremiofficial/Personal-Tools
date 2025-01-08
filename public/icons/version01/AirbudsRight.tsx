import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconAirbudsRight: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 18.6667V19.5C21 19.6393 21 19.7089 20.997 19.7678C20.9366 20.973 19.973 21.9366 18.7678 21.997C18.7089 22 18.6393 22 18.5 22C18.3607 22 18.2911 22 18.2322 21.997C17.027 21.9366 16.0634 20.973 16.003 19.7678C16 19.7089 16 19.6393 16 19.5V18.6667M21 18.6667V7.625L20.9999 7.55936C20.9841 4.49563 18.5044 2.01591 15.4406 2.00007L15.375 2L15.3356 2.00004C13.4974 2.00954 12.0095 3.49738 12 5.33562L12 5.375V8C12 9.65685 13.3431 11 15 11C15.5523 11 16 11.4477 16 12V18.6667M21 18.6667H16" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M15 5V8" stroke="currentColor" strokeWidth="1.67647" strokeLinecap="round" /><circle opacity={duotone ? "0.5" : "1"} cx="7.5" cy="16.5" r="5.5" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M9 5.1001C7.04087 5.49778 5.4977 7.04095 5.10002 9.00008" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M6 14V13.25C5.58579 13.25 5.25 13.5858 5.25 14H6ZM5.25 19C5.25 19.4142 5.58579 19.75 6 19.75C6.41421 19.75 6.75 19.4142 6.75 19H5.25ZM6 16.5H5.25V17.25H6V16.5ZM8.35688 19.3859C8.56999 19.7411 9.03069 19.8562 9.38587 19.6431C9.74106 19.43 9.85623 18.9693 9.64312 18.6141L8.35688 19.3859ZM6 14.75H7.5V13.25H6V14.75ZM6.75 16.5V14H5.25V16.5H6.75ZM8.25 15.25C8.25 15.4039 8.04806 15.75 7.5 15.75V17.25C8.6088 17.25 9.75 16.4768 9.75 15.25H8.25ZM7.5 14.75C8.04806 14.75 8.25 15.0961 8.25 15.25H9.75C9.75 14.0232 8.6088 13.25 7.5 13.25V14.75ZM5.25 14V19H6.75V14H5.25ZM7.5 15.75H6V17.25H7.5V15.75ZM6.85688 16.8859L8.35688 19.3859L9.64312 18.6141L8.14312 16.1141L6.85688 16.8859Z" fill="currentColor" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.6176 22C20.9334 22 22 20.8807 22 19.5H17.2353C17.2353 20.8807 18.3019 22 19.6176 22Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M13 7.88889V5.54167C13 5.34832 13 5.25148 13.0038 5.16977C13.084 3.45743 14.3888 2.08814 16.0206 2.00402C16.0985 2 16.1907 2 16.375 2C16.6822 2 16.8358 2 16.9657 2.00669C19.6853 2.1469 21.86 4.42905 21.9936 7.28296C22 7.41917 22 7.58038 22 7.90278V17.8333H17.2353V12.3333C17.2353 11.7197 16.7612 11.2222 16.1765 11.2222C14.4222 11.2222 13 9.72984 13 7.88889ZM14.6765 5.125C14.6765 4.66476 15.0123 4.29167 15.4265 4.29167C15.8407 4.29167 16.1765 4.66476 16.1765 5.125V7.90278C16.1765 8.36302 15.8407 8.73611 15.4265 8.73611C15.0123 8.73611 14.6765 8.36302 14.6765 7.90278V5.125Z" fill="currentColor" /><g opacity={duotone ? "0.5" : "1"}><path d="M13 16.4998C13 19.5373 10.5376 21.9998 7.5 21.9998C4.46243 21.9998 2 19.5373 2 16.4998C2 13.4622 4.46243 10.9998 7.5 10.9998C10.5376 10.9998 13 13.4622 13 16.4998Z" fill="currentColor" /></g><g opacity={duotone ? "0.5" : "1"}><path fillRule="evenodd" clipRule="evenodd" d="M10.7347 4.95056C10.8171 5.35649 10.5549 5.75237 10.1489 5.83477C8.485 6.17253 7.17253 7.485 6.83477 9.14894C6.75237 9.55487 6.35649 9.81715 5.95056 9.73475C5.54462 9.65235 5.28235 9.25647 5.36475 8.85054C5.82235 6.59622 7.59622 4.82235 9.85054 4.36475C10.2565 4.28235 10.6523 4.54462 10.7347 4.95056Z" fill="currentColor" /></g><path fillRule="evenodd" clipRule="evenodd" d="M6 13.25C5.58579 13.25 5.25 13.5858 5.25 14V19C5.25 19.4142 5.58579 19.75 6 19.75C6.41421 19.75 6.75 19.4142 6.75 19V17.25H7.07536L8.35688 19.3859C8.56999 19.7411 9.03069 19.8562 9.38587 19.6431C9.74106 19.43 9.85623 18.9693 9.64312 18.6141L8.65373 16.9651C9.28176 16.6355 9.75 16.0358 9.75 15.25C9.75 14.0232 8.6088 13.25 7.5 13.25H6ZM6.75 14.75V15.75H7.5C8.04806 15.75 8.25 15.4039 8.25 15.25C8.25 15.0961 8.04806 14.75 7.5 14.75H6.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10.735 4.95082C10.8174 5.35675 10.5551 5.75263 10.1492 5.83503C8.48526 6.17279 7.17279 7.48526 6.83503 9.1492C6.75263 9.55513 6.35675 9.81741 5.95082 9.73501C5.54488 9.65261 5.28261 9.25674 5.36501 8.8508C5.82261 6.59648 7.59648 4.82261 9.8508 4.36501C10.2567 4.28261 10.6526 4.54488 10.735 4.95082Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M7.5 22C10.5376 22 13 19.5376 13 16.5C13 13.4624 10.5376 11 7.5 11C4.46243 11 2 13.4624 2 16.5C2 19.5376 4.46243 22 7.5 22ZM5.25 14C5.25 13.5858 5.58579 13.25 6 13.25H7.5C8.6088 13.25 9.75 14.0232 9.75 15.25C9.75 16.0358 9.28176 16.6355 8.65373 16.9651L9.64312 18.6141C9.85623 18.9693 9.74106 19.43 9.38587 19.6431C9.03069 19.8562 8.56999 19.7411 8.35688 19.3859L7.07536 17.25H6.75V19C6.75 19.4142 6.41421 19.75 6 19.75C5.58579 19.75 5.25 19.4142 5.25 19V14ZM6.75 15.75V14.75H7.5C8.04806 14.75 8.25 15.0961 8.25 15.25C8.25 15.4039 8.04806 15.75 7.5 15.75H6.75Z" fill="currentColor" /><path d="M19.6176 22C20.9334 22 22 20.8807 22 19.5H17.2353C17.2353 20.8807 18.3019 22 19.6176 22Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M13 7.88889V5.54167C13 5.34832 13 5.25148 13.0038 5.16977C13.084 3.45743 14.3888 2.08814 16.0206 2.00402C16.0985 2 16.1907 2 16.375 2C16.6822 2 16.8358 2 16.9657 2.00669C19.6853 2.1469 21.86 4.42905 21.9936 7.28296C22 7.41917 22 7.58038 22 7.90278V17.8333H17.2353V12.3333C17.2353 11.7197 16.7612 11.2222 16.1765 11.2222C14.4222 11.2222 13 9.72984 13 7.88889ZM14.6765 5.125C14.6765 4.66476 15.0123 4.29167 15.4265 4.29167C15.8407 4.29167 16.1765 4.66476 16.1765 5.125V7.90278C16.1765 8.36302 15.8407 8.73611 15.4265 8.73611C15.0123 8.73611 14.6765 8.36302 14.6765 7.90278V5.125Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAirbudsRight as IconComponentType).keywords = [
  "airbuds",
  "right",
  "straight",
  "precise",
  "right on",
  "accurate",
  "decently",
  "satisfactory",
  "exact",
  "powerful",
  "opportune"
];

export default IconAirbudsRight as IconComponentType;