import { FC } from 'react';
import { IconProps } from "../../types";

const IconMaximize1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.98V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M13 11.0005L18.01 5.98047H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.0098 5.98047V9.99047" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path opacity={duotone ? "0.4" : "1"} d="M11 16.15V18.85C11 21.1 10.1 22 7.85 22H5.15C2.9 22 2 21.1 2 18.85V16.15C2 13.9 2.9 13 5.15 13H7.85C10.1 13 11 13.9 11 16.15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M10.5 8.81006H6C5.59 8.81006 5.25 8.47006 5.25 8.06006C5.25 7.65006 5.59 7.31006 6 7.31006H10.5C10.91 7.31006 11.25 7.65006 11.25 8.06006C11.25 8.47006 10.91 8.81006 10.5 8.81006Z" fill="currentColor" /><path d="M18 14.8101H13.5C13.09 14.8101 12.75 14.4701 12.75 14.0601C12.75 13.6501 13.09 13.3101 13.5 13.3101H18C18.41 13.3101 18.75 13.6501 18.75 14.0601C18.75 14.4701 18.41 14.8101 18 14.8101Z" fill="currentColor" /><path d="M18 18.5601H13.5C13.09 18.5601 12.75 18.2201 12.75 17.8101C12.75 17.4001 13.09 17.0601 13.5 17.0601H18C18.41 17.0601 18.75 17.4001 18.75 17.8101C18.75 18.2201 18.41 18.5601 18 18.5601Z" fill="currentColor" /><path d="M18 7.31006H16.52V5.81006C16.52 5.40006 16.18 5.06006 15.77 5.06006C15.36 5.06006 15.02 5.40006 15.02 5.81006V7.31006H13.5C13.09 7.31006 12.75 7.65006 12.75 8.06006C12.75 8.47006 13.09 8.81006 13.5 8.81006H15.02V10.3101C15.02 10.7201 15.36 11.0601 15.77 11.0601C16.18 11.0601 16.52 10.7201 16.52 10.3101V8.81006H18C18.41 8.81006 18.75 8.47006 18.75 8.06006C18.75 7.65006 18.41 7.31006 18 7.31006Z" fill="currentColor" /><path d="M9.30945 15.9399L11.0295 14.2199C11.3195 13.9299 11.3195 13.4499 11.0295 13.1599C10.7395 12.8699 10.2595 12.8699 9.96945 13.1599L8.24945 14.8799L6.52945 13.1599C6.23945 12.8699 5.75945 12.8699 5.46945 13.1599C5.17945 13.4499 5.17945 13.9299 5.46945 14.2199L7.18945 15.9399L5.46945 17.6599C5.17945 17.9499 5.17945 18.4299 5.46945 18.7199C5.61945 18.8699 5.80945 18.9399 5.99945 18.9399C6.18945 18.9399 6.37945 18.8699 6.52945 18.7199L8.24945 16.9999L9.96945 18.7199C10.1195 18.8699 10.3095 18.9399 10.4995 18.9399C10.6895 18.9399 10.8795 18.8699 11.0295 18.7199C11.3195 18.4299 11.3195 17.9499 11.0295 17.6599L9.30945 15.9399Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMaximize1;