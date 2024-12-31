import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconPathSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M16.7502 9.11998L14.9002 7.26998C14.2002 6.56998 13.2402 6.60998 12.7702 7.34998L11.7402 8.97998L15.0302 12.27L16.6602 11.24C17.3702 10.8 17.4102 9.76998 16.7502 9.11998Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.7395 8.98017L9.34947 8.84017C8.00947 8.76017 7.54947 9.17017 7.39947 10.4402L6.79947 15.5102C6.66947 16.5802 7.43947 17.3402 8.50947 17.2202L13.5795 16.6202C14.8495 16.4702 15.3095 16.0102 15.1795 14.6702L15.0395 12.2802" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.49023 16.5199L9.34023 14.6699" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M16.6602 11.25L15.0402 12.27L11.7402 8.97998L12.7702 7.34998C13.2402 6.60998 14.2002 6.56998 14.9002 7.26998L16.7502 9.11998C17.4102 9.76998 17.3702 10.8 16.6602 11.25Z" fill="currentColor" /><path opacity={duotone ? "0.6" : "1"} d="M13.5796 16.6202L8.50958 17.2202C8.28958 17.2502 8.08958 17.2402 7.89958 17.1802C7.34958 17.0602 6.95958 16.6702 6.83958 16.1202C6.77958 15.9302 6.76958 15.7302 6.79958 15.5102L7.38958 10.4402C7.54958 9.17017 8.00958 8.76017 9.34958 8.84017L11.7396 8.98017L15.0396 12.2702L15.1796 14.6702C15.3096 16.0102 14.8496 16.4702 13.5796 16.6202Z" fill="currentColor" /><path d="M9.87984 15.1999L7.89984 17.1799C7.34984 17.0599 6.95984 16.6699 6.83984 16.1199L8.80984 14.1399C9.10984 13.8499 9.57984 13.8499 9.87984 14.1399C10.1698 14.4299 10.1698 14.9099 9.87984 15.1999Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPathSquare as IconComponentType).keywords = [
  "path",
  "square",
  "way",
  "route",
  "track",
  "way of life",
  "course",
  "pathway",
  "footway",
  "footpath",
  "trailhead",
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

export default IconPathSquare as IconComponentType;