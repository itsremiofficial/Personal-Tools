import { FC } from 'react';
import { IconProps } from "@/types";

const IconNotificationFavorite: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.81046 14.9299C6.46046 13.8299 6.87046 12.4599 8.03046 12.0899C8.64046 11.8899 9.39046 12.0599 9.82046 12.6499C10.2205 12.0399 11.0005 11.8999 11.6005 12.0899C12.7605 12.4599 13.1705 13.8299 12.8205 14.9299C12.2705 16.6799 10.3505 17.5899 9.82046 17.5899C9.28046 17.5799 7.38046 16.6899 6.81046 14.9299Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M19 9.5C16.52 9.5 14.5 7.48 14.5 5C14.5 4.28 14.69 3.61 14.99 3H7.52C4.07 3 2 5.06 2 8.52V16.47C2 19.94 4.07 22 7.52 22H15.47C18.93 22 20.99 19.94 20.99 16.48V9.01C20.39 9.31 19.72 9.5 19 9.5Z" fill="currentColor" /><path d="M10.8997 12.3601C10.3297 12.1801 9.71974 12.2801 9.28974 12.6201C8.84974 12.2801 8.24974 12.1801 7.68974 12.3601C6.45974 12.7601 6.06974 14.1601 6.41974 15.2401C6.94974 16.8801 8.67974 17.7301 9.29974 17.7301C9.90974 17.7301 11.6697 16.8601 12.1797 15.2401C12.5297 14.1601 12.1297 12.7601 10.8997 12.3601Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconNotificationFavorite;