import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconHeartTick: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6703 17.1999C22.6703 18.0999 22.4203 18.9499 21.9703 19.6699C21.1403 21.0599 19.6203 21.9999 17.8703 21.9999C16.1203 21.9999 14.5903 21.0599 13.7703 19.6699C13.3303 18.9499 13.0703 18.0999 13.0703 17.1999C13.0703 14.5499 15.2203 12.3999 17.8703 12.3999C20.5203 12.3999 22.6703 14.5499 22.6703 17.1999Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 17.2L17.18 18.38L19.74 16.02" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22.6699 8.69012C22.6699 10.6601 22.1599 12.4001 21.3599 13.9101C20.4799 12.9801 19.2399 12.4001 17.8699 12.4001C15.2199 12.4001 13.0699 14.5501 13.0699 17.2001C13.0699 18.4301 13.5399 19.5501 14.2999 20.4001C13.9299 20.5701 13.5899 20.7101 13.2899 20.8101C12.9499 20.9301 12.3899 20.9301 12.0499 20.8101C9.14992 19.8201 2.66992 15.6901 2.66992 8.69012C2.66992 5.60012 5.15992 3.1001 8.22992 3.1001C10.0399 3.1001 11.6599 3.98014 12.6699 5.33014C13.6799 3.98014 15.2999 3.1001 17.1099 3.1001C20.1799 3.1001 22.6699 5.60012 22.6699 8.69012Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.8703 12.3999C15.2203 12.3999 13.0703 14.5499 13.0703 17.1999C13.0703 18.0999 13.3203 18.9499 13.7703 19.6699C14.6003 21.0599 16.1203 21.9999 17.8703 21.9999C19.6203 21.9999 21.1503 21.0599 21.9703 19.6699C22.4103 18.9499 22.6703 18.0999 22.6703 17.1999C22.6703 14.5499 20.5203 12.3999 17.8703 12.3999ZM20.2503 16.5699L17.6903 18.9299C17.5503 19.0599 17.3603 19.1299 17.1803 19.1299C16.9903 19.1299 16.8003 19.0599 16.6503 18.9099L15.4703 17.7299C15.1803 17.4399 15.1803 16.9599 15.4703 16.6699C15.7603 16.3799 16.2403 16.3799 16.5303 16.6699L17.2003 17.3399L19.2303 15.4599C19.5303 15.1799 20.0103 15.1999 20.2903 15.4999C20.5703 15.8099 20.5503 16.2899 20.2503 16.5699Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22.6699 8.69009C22.6699 9.88009 22.4799 10.9801 22.1499 12.0001C21.9399 12.6701 21.6699 13.3101 21.3499 13.9001C20.4699 12.9701 19.2399 12.4001 17.8699 12.4001C15.2199 12.4001 13.0699 14.5501 13.0699 17.2001C13.0699 18.4301 13.5399 19.5501 14.2999 20.4001C13.9299 20.5701 13.5899 20.7101 13.2899 20.8101C12.9499 20.9301 12.3899 20.9301 12.0499 20.8101C9.63992 19.9901 4.76992 17.0001 3.18992 12.0001C2.85992 10.9801 2.66992 9.88009 2.66992 8.69009C2.66992 5.60009 5.15992 3.1001 8.22992 3.1001C10.0399 3.1001 11.6599 3.98008 12.6699 5.33008C13.6799 3.98008 15.2999 3.1001 17.1099 3.1001C20.1799 3.1001 22.6699 5.60009 22.6699 8.69009Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.8703 12.3999C15.2203 12.3999 13.0703 14.5499 13.0703 17.1999C13.0703 18.0999 13.3203 18.9499 13.7703 19.6699C14.6003 21.0599 16.1203 21.9999 17.8703 21.9999C19.6203 21.9999 21.1503 21.0599 21.9703 19.6699C22.4103 18.9499 22.6703 18.0999 22.6703 17.1999C22.6703 14.5499 20.5203 12.3999 17.8703 12.3999ZM20.2503 16.5699L17.6903 18.9299C17.5503 19.0599 17.3603 19.1299 17.1803 19.1299C16.9903 19.1299 16.8003 19.0599 16.6503 18.9099L15.4703 17.7299C15.1803 17.4399 15.1803 16.9599 15.4703 16.6699C15.7603 16.3799 16.2403 16.3799 16.5303 16.6699L17.2003 17.3399L19.2303 15.4599C19.5303 15.1799 20.0103 15.1999 20.2903 15.4999C20.5703 15.8099 20.5503 16.2899 20.2503 16.5699Z" fill="currentColor" /><path d="M22.6699 8.73014C22.6699 9.92014 22.4799 11.0201 22.1499 12.0401C22.0899 12.2501 21.8399 12.3101 21.6599 12.1801C20.5699 11.3701 19.2399 10.9401 17.8699 10.9401C14.3999 10.9401 11.5699 13.7701 11.5699 17.2401C11.5699 18.3201 11.8499 19.3801 12.3799 20.3201C12.5399 20.6001 12.3499 20.9601 12.0499 20.8501C9.63992 20.0301 4.76992 17.0401 3.18992 12.0401C2.85992 11.0201 2.66992 9.92014 2.66992 8.73014C2.66992 5.64014 5.15992 3.14014 8.22992 3.14014C10.0399 3.14014 11.6599 4.02014 12.6699 5.37014C13.6799 4.02014 15.2999 3.14014 17.1099 3.14014C20.1799 3.14014 22.6699 5.64014 22.6699 8.73014Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHeartTick as IconComponentType).keywords = [
  "heart",
  "tick",
  "nerve",
  "marrow",
  "eye",
  "nub",
  "pith",
  "bosom",
  "spunk",
  "core",
  "meat",
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

export default IconHeartTick as IconComponentType;