import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconPlaylist: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M21 6.00024L3 6.00024" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M21 10.0002L3 10.0002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M11 14.0002L3 14.0002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M11 18.0002H3" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M18.875 14.1187C20.5288 15.0735 21.3558 15.5509 21.4772 16.2398C21.5076 16.4121 21.5076 16.5884 21.4772 16.7607C21.3558 17.4496 20.5288 17.927 18.875 18.8818C17.2212 19.8367 16.3942 20.3141 15.737 20.0749C15.5725 20.015 15.4199 19.9269 15.2858 19.8144C14.75 19.3648 14.75 18.4099 14.75 16.5003C14.75 14.5906 14.75 13.6357 15.2858 13.1861C15.4199 13.0736 15.5725 12.9855 15.737 12.9256C16.3942 12.6864 17.2212 13.1638 18.875 14.1187Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.5" : "1"}><path fillRule="evenodd" clipRule="evenodd" d="M2.25 6.00024C2.25 5.58603 2.58579 5.25024 3 5.25024H21C21.4142 5.25024 21.75 5.58603 21.75 6.00024C21.75 6.41446 21.4142 6.75024 21 6.75024H3C2.58579 6.75024 2.25 6.41446 2.25 6.00024ZM2.25 10.0002C2.25 9.58603 2.58579 9.25024 3 9.25024H21C21.4142 9.25024 21.75 9.58603 21.75 10.0002C21.75 10.4145 21.4142 10.7502 21 10.7502H3C2.58579 10.7502 2.25 10.4145 2.25 10.0002ZM2.25 14.0002C2.25 13.586 2.58579 13.2502 3 13.2502H11C11.4142 13.2502 11.75 13.586 11.75 14.0002C11.75 14.4145 11.4142 14.7502 11 14.7502H3C2.58579 14.7502 2.25 14.4145 2.25 14.0002ZM2.25 18.0002C2.25 17.586 2.58579 17.2502 3 17.2502H11C11.4142 17.2502 11.75 17.586 11.75 18.0002C11.75 18.4145 11.4142 18.7502 11 18.7502H3C2.58579 18.7502 2.25 18.4145 2.25 18.0002Z" fill="currentColor" /></g><path d="M18.875 14.1186C20.5288 15.0734 21.3558 15.5509 21.4772 16.2397C21.5076 16.412 21.5076 16.5883 21.4772 16.7606C21.3558 17.4495 20.5288 17.9269 18.875 18.8817C17.2212 19.8366 16.3942 20.314 15.737 20.0748C15.5725 20.0149 15.4199 19.9268 15.2858 19.8143C14.75 19.3647 14.75 18.4098 14.75 16.5002C14.75 14.5905 14.75 13.6356 15.2858 13.186C15.4199 13.0736 15.5725 12.9854 15.737 12.9256C16.3942 12.6863 17.2212 13.1637 18.875 14.1186Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.25 6.00024C2.25 5.58603 2.58579 5.25024 3 5.25024H21C21.4142 5.25024 21.75 5.58603 21.75 6.00024C21.75 6.41446 21.4142 6.75024 21 6.75024H3C2.58579 6.75024 2.25 6.41446 2.25 6.00024ZM2.25 10.0002C2.25 9.58603 2.58579 9.25024 3 9.25024H21C21.4142 9.25024 21.75 9.58603 21.75 10.0002C21.75 10.4145 21.4142 10.7502 21 10.7502H3C2.58579 10.7502 2.25 10.4145 2.25 10.0002ZM2.25 14.0002C2.25 13.586 2.58579 13.2502 3 13.2502H11C11.4142 13.2502 11.75 13.586 11.75 14.0002C11.75 14.4145 11.4142 14.7502 11 14.7502H3C2.58579 14.7502 2.25 14.4145 2.25 14.0002ZM2.25 18.0002C2.25 17.586 2.58579 17.2502 3 17.2502H11C11.4142 17.2502 11.75 17.586 11.75 18.0002C11.75 18.4145 11.4142 18.7502 11 18.7502H3C2.58579 18.7502 2.25 18.4145 2.25 18.0002Z" fill="currentColor" /><path d="M18.875 14.1187C20.5288 15.0735 21.3558 15.5509 21.4772 16.2398C21.5076 16.4121 21.5076 16.5884 21.4772 16.7607C21.3558 17.4496 20.5288 17.927 18.875 18.8818C17.2212 19.8367 16.3942 20.3141 15.737 20.0748C15.5725 20.015 15.4199 19.9268 15.2858 19.8144C14.75 19.3648 14.75 18.4099 14.75 16.5002C14.75 14.5906 14.75 13.6357 15.2858 13.1861C15.4199 13.0736 15.5725 12.9855 15.737 12.9256C16.3942 12.6864 17.2212 13.1638 18.875 14.1187Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconPlaylist;