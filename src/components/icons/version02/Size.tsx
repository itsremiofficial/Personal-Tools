import { FC } from 'react';

const IconSize: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6396 12.25V16.75C17.6396 20.5 16.1396 22 12.3896 22H7.88965C4.13965 22 2.63965 20.5 2.63965 16.75V12.25C2.63965 8.5 4.13965 7 7.88965 7H12.3896C16.1396 7 17.6396 8.5 17.6396 12.25Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22.6396 5.85V9.15C22.6396 11.9 21.5396 13 18.7896 13H17.6396V12.25C17.6396 8.5 16.1396 7 12.3896 7H11.6396V5.85C11.6396 3.1 12.7396 2 15.4896 2H18.7896C21.5396 2 22.6396 3.1 22.6396 5.85Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6396 5.5V9.5C22.6396 11.43 21.0696 13 19.1396 13H17.6396V12.25C17.6396 9.35 15.2896 7 12.3896 7H11.6396V5.5C11.6396 3.57 13.2096 2 15.1396 2H19.1396C21.0796 2 22.6396 3.57 22.6396 5.5Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M12.3896 7H11.6396H7.63965C4.87965 7 2.63965 9.24 2.63965 12V17C2.63965 19.76 4.87965 22 7.63965 22H12.6396C15.3996 22 17.6396 19.76 17.6396 17V13V12.25C17.6396 9.35 15.2896 7 12.3896 7Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6396 5.5V9.5C22.6396 11.2615 21.3401 12.7232 19.6382 12.9649C19.3648 13.0038 19.1396 12.7761 19.1396 12.5V12.25C19.1396 8.53 16.1196 5.5 12.3896 5.5H12.1396C11.8635 5.5 11.6359 5.27486 11.675 5.0015C11.9177 3.30678 13.3789 2 15.1396 2H19.1396C21.0796 2 22.6396 3.57 22.6396 5.5Z" fill="currentColor" /><path d="M12.3896 7H11.6396H7.63965C4.87965 7 2.63965 9.24 2.63965 12V17C2.63965 19.76 4.87965 22 7.63965 22H12.6396C15.3996 22 17.6396 19.76 17.6396 17V13V12.25C17.6396 9.35 15.2896 7 12.3896 7Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSize as IconComponent).keywords = [
  "size",
  "size of it",
  "endowment",
  "staffing",
  "turnover",
  "membership",
  "headcount",
  "workforce",
  "manpower",
  "gage"
];

export default IconSize as IconComponent;