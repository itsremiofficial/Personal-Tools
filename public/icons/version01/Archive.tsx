import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconArchive: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 12.0004C9 11.5344 9 11.3015 9.07612 11.1177C9.17761 10.8727 9.37229 10.678 9.61732 10.5765C9.80109 10.5004 10.0341 10.5004 10.5 10.5004H13.5C13.9659 10.5004 14.1989 10.5004 14.3827 10.5765C14.6277 10.678 14.8224 10.8727 14.9239 11.1177C15 11.3015 15 11.5344 15 12.0004C15 12.4663 15 12.6993 14.9239 12.883C14.8224 13.1281 14.6277 13.3228 14.3827 13.4242C14.1989 13.5004 13.9659 13.5004 13.5 13.5004H10.5C10.0341 13.5004 9.80109 13.5004 9.61732 13.4242C9.37229 13.3228 9.17761 13.1281 9.07612 12.883C9 12.6993 9 12.4663 9 12.0004Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M20.5 7.00037V13.0004C20.5 16.7716 20.5 18.6572 19.3284 19.8288C18.1569 21.0004 16.2712 21.0004 12.5 21.0004H11.5C7.72876 21.0004 5.84315 21.0004 4.67157 19.8288C3.5 18.6572 3.5 16.7716 3.5 13.0004V7.00037" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M2 5.00037C2 4.05756 2 3.58615 2.29289 3.29326C2.58579 3.00037 3.05719 3.00037 4 3.00037H20C20.9428 3.00037 21.4142 3.00037 21.7071 3.29326C22 3.58615 22 4.05756 22 5.00037C22 5.94318 22 6.41458 21.7071 6.70747C21.4142 7.00037 20.9428 7.00037 20 7.00037H4C3.05719 7.00037 2.58579 7.00037 2.29289 6.70747C2 6.41458 2 5.94318 2 5.00037Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.5 21.0004H12.5C16.2712 21.0004 18.1569 21.0004 19.3284 19.8288C20.5 18.6572 20.5 16.7716 20.5 13.0004V6.99841C20.3548 7.00045 20.1509 7.00041 20 7.00038H4C3.84905 7.00041 3.6452 7.00045 3.5 6.99841V13.0004C3.5 16.7716 3.5 18.6572 4.67157 19.8288C5.84315 21.0004 7.72876 21.0004 11.5 21.0004ZM9.07612 11.1177C9 11.3015 9 11.5344 9 12.0004C9 12.4663 9 12.6993 9.07612 12.883C9.17761 13.1281 9.37229 13.3228 9.61732 13.4242C9.80109 13.5004 10.0341 13.5004 10.5 13.5004H13.5C13.9659 13.5004 14.1989 13.5004 14.3827 13.4242C14.6277 13.3228 14.8224 13.1281 14.9239 12.883C15 12.6993 15 12.4663 15 12.0004C15 11.5344 15 11.3015 14.9239 11.1177C14.8224 10.8727 14.6277 10.678 14.3827 10.5765C14.1989 10.5004 13.9659 10.5004 13.5 10.5004H10.5C10.0341 10.5004 9.80109 10.5004 9.61732 10.5765C9.37229 10.678 9.17761 10.8727 9.07612 11.1177Z" fill="currentColor" /><g opacity={duotone ? "0.5" : "1"}><path d="M2 5.00037C2 4.05756 2 3.58615 2.29289 3.29326C2.58579 3.00037 3.05719 3.00037 4 3.00037H20C20.9428 3.00037 21.4142 3.00037 21.7071 3.29326C22 3.58615 22 4.05756 22 5.00037C22 5.94318 22 6.41458 21.7071 6.70747C21.4142 7.00037 20.9428 7.00037 20 7.00037H4C3.05719 7.00037 2.58579 7.00037 2.29289 6.70747C2 6.41458 2 5.94318 2 5.00037Z" fill="currentColor" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.5 21.0004H12.5C16.2712 21.0004 18.1569 21.0004 19.3284 19.8288C20.5 18.6572 20.5 16.7716 20.5 13.0004V7.99841C20.3548 8.00045 20.1509 8.00041 20 8.00038H4C3.84905 8.00041 3.6452 8.00045 3.5 7.99841V13.0004C3.5 16.7716 3.5 18.6572 4.67157 19.8288C5.84315 21.0004 7.72876 21.0004 11.5 21.0004ZM9.07612 11.1177C9 11.3015 9 11.5344 9 12.0004C9 12.4663 9 12.6993 9.07612 12.883C9.17761 13.1281 9.37229 13.3228 9.61732 13.4242C9.80109 13.5004 10.0341 13.5004 10.5 13.5004H13.5C13.9659 13.5004 14.1989 13.5004 14.3827 13.4242C14.6277 13.3228 14.8224 13.1281 14.9239 12.883C15 12.6993 15 12.4663 15 12.0004C15 11.5344 15 11.3015 14.9239 11.1177C14.8224 10.8727 14.6277 10.678 14.3827 10.5765C14.1989 10.5004 13.9659 10.5004 13.5 10.5004H10.5C10.0341 10.5004 9.80109 10.5004 9.61732 10.5765C9.37229 10.678 9.17761 10.8727 9.07612 11.1177Z" fill="currentColor" /><path d="M2 5.00037C2 4.05756 2 3.58615 2.29289 3.29326C2.58579 3.00037 3.05719 3.00037 4 3.00037H20C20.9428 3.00037 21.4142 3.00037 21.7071 3.29326C22 3.58615 22 4.05756 22 5.00037C22 5.94318 22 6.41458 21.7071 6.70747C21.4142 7.00037 20.9428 7.00037 20 7.00037H4C3.05719 7.00037 2.58579 7.00037 2.29289 6.70747C2 6.41458 2 5.94318 2 5.00037Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconArchive;