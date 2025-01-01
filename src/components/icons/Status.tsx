import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconStatus: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M2.44922 14.9702C3.51922 18.4102 6.39923 21.0602 9.97923 21.7902" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M2.05078 10.98C2.56078 5.93 6.82078 2 12.0008 2C17.1808 2 21.4408 5.94 21.9508 10.98" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.0098 21.8C17.5798 21.07 20.4498 18.45 21.5398 15.02" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M10.2408 14.74C9.91084 14.41 9.47084 14.22 9.00084 14.22H3.92084C3.31084 14.22 2.75084 14.53 2.43084 15.05C2.11084 15.56 2.08084 16.17 2.34084 16.71C3.57084 19.23 5.79084 21.21 8.43084 22.14C8.61084 22.2 8.81084 22.24 9.00084 22.24C9.35084 22.24 9.70084 22.13 10.0008 21.92C10.4708 21.59 10.7508 21.05 10.7508 20.48L10.7608 15.98C10.7508 15.51 10.5708 15.07 10.2408 14.74Z" fill="currentColor" /><path d="M22.4799 9.6C21.3599 4.68 17.0499 1.25 11.9999 1.25C6.94993 1.25 2.63993 4.68 1.51993 9.6C1.39993 10.12 1.51993 10.65 1.85993 11.07C2.19993 11.49 2.69993 11.73 3.23993 11.73H20.7699C21.3099 11.73 21.8099 11.49 22.1499 11.07C22.4799 10.65 22.5999 10.11 22.4799 9.6Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.56 15.1C21.24 14.58 20.68 14.26 20.06 14.26L15 14.25C14.53 14.25 14.09 14.43 13.76 14.76C13.43 15.09 13.25 15.53 13.25 16L13.26 20.48C13.26 21.05 13.54 21.59 14.01 21.92C14.31 22.13 14.66 22.24 15.01 22.24C15.2 22.24 15.39 22.21 15.57 22.14C18.19 21.22 20.41 19.25 21.64 16.76C21.9 16.23 21.87 15.61 21.56 15.1Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconStatus as IconComponentType).keywords = [
  "status",
  "position",
  "condition",
  "belonging",
  "shape",
  "ranking",
  "rating",
  "establish",
  "availability",
  "item"
];

export default IconStatus as IconComponentType;