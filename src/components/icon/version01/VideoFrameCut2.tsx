import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconVideoFrameCut2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 4H8C5.17157 4 3.75736 4 2.87868 4.87868C2 5.75736 2 7.17157 2 10V14C2 16.8284 2 18.2426 2.87868 19.1213C3.75736 20 5.17157 20 8 20H8.5M15.5 4H16C18.8284 4 20.2426 4 21.1213 4.87868C22 5.75736 22 7.17157 22 10V14C22 16.8284 22 18.2426 21.1213 19.1213C20.2426 20 18.8284 20 16 20H15.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M17 4V20M7 4V20M2.5 9H7M17 9H21.5M2.5 15H7M17 15H21.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M13.1384 2H10.8616C10.4777 2 10.237 2.41474 10.4275 2.74807L11.5659 4.74029C11.7578 5.07619 12.2422 5.07619 12.4341 4.74029L13.5725 2.74807C13.763 2.41474 13.5223 2 13.1384 2Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M13.1384 22H10.8616C10.4777 22 10.237 21.5853 10.4275 21.252L11.5659 19.2597C11.7578 18.9238 12.2422 18.9238 12.4341 19.2597L13.5725 21.252C13.763 21.5853 13.5223 22 13.1384 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M12 11.5V12.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M12 7.5V8.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M12 15.5V16.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M7.75 4.00002V20L12.8571 20L16.25 20V4.00002L12.8571 4L7.75 4.00002Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M10.8616 2H13.1384C13.5223 2 13.763 2.41474 13.5725 2.74807L12.8571 4H11.1428L10.4274 2.74807C10.237 2.41474 10.4776 2 10.8616 2ZM11.1428 20L10.4274 21.2519C10.237 21.5853 10.4776 22 10.8616 22H13.1384C13.5223 22 13.763 21.5853 13.5725 21.2519L12.8571 20H11.1428ZM2.87866 4.87868C3.55364 4.2037 4.54464 4.04722 6.24998 4.01095V8.25H2.01092C2.0472 6.54467 2.20367 5.55366 2.87866 4.87868ZM2 14.25L2 9.75H6.24998V14.25H2ZM2.01092 15.75C2.0472 17.4553 2.20367 18.4463 2.87866 19.1213C3.55364 19.7963 4.54464 19.9528 6.24998 19.9891V15.75H2.01092ZM17.75 4.01095V8.25H21.989C21.9528 6.54467 21.7963 5.55366 21.1213 4.87868C20.4463 4.2037 19.4553 4.04722 17.75 4.01095ZM17.75 9.75H22V14.25H17.75V9.75ZM21.989 15.75H17.75V19.9891C19.4553 19.9528 20.4463 19.7963 21.1213 19.1213C21.7963 18.4463 21.9528 17.4553 21.989 15.75Z" fill="currentColor" /><path d="M12.4341 4.74029L12.8571 4H11.1428L11.5658 4.74029C11.7578 5.07619 12.2421 5.07619 12.4341 4.74029Z" fill="currentColor" /><path d="M12 6.75C12.4142 6.75 12.75 7.08579 12.75 7.5V8.5C12.75 8.91421 12.4142 9.25 12 9.25C11.5858 9.25 11.25 8.91421 11.25 8.5V7.5C11.25 7.08579 11.5858 6.75 12 6.75Z" fill="currentColor" /><path d="M12 10.75C12.4142 10.75 12.75 11.0858 12.75 11.5V12.5C12.75 12.9142 12.4142 13.25 12 13.25C11.5858 13.25 11.25 12.9142 11.25 12.5V11.5C11.25 11.0858 11.5858 10.75 12 10.75Z" fill="currentColor" /><path d="M12 14.75C12.4142 14.75 12.75 15.0858 12.75 15.5V16.5C12.75 16.9142 12.4142 17.25 12 17.25C11.5858 17.25 11.25 16.9142 11.25 16.5V15.5C11.25 15.0858 11.5858 14.75 12 14.75Z" fill="currentColor" /><path d="M12.8571 20L12.4341 19.2597C12.2421 18.9238 11.7578 18.9238 11.5658 19.2597L11.1428 20H12.8571Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M13.1384 2H10.8616C10.4776 2 10.237 2.41474 10.4274 2.74807L11.1428 4L7.74998 4.00002V20L11.1428 20L10.4274 21.2519C10.237 21.5853 10.4776 22 10.8616 22H13.1384C13.5223 22 13.763 21.5853 13.5725 21.2519L12.8571 20L16.25 20V4.00002L12.8571 4L13.5725 2.74807C13.763 2.41474 13.5223 2 13.1384 2ZM12.8571 20L12.4341 19.2597C12.2421 18.9238 11.7578 18.9238 11.5658 19.2597L11.1428 20H12.8571ZM12.8571 4L12.4341 4.74029C12.2421 5.07619 11.7578 5.07619 11.5658 4.74029L11.1428 4H12.8571ZM12.75 7.5C12.75 7.08579 12.4142 6.75 12 6.75C11.5858 6.75 11.25 7.08579 11.25 7.5V8.5C11.25 8.91421 11.5858 9.25 12 9.25C12.4142 9.25 12.75 8.91421 12.75 8.5V7.5ZM12.75 11.5C12.75 11.0858 12.4142 10.75 12 10.75C11.5858 10.75 11.25 11.0858 11.25 11.5V12.5C11.25 12.9142 11.5858 13.25 12 13.25C12.4142 13.25 12.75 12.9142 12.75 12.5V11.5ZM12.75 15.5C12.75 15.0858 12.4142 14.75 12 14.75C11.5858 14.75 11.25 15.0858 11.25 15.5V16.5C11.25 16.9142 11.5858 17.25 12 17.25C12.4142 17.25 12.75 16.9142 12.75 16.5V15.5ZM6.24998 4.01095C4.54464 4.04722 3.55364 4.2037 2.87866 4.87868C2.20367 5.55366 2.0472 6.54467 2.01092 8.25H6.24998V4.01095ZM2 9.75L2 14.25H6.24998V9.75H2ZM2.87866 19.1213C2.20367 18.4463 2.0472 17.4553 2.01092 15.75H6.24998V19.9891C4.54464 19.9528 3.55364 19.7963 2.87866 19.1213ZM17.75 8.25V4.01095C19.4553 4.04722 20.4463 4.2037 21.1213 4.87868C21.7963 5.55366 21.9528 6.54467 21.989 8.25H17.75ZM22 9.75H17.75V14.25H22V9.75ZM17.75 15.75H21.989C21.9528 17.4553 21.7963 18.4463 21.1213 19.1213C20.4463 19.7963 19.4553 19.9528 17.75 19.9891V15.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconVideoFrameCut2 as IconComponentType).keywords = [
  "video",
  "frame",
  "cut",
  "2",
  "tv",
  "television",
  "picture",
  "telecasting",
  "televised",
  "videotaping",
  "videotaped",
  "taping",
  "videotape",
  "build",
  "put",
  "compose",
  "form",
  "draw up",
  "set up",
  "shape",
  "border",
  "outline",
  "gash",
  "slit",
  "slitted",
  "incised",
  "perforated",
  "gashed",
  "pierced",
  "slashed",
  "perforate",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out"
];

export default IconVideoFrameCut2 as IconComponentType;