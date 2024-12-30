import { FC } from 'react';
import { IconProps } from "../../types";

const IconCardPos: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M3.92969 15.8792L15.8797 3.9292" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.1016 18.2791L12.3016 17.0791" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M13.793 15.5887L16.183 13.1987" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M3.60127 10.239L10.2413 3.599C12.3613 1.479 13.4213 1.469 15.5213 3.569L20.4313 8.479C22.5313 10.579 22.5213 11.639 20.4013 13.759L13.7613 20.399C11.6413 22.519 10.5813 22.529 8.48127 20.429L3.57127 15.519C1.47127 13.419 1.47127 12.369 3.60127 10.239Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 21.9985H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.1796 13.66C22.0296 12.01 21.5896 10.25 18.3796 10.25H5.6196C2.4096 10.25 1.9796 12.01 1.8196 13.66L1.2596 19.75C1.1896 20.51 1.4396 21.27 1.9596 21.84C2.4896 22.42 3.2396 22.75 4.0396 22.75H5.9196C7.5396 22.75 7.8496 21.82 8.0496 21.21L8.2496 20.61C8.4796 19.92 8.5396 19.75 9.4396 19.75H14.5596C15.4596 19.75 15.4896 19.85 15.7496 20.61L15.9496 21.21C16.1496 21.82 16.4596 22.75 18.0796 22.75H19.9596C20.7496 22.75 21.5096 22.42 22.0396 21.84C22.5596 21.27 22.8096 20.51 22.7396 19.75L22.1796 13.66Z" fill="currentColor" /><path d="M21 7.25008H20C19.99 7.25008 19.99 7.25008 19.98 7.25008L19.6 5.44008C19.24 3.69008 18.49 2.08008 15.51 2.08008H12.75H11.25H8.49C5.51 2.08008 4.76 3.69008 4.4 5.44008L4.02 7.25008C4.01 7.25008 4.01 7.25008 4 7.25008H3C2.59 7.25008 2.25 7.59008 2.25 8.00008C2.25 8.41008 2.59 8.75008 3 8.75008H3.71L3.29 10.7501C3.83 10.4401 4.58 10.2501 5.62 10.2501H18.38C19.42 10.2501 20.17 10.4401 20.71 10.7501L20.29 8.75008H21C21.41 8.75008 21.75 8.41008 21.75 8.00008C21.75 7.59008 21.41 7.25008 21 7.25008Z" fill="currentColor" /><path d="M9 15.75H6C5.59 15.75 5.25 15.41 5.25 15C5.25 14.59 5.59 14.25 6 14.25H9C9.41 14.25 9.75 14.59 9.75 15C9.75 15.41 9.41 15.75 9 15.75Z" fill="currentColor" /><path d="M18 15.75H15C14.59 15.75 14.25 15.41 14.25 15C14.25 14.59 14.59 14.25 15 14.25H18C18.41 14.25 18.75 14.59 18.75 15C18.75 15.41 18.41 15.75 18 15.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconCardPos;