import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconInboxLine: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12.0002C2 7.2862 2 4.92918 3.46447 3.46471C4.92893 2.00024 7.28595 2.00024 12 2.00024C16.714 2.00024 19.0711 2.00024 20.5355 3.46471C22 4.92918 22 7.2862 22 12.0002C22 16.7143 22 19.0713 20.5355 20.5358C19.0711 22.0002 16.714 22.0002 12 22.0002C7.28595 22.0002 4.92893 22.0002 3.46447 20.5358C2 19.0713 2 16.7143 2 12.0002Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M2 13.0002H5.16026C6.06543 13.0002 6.51802 13.0002 6.91584 13.1832C7.31367 13.3662 7.60821 13.7098 8.19729 14.3971L8.80271 15.1034C9.39179 15.7907 9.68633 16.1343 10.0842 16.3173C10.482 16.5002 10.9346 16.5002 11.8397 16.5002H12.1603C13.0654 16.5002 13.518 16.5002 13.9158 16.3173C14.3137 16.1343 14.6082 15.7907 15.1973 15.1034L15.8027 14.3971C16.3918 13.7098 16.6863 13.3662 17.0842 13.1832C17.482 13.0002 17.9346 13.0002 18.8397 13.0002H22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M8 7.00024H16" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M10 10.5002H14" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M2 12.0002C2 7.2862 2 4.92918 3.46447 3.46471C4.92893 2.00024 7.28595 2.00024 12 2.00024C16.714 2.00024 19.0711 2.00024 20.5355 3.46471C22 4.92918 22 7.2862 22 12.0002C22 16.7143 22 19.0713 20.5355 20.5358C19.0711 22.0002 16.714 22.0002 12 22.0002C7.28595 22.0002 4.92893 22.0002 3.46447 20.5358C2 19.0713 2 16.7143 2 12.0002Z" fill="currentColor" /><path d="M3.46451 20.5358C4.92902 22.0002 7.28611 22.0002 12.0003 22.0002C16.7145 22.0002 19.0716 22.0002 20.5361 20.5358C21.8931 19.1787 21.9927 17.0553 22 13.0002H18.8402C17.935 13.0002 17.4824 13.0002 17.0846 13.1832C16.6868 13.3662 16.3922 13.7098 15.8031 14.3971L15.1977 15.1034L15.1977 15.1034C14.6086 15.7907 14.314 16.1343 13.9162 16.3173C13.5184 16.5002 13.0658 16.5002 12.1606 16.5002H11.84C10.9348 16.5002 10.4822 16.5002 10.0844 16.3173C9.68655 16.1343 9.392 15.7907 8.80291 15.1034L8.19747 14.3971C7.60837 13.7098 7.31382 13.3662 6.91599 13.1832C6.51815 13.0002 6.06555 13.0002 5.16035 13.0002H2C2.0073 17.0553 2.10744 19.1787 3.46451 20.5358Z" fill="currentColor" /><path d="M8 6.25024C7.58579 6.25024 7.25 6.58603 7.25 7.00024C7.25 7.41446 7.58579 7.75024 8 7.75024H16C16.4142 7.75024 16.75 7.41446 16.75 7.00024C16.75 6.58603 16.4142 6.25024 16 6.25024H8Z" fill="currentColor" /><path d="M10 9.75024C9.58579 9.75024 9.25 10.086 9.25 10.5002C9.25 10.9145 9.58579 11.2502 10 11.2502H14C14.4142 11.2502 14.75 10.9145 14.75 10.5002C14.75 10.086 14.4142 9.75024 14 9.75024H10Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.46447 20.5358C4.92893 22.0002 7.28595 22.0002 12 22.0002C16.714 22.0002 19.0711 22.0002 20.5355 20.5358C21.8063 19.265 21.9744 17.3221 21.9966 13.7502H18.8397C17.8659 13.7502 17.6113 13.7663 17.3975 13.8646C17.1838 13.9629 17.0059 14.1458 16.3722 14.8852L15.6794 15.6935C15.1773 16.2806 14.7796 16.7455 14.2292 16.9987C13.6789 17.2518 13.067 17.2512 12.2945 17.2503H11.7055C10.933 17.2512 10.3211 17.2518 9.77076 16.9987C9.22038 16.7455 8.82271 16.2806 8.32058 15.6935L7.62784 14.8852C6.9941 14.1458 6.81622 13.9629 6.60245 13.8646C6.38869 13.7663 6.13407 13.7502 5.16026 13.7502H2.00339C2.02561 17.3221 2.19367 19.265 3.46447 20.5358Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M7.25 7.00024C7.25 6.58603 7.58579 6.25024 8 6.25024H16C16.4142 6.25024 16.75 6.58603 16.75 7.00024C16.75 7.41446 16.4142 7.75024 16 7.75024H8C7.58579 7.75024 7.25 7.41446 7.25 7.00024Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 2.00024C16.714 2.00024 19.0711 2.00024 20.5355 3.46471C22 4.92918 22 7.2862 22 12.0002L22 12.2502L18.7055 12.2502C17.933 12.2493 17.3211 12.2487 16.7708 12.5018C16.2204 12.755 15.8227 13.2199 15.3206 13.807L14.6278 14.6153C13.9941 15.3547 13.8162 15.5376 13.6025 15.6359C13.3887 15.7342 13.1341 15.7502 12.1603 15.7502H11.8397C10.8659 15.7502 10.6113 15.7342 10.3975 15.6359C10.1838 15.5376 10.0059 15.3547 9.37216 14.6153L8.67941 13.807C8.17729 13.2199 7.77961 12.755 7.22924 12.5018C6.67886 12.2487 6.06705 12.2493 5.29454 12.2502L2.00001 12.2502L2 12.0002C2 7.2862 2 4.92918 3.46447 3.46471C4.92893 2.00024 7.28595 2.00024 12 2.00024ZM9.25 10.5002C9.25 10.086 9.58579 9.75024 10 9.75024H14C14.4142 9.75024 14.75 10.086 14.75 10.5002C14.75 10.9145 14.4142 11.2502 14 11.2502H10C9.58579 11.2502 9.25 10.9145 9.25 10.5002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconInboxLine as IconComponentType).keywords = [
  "inbox",
  "line",
  "mailbox",
  "letterbox",
  "email",
  "binder",
  "workbook",
  "cassette",
  "compartment",
  "rack",
  "lockbox",
  "outline",
  "dividing line",
  "agate line",
  "delineate",
  "telephone line",
  "draw",
  "transmission line",
  "credit line",
  "phone line"
];

export default IconInboxLine as IconComponentType;