import { FC } from 'react';

const Icon3square: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.6699 17V19.38C12.6699 21.25 11.9199 22 10.0399 22H5.28992C3.41992 22 2.66992 21.25 2.66992 19.38V14.63C2.66992 12.75 3.41992 12 5.28992 12H7.66992V14.37C7.66992 16.25 8.41992 17 10.2899 17H12.6699Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M17.6699 12V14.37C17.6699 16.25 16.9199 17 15.0399 17H10.2899C8.41992 17 7.66992 16.25 7.66992 14.37V9.62C7.66992 7.75 8.41992 7 10.2899 7H12.6699V9.37C12.6699 11.25 13.4199 12 15.2899 12H17.6699Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22.6699 4.62V9.37C22.6699 11.25 21.9199 12 20.0399 12H15.2899C13.4199 12 12.6699 11.25 12.6699 9.37V4.62C12.6699 2.75 13.4199 2 15.2899 2H20.0399C21.9199 2 22.6699 2.75 22.6699 4.62Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.6699 17V19.38C12.6699 21.25 11.9199 22 10.0399 22H5.28992C3.41992 22 2.66992 21.25 2.66992 19.38V14.63C2.66992 12.75 3.41992 12 5.28992 12H7.66992V14.37C7.66992 16.25 8.41992 17 10.2899 17H12.6699Z" fill="currentColor" /><path opacity={duotone ? "0.6" : "1"} d="M17.6699 12V14.37C17.6699 16.25 16.9199 17 15.0399 17H10.2899C8.41992 17 7.66992 16.25 7.66992 14.37V9.62C7.66992 7.75 8.41992 7 10.2899 7H12.6699V9.37C12.6699 11.25 13.4199 12 15.2899 12H17.6699Z" fill="currentColor" /><path d="M22.6699 4.62V9.37C22.6699 11.25 21.9199 12 20.0399 12H15.2899C13.4199 12 12.6699 11.25 12.6699 9.37V4.62C12.6699 2.75 13.4199 2 15.2899 2H20.0399C21.9199 2 22.6699 2.75 22.6699 4.62Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 18.5V19.38C12.6699 21.25 11.9199 22 10.0399 22H5.28992C3.83992 22 2.66992 20.83 2.66992 19.38V14.63C2.66992 12.75 3.41992 12 5.28992 12H6.16992V15.5C6.16992 17.16 7.50992 18.5 9.16992 18.5H12.6699Z" fill="currentColor" /><path d="M17.6699 13.5V14.37C17.6699 15.82 16.4899 17 15.0399 17H10.2899C8.41992 17 7.66992 16.25 7.66992 14.37V9.62C7.66992 8.17 8.83992 7 10.2899 7H11.1699V10.5C11.1699 12.16 12.5099 13.5 14.1699 13.5H17.6699Z" fill="currentColor" /><path d="M22.6699 4.62V9.37C22.6699 11.25 21.9199 12 20.0399 12H15.2899C13.4199 12 12.6699 11.25 12.6699 9.37V4.62C12.6699 2.75 13.4199 2 15.2899 2H20.0399C21.9199 2 22.6699 2.75 22.6699 4.62Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(Icon3square as IconComponent).keywords = [
  "3square"
];

export default Icon3square as IconComponent;