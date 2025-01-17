import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconListUpMinimalistic: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M20 6.00024L3 6.00024" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M20 11.0002L3 11.0002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M10 16.0002H3" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M14 15.0002L17.5 18.0002L21 15.0002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} fillRule="evenodd" clipRule="evenodd" d="M2.25 6.00024C2.25 5.58603 2.58579 5.25024 3 5.25024H20C20.4142 5.25024 20.75 5.58603 20.75 6.00024C20.75 6.41446 20.4142 6.75024 20 6.75024H3C2.58579 6.75024 2.25 6.41446 2.25 6.00024ZM2.25 11.0002C2.25 10.586 2.58579 10.2502 3 10.2502H20C20.4142 10.2502 20.75 10.586 20.75 11.0002C20.75 11.4145 20.4142 11.7502 20 11.7502H3C2.58579 11.7502 2.25 11.4145 2.25 11.0002ZM2.25 16.0002C2.25 15.586 2.58579 15.2502 3 15.2502H10C10.4142 15.2502 10.75 15.586 10.75 16.0002C10.75 16.4145 10.4142 16.7502 10 16.7502H3C2.58579 16.7502 2.25 16.4145 2.25 16.0002Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M17.0119 18.5697C17.2928 18.8104 17.7072 18.8104 17.9881 18.5697L21.4881 15.5697C21.8026 15.3001 21.839 14.8267 21.5695 14.5122C21.2999 14.1977 20.8264 14.1612 20.5119 14.4308L17.5 17.0124L14.4881 14.4308C14.1736 14.1612 13.7001 14.1977 13.4306 14.5122C13.161 14.8267 13.1974 15.3001 13.5119 15.5697L17.0119 18.5697Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.25 6.00024C2.25 5.58603 2.58579 5.25024 3 5.25024H20C20.4142 5.25024 20.75 5.58603 20.75 6.00024C20.75 6.41446 20.4142 6.75024 20 6.75024H3C2.58579 6.75024 2.25 6.41446 2.25 6.00024ZM2.25 11.0002C2.25 10.586 2.58579 10.2502 3 10.2502H20C20.4142 10.2502 20.75 10.586 20.75 11.0002C20.75 11.4145 20.4142 11.7502 20 11.7502H3C2.58579 11.7502 2.25 11.4145 2.25 11.0002ZM2.25 16.0002C2.25 15.586 2.58579 15.2502 3 15.2502H10C10.4142 15.2502 10.75 15.586 10.75 16.0002C10.75 16.4145 10.4142 16.7502 10 16.7502H3C2.58579 16.7502 2.25 16.4145 2.25 16.0002Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M17.0119 18.5697C17.2928 18.8104 17.7072 18.8104 17.9881 18.5697L21.4881 15.5697C21.8026 15.3001 21.839 14.8266 21.5694 14.5122C21.2999 14.1977 20.8264 14.1612 20.5119 14.4308L17.5 17.0124L14.4881 14.4308C14.1736 14.1612 13.7001 14.1977 13.4306 14.5122C13.161 14.8266 13.1974 15.3001 13.5119 15.5697L17.0119 18.5697Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconListUpMinimalistic;