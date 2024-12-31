import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSetting5: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V2" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 22V17" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 7V2" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M5 22V11" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 11H7" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><g opacity={duotone ? "0.4" : "1"}><path d="M19 22V11" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M17 11H21" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><g opacity={duotone ? "0.4" : "1"}><path d="M12 13V2" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M10 13H14" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18.5094 1.7998C18.0094 1.7998 17.6094 2.1998 17.6094 2.6998V7.3498C17.6094 7.8498 18.0094 8.2498 18.5094 8.2498C19.0094 8.2498 19.4094 7.8498 19.4094 7.3498V2.6998C19.4094 2.1998 19.0094 1.7998 18.5094 1.7998Z" fill="currentColor" /><path d="M11.9996 15.75C11.4996 15.75 11.0996 16.15 11.0996 16.65V21.3C11.0996 21.8 11.4996 22.2 11.9996 22.2C12.4996 22.2 12.8996 21.8 12.8996 21.3V16.65C12.8996 16.16 12.4996 15.75 11.9996 15.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M5.48984 1.7998C4.98984 1.7998 4.58984 2.1998 4.58984 2.6998V7.3498C4.58984 7.8498 4.98984 8.2498 5.48984 8.2498C5.98984 8.2498 6.38984 7.8498 6.38984 7.3498V2.6998C6.38984 2.1998 5.97984 1.7998 5.48984 1.7998Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M7.35047 10.1699H3.63047C3.13047 10.1699 2.73047 10.5699 2.73047 11.0699C2.73047 11.5699 3.13047 11.9699 3.63047 11.9699H4.59047V21.2999C4.59047 21.7999 4.99047 22.1999 5.49047 22.1999C5.99047 22.1999 6.39047 21.7999 6.39047 21.2999V11.9699H7.35047C7.85047 11.9699 8.25047 11.5699 8.25047 11.0699C8.25047 10.5699 7.84047 10.1699 7.35047 10.1699Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.37 10.1699H16.65C16.15 10.1699 15.75 10.5699 15.75 11.0699C15.75 11.5699 16.15 11.9699 16.65 11.9699H17.61V21.2999C17.61 21.7999 18.01 22.1999 18.51 22.1999C19.01 22.1999 19.41 21.7999 19.41 21.2999V11.9699H20.37C20.87 11.9699 21.27 11.5699 21.27 11.0699C21.27 10.5699 20.87 10.1699 20.37 10.1699Z" fill="currentColor" /><path d="M13.8602 12.0298H12.9002V2.6998C12.9002 2.1998 12.5002 1.7998 12.0002 1.7998C11.5002 1.7998 11.1002 2.1998 11.1002 2.6998V12.0298H10.1402C9.64023 12.0298 9.24023 12.4298 9.24023 12.9298C9.24023 13.4298 9.64023 13.8298 10.1402 13.8298H13.8602C14.3602 13.8298 14.7602 13.4298 14.7602 12.9298C14.7602 12.4298 14.3602 12.0298 13.8602 12.0298Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSetting5 as IconComponentType).keywords = [
  "setting",
  "5",
  "scene",
  "stage setting",
  "mise en scene",
  "scope",
  "background",
  "mount",
  "place setting",
  "scenario",
  "context",
  "wash out",
  "cut up",
  "pull out",
  "pull up",
  "pull over",
  "pull in",
  "work out",
  "ride down",
  "rush hour"
];

export default IconSetting5 as IconComponentType;