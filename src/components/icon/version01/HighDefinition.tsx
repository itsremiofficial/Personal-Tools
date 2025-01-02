import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconHighDefinition: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="currentColor" strokeWidth={width} /><path d="M6.25 8C6.25 7.58579 5.91421 7.25 5.5 7.25C5.08579 7.25 4.75 7.58579 4.75 8H6.25ZM4.75 16C4.75 16.4142 5.08579 16.75 5.5 16.75C5.91421 16.75 6.25 16.4142 6.25 16H4.75ZM11.0648 8C11.0648 7.58579 10.729 7.25 10.3148 7.25C9.9006 7.25 9.56482 7.58579 9.56482 8H11.0648ZM9.56482 16C9.56482 16.4142 9.9006 16.75 10.3148 16.75C10.729 16.75 11.0648 16.4142 11.0648 16H9.56482ZM13.4722 15.2V8.8H11.9722V15.2H13.4722ZM13.6852 15.25C13.585 15.25 13.5161 15.2159 13.4835 15.1888C13.4526 15.1631 13.4722 15.1637 13.4722 15.2H11.9722C11.9722 16.1802 12.8753 16.75 13.6852 16.75V15.25ZM13.6852 16.75C16.6224 16.75 19.25 14.7475 19.25 12H17.75C17.75 13.6708 16.0663 15.25 13.6852 15.25V16.75ZM13.6852 8.75C16.0663 8.75 17.75 10.3292 17.75 12H19.25C19.25 9.25248 16.6224 7.25 13.6852 7.25V8.75ZM13.6852 7.25C12.8753 7.25 11.9722 7.81979 11.9722 8.8H13.4722C13.4722 8.83634 13.4526 8.83694 13.4835 8.81121C13.5161 8.78415 13.585 8.75 13.6852 8.75V7.25ZM4.75 8V12H6.25V8H4.75ZM4.75 12V16H6.25V12H4.75ZM9.56482 8V12H11.0648V8H9.56482ZM9.56482 12V16H11.0648V12H9.56482ZM5.5 12.75H10.3148V11.25H5.5V12.75Z" fill="currentColor" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22Z" fill="currentColor" /><path d="M5.5 7.25C5.91421 7.25 6.25 7.58579 6.25 8V11.25H9.56482V8C9.56482 7.58579 9.9006 7.25 10.3148 7.25C10.729 7.25 11.0648 7.58579 11.0648 8V16C11.0648 16.4142 10.729 16.75 10.3148 16.75C9.9006 16.75 9.56482 16.4142 9.56482 16V12.75H6.25V16C6.25 16.4142 5.91421 16.75 5.5 16.75C5.08579 16.75 4.75 16.4142 4.75 16V8C4.75 7.58579 5.08579 7.25 5.5 7.25Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M13.6852 7.25C12.8753 7.25 11.9722 7.81979 11.9722 8.8V15.2C11.9722 16.1802 12.8753 16.75 13.6852 16.75C16.6224 16.75 19.25 14.7475 19.25 12C19.25 9.25248 16.6224 7.25 13.6852 7.25ZM13.4835 8.81121C13.4785 8.81535 13.4749 8.8188 13.4722 8.82154V15.1785C13.4749 15.1812 13.4785 15.1847 13.4835 15.1888C13.5161 15.2159 13.585 15.25 13.6852 15.25C16.0663 15.25 17.75 13.6708 17.75 12C17.75 10.3292 16.0663 8.75 13.6852 8.75C13.585 8.75 13.5161 8.78415 13.4835 8.81121Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12ZM6.25 8C6.25 7.58579 5.91421 7.25 5.5 7.25C5.08579 7.25 4.75 7.58579 4.75 8V16C4.75 16.4142 5.08579 16.75 5.5 16.75C5.91421 16.75 6.25 16.4142 6.25 16V12.75H9.56482V16C9.56482 16.4142 9.9006 16.75 10.3148 16.75C10.729 16.75 11.0648 16.4142 11.0648 16V8C11.0648 7.58579 10.729 7.25 10.3148 7.25C9.9006 7.25 9.56482 7.58579 9.56482 8V11.25H6.25V8ZM11.9722 8.8C11.9722 7.81979 12.8753 7.25 13.6852 7.25C16.6224 7.25 19.25 9.25248 19.25 12C19.25 14.7475 16.6224 16.75 13.6852 16.75C12.8753 16.75 11.9722 16.1802 11.9722 15.2V8.8ZM13.4722 8.82154C13.4749 8.81881 13.4785 8.81535 13.4835 8.81121C13.5161 8.78415 13.585 8.75 13.6852 8.75C16.0663 8.75 17.75 10.3292 17.75 12C17.75 13.6708 16.0663 15.25 13.6852 15.25C13.585 15.25 13.5161 15.2159 13.4835 15.1888C13.4785 15.1847 13.4749 15.1812 13.4722 15.1785V8.82154Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHighDefinition as IconComponentType).keywords = [
  "high",
  "definition",
  "towering",
  "high-level",
  "altitudinous",
  "upper",
  "lofty",
  "full",
  "rising",
  "overflowing",
  "peak",
  "meaning",
  "wording",
  "interpretation",
  "expression",
  "formulation",
  "concept",
  "characterization",
  "designation",
  "identification"
];

export default IconHighDefinition as IconComponentType;