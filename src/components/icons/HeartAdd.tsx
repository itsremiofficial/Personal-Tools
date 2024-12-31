import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconHeartAdd: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2004 21.9999C19.8513 21.9999 22.0004 19.8509 22.0004 17.1999C22.0004 14.5489 19.8513 12.3999 17.2004 12.3999C14.5494 12.3999 12.4004 14.5489 12.4004 17.1999C12.4004 19.8509 14.5494 21.9999 17.2004 21.9999Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.9902 17.2598H15.4102" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.1992 15.5098V19.0997" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22 8.69012C22 10.6601 21.49 12.4001 20.69 13.9101C19.81 12.9801 18.57 12.4001 17.2 12.4001C14.55 12.4001 12.4 14.5501 12.4 17.2001C12.4 18.4301 12.87 19.5501 13.63 20.4001C13.26 20.5701 12.92 20.7101 12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.69012C2 5.60012 4.49 3.1001 7.56 3.1001C9.37 3.1001 10.99 3.98014 12 5.33014C13.01 3.98014 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.60012 22 8.69012Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.6804 13.9099V13.8999C19.8004 12.9699 18.5704 12.3999 17.2004 12.3999C14.5504 12.3999 12.4004 14.5499 12.4004 17.1999C12.4004 18.4299 12.8704 19.5499 13.6304 20.3999C14.5104 21.3799 15.7804 21.9999 17.2004 21.9999C19.8504 21.9999 22.0004 19.8499 22.0004 17.1999C22.0004 15.9299 21.5004 14.7699 20.6804 13.9099ZM18.9904 18.0099H17.9504V19.0999C17.9504 19.5099 17.6104 19.8499 17.2004 19.8499C16.7904 19.8499 16.4504 19.5099 16.4504 19.0999V18.0099H15.4103C14.9903 18.0099 14.6603 17.6799 14.6603 17.2599C14.6603 16.8499 14.9804 16.5199 15.4004 16.5099H16.4504V15.5099C16.4504 15.4899 16.4504 15.4699 16.4604 15.4499C16.4804 15.0699 16.8104 14.7599 17.2004 14.7599C17.6004 14.7599 17.9304 15.0799 17.9504 15.4799V16.5099H18.9904C19.4104 16.5099 19.7404 16.8499 19.7404 17.2599C19.7404 17.6799 19.4104 18.0099 18.9904 18.0099Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22 8.69009C22 9.88009 21.81 10.9801 21.48 12.0001C21.27 12.6701 21 13.3101 20.68 13.9001C19.8 12.9701 18.57 12.4001 17.2 12.4001C14.55 12.4001 12.4 14.5501 12.4 17.2001C12.4 18.4301 12.87 19.5501 13.63 20.4001C13.26 20.5701 12.92 20.7101 12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.97001 19.9901 4.10002 17.0001 2.52002 12.0001C2.19002 10.9801 2 9.88009 2 8.69009C2 5.60009 4.49 3.1001 7.56 3.1001C9.37 3.1001 10.99 3.98008 12 5.33008C13.01 3.98008 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.60009 22 8.69009Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHeartAdd as IconComponentType).keywords = [
  "heart",
  "add",
  "nerve",
  "marrow",
  "eye",
  "nub",
  "pith",
  "bosom",
  "spunk",
  "core",
  "meat",
  "total",
  "sum up",
  "tot up",
  "add up",
  "sum",
  "summate",
  "impart",
  "contribute",
  "supply"
];

export default IconHeartAdd as IconComponentType;