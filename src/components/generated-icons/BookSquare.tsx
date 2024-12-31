import { FC } from 'react';
import { IconProps } from "@/types";

const IconBookSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M18.3801 15.2702V7.58023C18.3801 6.81023 17.7601 6.25024 17.0001 6.31024H16.9601C15.6201 6.42024 13.5901 7.11025 12.4501 7.82025L12.3401 7.89026C12.1601 8.00026 11.8501 8.00026 11.6601 7.89026L11.5001 7.79025C10.3701 7.08025 8.34012 6.41023 7.00012 6.30023C6.24012 6.24023 5.62012 6.81025 5.62012 7.57025V15.2702C5.62012 15.8802 6.1201 16.4602 6.7301 16.5302L6.9101 16.5602C8.2901 16.7402 10.4301 17.4502 11.6501 18.1202L11.6801 18.1302C11.8501 18.2302 12.1301 18.2302 12.2901 18.1302C13.5101 17.4502 15.6601 16.7502 17.0501 16.5602L17.2601 16.5302C17.8801 16.4602 18.3801 15.8902 18.3801 15.2702Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 8.1001V17.6601" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="currentColor" /><path d="M11.4991 8.09V17.25C11.4991 17.61 11.1391 17.85 10.8091 17.71C9.59914 17.19 8.01913 16.71 6.91913 16.57L6.72913 16.55C6.11913 16.47 5.61914 15.9 5.61914 15.28V7.57999C5.61914 6.81999 6.23915 6.25 6.99915 6.31C8.24915 6.41 10.0992 7.01001 11.2592 7.67001C11.4092 7.74001 11.4991 7.91 11.4991 8.09Z" fill="currentColor" /><path d="M18.38 7.69983V15.2698C18.38 15.8898 17.88 16.4598 17.27 16.5398L17.06 16.5598C15.97 16.7098 14.4 17.1798 13.19 17.6898C12.86 17.8298 12.5 17.5898 12.5 17.2298V8.0798C12.5 7.8998 12.59 7.72983 12.75 7.63983C13.91 6.98983 15.72 6.4098 16.95 6.2998H16.99C17.76 6.3098 18.38 6.92983 18.38 7.69983Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBookSquare;