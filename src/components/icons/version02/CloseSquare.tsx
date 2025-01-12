import { FC } from 'react';

const IconCloseSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M9.83984 14.8299L15.4998 9.16992" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M15.4998 14.8299L9.83984 9.16992" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g><path d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2Z" fill="currentColor" /><path d="M13.7303 12L16.0303 9.7C16.3203 9.41 16.3203 8.93 16.0303 8.64C15.7403 8.35 15.2603 8.35 14.9703 8.64L12.6703 10.94L10.3703 8.64C10.0803 8.35 9.60027 8.35 9.31027 8.64C9.02027 8.93 9.02027 9.41 9.31027 9.7L11.6103 12L9.31027 14.3C9.02027 14.59 9.02027 15.07 9.31027 15.36C9.46027 15.51 9.65027 15.58 9.84027 15.58C10.0303 15.58 10.2203 15.51 10.3703 15.36L12.6703 13.06L14.9703 15.36C15.1203 15.51 15.3103 15.58 15.5003 15.58C15.6903 15.58 15.8803 15.51 16.0303 15.36C16.3203 15.07 16.3203 14.59 16.0303 14.3L13.7303 12Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM16.0299 14.3C16.3199 14.59 16.3199 15.07 16.0299 15.36C15.8799 15.51 15.6899 15.58 15.4999 15.58C15.3099 15.58 15.1199 15.51 14.9699 15.36L12.6699 13.06L10.3699 15.36C10.2199 15.51 10.0299 15.58 9.83992 15.58C9.64992 15.58 9.45992 15.51 9.30992 15.36C9.01992 15.07 9.01992 14.59 9.30992 14.3L11.6099 12L9.30992 9.7C9.01992 9.41 9.01992 8.93 9.30992 8.64C9.59992 8.35 10.0799 8.35 10.3699 8.64L12.6699 10.94L14.9699 8.64C15.2599 8.35 15.7399 8.35 16.0299 8.64C16.3199 8.93 16.3199 9.41 16.0299 9.7L13.7299 12L16.0299 14.3Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCloseSquare as IconComponent).keywords = [
  "close",
  "square",
  "confining",
  "restrained",
  "end",
  "terminus",
  "finis",
  "conclusion",
  "ending",
  "finish",
  "shut",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest"
];

export default IconCloseSquare as IconComponent;