import { FC } from 'react';

const IconBrifecaseTimer: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.9199 12.95V13.88C12.9199 14.23 12.7399 14.56 12.4299 14.74L11.6699 15.2" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.66975 22H16.6697C20.6897 22 21.4097 20.39 21.6197 18.43L22.3697 10.43C22.6397 7.99 21.9397 6 17.6697 6H7.66975C3.39975 6 2.69975 7.99 2.96975 10.43L3.71975 18.43C3.92975 20.39 4.64975 22 8.66975 22Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.66992 6V5.2C8.66992 3.43 8.66992 2 11.8699 2H13.4699C16.6699 2 16.6699 3.43 16.6699 5.2V6" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M12.6699 18.2002C14.8791 18.2002 16.6699 16.4093 16.6699 14.2002C16.6699 11.9911 14.8791 10.2002 12.6699 10.2002C10.4608 10.2002 8.66992 11.9911 8.66992 14.2002C8.66992 16.4093 10.4608 18.2002 12.6699 18.2002Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M22.3197 11C20.5897 12.26 18.6697 13.14 16.6797 13.64" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M3.28906 11.2695C4.95906 12.4095 6.77906 13.2195 8.66906 13.6795" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7997 15.8799C11.5497 15.8799 11.2997 15.7499 11.1597 15.5199C10.9497 15.1699 11.0597 14.6999 11.4197 14.4899L12.3097 13.9599V12.8799C12.3097 12.4699 12.6497 12.1299 13.0597 12.1299C13.4697 12.1299 13.8097 12.4699 13.8097 12.8799V14.3799C13.8097 14.6399 13.6697 14.8899 13.4497 15.0199L12.1997 15.7699C12.0597 15.8399 11.9297 15.8799 11.7997 15.8799Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22.5198 11.4099L21.8998 18.1899C21.6898 20.1899 20.8698 22.2299 16.4698 22.2299H8.84982C4.44982 22.2299 3.62982 20.1899 3.42982 18.1999L2.81982 11.6899C2.82982 11.6999 2.83982 11.7099 2.85982 11.7199C3.19982 11.9399 3.52982 12.1599 3.88982 12.3599C4.02982 12.4499 4.17982 12.5299 4.32982 12.6099C5.45982 13.2299 6.66982 13.7199 7.91982 14.0599C8.41982 14.2099 8.92982 14.3199 9.44982 14.4099C9.64982 16.0099 11.0198 17.2499 12.6698 17.2499C14.3398 17.2499 15.7198 15.9799 15.8998 14.3499V14.3399C16.4098 14.2399 16.9198 14.1099 17.4198 13.9599C18.6698 13.5699 19.8798 13.0499 21.0098 12.3899C21.0698 12.3599 21.1198 12.3299 21.1598 12.2999C21.6198 12.0499 22.0598 11.7599 22.4798 11.4599C22.4998 11.4499 22.5098 11.4299 22.5198 11.4099Z" fill="currentColor" /><path d="M21.76 6.98002C20.91 6.04002 19.5 5.57002 17.43 5.57002H17.19V5.53002C17.19 3.85002 17.19 1.77002 13.43 1.77002H11.91C8.14996 1.77002 8.14996 3.85002 8.14996 5.53002V5.57002H7.90996C5.83996 5.57002 4.41996 6.04002 3.57996 6.98002C2.58996 8.09002 2.61996 9.56002 2.71996 10.57L2.72996 10.64L2.81996 11.69C2.82996 11.7 2.84996 11.71 2.86996 11.72C3.20996 11.94 3.53996 12.16 3.89996 12.36C4.03996 12.45 4.18996 12.53 4.33996 12.61C5.46996 13.23 6.67996 13.72 7.91996 14.06C7.94996 16.65 10.07 18.75 12.67 18.75C15.29 18.75 17.42 16.62 17.42 14V13.96C18.68 13.58 19.89 13.05 21.02 12.39C21.08 12.36 21.12 12.33 21.17 12.3C21.63 12.05 22.07 11.76 22.49 11.46C22.5 11.45 22.52 11.43 22.53 11.41L22.57 11.05L22.62 10.58C22.63 10.52 22.63 10.47 22.64 10.4C22.72 9.40002 22.7 8.02002 21.76 6.98002ZM9.57996 5.53002C9.57996 3.83002 9.57996 3.19002 11.91 3.19002H13.43C15.76 3.19002 15.76 3.83002 15.76 5.53002V5.57002H9.57996V5.53002ZM12.67 17.25C11.02 17.25 9.64996 16.01 9.44996 14.41C9.42996 14.28 9.41996 14.14 9.41996 14C9.41996 12.21 10.88 10.75 12.67 10.75C14.46 10.75 15.92 12.21 15.92 14C15.92 14.12 15.91 14.23 15.9 14.34V14.35C15.72 15.98 14.34 17.25 12.67 17.25Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7997 15.8799C11.5497 15.8799 11.2997 15.7499 11.1597 15.5199C10.9497 15.1699 11.0597 14.6999 11.4197 14.4899L12.3097 13.9599V12.8799C12.3097 12.4699 12.6497 12.1299 13.0597 12.1299C13.4697 12.1299 13.8097 12.4699 13.8097 12.8799V14.3799C13.8097 14.6399 13.6697 14.8899 13.4497 15.0199L12.1997 15.7699C12.0597 15.8399 11.9297 15.8799 11.7997 15.8799Z" fill="currentColor" /><path d="M21.76 6.98002C20.91 6.04002 19.5 5.57002 17.43 5.57002H17.19V5.53002C17.19 3.85002 17.19 1.77002 13.43 1.77002H11.91C8.14996 1.77002 8.14996 3.85002 8.14996 5.53002V5.57002H7.90996C5.83996 5.57002 4.41996 6.04002 3.57996 6.98002C2.58996 8.09002 2.61996 9.56002 2.71996 10.57L2.72996 10.64L2.79904 11.446C2.81224 11.5999 2.89578 11.7392 3.0255 11.8232C3.30919 12.0068 3.61102 12.1995 3.89996 12.36C4.03996 12.45 4.18996 12.53 4.33996 12.61C5.46996 13.23 6.67996 13.72 7.91996 14.06C7.94996 16.65 10.07 18.75 12.67 18.75C15.29 18.75 17.42 16.62 17.42 14V13.96C18.68 13.58 19.89 13.05 21.02 12.39C21.08 12.36 21.12 12.33 21.17 12.3C21.5648 12.0854 21.9744 11.8045 22.3481 11.5395C22.464 11.4573 22.5389 11.3293 22.5546 11.1881L22.57 11.05L22.62 10.58C22.63 10.52 22.63 10.47 22.64 10.4C22.72 9.40002 22.7 8.02002 21.76 6.98002ZM9.57996 5.53002C9.57996 3.83002 9.57996 3.19002 11.91 3.19002H13.43C15.76 3.19002 15.76 3.83002 15.76 5.53002V5.57002H9.57996V5.53002ZM12.67 17.25C11.02 17.25 9.64996 16.01 9.44996 14.41C9.42996 14.28 9.41996 14.14 9.41996 14C9.41996 12.21 10.88 10.75 12.67 10.75C14.46 10.75 15.92 12.21 15.92 14C15.92 14.12 15.91 14.23 15.9 14.34V14.35C15.72 15.98 14.34 17.25 12.67 17.25Z" fill="currentColor" /><path d="M21.71 13.7301C21.9587 13.5919 22.2814 13.7922 22.2555 14.0755L21.9 17.9601C21.69 19.9601 20.87 22.0001 16.47 22.0001H8.85002C4.45002 22.0001 3.63002 19.9601 3.43002 17.9701L3.08415 14.2668C3.0573 13.9793 3.36481 13.785 3.62002 13.9201C4.40002 14.3501 5.21002 14.7301 6.04002 15.0301C6.35002 15.1401 6.57002 15.4001 6.66002 15.7201C7.41002 18.3201 9.83002 20.2501 12.67 20.2501C15.56 20.2501 18 18.2801 18.71 15.5801C18.79 15.2601 19.01 15.0001 19.32 14.8801C20.16 14.5501 20.96 14.1601 21.71 13.7301Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBrifecaseTimer as IconComponent).keywords = [
  "brifecase",
  "timer",
  "clocking",
  "timekeeping",
  "timekeeper",
  "clock",
  "stopwatch",
  "scheduler",
  "timing",
  "developer",
  "bomb"
];

export default IconBrifecaseTimer as IconComponent;