import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconDirectUp: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.16931 4.71L3.06931 16.3C1.61931 19.05 4.54931 22.04 7.32931 20.65L10.5693 19.03C11.4693 18.58 12.5293 18.58 13.4293 19.03L16.6693 20.65C19.4493 22.04 22.3693 19.05 20.9293 16.3L14.8293 4.71C13.6293 2.43 10.3693 2.43 9.16931 4.71Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.0192 21.2902L13.5392 19.5502C12.5692 19.0702 11.4392 19.0702 10.4692 19.5502L6.98918 21.2902C3.99918 22.7802 0.84918 19.5702 2.40918 16.6202L3.22918 15.0802C3.33918 14.8702 3.51918 14.7002 3.73918 14.6002L16.3792 8.90017C16.8992 8.67017 17.5092 8.88017 17.7692 9.38017L21.5792 16.6202C23.1392 19.5702 19.9992 22.7802 17.0192 21.2902Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.6004 7.69002L7.32045 11.42C6.39045 11.84 5.45045 10.84 5.93045 9.94002L8.97045 4.17002C10.2604 1.72002 13.7604 1.72002 15.0504 4.17002L16.1204 6.21002C16.4004 6.76002 16.1604 7.44002 15.6004 7.69002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDirectUp as IconComponentType).keywords = [
  "direct",
  "up",
  "straightforward",
  "directly",
  "forthright",
  "plainspoken",
  "man-to-man",
  "straight",
  "frank",
  "free-spoken",
  "outspoken",
  "upbound",
  "upwardly",
  "ascending",
  "upward",
  "upwards",
  "rising",
  "astir",
  "ahead",
  "awake"
];

export default IconDirectUp as IconComponentType;