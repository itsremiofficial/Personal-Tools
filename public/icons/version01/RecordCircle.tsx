import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconRecordCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5002 12.0001C18.5002 13.3808 17.381 14.5001 16.0002 14.5001C14.6195 14.5001 13.5002 13.3808 13.5002 12.0001C13.5002 10.6194 14.6195 9.50012 16.0002 9.50012C17.381 9.50012 18.5002 10.6194 18.5002 12.0001Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M22 12.0001C22 17.523 17.5228 22.0001 12 22.0001C6.47715 22.0001 2 17.523 2 12.0001C2 6.47727 6.47715 2.00012 12 2.00012C17.5228 2.00012 22 6.47727 22 12.0001Z" stroke="currentColor" strokeWidth={width} /><path d="M10.5 12.0001C10.5 13.3808 9.38071 14.5001 8 14.5001C6.61929 14.5001 5.5 13.3808 5.5 12.0001C5.5 10.6194 6.61929 9.50012 8 9.50012C9.38071 9.50012 10.5 10.6194 10.5 12.0001Z" stroke="currentColor" strokeWidth={width} /><path d="M8 14.5001H16" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M12 22.0001C17.5228 22.0001 22 17.523 22 12.0001C22 6.47727 17.5228 2.00012 12 2.00012C6.47715 2.00012 2 6.47727 2 12.0001C2 17.523 6.47715 22.0001 12 22.0001Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12.75 12.0001C12.75 12.6444 12.9375 13.245 13.2609 13.7501H10.7391C11.0625 13.245 11.25 12.6444 11.25 12.0001C11.25 10.2052 9.79493 8.75012 8 8.75012C6.20507 8.75012 4.75 10.2052 4.75 12.0001C4.75 13.795 6.20507 15.2501 8 15.2501H16C17.7949 15.2501 19.25 13.795 19.25 12.0001C19.25 10.2052 17.7949 8.75012 16 8.75012C14.2051 8.75012 12.75 10.2052 12.75 12.0001ZM14.25 12.0001C14.25 11.0336 15.0335 10.2501 16 10.2501C16.9665 10.2501 17.75 11.0336 17.75 12.0001C17.75 12.9666 16.9665 13.7501 16 13.7501C15.0335 13.7501 14.25 12.9666 14.25 12.0001ZM9.75 12.0001C9.75 12.9666 8.9665 13.7501 8 13.7501C7.0335 13.7501 6.25 12.9666 6.25 12.0001C6.25 11.0336 7.0335 10.2501 8 10.2501C8.9665 10.2501 9.75 11.0336 9.75 12.0001Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.25 12.0001C14.25 11.0336 15.0335 10.2501 16 10.2501C16.9665 10.2501 17.75 11.0336 17.75 12.0001C17.75 12.9666 16.9665 13.7501 16 13.7501C15.0335 13.7501 14.25 12.9666 14.25 12.0001Z" fill="currentColor" /><path d="M8 13.7501C8.9665 13.7501 9.75 12.9666 9.75 12.0001C9.75 11.0336 8.9665 10.2501 8 10.2501C7.0335 10.2501 6.25 11.0336 6.25 12.0001C6.25 12.9666 7.0335 13.7501 8 13.7501Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 22.0001C17.5228 22.0001 22 17.523 22 12.0001C22 6.47727 17.5228 2.00012 12 2.00012C6.47715 2.00012 2 6.47727 2 12.0001C2 17.523 6.47715 22.0001 12 22.0001ZM13.2609 13.7501C12.9375 13.245 12.75 12.6444 12.75 12.0001C12.75 10.2052 14.2051 8.75012 16 8.75012C17.7949 8.75012 19.25 10.2052 19.25 12.0001C19.25 13.795 17.7949 15.2501 16 15.2501H8C6.20507 15.2501 4.75 13.795 4.75 12.0001C4.75 10.2052 6.20507 8.75012 8 8.75012C9.79493 8.75012 11.25 10.2052 11.25 12.0001C11.25 12.6444 11.0625 13.245 10.7391 13.7501H13.2609Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRecordCircle as IconComponentType).keywords = [
  "record",
  "circle",
  "phonograph record",
  "book",
  "register",
  "read",
  "disk",
  "disc",
  "show",
  "memorialize",
  "commemorate",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle"
];

export default IconRecordCircle as IconComponentType;