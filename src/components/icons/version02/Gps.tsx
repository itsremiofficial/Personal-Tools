import { FC } from 'react';

const IconGps: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 19.5C16.8121 19.5 20.1699 16.1421 20.1699 12C20.1699 7.85786 16.8121 4.5 12.6699 4.5C8.52779 4.5 5.16992 7.85786 5.16992 12C5.16992 16.1421 8.52779 19.5 12.6699 19.5Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 15C14.3268 15 15.6699 13.6569 15.6699 12C15.6699 10.3431 14.3268 9 12.6699 9C11.0131 9 9.66992 10.3431 9.66992 12C9.66992 13.6569 11.0131 15 12.6699 15Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 4V2" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M4.66992 12H2.66992" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 20V22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M20.6699 12H22.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.6699 20C17.0882 20 20.6699 16.4183 20.6699 12C20.6699 7.58172 17.0882 4 12.6699 4C8.25164 4 4.66992 7.58172 4.66992 12C4.66992 16.4183 8.25164 20 12.6699 20Z" fill="currentColor" /><path d="M12.6698 15.1199C14.3929 15.1199 15.7898 13.723 15.7898 11.9999C15.7898 10.2768 14.3929 8.87988 12.6698 8.87988C10.9467 8.87988 9.5498 10.2768 9.5498 11.9999C9.5498 13.723 10.9467 15.1199 12.6698 15.1199Z" fill="currentColor" /><path d="M13.4199 2V4.04H13.4099C13.1699 4.01 12.9199 4 12.6699 4C12.4199 4 12.1699 4.01 11.9299 4.04H11.9199V2C11.9199 1.59 12.2599 1.25 12.6699 1.25C13.0799 1.25 13.4199 1.59 13.4199 2Z" fill="currentColor" /><path d="M4.66992 12C4.66992 12.25 4.67992 12.51 4.70992 12.75H2.66992C2.25992 12.75 1.91992 12.41 1.91992 12C1.91992 11.59 2.25992 11.25 2.66992 11.25H4.70992C4.67992 11.49 4.66992 11.75 4.66992 12Z" fill="currentColor" /><path d="M13.4199 19.96V22C13.4199 22.41 13.0799 22.75 12.6699 22.75C12.2599 22.75 11.9199 22.41 11.9199 22V19.96H11.9299C12.1699 19.99 12.4199 20 12.6699 20C12.9199 20 13.1699 19.99 13.4099 19.96H13.4199Z" fill="currentColor" /><path d="M23.4199 12C23.4199 12.41 23.0799 12.75 22.6699 12.75H20.6299C20.6599 12.51 20.6699 12.25 20.6699 12C20.6699 11.75 20.6599 11.49 20.6299 11.25H22.6699C23.0799 11.25 23.4199 11.59 23.4199 12Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_12_64954)"><path d="M22.6699 11.25H20.6299C20.2699 7.44 17.2299 4.39 13.4199 4.04V2C13.4199 1.59 13.0799 1.25 12.6699 1.25C12.2599 1.25 11.9199 1.59 11.9199 2V4.04C8.10992 4.4 5.05992 7.44 4.70992 11.25H2.66992C2.25992 11.25 1.91992 11.59 1.91992 12C1.91992 12.41 2.25992 12.75 2.66992 12.75H4.70992C5.06992 16.56 8.10992 19.61 11.9199 19.96V22C11.9199 22.41 12.2599 22.75 12.6699 22.75C13.0799 22.75 13.4199 22.41 13.4199 22V19.96C17.2299 19.6 20.2799 16.56 20.6299 12.75H22.6699C23.0799 12.75 23.4199 12.41 23.4199 12C23.4199 11.59 23.0799 11.25 22.6699 11.25ZM12.6699 15.12C10.9499 15.12 9.54992 13.72 9.54992 12C9.54992 10.28 10.9499 8.88 12.6699 8.88C14.3899 8.88 15.7899 10.28 15.7899 12C15.7899 13.72 14.3899 15.12 12.6699 15.12Z" fill="currentColor" /></g><defs><clipPath ><rect width="24" height="24" fill="none" transform="translate(0.669922)" /></clipPath></defs></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGps as IconComponent).keywords = [
  "gps",
  "general practitioner",
  "rtk",
  "spg",
  "gsp",
  "aps",
  "positioning",
  "sgp",
  "spl",
  "drs"
];

export default IconGps as IconComponent;