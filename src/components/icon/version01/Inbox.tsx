import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconInbox: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12.0002C2 7.2862 2 4.92918 3.46447 3.46471C4.92893 2.00024 7.28595 2.00024 12 2.00024C16.714 2.00024 19.0711 2.00024 20.5355 3.46471C22 4.92918 22 7.2862 22 12.0002C22 16.7143 22 19.0713 20.5355 20.5358C19.0711 22.0002 16.714 22.0002 12 22.0002C7.28595 22.0002 4.92893 22.0002 3.46447 20.5358C2 19.0713 2 16.7143 2 12.0002Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M2 13.0002H5.16026C6.06543 13.0002 6.51802 13.0002 6.91584 13.1832C7.31367 13.3662 7.60821 13.7098 8.19729 14.3971L8.80271 15.1034C9.39179 15.7907 9.68633 16.1343 10.0842 16.3173C10.482 16.5002 10.9346 16.5002 11.8397 16.5002H12.1603C13.0654 16.5002 13.518 16.5002 13.9158 16.3173C14.3137 16.1343 14.6082 15.7907 15.1973 15.1034L15.8027 14.3971C16.3918 13.7098 16.6863 13.3662 17.0842 13.1832C17.482 13.0002 17.9346 13.0002 18.8397 13.0002H22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M1 12.0002C1 6.81479 1 4.22207 2.61091 2.61116C4.22183 1.00024 6.81455 1.00024 12 1.00024C17.1854 1.00024 19.7782 1.00024 21.3891 2.61116C23 4.22207 23 6.81479 23 12.0002C23 17.1857 23 19.7784 21.3891 21.3893C19.7782 23.0002 17.1854 23.0002 12 23.0002C6.81455 23.0002 4.22183 23.0002 2.61091 21.3893C1 19.7784 1 17.1857 1 12.0002Z" fill="currentColor" /><path d="M2.61091 21.3889C4.22183 22.9999 6.81455 22.9999 12 22.9999C17.1854 22.9999 19.7782 22.9999 21.3891 21.3889C22.8818 19.8962 22.9913 17.5604 22.9994 13.0999H19.5237C18.528 13.0999 18.0302 13.0999 17.5926 13.3011C17.155 13.5024 16.831 13.8804 16.183 14.6364L16.183 14.6364L15.517 15.4133L15.517 15.4133C14.869 16.1693 14.545 16.5473 14.1074 16.7486C13.6698 16.9499 13.172 16.9499 12.1763 16.9499H11.8237C10.828 16.9499 10.3302 16.9499 9.89257 16.7486C9.45496 16.5473 9.13097 16.1693 8.48298 15.4133L7.81701 14.6364C7.16903 13.8804 6.84504 13.5024 6.40743 13.3011C5.96982 13.0999 5.47197 13.0999 4.47629 13.0999H1C1.00803 17.5604 1.11818 19.8962 2.61091 21.3889Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.46447 20.5358C4.92893 22.0002 7.28595 22.0002 12 22.0002C16.714 22.0002 19.0711 22.0002 20.5355 20.5358C21.8063 19.265 21.9744 17.3221 21.9966 13.7502H18.8397C17.8659 13.7502 17.6113 13.7663 17.3975 13.8646C17.1838 13.9629 17.0059 14.1458 16.3722 14.8852L15.7667 15.5915L15.6794 15.6935C15.1773 16.2806 14.7796 16.7455 14.2292 16.9987C13.6789 17.2518 13.067 17.2512 12.2945 17.2503L12.1603 17.2502H11.8397L11.7055 17.2503C10.933 17.2512 10.3211 17.2518 9.77076 16.9987C9.22038 16.7455 8.82271 16.2806 8.32058 15.6935L8.23327 15.5915L7.62784 14.8852C6.9941 14.1458 6.81622 13.9629 6.60245 13.8646C6.38869 13.7663 6.13407 13.7502 5.16026 13.7502H2.00339C2.02561 17.3221 2.19367 19.265 3.46447 20.5358Z" fill="currentColor" /><path d="M20.5355 3.46471C19.0711 2.00024 16.714 2.00024 12 2.00024C7.28595 2.00024 4.92893 2.00024 3.46447 3.46471C2 4.92918 2 7.2862 2 12.0002L2.00001 12.2502H5.16026L5.29454 12.2502H5.29455C6.06705 12.2493 6.67886 12.2487 7.22924 12.5018C7.77961 12.755 8.17729 13.2199 8.67941 13.807L8.76673 13.909L9.37216 14.6153C10.0059 15.3547 10.1838 15.5376 10.3975 15.6359C10.6113 15.7342 10.8659 15.7502 11.8397 15.7502H12.1603C13.1341 15.7502 13.3887 15.7342 13.6025 15.6359C13.8162 15.5376 13.9941 15.3547 14.6278 14.6153L15.2333 13.909L15.3206 13.807C15.8227 13.2199 16.2204 12.755 16.7708 12.5018C17.3211 12.2487 17.933 12.2493 18.7055 12.2502L18.8397 12.2502H22L22 12.0002C22 7.2862 22 4.92918 20.5355 3.46471Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconInbox as IconComponentType).keywords = [
  "inbox",
  "mailbox",
  "letterbox",
  "email",
  "binder",
  "workbook",
  "cassette",
  "compartment",
  "rack",
  "lockbox"
];

export default IconInbox as IconComponentType;