import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconListCheck: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 16.0002L16.1 18.5002L20 13.5002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.5" : "1"} d="M21 6.00024L3 6.00024" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M21 10.0002L3 10.0002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M10 14.0002H3" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M10 18.0002H3" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} fillRule="evenodd" clipRule="evenodd" d="M2 5.75024C2 5.33603 2.33579 5.00024 2.75 5.00024H20.75C21.1642 5.00024 21.5 5.33603 21.5 5.75024C21.5 6.16446 21.1642 6.50024 20.75 6.50024H2.75C2.33579 6.50024 2 6.16446 2 5.75024ZM2 9.75024C2 9.33603 2.33579 9.00024 2.75 9.00024H20.75C21.1642 9.00024 21.5 9.33603 21.5 9.75024C21.5 10.1645 21.1642 10.5002 20.75 10.5002H2.75C2.33579 10.5002 2 10.1645 2 9.75024ZM2 13.7502C2 13.336 2.33579 13.0002 2.75 13.0002H9.75C10.1642 13.0002 10.5 13.336 10.5 13.7502C10.5 14.1645 10.1642 14.5002 9.75 14.5002H2.75C2.33579 14.5002 2 14.1645 2 13.7502ZM2 17.7502C2 17.336 2.33579 17.0002 2.75 17.0002H9.75C10.1642 17.0002 10.5 17.336 10.5 17.7502C10.5 18.1645 10.1642 18.5002 9.75 18.5002H2.75C2.33579 18.5002 2 18.1645 2 17.7502Z" fill="currentColor" /><path d="M20.2113 12.6589C20.5379 12.9137 20.5961 13.3849 20.3414 13.7116L16.4414 18.7116C16.3022 18.89 16.0899 18.9961 15.8636 19.0002C15.6373 19.0043 15.4213 18.906 15.2757 18.7327L13.1757 16.2327C12.9093 15.9155 12.9505 15.4424 13.2676 15.176C13.5848 14.9096 14.0579 14.9507 14.3243 15.2679L15.8284 17.0585L19.1586 12.789C19.4134 12.4624 19.8847 12.4041 20.2113 12.6589Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2 5.75024C2 5.33603 2.33579 5.00024 2.75 5.00024H20.75C21.1642 5.00024 21.5 5.33603 21.5 5.75024C21.5 6.16446 21.1642 6.50024 20.75 6.50024H2.75C2.33579 6.50024 2 6.16446 2 5.75024ZM2 9.75024C2 9.33603 2.33579 9.00024 2.75 9.00024H20.75C21.1642 9.00024 21.5 9.33603 21.5 9.75024C21.5 10.1645 21.1642 10.5002 20.75 10.5002H2.75C2.33579 10.5002 2 10.1645 2 9.75024ZM20.2113 12.6589C20.5379 12.9136 20.5961 13.3849 20.3414 13.7115L16.4414 18.7115C16.3022 18.89 16.0899 18.996 15.8636 19.0001C15.6373 19.0042 15.4213 18.9059 15.2757 18.7326L13.1757 16.2326C12.9093 15.9155 12.9504 15.4424 13.2676 15.176C13.5848 14.9095 14.0579 14.9507 14.3243 15.2678L15.8284 17.0585L19.1586 12.789C19.4134 12.4624 19.8847 12.4041 20.2113 12.6589ZM2 13.7502C2 13.336 2.33579 13.0002 2.75 13.0002H9.75C10.1642 13.0002 10.5 13.336 10.5 13.7502C10.5 14.1645 10.1642 14.5002 9.75 14.5002H2.75C2.33579 14.5002 2 14.1645 2 13.7502ZM2 17.7502C2 17.336 2.33579 17.0002 2.75 17.0002H9.75C10.1642 17.0002 10.5 17.336 10.5 17.7502C10.5 18.1645 10.1642 18.5002 9.75 18.5002H2.75C2.33579 18.5002 2 18.1645 2 17.7502Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconListCheck;