import { FC } from 'react';

const IconMusicnote: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.63965 22C10.8488 22 12.6396 20.2091 12.6396 18C12.6396 15.7909 10.8488 14 8.63965 14C6.43051 14 4.63965 15.7909 4.63965 18C4.63965 20.2091 6.43051 22 8.63965 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6396 18V4" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M15.2795 2.11L19.6995 3.58C20.7695 3.94 21.6495 5.15 21.6495 6.28V7.45C21.6495 8.98 20.4695 9.83 19.0195 9.35L14.5995 7.88C13.5295 7.52 12.6495 6.31 12.6495 5.18V4C12.6395 2.48 13.8295 1.62 15.2795 2.11Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.9304 2.87001L15.5104 1.40001C14.5904 1.09001 13.6604 1.20001 12.9804 1.70001C12.2904 2.20001 11.9004 3.04001 11.9004 4.01001V7.78001L18.7804 10.07C19.1204 10.19 19.4704 10.24 19.8004 10.24C20.3604 10.24 20.8804 10.08 21.3104 9.77001C22.0004 9.27001 22.3904 8.43001 22.3904 7.46001V6.28001C22.3904 4.85001 21.2904 3.32001 19.9304 2.87001Z" fill="currentColor" /><path d="M13.3896 8.27002V18C13.3896 20.62 11.2596 22.75 8.63965 22.75C6.01965 22.75 3.88965 20.62 3.88965 18C3.88965 15.38 6.01965 13.25 8.63965 13.25C9.89965 13.25 11.0396 13.75 11.8896 14.55V7.77002L13.3896 8.27002Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.3896 6.28001V7.45001C22.3896 8.43001 21.9996 9.27001 21.3096 9.76001C20.8796 10.08 20.3496 10.23 19.7996 10.23C19.4596 10.23 19.1196 10.18 18.7696 10.06L13.3896 8.27001V18C13.3896 20.62 11.2596 22.75 8.63965 22.75C6.01965 22.75 3.88965 20.62 3.88965 18C3.88965 15.38 6.01965 13.25 8.63965 13.25C9.89965 13.25 11.0396 13.75 11.8896 14.55V4.00001C11.8896 3.03001 12.2896 2.19001 12.9796 1.69001C13.6696 1.20001 14.5896 1.09001 15.5096 1.39001L19.9296 2.87001C21.2896 3.32001 22.3896 4.85001 22.3896 6.28001Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMusicnote as IconComponent).keywords = [
  "musicnote"
];

export default IconMusicnote as IconComponent;