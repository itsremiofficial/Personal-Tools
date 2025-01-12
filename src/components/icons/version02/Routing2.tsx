import { FC } from 'react';

const IconRouting2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M6.13965 9C8.07264 9 9.63965 7.433 9.63965 5.5C9.63965 3.567 8.07264 2 6.13965 2C4.20665 2 2.63965 3.567 2.63965 5.5C2.63965 7.433 4.20665 9 6.13965 9Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.4" : "1"} d="M17.6396 15H20.6396C21.7396 15 22.6396 15.9 22.6396 17V20C22.6396 21.1 21.7396 22 20.6396 22H17.6396C16.5396 22 15.6396 21.1 15.6396 20V17C15.6396 15.9 16.5396 15 17.6396 15Z" stroke="currentColor" strokeWidth={width} /><path d="M12.6696 5H15.3496C17.1996 5 18.0596 7.29 16.6696 8.51L8.67962 15.5C7.28962 16.71 8.14962 19 9.98962 19H12.6696" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M6.15565 5.5H6.1672" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.1556 18.5H19.1672" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M6.13965 9C8.07264 9 9.63965 7.433 9.63965 5.5C9.63965 3.567 8.07264 2 6.13965 2C4.20665 2 2.63965 3.567 2.63965 5.5C2.63965 7.433 4.20665 9 6.13965 9Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17.6699 15H20.6699C21.7699 15 22.6699 15.9 22.6699 17V20C22.6699 21.1 21.7699 22 20.6699 22H17.6699C16.5699 22 15.6699 21.1 15.6699 20V17C15.6699 15.9 16.5699 15 17.6699 15Z" fill="currentColor" /><path d="M12.6704 19.75H9.99035C8.83035 19.75 7.82035 19.05 7.42035 17.97C7.01035 16.89 7.31035 15.7 8.18035 14.93L16.1704 7.94C16.6504 7.52 16.6604 6.95 16.5204 6.56C16.3704 6.17 15.9904 5.75 15.3504 5.75H12.6704C12.2604 5.75 11.9204 5.41 11.9204 5C11.9204 4.59 12.2604 4.25 12.6704 4.25H15.3504C16.5104 4.25 17.5204 4.95 17.9204 6.03C18.3304 7.11 18.0304 8.3 17.1604 9.07L9.17035 16.06C8.69035 16.48 8.68035 17.05 8.82035 17.44C8.97035 17.83 9.35035 18.25 9.99035 18.25H12.6704C13.0804 18.25 13.4204 18.59 13.4204 19C13.4204 19.41 13.0804 19.75 12.6704 19.75Z" fill="currentColor" /><path d="M19.1797 19.5C18.6297 19.5 18.1797 19.05 18.1797 18.5C18.1797 17.95 18.6197 17.5 19.1797 17.5H19.1897C19.7397 17.5 20.1897 17.95 20.1897 18.5C20.1897 19.05 19.7397 19.5 19.1797 19.5Z" fill="currentColor" /><path d="M6.17969 6.5C5.62969 6.5 5.17969 6.05 5.17969 5.5C5.17969 4.95 5.61969 4.5 6.17969 4.5H6.18969C6.73969 4.5 7.18969 4.95 7.18969 5.5C7.18969 6.05 6.73969 6.5 6.17969 6.5Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_12_64979)"><path d="M12.6684 19.75H9.9884C8.8284 19.75 7.8184 19.05 7.4184 17.97C7.0084 16.89 7.3084 15.7 8.1784 14.93L16.1684 7.94C16.6484 7.52 16.6584 6.95 16.5184 6.56C16.3684 6.17 15.9884 5.75 15.3484 5.75H12.6684C12.2584 5.75 11.9184 5.41 11.9184 5C11.9184 4.59 12.2584 4.25 12.6684 4.25H15.3484C16.5084 4.25 17.5184 4.95 17.9184 6.03C18.3284 7.11 18.0284 8.3 17.1584 9.07L9.1684 16.06C8.6884 16.48 8.6784 17.05 8.8184 17.44C8.9684 17.83 9.3484 18.25 9.9884 18.25H12.6684C13.0784 18.25 13.4184 18.59 13.4184 19C13.4184 19.41 13.0784 19.75 12.6684 19.75Z" fill="currentColor" /><path d="M20.6689 15H17.6689C16.5689 15 15.6689 15.9 15.6689 17V20C15.6689 21.1 16.5689 22 17.6689 22H20.6689C21.7689 22 22.6689 21.1 22.6689 20V17C22.6689 15.9 21.7689 15 20.6689 15ZM19.1789 19.5C18.6289 19.5 18.1789 19.05 18.1789 18.5C18.1789 17.95 18.6189 17.5 19.1789 17.5H19.1889C19.7389 17.5 20.1889 17.95 20.1889 18.5C20.1889 19.05 19.7389 19.5 19.1789 19.5Z" fill="currentColor" /><path d="M6.13867 2C4.20867 2 2.63867 3.57 2.63867 5.5C2.63867 7.43 4.20867 9 6.13867 9C8.06867 9 9.63867 7.43 9.63867 5.5C9.63867 3.57 8.07867 2 6.13867 2ZM6.17867 6.5C5.62867 6.5 5.17867 6.05 5.17867 5.5C5.17867 4.95 5.61867 4.5 6.17867 4.5H6.18867C6.73867 4.5 7.18867 4.95 7.18867 5.5C7.18867 6.05 6.73867 6.5 6.17867 6.5Z" fill="currentColor" /></g><defs><clipPath ><rect width="24" height="24" fill="none" transform="translate(0.669922)" /></clipPath></defs></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRouting2 as IconComponent).keywords = [
  "routing",
  "2",
  "mob",
  "expel",
  "spread-eagle",
  "rabble",
  "discomfiture",
  "discomfit",
  "groove",
  "rootle",
  "gouge",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out"
];

export default IconRouting2 as IconComponent;