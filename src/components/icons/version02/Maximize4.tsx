import { FC } from 'react';

const IconMaximize4: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.66992 15V21H9.66992" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M21.6699 9V3H15.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M21.6699 3L14.1699 10.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g><path d="M11.1699 13.5L3.66992 21" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2Z" fill="currentColor" /><path d="M19.3599 5.71C19.2799 5.53 19.1399 5.38 18.9499 5.3C18.8599 5.27 18.7699 5.25 18.6699 5.25H14.6699C14.2599 5.25 13.9199 5.59 13.9199 6C13.9199 6.41 14.2599 6.75 14.6699 6.75H16.8599L13.1399 10.47C12.8499 10.76 12.8499 11.24 13.1399 11.53C13.2899 11.68 13.4799 11.75 13.6699 11.75C13.8599 11.75 14.0499 11.68 14.1999 11.53L17.9199 7.81V10C17.9199 10.41 18.2599 10.75 18.6699 10.75C19.0799 10.75 19.4199 10.41 19.4199 10V6C19.4199 5.9 19.3999 5.81 19.3599 5.71Z" fill="currentColor" /><path d="M12.1999 12.4699C11.9099 12.1799 11.4299 12.1799 11.1399 12.4699L7.41992 16.1899V13.9999C7.41992 13.5899 7.07992 13.2499 6.66992 13.2499C6.25992 13.2499 5.91992 13.5899 5.91992 13.9999V17.9999C5.91992 18.0999 5.93992 18.1899 5.97992 18.2899C6.05992 18.4699 6.19992 18.6199 6.38992 18.6999C6.46992 18.7299 6.56992 18.7499 6.66992 18.7499H10.6699C11.0799 18.7499 11.4199 18.4099 11.4199 17.9999C11.4199 17.5899 11.0799 17.2499 10.6699 17.2499H8.47992L12.1999 13.5299C12.4899 13.2399 12.4899 12.7599 12.1999 12.4699Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM12.1999 13.53L8.47992 17.25H10.6699C11.0799 17.25 11.4199 17.59 11.4199 18C11.4199 18.41 11.0799 18.75 10.6699 18.75H6.66992C6.56992 18.75 6.46992 18.73 6.37992 18.69C6.19992 18.61 6.04992 18.47 5.96992 18.28C5.93992 18.19 5.91992 18.1 5.91992 18V14C5.91992 13.59 6.25992 13.25 6.66992 13.25C7.07992 13.25 7.41992 13.59 7.41992 14V16.19L11.1399 12.47C11.4299 12.18 11.9099 12.18 12.1999 12.47C12.4899 12.76 12.4899 13.24 12.1999 13.53ZM19.4199 10C19.4199 10.41 19.0799 10.75 18.6699 10.75C18.2599 10.75 17.9199 10.41 17.9199 10V7.81L14.1999 11.53C14.0499 11.68 13.8599 11.75 13.6699 11.75C13.4799 11.75 13.2899 11.68 13.1399 11.53C12.8499 11.24 12.8499 10.76 13.1399 10.47L16.8599 6.75H14.6699C14.2599 6.75 13.9199 6.41 13.9199 6C13.9199 5.59 14.2599 5.25 14.6699 5.25H18.6699C18.7699 5.25 18.8599 5.27 18.9599 5.31C19.1399 5.39 19.2899 5.53 19.3699 5.72C19.3999 5.81 19.4199 5.9 19.4199 6V10Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMaximize4 as IconComponent).keywords = [
  "maximize",
  "4",
  "max",
  "maximum",
  "maximal",
  "optimum",
  "broaden",
  "optimal",
  "maximisation",
  "maximise",
  "optimizing",
  "dh",
  "f4f"
];

export default IconMaximize4 as IconComponent;