import { FC } from 'react';

const IconSquareDoubleAltArrowLeft: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="currentColor" strokeWidth={width} /><path d="M15.5 9L12.5 12L15.5 15" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M11.5 9L8.5 12L11.5 15" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355Z" fill="currentColor" /><path d="M12.0303 9.53033C12.3232 9.23744 12.3232 8.76256 12.0303 8.46967C11.7374 8.17678 11.2626 8.17678 10.9697 8.46967L7.96967 11.4697C7.67678 11.7626 7.67678 12.2374 7.96967 12.5303L10.9697 15.5303C11.2626 15.8232 11.7374 15.8232 12.0303 15.5303C12.3232 15.2374 12.3232 14.7626 12.0303 14.4697L9.56066 12L12.0303 9.53033Z" fill="currentColor" /><path d="M16.0303 9.53033C16.3232 9.23744 16.3232 8.76256 16.0303 8.46967C15.7374 8.17678 15.2626 8.17678 14.9697 8.46967L11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L14.9697 15.5303C15.2626 15.8232 15.7374 15.8232 16.0303 15.5303C16.3232 15.2374 16.3232 14.7626 16.0303 14.4697L13.5607 12L16.0303 9.53033Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12ZM16.0303 9.53033C16.3232 9.23744 16.3232 8.76256 16.0303 8.46967C15.7374 8.17678 15.2626 8.17678 14.9697 8.46967L11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L14.9697 15.5303C15.2626 15.8232 15.7374 15.8232 16.0303 15.5303C16.3232 15.2374 16.3232 14.7626 16.0303 14.4697L13.5607 12L16.0303 9.53033ZM12.0303 8.46967C12.3232 8.76256 12.3232 9.23744 12.0303 9.53033L9.56066 12L12.0303 14.4697C12.3232 14.7626 12.3232 15.2374 12.0303 15.5303C11.7374 15.8232 11.2626 15.8232 10.9697 15.5303L7.96967 12.5303C7.67678 12.2374 7.67678 11.7626 7.96967 11.4697L10.9697 8.46967C11.2626 8.17678 11.7374 8.17678 12.0303 8.46967Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSquareDoubleAltArrowLeft as IconComponent).keywords = [
  "square",
  "double",
  "alt",
  "arrow",
  "left",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
  "twofold",
  "duple",
  "twice",
  "dual",
  "reduplicate",
  "doubly",
  "multiple",
  "double up",
  "forked",
  "elevation",
  "el",
  "altitude",
  "backspace",
  "esc",
  "shadow",
  "ctrl",
  "variation",
  "variant",
  "pointer",
  "archer",
  "archery",
  "dart",
  "arrowhead",
  "bolt",
  "spike",
  "rope",
  "roof",
  "left-hand",
  "left-handed",
  "left over",
  "near",
  "leftover",
  "nigh",
  "remaining",
  "leftfield",
  "odd"
];

export default IconSquareDoubleAltArrowLeft as IconComponent;