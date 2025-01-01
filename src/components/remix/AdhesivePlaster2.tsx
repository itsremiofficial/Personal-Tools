import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconAdhesivePlaster2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.4155 12.7653L11.235 3.58471C9.12233 1.47209 5.69709 1.47209 3.58447 3.58471C1.47184 5.69733 1.47184 9.12257 3.58447 11.2352L12.765 20.4158C14.8777 22.5284 18.3029 22.5284 20.4155 20.4158C22.5282 18.3032 22.5282 14.8779 20.4155 12.7653Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M12.7651 20.4158L20.4155 12.7653M11.235 3.58472L3.58447 11.2352" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><circle cx="9.17154" cy="12.0002" r="1" transform="rotate(-45 9.17154 12.0002)" fill="currentColor" /><circle cx="12" cy="14.8287" r="1" transform="rotate(-45 12 14.8287)" fill="currentColor" /><circle cx="12" cy="9.17181" r="1" transform="rotate(-45 12 9.17181)" fill="currentColor" /><circle cx="14.8284" cy="12.0002" r="1" transform="rotate(-45 14.8284 12.0002)" fill="currentColor" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M20.4155 12.7653L11.235 3.58471C9.12233 1.47209 5.69709 1.47209 3.58447 3.58471C1.47184 5.69733 1.47184 9.12257 3.58447 11.2352L12.765 20.4158C14.8777 22.5284 18.3029 22.5284 20.4155 20.4158C22.5282 18.3032 22.5282 14.8779 20.4155 12.7653Z" fill="currentColor" /><path d="M19.885 12.2348L20.4156 12.7653C20.5955 12.9452 20.76 13.1346 20.9092 13.3319L13.3316 20.9095C13.1344 20.7603 12.945 20.5957 12.7651 20.4158L12.2345 19.8853L19.885 12.2348C19.8851 12.2347 19.8849 12.2349 19.885 12.2348Z" fill="currentColor" /><path d="M10.6679 3.0907C10.8654 3.24005 11.055 3.40474 11.235 3.58477L11.7651 4.11486C11.765 4.11494 11.7652 4.11478 11.7651 4.11486L4.11462 11.7653L3.58452 11.2353C3.40449 11.0552 3.2398 10.8657 3.09045 10.6682L10.6679 3.0907Z" fill="currentColor" /><circle cx="9.17154" cy="12.0002" r="1" transform="rotate(-45 9.17154 12.0002)" fill="currentColor" /><circle cx="12" cy="14.8286" r="1" transform="rotate(-45 12 14.8286)" fill="currentColor" /><circle cx="12" cy="9.17188" r="1" transform="rotate(-45 12 9.17188)" fill="currentColor" /><circle cx="14.8284" cy="12.0002" r="1" transform="rotate(-45 14.8284 12.0002)" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.9094 13.3321L13.3319 20.9096C15.4517 22.5131 18.4829 22.3484 20.4155 20.4158C22.3482 18.4831 22.5128 15.4519 20.9094 13.3321Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12.2347 19.8855L19.8852 12.235L11.7653 4.11505L4.1148 11.7655L12.2347 19.8855ZM9.87864 11.2931C10.2692 11.6837 10.2692 12.3168 9.87864 12.7074C9.48812 13.0979 8.85496 13.0979 8.46443 12.7074C8.07391 12.3168 8.07391 11.6837 8.46443 11.2931C8.85496 10.9026 9.48812 10.9026 9.87864 11.2931ZM12.7073 15.5357C13.0978 15.1452 13.0978 14.512 12.7073 14.1215C12.3167 13.731 11.6836 13.731 11.293 14.1215C10.9025 14.512 10.9025 15.1452 11.293 15.5357C11.6836 15.9262 12.3167 15.9262 12.7073 15.5357ZM12.7073 8.46477C13.0978 8.85529 13.0978 9.48846 12.7073 9.87898C12.3167 10.2695 11.6836 10.2695 11.293 9.87898C10.9025 9.48846 10.9025 8.85529 11.293 8.46477C11.6836 8.07424 12.3167 8.07424 12.7073 8.46477ZM15.5354 12.7074C15.9259 12.3168 15.9259 11.6837 15.5354 11.2931C15.1449 10.9026 14.5117 10.9026 14.1212 11.2931C13.7306 11.6837 13.7306 12.3168 14.1212 12.7074C14.5117 13.0979 15.1449 13.0979 15.5354 12.7074Z" fill="currentColor" /><path d="M3.09061 10.6684L10.6682 3.09085C8.54835 1.48742 5.51714 1.65204 3.58447 3.58471C1.65179 5.51739 1.48717 8.54859 3.09061 10.6684Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAdhesivePlaster2 as IconComponentType).keywords = [
  "adhesive",
  "plaster",
  "2",
  "agglutinative",
  "gluey",
  "glutinous",
  "viscid",
  "viscous",
  "pasty",
  "agglutinate",
  "gooey",
  "sticky",
  "plaster of paris",
  "daub",
  "sticking plaster",
  "poultice",
  "cataplasm",
  "adhesive plaster",
  "plaster over",
  "stick on",
  "gypsum",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out"
];

export default IconAdhesivePlaster2 as IconComponentType;