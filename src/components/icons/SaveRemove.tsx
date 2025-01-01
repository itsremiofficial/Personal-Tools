import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSaveRemove: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8.98987V20.3499C16 21.7999 14.96 22.4099 13.69 21.7099L9.76 19.5199C9.34 19.2899 8.66 19.2899 8.24 19.5199L4.31 21.7099C3.04 22.4099 2 21.7999 2 20.3499V8.98987C2 7.27987 3.4 5.87988 5.11 5.87988H12.89C14.6 5.87988 16 7.27987 16 8.98987Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M7.58984 13.4099L10.4098 10.5898" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.4098 13.4099L7.58984 10.5898" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.4 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16 8.98987V20.3499C16 21.7999 14.96 22.4099 13.69 21.7099L9.76 19.5199C9.34 19.2899 8.66 19.2899 8.24 19.5199L4.31 21.7099C3.04 22.4099 2 21.7999 2 20.3499V8.98987C2 7.27987 3.4 5.87988 5.11 5.87988H12.89C14.6 5.87988 16 7.27987 16 8.98987Z" fill="currentColor" /><path d="M10.0593 11.9998L10.9393 11.1198C11.2293 10.8298 11.2293 10.3498 10.9393 10.0598C10.6493 9.76979 10.1693 9.76979 9.8793 10.0598L8.9993 10.9398L8.1193 10.0598C7.8293 9.76979 7.3493 9.76979 7.0593 10.0598C6.7693 10.3498 6.7693 10.8298 7.0593 11.1198L7.9393 11.9998L7.0593 12.8798C6.7693 13.1698 6.7693 13.6498 7.0593 13.9398C7.2093 14.0898 7.3993 14.1598 7.5893 14.1598C7.7793 14.1598 7.9693 14.0898 8.1193 13.9398L8.9993 13.0598L9.8793 13.9398C10.0293 14.0898 10.2193 14.1598 10.4093 14.1598C10.5993 14.1598 10.7893 14.0898 10.9393 13.9398C11.2293 13.6498 11.2293 13.1698 10.9393 12.8798L10.0593 11.9998Z" fill="currentColor" /><path d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.4 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSaveRemove as IconComponentType).keywords = [
  "save",
  "remove",
  "save up",
  "lay aside",
  "carry through",
  "redeem",
  "keep",
  "deliver",
  "relieve",
  "spare",
  "pull through",
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

export default IconSaveRemove as IconComponentType;