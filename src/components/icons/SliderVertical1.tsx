import { FC } from 'react';
import { IconProps } from "../../types";

const IconSmallcaps: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.99023 5.92982V4.41982C1.99023 3.39982 2.82023 2.56982 3.84023 2.56982H16.7602C17.7802 2.56982 18.6102 3.39982 18.6102 4.41982V5.92982" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.3008 18.0998V3.31982" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.90039 18.1001H12.4804" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M13.6797 10.3398H20.6897C21.4197 10.3398 22.0097 10.9298 22.0097 11.6598V12.4598" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.0801 21.4301V10.8701" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.9395 21.4297H18.2195" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18.9405 3.5H5.06055C4.65055 3.5 4.31055 3.16 4.31055 2.75C4.31055 2.34 4.65055 2 5.06055 2H18.9405C19.3505 2 19.6905 2.34 19.6905 2.75C19.6905 3.16 19.3505 3.5 18.9405 3.5Z" fill="currentColor" /><path d="M18.9405 22H5.06055C4.65055 22 4.31055 21.66 4.31055 21.25C4.31055 20.84 4.65055 20.5 5.06055 20.5H18.9405C19.3505 20.5 19.6905 20.84 19.6905 21.25C19.6905 21.66 19.3505 22 18.9405 22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M2.75 7.6001V16.4001C2.75 18.0601 4.09 19.4001 5.75 19.4001H18.25C19.91 19.4001 21.25 18.0601 21.25 16.4001V7.6001C21.25 5.9401 19.91 4.6001 18.25 4.6001H5.75C4.09 4.6001 2.75 5.9401 2.75 7.6001Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSmallcaps;