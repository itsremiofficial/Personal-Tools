import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconProfile: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.83 10.87C12.73 10.86 12.61 10.86 12.5 10.87C10.12 10.79 8.22998 8.84 8.22998 6.44C8.22998 3.99 10.21 2 12.67 2C15.12 2 17.11 3.99 17.11 6.44C17.1 8.84 15.21 10.79 12.83 10.87Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M7.83014 14.56C5.41014 16.18 5.41014 18.82 7.83014 20.43C10.5801 22.27 15.0901 22.27 17.8401 20.43C20.2601 18.81 20.2601 16.17 17.8401 14.56C15.1001 12.73 10.5901 12.73 7.83014 14.56Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.6699 2C10.0499 2 7.91992 4.13 7.91992 6.75C7.91992 9.32 9.92992 11.4 12.5499 11.49C12.6299 11.48 12.7099 11.48 12.7699 11.49C12.7899 11.49 12.7999 11.49 12.8199 11.49C12.8299 11.49 12.8299 11.49 12.8399 11.49C15.3999 11.4 17.4099 9.32 17.4199 6.75C17.4199 4.13 15.2899 2 12.6699 2Z" fill="currentColor" /><path d="M17.7499 14.1499C14.9599 12.2899 10.4099 12.2899 7.59988 14.1499C6.32988 14.9999 5.62988 16.1499 5.62988 17.3799C5.62988 18.6099 6.32988 19.7499 7.58988 20.5899C8.98988 21.5299 10.8299 21.9999 12.6699 21.9999C14.5099 21.9999 16.3499 21.5299 17.7499 20.5899C19.0099 19.7399 19.7099 18.5999 19.7099 17.3599C19.6999 16.1299 19.0099 14.9899 17.7499 14.1499Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 2C10.0499 2 7.91992 4.13 7.91992 6.75C7.91992 9.32 9.92992 11.4 12.5499 11.49C12.6299 11.48 12.7099 11.48 12.7699 11.49C12.7899 11.49 12.7999 11.49 12.8199 11.49C12.8299 11.49 12.8299 11.49 12.8399 11.49C15.3999 11.4 17.4099 9.32 17.4199 6.75C17.4199 4.13 15.2899 2 12.6699 2Z" fill="currentColor" /><path d="M17.7499 14.1499C14.9599 12.2899 10.4099 12.2899 7.59988 14.1499C6.32988 14.9999 5.62988 16.1499 5.62988 17.3799C5.62988 18.6099 6.32988 19.7499 7.58988 20.5899C8.98988 21.5299 10.8299 21.9999 12.6699 21.9999C14.5099 21.9999 16.3499 21.5299 17.7499 20.5899C19.0099 19.7399 19.7099 18.5999 19.7099 17.3599C19.6999 16.1299 19.0099 14.9899 17.7499 14.1499Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconProfile as IconComponentType).keywords = [
  "profile",
  "outline",
  "image",
  "description",
  "img",
  "sketch",
  "contour",
  "structure",
  "effigy",
  "template"
];

export default IconProfile as IconComponentType;