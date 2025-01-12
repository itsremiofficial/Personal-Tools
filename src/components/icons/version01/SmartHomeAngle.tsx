import { FC } from 'react';

const IconSmartHomeAngle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M2.01096 10.0002C1.96724 9.12562 2.0484 8.47345 2.33524 7.87513C2.8757 6.74779 4.02607 6.06252 6.32679 4.69199L7.71163 3.86705C9.80092 2.62247 10.8456 2.00018 11.9999 2.00018C13.1542 2.00018 14.1988 2.62247 16.2881 3.86705L17.673 4.69199C19.9737 6.06252 21.1241 6.74779 21.6645 7.87513C22.205 9.00247 22.0153 10.321 21.6358 12.9581L21.357 14.8954C20.8696 18.2828 20.6259 19.9766 19.4509 20.9884C18.3821 21.9086 16.8598 21.9919 13.9999 21.9994" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M11 22C11 17.0294 6.97056 13 2 13" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M8 22C8 18.6863 5.31371 16 2 16" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M5 22C5 20.3431 3.65685 19 2 19" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M13.1061 22H10.8939C7.44737 22 5.72409 22 4.54903 20.9882C3.37396 19.9764 3.13025 18.2827 2.64284 14.8952L2.36407 12.9579C1.98463 10.3208 1.79491 9.00229 2.33537 7.87495C2.87583 6.7476 4.02619 6.06234 6.32691 4.69181L7.71175 3.86687C9.80104 2.62229 10.8457 2 12 2C13.1543 2 14.199 2.62229 16.2882 3.86687L17.6731 4.69181C19.9738 6.06234 21.1242 6.7476 21.6646 7.87495C22.2051 9.00229 22.0154 10.3208 21.6359 12.9579L21.3572 14.8952C20.8697 18.2827 20.626 19.9764 19.451 20.9882C18.2759 22 16.5526 22 13.1061 22Z" fill="currentColor" /><path d="M2 12.25C2 11.8358 2.33579 11.5 2.75 11.5C8.13478 11.5 12.5 15.8652 12.5 21.25C12.5 21.6642 12.1642 22 11.75 22C11.3358 22 11 21.6642 11 21.25C11 16.6937 7.30635 13 2.75 13C2.33579 13 2 12.6642 2 12.25Z" fill="currentColor" /><path d="M2 15.25C2 14.8358 2.33579 14.5 2.75 14.5C6.47792 14.5 9.5 17.5221 9.5 21.25C9.5 21.6642 9.16421 22 8.75 22C8.33579 22 8 21.6642 8 21.25C8 18.3505 5.6495 16 2.75 16C2.33579 16 2 15.6642 2 15.25Z" fill="currentColor" /><path d="M2.75 17.5C2.33579 17.5 2 17.8358 2 18.25C2 18.6642 2.33579 19 2.75 19C3.99264 19 5 20.0074 5 21.25C5 21.6642 5.33579 22 5.75 22C6.16421 22 6.5 21.6642 6.5 21.25C6.5 19.1789 4.82107 17.5 2.75 17.5Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.25 12.25C2.25 11.8358 2.58579 11.5 3 11.5C8.38478 11.5 12.75 15.8652 12.75 21.25C12.75 21.6642 12.4142 22 12 22C11.5858 22 11.25 21.6642 11.25 21.25C11.25 16.6937 7.55635 13 3 13C2.58579 13 2.25 12.6642 2.25 12.25Z" fill="currentColor" /><path d="M2.25 15.25C2.25 14.8358 2.58579 14.5 3 14.5C6.72792 14.5 9.75 17.5221 9.75 21.25C9.75 21.6642 9.41421 22 9 22C8.58579 22 8.25 21.6642 8.25 21.25C8.25 18.3505 5.8995 16 3 16C2.58579 16 2.25 15.6642 2.25 15.25Z" fill="currentColor" /><path d="M3 17.5C2.58579 17.5 2.25 17.8358 2.25 18.25C2.25 18.6642 2.58579 19 3 19C4.24264 19 5.25 20.0074 5.25 21.25C5.25 21.6642 5.58579 22 6 22C6.41421 22 6.75 21.6642 6.75 21.25C6.75 19.1789 5.07107 17.5 3 17.5Z" fill="currentColor" /><path d="M2.02446 10.2219C2.31957 10.0797 2.65048 10 3 10C9.2132 10 14.25 15.0368 14.25 21.25C14.25 21.5126 14.205 21.7646 14.1224 21.9989C16.9036 21.9892 18.3976 21.8953 19.451 20.9882C20.626 19.9764 20.8697 18.2827 21.3572 14.8952L21.6359 12.9579C22.0154 10.3208 22.2051 9.00229 21.6646 7.87495C21.1242 6.7476 19.9738 6.06234 17.6731 4.69182L16.2882 3.86687C14.199 2.62229 13.1543 2 12 2C10.8457 2 9.80104 2.62229 7.71175 3.86687L6.32691 4.69181C4.02619 6.06234 2.87583 6.7476 2.33537 7.87495C2.02477 8.52281 1.95533 9.23381 2.02446 10.2219Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSmartHomeAngle as IconComponent).keywords = [
  "smart",
  "home",
  "angle",
  "hurt",
  "ache",
  "raffish",
  "rakish",
  "snappy",
  "cagy",
  "impertinent",
  "dashing",
  "impudent",
  "domicile",
  "habitation",
  "domestic",
  "dwelling",
  "nursing home",
  "rest home",
  "house",
  "dwelling house",
  "household",
  "weight",
  "slant",
  "tilt",
  "lean",
  "tip",
  "fish",
  "side",
  "prism",
  "dimension"
];

export default IconSmartHomeAngle as IconComponent;