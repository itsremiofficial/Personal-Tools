import { FC } from 'react';

const IconFilter: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.07031 2.10001H19.2703C20.3703 2.10001 21.2703 3.00001 21.2703 4.10001V6.30001C21.2703 7.10001 20.7703 8.10001 20.2703 8.60001L15.9703 12.4C15.3703 12.9 14.9703 13.9 14.9703 14.7V19C14.9703 19.6 14.5703 20.4 14.0703 20.7L12.6703 21.6C11.3703 22.4 9.57031 21.5 9.57031 19.9V14.6C9.57031 13.9 9.17031 13 8.77031 12.5L4.97031 8.50001C4.47031 8.00001 4.07031 7.10001 4.07031 6.50001V4.20001C4.07031 3.00001 4.97031 2.10001 6.07031 2.10001Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.5999 2.10001L6.66992 10" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.2695 4.10001V6.30001C21.2695 7.10001 20.7695 8.10001 20.2695 8.60001L15.9695 12.4C15.3695 12.9 14.9695 13.9 14.9695 14.7V19C14.9695 19.6 14.5695 20.4 14.0695 20.7L12.6695 21.6C11.3695 22.4 9.56953 21.5 9.56953 19.9V14.6C9.56953 13.9 9.16953 13 8.76953 12.5L7.76953 11.45L13.5895 2.10001H19.2695C20.3695 2.10001 21.2695 3.00001 21.2695 4.10001Z" fill="currentColor" /><path d="M11.9703 2.10001L6.79031 10.41L4.97031 8.50001C4.47031 8.00001 4.07031 7.10001 4.07031 6.50001V4.20001C4.07031 3.00001 4.97031 2.10001 6.07031 2.10001H11.9703Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.2698 4.1V6.3C21.2698 7.1 20.7698 8.1 20.2698 8.6L15.9698 12.4C15.3698 12.9 14.9698 13.9 14.9698 14.7V19C14.9698 19.6 14.5698 20.4 14.0698 20.7L12.6698 21.6C11.3698 22.4 9.56981 21.5 9.56981 19.9V14.6C9.56981 13.9 9.16981 13 8.76981 12.5L8.29981 12.01C7.98981 11.68 7.92981 11.18 8.17981 10.79L13.2998 2.57C13.4798 2.28 13.7998 2.1 14.1498 2.1H19.2698C20.3698 2.1 21.2698 3 21.2698 4.1Z" fill="currentColor" /><path d="M11.0203 3.63L7.47031 9.32C7.13031 9.87 6.35031 9.95 5.90031 9.48L4.97031 8.5C4.47031 8 4.07031 7.1 4.07031 6.5V4.2C4.07031 3 4.97031 2.1 6.07031 2.1H10.1703C10.9503 2.1 11.4303 2.96 11.0203 3.63Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFilter as IconComponent).keywords = [
  "filter",
  "filtrate",
  "filter out",
  "percolate",
  "permeate",
  "trickle",
  "sink in",
  "strain",
  "dribble",
  "separate out"
];

export default IconFilter as IconComponent;