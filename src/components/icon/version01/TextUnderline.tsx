import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconTextUnderline: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 21.0005H20" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.5" : "1"} d="M4 3.00049V9.00049C4 13.4188 7.58172 17.0005 12 17.0005C16.4183 17.0005 20 13.4188 20 9.00049V3.00049" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M5 3.00049C5 2.4482 4.55228 2.00049 4 2.00049C3.44772 2.00049 3 2.4482 3 3.00049V9.00049C3 13.9711 7.02944 18.0005 12 18.0005C16.9706 18.0005 21 13.9711 21 9.00049V3.00049C21 2.4482 20.5523 2.00049 20 2.00049C19.4477 2.00049 19 2.4482 19 3.00049V9.00049C19 12.8665 15.866 16.0005 12 16.0005C8.13401 16.0005 5 12.8665 5 9.00049V3.00049Z" fill="currentColor" /><path d="M4 20.0005C3.44772 20.0005 3 20.4482 3 21.0005C3 21.5528 3.44772 22.0005 4 22.0005H20C20.5523 22.0005 21 21.5528 21 21.0005C21 20.4482 20.5523 20.0005 20 20.0005H4Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 3.00049C5 2.4482 4.55228 2.00049 4 2.00049C3.44772 2.00049 3 2.4482 3 3.00049V9.00049C3 13.9711 7.02944 18.0005 12 18.0005C16.9706 18.0005 21 13.9711 21 9.00049V3.00049C21 2.4482 20.5523 2.00049 20 2.00049C19.4477 2.00049 19 2.4482 19 3.00049V9.00049C19 12.8665 15.866 16.0005 12 16.0005C8.13401 16.0005 5 12.8665 5 9.00049V3.00049Z" fill="currentColor" /><path d="M4 20.0005C3.44772 20.0005 3 20.4482 3 21.0005C3 21.5528 3.44772 22.0005 4 22.0005H20C20.5523 22.0005 21 21.5528 21 21.0005C21 20.4482 20.5523 20.0005 20 20.0005H4Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTextUnderline as IconComponentType).keywords = [
  "text",
  "underline",
  "schoolbook",
  "textbook",
  "school text",
  "text edition",
  "textual matter",
  "writing",
  "letter",
  "paragraph",
  "manuscript",
  "underscore",
  "emphasize",
  "highlighting",
  "highlight",
  "highlights",
  "outline",
  "note",
  "accentuate",
  "draw"
];

export default IconTextUnderline as IconComponentType;