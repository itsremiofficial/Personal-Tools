import { FC } from 'react';

const IconTextItalicCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 17.0005H13.3333M10.6667 7.00049H16M10.6667 17.0005L13.3333 7.00049" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.5" : "1"} d="M2 12.0005C2 6.47764 6.47715 2.00049 12 2.00049C17.5228 2.00049 22 6.47764 22 12.0005C22 17.5233 17.5228 22.0005 12 22.0005C6.47715 22.0005 2 17.5233 2 12.0005Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M12 2.00049C6.47715 2.00049 2 6.47764 2 12.0005C2 17.5233 6.47715 22.0005 12 22.0005C17.5228 22.0005 22 17.5233 22 12.0005C22 6.47764 17.5228 2.00049 12 2.00049Z" fill="currentColor" /><path d="M10.6667 6.25043H13.3162C13.3273 6.25018 13.3384 6.25018 13.3495 6.25043H16C16.4142 6.25043 16.75 6.58622 16.75 7.00043C16.75 7.41464 16.4142 7.75043 16 7.75043H13.9095L11.6429 16.2504H13.3333C13.7475 16.2504 14.0833 16.5862 14.0833 17.0004C14.0833 17.4146 13.7475 17.7504 13.3333 17.7504H10.6838C10.6727 17.7507 10.6616 17.7507 10.6505 17.7504H8C7.58579 17.7504 7.25 17.4146 7.25 17.0004C7.25 16.5862 7.58579 16.2504 8 16.2504H10.0905L12.3571 7.75043H10.6667C10.2525 7.75043 9.91667 7.41464 9.91667 7.00043C9.91667 6.58622 10.2525 6.25043 10.6667 6.25043Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 2.00049C6.47715 2.00049 2 6.47764 2 12.0005C2 17.5233 6.47715 22.0005 12 22.0005C17.5228 22.0005 22 17.5233 22 12.0005C22 6.47764 17.5228 2.00049 12 2.00049ZM10.6667 6.25049H13.3162C13.3273 6.25024 13.3384 6.25024 13.3495 6.25049H16C16.4142 6.25049 16.75 6.58627 16.75 7.00049C16.75 7.4147 16.4142 7.75049 16 7.75049H13.9095L11.6429 16.2505H13.3333C13.7475 16.2505 14.0833 16.5863 14.0833 17.0005C14.0833 17.4147 13.7475 17.7505 13.3333 17.7505H10.6838C10.6727 17.7507 10.6616 17.7507 10.6505 17.7505H8C7.58579 17.7505 7.25 17.4147 7.25 17.0005C7.25 16.5863 7.58579 16.2505 8 16.2505H10.0905L12.3571 7.75049H10.6667C10.2525 7.75049 9.91667 7.4147 9.91667 7.00049C9.91667 6.58627 10.2525 6.25049 10.6667 6.25049Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTextItalicCircle as IconComponent).keywords = [
  "text",
  "italic",
  "circle",
  "schoolbook",
  "textbook",
  "school text",
  "text edition",
  "textual matter",
  "writing",
  "letter",
  "paragraph",
  "manuscript",
  "italic language",
  "emphasis",
  "slanted",
  "italicized",
  "italicised",
  "serif",
  "italicize",
  "monospaced",
  "boldface",
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

export default IconTextItalicCircle as IconComponent;