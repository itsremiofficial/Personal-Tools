import { FC } from 'react';

const IconLadle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M2 5.68433C2 3.6496 3.64948 2.00012 5.68421 2.00012C7.71894 2.00012 9.36842 3.6496 9.36842 5.68433V15.0001" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M22 14.5001V15.6843C22 19.1724 19.1723 22.0001 15.6842 22.0001C12.1961 22.0001 9.36842 19.1724 9.36842 15.6843V14.6317M22 14.5001C22 15.8808 19.0539 17.0002 16 17.0002C12.9461 17.0002 9.36842 16.0124 9.36842 14.6317M22 14.5001C22 13.1194 19.0539 12.0001 16 12.0001C12.9461 12.0001 9.36842 13.251 9.36842 14.6317" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M15.9997 17.0002C19.0537 17.0002 21.9997 15.8808 21.9997 14.5001C21.9997 13.1194 19.0537 12.0001 15.9997 12.0001C12.9458 12.0001 9.36816 13.1194 9.36816 14.5001C9.36816 15.8808 12.9458 17.0002 15.9997 17.0002Z" fill="currentColor" /><path d="M6.43421 2.50012C4.81369 2.50012 3.5 3.81381 3.5 5.43433C3.5 5.84855 3.16421 6.18433 2.75 6.18433C2.33579 6.18433 2 5.84855 2 5.43433C2 2.98539 3.98526 1.00012 6.43421 1.00012C8.88316 1.00012 10.8684 2.98539 10.8684 5.43433V13.0025C9.97125 13.4149 9.38248 13.9259 9.36842 14.4798V5.43433C9.36842 3.81381 8.05473 2.50012 6.43421 2.50012Z" fill="currentColor" /><path d="M9.36842 14.5204C9.37662 14.8433 9.58011 15.1516 9.92615 15.4343C11.0498 16.3523 13.6763 17.0002 15.9997 17.0002C19.0537 17.0002 21.9997 15.8808 21.9997 14.5001V15.6843C21.9997 19.1724 19.1721 22.0001 15.684 22.0001C12.1958 22.0001 9.36816 19.1724 9.36816 15.6843V14.5001C9.36816 14.5069 9.36825 14.5137 9.36842 14.5204Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.68421 2.75012C4.06369 2.75012 2.75 4.06381 2.75 5.68433C2.75 6.09855 2.41421 6.43433 2 6.43433C1.58579 6.43433 1.25 6.09855 1.25 5.68433C1.25 3.23539 3.23526 1.25012 5.68421 1.25012C8.13316 1.25012 10.1184 3.23539 10.1184 5.68433V11.7411C9.76603 11.9203 9.43462 12.1254 9.1444 12.3595C8.97145 12.499 8.7873 12.6707 8.61842 12.8747V5.68433C8.61842 4.06381 7.30473 2.75012 5.68421 2.75012Z" fill="currentColor" /><path d="M8.63308 16.1431C8.86947 19.8316 11.936 22.7501 15.6842 22.7501C19.356 22.7501 22.3736 19.9494 22.7174 16.3678C22.6491 16.4416 22.5794 16.5107 22.5096 16.5753C22.007 17.0393 21.3655 17.3923 20.7078 17.6584C19.3839 18.1941 17.6884 18.5002 16 18.5002C14.3146 18.5002 12.5143 18.1951 11.0918 17.6775C10.3865 17.4208 9.69209 17.0825 9.14439 16.6407C8.97643 16.5052 8.79792 16.3394 8.63308 16.1431Z" fill="currentColor" /><path d="M22 14.5001C22 15.8808 19.0539 17.0002 16 17.0002C12.9461 17.0002 9.5 15.8808 9.5 14.5001C9.5 13.1194 12.9461 12.0001 16 12.0001C19.0539 12.0001 22 13.1194 22 14.5001Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLadle as IconComponent).keywords = [
  "ladle",
  "lade",
  "laden",
  "spoon",
  "busboy",
  "waiter",
  "dipper",
  "bag",
  "pouch",
  "pocket"
];

export default IconLadle as IconComponent;