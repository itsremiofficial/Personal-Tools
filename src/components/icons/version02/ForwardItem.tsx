import { FC } from 'react';

const IconForwardItem: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.0503 10.3799V13.6099C18.0503 16.2999 16.9703 17.3799 14.2803 17.3799H11.0503C8.36027 17.3799 7.28027 16.2999 7.28027 13.6099V10.3799C7.28027 7.68988 8.36027 6.60986 11.0503 6.60986H14.2803C16.9803 6.61986 18.0503 7.68988 18.0503 10.3799Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22.6704 5.76999V9C22.6704 11.69 21.5904 12.77 18.9004 12.77H18.0504V10.39C18.0504 7.70001 16.9704 6.62 14.2804 6.62H11.9004V5.76999C11.9004 3.07999 12.9804 2 15.6704 2H18.9004C21.5904 2 22.6704 3.07999 22.6704 5.76999Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2.66992 18.23V15C2.66992 12.31 3.74992 11.23 6.43992 11.23H7.28992V13.61C7.28992 16.3 8.36992 17.38 11.0599 17.38H13.4399V18.23C13.4399 20.92 12.3599 22 9.66992 22H6.43992C3.74992 22 2.66992 20.92 2.66992 18.23Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.9204 5.77V9C21.9204 11.29 21.1904 12.02 18.9004 12.02H18.8004V10.38C18.8004 7.26 17.4104 5.87 14.2904 5.87H12.6504V5.77C12.6504 3.48 13.3804 2.75 15.6704 2.75H18.9004C21.1904 2.75 21.9204 3.48 21.9204 5.77Z" fill="currentColor" /><path d="M17.3 10.3801V13.6201C17.3 15.9001 16.57 16.6301 14.29 16.6301H11.05C8.77004 16.6301 8.04004 15.9001 8.04004 13.6201V10.3801C8.04004 8.10013 8.77004 7.37012 11.05 7.37012H14.29C16.57 7.37012 17.3 8.10013 17.3 10.3801Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M12.6899 18.13V18.23C12.6899 20.52 11.9599 21.25 9.66992 21.25H6.43992C4.14992 21.25 3.41992 20.52 3.41992 18.23V15C3.41992 12.71 4.14992 11.98 6.43992 11.98H6.53992V13.62C6.53992 16.74 7.92992 18.13 11.0499 18.13H12.6899Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9204 5.77V9C21.9204 11.1146 21.2127 11.899 19.3011 12.0068C19.0254 12.0223 18.8004 11.7961 18.8004 11.52V10.38C18.8004 7.26 17.4104 5.87 14.2904 5.87H13.1504C12.8742 5.87 12.6481 5.64494 12.6636 5.36924C12.7714 3.45773 13.5558 2.75 15.6704 2.75H18.9004C21.1904 2.75 21.9204 3.48 21.9204 5.77Z" fill="currentColor" /><path d="M17.3 10.3801V13.6201C17.3 15.9001 16.57 16.6301 14.29 16.6301H11.05C8.77004 16.6301 8.04004 15.9001 8.04004 13.6201V10.3801C8.04004 8.10012 8.77004 7.37012 11.05 7.37012H14.29C16.57 7.37012 17.3 8.10012 17.3 10.3801Z" fill="currentColor" /><path d="M12.1899 18.13C12.4661 18.13 12.6922 18.355 12.6767 18.6307C12.569 20.5422 11.7845 21.25 9.66992 21.25H6.43992C4.14992 21.25 3.41992 20.52 3.41992 18.23V15C3.41992 12.8854 4.12765 12.101 6.03916 11.9932C6.31487 11.9777 6.53992 12.2038 6.53992 12.48V13.62C6.53992 16.74 7.92992 18.13 11.0499 18.13H12.1899Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconForwardItem as IconComponent).keywords = [
  "forward",
  "item",
  "frontwards",
  "ahead",
  "frontward",
  "forrader",
  "front",
  "forth",
  "onwards",
  "onward",
  "advancing",
  "point",
  "particular",
  "token",
  "detail",
  "object",
  "thing",
  "concept",
  "notion",
  "status"
];

export default IconForwardItem as IconComponent;