import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconPauseCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9707 22C17.4936 22 21.9707 17.5228 21.9707 12C21.9707 6.47715 17.4936 2 11.9707 2C6.44786 2 1.9707 6.47715 1.9707 12C1.9707 17.5228 6.44786 22 11.9707 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.72 14.5298V9.4698C10.72 8.9898 10.52 8.7998 10.01 8.7998H8.71C8.2 8.7998 8 8.9898 8 9.4698V14.5298C8 15.0098 8.2 15.1998 8.71 15.1998H10C10.52 15.1998 10.72 15.0098 10.72 14.5298Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.9991 14.5298V9.4698C15.9991 8.9898 15.7991 8.7998 15.2891 8.7998H13.9991C13.4891 8.7998 13.2891 8.9898 13.2891 9.4698V14.5298C13.2891 15.0098 13.4891 15.1998 13.9991 15.1998H15.2891C15.7991 15.1998 15.9991 15.0098 15.9991 14.5298Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M11.9707 22C17.4936 22 21.9707 17.5228 21.9707 12C21.9707 6.47715 17.4936 2 11.9707 2C6.44786 2 1.9707 6.47715 1.9707 12C1.9707 17.5228 6.44786 22 11.9707 22Z" fill="currentColor" /><path d="M10.72 15.0298V8.9698C10.72 8.4898 10.52 8.2998 10.01 8.2998H8.71C8.2 8.2998 8 8.4898 8 8.9698V15.0298C8 15.5098 8.2 15.6998 8.71 15.6998H10C10.52 15.6998 10.72 15.5098 10.72 15.0298Z" fill="currentColor" /><path d="M15.9991 15.0298V8.9698C15.9991 8.4898 15.7991 8.2998 15.2891 8.2998H13.9991C13.4891 8.2998 13.2891 8.4898 13.2891 8.9698V15.0298C13.2891 15.5098 13.4891 15.6998 13.9991 15.6998H15.2891C15.7991 15.6998 15.9991 15.5098 15.9991 15.0298Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPauseCircle as IconComponentType).keywords = [
  "pause",
  "circle",
  "suspension",
  "intermit",
  "interruption",
  "hesitate",
  "break",
  "intermission",
  "respite",
  "hiatus",
  "stoppage",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle"
];

export default IconPauseCircle as IconComponentType;