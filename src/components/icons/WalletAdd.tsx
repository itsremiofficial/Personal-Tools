import { FC } from 'react';
import { IconProps } from "../../types";

const IconWalletAdd1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M14.2617 15.4385H9.26172" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.7617 12.998V17.998" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M12.6609 2.51814L12.6309 2.58814L9.73094 9.31814H6.88094C6.20094 9.31814 5.55094 9.45814 4.96094 9.70814L6.71094 5.52814L6.75094 5.42814L6.82094 5.26814C6.84094 5.20814 6.86094 5.14814 6.89094 5.09814C8.20094 2.06814 9.68094 1.37814 12.6609 2.51814Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.0505 9.51807C17.6005 9.37807 17.1205 9.31807 16.6405 9.31807H9.73047L12.6305 2.58807L12.6605 2.51807C12.8105 2.56807 12.9505 2.63807 13.1005 2.69807L15.3105 3.62807C16.5405 4.13807 17.4005 4.66807 17.9205 5.30807C18.0205 5.42807 18.1005 5.53807 18.1705 5.66807C18.2605 5.80807 18.3305 5.94807 18.3705 6.09807C18.4105 6.18807 18.4405 6.27807 18.4605 6.35807C18.7305 7.19807 18.5705 8.22807 18.0505 9.51807Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.5217 14.1984V16.1484C21.5217 16.3484 21.5117 16.5484 21.5017 16.7484C21.3117 20.2384 19.3617 21.9984 15.6617 21.9984H7.86172C7.62172 21.9984 7.38172 21.9784 7.15172 21.9484C3.97172 21.7384 2.27172 20.0384 2.06172 16.8584C2.03172 16.6284 2.01172 16.3884 2.01172 16.1484V14.1984C2.01172 12.1884 3.23172 10.4584 4.97172 9.70836C5.57172 9.45836 6.21172 9.31836 6.89172 9.31836H16.6517C17.1417 9.31836 17.6217 9.38836 18.0617 9.51836C20.0517 10.1284 21.5217 11.9884 21.5217 14.1984Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.71 5.52832L4.96 9.70832C3.22 10.4583 2 12.1883 2 14.1983V11.2683C2 8.42832 4.02 6.05832 6.71 5.52832Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M21.5186 11.2677V14.1977C21.5186 11.9977 20.0586 10.1277 18.0586 9.52766C18.5786 8.22766 18.7286 7.20766 18.4786 6.35766C18.4586 6.26766 18.4286 6.17766 18.3886 6.09766C20.2486 7.05766 21.5186 9.02766 21.5186 11.2677Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.7495 7.04997C17.5095 7.00997 17.2595 6.99998 16.9995 6.99998H6.99945C6.71945 6.99998 6.44945 7.01998 6.18945 7.05998C6.32945 6.77998 6.52945 6.52001 6.76945 6.28001L10.0195 3.02C11.3895 1.66 13.6095 1.66 14.9795 3.02L16.7295 4.78996C17.3695 5.41996 17.7095 6.21997 17.7495 7.04997Z" fill="currentColor" /><path d="M5 15C2.79 15 1 16.79 1 19C1 19.75 1.21 20.46 1.58 21.06C2.27 22.22 3.54 23 5 23C6.46 23 7.73 22.22 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15ZM6.49 19.73H5.75V20.51C5.75 20.92 5.41 21.26 5 21.26C4.59 21.26 4.25 20.92 4.25 20.51V19.73H3.51C3.1 19.73 2.76 19.39 2.76 18.98C2.76 18.57 3.1 18.23 3.51 18.23H4.25V17.52C4.25 17.11 4.59 16.77 5 16.77C5.41 16.77 5.75 17.11 5.75 17.52V18.23H6.49C6.9 18.23 7.24 18.57 7.24 18.98C7.24 19.39 6.91 19.73 6.49 19.73Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22 12V17C22 20 20 22 17 22H7.63C7.94 21.74 8.21 21.42 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C3.8 15 2.73 15.53 2 16.36V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12Z" fill="currentColor" /><path d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconWalletAdd1;