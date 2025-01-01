import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconXd: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.9599 8.47021V15.5302H16.1899C15.2099 15.5302 14.4199 14.7402 14.4199 13.7602C14.4199 12.7802 15.2099 11.9902 16.1899 11.9902H17.9599" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M6.04004 8.46973L11.69 15.5297" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.69 8.46973L6.04004 15.5297" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1898 2H7.81978C4.17978 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17978 21.99 7.81978 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="currentColor" /><path d="M17.9599 7.71973C17.5499 7.71973 17.2099 8.05973 17.2099 8.46973V11.2497H16.1899C14.7999 11.2497 13.6699 12.3797 13.6699 13.7697C13.6699 15.1597 14.7999 16.2897 16.1899 16.2897H17.9599C18.3699 16.2897 18.7099 15.9497 18.7099 15.5397V8.47972C18.7099 8.04972 18.3699 7.71973 17.9599 7.71973ZM17.2099 14.7797H16.1899C15.6299 14.7797 15.1699 14.3197 15.1699 13.7597C15.1699 13.1997 15.6299 12.7397 16.1899 12.7397H17.2099V14.7797Z" fill="currentColor" /><path d="M12.1608 7.8797C11.8408 7.6197 11.3607 7.6697 11.1107 7.9997L8.87074 10.7997L6.63075 7.9997C6.37075 7.6797 5.90075 7.6197 5.58075 7.8797C5.26075 8.1397 5.20075 8.60969 5.46075 8.92969L7.91075 11.9897L5.46075 15.0497C5.20075 15.3697 5.25075 15.8497 5.58075 16.0997C5.72075 16.2097 5.88075 16.2597 6.05075 16.2597C6.27075 16.2597 6.49075 16.1597 6.64075 15.9797L8.88075 13.1797L11.1207 15.9797C11.2707 16.1597 11.4908 16.2597 11.7108 16.2597C11.8708 16.2597 12.0407 16.2097 12.1807 16.0997C12.5007 15.8397 12.5608 15.3697 12.3008 15.0497L9.85075 11.9897L12.3008 8.92969C12.5408 8.60969 12.4908 8.1397 12.1608 7.8797Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconXd as IconComponentType).keywords = [
  "xd",
  "dv",
  "dx",
  "dy",
  "et",
  "fa",
  "fp",
  "ns",
  "pc"
];

export default IconXd as IconComponentType;