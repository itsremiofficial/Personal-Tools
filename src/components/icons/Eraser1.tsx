import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconEraser1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M2.9107 17.5802L6.42071 21.0902C7.59071 22.2602 9.5007 22.2602 10.6607 21.0902L21.0908 10.6602C22.2608 9.49021 22.2608 7.58021 21.0908 6.42021L17.5807 2.91021C16.4107 1.74021 14.5008 1.74021 13.3408 2.91021L2.9107 13.3402C1.7407 14.5002 1.7407 16.4102 2.9107 17.5802Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M7.11914 9.12988L14.8691 16.8799" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M3.51953 17.66L9.16949 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.33984 20.4901L11.9998 14.8301" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1898 2H7.81978C4.17978 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17978 21.99 7.81978 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="currentColor" /><path d="M13.5794 14.6899L11.2594 17.0099C10.6194 17.6599 9.56945 17.6599 8.91945 17.0099L6.98945 15.0799C6.33945 14.4299 6.33945 13.3799 6.98945 12.7399L9.30945 10.4199L13.5794 14.6899Z" fill="currentColor" /><path opacity={duotone ? "0.6" : "1"} d="M17.0105 11.2599L13.5806 14.6899L9.31055 10.4199L12.7406 6.98994C13.3806 6.33994 14.4306 6.33994 15.0806 6.98994L17.0105 8.91994C17.6605 9.56994 17.6605 10.6199 17.0105 11.2599Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconEraser1 as IconComponentType).keywords = [
  "eraser",
  "1",
  "clearance",
  "cleanup",
  "cleaning",
  "clean-up",
  "rough",
  "scratch",
  "cleansing",
  "cleanliness",
  "draft",
  "wash out",
  "cut up",
  "pull out",
  "pull in",
  "pull up",
  "pull over",
  "work out",
  "ride down",
  "rush hour"
];

export default IconEraser1 as IconComponentType;