import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMoneys: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.3009 7.91998V13.07C19.3009 16.15 17.5409 17.47 14.9009 17.47H6.11093C5.66093 17.47 5.23093 17.43 4.83093 17.34C4.58093 17.3 4.34094 17.23 4.12094 17.15C2.62094 16.59 1.71094 15.29 1.71094 13.07V7.91998C1.71094 4.83998 3.47093 3.52002 6.11093 3.52002H14.9009C17.1409 3.52002 18.7509 4.47001 19.1809 6.64001C19.2509 7.04001 19.3009 7.44998 19.3009 7.91998Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22.3001 10.9201V16.0701C22.3001 19.1501 20.5401 20.4701 17.9001 20.4701H9.11008C8.37008 20.4701 7.70009 20.3701 7.12009 20.1501C5.93009 19.7101 5.12008 18.8001 4.83008 17.3401C5.23008 17.4301 5.66008 17.4701 6.11008 17.4701H14.9001C17.5401 17.4701 19.3001 16.1501 19.3001 13.0701V7.9201C19.3001 7.4501 19.2601 7.03014 19.1801 6.64014C21.0801 7.04014 22.3001 8.38011 22.3001 10.9201Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.4994 13.1399C11.9574 13.1399 13.1394 11.9579 13.1394 10.4999C13.1394 9.04185 11.9574 7.85986 10.4994 7.85986C9.04136 7.85986 7.85938 9.04185 7.85938 10.4999C7.85938 11.9579 9.04136 13.1399 10.4994 13.1399Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M4.7793 8.2998V12.6998" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.2207 8.2998V12.6998" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.3009 7.91998V13.07C19.3009 16.15 17.5409 17.47 14.9009 17.47H6.11093C5.66093 17.47 5.23093 17.43 4.83093 17.34C4.58093 17.3 4.34094 17.23 4.12094 17.15C2.62094 16.59 1.71094 15.29 1.71094 13.07V7.91998C1.71094 4.83998 3.47093 3.52002 6.11093 3.52002H14.9009C17.1409 3.52002 18.7509 4.47001 19.1809 6.64001C19.2509 7.04001 19.3009 7.44998 19.3009 7.91998Z" fill="currentColor" /><path d="M22.3001 10.9201V16.0701C22.3001 19.1501 20.5401 20.4701 17.9001 20.4701H9.11008C8.37008 20.4701 7.70009 20.3701 7.12009 20.1501C5.93009 19.7101 5.12008 18.8001 4.83008 17.3401C5.23008 17.4301 5.66008 17.4701 6.11008 17.4701H14.9001C17.5401 17.4701 19.3001 16.1501 19.3001 13.0701V7.9201C19.3001 7.4501 19.2601 7.03014 19.1801 6.64014C21.0801 7.04014 22.3001 8.38011 22.3001 10.9201Z" fill="currentColor" /><path d="M10.4994 13.1399C11.9574 13.1399 13.1394 11.9579 13.1394 10.4999C13.1394 9.04185 11.9574 7.85986 10.4994 7.85986C9.04136 7.85986 7.85938 9.04185 7.85938 10.4999C7.85938 11.9579 9.04136 13.1399 10.4994 13.1399Z" fill="currentColor" /><path d="M4.7793 8.25C4.3693 8.25 4.0293 8.59 4.0293 9V12C4.0293 12.41 4.3693 12.75 4.7793 12.75C5.1893 12.75 5.5293 12.41 5.5293 12V9C5.5293 8.59 5.1993 8.25 4.7793 8.25Z" fill="currentColor" /><path d="M16.2109 8.25C15.8009 8.25 15.4609 8.59 15.4609 9V12C15.4609 12.41 15.8009 12.75 16.2109 12.75C16.6209 12.75 16.9609 12.41 16.9609 12V9C16.9609 8.59 16.6309 8.25 16.2109 8.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMoneys as IconComponentType).keywords = [
  "moneys",
  "rich",
  "monied",
  "wealthy",
  "affluent",
  "loaded",
  "flush",
  "dues",
  "funds",
  "fund"
];

export default IconMoneys as IconComponentType;