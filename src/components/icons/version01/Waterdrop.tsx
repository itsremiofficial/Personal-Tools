import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconWaterdrop: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M3 13.1928C3 18.0569 6.85549 22 11.6115 22H12.3885C17.1445 22 21 18.0569 21 13.1928V12.9281C21 8.31651 18.2715 4.16347 14.0967 2.42077C12.7527 1.85974 11.2473 1.85974 9.90329 2.42077C5.72854 4.16347 3 8.31651 3 12.9281V13.1928Z" stroke="currentColor" strokeWidth={width} /><path d="M7.61475 10.7237C8.2495 8.71826 9.63062 7.08805 11.3858 6.27637" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M11.6115 22H12.3885C17.1445 22 21 18.0569 21 13.1928V12.9281C21 8.31651 18.2715 4.16347 14.0967 2.42077C12.7527 1.85974 11.2473 1.85974 9.90329 2.42077C5.72854 4.16347 3 8.31651 3 12.9281V13.1928C3 18.0569 6.85549 22 11.6115 22Z" fill="currentColor" /><path d="M12.0663 5.96126C12.2401 6.33722 12.0763 6.78293 11.7003 6.95679C10.1548 7.6715 8.90701 9.12514 8.3295 10.9497C8.20451 11.3447 7.78305 11.5635 7.38814 11.4385C6.99324 11.3135 6.77443 10.892 6.89942 10.4971C7.59142 8.31077 9.10582 6.50399 11.0707 5.59533C11.4467 5.42146 11.8924 5.5853 12.0663 5.96126Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.6115 22C6.85549 22 3 18.0569 3 13.1928V12.9281C3 8.31651 5.72854 4.16347 9.90329 2.42077C11.2473 1.85974 12.7527 1.85974 14.0967 2.42077C18.2715 4.16347 21 8.31651 21 12.9281V13.1928C21 18.0569 17.1445 22 12.3885 22H11.6115ZM12.0664 5.96145C12.2402 6.33741 12.0764 6.78313 11.7004 6.95699C10.155 7.6717 8.90712 9.12534 8.32961 10.9499C8.20462 11.3449 7.78316 11.5637 7.38826 11.4387C6.99335 11.3137 6.77454 10.8922 6.89954 10.4973C7.59154 8.31097 9.10593 6.50418 11.0708 5.59552C11.4468 5.42166 11.8925 5.5855 12.0664 5.96145Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWaterdrop as IconComponentType).keywords = [
  "waterdrop",
  "drip",
  "dewdrop",
  "dropful",
  "bead",
  "dropper",
  "drizzle",
  "teardrop",
  "splash",
  "fountain water"
];

export default IconWaterdrop as IconComponentType;