import { FC } from 'react';

const IconFilters: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8Z" stroke="currentColor" strokeWidth={width} /><path d="M6.5 10.189C3.91216 10.855 2 13.2042 2 15.9999C2 19.3136 4.68629 21.9999 8 21.9999C11.3137 21.9999 14 19.3136 14 15.9999C14 15.2452 13.8607 14.5231 13.6063 13.8578" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M12 20.4722C13.0615 21.4222 14.4633 21.9999 16 21.9999C19.3137 21.9999 22 19.3136 22 15.9999C22 13.2042 20.0878 10.855 17.5 10.189" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8Z" fill="currentColor" /><path opacity={duotone ? "0.7" : "1"} d="M13.5798 13.7899C13.0765 13.9269 12.5468 14 12 14C9.46679 14 7.30024 12.4302 6.42018 10.2102C3.87293 10.9036 2 13.2331 2 16C2 19.3138 4.68629 22 8 22C11.3137 22 14 19.3138 14 16C14 15.2195 13.851 14.4739 13.5798 13.7899Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M13.5798 13.7896C13.851 14.4736 14 15.2193 14 15.9998C14 17.7768 13.2275 19.3734 12 20.472C13.0615 21.4221 14.4633 21.9998 16 21.9998C19.3137 21.9998 22 19.3135 22 15.9998C22 13.2329 20.1271 10.9034 17.5798 10.21C16.8897 11.9508 15.4085 13.2918 13.5798 13.7896Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8Z" fill="currentColor" /><path d="M5.03349 10.7834C3.22163 11.816 2 13.7653 2 16C2 19.3137 4.68629 22 8 22C11.3137 22 14 19.3137 14 16C14 15.7437 13.9839 15.4911 13.9527 15.2432C13.3301 15.4107 12.6755 15.5 12 15.5C8.84139 15.5 6.13882 13.5474 5.03349 10.7834Z" fill="currentColor" /><path d="M15.3866 14.6936C15.4611 15.1179 15.5 15.5544 15.5 16C15.5 18.0906 14.6446 19.9815 13.2646 21.3416C14.0849 21.7625 15.0147 22 16 22C19.3137 22 22 19.3137 22 16C22 13.7653 20.7783 11.816 18.9665 10.7834C18.2876 12.4811 17.0062 13.8726 15.3866 14.6936Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFilters as IconComponent).keywords = [
  "filters",
  "filtrate",
  "filter out",
  "percolate",
  "permeate",
  "trickle",
  "sink in",
  "strain",
  "dribble",
  "separate out"
];

export default IconFilters as IconComponent;