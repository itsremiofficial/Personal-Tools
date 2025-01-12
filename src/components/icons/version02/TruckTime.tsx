import { FC } from 'react';

const IconTruckTime: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M15.6709 2V12C15.6709 13.1 14.7709 14 13.6709 14H2.6709V7.62C3.4009 8.49 4.52093 9.03 5.76093 9C6.77093 8.98 7.6809 8.59 8.3609 7.94C8.6709 7.68 8.93092 7.34999 9.13092 6.98999C9.49092 6.37999 9.6909 5.65997 9.6709 4.90997C9.6409 3.73997 9.12091 2.71 8.31091 2H15.6709Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22.6709 14V17C22.6709 18.66 21.3309 20 19.6709 20H18.6709C18.6709 18.9 17.7709 18 16.6709 18C15.5709 18 14.6709 18.9 14.6709 20H10.6709C10.6709 18.9 9.7709 18 8.6709 18C7.5709 18 6.6709 18.9 6.6709 20H5.6709C4.0109 20 2.6709 18.66 2.6709 17V14H13.6709C14.7709 14 15.6709 13.1 15.6709 12V5H17.5109C18.2309 5 18.8909 5.39001 19.2509 6.01001L20.9609 9H19.6709C19.1209 9 18.6709 9.45 18.6709 10V13C18.6709 13.55 19.1209 14 19.6709 14H22.6709Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M8.6709 22C9.77547 22 10.6709 21.1046 10.6709 20C10.6709 18.8954 9.77547 18 8.6709 18C7.56633 18 6.6709 18.8954 6.6709 20C6.6709 21.1046 7.56633 22 8.6709 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M16.6709 22C17.7755 22 18.6709 21.1046 18.6709 20C18.6709 18.8954 17.7755 18 16.6709 18C15.5663 18 14.6709 18.8954 14.6709 20C14.6709 21.1046 15.5663 22 16.6709 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22.6709 12V14H19.6709C19.1209 14 18.6709 13.55 18.6709 13V10C18.6709 9.45 19.1209 9 19.6709 9H20.9609L22.6709 12Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M9.6709 5C9.6709 6.2 9.14091 7.27 8.31091 8C7.60091 8.62 6.6809 9 5.6709 9C3.4609 9 1.6709 7.21 1.6709 5C1.6709 3.74 2.2509 2.61 3.1709 1.88C3.8609 1.33 4.7309 1 5.6709 1C7.8809 1 9.6709 2.79 9.6709 5Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5.9209 3.75V5.25L4.6709 6" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.66992 1C4.72992 1 3.85992 1.33 3.16992 1.88C2.24992 2.61 1.66992 3.74 1.66992 5C1.66992 7.21 3.45992 9 5.66992 9C6.67992 9 7.59994 8.62 8.30994 8C9.13994 7.27 9.66992 6.2 9.66992 5C9.66992 2.79 7.87992 1 5.66992 1ZM6.66992 5.25C6.66992 5.51 6.52994 5.76001 6.30994 5.89001L5.05994 6.64001C4.93994 6.71001 4.80993 6.75 4.67993 6.75C4.42993 6.75 4.17992 6.62001 4.03992 6.39001C3.82992 6.03001 3.93993 5.56999 4.29993 5.35999L5.18994 4.83002V3.75C5.18994 3.34 5.52994 3 5.93994 3C6.34994 3 6.68994 3.34 6.68994 3.75V5.25H6.66992Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.6699 3V12C15.6699 13.1 14.7699 14 13.6699 14H2.66992V7.62C3.39992 8.49 4.51995 9.03 5.75995 9C6.76995 8.98 7.67992 8.59 8.35992 7.94C8.66992 7.68 8.92994 7.34999 9.12994 6.98999C9.48994 6.37999 9.68992 5.65997 9.66992 4.90997C9.63992 3.73997 9.11994 2.71 8.30994 2H14.6699C15.2199 2 15.6699 2.45 15.6699 3Z" fill="currentColor" /><path d="M22.6699 14V17C22.6699 18.66 21.3299 20 19.6699 20H18.6699C18.6699 18.9 17.7699 18 16.6699 18C15.5699 18 14.6699 18.9 14.6699 20H10.6699C10.6699 18.9 9.76992 18 8.66992 18C7.56992 18 6.66992 18.9 6.66992 20H5.66992C4.00992 20 2.66992 18.66 2.66992 17V14H13.6699C14.7699 14 15.6699 13.1 15.6699 12V5H17.5099C18.2299 5 18.8899 5.39001 19.2499 6.01001L20.9599 9H19.6699C19.1199 9 18.6699 9.45 18.6699 10V13C18.6699 13.55 19.1199 14 19.6699 14H22.6699Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M8.66992 22C9.77449 22 10.6699 21.1046 10.6699 20C10.6699 18.8954 9.77449 18 8.66992 18C7.56535 18 6.66992 18.8954 6.66992 20C6.66992 21.1046 7.56535 22 8.66992 22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.6699 22C17.7745 22 18.6699 21.1046 18.6699 20C18.6699 18.8954 17.7745 18 16.6699 18C15.5654 18 14.6699 18.8954 14.6699 20C14.6699 21.1046 15.5654 22 16.6699 22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22.6699 12.53V14H19.6699C19.1199 14 18.6699 13.55 18.6699 13V10C18.6699 9.45 19.1199 9 19.6699 9H20.9599L22.4099 11.54C22.5799 11.84 22.6699 12.18 22.6699 12.53Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.1709 15.5C22.4509 15.5 22.6709 15.72 22.6709 16V17C22.6709 18.66 21.3309 20 19.6709 20C19.6709 18.35 18.3209 17 16.6709 17C15.0209 17 13.6709 18.35 13.6709 20H11.6709C11.6709 18.35 10.3209 17 8.6709 17C7.0209 17 5.6709 18.35 5.6709 20C4.0109 20 2.6709 18.66 2.6709 17V15C2.6709 14.45 3.1209 14 3.6709 14H13.1709C14.5509 14 15.6709 12.88 15.6709 11.5V6C15.6709 5.45 16.1209 5 16.6709 5H17.5109C18.2309 5 18.8909 5.39 19.2509 6.01L19.8909 7.13C19.9809 7.29 19.8609 7.5 19.6709 7.5C18.2909 7.5 17.1709 8.62 17.1709 10V13C17.1709 14.38 18.2909 15.5 19.6709 15.5H22.1709Z" fill="currentColor" /><path d="M8.6709 22C9.77547 22 10.6709 21.1046 10.6709 20C10.6709 18.8954 9.77547 18 8.6709 18C7.56633 18 6.6709 18.8954 6.6709 20C6.6709 21.1046 7.56633 22 8.6709 22Z" fill="currentColor" /><path d="M16.6709 22C17.7755 22 18.6709 21.1046 18.6709 20C18.6709 18.8954 17.7755 18 16.6709 18C15.5663 18 14.6709 18.8954 14.6709 20C14.6709 21.1046 15.5663 22 16.6709 22Z" fill="currentColor" /><path d="M22.6709 12.53V14H19.6709C19.1209 14 18.6709 13.55 18.6709 13V10C18.6709 9.45 19.1209 9 19.6709 9H20.9609L22.4109 11.54C22.5809 11.84 22.6709 12.18 22.6709 12.53Z" fill="currentColor" /><path d="M13.7509 2H6.3609C4.3209 2 2.6709 3.65 2.6709 5.69V12.08C2.6709 12.63 3.1209 13.08 3.6709 13.08H12.8209C13.8409 13.08 14.6709 12.25 14.6709 11.23V2.92C14.6709 2.41 14.2609 2 13.7509 2ZM10.0509 7.91C10.0509 8.17 9.9109 8.42 9.6909 8.55L8.4409 9.3C8.3109 9.38 8.1809 9.41 8.0509 9.41C7.8009 9.41 7.5509 9.28 7.4109 9.05C7.1909 8.69 7.3109 8.23 7.6609 8.02L8.5509 7.49V6.41C8.5509 6 8.8909 5.66 9.3009 5.66C9.7109 5.66 10.0509 6 10.0509 6.41V7.91Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTruckTime as IconComponent).keywords = [
  "truck",
  "time",
  "hand truck",
  "motortruck",
  "tractor-trailer",
  "lorry",
  "semi-trailer",
  "flatbed",
  "van",
  "truckload",
  "cartage",
  "fourth dimension",
  "clock",
  "meter",
  "clip",
  "sentence",
  "clock time",
  "prison term",
  "space-time",
  "momentum"
];

export default IconTruckTime as IconComponent;