import { FC } from 'react';
import { IconProps } from "@/types";

const IconBag: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 7.8501C2 6.0001 2.99 5.8501 4.22 5.8501H19.78C21.01 5.8501 22 6.0001 22 7.8501C22 10.0001 21.01 9.8501 19.78 9.8501H4.22C2.99 9.8501 2 10.0001 2 7.8501Z" stroke="currentColor" strokeWidth="1.5" /><g opacity={duotone ? "0.4" : "1"}><path d="M8.80945 2L5.18945 5.63" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.1895 2L18.8095 5.63" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.75977 14V17.55" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M14.3594 14V17.55" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></g><path d="M3.5 10L4.91 18.64C5.23 20.58 6 22 8.86 22H14.89C18 22 18.46 20.64 18.82 18.76L20.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.24 5.58006H18.84L15.46 2.20006C15.19 1.93006 14.75 1.93006 14.47 2.20006C14.2 2.47006 14.2 2.91006 14.47 3.19006L16.86 5.58006H7.14L9.53 3.19006C9.8 2.92006 9.8 2.48006 9.53 2.20006C9.26 1.93006 8.82 1.93006 8.54 2.20006L5.17 5.58006H4.77C3.87 5.58006 2 5.58006 2 8.14006C2 9.11006 2.2 9.75006 2.62 10.1701C2.86 10.4201 3.15 10.5501 3.46 10.6201C3.75 10.6901 4.06 10.7001 4.36 10.7001H19.64C19.95 10.7001 20.24 10.6801 20.52 10.6201C21.36 10.4201 22 9.82006 22 8.14006C22 5.58006 20.13 5.58006 19.24 5.58006Z" fill="currentColor" /><path d="M19.6509 10.7001H4.36094C4.06094 10.7001 3.75094 10.6901 3.46094 10.6201L4.72094 18.3001C5.00094 20.0201 5.75094 22.0001 9.08094 22.0001H14.6909C18.0609 22.0001 18.6609 20.3101 19.0209 18.4201L20.5309 10.6201C20.2509 10.6801 19.9509 10.7001 19.6509 10.7001ZM10.6109 17.1601C10.6109 17.5501 10.3009 17.8601 9.91094 17.8601C9.52094 17.8601 9.21094 17.5501 9.21094 17.1601V13.8601C9.21094 13.4701 9.52094 13.1601 9.91094 13.1601C10.3009 13.1601 10.6109 13.4701 10.6109 13.8601V17.1601ZM14.8909 17.1601C14.8909 17.5501 14.5809 17.8601 14.1909 17.8601C13.8009 17.8601 13.4909 17.5501 13.4909 17.1601V13.8601C13.4909 13.4701 13.8009 13.1601 14.1909 13.1601C14.5809 13.1601 14.8909 13.4701 14.8909 13.8601V17.1601Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBag;