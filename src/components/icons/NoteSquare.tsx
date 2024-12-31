import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconNoteSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 10V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M15.5098 22C16.6143 22 17.5098 21.1046 17.5098 20C17.5098 18.8954 16.6143 18 15.5098 18C14.4052 18 13.5098 18.8954 13.5098 20C13.5098 21.1046 14.4052 22 15.5098 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.5098 19.9998V13.0098" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.8198 12.0699L21.0298 12.8099C21.5598 12.9899 21.9998 13.5899 21.9998 14.1599V14.7499C21.9998 15.5099 21.4098 15.9399 20.6898 15.6999L18.4797 14.9599C17.9497 14.7799 17.5098 14.1799 17.5098 13.6099V13.0199C17.5098 12.2499 18.0998 11.8299 18.8198 12.0699Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21 7.52002V15.48C21 15.84 20.98 16.19 20.93 16.51C20.89 16.51 20.84 16.49 20.8 16.48L18.52 15.72C18.5 15.71 18.49 15.7 18.47 15.7V20.31C17.99 20.58 17.45 20.77 16.85 20.87C16.95 20.69 17.01 20.48 17.01 20.25C17.01 19.52 16.41 18.92 15.67 18.92C14.94 18.92 14.34 19.52 14.34 20.25C14.34 20.53 14.42 20.79 14.57 21H7.52002C4.07002 21 2 18.94 2 15.48V7.52002C2 4.06002 4.07002 2 7.52002 2H15.48C18.93 2 21 4.06002 21 7.52002Z" fill="currentColor" /><path d="M21.6208 12.0999L21.0009 11.89L19.3309 11.34C18.7509 11.15 18.1609 11.2199 17.7109 11.5399C17.2709 11.8699 17.0109 12.4 17.0109 13.02V17.81C16.6109 17.59 16.1608 17.45 15.6708 17.45C14.1308 17.45 12.8809 18.71 12.8809 20.25C12.8809 20.51 12.9208 20.76 12.9808 21C13.3108 22.19 14.3908 23.05 15.6708 23.05C17.2008 23.05 18.4408 21.83 18.4708 20.31V15.7C18.4908 15.7 18.5009 15.7099 18.5209 15.7199L20.8008 16.4799C20.8408 16.4899 20.8908 16.51 20.9308 16.51C21.1108 16.56 21.2709 16.58 21.4409 16.58C21.8009 16.58 22.1408 16.48 22.4208 16.27C22.8708 15.95 23.1208 15.42 23.1208 14.8V14.2C23.1208 13.29 22.4808 12.3899 21.6208 12.0999ZM15.6708 21.59C15.2108 21.59 14.8109 21.36 14.5709 21C14.4209 20.79 14.3409 20.53 14.3409 20.25C14.3409 19.52 14.9408 18.92 15.6708 18.92C16.4108 18.92 17.0109 19.52 17.0109 20.25C17.0109 20.48 16.9508 20.69 16.8508 20.87C16.6308 21.3 16.1808 21.59 15.6708 21.59Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconNoteSquare as IconComponentType).keywords = [
  "note",
  "square",
  "annotation",
  "notation",
  "mention",
  "remark",
  "notice",
  "observe",
  "take note",
  "distinction",
  "bank note",
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

export default IconNoteSquare as IconComponentType;