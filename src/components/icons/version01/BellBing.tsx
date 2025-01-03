import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBellBing: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.0001 9.70447V9.00037C19.0001 5.13437 15.8661 2.00037 12.0001 2.00037C8.13407 2.00037 5.00006 5.13437 5.00006 9.00037V9.70447C5.00006 10.5495 4.74995 11.3755 4.28123 12.0786L3.13263 13.8015C2.08349 15.3752 2.88442 17.5143 4.70913 18.0119C9.48258 19.3138 14.5175 19.3138 19.291 18.0119C21.1157 17.5143 21.9166 15.3752 20.8675 13.8015L19.7189 12.0786C19.2502 11.3755 19.0001 10.5495 19.0001 9.70447Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M7.5 19.0004C8.15503 20.7482 9.92246 22.0004 12 22.0004C14.0775 22.0004 15.845 20.7482 16.5 19.0004" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M12 6.00037V10.0004" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M18.7491 9.00036V9.70447C18.7491 10.5495 18.9903 11.3755 19.4422 12.0786L20.5496 13.8015C21.5612 15.3752 20.789 17.5143 19.0296 18.0119C14.4273 19.3138 9.57274 19.3138 4.97036 18.0119C3.21105 17.5143 2.43882 15.3752 3.45036 13.8015L4.5578 12.0786C5.00972 11.3755 5.25087 10.5495 5.25087 9.70447V9.00036C5.25087 5.13437 8.27256 2.00037 12 2.00037C15.7274 2.00037 18.7491 5.13437 18.7491 9.00036Z" fill="currentColor" /><path d="M12.75 6.00037C12.75 5.58615 12.4142 5.25037 12 5.25037C11.5858 5.25037 11.25 5.58615 11.25 6.00037V10.0004C11.25 10.4146 11.5858 10.7504 12 10.7504C12.4142 10.7504 12.75 10.4146 12.75 10.0004V6.00037Z" fill="currentColor" /><path d="M7.24316 18.5453C7.8941 20.5504 9.77767 22 11.9998 22C14.222 22 16.1055 20.5504 16.7565 18.5453C13.611 19.1356 10.3886 19.1356 7.24316 18.5453Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.35179 20.2422C9.19288 21.3114 10.5142 22.0004 12 22.0004C13.4858 22.0004 14.8071 21.3114 15.6482 20.2422C13.2264 20.5704 10.7736 20.5704 8.35179 20.2422Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M18.7491 9.70447V9.00036C18.7491 5.13437 15.7274 2.00037 12 2.00037C8.27256 2.00037 5.25087 5.13437 5.25087 9.00036V9.70447C5.25087 10.5495 5.00972 11.3755 4.5578 12.0786L3.45036 13.8015C2.43882 15.3752 3.21105 17.5143 4.97036 18.0119C9.57274 19.3138 14.4273 19.3138 19.0296 18.0119C20.789 17.5143 21.5612 15.3752 20.5496 13.8015L19.4422 12.0786C18.9903 11.3755 18.7491 10.5495 18.7491 9.70447ZM12 5.25037C12.4142 5.25037 12.75 5.58615 12.75 6.00037V10.0004C12.75 10.4146 12.4142 10.7504 12 10.7504C11.5858 10.7504 11.25 10.4146 11.25 10.0004V6.00037C11.25 5.58615 11.5858 5.25037 12 5.25037Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBellBing as IconComponentType).keywords = [
  "bell",
  "bing",
  "gong",
  "chime",
  "campana",
  "doorbell",
  "buzzer",
  "alexander bell",
  "alexander graham bell",
  "bell shape",
  "ringer",
  "troops",
  "bong",
  "ping",
  "tong",
  "bam",
  "ice",
  "prem",
  "fa",
  "iceland"
];

export default IconBellBing as IconComponentType;