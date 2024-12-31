import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconDislike: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.5197 5.6499L13.4197 3.2499C13.0197 2.8499 12.1197 2.6499 11.5197 2.6499H7.71973C6.51973 2.6499 5.21973 3.5499 4.91973 4.7499L2.51973 12.0499C2.01973 13.4499 2.91973 14.6499 4.41973 14.6499H8.41973C9.01973 14.6499 9.51973 15.1499 9.41973 15.8499L8.91973 19.0499C8.71973 19.9499 9.31973 20.9499 10.2197 21.2499C11.0197 21.5499 12.0197 21.1499 12.4197 20.5499L16.5197 14.4499" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /><path d="M21.6191 5.65V15.45C21.6191 16.85 21.0191 17.35 19.6191 17.35H18.6191C17.2191 17.35 16.6191 16.85 16.6191 15.45V5.65C16.6191 4.25 17.2191 3.75 18.6191 3.75H19.6191C21.0191 3.75 21.6191 4.25 21.6191 5.65Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M2.34904 13.96C2.73904 14.52 3.42904 14.84 4.21904 14.84H8.31904C8.58904 14.84 8.83904 14.95 9.00904 15.15C9.18904 15.35 9.25904 15.63 9.21904 15.92L8.70904 19.2C8.48904 20.18 9.13904 21.28 10.119 21.61C11.029 21.95 12.099 21.49 12.529 20.84L16.739 14.57L16.859 14.37V5.53003L16.709 5.38003L13.539 2.93003C13.119 2.51003 12.169 2.28003 11.499 2.28003H7.59904C6.25904 2.28003 4.90904 3.29003 4.60904 4.52003L2.14904 12.01C1.89904 12.72 1.96904 13.42 2.34904 13.96Z" fill="currentColor" /><path d="M18.7894 17.6099H19.8194C21.3694 17.6099 21.9994 17.0099 21.9994 15.5299V5.4799C21.9994 3.9999 21.3694 3.3999 19.8194 3.3999H18.7894C17.2394 3.3999 16.6094 3.9999 16.6094 5.4799V15.5399C16.6094 17.0099 17.2394 17.6099 18.7894 17.6099Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDislike as IconComponentType).keywords = [
  "dislike",
  "disfavour",
  "disfavor",
  "disapproval",
  "aversion",
  "displeasure",
  "distaste",
  "antipathy",
  "unpleasantness",
  "abhor"
];

export default IconDislike as IconComponentType;