import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconStarFallMinimalistic2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8114 6.7267C12.8247 4.9089 13.3314 4 14.0889 4C14.8464 4 15.353 4.9089 16.3663 6.7267L16.6285 7.19699C16.9164 7.71355 17.0604 7.97183 17.2849 8.14225C17.5094 8.31266 17.789 8.37592 18.3482 8.50244L18.8572 8.61762C20.825 9.06284 21.8089 9.28545 22.0429 10.0382C22.277 10.7909 21.6063 11.5753 20.2648 13.1439L19.9177 13.5498C19.5365 13.9955 19.3459 14.2184 19.2602 14.4942C19.1744 14.7699 19.2032 15.0673 19.2609 15.662L19.3134 16.2035C19.5162 18.2965 19.6176 19.343 19.0047 19.8082C18.3919 20.2734 17.4707 19.8492 15.6283 19.0009L15.1517 18.7815C14.6281 18.5404 14.3664 18.4199 14.0889 18.4199C13.8114 18.4199 13.5496 18.5404 13.0261 18.7815L12.5494 19.0009C10.707 19.8492 9.78581 20.2734 9.17299 19.8082C8.56016 19.343 8.66157 18.2965 8.86438 16.2035L8.91685 15.662C8.97449 15.0673 9.0033 14.7699 8.91756 14.4942C8.83181 14.2184 8.64121 13.9955 8.26 13.5498L7.91295 13.1439C6.57147 11.5753 5.90073 10.7909 6.1348 10.0382C6.36888 9.28545 7.35275 9.06284 9.3205 8.61762L9.82958 8.50244C10.3887 8.37592 10.6683 8.31266 10.8928 8.14225C11.1173 7.97183 11.2613 7.71355 11.5492 7.19699L11.8114 6.7267Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M2.08887 16C3.20445 15.121 4.68639 14.7971 6.08887 15.1257" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M2.08887 10.5C3.08887 10 3.37862 10.0605 4.08887 10" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M2 5.60867L2.20816 5.48676C4.41383 4.19506 6.75032 3.84687 8.95304 4.48161L9.16092 4.54152" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8114 6.7267C12.8247 4.9089 13.3314 4 14.0889 4C14.8464 4 15.353 4.9089 16.3663 6.7267L16.6285 7.19699C16.9164 7.71355 17.0604 7.97183 17.2849 8.14225C17.5094 8.31266 17.789 8.37592 18.3482 8.50244L18.8572 8.61762C20.825 9.06284 21.8089 9.28545 22.0429 10.0382C22.277 10.7909 21.6063 11.5753 20.2648 13.1439L19.9177 13.5498C19.5365 13.9955 19.3459 14.2184 19.2602 14.4942C19.1744 14.7699 19.2032 15.0673 19.2609 15.662L19.3133 16.2035C19.5162 18.2965 19.6176 19.343 19.0047 19.8082C18.3919 20.2734 17.4707 19.8492 15.6283 19.0009L15.1517 18.7815C14.6281 18.5404 14.3664 18.4199 14.0889 18.4199C13.8114 18.4199 13.5496 18.5404 13.0261 18.7815L12.5494 19.0009C10.707 19.8492 9.78581 20.2734 9.17299 19.8082C8.56016 19.343 8.66157 18.2965 8.86438 16.2035L8.91685 15.662C8.97449 15.0673 9.0033 14.7699 8.91756 14.4942C8.83181 14.2184 8.64121 13.9955 8.26 13.5498L7.91295 13.1439C6.57147 11.5753 5.90073 10.7909 6.1348 10.0382C6.36888 9.28545 7.35275 9.06284 9.3205 8.61762L9.82958 8.50244C10.3887 8.37592 10.6683 8.31266 10.8928 8.14225C11.1173 7.97183 11.2613 7.71355 11.5492 7.19699L11.8114 6.7267Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} fillRule="evenodd" clipRule="evenodd" d="M8.74549 5.20241C6.76387 4.63138 4.63821 4.933 2.58729 6.13407L2.37913 6.25598C2.0217 6.4653 1.56226 6.34523 1.35293 5.9878C1.14361 5.63037 1.26368 5.17092 1.62111 4.9616L1.82927 4.8397C4.18969 3.45737 6.73702 3.0626 9.16083 3.76106L9.36871 3.82096C9.76673 3.93566 9.99641 4.35129 9.88171 4.74931C9.76702 5.14733 9.35139 5.37701 8.95337 5.26231L8.74549 5.20241ZM4.83628 9.93646C4.87144 10.3492 4.56537 10.7123 4.15265 10.7474C3.99949 10.7605 3.88206 10.7679 3.78365 10.7742C3.60627 10.7854 3.49069 10.7928 3.33902 10.8219C3.14253 10.8596 2.8874 10.9394 2.4244 11.1709C2.05391 11.3562 1.60341 11.206 1.41817 10.8355C1.23293 10.465 1.38309 10.0145 1.75358 9.8293C2.29057 9.5608 2.68032 9.42092 3.05627 9.34876C3.30317 9.30137 3.55804 9.28477 3.78724 9.26984C3.87053 9.26441 3.95043 9.25921 4.02533 9.25283C4.43804 9.21767 4.80112 9.52374 4.83628 9.93646ZM5.91788 15.8561C4.73392 15.5786 3.48653 15.8538 2.55316 16.5892C2.22781 16.8456 1.75624 16.7896 1.49988 16.4643C1.24353 16.1389 1.29946 15.6674 1.62482 15.411C2.92261 14.3884 4.63911 14.0158 6.2601 14.3956C6.66339 14.4901 6.91371 14.8937 6.81921 15.297C6.72471 15.7003 6.32117 15.9506 5.91788 15.8561Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8114 6.72682C12.8247 4.90902 13.3314 4.00012 14.0889 4.00012C14.8464 4.00012 15.353 4.90902 16.3663 6.72682L16.6285 7.19711C16.9164 7.71367 17.0604 7.97195 17.2849 8.14237C17.5094 8.31278 17.789 8.37604 18.3482 8.50256L18.8572 8.61774C20.825 9.06297 21.8089 9.28558 22.0429 10.0383C22.277 10.791 21.6063 11.5754 20.2648 13.1441L19.9177 13.5499C19.5365 13.9957 19.3459 14.2186 19.2602 14.4943C19.1744 14.77 19.2032 15.0674 19.2609 15.6622L19.3133 16.2036C19.5162 18.2966 19.6176 19.3431 19.0047 19.8083C18.3919 20.2735 17.4707 19.8494 15.6283 19.0011L15.1517 18.7816C14.6281 18.5405 14.3663 18.42 14.0889 18.42C13.8114 18.42 13.5496 18.5405 13.0261 18.7816L12.5494 19.0011C10.707 19.8494 9.78581 20.2735 9.17299 19.8083C8.56016 19.3431 8.66157 18.2966 8.86438 16.2036L8.91685 15.6622C8.97449 15.0674 9.0033 14.77 8.91756 14.4943C8.83181 14.2186 8.64121 13.9957 8.26 13.5499L7.91294 13.1441C6.57147 11.5754 5.90073 10.791 6.1348 10.0383C6.36888 9.28558 7.35275 9.06297 9.3205 8.61774L9.82958 8.50256C10.3887 8.37604 10.6683 8.31278 10.8928 8.14237C11.1173 7.97195 11.2613 7.71367 11.5492 7.19711L11.8114 6.72682Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M8.74536 5.20241C6.76375 4.63138 4.63808 4.933 2.58717 6.13407L2.37901 6.25598C2.02158 6.4653 1.56213 6.34523 1.35281 5.9878C1.14349 5.63037 1.26356 5.17092 1.62099 4.9616L1.82915 4.8397C4.18957 3.45737 6.7369 3.0626 9.16071 3.76106L9.36859 3.82096C9.76661 3.93566 9.99629 4.35129 9.88159 4.74931C9.7669 5.14733 9.35126 5.37701 8.95325 5.26231L8.74536 5.20241ZM4.83616 9.93646C4.87132 10.3492 4.56525 10.7123 4.15253 10.7474C3.99937 10.7605 3.88194 10.7679 3.78353 10.7742C3.60615 10.7854 3.49057 10.7928 3.3389 10.8219C3.14241 10.8596 2.88728 10.9394 2.42428 11.1709C2.05379 11.3562 1.60329 11.206 1.41805 10.8355C1.2328 10.465 1.38297 10.0145 1.75346 9.8293C2.29045 9.5608 2.6802 9.42092 3.05615 9.34876C3.30305 9.30137 3.55792 9.28477 3.78712 9.26984C3.87041 9.26441 3.95031 9.25921 4.0252 9.25283C4.43792 9.21767 4.801 9.52374 4.83616 9.93646ZM5.91775 15.8561C4.7338 15.5786 3.48641 15.8538 2.55304 16.5892C2.22769 16.8456 1.75612 16.7896 1.49976 16.4643C1.24341 16.1389 1.29934 15.6674 1.62469 15.411C2.92249 14.3884 4.63899 14.0158 6.25998 14.3956C6.66327 14.4901 6.91359 14.8937 6.81909 15.297C6.72458 15.7003 6.32104 15.9506 5.91775 15.8561Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconStarFallMinimalistic2 as IconComponentType).keywords = [
  "star",
  "fall",
  "minimalistic",
  "2",
  "stellar",
  "asterisk",
  "lead",
  "leading",
  "maven",
  "sensation",
  "principal",
  "whizz",
  "headliner",
  "come down",
  "decline",
  "descend",
  "descent",
  "downfall",
  "devolve",
  "tumble",
  "decrease",
  "downslope",
  "modularistic",
  "brutalistic",
  "localistic",
  "reductionist",
  "exhibitional",
  "monogynous",
  "simplificational",
  "reductionistic",
  "automatistic",
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

export default IconStarFallMinimalistic2 as IconComponentType;