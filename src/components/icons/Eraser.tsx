import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconEraser: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.98945 15.0798L8.92944 17.0198C9.56944 17.6598 10.6295 17.6598 11.2695 17.0198L17.0195 11.2698C17.6595 10.6298 17.6595 9.56975 17.0195 8.92975L15.0794 6.98977C14.4394 6.34977 13.3795 6.34977 12.7395 6.98977L6.98945 12.7398C6.33945 13.3798 6.33945 14.4298 6.98945 15.0798Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.30859 10.4199L13.5786 14.6899" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.0303 22H13.9902C13.5702 22 13.2402 21.66 13.2402 21.25C13.2402 20.84 13.5802 20.5 13.9902 20.5H21.0303C21.4503 20.5 21.7803 20.84 21.7803 21.25C21.7803 21.66 21.4503 22 21.0303 22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.41 16.3401L10.66 21.0901C9.54997 22.2001 7.77002 22.2601 6.59002 21.2701C6.52002 21.2101 6.46002 21.1501 6.40002 21.0901L5.53003 20.2201L3.73999 18.4301L2.88 17.5701C2.81 17.5001 2.75 17.4301 2.69 17.3601C1.71 16.1801 1.78 14.4201 2.88 13.3201L6.57 9.64008L7.63 8.58008L15.41 16.3401Z" fill="currentColor" /><path d="M21.1208 10.6399L15.4108 16.3399L7.63086 8.57994L13.3409 2.87994C14.5109 1.70994 16.4308 1.70994 17.6008 2.87994L21.1208 6.38994C22.2908 7.55994 22.2908 9.46994 21.1208 10.6399Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconEraser as IconComponentType).keywords = [
  "eraser",
  "clearance",
  "cleanup",
  "cleaning",
  "clean-up",
  "rough",
  "scratch",
  "cleansing",
  "cleanliness",
  "draft"
];

export default IconEraser as IconComponentType;