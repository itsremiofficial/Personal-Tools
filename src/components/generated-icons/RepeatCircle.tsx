import { FC } from 'react';
import { IconProps } from "@/types";

const IconRepeatCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M7.5 8.34033H14.9C15.79 8.34033 16.5 9.06031 16.5 9.94031V11.7103" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.19 6.66016L7.5 8.34021L9.19 10.0302" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.5 15.66H9.10001C8.21001 15.66 7.5 14.9401 7.5 14.0601V12.29" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.8105 17.3403L16.5005 15.6602L14.8105 13.9702" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path d="M14.9 7.58988H9.31L9.72 7.17984C10.01 6.88984 10.01 6.40984 9.72 6.11984C9.43 5.82984 8.95001 5.82984 8.66001 6.11984L6.97 7.80985C6.9 7.87985 6.85 7.95984 6.81 8.04984C6.73 8.22984 6.73 8.43984 6.81 8.61984C6.85 8.70984 6.9 8.78983 6.97 8.85983L8.66001 10.5498C8.81001 10.6998 9 10.7699 9.19 10.7699C9.38 10.7699 9.57 10.6998 9.72 10.5498C10.01 10.2598 10.01 9.77984 9.72 9.48984L9.31 9.07987H14.9C15.37 9.07987 15.75 9.45984 15.75 9.92984V11.6999C15.75 12.1099 16.09 12.4499 16.5 12.4499C16.91 12.4499 17.25 12.1099 17.25 11.6999V9.92984C17.25 8.64984 16.19 7.58988 14.9 7.58988Z" fill="currentColor" /><path d="M17.19 15.3698C17.15 15.2798 17.1 15.1998 17.03 15.1298L15.34 13.4398C15.05 13.1498 14.57 13.1498 14.28 13.4398C13.99 13.7298 13.99 14.2098 14.28 14.4998L14.69 14.9098H9.10001C8.63001 14.9098 8.25 14.5298 8.25 14.0598V12.2898C8.25 11.8798 7.91 11.5398 7.5 11.5398C7.09 11.5398 6.75 11.8798 6.75 12.2898V14.0598C6.75 15.3598 7.81001 16.4098 9.10001 16.4098H14.69L14.28 16.8198C13.99 17.1098 13.99 17.5898 14.28 17.8798C14.43 18.0298 14.62 18.0998 14.81 18.0998C15 18.0998 15.19 18.0298 15.34 17.8798L17.03 16.1898C17.1 16.1198 17.15 16.0398 17.19 15.9498C17.27 15.7598 17.27 15.5498 17.19 15.3698Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconRepeatCircle;