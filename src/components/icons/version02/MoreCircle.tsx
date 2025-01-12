import { FC } from 'react';

const IconMoreCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 22C18.1699 22 22.6699 17.5 22.6699 12C22.6699 6.5 18.1699 2 12.6699 2C7.16992 2 2.66992 6.5 2.66992 12C2.66992 17.5 7.16992 22 12.6699 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M16.6664 12H16.6754" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M12.6654 12H12.6744" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M8.66443 12H8.67341" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" fill="currentColor" /><path d="M12.6699 13C12.1099 13 11.6699 12.55 11.6699 12C11.6699 11.45 12.1199 11 12.6699 11C13.2199 11 13.6699 11.45 13.6699 12C13.6699 12.55 13.2299 13 12.6699 13Z" fill="currentColor" /><path d="M16.6699 13C16.1099 13 15.6699 12.55 15.6699 12C15.6699 11.45 16.1199 11 16.6699 11C17.2199 11 17.6699 11.45 17.6699 12C17.6699 12.55 17.2299 13 16.6699 13Z" fill="currentColor" /><path d="M8.66992 13C8.10992 13 7.66992 12.55 7.66992 12C7.66992 11.45 8.11992 11 8.66992 11C9.21992 11 9.66992 11.45 9.66992 12C9.66992 12.55 9.22992 13 8.66992 13Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 2C7.15992 2 2.66992 6.49 2.66992 12C2.66992 17.51 7.15992 22 12.6699 22C18.1799 22 22.6699 17.51 22.6699 12C22.6699 6.49 18.1799 2 12.6699 2ZM8.66992 13C8.10992 13 7.66992 12.55 7.66992 12C7.66992 11.45 8.11992 11 8.66992 11C9.21992 11 9.66992 11.45 9.66992 12C9.66992 12.55 9.22992 13 8.66992 13ZM12.6699 13C12.1099 13 11.6699 12.55 11.6699 12C11.6699 11.45 12.1199 11 12.6699 11C13.2199 11 13.6699 11.45 13.6699 12C13.6699 12.55 13.2299 13 12.6699 13ZM16.6699 13C16.1099 13 15.6699 12.55 15.6699 12C15.6699 11.45 16.1199 11 16.6699 11C17.2199 11 17.6699 11.45 17.6699 12C17.6699 12.55 17.2299 13 16.6699 13Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMoreCircle as IconComponent).keywords = [
  "more",
  "circle",
  "additional",
  "further",
  "added",
  "more than",
  "to a greater extent",
  "maximum",
  "farther",
  "anymore",
  "better",
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

export default IconMoreCircle as IconComponent;