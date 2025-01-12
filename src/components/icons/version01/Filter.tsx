import { FC } from 'react';

const IconFilter: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.8147V6.50451C22 7.54236 22 8.06128 21.7404 8.49146C21.4808 8.92163 21.0065 9.18862 20.058 9.72258L17.145 11.3624C16.5085 11.7207 16.1903 11.8998 15.9625 12.0976C15.488 12.5095 15.1959 12.9935 15.0636 13.5872C15 13.8723 15 14.2058 15 14.873V17.5425C15 19.4519 15 20.4066 14.3321 20.8244C13.6641 21.2422 12.7248 20.875 10.8462 20.1406C9.95128 19.7908 9.50385 19.6159 9.25192 19.2613C9 18.9068 9 18.452 9 17.5425L9 14.873C9 14.2058 9 13.8723 8.93644 13.5872C8.80408 12.9936 8.51199 12.5095 8.03751 12.0976C7.80967 11.8998 7.49146 11.7207 6.85504 11.3624L3.94202 9.72258C2.99347 9.18862 2.5192 8.92163 2.2596 8.49146C2 8.06128 2 7.54236 2 6.50451V5.8147" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M22 5.81466C22 4.48782 22 3.8244 21.5607 3.4122C21.1213 3 20.4142 3 19 3H5C3.58579 3 2.87868 3 2.43934 3.4122C2 3.8244 2 4.48782 2 5.81466" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5 3H19L8.81562 13.1844C8.65593 12.7689 8.39992 12.4122 8.03751 12.0976C7.80967 11.8998 7.49146 11.7206 6.85504 11.3624L3.94202 9.72255C2.99347 9.18858 2.5192 8.9216 2.2596 8.49142C2 8.06124 2 7.54232 2 6.50448V5.81466C2 4.48782 2 3.8244 2.43934 3.4122C2.87868 3 3.58579 3 5 3Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M21.9998 6.50448V5.81466C21.9998 4.48782 21.9998 3.8244 21.5605 3.4122C21.1211 3 20.414 3 18.9998 3L8.81543 13.1844C8.86481 13.3129 8.90498 13.447 8.93625 13.5872C8.99981 13.8722 8.99981 14.2058 8.99981 14.8729L8.99981 17.5424C8.99981 18.452 8.99981 18.9067 9.25173 19.2613C9.50366 19.6158 9.95109 19.7907 10.846 20.1406C12.7246 20.875 13.6639 21.2422 14.3319 20.8244C14.9998 20.4066 14.9998 19.4519 14.9998 17.5424V14.8729C14.9998 14.2058 14.9998 13.8722 15.0634 13.5872C15.1957 12.9935 15.4878 12.5095 15.9623 12.0976C16.1901 11.8998 16.5083 11.7206 17.1448 11.3624L20.0578 9.72255C21.0063 9.18858 21.4806 8.9216 21.7402 8.49142C21.9998 8.06124 21.9998 7.54232 21.9998 6.50448Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 3H5C3.58579 3 2.87868 3 2.43934 3.4122C2 3.8244 2 4.48782 2 5.81466V6.50448C2 7.54232 2 8.06124 2.2596 8.49142C2.5192 8.9216 2.99347 9.18858 3.94202 9.72255L6.85504 11.3624C7.49146 11.7206 7.80967 11.8998 8.03751 12.0976C8.51199 12.5095 8.80408 12.9935 8.93644 13.5872C9 13.8722 9 14.2058 9 14.8729L9 17.5424C9 18.452 9 18.9067 9.25192 19.2613C9.50385 19.6158 9.95128 19.7907 10.8462 20.1406C12.7248 20.875 13.6641 21.2422 14.3321 20.8244C15 20.4066 15 19.4519 15 17.5424V14.8729C15 14.2058 15 13.8722 15.0636 13.5872C15.1959 12.9935 15.488 12.5095 15.9625 12.0976C16.1903 11.8998 16.5085 11.7206 17.145 11.3624L20.058 9.72255C21.0065 9.18858 21.4808 8.9216 21.7404 8.49142C22 8.06124 22 7.54232 22 6.50448V5.81466C22 4.48782 22 3.8244 21.5607 3.4122C21.1213 3 20.4142 3 19 3Z" fill="currentColor" /></svg> 
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