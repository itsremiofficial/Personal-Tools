import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const Icon3dCubeScan: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 9V7C2 4 4 2 7 2H17C20 2 22 4 22 7V9" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 15V17C2 20 4 22 7 22H17C20 22 22 20 22 17V15" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M6.69922 9.26025L11.9992 12.3303L17.2592 9.28027" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 17.7703V12.3203" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.7602 6.29006L7.56023 8.07009C6.84023 8.47009 6.24023 9.48008 6.24023 10.3101V13.7001C6.24023 14.5301 6.83023 15.5401 7.56023 15.9401L10.7602 17.7201C11.4402 18.1001 12.5602 18.1001 13.2502 17.7201L16.4502 15.9401C17.1702 15.5401 17.7702 14.5301 17.7702 13.7001V10.3101C17.7702 9.48008 17.1802 8.47009 16.4502 8.07009L13.2502 6.29006C12.5602 5.90006 11.4402 5.90006 10.7602 6.29006Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 9.75C21.59 9.75 21.25 9.41 21.25 9V7C21.25 4.42 19.58 2.75 17 2.75H7C4.42 2.75 2.75 4.42 2.75 7V9C2.75 9.41 2.41 9.75 2 9.75C1.59 9.75 1.25 9.41 1.25 9V7C1.25 3.56 3.56 1.25 7 1.25H17C20.44 1.25 22.75 3.56 22.75 7V9C22.75 9.41 22.41 9.75 22 9.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17 22.75H7C3.56 22.75 1.25 20.44 1.25 17V15C1.25 14.59 1.59 14.25 2 14.25C2.41 14.25 2.75 14.59 2.75 15V17C2.75 19.58 4.42 21.25 7 21.25H17C19.58 21.25 21.25 19.58 21.25 17V15C21.25 14.59 21.59 14.25 22 14.25C22.41 14.25 22.75 14.59 22.75 15V17C22.75 20.44 20.44 22.75 17 22.75Z" fill="currentColor" /><path d="M16.3999 8.20999L12.6399 6.17996C12.2399 5.96996 11.7699 5.96996 11.3699 6.17996L7.60992 8.20999C7.33992 8.35999 7.16992 8.64995 7.16992 8.97995C7.16992 9.30995 7.33992 9.59997 7.60992 9.74997L11.3699 11.78C11.5699 11.89 11.7899 11.94 12.0099 11.94C12.2299 11.94 12.4499 11.89 12.6499 11.78L16.4099 9.74997C16.6799 9.59997 16.8499 9.30995 16.8499 8.97995C16.8399 8.64995 16.6699 8.35999 16.3999 8.20999Z" fill="currentColor" /><path d="M10.7402 12.4699L7.24023 10.7199C6.97023 10.5899 6.66022 10.6 6.40022 10.76C6.14022 10.92 5.99023 11.1899 5.99023 11.4899V14.7999C5.99023 15.3699 6.31024 15.89 6.82024 16.14L10.3202 17.89C10.4402 17.95 10.5702 17.9799 10.7102 17.9799C10.8702 17.9799 11.0202 17.9399 11.1602 17.8499C11.4202 17.6899 11.5702 17.4199 11.5702 17.1199V13.8099C11.5702 13.2399 11.2602 12.7299 10.7402 12.4699Z" fill="currentColor" /><path d="M17.5899 10.76C17.3299 10.6 17.0199 10.5899 16.7499 10.7199L13.2499 12.4699C12.7399 12.7299 12.4199 13.2399 12.4199 13.8099V17.1199C12.4199 17.4199 12.5699 17.6899 12.8299 17.8499C12.9699 17.9399 13.1199 17.9799 13.2799 17.9799C13.4099 17.9799 13.5399 17.95 13.6699 17.89L17.1699 16.14C17.6799 15.88 17.9999 15.3699 17.9999 14.7999V11.4899C17.9999 11.1899 17.8499 10.92 17.5899 10.76Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(Icon3dCubeScan as IconComponentType).keywords = [
  "3d",
  "cube",
  "scan",
  "3-d",
  "three-d",
  "postage",
  "qsar",
  "abit",
  "abstinent",
  "amityville",
  "arist",
  "barque",
  "block",
  "dice",
  "regular hexahedron",
  "square block",
  "third power",
  "cubic",
  "metre",
  "piece",
  "boss",
  "read",
  "run down",
  "glance over",
  "skim",
  "rake",
  "examine",
  "inspect",
  "finding",
  "scrutinize"
];

export default Icon3dCubeScan as IconComponentType;