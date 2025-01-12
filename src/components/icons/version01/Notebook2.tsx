import { FC } from 'react';

const IconNotebook2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M20.5 15V10C20.5 7.17157 20.5 5.75736 19.6213 4.87868C18.7426 4 17.3284 4 14.5 4H9.5C6.67157 4 5.25736 4 4.37868 4.87868C3.5 5.75736 3.5 7.17157 3.5 10V15" stroke="currentColor" strokeWidth={width} /><path d="M5 20H19C20.6569 20 22 18.6569 22 17V16C22 15.4477 21.5523 15 21 15H16.6667C16.2339 15 15.8129 15.1404 15.4667 15.4L14.5333 16.1C14.1871 16.3596 13.7661 16.5 13.3333 16.5H10.6667C10.2339 16.5 9.81286 16.3596 9.46667 16.1L8.53333 15.4C8.18714 15.1404 7.76607 15 7.33333 15H3C2.44772 15 2 15.4477 2 16V17C2 18.6569 3.34315 20 5 20Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M9.5 2H14.5C17.3284 2 18.7426 2 19.6213 2.87868C20.5 3.75736 20.5 5.17157 20.5 8V15H16.6667C15.9094 15 15.1725 15.2456 14.5667 15.7L13.6333 16.4C13.5468 16.4649 13.4415 16.5 13.3333 16.5H10.6667C10.5585 16.5 10.4532 16.4649 10.3667 16.4L9.43333 15.7C8.8275 15.2456 8.09063 15 7.33333 15H3.5V8C3.5 5.17157 3.5 3.75736 4.37868 2.87868C5.25736 2 6.67157 2 9.5 2Z" fill="currentColor" /><path d="M5 22H19C20.6569 22 22 20.6569 22 19V17.5C22 16.9477 21.5523 16.5 21 16.5H16.6667C16.2339 16.5 15.8129 16.6404 15.4667 16.9L14.5333 17.6C14.1871 17.8596 13.7661 18 13.3333 18H10.6667C10.2339 18 9.81286 17.8596 9.46667 17.6L8.53333 16.9C8.18714 16.6404 7.76607 16.5 7.33333 16.5H3C2.44772 16.5 2 16.9477 2 17.5V19C2 20.6569 3.34315 22 5 22Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 22H19C20.6569 22 22 20.6569 22 19V17.5C22 16.9477 21.5523 16.5 21 16.5H16.6667C16.2339 16.5 15.8129 16.6404 15.4667 16.9L14.5333 17.6C14.1871 17.8596 13.7661 18 13.3333 18H10.6667C10.2339 18 9.81286 17.8596 9.46667 17.6L8.53333 16.9C8.18714 16.6404 7.76607 16.5 7.33333 16.5H3C2.44772 16.5 2 16.9477 2 17.5V19C2 20.6569 3.34315 22 5 22Z" fill="currentColor" /><path d="M9.5 2H14.5C17.3284 2 18.7426 2 19.6213 2.87868C20.5 3.75736 20.5 5.17157 20.5 8V15H16.6667C15.9094 15 15.1725 15.2456 14.5667 15.7L13.6333 16.4C13.5468 16.4649 13.4415 16.5 13.3333 16.5H10.6667C10.5585 16.5 10.4532 16.4649 10.3667 16.4L9.43333 15.7C8.8275 15.2456 8.09063 15 7.33333 15H3.5V8C3.5 5.17157 3.5 3.75736 4.37868 2.87868C5.25736 2 6.67157 2 9.5 2Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconNotebook2 as IconComponent).keywords = [
  "notebook",
  "2",
  "notebook computer",
  "scrapbook",
  "booklet",
  "binder",
  "book",
  "notepad",
  "journal",
  "diary",
  "scratchpad",
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

export default IconNotebook2 as IconComponent;