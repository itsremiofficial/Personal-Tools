import { FC } from 'react';

const IconTagHorizontal: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.72104 20.0005H12.358C14.5854 20.0005 15.6992 20.0005 16.6289 19.4677C17.5586 18.9349 18.1488 17.9585 19.3294 16.0055L20.0102 14.8792C21.0034 13.2362 21.5 12.4147 21.5 11.5005C21.5 10.5863 21.0034 9.7648 20.0102 8.12174L19.3294 6.9955C18.1488 5.04252 17.5586 4.06603 16.6289 3.53326C15.6992 3.00049 14.5854 3.00049 12.358 3.00049H9.72104C5.84561 3.00049 3.90789 3.00049 2.70394 4.24528C1.5 5.49008 1.5 7.49355 1.5 11.5005C1.5 15.5074 1.5 17.5109 2.70394 18.7557C3.90789 20.0005 5.8456 20.0005 9.72104 20.0005Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M6.5 6.99561V16.0005" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M10.221 20.0005H12.858C15.0854 20.0005 16.1992 20.0005 17.1289 19.4991C18.0586 18.9976 18.6488 18.0786 19.8294 16.2405L20.5102 15.1805L20.5102 15.1805C21.5034 13.6341 22 12.8609 22 12.0005C22 11.1401 21.5034 10.3669 20.5102 8.82049L19.8294 7.7605C18.6488 5.9224 18.0586 5.00335 17.1289 4.50192C16.1992 4.00049 15.0854 4.00049 12.858 4.00049H10.221C6.34561 4.00049 4.40789 4.00049 3.20394 5.17206C2 6.34363 2 8.22925 2 12.0005C2 15.7717 2 17.6573 3.20394 18.8289C4.40789 20.0005 6.3456 20.0005 10.221 20.0005Z" fill="currentColor" /><path d="M7 7.05518C7.41421 7.05518 7.75 7.37121 7.75 7.76106V16.2362C7.75 16.6261 7.41421 16.9421 7 16.9421C6.58579 16.9421 6.25 16.6261 6.25 16.2362V7.76106C6.25 7.37121 6.58579 7.05518 7 7.05518Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.858 20.0005H10.221C6.3456 20.0005 4.40789 20.0005 3.20394 18.8289C2 17.6573 2 15.7717 2 12.0005C2 8.22925 2 6.34363 3.20394 5.17206C4.40789 4.00049 6.34561 4.00049 10.221 4.00049H12.858C15.0854 4.00049 16.1992 4.00049 17.1289 4.50192C18.0586 5.00335 18.6488 5.9224 19.8294 7.7605L20.5102 8.82049C21.5034 10.3669 22 11.1401 22 12.0005C22 12.8609 21.5034 13.6341 20.5102 15.1805L19.8294 16.2405C18.6488 18.0786 18.0586 18.9976 17.1289 19.4991C16.1992 20.0005 15.0854 20.0005 12.858 20.0005ZM7 7.05472C7.41421 7.05472 7.75 7.37075 7.75 7.7606V16.2358C7.75 16.6256 7.41421 16.9417 7 16.9417C6.58579 16.9417 6.25 16.6256 6.25 16.2358V7.7606C6.25 7.37075 6.58579 7.05472 7 7.05472Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTagHorizontal as IconComponent).keywords = [
  "tag",
  "horizontal",
  "label",
  "mark",
  "trail",
  "chase",
  "go after",
  "tag end",
  "dog",
  "shred",
  "chase after",
  "level",
  "flat",
  "crosswise",
  "swimming",
  "naiant",
  "cross-sectional",
  "transverse",
  "transversal",
  "landscape"
];

export default IconTagHorizontal as IconComponent;