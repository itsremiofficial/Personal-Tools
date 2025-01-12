import { FC } from 'react';

const IconScreencast: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M11 20.0004H14C17.7712 20.0004 19.6569 20.0004 20.8284 18.8288C22 17.6572 22 15.7716 22 12.0004C22 8.22913 22 6.34351 20.8284 5.17194C19.6569 4.00037 17.7712 4.00037 14 4.00037H6.5C6.03566 4.00037 5.80349 4.00037 5.60793 4.01963C3.70882 4.20667 2.20631 5.70919 2.01926 7.6083C2 7.80386 2 8.03603 2 8.50037V11.0004" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M11 20.0004C11 15.0298 6.97056 11.0004 2 11.0004" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M8 20.0004C8 16.6867 5.31371 14.0004 2 14.0004" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M5 20.0004C5 18.3435 3.65685 17.0004 2 17.0004" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M14 4.00037H10C6.22876 4.00037 4.34315 4.00037 3.17157 5.17194C2 6.34351 2 8.22913 2 12.0004C2 15.7716 2 17.6572 3.17157 18.8288C4.34315 20.0004 6.22876 20.0004 10 20.0004H14C17.7712 20.0004 19.6569 20.0004 20.8284 18.8288C22 17.6572 22 15.7716 22 12.0004C22 8.22913 22 6.34351 20.8284 5.17194C19.6569 4.00037 17.7712 4.00037 14 4.00037Z" fill="currentColor" /><path d="M2.75009 9.50037C2.33588 9.50037 2.00009 9.83615 2.00009 10.2504C2.00009 10.6646 2.33588 11.0004 2.75009 11.0004C7.30644 11.0004 11.0001 14.694 11.0001 19.2504C11.0001 19.6646 11.3359 20.0004 11.7501 20.0004C12.1643 20.0004 12.5001 19.6646 12.5001 19.2504C12.5001 13.8656 8.13487 9.50037 2.75009 9.50037Z" fill="currentColor" /><path d="M2.75009 12.5004C2.33588 12.5004 2.00009 12.8362 2.00009 13.2504C2.00009 13.6646 2.33588 14.0004 2.75009 14.0004C5.64959 14.0004 8.00009 16.3509 8.00009 19.2504C8.00009 19.6646 8.33588 20.0004 8.75009 20.0004C9.16431 20.0004 9.50009 19.6646 9.50009 19.2504C9.50009 15.5224 6.47801 12.5004 2.75009 12.5004Z" fill="currentColor" /><path d="M2.75009 15.5004C2.33588 15.5004 2.00009 15.8362 2.00009 16.2504C2.00009 16.6646 2.33588 17.0004 2.75009 17.0004C3.99273 17.0004 5.00009 18.0077 5.00009 19.2504C5.00009 19.6646 5.33588 20.0004 5.75009 20.0004C6.16431 20.0004 6.50009 19.6646 6.50009 19.2504C6.50009 17.1793 4.82116 15.5004 2.75009 15.5004Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.50041 4.00037H14.0004C17.7716 4.00037 19.6573 4.00037 20.8288 5.17194C22.0004 6.34351 22.0004 8.22913 22.0004 12.0004C22.0004 15.7716 22.0004 17.6572 20.8288 18.8288C19.7295 19.9281 17.1211 19.9959 13.688 20.0001C13.3083 20.0006 13.0004 19.6926 13.0004 19.3129C13.0004 13.6174 8.38335 9.00037 2.68791 9.00037C2.30822 9.00037 1.99946 8.69253 2.00197 8.31284C2.00401 8.00318 2.00874 7.7193 2.01967 7.6083C2.20672 5.70919 3.70923 4.20667 5.60834 4.01963C5.8039 4.00037 6.03607 4.00037 6.50041 4.00037Z" fill="currentColor" /><path d="M2 10.2504C1.58579 10.2504 1.25 10.5862 1.25 11.0004C1.25 11.4146 1.58579 11.7504 2 11.7504C6.55635 11.7504 10.25 15.444 10.25 20.0004C10.25 20.4146 10.5858 20.7504 11 20.7504C11.4142 20.7504 11.75 20.4146 11.75 20.0004C11.75 14.6156 7.38478 10.2504 2 10.2504Z" fill="currentColor" /><path d="M2 13.2504C1.58579 13.2504 1.25 13.5862 1.25 14.0004C1.25 14.4146 1.58579 14.7504 2 14.7504C4.8995 14.7504 7.25 17.1009 7.25 20.0004C7.25 20.4146 7.58579 20.7504 8 20.7504C8.41421 20.7504 8.75 20.4146 8.75 20.0004C8.75 16.2724 5.72792 13.2504 2 13.2504Z" fill="currentColor" /><path d="M2 16.2504C1.58579 16.2504 1.25 16.5862 1.25 17.0004C1.25 17.4146 1.58579 17.7504 2 17.7504C3.24264 17.7504 4.25 18.7577 4.25 20.0004C4.25 20.4146 4.58579 20.7504 5 20.7504C5.41421 20.7504 5.75 20.4146 5.75 20.0004C5.75 17.9293 4.07107 16.2504 2 16.2504Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconScreencast as IconComponent).keywords = [
  "screencast",
  "screencasting",
  "screengrab",
  "viewscreen",
  "screenie",
  "screenland",
  "screen",
  "speedpaint",
  "webcast",
  "cybercast"
];

export default IconScreencast as IconComponent;