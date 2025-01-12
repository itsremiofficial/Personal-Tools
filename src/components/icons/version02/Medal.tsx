import { FC } from 'react';

const IconMedal: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 15C16.3978 15 19.4199 12.0899 19.4199 8.5C19.4199 4.91015 16.3978 2 12.6699 2C8.942 2 5.91992 4.91015 5.91992 8.5C5.91992 12.0899 8.942 15 12.6699 15Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.18967 13.5198L8.17969 20.8998C8.17969 21.7998 8.80969 22.2398 9.58969 21.8698L12.2697 20.5999C12.4897 20.4899 12.8597 20.4899 13.0797 20.5999L15.7697 21.8698C16.5397 22.2298 17.1797 21.7998 17.1797 20.8998V13.3398" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 15C16.3978 15 19.4199 12.0899 19.4199 8.5C19.4199 4.91015 16.3978 2 12.6699 2C8.942 2 5.91992 4.91015 5.91992 8.5C5.91992 12.0899 8.942 15 12.6699 15Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M8.18967 13.5198L8.17969 20.8998C8.17969 21.7998 8.80969 22.2398 9.58969 21.8698L12.2697 20.5999C12.4897 20.4899 12.8597 20.4899 13.0797 20.5999L15.7697 21.8698C16.5397 22.2298 17.1797 21.7998 17.1797 20.8998V13.3398" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 15C16.3978 15 19.4199 12.0899 19.4199 8.5C19.4199 4.91015 16.3978 2 12.6699 2C8.942 2 5.91992 4.91015 5.91992 8.5C5.91992 12.0899 8.942 15 12.6699 15Z" fill="currentColor" /><path d="M16.4599 15.6101C16.7899 15.4401 17.1699 15.6901 17.1699 16.0601V20.9101C17.1699 21.8101 16.5399 22.2501 15.7599 21.8801L13.0799 20.6101C12.8499 20.5101 12.4899 20.5101 12.2599 20.6101L9.57992 21.8801C8.79992 22.2401 8.16992 21.8001 8.16992 20.9001L8.18992 16.0601C8.18992 15.6901 8.57992 15.4501 8.89992 15.6101C10.0299 16.1801 11.3099 16.5001 12.6699 16.5001C14.0299 16.5001 15.3199 16.1801 16.4599 15.6101Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMedal as IconComponent).keywords = [
  "medal",
  "medallion",
  "decoration",
  "laurel wreath",
  "ribbon",
  "palm",
  "medalist",
  "decorating",
  "décor",
  "plaque"
];

export default IconMedal as IconComponent;