import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBuilding3: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.66992 22H22.6699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.6799 21.9898L3.67993 22.0099L3.66992 7.06986C3.66992 6.39986 4.00994 5.77983 4.55994 5.40983L8.55994 2.73984C9.22994 2.28984 10.1099 2.28984 10.7799 2.73984L14.7799 5.40983C15.3399 5.77983 15.6699 6.39986 15.6699 7.06986L15.6799 21.9898Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M20.6499 22.01V18" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M20.6699 12C19.5699 12 18.6699 12.9 18.6699 14V16C18.6699 17.1 19.5699 18 20.6699 18C21.7699 18 22.6699 17.1 22.6699 16V14C22.6699 12.9 21.7699 12 20.6699 12Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M3.66992 14H15.6699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.66992 22V18.25" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.66992 10.5C10.4983 10.5 11.1699 9.82843 11.1699 9C11.1699 8.17157 10.4983 7.5 9.66992 7.5C8.84149 7.5 8.16992 8.17157 8.16992 9C8.16992 9.82843 8.84149 10.5 9.66992 10.5Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M15.6799 14.7499V21.9898L3.67993 22.0099V14.7499L3.66992 13.2499V7.06986C3.66992 6.39986 4.00994 5.77983 4.55994 5.40983L8.55994 2.73984C9.22994 2.28984 10.1099 2.28984 10.7799 2.73984L14.7799 5.40983C15.3399 5.77983 15.6699 6.39986 15.6699 7.06986V13.2499L15.6799 14.7499Z" fill="currentColor" /><path d="M22.6699 21.2501H21.3999V18.2501C22.3499 17.9401 23.0399 17.0501 23.0399 16.0001V14.0001C23.0399 12.6901 21.9699 11.6201 20.6599 11.6201C19.3499 11.6201 18.2799 12.6901 18.2799 14.0001V16.0001C18.2799 17.0401 18.9599 17.9201 19.8899 18.2401V21.2501H2.66992C2.25992 21.2501 1.91992 21.5901 1.91992 22.0001C1.91992 22.4101 2.25992 22.7501 2.66992 22.7501H20.5999C20.6199 22.7501 20.6299 22.7601 20.6499 22.7601C20.6699 22.7601 20.68 22.7501 20.7 22.7501H22.6699C23.0799 22.7501 23.4199 22.4101 23.4199 22.0001C23.4199 21.5901 23.0799 21.2501 22.6699 21.2501Z" fill="currentColor" /><path d="M15.6799 14.75H3.67993L3.66992 13.25H15.6699L15.6799 14.75Z" fill="currentColor" /><path d="M9.66992 22.75C9.25992 22.75 8.91992 22.41 8.91992 22V18.25C8.91992 17.84 9.25992 17.5 9.66992 17.5C10.0799 17.5 10.4199 17.84 10.4199 18.25V22C10.4199 22.41 10.0799 22.75 9.66992 22.75Z" fill="currentColor" /><path d="M9.66992 10.75C10.6364 10.75 11.4199 9.9665 11.4199 9C11.4199 8.0335 10.6364 7.25 9.66992 7.25C8.70342 7.25 7.91992 8.0335 7.91992 9C7.91992 9.9665 8.70342 10.75 9.66992 10.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.6699 7.06984C15.6699 6.39984 15.3399 5.77984 14.7799 5.40984L10.7799 2.73984C10.1099 2.28984 9.22992 2.28984 8.55992 2.73984L4.55992 5.40984C4.00992 5.77984 3.66992 6.39984 3.66992 7.06984V12.7498C3.66992 13.0298 3.88992 13.2498 4.16992 13.2498H15.1699C15.4499 13.2498 15.6699 13.0298 15.6699 12.7498V7.06984ZM9.66992 10.7498C8.70992 10.7498 7.91992 9.95984 7.91992 8.99984C7.91992 8.03984 8.70992 7.24984 9.66992 7.24984C10.6299 7.24984 11.4199 8.03984 11.4199 8.99984C11.4199 9.95984 10.6299 10.7498 9.66992 10.7498Z" fill="currentColor" /><path d="M22.6699 21.2501H21.3999V18.2501C22.3499 17.9401 23.0399 17.0501 23.0399 16.0001V14.0001C23.0399 12.6901 21.9699 11.6201 20.6599 11.6201C19.3499 11.6201 18.2799 12.6901 18.2799 14.0001V16.0001C18.2799 17.0401 18.9599 17.9201 19.8899 18.2401V21.2501H15.6699V15.2501C15.6699 14.9701 15.4499 14.7501 15.1699 14.7501H4.16992C3.88992 14.7501 3.66992 14.9701 3.66992 15.2501V21.2501H2.66992C2.25992 21.2501 1.91992 21.5901 1.91992 22.0001C1.91992 22.4101 2.25992 22.7501 2.66992 22.7501H20.5999C20.6199 22.7501 20.6299 22.7601 20.6499 22.7601C20.6699 22.7601 20.6799 22.7501 20.6999 22.7501H22.6699C23.0799 22.7501 23.4199 22.4101 23.4199 22.0001C23.4199 21.5901 23.0799 21.2501 22.6699 21.2501ZM8.91992 18.2501C8.91992 17.8401 9.25992 17.5001 9.66992 17.5001C10.0799 17.5001 10.4199 17.8401 10.4199 18.2501V21.2501H8.91992V18.2501Z" fill="currentColor" /></svg> 
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