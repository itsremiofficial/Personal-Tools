import { FC } from 'react';

const IconNexoNexo: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 6L17.6699 3L22.6699 6V18L17.6699 21L7.66992 15V9L17.6699 15V9L12.6699 6Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 6L7.66992 3L2.66992 6V18L7.66992 21L12.3699 17.87" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path d="M12.6699 6L17.6699 3L22.6699 6V18L17.6699 21L7.66992 15V9L17.6699 15V9L12.6699 6Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 18L7.66992 21L2.66992 18V6L7.66992 3L17.6699 9V15L7.66992 9V15L12.6699 18Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6699 6.28V17.71C22.6699 17.89 22.5799 18.05 22.4299 18.14L19.5399 19.87C19.3799 19.96 19.1899 19.96 19.0299 19.87L9.41992 14.28C9.26992 14.19 9.16992 14.03 9.16992 13.85V12.52C9.16992 12.13 9.58992 11.89 9.92992 12.09L18.4199 17.18C18.7499 17.38 19.1799 17.14 19.1799 16.75V8.42C19.1799 8.24 19.0899 8.08001 18.9399 7.99001L14.8599 5.54C14.5399 5.35 14.5399 4.88 14.8599 4.68L17.4299 3.13001C17.5899 3.03001 17.7899 3.03001 17.9499 3.13001L22.4499 5.83C22.5799 5.94 22.6699 6.11 22.6699 6.28Z" fill="none" /><path d="M11.9597 18.43L7.92969 20.85C7.76969 20.95 7.56969 20.95 7.41969 20.85L2.91969 18.15C2.76969 18.06 2.67969 17.9 2.67969 17.72V6.29C2.67969 6.11 2.76969 5.95 2.91969 5.86L7.41969 3.16001C7.57969 3.06001 7.77969 3.06001 7.92969 3.16001L17.4297 8.86C17.5797 8.95 17.6697 9.11 17.6697 9.29V14.12C17.6697 14.51 17.2497 14.75 16.9097 14.55L8.41969 9.46001C8.08969 9.26001 7.6597 9.5 7.6597 9.89V14.72C7.6597 14.9 7.74969 15.06 7.89969 15.15L11.9397 17.58C12.2797 17.77 12.2797 18.23 11.9597 18.43Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconNexoNexo as IconComponent).keywords = [
  "nexo",
  "audient",
  "grapo",
  "vadis",
  "edifier",
  "usee",
  "playbox",
  "credito",
  "fibra",
  "blackmagic"
];

export default IconNexoNexo as IconComponent;