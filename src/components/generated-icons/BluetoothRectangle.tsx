import { FC } from 'react';
import { IconProps } from "@/types";

const IconBluetoothRectangle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M8.58984 15.5599L15.2098 9.4899C15.4898 9.2399 15.4798 8.83992 15.1898 8.59992L13.1299 6.87992C12.5899 6.42992 12.1599 6.63991 12.1599 7.33991V16.6699C12.1599 17.3699 12.5999 17.5699 13.1299 17.1299L15.1898 15.4099C15.4798 15.1699 15.4898 14.7699 15.2098 14.5199L8.58984 8.44992" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 22H9C6 22 4 20 4 17V7C4 4 6 2 9 2H15C18 2 20 4 20 7V17C20 20 18 22 15 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M15 22H9C6 22 4 20 4 17V7C4 4 6 2 9 2H15C18 2 20 4 20 7V17C20 20 18 22 15 22Z" fill="currentColor" /><path d="M12.5991 18.1101C12.3791 18.1101 12.2091 18.0501 12.1091 18.0101C11.8891 17.9101 11.3891 17.5801 11.3891 16.6701V14.0001L9.08906 16.1101C8.78906 16.3901 8.30907 16.3701 8.02907 16.0601C7.74907 15.7501 7.76905 15.2801 8.07905 15.0001L11.3591 11.9901L8.07905 8.98012C7.76905 8.70012 7.74907 8.23012 8.02907 7.92012C8.30907 7.62012 8.78906 7.5901 9.08906 7.8701L11.3891 9.98012V7.32011C11.3891 6.42011 11.8891 6.09012 12.1091 5.98012C12.3191 5.88012 12.8991 5.7001 13.5991 6.2801L15.6591 8.00011C15.9591 8.25011 16.1391 8.62011 16.1491 9.00011C16.1591 9.38011 15.9991 9.76009 15.7091 10.0201L13.5791 11.9701L15.7091 13.9201C15.9991 14.1901 16.1591 14.5601 16.1491 14.9401C16.1391 15.3201 15.9591 15.6901 15.6591 15.9401L13.5991 17.6601C13.2191 18.0201 12.8691 18.1101 12.5991 18.1101ZM12.8991 13.4101V16.3301L14.5691 14.9401L12.8991 13.4101ZM12.8991 7.67012V10.5901L14.5691 9.0601L12.8991 7.67012Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBluetoothRectangle;