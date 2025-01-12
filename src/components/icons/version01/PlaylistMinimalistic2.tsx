import { FC } from 'react';

const IconPlaylistMinimalistic2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M15 6.00024L3 6.00024" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M13 10.0002L3 10.0002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M9 14.0002H3" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M8 18.0002H3" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M17 16.5002V12.5002V8.00024" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><circle cx="14.5" cy="16.5002" r="2.5" stroke="currentColor" strokeWidth={width} /><path d="M21 12.0002C18.7909 12.0002 17 10.2094 17 8.00024" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.5" : "1"}><path fillRule="evenodd" clipRule="evenodd" d="M15.75 6.00024C15.75 6.41446 15.4142 6.75024 15 6.75024H3C2.58579 6.75024 2.25 6.41446 2.25 6.00024C2.25 5.58603 2.58579 5.25024 3 5.25024H15C15.4142 5.25024 15.75 5.58603 15.75 6.00024Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M13.75 10.0002C13.75 10.4145 13.4142 10.7502 13 10.7502H3C2.58579 10.7502 2.25 10.4145 2.25 10.0002C2.25 9.58603 2.58579 9.25024 3 9.25024H13C13.4142 9.25024 13.75 9.58603 13.75 10.0002Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M9.75 14.0002C9.75 14.4145 9.41421 14.7502 9 14.7502H3C2.58579 14.7502 2.25 14.4145 2.25 14.0002C2.25 13.586 2.58579 13.2502 3 13.2502H9C9.41421 13.2502 9.75 13.586 9.75 14.0002Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M8.75 18.0002C8.75 18.4145 8.41421 18.7502 8 18.7502H3C2.58579 18.7502 2.25 18.4145 2.25 18.0002C2.25 17.586 2.58579 17.2502 3 17.2502H8C8.41421 17.2502 8.75 17.586 8.75 18.0002Z" fill="currentColor" /></g><path d="M17 7.25024C17.4142 7.25024 17.75 7.58603 17.75 8.00024C17.75 9.79517 19.2051 11.2502 21 11.2502C21.4142 11.2502 21.75 11.586 21.75 12.0002C21.75 12.4145 21.4142 12.7502 21 12.7502C19.7428 12.7502 18.5997 12.2618 17.75 11.4644V16.5002C17.75 18.2952 16.2949 19.7502 14.5 19.7502C12.7051 19.7502 11.25 18.2952 11.25 16.5002C11.25 14.7053 12.7051 13.2502 14.5 13.2502C15.1443 13.2502 15.7448 13.4377 16.25 13.7612V8.00024C16.25 7.58603 16.5858 7.25024 17 7.25024Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M15.75 6.00024C15.75 6.41446 15.4142 6.75024 15 6.75024H3C2.58579 6.75024 2.25 6.41446 2.25 6.00024C2.25 5.58603 2.58579 5.25024 3 5.25024H15C15.4142 5.25024 15.75 5.58603 15.75 6.00024Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M13.75 10.0002C13.75 10.4145 13.4142 10.7502 13 10.7502H3C2.58579 10.7502 2.25 10.4145 2.25 10.0002C2.25 9.58603 2.58579 9.25024 3 9.25024H13C13.4142 9.25024 13.75 9.58603 13.75 10.0002Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M9.75 14.0002C9.75 14.4145 9.41421 14.7502 9 14.7502H3C2.58579 14.7502 2.25 14.4145 2.25 14.0002C2.25 13.586 2.58579 13.2502 3 13.2502H9C9.41421 13.2502 9.75 13.586 9.75 14.0002Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M8.75 18.0002C8.75 18.4145 8.41421 18.7502 8 18.7502H3C2.58579 18.7502 2.25 18.4145 2.25 18.0002C2.25 17.586 2.58579 17.2502 3 17.2502H8C8.41421 17.2502 8.75 17.586 8.75 18.0002Z" fill="currentColor" /><path d="M17 7.25024C17.4142 7.25024 17.75 7.58603 17.75 8.00024C17.75 9.79517 19.2051 11.2502 21 11.2502C21.4142 11.2502 21.75 11.586 21.75 12.0002C21.75 12.4145 21.4142 12.7502 21 12.7502C19.7428 12.7502 18.5997 12.2618 17.75 11.4644V16.5002C17.75 18.2952 16.2949 19.7502 14.5 19.7502C12.7051 19.7502 11.25 18.2952 11.25 16.5002C11.25 14.7053 12.7051 13.2502 14.5 13.2502C15.1443 13.2502 15.7449 13.4377 16.25 13.7612V8.00024C16.25 7.58603 16.5858 7.25024 17 7.25024Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPlaylistMinimalistic2 as IconComponent).keywords = [
  "playlist",
  "minimalistic",
  "2",
  "playback",
  "replay",
  "list",
  "reproductive",
  "reproduction",
  "soundtrack",
  "song",
  "tunes",
  "songs",
  "modularistic",
  "brutalistic",
  "localistic",
  "reductionist",
  "exhibitional",
  "monogynous",
  "simplificational",
  "reductionistic",
  "automatistic",
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

export default IconPlaylistMinimalistic2 as IconComponent;