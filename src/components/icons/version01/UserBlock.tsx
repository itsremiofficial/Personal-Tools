import { FC } from 'react';

const IconUserBlock: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="6.00049" r="4" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M15.5 13.5356C14.4704 13.1953 13.275 13.0005 12 13.0005C8.13401 13.0005 5 14.7913 5 17.0005C5 19.2096 5 21.0005 12 21.0005C12.3506 21.0005 12.6836 20.996 13 20.9872" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M19.9502 17.0503L16.0502 20.9502" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><circle cx="18" cy="19.0005" r="3" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 10.0005C14.2091 10.0005 16 8.20963 16 6.00049C16 3.79135 14.2091 2.00049 12 2.00049C9.79086 2.00049 8 3.79135 8 6.00049C8 8.20963 9.79086 10.0005 12 10.0005Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M16.5 15.7505C14.9812 15.7505 13.75 16.9817 13.75 18.5005C13.75 19.0009 13.8832 19.4696 14.1167 19.8737L17.8732 16.1172C17.4691 15.8837 17.0004 15.7505 16.5 15.7505ZM18.9196 17.1921L15.1916 20.9201C15.5806 21.131 16.0261 21.2505 16.5 21.2505C18.0188 21.2505 19.25 20.0193 19.25 18.5005C19.25 18.0266 19.1305 17.5811 18.9196 17.1921ZM12.25 18.5005C12.25 16.1533 14.1528 14.2505 16.5 14.2505C17.689 14.2505 18.7652 14.7398 19.5357 15.5261C20.2861 16.2918 20.75 17.3427 20.75 18.5005C20.75 20.8477 18.8472 22.7505 16.5 22.7505C15.3423 22.7505 14.2914 22.2866 13.5256 21.5362C12.7393 20.7657 12.25 19.6895 12.25 18.5005Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17.9963 14.5216C17.5308 14.3464 17.0265 14.2505 16.5 14.2505C14.1528 14.2505 12.25 16.1533 12.25 18.5005C12.25 19.6895 12.7393 20.7657 13.5256 21.5362C13.6786 21.6861 13.8429 21.8246 14.0173 21.9502C13.4088 21.9833 12.7385 22.0005 12 22.0005C4 22.0005 4 19.9858 4 17.5005C4 15.0152 7.58172 13.0005 12 13.0005C14.3874 13.0005 16.5305 13.5887 17.9963 14.5216Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 10.0005C14.2091 10.0005 16 8.20963 16 6.00049C16 3.79135 14.2091 2.00049 12 2.00049C9.79086 2.00049 8 3.79135 8 6.00049C8 8.20963 9.79086 10.0005 12 10.0005Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M18 15.7505C16.2051 15.7505 14.75 17.2056 14.75 19.0005C14.75 20.7954 16.2051 22.2505 18 22.2505C19.7949 22.2505 21.25 20.7954 21.25 19.0005C21.25 17.2056 19.7949 15.7505 18 15.7505ZM16.25 19.0005C16.25 18.034 17.0335 17.2505 18 17.2505C18.2063 17.2505 18.4043 17.2862 18.5881 17.3518L16.3513 19.5886C16.2857 19.4048 16.25 19.2068 16.25 19.0005ZM17.4119 20.6492L19.6487 18.4124C19.7143 18.5962 19.75 18.7942 19.75 19.0005C19.75 19.967 18.9665 20.7505 18 20.7505C17.7937 20.7505 17.5957 20.7148 17.4119 20.6492Z" fill="currentColor" /><path d="M12 22.0005C4 22.0005 4 19.9858 4 17.5005C4 15.0152 7.58172 13.0005 12 13.0005C14.3695 13.0005 16.4983 13.5799 17.9632 14.5006C15.4949 14.5204 13.5 16.5275 13.5 19.0005C13.5 20.112 13.903 21.1293 14.5708 21.9144C13.8219 21.9709 12.9697 22.0005 12 22.0005Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconUserBlock as IconComponent).keywords = [
  "user",
  "block",
  "exploiter",
  "enjoyer",
  "drug user",
  "substance abuser",
  "customer",
  "client",
  "employer",
  "consumer",
  "employee",
  "bar",
  "stuff",
  "pulley",
  "barricade",
  "engine block",
  "lug",
  "freeze",
  "blockade",
  "parry"
];

export default IconUserBlock as IconComponent;