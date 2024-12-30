import { FC } from 'react';
import { IconProps } from "../../types";

const IconKey: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.7906 14.9298C17.7306 16.9798 14.7806 17.6098 12.1906 16.7998L7.48063 21.4998C7.14063 21.8498 6.47063 22.0598 5.99063 21.9898L3.81063 21.6898C3.09063 21.5898 2.42063 20.9098 2.31063 20.1898L2.01063 18.0098C1.94063 17.5298 2.17063 16.8598 2.50063 16.5198L7.20063 11.8198C6.40063 9.21982 7.02063 6.26982 9.08063 4.21982C12.0306 1.26982 16.8206 1.26982 19.7806 4.21982C22.7406 7.16982 22.7406 11.9798 19.7906 14.9298Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.89062 17.4902L9.19062 19.7902" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14.5 11C15.3284 11 16 10.3284 16 9.5C16 8.67157 15.3284 8 14.5 8C13.6716 8 13 8.67157 13 9.5C13 10.3284 13.6716 11 14.5 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.5393 19.04C20.3893 19.19 20.1993 19.26 20.0093 19.26C19.8193 19.26 19.6293 19.19 19.4793 19.04L14.5293 14.09L15.0593 13.56L15.5893 13.03L20.5393 17.98C20.8293 18.27 20.8293 18.75 20.5393 19.04Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M6.46938 9.28009L12.2694 15.0801C12.6594 15.4701 12.6594 16.1001 12.2694 16.4901L11.3694 17.4001C10.5594 18.2001 9.27937 18.2001 8.47937 17.4001L4.13938 13.0601C3.34938 12.2701 3.34938 10.9801 4.13938 10.1801L5.04938 9.27009C5.43938 8.89009 6.07938 8.89009 6.46938 9.28009Z" fill="currentColor" /><path d="M18.5895 10.1899L14.7795 13.9899C14.3795 14.3899 13.7395 14.3899 13.3395 13.9899L7.56953 8.21994C7.16953 7.81994 7.16953 7.17994 7.56953 6.77994L11.3795 2.96994C12.1695 2.17994 13.4595 2.17994 14.2595 2.96994L18.5995 7.30994C19.3795 8.09994 19.3795 9.37994 18.5895 10.1899Z" fill="currentColor" /><path d="M8 21.75H2C1.59 21.75 1.25 21.41 1.25 21C1.25 20.59 1.59 20.25 2 20.25H8C8.41 20.25 8.75 20.59 8.75 21C8.75 21.41 8.41 21.75 8 21.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconKey;