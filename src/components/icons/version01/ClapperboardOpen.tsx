import { FC } from 'react';

const IconClapperboardOpen: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 11H16C17.8856 11 18.8284 11 19.4142 11.5858C20 12.1716 20 13.1144 20 15V16C20 18.8284 20 20.2426 19.1213 21.1213C18.2426 22 16.8284 22 14 22H10C7.17157 22 5.75736 22 4.87868 21.1213C4 20.2426 4 18.8284 4 16V11Z" stroke="currentColor" strokeWidth={width} /><path d="M4.0014 10.9997C3.51761 9.19412 3.27572 8.29135 3.48377 7.51489C3.62006 7.00622 3.88785 6.5424 4.26022 6.17003C4.82863 5.60162 5.7314 5.35973 7.53694 4.87593L14.5399 2.99949C15.2131 2.8191 15.5498 2.72891 15.8446 2.70958C17.0554 2.63022 18.1948 3.28804 18.7314 4.37629C18.8621 4.64129 18.9523 4.97791 19.1327 5.65114C19.1928 5.87556 19.2229 5.98776 19.2293 6.08604C19.2558 6.48964 19.0365 6.86943 18.6738 7.04832C18.5854 7.09188 18.4732 7.12195 18.2488 7.18208L4.0014 10.9997Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M14.7004 2.94159L14.0627 8.28886" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M8.42196 4.62372L7.78421 9.97099" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M4 11H16C17.8856 11 18.8284 11 19.4142 11.5858C20 12.1716 20 13.1144 20 15V16C20 18.8284 20 20.2426 19.1213 21.1213C18.2426 22 16.8284 22 14 22H10C7.17157 22 5.75736 22 4.87868 21.1213C4 20.2426 4 18.8284 4 16V11Z" fill="currentColor" /><path d="M13.3176 8.19993L13.9179 3.16598L9.20718 4.42823L9.16624 4.71262L8.56217 9.77744L13.2808 8.51307L13.3176 8.19993Z" fill="currentColor" /><path d="M3.48316 7.51489C3.2751 8.29135 3.517 9.19412 4.00079 10.9997L7 10.196L7.03904 9.88225L7.63943 4.84831L7.53633 4.87593C5.73079 5.35973 4.82802 5.60162 4.25961 6.17003C3.88724 6.5424 3.61945 7.00623 3.48316 7.51489Z" fill="currentColor" /><path d="M18.2482 7.18208L14.8407 8.09511L15.4448 3.0303L15.5 2.75802C15.6288 2.73232 15.739 2.71646 15.844 2.70958C17.0548 2.63022 18.1941 3.28804 18.7308 4.37629C18.8615 4.64129 18.9517 4.97791 19.1321 5.65114C19.1922 5.87556 19.2223 5.98776 19.2287 6.08604C19.2552 6.48964 19.0359 6.86943 18.6732 7.04832C18.5848 7.09188 18.4726 7.12195 18.2482 7.18208Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 11H16C17.8856 11 18.8284 11 19.4142 11.5858C20 12.1716 20 13.1144 20 15V16C20 18.8284 20 20.2426 19.1213 21.1213C18.2426 22 16.8284 22 14 22H10C7.17157 22 5.75736 22 4.87868 21.1213C4 20.2426 4 18.8284 4 16V11Z" fill="currentColor" /><path d="M13.9184 3.16598L9.15025 4.44361C9.17143 4.52917 9.17779 4.61993 9.16673 4.71262L8.56266 9.77744L13.342 8.49682C13.3149 8.40322 13.3058 8.30276 13.318 8.19993L13.9184 3.16598Z" fill="currentColor" /><path d="M14.8412 8.09511L18.2487 7.18208C18.4731 7.12195 18.5853 7.09188 18.6736 7.04832C19.0364 6.86943 19.2557 6.48964 19.2292 6.08604C19.2228 5.98776 19.1927 5.87556 19.1326 5.65114C18.9522 4.97791 18.862 4.64129 18.7313 4.37629C18.1946 3.28804 17.0553 2.63022 15.8445 2.70958C15.7213 2.71766 15.5907 2.73811 15.4314 2.77235C15.4505 2.85465 15.4558 2.94159 15.4452 3.0303L14.8412 8.09511Z" fill="currentColor" /><path d="M7.06349 10.1791C7.03643 10.0855 7.02727 9.98509 7.03953 9.88225L7.63992 4.84831L7.53682 4.87593C5.73128 5.35973 4.82851 5.60162 4.2601 6.17003C3.88773 6.5424 3.61994 7.00623 3.48364 7.51489C3.27559 8.29135 3.51749 9.19412 4.00128 10.9997L7.06349 10.1791Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconClapperboardOpen as IconComponent).keywords = [
  "clapperboard",
  "open",
  "synchronizer",
  "photoboard",
  "film horse",
  "movie camera",
  "kinetoscope",
  "cinematoscope",
  "projectoscope",
  "gate",
  "moviola",
  "open up",
  "available",
  "visible",
  "afford",
  "public",
  "ajar",
  "give",
  "spread",
  "wide"
];

export default IconClapperboardOpen as IconComponent;