import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBuilding: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4997 22.0003H4.07973C2.91973 22.0003 1.96973 21.0703 1.96973 19.9303V5.09035C1.96973 2.47035 3.91973 1.28035 6.30973 2.45035L10.7497 4.63035C11.7097 5.10035 12.4997 6.35035 12.4997 7.41035V22.0003Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.97 15.0604V18.8404C21.97 21.0004 20.97 22.0004 18.81 22.0004H12.5V10.4204L12.97 10.5204L17.47 11.5304L19.5 11.9804C20.82 12.2704 21.9 12.9504 21.96 14.8704C21.97 14.9304 21.97 14.9904 21.97 15.0604Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5.5 9.00049H8.97" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5.5 13.0005H8.97" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.4697 11.5305V14.7505C17.4697 15.9905 16.4597 17.0005 15.2197 17.0005C13.9797 17.0005 12.9697 15.9905 12.9697 14.7505V10.5205L17.4697 11.5305Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.9597 14.8703C21.8997 16.0503 20.9197 17.0003 19.7197 17.0003C18.4797 17.0003 17.4697 15.9903 17.4697 14.7503V11.5303L19.4997 11.9803C20.8197 12.2703 21.8997 12.9503 21.9597 14.8703Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.5007 7.40986V21.9999H4.0807C2.9207 21.9999 1.9707 21.0699 1.9707 19.9299V5.08986C1.9707 2.46986 3.9307 1.27986 6.3207 2.44986L10.7507 4.63986C11.7107 5.10986 12.5007 6.35986 12.5007 7.40986Z" fill="currentColor" /><path d="M8.97 9.75H5.5C5.09 9.75 4.75 9.41 4.75 9C4.75 8.59 5.09 8.25 5.5 8.25H8.97C9.38 8.25 9.72 8.59 9.72 9C9.72 9.41 9.39 9.75 8.97 9.75Z" fill="currentColor" /><path d="M8.97 13.75H5.5C5.09 13.75 4.75 13.41 4.75 13C4.75 12.59 5.09 12.25 5.5 12.25H8.97C9.38 12.25 9.72 12.59 9.72 13C9.72 13.41 9.39 13.75 8.97 13.75Z" fill="currentColor" /><path opacity={duotone ? "0.6" : "1"} d="M22 15.0499V19.4999C22 20.8799 20.88 21.9999 19.5 21.9999H12.5V10.4199L12.97 10.5199L17.01 11.4199L17.49 11.5299L19.53 11.9899C20.02 12.0899 20.47 12.2599 20.86 12.5099C20.86 12.5199 20.87 12.5199 20.87 12.5199C20.97 12.5899 21.07 12.6699 21.16 12.7599C21.62 13.2199 21.92 13.8899 21.99 14.8699C21.99 14.9299 22 14.9899 22 15.0499Z" fill="currentColor" /><path d="M12.5 10.4199V16.4199C12.96 17.0299 13.68 17.4199 14.5 17.4199C15.89 17.4199 17.01 16.2999 17.01 14.9199V11.4299L12.97 10.5299L12.5 10.4199Z" fill="currentColor" /><path d="M21.9898 14.8699C21.9198 13.8899 21.6198 13.2199 21.1598 12.7599C21.0698 12.6699 20.9698 12.5899 20.8698 12.5199C20.8698 12.5199 20.8598 12.5199 20.8598 12.5099C20.4698 12.2599 20.0198 12.0899 19.5298 11.9899L17.4898 11.5299L17.0098 11.4199V14.9199C17.0098 16.2899 18.1198 17.4199 19.5098 17.4199C20.8498 17.4199 21.9198 16.3699 21.9998 15.0599V15.0499C21.9998 14.9899 21.9898 14.9299 21.9898 14.8699Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBuilding as IconComponentType).keywords = [
  "building",
  "edifice",
  "construction",
  "rising",
  "increasing",
  "augmentative",
  "heightening",
  "augmenting",
  "constructing",
  "constructive"
];

export default IconBuilding as IconComponentType;