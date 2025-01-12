import { FC } from 'react';

const IconVoiceSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M6.66992 9.85999V14.15" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.66992 8.42999V15.57" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 7V17" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.6699 8.42999V15.57" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18.6699 9.85999V14.15" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8597 2H8.48969C4.84968 2 2.67969 4.17 2.67969 7.81V16.18C2.67969 19.82 4.84968 21.99 8.48969 21.99H16.8597C20.4997 21.99 22.6697 19.82 22.6697 16.18V7.81C22.6697 4.17 20.4997 2 16.8597 2Z" fill="currentColor" /><path d="M6.66992 14.89C6.25992 14.89 5.91992 14.55 5.91992 14.14V9.84998C5.91992 9.43998 6.25992 9.09998 6.66992 9.09998C7.07992 9.09998 7.41992 9.43998 7.41992 9.84998V14.14C7.41992 14.56 7.07992 14.89 6.66992 14.89Z" fill="currentColor" /><path d="M9.66992 16.32C9.25992 16.32 8.91992 15.98 8.91992 15.57V8.42999C8.91992 8.01999 9.25992 7.67999 9.66992 7.67999C10.0799 7.67999 10.4199 8.01999 10.4199 8.42999V15.57C10.4199 15.99 10.0799 16.32 9.66992 16.32Z" fill="currentColor" /><path d="M12.6699 17.75C12.2599 17.75 11.9199 17.41 11.9199 17V7C11.9199 6.59 12.2599 6.25 12.6699 6.25C13.0799 6.25 13.4199 6.59 13.4199 7V17C13.4199 17.41 13.0799 17.75 12.6699 17.75Z" fill="currentColor" /><path d="M15.6699 16.32C15.2599 16.32 14.9199 15.98 14.9199 15.57V8.42999C14.9199 8.01999 15.2599 7.67999 15.6699 7.67999C16.0799 7.67999 16.4199 8.01999 16.4199 8.42999V15.57C16.4199 15.99 16.0799 16.32 15.6699 16.32Z" fill="currentColor" /><path d="M18.6699 14.89C18.2599 14.89 17.9199 14.55 17.9199 14.14V9.84998C17.9199 9.43998 18.2599 9.09998 18.6699 9.09998C19.0799 9.09998 19.4199 9.43998 19.4199 9.84998V14.14C19.4199 14.56 19.0799 14.89 18.6699 14.89Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM7.41992 14.14C7.41992 14.55 7.07992 14.89 6.66992 14.89C6.25992 14.89 5.91992 14.55 5.91992 14.14V9.86C5.91992 9.45 6.25992 9.11 6.66992 9.11C7.07992 9.11 7.41992 9.45 7.41992 9.86V14.14ZM10.4199 15.57C10.4199 15.98 10.0799 16.32 9.66992 16.32C9.25992 16.32 8.91992 15.98 8.91992 15.57V8.43C8.91992 8.02 9.25992 7.68 9.66992 7.68C10.0799 7.68 10.4199 8.02 10.4199 8.43V15.57ZM13.4199 17C13.4199 17.41 13.0799 17.75 12.6699 17.75C12.2599 17.75 11.9199 17.41 11.9199 17V7C11.9199 6.59 12.2599 6.25 12.6699 6.25C13.0799 6.25 13.4199 6.59 13.4199 7V17ZM16.4199 15.57C16.4199 15.98 16.0799 16.32 15.6699 16.32C15.2599 16.32 14.9199 15.98 14.9199 15.57V8.43C14.9199 8.02 15.2599 7.68 15.6699 7.68C16.0799 7.68 16.4199 8.02 16.4199 8.43V15.57ZM19.4199 14.14C19.4199 14.55 19.0799 14.89 18.6699 14.89C18.2599 14.89 17.9199 14.55 17.9199 14.14V9.86C17.9199 9.45 18.2599 9.11 18.6699 9.11C19.0799 9.11 19.4199 9.45 19.4199 9.86V14.14Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconVoiceSquare as IconComponent).keywords = [
  "voice",
  "square",
  "vocalization",
  "interpreter",
  "vocalize",
  "representative",
  "part",
  "spokesperson",
  "sound",
  "articulation",
  "vocal",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest"
];

export default IconVoiceSquare as IconComponent;