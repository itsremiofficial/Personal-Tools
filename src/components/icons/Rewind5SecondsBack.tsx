import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconRewind5SecondsBack: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M14 4.5L12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 7.89936 4.46819 4.3752 8 2.83209" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M14 8.5H11.3604C11.1452 8.5 10.9541 8.63772 10.886 8.84189L10.2194 10.8419C10.1114 11.1657 10.3524 11.5 10.6937 11.5H12C13.1046 11.5 14 12.3954 14 13.5C14 14.6046 13.1046 15.5 12 15.5H10" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1745 8.60472C10.3447 8.09429 10.8223 7.75 11.3604 7.75H14C14.4142 7.75 14.75 8.08579 14.75 8.5C14.75 8.91421 14.4142 9.25 14 9.25H11.5406L11.0406 10.75H12C13.5188 10.75 14.75 11.9812 14.75 13.5C14.75 15.0188 13.5188 16.25 12 16.25H10C9.58579 16.25 9.25 15.9142 9.25 15.5C9.25 15.0858 9.58579 14.75 10 14.75H12C12.6904 14.75 13.25 14.1904 13.25 13.5C13.25 12.8096 12.6904 12.25 12 12.25H10.6937C9.84052 12.25 9.23805 11.4141 9.50786 10.6047L10.1745 8.60472Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} fillRule="evenodd" clipRule="evenodd" d="M11.324 1.67511C11.4489 1.41526 11.7117 1.25 12 1.25C12.7353 1.25 13.4541 1.32394 14.1492 1.46503C19.0563 2.46112 22.75 6.79837 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 7.59065 3.90459 3.80298 7.69972 2.14482C8.07929 1.97898 8.52143 2.15224 8.68726 2.53181C8.8531 2.91137 8.67984 3.35351 8.30028 3.51935C5.03179 4.94742 2.75 8.20808 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 7.84953 18.5158 4.33622 14.75 3.16544V4.5C14.75 4.81852 14.5488 5.10229 14.2483 5.20772C13.9477 5.31315 13.6133 5.21724 13.4143 4.96852L11.4143 2.46852C11.2342 2.24339 11.1991 1.93496 11.324 1.67511Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10.1745 8.60472C10.3447 8.09429 10.8223 7.75 11.3604 7.75H14C14.4142 7.75 14.75 8.08579 14.75 8.5C14.75 8.91421 14.4142 9.25 14 9.25H11.5406L11.0406 10.75H12C13.5188 10.75 14.75 11.9812 14.75 13.5C14.75 15.0188 13.5188 16.25 12 16.25H10C9.58579 16.25 9.25 15.9142 9.25 15.5C9.25 15.0858 9.58579 14.75 10 14.75H12C12.6904 14.75 13.25 14.1904 13.25 13.5C13.25 12.8096 12.6904 12.25 12 12.25H10.6937C9.84052 12.25 9.23805 11.4141 9.50786 10.6047L10.1745 8.60472Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M11.324 1.67511C11.4489 1.41526 11.7117 1.25 12 1.25C12.7353 1.25 13.4541 1.32394 14.1492 1.46503C19.0563 2.46112 22.75 6.79837 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 7.59065 3.90459 3.80298 7.69972 2.14482C8.07929 1.97898 8.52143 2.15224 8.68726 2.53181C8.8531 2.91137 8.67984 3.35351 8.30028 3.51935C5.03179 4.94742 2.75 8.20808 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 7.84953 18.5158 4.33622 14.75 3.16544V4.5C14.75 4.81852 14.5488 5.10229 14.2483 5.20772C13.9477 5.31315 13.6133 5.21724 13.4143 4.96852L11.4143 2.46852C11.2342 2.24339 11.1991 1.93496 11.324 1.67511Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRewind5SecondsBack as IconComponentType).keywords = [
  "rewind",
  "5",
  "seconds",
  "back",
  "rollback",
  "regress",
  "backtrack",
  "retrogressive",
  "backward",
  "rewrite",
  "reverse",
  "retract",
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
  "forward",
  "rearward",
  "rearwards",
  "backwards",
  "back up",
  "backmost",
  "rearmost",
  "hindermost",
  "support"
];

export default IconRewind5SecondsBack as IconComponentType;