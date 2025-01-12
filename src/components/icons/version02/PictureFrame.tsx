import { FC } from 'react';

const IconPictureFrame: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M9.66992 2L14.6199 22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.2 12.2202L2.66992 15.0002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8597 2H8.48969C4.84968 2 2.67969 4.17 2.67969 7.81V16.18C2.67969 19.82 4.84968 21.99 8.48969 21.99H16.8597C20.4997 21.99 22.6697 19.82 22.6697 16.18V7.81C22.6697 4.17 20.4997 2 16.8597 2Z" fill="currentColor" /><path d="M15.45 22H13.8499L11.6599 13.16L2.87994 15.72L2.66992 15.79V14.22L11.2999 11.7L8.88989 2H10.45L15.45 22Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_12_65001)"><path d="M11.1799 11.22L8.97992 2.39C8.92992 2.16 8.71992 2 8.47992 2C5.26992 2 2.66992 4.6 2.66992 7.81V13.51C2.66992 13.85 2.99992 14.1 3.32992 14L10.8299 11.83C11.0899 11.76 11.2499 11.49 11.1799 11.22Z" fill="currentColor" /><path d="M11.7899 13.6799C11.7199 13.3999 11.4299 13.2299 11.1499 13.3099L3.03992 15.6699C2.81992 15.7399 2.66992 15.9399 2.66992 16.1699V16.1899C2.66992 19.3999 5.26992 21.9999 8.47992 21.9999H13.1999C13.5299 21.9999 13.7799 21.6899 13.6999 21.3599L11.7899 13.6799Z" fill="currentColor" /><path d="M16.8598 2H11.1098C10.7798 2 10.5298 2.31 10.6098 2.64L15.3498 21.61C15.4098 21.84 15.6098 22 15.8498 22H16.8498C20.0698 22 22.6698 19.4 22.6698 16.19V7.81C22.6698 4.6 20.0698 2 16.8598 2Z" fill="currentColor" /></g><defs><clipPath ><rect width="24" height="24" fill="none" transform="translate(0.669922)" /></clipPath></defs></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPictureFrame as IconComponent).keywords = [
  "picture",
  "frame",
  "impression",
  "image",
  "painting",
  "depict",
  "motion picture",
  "movie",
  "depiction",
  "moving picture",
  "picture show",
  "build",
  "put",
  "compose",
  "form",
  "draw up",
  "set up",
  "shape",
  "border",
  "outline"
];

export default IconPictureFrame as IconComponent;