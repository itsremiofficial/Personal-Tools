import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMusicSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M8.41962 17.1097C9.2867 17.1097 9.98962 16.4068 9.98962 15.5397C9.98962 14.6726 9.2867 13.9697 8.41962 13.9697C7.55253 13.9697 6.84961 14.6726 6.84961 15.5397C6.84961 16.4068 7.55253 17.1097 8.41962 17.1097Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.75 14.4897V8.34973C15.75 7.03973 14.93 6.85978 14.1 7.08978L10.96 7.94976C10.39 8.10976 10 8.55977 10 9.20977V10.3097V11.0497V15.5497" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.1794 16.0599C15.0465 16.0599 15.7494 15.357 15.7494 14.4899C15.7494 13.6228 15.0465 12.9199 14.1794 12.9199C13.3123 12.9199 12.6094 13.6228 12.6094 14.4899C12.6094 15.357 13.3123 16.0599 14.1794 16.0599Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.99023 11.0397L15.7502 9.46973" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="currentColor" /><path d="M16.1407 6.7099C15.8007 6.4499 15.2007 6.1999 14.2407 6.4599L11.2507 7.27991C10.3207 7.52991 9.71075 8.31986 9.71075 9.28986V11.0399V13.0699C9.50075 13.0099 9.29073 12.9698 9.06073 12.9698C7.77073 12.9698 6.7207 14.0199 6.7207 15.3099C6.7207 16.5999 7.77073 17.6499 9.06073 17.6499C10.3407 17.6499 11.3808 16.6099 11.4008 15.3399C11.4008 15.3299 11.4107 15.3199 11.4107 15.3099V11.6899L15.1907 10.6599V12.0799C14.9807 12.0199 14.7707 11.9799 14.5407 11.9799C13.2507 11.9799 12.2007 13.0299 12.2007 14.3199C12.2007 15.6099 13.2507 16.6599 14.5407 16.6599C15.8307 16.6599 16.8807 15.6099 16.8807 14.3199V9.55988V8.48987C16.8807 7.48987 16.4707 6.9699 16.1407 6.7099ZM9.06073 15.9599C8.70073 15.9599 8.41071 15.6699 8.41071 15.3099C8.41071 14.9499 8.70073 14.6599 9.06073 14.6599C9.42073 14.6599 9.71075 14.9499 9.71075 15.3099C9.71075 15.6699 9.42073 15.9599 9.06073 15.9599ZM14.5407 14.9599C14.1807 14.9599 13.8907 14.6699 13.8907 14.3099C13.8907 13.9499 14.1807 13.6599 14.5407 13.6599C14.9007 13.6599 15.1907 13.9499 15.1907 14.3099C15.1807 14.6699 14.8907 14.9599 14.5407 14.9599Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMusicSquare as IconComponentType).keywords = [
  "music",
  "square",
  "sheet music",
  "euphony",
  "medicine",
  "melody",
  "symphony",
  "orchestra",
  "musician",
  "song",
  "singing",
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

export default IconMusicSquare as IconComponentType;