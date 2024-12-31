import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconFilterTick: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6309 14.75C21.6309 15.64 21.3909 16.48 20.9509 17.2C20.1309 18.57 18.6209 19.5 16.8809 19.5C15.9409 19.5 15.0609 19.22 14.3209 18.73C13.7009 18.35 13.1909 17.82 12.8209 17.2C12.3809 16.48 12.1309 15.64 12.1309 14.75C12.1309 12.13 14.2609 10 16.8809 10C17.2409 10 17.5908 10.04 17.9208 10.12C20.0508 10.59 21.6309 12.49 21.6309 14.75Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.0293 14.7501L16.1993 15.9201L18.7292 13.5801" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M20.6906 4.01999V6.23999C20.6906 7.04999 20.1805 8.06001 19.6805 8.57001L17.9205 10.12C17.5905 10.04 17.2406 10 16.8806 10C14.2606 10 12.1306 12.13 12.1306 14.75C12.1306 15.64 12.3806 16.48 12.8206 17.2C13.1906 17.82 13.7006 18.35 14.3206 18.73V19.07C14.3206 19.68 13.9205 20.49 13.4105 20.79L12.0005 21.7C10.6905 22.51 8.87054 21.6 8.87054 19.98V14.63C8.87054 13.92 8.46055 13.01 8.06055 12.51L4.22052 8.47C3.72052 7.96 3.31055 7.05001 3.31055 6.45001V4.12C3.31055 2.91 4.22057 2 5.33057 2H18.6705C19.7805 2 20.6906 2.90999 20.6906 4.01999Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.9208 10.12C17.5908 10.04 17.2409 10 16.8809 10C14.2609 10 12.1309 12.13 12.1309 14.75C12.1309 15.64 12.3809 16.48 12.8209 17.2C13.1909 17.82 13.7009 18.35 14.3209 18.73C15.0609 19.22 15.9409 19.5 16.8809 19.5C18.6209 19.5 20.1309 18.57 20.9509 17.2C21.3909 16.48 21.6309 15.64 21.6309 14.75C21.6309 12.49 20.0508 10.59 17.9208 10.12ZM19.2509 14.13L16.7109 16.47C16.5709 16.6 16.3809 16.67 16.2009 16.67C16.0109 16.67 15.8208 16.6 15.6708 16.45L14.5009 15.28C14.2109 14.99 14.2109 14.51 14.5009 14.22C14.7909 13.93 15.2709 13.93 15.5609 14.22L16.2208 14.88L18.2308 13.03C18.5408 12.75 19.0108 12.77 19.2908 13.07C19.5708 13.38 19.5509 13.85 19.2509 14.13Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M5.41016 2H18.5802C19.6802 2 20.5802 2.90999 20.5802 4.01999V6.23999C20.5802 7.04999 20.0802 8.06 19.5802 8.56L15.2902 12.4C14.6902 12.91 14.2902 13.92 14.2902 14.72V19.06C14.2902 19.67 13.8902 20.47 13.3902 20.78L11.9902 21.69C10.6902 22.5 8.90021 21.59 8.90021 19.97V14.62C8.90021 13.91 8.50016 13 8.10016 12.5L4.31018 8.45999C3.81018 7.94999 3.41016 7.05 3.41016 6.44V4.12C3.42016 2.91 4.32016 2 5.41016 2Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFilterTick as IconComponentType).keywords = [
  "filter",
  "tick",
  "filtrate",
  "filter out",
  "percolate",
  "permeate",
  "trickle",
  "sink in",
  "strain",
  "dribble",
  "separate out",
  "click",
  "ticktock",
  "beat",
  "ticktack",
  "retick",
  "ixodid",
  "acarid",
  "spinose",
  "gene"
];

export default IconFilterTick as IconComponentType;