import { FC } from 'react';

const IconUserSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18.8098 21.62C17.9298 21.88 16.8898 22 15.6698 22H9.66978C8.44978 22 7.40979 21.88 6.52979 21.62C6.74979 19.02 9.41978 16.97 12.6698 16.97C15.9198 16.97 18.5898 19.02 18.8098 21.62Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22.6699 9V15C22.6699 18.78 21.5299 20.85 18.8099 21.62C17.9299 21.88 16.8899 22 15.6699 22H9.66992C8.44992 22 7.40992 21.88 6.52992 21.62C3.80992 20.85 2.66992 18.78 2.66992 15V9C2.66992 4 4.66992 2 9.66992 2H15.6699C20.6699 2 22.6699 4 22.6699 9Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.2498 10.58C16.2498 12.56 14.6498 14.17 12.6698 14.17C10.6898 14.17 9.08984 12.56 9.08984 10.58C9.08984 8.60002 10.6898 7 12.6698 7C14.6498 7 16.2498 8.60002 16.2498 10.58Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.6699 7.81V16.19C22.6699 19 21.3799 20.93 19.1099 21.66C18.4499 21.89 17.6899 22 16.8599 22H8.47992C7.64992 22 6.88992 21.89 6.22992 21.66C3.95992 20.93 2.66992 19 2.66992 16.19V7.81C2.66992 4.17 4.83992 2 8.47992 2H16.8599C20.4999 2 22.6699 4.17 22.6699 7.81Z" fill="currentColor" /><path d="M19.11 21.66C18.45 21.89 17.69 22 16.86 22H8.47998C7.64998 22 6.88998 21.89 6.22998 21.66C6.57998 19.02 9.33998 16.97 12.67 16.97C16 16.97 18.76 19.02 19.11 21.66Z" fill="currentColor" /><path d="M16.2498 11.58C16.2498 13.56 14.6498 15.17 12.6698 15.17C10.6898 15.17 9.08984 13.56 9.08984 11.58C9.08984 9.60002 10.6898 8 12.6698 8C14.6498 8 16.2498 9.60002 16.2498 11.58Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.19C2.66992 19 3.95992 20.93 6.22992 21.66C6.88992 21.89 7.64992 22 8.47992 22H16.8599C17.6899 22 18.4499 21.89 19.1099 21.66C21.3799 20.93 22.6699 19 22.6699 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM21.1699 16.19C21.1699 18.33 20.3299 19.68 18.6399 20.24C17.6699 18.33 15.3699 16.97 12.6699 16.97C9.96992 16.97 7.67992 18.32 6.69992 20.24H6.68992C5.01992 19.7 4.16992 18.34 4.16992 16.2V7.81C4.16992 4.99 5.65992 3.5 8.47992 3.5H16.8599C19.6799 3.5 21.1699 4.99 21.1699 7.81V16.19Z" fill="currentColor" /><path d="M12.6698 8C10.6898 8 9.08984 9.6 9.08984 11.58C9.08984 13.56 10.6898 15.17 12.6698 15.17C14.6498 15.17 16.2498 13.56 16.2498 11.58C16.2498 9.6 14.6498 8 12.6698 8Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconUserSquare as IconComponent).keywords = [
  "user",
  "square",
  "exploiter",
  "enjoyer",
  "drug user",
  "substance abuser",
  "customer",
  "client",
  "employer",
  "consumer",
  "employee",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest"
];

export default IconUserSquare as IconComponent;