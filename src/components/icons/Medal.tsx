import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMedal: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 15C15.7279 15 18.75 12.0899 18.75 8.5C18.75 4.91015 15.7279 2 12 2C8.27208 2 5.25 4.91015 5.25 8.5C5.25 12.0899 8.27208 15 12 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.51974 13.5198L7.50977 20.8998C7.50977 21.7998 8.13977 22.2398 8.91977 21.8698L11.5998 20.5999C11.8198 20.4899 12.1898 20.4899 12.4098 20.5999L15.0998 21.8698C15.8698 22.2298 16.5098 21.7998 16.5098 20.8998V13.3398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 15C15.7279 15 18.75 12.0899 18.75 8.5C18.75 4.91015 15.7279 2 12 2C8.27208 2 5.25 4.91015 5.25 8.5C5.25 12.0899 8.27208 15 12 15Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M7.51974 13.5201L7.50977 20.9001C7.50977 21.8001 8.13977 22.2401 8.91977 21.8701L11.5998 20.6001C11.8198 20.4901 12.1898 20.4901 12.4098 20.6001L15.0998 21.8701C15.8698 22.2301 16.5098 21.8001 16.5098 20.9001V13.3401" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMedal as IconComponentType).keywords = [
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

export default IconMedal as IconComponentType;