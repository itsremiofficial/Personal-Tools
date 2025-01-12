import { FC } from 'react';

const IconReceived: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.66992 17.5L19.6699 3.5" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.66992 7.22998V17.5H15.9399" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M4.16992 22H21.1699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.67031 18.2C5.47031 18.2 5.27031 18.1 5.17031 18C4.87031 17.7 4.87031 17.2 5.17031 16.9L19.1703 2.90005C19.4703 2.60005 19.9703 2.60005 20.2703 2.90005C20.5703 3.20005 20.5703 3.70005 20.2703 4.00005L6.27031 18C6.07031 18.2 5.87031 18.2 5.67031 18.2Z" fill="currentColor" /><path d="M15.9701 18.2H5.67012C5.27012 18.2 4.87012 17.9 4.87012 17.4V7.20002C4.87012 6.80002 5.17012 6.40002 5.67012 6.40002C6.17012 6.40002 6.47012 6.70002 6.47012 7.20002V16.7H15.9701C16.3701 16.7 16.7701 17 16.7701 17.5C16.7701 18 16.3701 18.2 15.9701 18.2Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.1701 22.7999H4.17012C3.77012 22.7999 3.37012 22.5 3.37012 22C3.37012 21.5 3.67012 21.2 4.17012 21.2H21.1701C21.5701 21.2 21.9701 21.5 21.9701 22C21.9701 22.5 21.5701 22.7999 21.1701 22.7999Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.37992 18.1899C5.47992 18.2299 5.56992 18.2499 5.66992 18.2499H15.9399C16.3499 18.2499 16.6899 17.9099 16.6899 17.4999C16.6899 17.0899 16.3499 16.7499 15.9399 16.7499H7.47992L20.1999 4.02994C20.4899 3.73994 20.4899 3.25994 20.1999 2.96994C19.9099 2.67994 19.4299 2.67994 19.1399 2.96994L6.41992 15.6899V7.22994C6.41992 6.81994 6.07992 6.47994 5.66992 6.47994C5.25992 6.47994 4.91992 6.81994 4.91992 7.22994V17.4999C4.91992 17.5999 4.93992 17.6899 4.97992 17.7899C5.04992 17.9699 5.19992 18.1199 5.37992 18.1899Z" fill="currentColor" /><path d="M21.1699 21.25H4.16992C3.75992 21.25 3.41992 21.59 3.41992 22C3.41992 22.41 3.75992 22.75 4.16992 22.75H21.1699C21.5799 22.75 21.9199 22.41 21.9199 22C21.9199 21.59 21.5799 21.25 21.1699 21.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconReceived as IconComponent).keywords = [
  "received",
  "accepted",
  "acceptable",
  "prescriptive",
  "normative",
  "conventional",
  "standard",
  "acknowledged",
  "acceptance",
  "accepting"
];

export default IconReceived as IconComponent;