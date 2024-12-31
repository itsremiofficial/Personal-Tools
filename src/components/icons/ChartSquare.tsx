import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconChartSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1103 11.1504H7.4603C6.8303 11.1504 6.32031 11.6603 6.32031 12.2903V17.4103H10.1103V11.1504V11.1504Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.7616 6.6001H11.2415C10.6115 6.6001 10.1016 7.11011 10.1016 7.74011V17.4001H13.8916V7.74011C13.8916 7.11011 13.3916 6.6001 12.7616 6.6001Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.5504 12.8501H13.9004V17.4001H17.6904V13.9901C17.6804 13.3601 17.1704 12.8501 16.5504 12.8501Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="currentColor" /><path d="M10.1103 11.1504H7.4603C6.8303 11.1504 6.32031 11.6603 6.32031 12.2903V17.4103H10.1103V11.1504Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M12.7596 6.6001H11.2396C10.6096 6.6001 10.0996 7.11011 10.0996 7.74011V17.4001H13.8896V7.74011C13.8896 7.11011 13.3896 6.6001 12.7596 6.6001Z" fill="currentColor" /><path d="M16.5504 12.8501H13.9004V17.4001H17.6904V13.9901C17.6804 13.3601 17.1704 12.8501 16.5504 12.8501Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconChartSquare as IconComponentType).keywords = [
  "chart",
  "square",
  "map",
  "cartography",
  "mapping",
  "cartographic",
  "plan",
  "diagram",
  "graphical",
  "diagrammatic",
  "blueprint",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest"
];

export default IconChartSquare as IconComponentType;