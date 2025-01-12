import { FC } from 'react';

const IconShield: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1601 2.23006L6.17008 4.11006C5.02008 4.54006 4.08008 5.90006 4.08008 7.12006V14.5501C4.08008 15.7301 4.86008 17.2801 5.81008 17.9901L10.1101 21.2001C11.5201 22.2601 13.8401 22.2601 15.2501 21.2001L19.5501 17.9901C20.5001 17.2801 21.2801 15.7301 21.2801 14.5501V7.12006C21.2801 5.89006 20.3401 4.53006 19.1901 4.10006L14.2001 2.23006C13.3501 1.92006 11.9901 1.92006 11.1601 2.23006Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.0798 6.95994V9.79994L8.06977 19.3399L5.43977 17.3699C4.78977 16.8799 4.25977 15.8299 4.25977 15.0199V6.95994C4.25977 5.83994 5.11977 4.59994 6.16977 4.20994L11.6398 2.15994C12.2098 1.94994 13.1298 1.94994 13.6998 2.15994L19.1698 4.20994C20.2198 4.59994 21.0798 5.83994 21.0798 6.95994Z" fill="currentColor" /><path d="M21.0797 11.1699V15.0199C21.0797 15.8299 20.5497 16.8799 19.8997 17.3699L14.4297 21.4599C13.9497 21.8199 13.3097 21.9999 12.6697 21.9999C12.0297 21.9999 11.3897 21.8199 10.9097 21.4599L8.98975 20.0299L21.0797 11.1699Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.0798 6.95994V8.78994C21.0798 9.42994 20.7798 10.0299 20.2598 10.3999L9.25977 18.4599C8.54977 18.9799 7.57977 18.9799 6.87977 18.4499L5.43977 17.3699C4.78977 16.8799 4.25977 15.8199 4.25977 15.0099V6.95994C4.25977 5.83994 5.11977 4.59994 6.16977 4.20994L11.6398 2.15994C12.2098 1.94994 13.1298 1.94994 13.6998 2.15994L19.1698 4.20994C20.2198 4.59994 21.0798 5.83994 21.0798 6.95994Z" fill="currentColor" /><path d="M19.49 12.3399C20.15 11.8599 21.08 12.3299 21.08 13.1499V15.0299C21.08 15.8399 20.55 16.8899 19.9 17.3799L14.43 21.4699C13.95 21.8199 13.31 21.9999 12.67 21.9999C12.03 21.9999 11.39 21.8199 10.91 21.4599L10.08 20.8399C9.54003 20.4399 9.54003 19.6299 10.09 19.2299L19.49 12.3399Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconShield as IconComponent).keywords = [
  "shield",
  "buckler",
  "screen",
  "harbor",
  "harbour",
  "armoured",
  "armor",
  "breastplate",
  "ribbon",
  "visor"
];

export default IconShield as IconComponent;