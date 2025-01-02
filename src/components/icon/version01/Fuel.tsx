import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconFuel: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 13.0869C2 10.9906 2 9.94241 2.55325 9.14745C3.1065 8.3525 4.07697 8.00623 6.0179 7.3137L14.0179 4.45927C17.6539 3.16195 19.4718 2.51329 20.7359 3.42756C22 4.34183 22 6.30539 22 10.2325V15.8834C22 18.7668 22 20.2085 21.1213 21.1042C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1042C2 20.2085 2 18.7668 2 15.8834V13.0869Z" stroke="currentColor" strokeWidth={width} /><path d="M9 14C9 12.5858 9 11.8787 9.43934 11.4393C9.87868 11 10.5858 11 12 11C13.4142 11 14.1213 11 14.5607 11.4393C15 11.8787 15 12.5858 15 14C15 15.4142 15 16.1213 14.5607 16.5607C14.1213 17 13.4142 17 12 17C10.5858 17 9.87868 17 9.43934 16.5607C9 16.1213 9 15.4142 9 14Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M15 11L16 10" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M9 11L8 10" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M15 17L16 18" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M9 17L8 18" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M5 7.06009C5 5.75506 5 5.10254 5.33815 4.65303C5.4252 4.53731 5.52676 4.43372 5.64021 4.34492C6.08089 4 6.7206 4 8 4H8.81818C9.32544 4 9.57907 4 9.78716 4.05687C10.3519 4.21122 10.7929 4.66113 10.9442 5.23713" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M2.55325 9.14745C2 9.94241 2 10.9906 2 13.0869V15.8834C2 18.7668 2 20.2085 2.87868 21.1042C3.75736 22 5.17157 22 8 22H16C18.8284 22 20.2426 22 21.1213 21.1042C22 20.2085 22 18.7668 22 15.8834V10.2325C22 6.30539 22 4.34183 20.7359 3.42756C19.4718 2.51329 17.6539 3.16195 14.0179 4.45927L6.0179 7.3137C4.07697 8.00623 3.1065 8.3525 2.55325 9.14745Z" fill="currentColor" /><path d="M11.0162 5.53028L10.9442 5.23713C10.7929 4.66113 10.3519 4.21122 9.78716 4.05687C9.57907 4 9.32544 4 8.81818 4H8C6.7206 4 6.08089 4 5.64021 4.34492C5.52676 4.43372 5.4252 4.53731 5.33815 4.65303C5 5.10254 5 5.75506 5 7.06009V7.68117C5.3059 7.56774 5.64388 7.44715 6.0179 7.3137L11.0162 5.53028Z" fill="currentColor" /><path d="M7.46967 9.46967C7.17678 9.76256 7.17678 10.2374 7.46967 10.5303L8.96967 12.0303C9.00804 12.0687 9.04954 12.102 9.09334 12.1304C9 12.564 9 13.1561 9 14C9 14.8313 9 15.4182 9.08923 15.8501L7.46967 17.4697C7.17678 17.7626 7.17678 18.2374 7.46967 18.5303C7.76256 18.8232 8.23744 18.8232 8.53033 18.5303L10.1499 16.9108C10.5818 17 11.1687 17 12 17C12.8313 17 13.4182 17 13.8501 16.9108L15.4697 18.5303C15.7626 18.8232 16.2374 18.8232 16.5303 18.5303C16.8232 18.2374 16.8232 17.7626 16.5303 17.4697L14.9108 15.8501C15 15.4182 15 14.8313 15 14C15 13.1687 15 12.5818 14.9108 12.1499L16.5303 10.5303C16.8232 10.2374 16.8232 9.76256 16.5303 9.46967C16.2374 9.17678 15.7626 9.17678 15.4697 9.46967L13.8501 11.0892C13.4182 11 12.8313 11 12 11C11.1561 11 10.564 11 10.1304 11.0933C10.102 11.0495 10.0687 11.008 10.0303 10.9697L8.53033 9.46967C8.23744 9.17678 7.76256 9.17678 7.46967 9.46967Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2 13.0869C2 10.9906 2 9.94241 2.55325 9.14745C2.99989 8.50568 3.71844 8.15634 5 7.68117V7.06009C5 5.75506 5 5.10254 5.33815 4.65303C5.4252 4.53731 5.52676 4.43372 5.64021 4.34492C6.08089 4 6.7206 4 8 4H8.81818C9.32544 4 9.57907 4 9.78716 4.05687C10.3519 4.21122 10.7929 4.66113 10.9442 5.23713L11.0162 5.53028L14.0179 4.45927C17.6539 3.16195 19.4718 2.51329 20.7359 3.42756C22 4.34183 22 6.30539 22 10.2325V15.8834C22 18.7668 22 20.2085 21.1213 21.1042C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1042C2 20.2085 2 18.7668 2 15.8834V13.0869ZM7.46967 10.5303C7.17678 10.2374 7.17678 9.76256 7.46967 9.46967C7.76256 9.17678 8.23744 9.17678 8.53033 9.46967L10.0303 10.9697C10.0687 11.008 10.102 11.0495 10.1304 11.0933C10.564 11 11.1561 11 12 11C12.8313 11 13.4182 11 13.8501 11.0892L15.4697 9.46967C15.7626 9.17678 16.2374 9.17678 16.5303 9.46967C16.8232 9.76256 16.8232 10.2374 16.5303 10.5303L14.9108 12.1499C15 12.5818 15 13.1687 15 14C15 14.8313 15 15.4182 14.9108 15.8501L16.5303 17.4697C16.8232 17.7626 16.8232 18.2374 16.5303 18.5303C16.2374 18.8232 15.7626 18.8232 15.4697 18.5303L13.8501 16.9108C13.4182 17 12.8313 17 12 17C11.1687 17 10.5818 17 10.1499 16.9108L8.53033 18.5303C8.23744 18.8232 7.76256 18.8232 7.46967 18.5303C7.17678 18.2374 7.17678 17.7626 7.46967 17.4697L9.08923 15.8501C9 15.4182 9 14.8313 9 14C9 13.1561 9 12.564 9.09334 12.1304C9.04954 12.102 9.00804 12.0687 8.96967 12.0303L7.46967 10.5303Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFuel as IconComponentType).keywords = [
  "fuel",
  "fire",
  "combustible",
  "combustible material",
  "heating",
  "fan",
  "lpg",
  "gas",
  "gasoline",
  "cng"
];

export default IconFuel as IconComponentType;