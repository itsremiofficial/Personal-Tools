import { FC } from 'react';
import { IconProps } from "../../types";

const IconVolumeCross: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7.00077V11.0008C1 13.0008 2 14.0008 4 14.0008H5.43C5.8 14.0008 6.17 14.1108 6.49 14.3008L9.41 16.1308C11.93 17.7108 14 16.5608 14 13.5908V4.41077C14 1.43077 11.93 0.290766 9.41 1.87077L6.49 3.70077C6.17 3.89077 5.8 4.00077 5.43 4.00077H4C2 4.00077 1 5.00077 1 7.00077Z" stroke="currentColor" strokeWidth="1.5" /><g opacity={duotone ? "0.4" : "1"}><path d="M20.9991 10.961L17.0391 7.00098" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M20.96 7.04102L17 11.001" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="currentColor" /><path d="M6 14.8901C5.59 14.8901 5.25 14.5501 5.25 14.1401V9.8501C5.25 9.4401 5.59 9.1001 6 9.1001C6.41 9.1001 6.75 9.4401 6.75 9.8501V14.1401C6.75 14.5601 6.41 14.8901 6 14.8901Z" fill="currentColor" /><path d="M9 16.3202C8.59 16.3202 8.25 15.9802 8.25 15.5702V8.43018C8.25 8.02018 8.59 7.68018 9 7.68018C9.41 7.68018 9.75 8.02018 9.75 8.43018V15.5702C9.75 15.9902 9.41 16.3202 9 16.3202Z" fill="currentColor" /><path d="M12 17.75C11.59 17.75 11.25 17.41 11.25 17V7C11.25 6.59 11.59 6.25 12 6.25C12.41 6.25 12.75 6.59 12.75 7V17C12.75 17.41 12.41 17.75 12 17.75Z" fill="currentColor" /><path d="M15 16.3202C14.59 16.3202 14.25 15.9802 14.25 15.5702V8.43018C14.25 8.02018 14.59 7.68018 15 7.68018C15.41 7.68018 15.75 8.02018 15.75 8.43018V15.5702C15.75 15.9902 15.41 16.3202 15 16.3202Z" fill="currentColor" /><path d="M18 14.8901C17.59 14.8901 17.25 14.5501 17.25 14.1401V9.8501C17.25 9.4401 17.59 9.1001 18 9.1001C18.41 9.1001 18.75 9.4401 18.75 9.8501V14.1401C18.75 14.5601 18.41 14.8901 18 14.8901Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconVolumeCross;