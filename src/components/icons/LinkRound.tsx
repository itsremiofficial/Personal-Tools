import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconLinkRound: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M14 9.00049H12C8.68629 9.00049 6 11.6868 6 15.0005C6 18.3142 8.68629 21.0005 12 21.0005H16C19.3137 21.0005 22 18.3142 22 15.0005C22 13.4638 21.4223 12.062 20.4722 11.0005" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M10 15.0005H12C15.3137 15.0005 18 12.3142 18 9.00049C18 5.68678 15.3137 3.00049 12 3.00049H8C4.68629 3.00049 2 5.68678 2 9.00049C2 10.5372 2.57771 11.939 3.52779 13.0005" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8 2.25049C4.27208 2.25049 1.25 5.27257 1.25 9.00049C1.25 10.7288 1.90054 12.307 2.96894 13.5007C3.24518 13.8093 3.71933 13.8356 4.02797 13.5593C4.33662 13.2831 4.36288 12.8089 4.08664 12.5003C3.25487 11.571 2.75 10.3456 2.75 9.00049C2.75 6.10099 5.10051 3.75049 8 3.75049H12C14.8995 3.75049 17.25 6.10099 17.25 9.00049C17.25 11.9 14.8995 14.2505 12 14.2505H10C9.58579 14.2505 9.25 14.5863 9.25 15.0005C9.25 15.4147 9.58579 15.7505 10 15.7505H12C15.7279 15.7505 18.75 12.7284 18.75 9.00049C18.75 5.27257 15.7279 2.25049 12 2.25049H8Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M6.75 15.0005C6.75 12.101 9.10051 9.75049 12 9.75049H14C14.4142 9.75049 14.75 9.4147 14.75 9.00049C14.75 8.58627 14.4142 8.25049 14 8.25049H12C8.27208 8.25049 5.25 11.2726 5.25 15.0005C5.25 18.7284 8.27208 21.7505 12 21.7505H16C19.7279 21.7505 22.75 18.7284 22.75 15.0005C22.75 13.2722 22.0995 11.694 21.0311 10.5003C20.7548 10.1917 20.2807 10.1654 19.972 10.4416C19.6634 10.7179 19.6371 11.192 19.9134 11.5007C20.7451 12.43 21.25 13.6554 21.25 15.0005C21.25 17.9 18.8995 20.2505 16 20.2505H12C9.10051 20.2505 6.75 17.9 6.75 15.0005Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.25 9.00049C1.25 5.27257 4.27208 2.25049 8 2.25049H12C15.7279 2.25049 18.75 5.27257 18.75 9.00049C18.75 12.7284 15.7279 15.7505 12 15.7505H10C9.58579 15.7505 9.25 15.4147 9.25 15.0005C9.25 14.5863 9.58579 14.2505 10 14.2505H12C14.8995 14.2505 17.25 11.9 17.25 9.00049C17.25 6.10099 14.8995 3.75049 12 3.75049H8C5.10051 3.75049 2.75 6.10099 2.75 9.00049C2.75 10.3456 3.25487 11.571 4.08664 12.5003C4.36288 12.8089 4.33662 13.2831 4.02797 13.5593C3.71933 13.8356 3.24518 13.8093 2.96894 13.5007C1.90054 12.307 1.25 10.7288 1.25 9.00049ZM12 9.75049C9.10051 9.75049 6.75 12.101 6.75 15.0005C6.75 17.9 9.10051 20.2505 12 20.2505H16C18.8995 20.2505 21.25 17.9 21.25 15.0005C21.25 13.6554 20.7451 12.43 19.9134 11.5007C19.6371 11.192 19.6634 10.7179 19.972 10.4416C20.2807 10.1654 20.7548 10.1917 21.0311 10.5003C22.0995 11.694 22.75 13.2722 22.75 15.0005C22.75 18.7284 19.7279 21.7505 16 21.7505H12C8.27208 21.7505 5.25 18.7284 5.25 15.0005C5.25 11.2726 8.27208 8.25049 12 8.25049H14C14.4142 8.25049 14.75 8.58627 14.75 9.00049C14.75 9.4147 14.4142 9.75049 14 9.75049H12Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLinkRound as IconComponentType).keywords = [
  "link",
  "round",
  "linkup",
  "connection",
  "nexus",
  "connexion",
  "connectedness",
  "connect",
  "tie-in",
  "unite",
  "associate",
  "orbicular",
  "rotund",
  "orbiculate",
  "discoidal",
  "disklike",
  "discoid",
  "ringlike",
  "globular",
  "globose"
];

export default IconLinkRound as IconComponentType;