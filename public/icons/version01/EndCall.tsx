import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconEndCall: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12.8619L8 13.4784C8 14.3307 7.42329 15.0825 6.57997 15.3297L4.57997 15.9158C3.29561 16.2922 2 15.3625 2 14.0645L2 12.1416C2 11.6527 2.1247 11.1706 2.44083 10.7891M21.3703 9.8562C21.8162 10.2544 22 10.8315 22 11.4185V13.5431C22 14.7269 20.9105 15.6331 19.7004 15.4558L17.7004 15.1627C16.7227 15.0194 16 14.2066 16 13.2501V12.8619" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M7.25009 12.862C7.25009 13.2762 7.58588 13.612 8.00009 13.612C8.4143 13.612 8.75009 13.2762 8.75009 12.862H7.25009ZM12.0001 7.00024V7.75024V7.00024ZM15.2501 12.862C15.2501 13.2762 15.5859 13.612 16.0001 13.612C16.4143 13.612 16.7501 13.2762 16.7501 12.862L15.2501 12.862ZM12.0001 11.3965V10.6465V11.3965ZM3.01844 11.2677C3.90188 10.2014 6.51327 7.75025 12.0001 7.75024V6.25024C5.98973 6.25025 2.97883 8.96443 1.8634 10.3106L3.01844 11.2677ZM12.0001 7.75024C17.2331 7.75024 19.8649 9.51732 20.8709 10.4157L21.87 9.29685C20.5945 8.1578 17.6088 6.25024 12.0001 6.25024V7.75024ZM16.0001 12.862C16.7501 12.862 16.7501 12.861 16.7501 12.8599C16.7501 12.8596 16.7501 12.8586 16.7501 12.8579C16.7501 12.8565 16.7501 12.8551 16.75 12.8536C16.75 12.8507 16.75 12.8478 16.7499 12.8447C16.7498 12.8385 16.7496 12.8318 16.7492 12.8248C16.7486 12.8107 16.7476 12.7949 16.746 12.7775C16.7429 12.7429 16.7375 12.7018 16.7284 12.6555C16.7103 12.5625 16.6777 12.4487 16.6203 12.3224C16.5031 12.0648 16.2942 11.7813 15.9434 11.5243C15.2574 11.0217 14.0695 10.6465 12.0001 10.6465V12.1465C13.9307 12.1465 14.7428 12.5041 15.0568 12.7342C15.206 12.8435 15.2471 12.9264 15.2549 12.9436C15.26 12.9547 15.2586 12.9554 15.2561 12.9425C15.2549 12.9362 15.2534 12.9267 15.2522 12.9135C15.2516 12.9068 15.2511 12.8993 15.2507 12.8907C15.2505 12.8865 15.2504 12.8819 15.2503 12.8771C15.2502 12.8747 15.2502 12.8723 15.2501 12.8698C15.2501 12.8685 15.2501 12.8672 15.2501 12.8659C15.2501 12.8653 15.2501 12.8643 15.2501 12.8639C15.2501 12.863 15.2501 12.862 16.0001 12.862ZM12.0001 10.6465C9.93065 10.6465 8.74276 11.0217 8.05681 11.5243C7.70599 11.7813 7.49712 12.0648 7.37991 12.3224C7.32248 12.4487 7.28989 12.5625 7.27176 12.6555C7.26272 12.7018 7.25731 12.7429 7.25415 12.7775C7.25257 12.7949 7.25156 12.8107 7.25094 12.8248C7.25063 12.8318 7.25042 12.8385 7.25028 12.8447C7.25021 12.8478 7.25017 12.8507 7.25014 12.8536C7.25012 12.8551 7.25011 12.8565 7.2501 12.8579C7.2501 12.8586 7.25009 12.8596 7.25009 12.8599C7.25009 12.861 7.25009 12.862 8.00009 12.862C8.75009 12.862 8.75009 12.863 8.75009 12.8639C8.75009 12.8643 8.75008 12.8653 8.75008 12.8659C8.75007 12.8672 8.75006 12.8685 8.75005 12.8698C8.75002 12.8723 8.74998 12.8747 8.74993 12.8771C8.74983 12.8819 8.74968 12.8865 8.74949 12.8907C8.74911 12.8993 8.74858 12.9068 8.74798 12.9135C8.74678 12.9267 8.74527 12.9362 8.74404 12.9425C8.74154 12.9554 8.7402 12.9547 8.74527 12.9436C8.75306 12.9264 8.79419 12.8435 8.94337 12.7342C9.25742 12.5041 10.0695 12.1465 12.0001 12.1465V10.6465Z" fill="currentColor" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8 12.8619L8 13.4784C8 14.3306 7.42329 15.0825 6.57997 15.3296L4.57997 15.9157C3.29561 16.2921 2 15.3625 2 14.0645L2 12.1416C2 11.6527 2.1247 11.1706 2.44083 10.7891C3.17325 9.9051 4.87862 8.28193 8 7.4777V12.8619ZM16 12.8619V13.2501C16 14.2065 16.7227 15.0194 17.7004 15.1626L19.7004 15.4557C20.9105 15.6331 22 14.7269 22 13.5431V11.4184C22 10.8315 21.8162 10.2543 21.3703 9.85616C20.5528 9.12609 18.8785 7.97555 16 7.3822V12.8619Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M12 11.3965C16 11.3965 16 12.862 16 12.862V7.3823C14.862 7.14773 13.5359 7.00024 12 7.00024C10.4641 7.00024 9.13797 7.1846 8 7.4778V12.862C8 12.862 8 11.3965 12 11.3965Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 13.4783L8 12.8618C8 12.8618 8 11.3964 12 11.3964C16 11.3964 16 12.8618 16 12.8618V13.2501C16 14.2065 16.7227 15.0193 17.7004 15.1626L19.7004 15.4557C20.9105 15.633 22 14.7268 22 13.5431V11.4184C22 10.8314 21.8162 10.2543 21.3703 9.85613C20.2296 8.83744 17.4208 7.00012 12 7.00012C6.25141 7.00012 3.44027 9.58281 2.44083 10.789C2.1247 11.1706 2 11.6526 2 12.1416L2 14.0645C2 15.3625 3.29561 16.2921 4.57997 15.9157L6.57997 15.3296C7.42329 15.0824 8 14.3306 8 13.4783Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconEndCall as IconComponentType).keywords = [
  "end",
  "call",
  "finish",
  "conclusion",
  "close",
  "remainder",
  "remnant",
  "closing",
  "cease",
  "oddment",
  "terminate",
  "phone call",
  "telephone call",
  "call in",
  "telephone",
  "phone",
  "call up",
  "send for",
  "call option",
  "margin call"
];

export default IconEndCall as IconComponentType;