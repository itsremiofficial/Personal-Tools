import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconLikeTag: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M9.65039 13.7999L11.2604 15.0499C11.4704 15.2599 11.9404 15.3598 12.2504 15.3598H14.2304C14.8504 15.3598 15.5304 14.8899 15.6904 14.2699L16.9404 10.4798C17.2004 9.74981 16.7304 9.12984 15.9504 9.12984H13.8704C13.5604 9.12984 13.3004 8.86984 13.3504 8.50984L13.6104 6.84981C13.7104 6.37981 13.4004 5.85979 12.9304 5.70979C12.5104 5.54979 11.9904 5.75978 11.7904 6.06978L9.6604 9.23982" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /><path d="M7 13.7998V8.70972C7 7.97972 7.30999 7.71973 8.03999 7.71973H8.56C9.29 7.71973 9.60001 7.97972 9.60001 8.70972V13.7998C9.60001 14.5298 9.29 14.7898 8.56 14.7898H8.03999C7.30999 14.7898 7 14.5298 7 13.7998Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M18 18.8597H17.24C16.44 18.8597 15.68 19.1697 15.12 19.7297L13.41 21.4198C12.63 22.1898 11.36 22.1898 10.58 21.4198L8.87 19.7297C8.31 19.1697 7.54 18.8597 6.75 18.8597H6C4.34 18.8597 3 17.5298 3 15.8898V4.97974C3 3.33974 4.34 2.00977 6 2.00977H18C19.66 2.00977 21 3.33974 21 4.97974V15.8898C21 17.5198 19.66 18.8597 18 18.8597Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.41 21.42C12.63 22.19 11.36 22.19 10.58 21.42L8.87 19.73C8.31 19.17 7.54 18.86 6.75 18.86H6C4.34 18.86 3 17.53 3 15.89V4.97998C3 3.33998 4.34 2.01001 6 2.01001H18C19.66 2.01001 21 3.33998 21 4.97998V15.89C21 17.52 19.66 18.86 18 18.86Z" fill="currentColor" /><path d="M16.5805 9.56998C16.3905 9.29998 16.0705 9.15 15.6905 9.15H13.7405C13.6105 9.15 13.4905 9.09998 13.4105 8.99998C13.3305 8.89998 13.2905 8.76998 13.3105 8.62998L13.5505 7.06998C13.6505 6.60998 13.3405 6.07997 12.8805 5.92997C12.4505 5.76997 11.9405 5.98995 11.7405 6.28995L9.80048 9.16996V8.80997C9.80048 8.10997 9.50047 7.81998 8.76047 7.81998H8.27048C7.53048 7.81998 7.23047 8.10997 7.23047 8.80997V13.59C7.23047 14.29 7.53048 14.58 8.27048 14.58H8.76047C9.46047 14.58 9.76047 14.31 9.79047 13.67L11.2605 14.8C11.4605 15 11.9105 15.11 12.2305 15.11H14.0805C14.7205 15.11 15.3605 14.63 15.5005 14.04L16.6705 10.48C16.8005 10.16 16.7705 9.82998 16.5805 9.56998Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLikeTag as IconComponentType).keywords = [
  "like",
  "tag",
  "wish",
  "ish",
  "like-minded",
  "suchlike",
  "corresponding",
  "similar",
  "alike",
  "equal",
  "comparable",
  "label",
  "mark",
  "trail",
  "chase",
  "go after",
  "tag end",
  "dog",
  "shred",
  "chase after"
];

export default IconLikeTag as IconComponentType;