import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconVideoRemove: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 9V15C22 15.23 22 15.45 21.98 15.67C21.94 15.61 21.89 15.55 21.84 15.5C21.03 14.57 19.83 14 18.5 14C17.24 14 16.09 14.52 15.27 15.36C14.48 16.17 14 17.28 14 18.5C14 19.34 14.24 20.14 14.65 20.82C14.88 21.2 15.17 21.55 15.51 21.84C15.56 21.89 15.61 21.93 15.67 21.98C15.46 22 15.23 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M2.51953 7.10986H21.4795" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.51953 2.10986V6.96985" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.4805 2.10986V6.5199" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M23 18.5C23 18.86 22.96 19.21 22.87 19.55C22.76 20 22.58 20.43 22.35 20.82C21.57 22.12 20.14 23 18.5 23C17.42 23 16.44 22.62 15.68 21.98C15.67 21.98 15.67 21.98 15.67 21.98C15.61 21.93 15.56 21.89 15.51 21.84C15.17 21.55 14.88 21.2 14.65 20.82C14.24 20.14 14 19.34 14 18.5C14 17.28 14.48 16.17 15.27 15.36C16.09 14.52 17.24 14 18.5 14C19.83 14 21.03 14.57 21.84 15.5C21.89 15.55 21.94 15.61 21.98 15.67C22.62 16.44 23 17.43 23 18.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M19.7003 19.6798L17.3203 17.2998" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.6808 17.3198L17.3008 19.6998" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.98 15.67C21.94 15.61 21.89 15.55 21.84 15.5C21.03 14.57 19.83 14 18.5 14C17.24 14 16.09 14.52 15.27 15.36C14.48 16.17 14 17.28 14 18.5C14 19.34 14.24 20.14 14.65 20.82C14.88 21.2 15.17 21.55 15.51 21.84C15.56 21.89 15.61 21.93 15.67 21.98C15.67 21.98 15.67 21.98 15.68 21.98C16.44 22.62 17.42 23 18.5 23C20.14 23 21.57 22.12 22.35 20.82C22.58 20.43 22.76 20 22.87 19.55C22.96 19.21 23 18.86 23 18.5C23 17.43 22.62 16.44 21.98 15.67ZM20.23 20.21C20.08 20.36 19.89 20.43 19.7 20.43C19.51 20.43 19.32 20.36 19.17 20.21L18.51 19.55L17.82 20.24C17.67 20.39 17.48 20.46 17.29 20.46C17.1 20.46 16.91 20.39 16.76 20.24C16.47 19.95 16.47 19.47 16.76 19.18L17.45 18.49L16.79 17.83C16.5 17.54 16.5 17.06 16.79 16.77C17.08 16.48 17.56 16.48 17.85 16.77L18.51 17.43L19.14 16.8C19.43 16.51 19.91 16.51 20.2 16.8C20.49 17.09 20.49 17.57 20.2 17.86L19.57 18.49L20.23 19.15C20.53 19.44 20.53 19.91 20.23 20.21Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22 7.81V15.7C22 15.69 21.99 15.68 21.98 15.67C21.94 15.61 21.89 15.55 21.84 15.5C21.83 15.49 21.82 15.47 21.81 15.46C21 14.56 19.81 14 18.5 14C17.24 14 16.09 14.52 15.27 15.36C14.48 16.17 14 17.28 14 18.5C14 19.34 14.24 20.14 14.65 20.82C14.87 21.19 15.15 21.53 15.47 21.81C15.49 21.82 15.5 21.83 15.51 21.84C15.56 21.89 15.61 21.93 15.67 21.98C15.67 21.98 15.67 21.98 15.68 21.98C15.69 21.99 15.7 22 15.71 22H7.81C4.17 22 2 19.83 2 16.19V7.81C2 7.3 2.04 6.80999 2.13 6.35999C2.64 3.60999 4.67 2.01 7.77 2H16.23C19.33 2.01 21.36 3.60999 21.87 6.35999C21.96 6.80999 22 7.3 22 7.81Z" fill="currentColor" /><path d="M22 7.81V7.85999H2V7.81C2 7.3 2.04 6.80999 2.13 6.35999H7.77V2H9.27V6.35999H14.73V2H16.23V6.35999H21.87C21.96 6.80999 22 7.3 22 7.81Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconVideoRemove as IconComponentType).keywords = [
  "video",
  "remove",
  "tv",
  "television",
  "picture",
  "telecasting",
  "televised",
  "videotaping",
  "videotaped",
  "taping",
  "videotape",
  "take out",
  "get rid of",
  "take away",
  "move out",
  "bump off",
  "slay",
  "murder",
  "take",
  "transfer"
];

export default IconVideoRemove as IconComponentType;