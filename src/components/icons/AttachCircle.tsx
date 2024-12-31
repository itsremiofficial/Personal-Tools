import { FC } from 'react';
import { IconProps } from "../../types";

const IconAttachCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.2009 11.8002L10.7908 13.2102C10.0108 13.9902 10.0108 15.2602 10.7908 16.0402C11.5708 16.8202 12.8408 16.8202 13.6208 16.0402L15.8409 13.8202C17.4009 12.2602 17.4009 9.73023 15.8409 8.16023C14.2809 6.60023 11.7508 6.60023 10.1808 8.16023L7.76086 10.5802C6.42086 11.9202 6.42086 14.0902 7.76086 15.4302" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 7.81V16.18C22 19.82 19.83 21.99 16.19 21.99H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2H16.18C19.83 2 22 4.17 22 7.81Z" fill="currentColor" /><path d="M12.5309 5.47L16.8209 9.76C17.1109 10.05 17.1109 10.53 16.8209 10.82C16.5309 11.11 16.0509 11.11 15.7609 10.82L12.7509 7.81V18C12.7509 18.41 12.4109 18.75 12.0009 18.75C11.5909 18.75 11.2509 18.41 11.2509 18V7.81L8.24094 10.82C7.95094 11.11 7.47094 11.11 7.18094 10.82C7.03094 10.67 6.96094 10.48 6.96094 10.29C6.96094 10.1 7.04094 9.9 7.18094 9.76L11.4709 5.47C11.6109 5.33 11.8009 5.25 12.0009 5.25C12.2009 5.25 12.3909 5.33 12.5309 5.47Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconAttachCircle;