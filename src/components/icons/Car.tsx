import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCar: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.51 2.83008H8.49C6 2.83008 5.45 4.07008 5.13 5.59008L4 11.0001H20L18.87 5.59008C18.55 4.07008 18 2.83008 15.51 2.83008Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.9907 19.82C22.1007 20.99 21.1607 22 19.9607 22H18.0807C17.0007 22 16.8507 21.54 16.6607 20.97L16.4607 20.37C16.1807 19.55 16.0007 19 14.5607 19H9.44071C8.00071 19 7.79071 19.62 7.54071 20.37L7.34071 20.97C7.15071 21.54 7.00071 22 5.92071 22H4.04071C2.84071 22 1.90071 20.99 2.01071 19.82L2.57071 13.73C2.71071 12.23 3.00071 11 5.62071 11H18.3807C21.0007 11 21.2907 12.23 21.4307 13.73L21.9907 19.82Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M4 8H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21 8H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M12 3V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.5 5H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path opacity={duotone ? "0.4" : "1"} d="M6 15H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15 15H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.1796 13.66C22.0296 12.01 21.5896 10.25 18.3796 10.25H5.6196C2.4096 10.25 1.9796 12.01 1.8196 13.66L1.2596 19.75C1.1896 20.51 1.4396 21.27 1.9596 21.84C2.4896 22.42 3.2396 22.75 4.0396 22.75H5.9196C7.5396 22.75 7.8496 21.82 8.0496 21.21L8.2496 20.61C8.4796 19.92 8.5396 19.75 9.4396 19.75H14.5596C15.4596 19.75 15.4896 19.85 15.7496 20.61L15.9496 21.21C16.1496 21.82 16.4596 22.75 18.0796 22.75H19.9596C20.7496 22.75 21.5096 22.42 22.0396 21.84C22.5596 21.27 22.8096 20.51 22.7396 19.75L22.1796 13.66Z" fill="currentColor" /><path d="M21 7.25008H20C19.99 7.25008 19.99 7.25008 19.98 7.25008L19.6 5.44008C19.24 3.69008 18.49 2.08008 15.51 2.08008H12.75H11.25H8.49C5.51 2.08008 4.76 3.69008 4.4 5.44008L4.02 7.25008C4.01 7.25008 4.01 7.25008 4 7.25008H3C2.59 7.25008 2.25 7.59008 2.25 8.00008C2.25 8.41008 2.59 8.75008 3 8.75008H3.71L3.29 10.7501C3.83 10.4401 4.58 10.2501 5.62 10.2501H18.38C19.42 10.2501 20.17 10.4401 20.71 10.7501L20.29 8.75008H21C21.41 8.75008 21.75 8.41008 21.75 8.00008C21.75 7.59008 21.41 7.25008 21 7.25008Z" fill="currentColor" /><path d="M9 15.75H6C5.59 15.75 5.25 15.41 5.25 15C5.25 14.59 5.59 14.25 6 14.25H9C9.41 14.25 9.75 14.59 9.75 15C9.75 15.41 9.41 15.75 9 15.75Z" fill="currentColor" /><path d="M18 15.75H15C14.59 15.75 14.25 15.41 14.25 15C14.25 14.59 14.59 14.25 15 14.25H18C18.41 14.25 18.75 14.59 18.75 15C18.75 15.41 18.41 15.75 18 15.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCar as IconComponentType).keywords = [
  "car",
  "automobile",
  "motorcar",
  "cable car",
  "railroad car",
  "railcar",
  "auto",
  "gondola",
  "machine",
  "elevator car"
];

export default IconCar as IconComponentType;