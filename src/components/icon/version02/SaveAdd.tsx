import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSaveAdd: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6699 8.98987V20.3499C16.6699 21.7999 15.6299 22.4099 14.3599 21.7099L10.4299 19.5199C10.0099 19.2899 9.32991 19.2899 8.90991 19.5199L4.97992 21.7099C3.70992 22.4099 2.66992 21.7999 2.66992 20.3499V8.98987C2.66992 7.27987 4.06991 5.87988 5.77991 5.87988H13.5599C15.2699 5.87988 16.6699 7.27987 16.6699 8.98987Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22.6699 5.10999V16.47C22.6699 17.92 21.6299 18.53 20.3599 17.83L16.6699 15.77V8.98999C16.6699 7.27999 15.2699 5.88 13.5599 5.88H8.66992V5.10999C8.66992 3.39999 10.0699 2 11.7799 2H19.5599C21.2699 2 22.6699 3.39999 22.6699 5.10999Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M7.66992 12H11.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M9.66992 14V10" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.6699 8.98987V20.3499C16.6699 21.7999 15.6299 22.4099 14.3599 21.7099L10.4299 19.5199C10.0099 19.2899 9.32991 19.2899 8.90991 19.5199L4.97992 21.7099C3.70992 22.4099 2.66992 21.7999 2.66992 20.3499V8.98987C2.66992 7.27987 4.06991 5.87988 5.77991 5.87988H13.5599C15.2699 5.87988 16.6699 7.27987 16.6699 8.98987Z" fill="currentColor" /><path d="M22.6699 5.10999V16.47C22.6699 17.92 21.6299 18.53 20.3599 17.83L16.6699 15.77V8.98999C16.6699 7.27999 15.2699 5.88 13.5599 5.88H8.66992V5.10999C8.66992 3.39999 10.0699 2 11.7799 2H19.5599C21.2699 2 22.6699 3.39999 22.6699 5.10999Z" fill="currentColor" /><path d="M11.6699 11.25H10.4199V10C10.4199 9.59 10.0799 9.25 9.66992 9.25C9.25992 9.25 8.91992 9.59 8.91992 10V11.25H7.66992C7.25992 11.25 6.91992 11.59 6.91992 12C6.91992 12.41 7.25992 12.75 7.66992 12.75H8.91992V14C8.91992 14.41 9.25992 14.75 9.66992 14.75C10.0799 14.75 10.4199 14.41 10.4199 14V12.75H11.6699C12.0799 12.75 12.4199 12.41 12.4199 12C12.4199 11.59 12.0799 11.25 11.6699 11.25Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6698 5.11V16.47C22.6698 17.92 21.6298 18.53 20.3598 17.83L18.4298 16.75C18.2698 16.66 18.1698 16.49 18.1698 16.31V8.99C18.1698 6.45 16.0998 4.38 13.5598 4.38H9.48976C9.11976 4.38 8.85976 3.99 9.02976 3.67C9.54976 2.68 10.5898 2 11.7798 2H19.5598C21.2698 2 22.6698 3.4 22.6698 5.11Z" fill="currentColor" /><path d="M13.5599 5.87988H5.77992C4.06992 5.87988 2.66992 7.27988 2.66992 8.98988V20.3499C2.66992 21.7999 3.70992 22.4099 4.97992 21.7099L8.90992 19.5199C9.32992 19.2899 10.0099 19.2899 10.4299 19.5199L14.3599 21.7099C15.6299 22.4099 16.6699 21.7999 16.6699 20.3499V8.98988C16.6699 7.27988 15.2699 5.87988 13.5599 5.87988ZM11.6699 12.7499H10.4199V13.9999C10.4199 14.4099 10.0799 14.7499 9.66992 14.7499C9.25992 14.7499 8.91992 14.4099 8.91992 13.9999V12.7499H7.66992C7.25992 12.7499 6.91992 12.4099 6.91992 11.9999C6.91992 11.5899 7.25992 11.2499 7.66992 11.2499H8.91992V9.99988C8.91992 9.58988 9.25992 9.24988 9.66992 9.24988C10.0799 9.24988 10.4199 9.58988 10.4199 9.99988V11.2499H11.6699C12.0799 11.2499 12.4199 11.5899 12.4199 11.9999C12.4199 12.4099 12.0799 12.7499 11.6699 12.7499Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSaveAdd as IconComponentType).keywords = [
  "save",
  "add",
  "save up",
  "lay aside",
  "carry through",
  "redeem",
  "keep",
  "deliver",
  "relieve",
  "spare",
  "pull through",
  "total",
  "sum up",
  "tot up",
  "add up",
  "sum",
  "summate",
  "impart",
  "contribute",
  "supply"
];

export default IconSaveAdd as IconComponentType;