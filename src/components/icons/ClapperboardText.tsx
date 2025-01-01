import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconClapperboardText: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M21.5 8H2.5M7 8L10.5 2.5M13.5 8L17 2.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M6.5 14H14.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M6.5 17.5H12" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.54 2.08783C15.3292 2 13.8452 2 11.9999 2H11.9014L8.40133 7.25002H13.0986L16.54 2.08783Z" fill="currentColor" /><path d="M10.0956 2.00445C6.62189 2.03072 4.71678 2.2121 3.46441 3.46447C2.60675 4.32213 2.25138 5.48593 2.10413 7.25002H6.59856L10.0956 2.00445Z" fill="currentColor" /><path d="M20.5355 3.46447C21.3931 4.32213 21.7485 5.48593 21.8958 7.25002H14.9013L18.1987 2.30403C19.1923 2.51345 19.9382 2.86714 20.5355 3.46447Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M2 12C2 10.7632 2 9.68872 2.02644 8.75H21.9736C22 9.68872 22 10.7632 22 12C22 16.714 22 19.071 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.071 2 16.714 2 12Z" fill="currentColor" /><path d="M5.75 17.5C5.75 17.0858 6.08579 16.75 6.5 16.75H12C12.4142 16.75 12.75 17.0858 12.75 17.5C12.75 17.9142 12.4142 18.25 12 18.25H6.5C6.08579 18.25 5.75 17.9142 5.75 17.5Z" fill="currentColor" /><path d="M6.5 13.25C6.08579 13.25 5.75 13.5858 5.75 14C5.75 14.4142 6.08579 14.75 6.5 14.75H14.5C14.9142 14.75 15.25 14.4142 15.25 14C15.25 13.5858 14.9142 13.25 14.5 13.25H6.5Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5401 2.08783C15.3293 2 13.8452 2 12 2H11.9014L8.40139 7.25002H13.0986L16.5401 2.08783Z" fill="currentColor" /><path d="M10.0957 2.00445C6.62194 2.03072 4.71683 2.2121 3.46447 3.46447C2.6068 4.32213 2.25143 5.48593 2.10418 7.25002H6.59861L10.0957 2.00445Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M2.02644 8.75002C2 9.68875 2 10.7633 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 10.7633 22 9.68875 21.9736 8.75002H2.02644ZM5.75 14C5.75 13.5858 6.08579 13.25 6.5 13.25H14.5C14.9142 13.25 15.25 13.5858 15.25 14C15.25 14.4142 14.9142 14.75 14.5 14.75H6.5C6.08579 14.75 5.75 14.4142 5.75 14ZM6.5 16.75C6.08579 16.75 5.75 17.0858 5.75 17.5C5.75 17.9142 6.08579 18.25 6.5 18.25H12C12.4142 18.25 12.75 17.9142 12.75 17.5C12.75 17.0858 12.4142 16.75 12 16.75H6.5Z" fill="currentColor" /><path d="M20.5355 3.46447C21.3932 4.32213 21.7486 5.48593 21.8958 7.25002H14.9014L18.1987 2.30403C19.1924 2.51345 19.9382 2.86714 20.5355 3.46447Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconClapperboardText as IconComponentType).keywords = [
  "clapperboard",
  "text",
  "synchronizer",
  "photoboard",
  "film horse",
  "movie camera",
  "kinetoscope",
  "cinematoscope",
  "projectoscope",
  "gate",
  "moviola",
  "schoolbook",
  "textbook",
  "school text",
  "text edition",
  "textual matter",
  "writing",
  "letter",
  "paragraph",
  "manuscript"
];

export default IconClapperboardText as IconComponentType;