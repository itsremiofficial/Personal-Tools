import { FC } from 'react';

const IconHierarchy2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.91992 22C7.71485 22 9.16992 20.5449 9.16992 18.75C9.16992 16.9551 7.71485 15.5 5.91992 15.5C4.125 15.5 2.66992 16.9551 2.66992 18.75C2.66992 20.5449 4.125 22 5.91992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M5.66992 8C7.32678 8 8.66992 6.65685 8.66992 5C8.66992 3.34315 7.32678 2 5.66992 2C4.01307 2 2.66992 3.34315 2.66992 5C2.66992 6.65685 4.01307 8 5.66992 8Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M19.6699 8C21.3268 8 22.6699 6.65685 22.6699 5C22.6699 3.34315 21.3268 2 19.6699 2C18.0131 2 16.6699 3.34315 16.6699 5C16.6699 6.65685 18.0131 8 19.6699 8Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M5.66992 15V8" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M5.7998 15C6.2498 13.25 7.8498 11.95 9.7398 11.96L13.1698 11.97C15.7898 11.98 18.0198 10.3 18.8398 7.95996" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.4199 22C21.2148 22 22.6699 20.5449 22.6699 18.75C22.6699 16.9551 21.2148 15.5 19.4199 15.5C17.625 15.5 16.1699 16.9551 16.1699 18.75C16.1699 20.5449 17.625 22 19.4199 22Z" fill="currentColor" /><path d="M19.6699 8C21.3268 8 22.6699 6.65685 22.6699 5C22.6699 3.34315 21.3268 2 19.6699 2C18.0131 2 16.6699 3.34315 16.6699 5C16.6699 6.65685 18.0131 8 19.6699 8Z" fill="currentColor" /><path d="M5.66992 8C7.32678 8 8.66992 6.65685 8.66992 5C8.66992 3.34315 7.32678 2 5.66992 2C4.01307 2 2.66992 3.34315 2.66992 5C2.66992 6.65685 4.01307 8 5.66992 8Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M5.49983 8.02002C6.46983 10.8 9.08982 12.67 12.0398 12.67C12.0498 12.67 12.0598 12.67 12.0698 12.67L15.5998 12.66C17.1198 12.64 18.4798 13.67 18.8898 15.15V17C18.8898 17.42 19.2298 17.76 19.6498 17.76C20.0698 17.76 20.4098 17.42 20.4098 17V5.78001C20.4098 5.36001 20.0698 5.02002 19.6498 5.02002C19.2298 5.02002 18.8898 5.36001 18.8898 5.78001V12.4C18.0098 11.62 16.8598 11.14 15.6098 11.14C15.5998 11.14 15.5998 11.14 15.5898 11.14L12.0598 11.15C12.0498 11.15 12.0498 11.15 12.0398 11.15C9.74982 11.15 7.69982 9.70001 6.94982 7.53001C6.83982 7.21001 6.53983 7.02002 6.22983 7.02002C6.14983 7.02002 6.05983 7.03001 5.97983 7.06001C5.56983 7.18001 5.35983 7.62002 5.49983 8.02002Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.4199 22C21.2148 22 22.6699 20.5449 22.6699 18.75C22.6699 16.9551 21.2148 15.5 19.4199 15.5C17.625 15.5 16.1699 16.9551 16.1699 18.75C16.1699 20.5449 17.625 22 19.4199 22Z" fill="currentColor" /><path d="M19.6699 8C21.3268 8 22.6699 6.65685 22.6699 5C22.6699 3.34315 21.3268 2 19.6699 2C18.0131 2 16.6699 3.34315 16.6699 5C16.6699 6.65685 18.0131 8 19.6699 8Z" fill="currentColor" /><path d="M5.66992 8C7.32678 8 8.66992 6.65685 8.66992 5C8.66992 3.34315 7.32678 2 5.66992 2C4.01307 2 2.66992 3.34315 2.66992 5C2.66992 6.65685 4.01307 8 5.66992 8Z" fill="currentColor" /><path d="M5.49992 8.02C6.46992 10.8 9.08992 12.67 12.0399 12.67C12.0499 12.67 12.0599 12.67 12.0699 12.67L15.5999 12.66C17.1199 12.64 18.4799 13.67 18.8899 15.15V17C18.8899 17.42 19.2299 17.76 19.6599 17.76C20.0799 17.76 20.4199 17.42 20.4199 17V5.76C20.4199 5.34 20.0799 5 19.6599 5C19.2399 5 18.8899 5.34 18.8899 5.76V12.38C18.0099 11.6 16.8599 11.12 15.6099 11.12C15.5999 11.12 15.5999 11.12 15.5899 11.12L12.0599 11.13C12.0499 11.13 12.0499 11.13 12.0399 11.13C9.74992 11.13 7.69992 9.68 6.94992 7.51C6.82992 7.2 6.53992 7 6.21992 7C6.13992 7 6.04992 7.02 5.96992 7.04C5.56992 7.18 5.35992 7.62 5.49992 8.02Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHierarchy2 as IconComponent).keywords = [
  "hierarchy",
  "2",
  "power structure",
  "pecking order",
  "hierarchical",
  "seniority",
  "class",
  "leadership",
  "high-ranking",
  "affiliated",
  "authority",
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

export default IconHierarchy2 as IconComponent;