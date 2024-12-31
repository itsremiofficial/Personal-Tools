import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconArrow2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M17.2812 10.4498L21.0012 6.72974L17.2812 3.00977" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 6.72949H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M6.71997 13.5498L3 17.2698L6.71997 20.9898" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21 17.27H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.75 6.7302C21.75 6.5302 21.67 6.34023 21.53 6.20023L17.81 2.4802C17.52 2.1902 17.04 2.1902 16.75 2.4802C16.46 2.7702 16.46 3.25019 16.75 3.54019L19.2 5.99021H3C2.59 5.99021 2.25 6.33021 2.25 6.74021C2.25 7.15021 2.59 7.49021 3 7.49021H19.19L16.75 9.93021C16.46 10.2202 16.46 10.7002 16.75 10.9902C16.9 11.1402 17.09 11.2102 17.28 11.2102C17.47 11.2102 17.66 11.1402 17.81 10.9902L21.52 7.28024C21.59 7.21024 21.65 7.12023 21.69 7.02023C21.69 7.01023 21.69 7.00021 21.7 6.99021C21.73 6.90021 21.75 6.8202 21.75 6.7302Z" fill="currentColor" /><path d="M21 16.5202H4.81L7.25 14.0802C7.54 13.7902 7.54 13.3102 7.25 13.0202C6.96 12.7302 6.48 12.7302 6.19 13.0202L2.47998 16.7302C2.40998 16.8002 2.35 16.8902 2.31 16.9902C2.31 17.0002 2.30999 17.0102 2.29999 17.0202C2.26999 17.1002 2.25 17.1902 2.25 17.2802C2.25 17.4802 2.32997 17.6702 2.46997 17.8102L6.19 21.5302C6.34 21.6802 6.52997 21.7502 6.71997 21.7502C6.90997 21.7502 7.1 21.6802 7.25 21.5302C7.54 21.2402 7.54 20.7602 7.25 20.4702L4.79999 18.0202H21C21.41 18.0202 21.75 17.6802 21.75 17.2702C21.75 16.8602 21.41 16.5202 21 16.5202Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArrow2 as IconComponentType).keywords = [
  "arrow",
  "2",
  "pointer",
  "archer",
  "archery",
  "dart",
  "arrowhead",
  "bolt",
  "spike",
  "rope",
  "roof",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out"
];

export default IconArrow2 as IconComponentType;