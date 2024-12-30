import { FC } from 'react';
import { IconProps } from "../../types";

const IconTagCross: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2797 20.25H16.9997C19.7597 20.25 21.9997 18.01 21.9997 15.25V8.75C21.9997 5.99 19.7597 3.75 16.9997 3.75H10.2797C8.86969 3.75 7.52969 4.34 6.57969 5.39L3.04969 9.27C1.63969 10.82 1.63969 13.18 3.04969 14.73L6.57969 18.61C7.52969 19.66 8.86969 20.25 10.2797 20.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M16.0005 14.4703L11.0605 9.53027" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M11.0605 14.4703L16.0005 9.53027" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M4.17038 15.2998L8.70038 19.8298C10.5604 21.6898 13.5804 21.6898 15.4504 19.8298L19.8404 15.4398C21.7004 13.5798 21.7004 10.5598 19.8404 8.6898L15.3004 4.1698C14.3504 3.2198 13.0404 2.7098 11.7004 2.7798L6.70038 3.0198C4.70038 3.1098 3.11038 4.6998 3.01038 6.6898L2.77038 11.6898C2.71038 13.0398 3.22038 14.3498 4.17038 15.2998Z" fill="currentColor" /><path d="M9.49914 12.3801C11.0897 12.3801 12.3791 11.0907 12.3791 9.50012C12.3791 7.90954 11.0897 6.62012 9.49914 6.62012C7.90856 6.62012 6.61914 7.90954 6.61914 9.50012C6.61914 11.0907 7.90856 12.3801 9.49914 12.3801Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconTagCross;