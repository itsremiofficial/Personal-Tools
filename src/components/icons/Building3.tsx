import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBuilding3: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 22H22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.01 21.9898L3.01001 22.0099L3 7.06986C3 6.39986 3.34001 5.77983 3.89001 5.40983L7.89001 2.73984C8.56001 2.28984 9.43999 2.28984 10.11 2.73984L14.11 5.40983C14.67 5.77983 15 6.39986 15 7.06986L15.01 21.9898Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M19.9805 22.01V18" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M20 12C18.9 12 18 12.9 18 14V16C18 17.1 18.9 18 20 18C21.1 18 22 17.1 22 16V14C22 12.9 21.1 12 20 12Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 14H15" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9 22V18.25" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9 10.5C9.82843 10.5 10.5 9.82843 10.5 9C10.5 8.17157 9.82843 7.5 9 7.5C8.17157 7.5 7.5 8.17157 7.5 9C7.5 9.82843 8.17157 10.5 9 10.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M15.01 14.7499V21.9898L3.01001 22.0099V14.7499L3 13.2499V7.06986C3 6.39986 3.34001 5.77983 3.89001 5.40983L7.89001 2.73984C8.56001 2.28984 9.43999 2.28984 10.11 2.73984L14.11 5.40983C14.67 5.77983 15 6.39986 15 7.06986V13.2499L15.01 14.7499Z" fill="currentColor" /><path d="M22 21.2501H20.73V18.2501C21.68 17.9401 22.37 17.0501 22.37 16.0001V14.0001C22.37 12.6901 21.3 11.6201 19.99 11.6201C18.68 11.6201 17.61 12.6901 17.61 14.0001V16.0001C17.61 17.0401 18.29 17.9201 19.22 18.2401V21.2501H2C1.59 21.2501 1.25 21.5901 1.25 22.0001C1.25 22.4101 1.59 22.7501 2 22.7501H19.93C19.95 22.7501 19.96 22.7601 19.98 22.7601C20 22.7601 20.01 22.7501 20.03 22.7501H22C22.41 22.7501 22.75 22.4101 22.75 22.0001C22.75 21.5901 22.41 21.2501 22 21.2501Z" fill="currentColor" /><path d="M15.01 14.75H3.01001L3 13.25H15L15.01 14.75Z" fill="currentColor" /><path d="M9 22.75C8.59 22.75 8.25 22.41 8.25 22V18.25C8.25 17.84 8.59 17.5 9 17.5C9.41 17.5 9.75 17.84 9.75 18.25V22C9.75 22.41 9.41 22.75 9 22.75Z" fill="currentColor" /><path d="M9 10.75C9.9665 10.75 10.75 9.9665 10.75 9C10.75 8.0335 9.9665 7.25 9 7.25C8.0335 7.25 7.25 8.0335 7.25 9C7.25 9.9665 8.0335 10.75 9 10.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBuilding3 as IconComponentType).keywords = [
  "building",
  "3",
  "edifice",
  "construction",
  "rising",
  "increasing",
  "augmentative",
  "heightening",
  "augmenting",
  "constructing",
  "constructive",
  "omega",
  "wash out",
  "cut up",
  "pull out",
  "pull up",
  "pull over",
  "pull in",
  "work out",
  "ride down"
];

export default IconBuilding3 as IconComponentType;