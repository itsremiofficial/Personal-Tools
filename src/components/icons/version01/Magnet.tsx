import { FC } from 'react';

const IconMagnet: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 18.5V20.5C21 21.3284 20.3284 22 19.5 22H17H13C7.47715 22 3 17.5228 3 12C3 6.47715 7.47715 2 13 2H17H19.5C20.3284 2 21 2.67157 21 3.5V5.5C21 6.32843 20.3284 7 19.5 7H17H13C10.2386 7 8 9.23858 8 12C8 14.7614 10.2386 17 13 17H17H19.5C20.3284 17 21 17.6716 21 18.5Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.5" : "1"} d="M17 2V7M17 17V22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 2H13C7.47715 2 3 6.47715 3 12C3 17.5228 7.47715 22 13 22H17V17H13C10.2386 17 8 14.7614 8 12C8 9.23858 10.2386 7 13 7H17V2Z" fill="currentColor" /><g opacity={duotone ? "0.5" : "1"}><path d="M17 7H19.5C20.3284 7 21 6.32843 21 5.5V3.5C21 2.67157 20.3284 2 19.5 2H17V7Z" fill="currentColor" /><path d="M17 17V22H19.5C20.3284 22 21 21.3284 21 20.5V18.5C21 17.6716 20.3284 17 19.5 17H17Z" fill="currentColor" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.25 2H13C7.47715 2 3 6.47715 3 12C3 17.5228 7.47715 22 13 22H16.25V17H13C10.2386 17 8 14.7614 8 12C8 9.23858 10.2386 7 13 7H16.25V2Z" fill="currentColor" /><path d="M17.75 7H19.5C20.3284 7 21 6.32843 21 5.5V3.5C21 2.67157 20.3284 2 19.5 2H17.75V7Z" fill="currentColor" /><path d="M17.75 17V22H19.5C20.3284 22 21 21.3284 21 20.5V18.5C21 17.6716 20.3284 17 19.5 17H17.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMagnet as IconComponent).keywords = [
  "magnet",
  "magnetic",
  "lodestone",
  "draw",
  "mag",
  "pole",
  "trap",
  "swipe",
  "braid",
  "sucker"
];

export default IconMagnet as IconComponent;