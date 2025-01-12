import { FC } from 'react';

const IconShieldSlash: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M8.50977 20.0201L10.0998 21.2101C11.5098 22.2701 13.8298 22.2701 15.2398 21.2101L19.5398 18.0001C20.4898 17.2901 21.2698 15.7401 21.2698 14.5601V7.12012" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M19.6501 4.34006C19.5001 4.25006 19.3401 4.17006 19.1801 4.10006L14.1901 2.23006C13.3601 1.92006 12.0001 1.92006 11.1701 2.23006L6.17008 4.11006C5.02008 4.54006 4.08008 5.90006 4.08008 7.12006V14.5501C4.08008 15.7301 4.86008 17.2801 5.81008 17.9901L6.01008 18.1401" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22.6699 2L2.66992 22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.0297 4.63984L6.49973 18.1698L5.39973 17.3498C4.74973 16.8598 4.21973 15.7998 4.21973 14.9798V6.88984C4.21973 5.75984 5.07973 4.51984 6.12973 4.11984L11.6297 2.05984C12.1997 1.84984 13.1397 1.84984 13.7097 2.05984L19.2097 4.11984C19.4997 4.22984 19.7797 4.40984 20.0297 4.63984Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.12 6.89008V14.9801C21.12 15.8001 20.59 16.8601 19.94 17.3501L14.44 21.4601C13.46 22.1801 11.88 22.1801 10.9 21.4601L8.20996 19.4601L21.09 6.58008C21.11 6.68008 21.12 6.79008 21.12 6.89008Z" fill="currentColor" /><path d="M22.4398 2.22988C22.1398 1.92988 21.6498 1.92988 21.3498 2.22988L2.8998 20.6899C2.5998 20.9899 2.5998 21.4799 2.8998 21.7799C3.0498 21.9199 3.2398 21.9999 3.4398 21.9999C3.6398 21.9999 3.8298 21.9199 3.9798 21.7699L22.4398 3.30988C22.7498 3.00988 22.7498 2.52988 22.4398 2.22988Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.0297 4.63984L6.49973 18.1698L5.39973 17.3498C4.74973 16.8598 4.21973 15.7998 4.21973 14.9798V6.88984C4.21973 5.75984 5.07973 4.51984 6.12973 4.11984L11.6297 2.05984C12.1997 1.84984 13.1397 1.84984 13.7097 2.05984L19.2097 4.11984C19.4997 4.22984 19.7797 4.40984 20.0297 4.63984Z" fill="currentColor" /><path d="M21.1199 14.9798C21.1199 15.7998 20.5899 16.8598 19.9399 17.3498L14.4399 21.4598C13.4599 22.1798 11.8799 22.1798 10.8999 21.4598L9.13991 20.1498C8.64991 19.7898 8.59991 19.0698 9.02991 18.6398L19.4099 8.25983C20.0399 7.62983 21.1199 8.07983 21.1199 8.96983V14.9798Z" fill="currentColor" /><path d="M22.4398 2.22988C22.1398 1.92988 21.6498 1.92988 21.3498 2.22988L2.8998 20.6899C2.5998 20.9899 2.5998 21.4799 2.8998 21.7799C3.0498 21.9199 3.2398 21.9999 3.4398 21.9999C3.6398 21.9999 3.8298 21.9199 3.9798 21.7699L22.4398 3.30988C22.7498 3.00988 22.7498 2.52988 22.4398 2.22988Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconShieldSlash as IconComponent).keywords = [
  "shield",
  "slash",
  "buckler",
  "screen",
  "harbor",
  "harbour",
  "armoured",
  "armor",
  "breastplate",
  "ribbon",
  "visor",
  "flog",
  "gash",
  "lash",
  "cut",
  "slice",
  "whip",
  "thrash",
  "trounce",
  "thrash about"
];

export default IconShieldSlash as IconComponent;