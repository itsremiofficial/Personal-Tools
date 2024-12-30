import { FC } from 'react';
import { IconProps } from "../../types";

const IconAudioSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M9.62 17.3C10.7908 17.3 11.74 16.3509 11.74 15.1801C11.74 14.0092 10.7908 13.0601 9.62 13.0601C8.44915 13.0601 7.5 14.0092 7.5 15.1801C7.5 16.3509 8.44915 17.3 9.62 17.3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.7402 15.18V7.77002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.1302 6.7701L15.4702 7.55006C16.0402 7.74006 16.5002 8.38006 16.5002 8.98006V9.60005C16.5002 10.4101 15.8702 10.8601 15.1102 10.6001L12.7703 9.82008C12.2003 9.63008 11.7402 8.99009 11.7402 8.39009V7.7701C11.7402 6.9701 12.3602 6.5101 13.1302 6.7701Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.32919 18H14.6692C17.9892 18 19.3392 15.65 17.6892 12.78L16.9492 11.5C16.7692 11.19 16.4392 11 16.0792 11H7.91919C7.55919 11 7.22919 11.19 7.04919 11.5L6.30919 12.78C4.65919 15.65 6.00919 18 9.32919 18Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M8.78957 10.0001H15.2196C15.6096 10.0001 15.8496 9.58006 15.6496 9.25006L15.0096 8.15006C13.3596 5.28006 10.6396 5.28006 8.98957 8.15006L8.34957 9.25006C8.15957 9.58006 8.39957 10.0001 8.78957 10.0001Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconAudioSquare;