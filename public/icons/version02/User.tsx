import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconUser: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 12C15.4313 12 17.6699 9.76142 17.6699 7C17.6699 4.23858 15.4313 2 12.6699 2C9.9085 2 7.66992 4.23858 7.66992 7C7.66992 9.76142 9.9085 12 12.6699 12Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M21.2601 22C21.2601 18.13 17.4101 15 12.6701 15C7.93007 15 4.08008 18.13 4.08008 22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.6699 12C15.4313 12 17.6699 9.76142 17.6699 7C17.6699 4.23858 15.4313 2 12.6699 2C9.9085 2 7.66992 4.23858 7.66992 7C7.66992 9.76142 9.9085 12 12.6699 12Z" fill="currentColor" /><path d="M12.6701 14.5C7.66007 14.5 3.58008 17.86 3.58008 22C3.58008 22.28 3.80008 22.5 4.08008 22.5H21.2601C21.5401 22.5 21.7601 22.28 21.7601 22C21.7601 17.86 17.6801 14.5 12.6701 14.5Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 12C15.4313 12 17.6699 9.76142 17.6699 7C17.6699 4.23858 15.4313 2 12.6699 2C9.9085 2 7.66992 4.23858 7.66992 7C7.66992 9.76142 9.9085 12 12.6699 12Z" fill="currentColor" /><path d="M12.6701 14.5C7.66008 14.5 3.58008 17.86 3.58008 22C3.58008 22.28 3.80008 22.5 4.08008 22.5H21.2601C21.5401 22.5 21.7601 22.28 21.7601 22C21.7601 17.86 17.6801 14.5 12.6701 14.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconUser as IconComponentType).keywords = [
  "user",
  "exploiter",
  "enjoyer",
  "drug user",
  "substance abuser",
  "customer",
  "client",
  "employer",
  "consumer",
  "employee"
];

export default IconUser as IconComponentType;