import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconRulerPen: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 22C14.1144 22 13.1716 22 12.5858 21.4142C12 20.8284 12 19.8856 12 18L12 6C12 4.11438 12 3.17157 12.5858 2.58579C13.1716 2 14.1144 2 16 2L18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22H16Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M12 12H14M12 6L14 6M12 18H14M12 15L15 15M12 9L15 9" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M6.01206 21.0271L5.72361 21.5751C5.58657 21.8355 5.30643 22 5 22C4.69357 22 4.41343 21.8355 4.27639 21.5751L3.98794 21.0271M6.01206 21.0271H3.98794M6.01206 21.0271L7.19209 18.785C7.47057 18.2559 7.60981 17.9914 7.71267 17.7157C7.834 17.3905 7.91768 17.0538 7.96223 16.7114C8 16.4211 8 16.1254 8 15.5338L8 5.8L8 4.85C8 3.27599 6.65685 2 5 2C3.34315 2 2 3.27599 2 4.85L2 5.8L2 15.5338C2 16.1254 2 16.4211 2.03777 16.7114C2.08232 17.0538 2.166 17.3905 2.28733 17.7157C2.39019 17.9914 2.52943 18.2559 2.8079 18.785L3.98794 21.0271" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M2 5.7998C2 5.7998 3.125 6.7498 5 6.7498C6.875 6.7498 8 5.7998 8 5.7998" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M16 22C14.1144 22 13.1716 22 12.5858 21.4142C12.0834 20.9119 12.0119 20.1469 12.0017 18.75L12 17.25V15.75V14.25V12.75V11.25V9.75V8.25V6.75L12.0017 5.25C12.0119 3.85306 12.0834 3.08814 12.5858 2.58579C13.1716 2 14.1144 2 16 2H18C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11439 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22H16Z" fill="currentColor" /><path d="M15 8.25H12V9.75H15C15.4142 9.75 15.75 9.41421 15.75 9C15.75 8.58578 15.4142 8.25 15 8.25Z" fill="currentColor" /><path d="M14 5.25L12.0017 5.25L12 6.75H14C14.4142 6.75 14.75 6.41421 14.75 6C14.75 5.58579 14.4142 5.25 14 5.25Z" fill="currentColor" /><path d="M14 11.25H12V12.75H14C14.4142 12.75 14.75 12.4142 14.75 12C14.75 11.5858 14.4142 11.25 14 11.25Z" fill="currentColor" /><path d="M15 14.25L12 14.25V15.75L15 15.75C15.4142 15.75 15.75 15.4142 15.75 15C15.75 14.5858 15.4142 14.25 15 14.25Z" fill="currentColor" /><path d="M14 17.25H12L12.0017 18.75H14C14.4142 18.75 14.75 18.4142 14.75 18C14.75 17.5858 14.4142 17.25 14 17.25Z" fill="currentColor" /><path d="M8 14.9796L8 7.00027C7.23101 7.31727 6.21665 7.58917 5.00018 7.58917C3.78352 7.58917 2.76904 7.31718 2 7.00012L2 14.9796C2 15.6022 2 15.9136 2.03777 16.2192C2.08232 16.5796 2.166 16.934 2.28733 17.2763C2.39019 17.5665 2.52943 17.845 2.8079 18.4019L4.27639 21.3389C4.41343 21.613 4.69357 21.7861 5 21.7861C5.30643 21.7861 5.58657 21.613 5.72361 21.3389L7.1921 18.4019C7.47057 17.845 7.60981 17.5665 7.71267 17.2763C7.834 16.934 7.91768 16.5796 7.96223 16.2192C8 15.9136 8 15.6023 8 14.9796Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M5 2C6.65685 2 8 3.34315 8 5L8 7.00015C7.23101 7.31715 6.21665 7.58905 5.00018 7.58904C3.78352 7.58904 2.76904 7.31706 2 7V5C2 3.34315 3.34315 2 5 2Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5858 21.4142C13.1716 22 14.1144 22 16 22H18C19.8856 22 20.8284 22 21.4142 21.4142C22 20.8284 22 19.8856 22 18V6C22 4.11439 22 3.17157 21.4142 2.58579C20.8284 2 19.8856 2 18 2H16C14.1144 2 13.1716 2 12.5858 2.58579C12.0834 3.08814 12.0119 3.85306 12.0017 5.25L14 5.25C14.4142 5.25 14.75 5.58579 14.75 6C14.75 6.41421 14.4142 6.75 14 6.75H12V8.25H15C15.4142 8.25 15.75 8.58578 15.75 9C15.75 9.41421 15.4142 9.75 15 9.75H12V11.25H14C14.4142 11.25 14.75 11.5858 14.75 12C14.75 12.4142 14.4142 12.75 14 12.75H12V14.25L15 14.25C15.4142 14.25 15.75 14.5858 15.75 15C15.75 15.4142 15.4142 15.75 15 15.75L12 15.75V17.25H14C14.4142 17.25 14.75 17.5858 14.75 18C14.75 18.4142 14.4142 18.75 14 18.75H12.0017C12.0119 20.1469 12.0834 20.9119 12.5858 21.4142Z" fill="currentColor" /><path d="M8 15.1935L8 7.21416C7.23101 7.53116 6.21665 7.80306 5.00018 7.80306C3.78352 7.80306 2.76904 7.53107 2 7.21401L2 15.1935C2 15.8161 2 16.1275 2.03777 16.433C2.08232 16.7934 2.166 17.1479 2.28733 17.4902C2.39019 17.7804 2.52943 18.0589 2.8079 18.6158L4.27639 21.5528C4.41343 21.8269 4.69357 22 5 22C5.30643 22 5.58657 21.8269 5.72361 21.5528L7.1921 18.6158C7.47057 18.0589 7.60981 17.7804 7.71267 17.4902C7.834 17.1479 7.91768 16.7934 7.96223 16.433C8 16.1275 8 15.8161 8 15.1935Z" fill="currentColor" /><path d="M8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5L2 5.95702C2.02634 5.97025 2.0532 5.98352 2.08057 5.99679C2.76149 6.32693 3.75513 6.65872 5.00018 6.65872C6.24523 6.65872 7.23887 6.32693 7.9198 5.99679C7.94704 5.98358 7.97378 5.97037 8 5.9572V5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRulerPen as IconComponentType).keywords = [
  "ruler",
  "pen",
  "rule",
  "ndp",
  "head",
  "roi",
  "officer",
  "leadership",
  "boss",
  "leader",
  "administrator",
  "playpen",
  "penitentiary",
  "compose",
  "indite",
  "write",
  "paddock",
  "corral",
  "basin",
  "sty"
];

export default IconRulerPen as IconComponentType;