import { FC } from 'react';
import { IconProps } from "../../types";

const IconToggleOffCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 4H14C18.42 4 22 7.58 22 12C22 16.42 18.42 20 14 20H10C5.58 20 2 16.42 2 12C2 7.58 5.58 4 10 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10 16C12.2091 16 14 14.2091 14 12C14 9.79086 12.2091 8 10 8C7.79086 8 6 9.79086 6 12C6 14.2091 7.79086 16 10 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75Z" fill="currentColor" /><path d="M14.8906 3.45H9.11062C8.71062 3.45 8.39062 3.13 8.39062 2.73C8.39062 2.33 8.71062 2 9.11062 2H14.8906C15.2906 2 15.6106 2.32 15.6106 2.72C15.6106 3.12 15.2906 3.45 14.8906 3.45Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.0001 19.9699V17.0299C15.0001 15.7599 15.7601 14.9999 17.0301 14.9999H19.9701C20.1601 14.9999 20.3301 15.0199 20.5001 15.0599C20.6101 14.4999 20.6701 13.9199 20.6701 13.3299C20.6701 8.54991 16.7801 4.65991 12.0001 4.65991C7.22008 4.65991 3.33008 8.54991 3.33008 13.3299C3.33008 18.1099 7.22008 21.9999 12.0001 21.9999C13.2101 21.9999 14.3601 21.7499 15.4101 21.2999C15.1501 20.9599 15.0001 20.5199 15.0001 19.9699Z" fill="currentColor" /><path d="M19.97 15H17.03C15.76 15 15 15.76 15 17.03V19.97C15 21.24 15.76 22 17.03 22H19.97C21.24 22 22 21.24 22 19.97V17.03C22 15.76 21.24 15 19.97 15ZM19.69 19.46L18.51 20.14C18.27 20.28 18.03 20.35 17.81 20.35C17.64 20.35 17.49 20.31 17.35 20.23C17.03 20.04 16.85 19.67 16.85 19.18V17.82C16.85 17.33 17.03 16.96 17.35 16.77C17.67 16.58 18.08 16.62 18.51 16.86L19.69 17.54C20.11 17.79 20.35 18.13 20.35 18.5C20.35 18.87 20.12 19.21 19.69 19.46Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconToggleOffCircle;