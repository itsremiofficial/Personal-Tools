import { FC } from 'react';

const IconBookSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M19.05 15.2702V7.58023C19.05 6.81023 18.43 6.25024 17.67 6.31024H17.6301C16.2901 6.42024 14.2601 7.11025 13.1201 7.82025L13.0101 7.89026C12.8301 8.00026 12.52 8.00026 12.33 7.89026L12.17 7.79025C11.04 7.08025 9.01004 6.41023 7.67004 6.30023C6.91004 6.24023 6.29004 6.81025 6.29004 7.57025V15.2702C6.29004 15.8802 6.79002 16.4602 7.40002 16.5302L7.58002 16.5602C8.96002 16.7402 11.1001 17.4502 12.3201 18.1202L12.35 18.1302C12.52 18.2302 12.8 18.2302 12.96 18.1302C14.18 17.4502 16.33 16.7502 17.72 16.5602L17.9301 16.5302C18.5501 16.4602 19.05 15.8902 19.05 15.2702Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 8.1001V17.6601" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8597 2H8.48969C4.84968 2 2.67969 4.17 2.67969 7.81V16.18C2.67969 19.82 4.84968 21.99 8.48969 21.99H16.8597C20.4997 21.99 22.6697 19.82 22.6697 16.18V7.81C22.6697 4.17 20.4997 2 16.8597 2Z" fill="currentColor" /><path d="M12.17 8.09V17.25C12.17 17.61 11.81 17.85 11.48 17.71C10.27 17.19 8.69003 16.71 7.59003 16.57L7.40002 16.55C6.79002 16.47 6.29004 15.9 6.29004 15.28V7.57999C6.29004 6.81999 6.91004 6.25 7.67004 6.31C8.92004 6.41 10.7701 7.01001 11.9301 7.67001C12.0801 7.74001 12.17 7.91 12.17 8.09Z" fill="currentColor" /><path d="M19.0499 7.69983V15.2698C19.0499 15.8898 18.5499 16.4598 17.9399 16.5398L17.7299 16.5598C16.6399 16.7098 15.0699 17.1798 13.8599 17.6898C13.5299 17.8298 13.1699 17.5898 13.1699 17.2298V8.0798C13.1699 7.8998 13.2599 7.72983 13.4199 7.63983C14.5799 6.98983 16.3899 6.4098 17.6199 6.2998H17.6599C18.4299 6.3098 19.0499 6.92983 19.0499 7.69983Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM12.1699 17.25C12.1699 17.61 11.8099 17.85 11.4799 17.71C10.2699 17.19 8.68992 16.71 7.58992 16.57L7.39992 16.55C6.78992 16.47 6.28992 15.9 6.28992 15.28V7.58C6.28992 6.81 6.90992 6.24 7.66992 6.3C8.91992 6.4 10.7699 7 11.9299 7.66C12.0899 7.75 12.1699 7.92 12.1699 8.09V17.25ZM19.0499 15.27C19.0499 15.89 18.5499 16.46 17.9399 16.54L17.7299 16.56C16.6399 16.71 15.0699 17.18 13.8599 17.69C13.5299 17.83 13.1699 17.59 13.1699 17.23V8.08C13.1699 7.9 13.2599 7.73 13.4199 7.64C14.5799 6.99 16.3899 6.41 17.6199 6.3H17.6599C18.4299 6.3 19.0499 6.92 19.0499 7.69V15.27Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBookSquare as IconComponent).keywords = [
  "book",
  "square",
  "daybook",
  "record",
  "script",
  "playscript",
  "ledger",
  "account book",
  "volume",
  "reserve",
  "hold",
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

export default IconBookSquare as IconComponent;