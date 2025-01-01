import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconForward5Seconds: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.98 4.46997L12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.0894 7.79974C20.1994 9.27974 20.8894 11.1097 20.8894 13.1097C20.8894 18.0197 16.9094 21.9998 11.9994 21.9998C7.08939 21.9998 3.10938 18.0197 3.10938 13.1097C3.10938 8.19974 7.08939 4.21973 11.9994 4.21973C12.6794 4.21973 13.3394 4.30978 13.9794 4.45978" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M13.9098 10.8301H10.8498L10.0898 13.1201H12.3798C13.2198 13.1201 13.9098 13.8001 13.9098 14.6501C13.9098 15.4901 13.2298 16.1801 12.3798 16.1801H10.0898" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.4807 7.08981C19.2207 6.76981 18.7507 6.71977 18.4307 6.97977C18.1107 7.23977 18.0608 7.70981 18.3208 8.02981C19.4508 9.42981 20.0808 11.0898 20.1408 12.8298C20.3008 17.3098 16.7807 21.0898 12.2907 21.2398C7.81073 21.3998 4.03076 17.8798 3.88076 13.3898C3.73076 8.8998 7.24073 5.12977 11.7307 4.97977C12.3007 4.95977 12.9007 5.0098 13.5507 5.1398C13.5907 5.1498 13.6307 5.1398 13.6707 5.1398C13.7707 5.1898 13.8908 5.21976 14.0008 5.21976C14.1708 5.21976 14.3307 5.16977 14.4707 5.04977C14.7907 4.78977 14.8408 4.31978 14.5908 3.99978L12.6107 1.52981C12.3507 1.20981 11.8807 1.14976 11.5607 1.40976C11.2407 1.66976 11.1908 2.13981 11.4408 2.45981L12.2708 3.48978C12.0808 3.47978 11.8808 3.46977 11.6908 3.47977C6.38075 3.65977 2.21077 8.1398 2.40077 13.4498C2.59077 18.7598 7.06075 22.9298 12.3707 22.7398C17.6807 22.5498 21.8507 18.0798 21.6607 12.7698C21.5607 10.7098 20.8207 8.73981 19.4807 7.08981Z" fill="currentColor" /><path d="M12.3806 16.9198H10.0906C9.68065 16.9198 9.34065 16.5798 9.34065 16.1698C9.34065 15.7598 9.68065 15.4198 10.0906 15.4198H12.3806C12.8106 15.4198 13.1606 15.0698 13.1606 14.6398C13.1606 14.2098 12.8106 13.8598 12.3806 13.8598H10.0906C9.85065 13.8598 9.6206 13.7398 9.4806 13.5498C9.3406 13.3598 9.30062 13.0998 9.38062 12.8698L10.1406 10.5798C10.2406 10.2698 10.5306 10.0698 10.8506 10.0698H13.9106C14.3206 10.0698 14.6606 10.4098 14.6606 10.8198C14.6606 11.2298 14.3206 11.5698 13.9106 11.5698H11.3906L11.1306 12.3598H12.3806C13.6406 12.3598 14.6606 13.3798 14.6606 14.6398C14.6606 15.8998 13.6406 16.9198 12.3806 16.9198Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconForward5Seconds as IconComponentType).keywords = [
  "forward",
  "5",
  "seconds",
  "frontwards",
  "ahead",
  "frontward",
  "forrader",
  "front",
  "forth",
  "onwards",
  "onward",
  "advancing",
  "wash out",
  "cut up",
  "pull out",
  "pull up",
  "pull over",
  "pull in",
  "work out",
  "ride down",
  "rush hour",
  "sec",
  "moment",
  "instant",
  "intermediate",
  "endorsement",
  "endorse",
  "indorse",
  "back"
];

export default IconForward5Seconds as IconComponentType;