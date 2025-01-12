import { FC } from 'react';

const IconTruckFast: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.6707 14H13.6707C14.7707 14 15.6707 13.1 15.6707 12V2H6.67065C5.17065 2 3.86066 2.82999 3.18066 4.04999" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M2.6709 17C2.6709 18.66 4.0109 20 5.6709 20H6.6709C6.6709 18.9 7.5709 18 8.6709 18C9.7709 18 10.6709 18.9 10.6709 20H14.6709C14.6709 18.9 15.5709 18 16.6709 18C17.7709 18 18.6709 18.9 18.6709 20H19.6709C21.3309 20 22.6709 18.66 22.6709 17V14H19.6709C19.1209 14 18.6709 13.55 18.6709 13V10C18.6709 9.45 19.1209 9 19.6709 9H20.9609L19.2509 6.01001C18.8909 5.39001 18.2309 5 17.5109 5H15.6709V12C15.6709 13.1 14.7709 14 13.6709 14H12.6709" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M8.6709 22C9.77547 22 10.6709 21.1046 10.6709 20C10.6709 18.8954 9.77547 18 8.6709 18C7.56633 18 6.6709 18.8954 6.6709 20C6.6709 21.1046 7.56633 22 8.6709 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M16.6709 22C17.7755 22 18.6709 21.1046 18.6709 20C18.6709 18.8954 17.7755 18 16.6709 18C15.5663 18 14.6709 18.8954 14.6709 20C14.6709 21.1046 15.5663 22 16.6709 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22.6709 12V14H19.6709C19.1209 14 18.6709 13.55 18.6709 13V10C18.6709 9.45 19.1209 9 19.6709 9H20.9609L22.6709 12Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M2.6709 8H8.6709" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M2.6709 11H6.6709" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M2.6709 14H4.6709" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.6699 14V17C22.6699 18.66 21.3299 20 19.6699 20H18.6699C18.6699 18.9 17.7699 18 16.6699 18C15.5699 18 14.6699 18.9 14.6699 20H10.6699C10.6699 18.9 9.76992 18 8.66992 18C7.56992 18 6.66992 18.9 6.66992 20H5.66992C4.00992 20 2.66992 18.66 2.66992 17V14H13.6699C14.7699 14 15.6699 13.1 15.6699 12V5H17.5099C18.2299 5 18.8899 5.39001 19.2499 6.01001L20.9599 9H19.6699C19.1199 9 18.6699 9.45 18.6699 10V13C18.6699 13.55 19.1199 14 19.6699 14H22.6699Z" fill="currentColor" /><path d="M8.66992 22C9.77449 22 10.6699 21.1046 10.6699 20C10.6699 18.8954 9.77449 18 8.66992 18C7.56535 18 6.66992 18.8954 6.66992 20C6.66992 21.1046 7.56535 22 8.66992 22Z" fill="currentColor" /><path d="M16.6699 22C17.7745 22 18.6699 21.1046 18.6699 20C18.6699 18.8954 17.7745 18 16.6699 18C15.5654 18 14.6699 18.8954 14.6699 20C14.6699 21.1046 15.5654 22 16.6699 22Z" fill="currentColor" /><path d="M22.6699 12.53V14H19.6699C19.1199 14 18.6699 13.55 18.6699 13V10C18.6699 9.45 19.1199 9 19.6699 9H20.9599L22.4099 11.54C22.5799 11.84 22.6699 12.18 22.6699 12.53Z" fill="currentColor" /><path d="M14.6699 2H6.66992C4.71992 2 3.09994 3.4 2.74994 5.25H7.66992C8.07992 5.25 8.41992 5.59 8.41992 6C8.41992 6.41 8.07992 6.75 7.66992 6.75H2.66992V8.25H5.66992C6.07992 8.25 6.41992 8.59 6.41992 9C6.41992 9.41 6.07992 9.75 5.66992 9.75H2.66992V11.25H3.66992C4.07992 11.25 4.41992 11.59 4.41992 12C4.41992 12.41 4.07992 12.75 3.66992 12.75H2.66992V14H13.6699C14.7699 14 15.6699 13.1 15.6699 12V3C15.6699 2.45 15.2199 2 14.6699 2Z" fill="currentColor" /><path d="M2.74994 5.25H1.66992C1.25992 5.25 0.919922 5.59 0.919922 6C0.919922 6.41 1.25992 6.75 1.66992 6.75H2.66992V6C2.66992 5.74 2.69994 5.49 2.74994 5.25Z" fill="currentColor" /><path d="M1.66992 8.25C1.25992 8.25 0.919922 8.59 0.919922 9C0.919922 9.41 1.25992 9.75 1.66992 9.75H2.66992V8.25H1.66992Z" fill="currentColor" /><path d="M1.66992 11.25C1.25992 11.25 0.919922 11.59 0.919922 12C0.919922 12.41 1.25992 12.75 1.66992 12.75H2.66992V11.25H1.66992Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.1709 15.5C22.4509 15.5 22.6709 15.72 22.6709 16V17C22.6709 18.66 21.3309 20 19.6709 20C19.6709 18.35 18.3209 17 16.6709 17C15.0209 17 13.6709 18.35 13.6709 20H11.6709C11.6709 18.35 10.3209 17 8.6709 17C7.0209 17 5.6709 18.35 5.6709 20C4.0109 20 2.6709 18.66 2.6709 17V15C2.6709 14.45 3.1209 14 3.6709 14H13.1709C14.5509 14 15.6709 12.88 15.6709 11.5V6C15.6709 5.45 16.1209 5 16.6709 5H17.5109C18.2309 5 18.8909 5.39 19.2509 6.01L19.8909 7.13C19.9809 7.29 19.8609 7.5 19.6709 7.5C18.2909 7.5 17.1709 8.62 17.1709 10V13C17.1709 14.38 18.2909 15.5 19.6709 15.5H22.1709Z" fill="currentColor" /><path d="M8.6709 22C9.77547 22 10.6709 21.1046 10.6709 20C10.6709 18.8954 9.77547 18 8.6709 18C7.56633 18 6.6709 18.8954 6.6709 20C6.6709 21.1046 7.56633 22 8.6709 22Z" fill="currentColor" /><path d="M16.6709 22C17.7755 22 18.6709 21.1046 18.6709 20C18.6709 18.8954 17.7755 18 16.6709 18C15.5663 18 14.6709 18.8954 14.6709 20C14.6709 21.1046 15.5663 22 16.6709 22Z" fill="currentColor" /><path d="M22.6709 12.53V14H19.6709C19.1209 14 18.6709 13.55 18.6709 13V10C18.6709 9.45 19.1209 9 19.6709 9H20.9609L22.4109 11.54C22.5809 11.84 22.6709 12.18 22.6709 12.53Z" fill="currentColor" /><path d="M13.7509 2H6.3609C4.5709 2 3.0709 3.28 2.7409 4.98H7.1109C7.4909 4.98 7.7909 5.29 7.7909 5.67C7.7909 6.05 7.4909 6.35 7.1109 6.35H2.6709V7.73H5.2709C5.6509 7.73 5.9609 8.04 5.9609 8.42C5.9609 8.8 5.6509 9.1 5.2709 9.1H2.6709V10.48H3.4409C3.8209 10.48 4.1309 10.79 4.1309 11.17C4.1309 11.55 3.8209 11.85 3.4409 11.85H2.6709V12.08C2.6709 12.63 3.1209 13.08 3.6709 13.08H12.8209C13.8409 13.08 14.6709 12.25 14.6709 11.23V2.92C14.6709 2.41 14.2609 2 13.7509 2Z" fill="currentColor" /><path d="M2.7409 4.97998H2.5909H1.6109C1.2309 4.97998 0.920898 5.28998 0.920898 5.66998C0.920898 6.04998 1.2309 6.34998 1.6109 6.34998H2.5209H2.6709V5.68998C2.6709 5.44998 2.7009 5.20998 2.7409 4.97998Z" fill="currentColor" /><path d="M2.5209 7.72998H1.6109C1.2309 7.72998 0.920898 8.03998 0.920898 8.41998C0.920898 8.79998 1.2309 9.09998 1.6109 9.09998H2.5209H2.6709V7.72998H2.5209Z" fill="currentColor" /><path d="M2.5209 10.48H1.6109C1.2309 10.48 0.920898 10.79 0.920898 11.17C0.920898 11.55 1.2309 11.85 1.6109 11.85H2.5209H2.6709V10.48H2.5209Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTruckFast as IconComponent).keywords = [
  "truck",
  "fast",
  "hand truck",
  "motortruck",
  "tractor-trailer",
  "lorry",
  "semi-trailer",
  "flatbed",
  "van",
  "truckload",
  "cartage",
  "tight",
  "instantaneous",
  "immediate",
  "instant",
  "true",
  "profligate",
  "constant",
  "faithful",
  "loyal"
];

export default IconTruckFast as IconComponent;