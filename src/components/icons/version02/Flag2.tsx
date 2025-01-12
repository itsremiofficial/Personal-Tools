import { FC } from 'react';

const IconFlag2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.12012 2V22" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M7.62012 4L15.7201 7.5C19.0201 8.9 19.0201 11.3 15.9201 12.9L7.62012 17" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.12012 22C6.71012 22 6.37012 21.66 6.37012 21.25V2.75C6.37012 2.34 6.71012 2 7.12012 2C7.53012 2 7.87012 2.34 7.87012 2.75V21.25C7.87012 21.66 7.53012 22 7.12012 22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.87 7.15998L7.77 3.65998C7.65 3.59998 7.52 3.61998 7.41 3.68998C7.31 3.75998 7.25 3.86998 7.25 3.99998V17C7.25 17.13 7.32 17.25 7.43 17.32C7.49 17.36 7.56 17.38 7.63 17.38C7.69 17.38 7.74 17.37 7.8 17.34L16.1 13.24C16.1 13.24 16.1 13.24 16.11 13.24C17.77 12.38 18.66 11.27 18.61 10.1C18.55 8.91998 17.58 7.87998 15.87 7.15998Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8701 7.16L7.87012 3.7V2.75C7.87012 2.34 7.53012 2 7.12012 2C6.71012 2 6.37012 2.34 6.37012 2.75V21.25C6.37012 21.66 6.71012 22 7.12012 22C7.53012 22 7.87012 21.66 7.87012 21.25V17.29L16.0901 13.23C16.0901 13.23 16.0901 13.23 16.1001 13.23C17.7601 12.37 18.6501 11.26 18.6001 10.09C18.5501 8.92 17.5801 7.88 15.8701 7.16Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFlag2 as IconComponent).keywords = [
  "flag",
  "2",
  "ensign",
  "flagstone",
  "pin",
  "swag",
  "sag",
  "slacken off",
  "ease off",
  "droop",
  "ease up",
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

export default IconFlag2 as IconComponent;