import { FC } from 'react';

const IconSaveMinus: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6699 8.98987V20.3499C16.6699 21.7999 15.6299 22.4099 14.3599 21.7099L10.4299 19.5199C10.0099 19.2899 9.32991 19.2899 8.90991 19.5199L4.97992 21.7099C3.70992 22.4099 2.66992 21.7999 2.66992 20.3499V8.98987C2.66992 7.27987 4.06991 5.87988 5.77991 5.87988H13.5599C15.2699 5.87988 16.6699 7.27987 16.6699 8.98987Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22.6699 5.10999V16.47C22.6699 17.92 21.6299 18.53 20.3599 17.83L16.6699 15.77V8.98999C16.6699 7.27999 15.2699 5.88 13.5599 5.88H8.66992V5.10999C8.66992 3.39999 10.0699 2 11.7799 2H19.5599C21.2699 2 22.6699 3.39999 22.6699 5.10999Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.66992 12H11.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.6699 8.98987V20.3499C16.6699 21.7999 15.6299 22.4099 14.3599 21.7099L10.4299 19.5199C10.0099 19.2899 9.32991 19.2899 8.90991 19.5199L4.97992 21.7099C3.70992 22.4099 2.66992 21.7999 2.66992 20.3499V8.98987C2.66992 7.27987 4.06991 5.87988 5.77991 5.87988H13.5599C15.2699 5.87988 16.6699 7.27987 16.6699 8.98987Z" fill="currentColor" /><path d="M22.6699 5.10999V16.47C22.6699 17.92 21.6299 18.53 20.3599 17.83L16.6699 15.77V8.98999C16.6699 7.27999 15.2699 5.88 13.5599 5.88H8.66992V5.10999C8.66992 3.39999 10.0699 2 11.7799 2H19.5599C21.2699 2 22.6699 3.39999 22.6699 5.10999Z" fill="currentColor" /><path d="M11.6699 12.75H7.66992C7.25992 12.75 6.91992 12.41 6.91992 12C6.91992 11.59 7.25992 11.25 7.66992 11.25H11.6699C12.0799 11.25 12.4199 11.59 12.4199 12C12.4199 12.41 12.0799 12.75 11.6699 12.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6698 5.11V16.47C22.6698 17.92 21.6298 18.53 20.3598 17.83L18.4298 16.75C18.2698 16.66 18.1698 16.49 18.1698 16.31V8.99C18.1698 6.45 16.0998 4.38 13.5598 4.38H9.48976C9.11976 4.38 8.85976 3.99 9.02976 3.67C9.54976 2.68 10.5898 2 11.7798 2H19.5598C21.2698 2 22.6698 3.4 22.6698 5.11Z" fill="currentColor" /><path d="M13.5599 5.87988H5.77992C4.06992 5.87988 2.66992 7.27988 2.66992 8.98988V20.3499C2.66992 21.7999 3.70992 22.4099 4.97992 21.7099L8.90992 19.5199C9.32992 19.2899 10.0099 19.2899 10.4299 19.5199L14.3599 21.7099C15.6299 22.4099 16.6699 21.7999 16.6699 20.3499V8.98988C16.6699 7.27988 15.2699 5.87988 13.5599 5.87988ZM11.6699 12.7499H7.66992C7.25992 12.7499 6.91992 12.4099 6.91992 11.9999C6.91992 11.5899 7.25992 11.2499 7.66992 11.2499H11.6699C12.0799 11.2499 12.4199 11.5899 12.4199 11.9999C12.4199 12.4099 12.0799 12.7499 11.6699 12.7499Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSaveMinus as IconComponent).keywords = [
  "save",
  "minus",
  "save up",
  "lay aside",
  "carry through",
  "redeem",
  "keep",
  "deliver",
  "relieve",
  "spare",
  "pull through",
  "subtraction",
  "negative",
  "disadvantageous",
  "harmful",
  "sans",
  "min",
  "least",
  "unary",
  "nec"
];

export default IconSaveMinus as IconComponent;