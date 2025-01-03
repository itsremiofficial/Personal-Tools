import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconGrammerly: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.7396 4.95002C23.7096 8.92002 23.6396 15.4 19.5396 19.29C15.7496 22.88 9.59964 22.88 5.79964 19.29C1.68964 15.4 1.61963 8.92002 5.59963 4.95002C9.49963 1.04002 15.8396 1.04002 19.7396 4.95002Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.5098 16.07C14.3898 18.07 10.9498 18.07 8.83984 16.07" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.7396 4.95002C23.7096 8.92002 23.6396 15.4 19.5396 19.29C15.7496 22.88 9.59964 22.88 5.79964 19.29C1.68964 15.4 1.61963 8.92002 5.59963 4.95002C9.49963 1.04002 15.8396 1.04002 19.7396 4.95002Z" fill="currentColor" /><path d="M12.6697 18.32C11.0897 18.32 9.51967 17.75 8.31967 16.62C8.01967 16.33 8.00967 15.86 8.28967 15.56C8.57967 15.26 9.04967 15.25 9.34967 15.53C11.1797 17.26 14.1597 17.26 15.9897 15.53C16.2897 15.25 16.7697 15.26 17.0497 15.56C17.3297 15.86 17.3197 16.34 17.0197 16.62C15.8197 17.75 14.2497 18.32 12.6697 18.32Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.7804 4.96C15.8704 1.05 9.52038 1.05 5.61038 4.96C1.63038 8.94 1.70038 15.43 5.81038 19.33C9.61038 22.92 15.7704 22.92 19.5704 19.33C23.6904 15.43 23.7604 8.94 19.7804 4.96ZM17.0504 16.65C15.8504 17.79 14.2704 18.36 12.6904 18.36C11.1104 18.36 9.53038 17.79 8.33038 16.65C8.03038 16.36 8.02038 15.89 8.30038 15.59C8.59038 15.29 9.06038 15.28 9.36038 15.56C11.1904 17.29 14.1804 17.3 16.0204 15.56C16.3204 15.28 16.8004 15.29 17.0804 15.59C17.3704 15.89 17.3504 16.36 17.0504 16.65Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGrammerly as IconComponentType).keywords = [
  "grammerly"
];

export default IconGrammerly as IconComponentType;