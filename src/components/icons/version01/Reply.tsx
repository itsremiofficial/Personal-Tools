import { FC } from 'react';

const IconReply: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 7L4.5 12L9.5 17" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.5" : "1"} d="M4.5 12L14.5 12C16.1667 12 19.5 13 19.5 17" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10.0303 6.46967C9.73744 6.17678 9.26256 6.17678 8.96967 6.46967L3.96967 11.4697C3.67678 11.7626 3.67678 12.2374 3.96967 12.5303L8.96967 17.5303C9.26256 17.8232 9.73744 17.8232 10.0303 17.5303C10.3232 17.2374 10.3232 16.7626 10.0303 16.4697L5.56066 12L10.0303 7.53033C10.3232 7.23744 10.3232 6.76256 10.0303 6.46967Z" fill="currentColor" /><g opacity={duotone ? "0.5" : "1"}><path d="M6.31066 11.25H14.5C15.4534 11.25 16.8667 11.5298 18.0632 12.3914C19.298 13.2804 20.25 14.7556 20.25 17C20.25 17.4142 19.9142 17.75 19.5 17.75C19.0858 17.75 18.75 17.4142 18.75 17C18.75 15.2444 18.0353 14.2196 17.1868 13.6087C16.3 12.9702 15.2133 12.75 14.5 12.75L6.31066 12.75L5.56066 12L6.31066 11.25Z" fill="currentColor" /><path d="M3.80691 11.7129C3.77024 11.8013 3.75 11.8983 3.75 12C3.75 11.9023 3.76897 11.8046 3.80691 11.7129Z" fill="currentColor" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10.0303 6.46967C10.3232 6.76256 10.3232 7.23744 10.0303 7.53033L6.31066 11.25L14.5 11.25C15.4534 11.25 16.8667 11.5298 18.0632 12.3913C19.298 13.2804 20.25 14.7556 20.25 17C20.25 17.4142 19.9142 17.75 19.5 17.75C19.0858 17.75 18.75 17.4142 18.75 17C18.75 15.2444 18.0353 14.2196 17.1868 13.6087C16.3 12.9702 15.2133 12.75 14.5 12.75L6.31066 12.75L10.0303 16.4697C10.3232 16.7626 10.3232 17.2374 10.0303 17.5303C9.73744 17.8232 9.26256 17.8232 8.96967 17.5303L3.96967 12.5303C3.67678 12.2374 3.67678 11.7626 3.96967 11.4697L8.96967 6.46967C9.26256 6.17678 9.73744 6.17678 10.0303 6.46967Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconReply as IconComponent).keywords = [
  "reply",
  "response",
  "respond",
  "answer",
  "answering",
  "responding",
  "responder",
  "respondent",
  "responsive",
  "reaction"
];

export default IconReply as IconComponent;