import { FC } from 'react';

const IconLocationTick: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.28963 8.49C6.25963 -0.169998 19.0896 -0.159997 21.0496 8.5C22.1996 13.58 19.0396 17.88 16.2696 20.54C14.2596 22.48 11.0796 22.48 9.05963 20.54C6.29963 17.88 3.13963 13.57 4.28963 8.49Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.4" : "1"} d="M9.91992 11.5L11.4199 13L15.4199 9" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.2897 8.7C20.2497 4.07 16.2097 2 12.6697 2C12.6697 2 12.6697 2 12.6597 2C9.12967 2 5.09967 4.07 4.04967 8.69C2.86967 13.85 6.02967 18.22 8.88967 20.98C9.94967 22 11.3097 22.51 12.6697 22.51C14.0297 22.51 15.3897 22 16.4397 20.98C19.2997 18.22 22.4597 13.86 21.2897 8.7Z" fill="currentColor" /><path d="M11.4204 13.7499C11.2304 13.7499 11.0404 13.6799 10.8904 13.5299L9.39035 12.0299C9.10035 11.7399 9.10035 11.2599 9.39035 10.9699C9.68035 10.6799 10.1604 10.6799 10.4504 10.9699L11.4204 11.9399L14.8904 8.46994C15.1804 8.17994 15.6604 8.17994 15.9504 8.46994C16.2404 8.75994 16.2404 9.23994 15.9504 9.52994L11.9504 13.5299C11.8004 13.6799 11.6104 13.7499 11.4204 13.7499Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_12_64832)"><path d="M21.2897 8.7C20.2497 4.07 16.2097 2 12.6697 2C12.6697 2 12.6697 2 12.6597 2C9.12967 2 5.09967 4.07 4.04967 8.69C2.86967 13.85 6.02967 18.22 8.88967 20.98C9.94967 22 11.3097 22.51 12.6697 22.51C14.0297 22.51 15.3897 22 16.4397 20.98C19.2997 18.22 22.4597 13.86 21.2897 8.7ZM15.9497 9.53L11.9497 13.53C11.7997 13.68 11.6097 13.75 11.4197 13.75C11.2297 13.75 11.0397 13.68 10.8897 13.53L9.38967 12.03C9.09967 11.74 9.09967 11.26 9.38967 10.97C9.67967 10.68 10.1597 10.68 10.4497 10.97L11.4197 11.94L14.8897 8.47C15.1797 8.18 15.6597 8.18 15.9497 8.47C16.2397 8.76 16.2397 9.24 15.9497 9.53Z" fill="currentColor" /></g><defs><clipPath ><rect width="24" height="24" fill="none" transform="translate(0.669922)" /></clipPath></defs></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLocationTick as IconComponent).keywords = [
  "location",
  "tick",
  "position",
  "placement",
  "positioning",
  "localization",
  "localisation",
  "emplacement",
  "fix",
  "locating",
  "situating",
  "click",
  "ticktock",
  "beat",
  "ticktack",
  "retick",
  "ixodid",
  "acarid",
  "spinose",
  "gene"
];

export default IconLocationTick as IconComponent;