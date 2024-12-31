import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconTaskSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.3691 8.87988H17.6191" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.38086 8.87988L7.13086 9.62988L9.38086 7.37988" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.3691 15.8799H17.6191" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.38086 15.8799L7.13086 16.6299L9.38086 14.3799" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="20" height="21" viewBox="0 0 20 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M14.19 0.970215H5.81C2.17 0.970215 0 3.14022 0 6.78022V15.1602C0 18.8002 2.17 20.9702 5.81 20.9702H14.19C17.83 20.9702 20 18.8002 20 15.1602V6.78022C20 3.14022 17.83 0.970215 14.19 0.970215Z" fill="currentColor" /><path d="M16.3105 7.84033C16.3105 8.25033 15.9805 8.59033 15.5605 8.59033H10.3105C9.90055 8.59033 9.56055 8.25033 9.56055 7.84033C9.56055 7.43033 9.90055 7.09033 10.3105 7.09033H15.5605C15.9805 7.09033 16.3105 7.43033 16.3105 7.84033Z" fill="currentColor" /><path d="M7.97055 6.87027L5.72055 9.12027C5.57055 9.27027 5.38055 9.34027 5.19055 9.34027C5.00055 9.34027 4.80055 9.27027 4.66055 9.12027L3.91055 8.37027C3.61055 8.08027 3.61055 7.60027 3.91055 7.31027C4.20055 7.02027 4.67055 7.02027 4.97055 7.31027L5.19055 7.53027L6.91055 5.81027C7.20055 5.52027 7.67055 5.52027 7.97055 5.81027C8.26055 6.10027 8.26055 6.58027 7.97055 6.87027Z" fill="currentColor" /><path d="M16.3105 14.8403C16.3105 15.2503 15.9805 15.5903 15.5605 15.5903H10.3105C9.90055 15.5903 9.56055 15.2503 9.56055 14.8403C9.56055 14.4303 9.90055 14.0903 10.3105 14.0903H15.5605C15.9805 14.0903 16.3105 14.4303 16.3105 14.8403Z" fill="currentColor" /><path d="M7.97055 13.8703L5.72055 16.1203C5.57055 16.2703 5.38055 16.3403 5.19055 16.3403C5.00055 16.3403 4.80055 16.2703 4.66055 16.1203L3.91055 15.3703C3.61055 15.0803 3.61055 14.6003 3.91055 14.3103C4.20055 14.0203 4.67055 14.0203 4.97055 14.3103L5.19055 14.5303L6.91055 12.8103C7.20055 12.5203 7.67055 12.5203 7.97055 12.8103C8.26055 13.1003 8.26055 13.5803 7.97055 13.8703Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTaskSquare as IconComponentType).keywords = [
  "task",
  "square",
  "job",
  "chore",
  "project",
  "labor",
  "tax",
  "undertaking",
  "work",
  "assignment",
  "mission",
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

export default IconTaskSquare as IconComponentType;