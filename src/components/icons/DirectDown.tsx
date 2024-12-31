import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconDirectDown: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.16931 19.2901L3.06931 7.70015C1.61931 4.95015 4.54931 1.96015 7.32931 3.35015L10.5693 4.97015C11.4693 5.42015 12.5293 5.42015 13.4293 4.97015L16.6693 3.35015C19.4493 1.96015 22.3693 4.95015 20.9293 7.70015L14.8293 19.2901C13.6293 21.5701 10.3693 21.5701 9.16931 19.2901Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.0192 2.7202L13.5392 4.4602C12.5692 4.9402 11.4392 4.9402 10.4692 4.4602L6.97924 2.7102C3.99924 1.2202 0.849241 4.4402 2.40924 7.3902L3.22924 8.9302C3.33924 9.1402 3.51924 9.3102 3.73924 9.4102L16.3892 15.1002C16.9092 15.3302 17.5192 15.1202 17.7792 14.6202L21.5892 7.3802C23.1392 4.4402 19.9992 1.2202 17.0192 2.7202Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.6004 16.3102L7.32045 12.5802C6.39045 12.1602 5.45045 13.1602 5.93045 14.0602L8.97045 19.8302C10.2604 22.2802 13.7604 22.2802 15.0504 19.8302L16.1204 17.7902C16.4004 17.2402 16.1604 16.5702 15.6004 16.3102Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDirectDown as IconComponentType).keywords = [
  "direct",
  "down",
  "straightforward",
  "directly",
  "forthright",
  "plainspoken",
  "man-to-man",
  "straight",
  "frank",
  "free-spoken",
  "outspoken",
  "downwards",
  "downward",
  "downbound",
  "falling",
  "fallen",
  "pull down",
  "downwardly",
  "declining",
  "descending"
];

export default IconDirectDown as IconComponentType;