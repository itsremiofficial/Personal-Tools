import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSuitcaseTag: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 14.0004C2 10.2291 2 8.34351 3.17157 7.17194C4.34315 6.00037 6.22876 6.00037 10 6.00037H14C17.7712 6.00037 19.6569 6.00037 20.8284 7.17194C22 8.34351 22 10.2291 22 14.0004C22 17.7716 22 19.6572 20.8284 20.8288C19.6569 22.0004 17.7712 22.0004 14 22.0004H10C6.22876 22.0004 4.34315 22.0004 3.17157 20.8288C2 19.6572 2 17.7716 2 14.0004Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M16 6.00037C16 4.11475 16 3.17194 15.4142 2.58615C14.8284 2.00037 13.8856 2.00037 12 2.00037C10.1144 2.00037 9.17157 2.00037 8.58579 2.58615C8 3.17194 8 4.11475 8 6.00037" stroke="currentColor" strokeWidth={width} /><path d="M10 15.0004H6C5.5286 15.0004 5.29289 15.0004 5.14645 15.1468C5 15.2933 5 15.529 5 16.0004V17.0004C5 17.4718 5 17.7075 5.14645 17.8539C5.29289 18.0004 5.5286 18.0004 6 18.0004H10C10.4714 18.0004 10.7071 18.0004 10.8536 17.8539C11 17.7075 11 17.4718 11 17.0004V16.0004C11 15.529 11 15.2933 10.8536 15.1468C10.7071 15.0004 10.4714 15.0004 10 15.0004Z" stroke="currentColor" strokeWidth={width} strokeLinejoin="round" /><path opacity={duotone ? "0.5" : "1"} d="M6 6.50037V15.0004M6 21.5004V18.5004" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M18 6.50037V21.5004" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M2 14.0004C2 10.2291 2 8.34351 3.17157 7.17194C4.34315 6.00037 6.22876 6.00037 10 6.00037H14C17.7712 6.00037 19.6569 6.00037 20.8284 7.17194C22 8.34351 22 10.2291 22 14.0004C22 17.7716 22 19.6572 20.8284 20.8288C19.6569 22.0004 17.7712 22.0004 14 22.0004H10C6.22876 22.0004 4.34315 22.0004 3.17157 20.8288C2 19.6572 2 17.7716 2 14.0004Z" fill="currentColor" /><path d="M11.948 1.25037C11.0495 1.25034 10.3003 1.25032 9.70552 1.33028C9.07773 1.41469 8.51093 1.60036 8.05546 2.05583C7.59999 2.5113 7.41432 3.0781 7.32991 3.70589C7.24995 4.30067 7.24997 5.04988 7.25 5.94834L7.25 6.00037H8.75C8.75 5.03636 8.7516 4.3888 8.81654 3.90576C8.87858 3.4443 8.9858 3.2468 9.11612 3.11649C9.24644 2.98617 9.44393 2.87895 9.9054 2.8169C10.3884 2.75196 11.036 2.75037 12 2.75037C12.964 2.75037 13.6116 2.75196 14.0946 2.8169C14.5561 2.87895 14.7536 2.98617 14.8839 3.11649C15.0142 3.2468 15.1214 3.4443 15.1835 3.90576C15.2484 4.3888 15.25 5.03636 15.25 6.00037H16.75L16.75 5.94837C16.75 5.04991 16.7501 4.30067 16.6701 3.70589C16.5857 3.0781 16.4 2.5113 15.9445 2.05583C15.4891 1.60036 14.9223 1.41469 14.2945 1.33028C13.6997 1.25032 12.9505 1.25034 12.052 1.25037H11.948Z" fill="currentColor" /><path d="M10 15.0004H6C5.5286 15.0004 5.29289 15.0004 5.14645 15.1468C5 15.2933 5 15.529 5 16.0004V17.0004C5 17.4718 5 17.7075 5.14645 17.8539C5.29289 18.0004 5.5286 18.0004 6 18.0004H10C10.4714 18.0004 10.7071 18.0004 10.8536 17.8539C11 17.7075 11 17.4718 11 17.0004V16.0004C11 15.529 11 15.2933 10.8536 15.1468C10.7071 15.0004 10.4714 15.0004 10 15.0004Z" fill="currentColor" /><path d="M5.25 21.7978C5.68871 21.8762 6.18479 21.9243 6.75 21.9537V18.0004H6C5.62604 18.0004 5.40041 18.0004 5.25 17.9273V21.7978Z" fill="currentColor" /><path d="M5.25 15.0735V6.20298C5.68871 6.12453 6.18479 6.07646 6.75 6.047V15.0004H6C5.62604 15.0004 5.40041 15.0004 5.25 15.0735Z" fill="currentColor" /><path d="M17.25 21.9537C17.8152 21.9243 18.3113 21.8762 18.75 21.7978V6.20298C18.3113 6.12453 17.8152 6.07646 17.25 6.047V21.9537Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.052 1.25037H11.948C11.0495 1.25034 10.3003 1.25032 9.70552 1.33028C9.07773 1.41469 8.51093 1.60036 8.05546 2.05583C7.59999 2.5113 7.41432 3.0781 7.32991 3.70589C7.24995 4.30067 7.24997 5.04988 7.25 5.94835V6.02608C7.07755 6.03173 6.91097 6.03861 6.75 6.047V14.2504L10.0345 14.2504C10.2396 14.2503 10.4614 14.2502 10.6486 14.2754C10.8679 14.3049 11.1481 14.3807 11.3839 14.6165C11.6197 14.8523 11.6955 15.1325 11.725 15.3518C11.7502 15.539 11.7501 15.7608 11.75 15.9659V17.0348C11.7501 17.2399 11.7502 17.4617 11.725 17.649C11.6955 17.8683 11.6197 18.1485 11.3839 18.3843C11.1481 18.6201 10.8679 18.6959 10.6486 18.7254C10.4614 18.7506 10.2396 18.7505 10.0345 18.7504L6.75 18.7504V21.9537C7.64461 22.0004 8.7124 22.0004 10 22.0004H14C15.2876 22.0004 16.3554 22.0004 17.25 21.9537V6.047C17.089 6.03861 16.9225 6.03173 16.75 6.02608V5.94838C16.75 5.04991 16.7501 4.30067 16.6701 3.70589C16.5857 3.0781 16.4 2.5113 15.9445 2.05583C15.4891 1.60036 14.9223 1.41469 14.2945 1.33028C13.6997 1.25032 12.9505 1.25034 12.052 1.25037ZM15.25 6.00225V6.00037C15.25 5.03636 15.2484 4.3888 15.1835 3.90576C15.1214 3.4443 15.0142 3.2468 14.8839 3.11649C14.7536 2.98617 14.5561 2.87895 14.0946 2.81691C13.6116 2.75196 12.964 2.75037 12 2.75037C11.036 2.75037 10.3884 2.75196 9.90539 2.81691C9.44393 2.87895 9.24644 2.98617 9.11612 3.11649C8.9858 3.2468 8.87858 3.4443 8.81654 3.90576C8.7516 4.3888 8.75 5.03636 8.75 6.00037V6.00225C9.14203 6.00037 9.55807 6.00037 10 6.00037H14C14.4419 6.00037 14.858 6.00037 15.25 6.00225Z" fill="currentColor" /><path d="M20.8284 20.8288C20.3096 21.3476 19.6507 21.6367 18.75 21.7978V6.20298C19.6507 6.36403 20.3096 6.65309 20.8284 7.17194C22 8.34351 22 10.2291 22 14.0004C22 17.7716 22 19.6572 20.8284 20.8288Z" fill="currentColor" /><path d="M3.17157 7.17194C3.69042 6.65309 4.34931 6.36403 5.25 6.20298V14.292C5.04984 14.3309 4.8169 14.4157 4.61613 14.6165C4.38033 14.8523 4.3045 15.1325 4.27501 15.3518C4.24984 15.539 4.24993 15.7608 4.25001 15.9659V17.0348C4.24993 17.2399 4.24984 17.4617 4.27501 17.649C4.3045 17.8683 4.38033 18.1485 4.61613 18.3843C4.8169 18.585 5.04984 18.6698 5.25 18.7088V21.7978C4.34931 21.6367 3.69042 21.3476 3.17157 20.8288C2 19.6572 2 17.7716 2 14.0004C2 10.2291 2 8.34351 3.17157 7.17194Z" fill="currentColor" /><path d="M5.75117 15.7515C5.75005 15.821 5.75002 15.9013 5.75002 16.0004V17.0004C5.75002 17.0995 5.75005 17.1798 5.75117 17.2492C5.82063 17.2504 5.90094 17.2504 6.00002 17.2504H10C10.0991 17.2504 10.1794 17.2504 10.2489 17.2492C10.25 17.1798 10.25 17.0995 10.25 17.0004V16.0004C10.25 15.9013 10.25 15.821 10.2489 15.7515C10.1794 15.7504 10.0991 15.7504 10 15.7504H6.00002C5.90094 15.7504 5.82063 15.7504 5.75117 15.7515Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSuitcaseTag as IconComponentType).keywords = [
  "suitcase",
  "tag",
  "bag",
  "grip",
  "traveling bag",
  "valise",
  "luggage",
  "pack",
  "backpack",
  "briefcase",
  "baggage",
  "label",
  "mark",
  "trail",
  "chase",
  "go after",
  "tag end",
  "dog",
  "shred",
  "chase after"
];

export default IconSuitcaseTag as IconComponentType;