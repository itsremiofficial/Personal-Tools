import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconPaperclip2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3297 12.1499L9.85969 14.6199C8.48969 15.9899 8.48969 18.1999 9.85969 19.5699C11.2297 20.9399 13.4397 20.9399 14.8097 19.5699L18.6997 15.6799C21.4297 12.9499 21.4297 8.50992 18.6997 5.77992C15.9697 3.04992 11.5297 3.04992 8.79969 5.77992L4.55969 10.0199C2.21969 12.3599 2.21969 16.1599 4.55969 18.5099" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M12.2003 17.6598C11.5003 17.6598 10.7903 17.3898 10.2603 16.8598C9.19031 15.7898 9.19031 14.0398 10.2603 12.9698L11.6703 11.5598C11.9603 11.2698 12.4403 11.2698 12.7303 11.5598C13.0203 11.8498 13.0203 12.3298 12.7303 12.6198L11.3203 14.0298C10.8303 14.5198 10.8303 15.3098 11.3203 15.7998C11.8103 16.2898 12.6003 16.2898 13.0903 15.7998L15.3103 13.5798C15.9203 12.9698 16.2603 12.1498 16.2603 11.2798C16.2603 10.4098 15.9203 9.59978 15.3103 8.97978C14.0803 7.74978 11.9403 7.74978 10.7103 8.97978L8.29031 11.3998C7.25031 12.4398 7.25031 14.1398 8.29031 15.1898C8.58031 15.4798 8.58031 15.9598 8.29031 16.2498C8.00031 16.5398 7.52031 16.5398 7.23031 16.2498C5.60031 14.6198 5.60031 11.9698 7.23031 10.3398L9.65031 7.91979C10.5503 7.01979 11.7403 6.52979 13.0103 6.52979C14.2803 6.52979 15.4703 7.01979 16.3703 7.91979C17.2703 8.81979 17.7603 10.0098 17.7603 11.2798C17.7603 12.5498 17.2703 13.7398 16.3703 14.6398L14.1503 16.8598C13.6103 17.3898 12.9103 17.6598 12.2003 17.6598Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPaperclip2 as IconComponentType).keywords = [
  "paperclip",
  "2",
  "gem clip",
  "clip",
  "crisis",
  "video",
  "trombone",
  "thumbtack",
  "clothespin",
  "screwdriver",
  "ribbon",
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

export default IconPaperclip2 as IconComponentType;