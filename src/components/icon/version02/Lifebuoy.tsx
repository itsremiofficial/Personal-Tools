import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconLifebuoy: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6396 22C18.1625 22 22.6396 17.5228 22.6396 12C22.6396 6.47715 18.1625 2 12.6396 2C7.1168 2 2.63965 6.47715 2.63965 12C2.63965 17.5228 7.1168 22 12.6396 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 16.5C15.1552 16.5 17.1699 14.4853 17.1699 12C17.1699 9.51472 15.1552 7.5 12.6699 7.5C10.1846 7.5 8.16992 9.51472 8.16992 12C8.16992 14.4853 10.1846 16.5 12.6699 16.5Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5.57031 4.92993L9.11031 8.45993" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5.57031 19.07L9.11031 15.54" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M19.7197 19.07L16.1797 15.54" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M19.7197 4.92993L16.1797 8.45993" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.6396 12C22.6396 14.49 21.7296 16.77 20.2196 18.52C19.8896 18.9 19.5396 19.26 19.1596 19.57C17.4196 21.09 15.1396 22 12.6396 22C10.1496 22 7.86965 21.09 6.11965 19.58C5.73965 19.25 5.38965 18.9 5.05965 18.52C3.54965 16.77 2.63965 14.49 2.63965 12C2.63965 9.51 3.54965 7.23 5.06965 5.48C5.38965 5.1 5.74965 4.74 6.12965 4.42C7.87965 2.91 10.1496 2 12.6396 2C15.1396 2 17.4196 2.91 19.1596 4.43C19.5396 4.75 19.8996 5.1 20.2196 5.49C21.7296 7.24 22.6396 9.51 22.6396 12Z" fill="currentColor" /><path d="M16.3196 14.6199L20.2196 18.5199C19.8896 18.8999 19.5396 19.2599 19.1596 19.5699L15.2596 15.6699C14.5196 16.1899 13.6296 16.4999 12.6696 16.4999C11.6896 16.4999 10.7896 16.1799 10.0496 15.6499L6.11957 19.5799C5.73957 19.2499 5.38957 18.8999 5.05957 18.5199L8.99957 14.5899C8.47957 13.8499 8.16957 12.9599 8.16957 11.9999C8.16957 11.0399 8.47957 10.1499 8.99957 9.40992L5.06957 5.47992C5.38957 5.09992 5.74957 4.73992 6.12957 4.41992L10.0496 8.34992C10.7896 7.81992 11.6896 7.49992 12.6696 7.49992C13.6296 7.49992 14.5196 7.80992 15.2596 8.32992L19.1596 4.42992C19.5396 4.74992 19.8996 5.09992 20.2196 5.48992L16.3196 9.37992C16.8496 10.1199 17.1696 11.0199 17.1696 11.9999C17.1696 12.9799 16.8496 13.8799 16.3196 14.6199Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.16965 12C8.16965 11.3369 8.31756 10.7071 8.58042 10.1372C8.78393 9.69593 8.74891 9.15924 8.40531 8.81564L5.82824 6.23857C5.41818 5.82851 4.74206 5.85004 4.41107 6.32622C3.29063 7.93817 2.63965 9.89396 2.63965 12C2.63965 14.1044 3.28961 16.0587 4.40242 17.67C4.73243 18.1478 5.40958 18.1709 5.82072 17.7608L8.40378 15.1843C8.74816 14.8408 8.78357 14.3035 8.57997 13.8618C8.31739 13.2921 8.16965 12.6627 8.16965 12Z" fill="currentColor" /><path d="M12.6699 7.5C13.333 7.5 13.9627 7.64791 14.5327 7.91078C14.9739 8.11428 15.5106 8.07926 15.8542 7.73566L18.4034 5.18643C18.8127 4.77717 18.7922 4.10256 18.3175 3.77141C16.7114 2.65097 14.7543 2 12.6399 2C10.5357 2 8.5886 2.64985 6.97966 3.76248C6.50204 4.09277 6.47893 4.76993 6.88902 5.18107L9.45009 7.74868C9.79599 8.09546 10.338 8.12873 10.7815 7.92105C11.3554 7.6524 11.9936 7.5 12.6699 7.5Z" fill="currentColor" /><path d="M20.5604 5.90608C20.3827 5.67646 20.0453 5.66451 19.8398 5.86955L16.621 9.08009C16.4476 9.25304 16.4277 9.52474 16.5516 9.73598C16.942 10.4014 17.1703 11.1722 17.1703 12C17.1703 12.828 16.9419 13.5989 16.5513 14.2645C16.4275 14.4755 16.4472 14.7469 16.6202 14.9199L19.8398 18.1395C20.0453 18.3449 20.383 18.3332 20.5608 18.1033C21.866 16.415 22.6403 14.2968 22.6403 12C22.6403 9.70296 21.8659 7.59315 20.5604 5.90608Z" fill="currentColor" /><path d="M12.6701 16.4999C11.8421 16.4999 11.0712 16.2715 10.4056 15.8809C10.1946 15.7571 9.92323 15.7768 9.75022 15.9498L6.50066 19.1994C6.29517 19.4049 6.30691 19.7426 6.53682 19.9204C8.22514 21.2256 10.3433 21.9999 12.6401 21.9999C14.9473 21.9999 17.067 21.2249 18.7479 19.9107C18.9759 19.7324 18.9865 19.3963 18.7819 19.1917L15.5573 15.9671C15.3855 15.7953 15.1164 15.7745 14.906 15.8959C14.2429 16.2785 13.4815 16.4999 12.6701 16.4999Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLifebuoy as IconComponentType).keywords = [
  "lifebuoy",
  "lifeline",
  "lap",
  "circle",
  "life-buoy",
  "life buoy",
  "lifebelt",
  "buoy",
  "safety buoy",
  "life ring"
];

export default IconLifebuoy as IconComponentType;