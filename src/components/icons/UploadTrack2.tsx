import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconUploadTrack2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 15V11V7" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><circle cx="11" cy="15" r="2" stroke="currentColor" strokeWidth={width} /><path d="M16 10C14.3431 10 13 8.65685 13 7" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M18 22V15M18 15L20.5 17.5M18 15L15.5 17.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><circle opacity={duotone ? "0.5" : "1"} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M15.75 21.2731C14.592 21.7419 13.3261 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 13.1455 21.8074 14.246 21.4528 15.2709L19.591 13.409C18.7123 12.5303 17.2877 12.5303 16.409 13.409L13.909 15.909C13.0303 16.7877 13.0303 18.2123 13.909 19.091C14.412 19.594 15.094 19.8091 15.75 19.7362V21.2731Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M13.75 7C13.75 6.58579 13.4142 6.25 13 6.25C12.5858 6.25 12.25 6.58579 12.25 7V12.5499C11.875 12.3581 11.4501 12.25 11 12.25C9.48122 12.25 8.25 13.4812 8.25 15C8.25 16.5188 9.48122 17.75 11 17.75C12.5188 17.75 13.75 16.5188 13.75 15V10.0003C14.3767 10.471 15.1558 10.75 16 10.75C16.4142 10.75 16.75 10.4142 16.75 10C16.75 9.58579 16.4142 9.25 16 9.25C14.7574 9.25 13.75 8.24264 13.75 7Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M17.4697 14.4697C17.7626 14.1768 18.2374 14.1768 18.5303 14.4697L21.0303 16.9697C21.3232 17.2626 21.3232 17.7374 21.0303 18.0303C20.7374 18.3232 20.2626 18.3232 19.9697 18.0303L18.75 16.8107V22C18.75 22.4142 18.4142 22.75 18 22.75C17.5858 22.75 17.25 22.4142 17.25 22V16.8107L16.0303 18.0303C15.7374 18.3232 15.2626 18.3232 14.9697 18.0303C14.6768 17.7374 14.6768 17.2626 14.9697 16.9697L17.4697 14.4697Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17.4697 14.4697C17.7626 14.1768 18.2374 14.1768 18.5303 14.4697L21.0303 16.9697C21.3232 17.2626 21.3232 17.7374 21.0303 18.0303C20.7374 18.3232 20.2626 18.3232 19.9697 18.0303L18.75 16.8107V22C18.75 22.4142 18.4142 22.75 18 22.75C17.5858 22.75 17.25 22.4142 17.25 22V16.8107L16.0303 18.0303C15.7374 18.3232 15.2626 18.3232 14.9697 18.0303C14.6768 17.7374 14.6768 17.2626 14.9697 16.9697L17.4697 14.4697Z" fill="currentColor" /><path d="M12.25 15C12.25 14.3096 11.6904 13.75 11 13.75C10.3096 13.75 9.75 14.3096 9.75 15C9.75 15.6904 10.3096 16.25 11 16.25C11.6904 16.25 12.25 15.6904 12.25 15Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M15.75 21.2731C14.592 21.7419 13.3261 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 13.1455 21.8074 14.246 21.4528 15.2709L19.591 13.409C18.7123 12.5303 17.2877 12.5303 16.409 13.409L13.909 15.909C13.0303 16.7877 13.0303 18.2123 13.909 19.091C14.412 19.594 15.094 19.8091 15.75 19.7362V21.2731ZM13 6.25C13.4142 6.25 13.75 6.58579 13.75 7C13.75 8.24264 14.7574 9.25 16 9.25C16.4142 9.25 16.75 9.58579 16.75 10C16.75 10.4142 16.4142 10.75 16 10.75C15.1558 10.75 14.3767 10.471 13.75 10.0003V15C13.75 16.5188 12.5188 17.75 11 17.75C9.48122 17.75 8.25 16.5188 8.25 15C8.25 13.4812 9.48122 12.25 11 12.25C11.4501 12.25 11.875 12.3581 12.25 12.5499V7C12.25 6.58579 12.5858 6.25 13 6.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconUploadTrack2 as IconComponentType).keywords = [
  "upload",
  "track",
  "2",
  "download",
  "loader",
  "reload",
  "uplink",
  "send",
  "sending",
  "charging",
  "recharge",
  "rechargeable",
  "cover",
  "traverse",
  "path",
  "racecourse",
  "cartroad",
  "rail",
  "cut across",
  "running",
  "trail",
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

export default IconUploadTrack2 as IconComponentType;