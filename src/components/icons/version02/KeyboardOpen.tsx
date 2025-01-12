import { FC } from 'react';

const IconKeyboardOpen: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.93015 2H17.4001C18.0501 2 18.6301 2.02003 19.1501 2.09003C21.9201 2.40003 22.6702 3.70001 22.6702 7.26001V13.58C22.6702 17.14 21.9201 18.44 19.1501 18.75C18.6301 18.82 18.0601 18.84 17.4001 18.84H7.93015C7.28015 18.84 6.70015 18.82 6.18015 18.75C3.41015 18.44 2.66016 17.14 2.66016 13.58V7.26001C2.66016 3.70001 3.41015 2.40003 6.18015 2.09003C6.70015 2.02003 7.28015 2 7.93015 2Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14.25 8.32007H17.93" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.41016 14.1099H7.43015H17.9402" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.66992 22H17.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.86462 8.30005H7.87361" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.1644 8.30005H11.1734" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6699 22.75H7.66992C7.25992 22.75 6.91992 22.41 6.91992 22C6.91992 21.59 7.25992 21.25 7.66992 21.25H17.6699C18.0799 21.25 18.4199 21.59 18.4199 22C18.4199 22.41 18.0799 22.75 17.6699 22.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.6699 19H6.66992C4.45992 19 2.66992 17.21 2.66992 15V6C2.66992 3.79 4.45992 2 6.66992 2H18.6699C20.8799 2 22.6699 3.79 22.6699 6V15C22.6699 17.21 20.8799 19 18.6699 19Z" fill="currentColor" /><path d="M17.93 9.07007H14.25C13.84 9.07007 13.5 8.73007 13.5 8.32007C13.5 7.91007 13.84 7.57007 14.25 7.57007H17.93C18.34 7.57007 18.68 7.91007 18.68 8.32007C18.68 8.73007 18.35 9.07007 17.93 9.07007Z" fill="currentColor" /><path d="M10.6699 9.32007C10.1199 9.32007 9.66992 8.87007 9.66992 8.32007C9.66992 7.77007 10.1099 7.32007 10.6699 7.32007C11.2199 7.32007 11.6699 7.77007 11.6699 8.32007C11.6699 8.87007 11.2299 9.32007 10.6699 9.32007Z" fill="currentColor" /><path d="M7.52002 9.32007C6.97002 9.32007 6.52002 8.87007 6.52002 8.32007C6.52002 7.77007 6.96002 7.32007 7.52002 7.32007H7.53001C8.08001 7.32007 8.53001 7.77007 8.53001 8.32007C8.53001 8.87007 8.07002 9.32007 7.52002 9.32007Z" fill="currentColor" /><path d="M17.9301 14.8599H7.42015C7.01015 14.8599 6.66016 14.5199 6.66016 14.1099C6.66016 13.6999 6.99015 13.3599 7.40015 13.3599H17.9301C18.3401 13.3599 18.6801 13.6999 18.6801 14.1099C18.6801 14.5199 18.3501 14.8599 17.9301 14.8599Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6699 22.75H7.66992C7.25992 22.75 6.91992 22.41 6.91992 22C6.91992 21.59 7.25992 21.25 7.66992 21.25H17.6699C18.0799 21.25 18.4199 21.59 18.4199 22C18.4199 22.41 18.0799 22.75 17.6699 22.75Z" fill="currentColor" /><path d="M18.6699 2H6.66992C4.45992 2 2.66992 3.79 2.66992 6V15C2.66992 17.21 4.45992 19 6.66992 19H18.6699C20.8799 19 22.6699 17.21 22.6699 15V6C22.6699 3.79 20.8799 2 18.6699 2ZM10.6599 7.32C11.2199 7.32 11.6699 7.77 11.6699 8.32C11.6699 8.87 11.2199 9.32 10.6699 9.32C10.1199 9.32 9.66992 8.87 9.66992 8.32C9.66992 7.77 10.1099 7.32 10.6599 7.32ZM7.50992 7.32C8.06992 7.32 8.51992 7.77 8.51992 8.32C8.51992 8.87 8.06992 9.32 7.51992 9.32C6.96992 9.32 6.51992 8.87 6.51992 8.32C6.51992 7.77 6.94992 7.32 7.50992 7.32ZM17.9299 14.86H7.42992C7.00992 14.86 6.66992 14.52 6.66992 14.11C6.66992 13.7 6.99992 13.36 7.40992 13.36H17.9399C18.3499 13.36 18.6899 13.7 18.6899 14.11C18.6899 14.52 18.3499 14.86 17.9299 14.86ZM17.9299 9.07H14.2499C13.8399 9.07 13.4999 8.73 13.4999 8.32C13.4999 7.91 13.8399 7.57 14.2499 7.57H17.9299C18.3399 7.57 18.6799 7.91 18.6799 8.32C18.6799 8.73 18.3499 9.07 17.9299 9.07Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconKeyboardOpen as IconComponent).keywords = [
  "keyboard",
  "open",
  "keypad",
  "computer",
  "typing",
  "touch-tone",
  "keyword",
  "tablet",
  "shortcut",
  "portable",
  "backlit",
  "open up",
  "available",
  "visible",
  "afford",
  "public",
  "ajar",
  "give",
  "spread",
  "wide"
];

export default IconKeyboardOpen as IconComponent;