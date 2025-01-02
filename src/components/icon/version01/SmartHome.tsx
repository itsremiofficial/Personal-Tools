import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSmartHome: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M14 22.0002C17.7712 22.0002 19.6568 22.0002 20.8284 20.7883C22 19.5765 22 17.626 22 13.7251V12.2041C22 9.91567 22 8.77146 21.4808 7.82292C20.9616 6.87439 20.013 6.2857 18.116 5.10831L16.116 3.86705C14.1106 2.62247 13.1079 2.00018 12 2.00018C10.8921 2.00018 9.88938 2.62247 7.88402 3.86705L5.88402 5.10831C3.98694 6.2857 3.03839 6.87439 2.51919 7.82292C2.20161 8.40311 2.07829 9.05651 2.0304 10.0002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M11 22C11 17.0294 6.97056 13 2 13" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M8 22C8 18.6863 5.31371 16 2 16" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M5 22C5 20.3431 3.65685 19 2 19" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M2 12.25C2 11.8358 2.33605 11.5 2.75059 11.5C8.13961 11.5 12.5083 15.8652 12.5083 21.25C12.5083 21.6642 12.1722 22 11.7577 22C11.3431 22 11.0071 21.6642 11.0071 21.25C11.0071 16.6937 7.31053 13 2.75059 13C2.33605 13 2 12.6642 2 12.25ZM2.75059 14.5C2.33605 14.5 2 14.8358 2 15.25C2 15.6642 2.33605 16 2.75059 16C5.65237 16 8.00472 18.3505 8.00472 21.25C8.00472 21.6642 8.34077 22 8.75531 22C9.16985 22 9.5059 21.6642 9.5059 21.25C9.5059 17.5221 6.48145 14.5 2.75059 14.5ZM2 18.25C2 17.8358 2.33605 17.5 2.75059 17.5C4.82329 17.5 6.50354 19.1789 6.50354 21.25C6.50354 21.6642 6.16749 22 5.75295 22C5.33841 22 5.00236 21.6642 5.00236 21.25C5.00236 20.0074 3.99421 19 2.75059 19C2.33605 19 2 18.6642 2 18.25Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.48465 12.25C2.48465 11.8358 2.8207 11.5 3.23524 11.5C8.62425 11.5 12.9929 15.8652 12.9929 21.25C12.9929 21.6642 12.6569 22 12.2423 22C11.8278 22 11.4917 21.6642 11.4917 21.25C11.4917 16.6937 7.79517 13 3.23524 13C2.8207 13 2.48465 12.6642 2.48465 12.25ZM3.23524 14.5C2.8207 14.5 2.48465 14.8358 2.48465 15.25C2.48465 15.6642 2.8207 16 3.23524 16C6.13702 16 8.48937 18.3505 8.48937 21.25C8.48937 21.6642 8.82542 22 9.23996 22C9.6545 22 9.99055 21.6642 9.99055 21.25C9.99055 17.5221 6.9661 14.5 3.23524 14.5ZM2.48465 18.25C2.48465 17.8358 2.8207 17.5 3.23524 17.5C5.30794 17.5 6.98819 19.1789 6.98819 21.25C6.98819 21.6642 6.65214 22 6.2376 22C5.82306 22 5.48701 21.6642 5.48701 21.25C5.48701 20.0074 4.47886 19 3.23524 19C2.8207 19 2.48465 18.6642 2.48465 18.25Z" fill="currentColor" /><path d="M2 10.3685C2.35465 10.1355 2.77911 10 3.23524 10C9.45333 10 14.4941 15.0368 14.4941 21.25C14.4941 21.513 14.4489 21.7654 14.366 22C17.8933 21.9986 19.6942 21.9595 20.8275 20.7881C22 19.5763 22 17.6258 22 13.725V12.2039C22 9.91549 22 8.77128 21.4804 7.82274C20.9608 6.87421 20.0115 6.28551 18.1129 5.10812L16.1113 3.86687C14.1044 2.62229 13.1009 2 11.9921 2C10.8833 2 9.87985 2.62229 7.87292 3.86687L5.87135 5.10813C3.97276 6.28551 3.02347 6.87421 2.50386 7.82274C2.14625 8.47555 2.03476 9.22105 2 10.3685Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSmartHome as IconComponentType).keywords = [
  "smart",
  "home",
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
  "household"
];

export default IconSmartHome as IconComponentType;