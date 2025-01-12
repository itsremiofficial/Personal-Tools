import { FC } from 'react';

const IconDollar: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity={duotone ? "0.5" : "1"} cx="12" cy="12.0005" r="10" stroke="currentColor" strokeWidth={width} /><path d="M12 6.00049V18.0005" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M15 9.50049C15 8.11978 13.6569 7.00049 12 7.00049C10.3431 7.00049 9 8.11978 9 9.50049C9 10.8812 10.3431 12.0005 12 12.0005C13.6569 12.0005 15 13.1198 15 14.5005C15 15.8812 13.6569 17.0005 12 17.0005C10.3431 17.0005 9 15.8812 9 14.5005" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} fillRule="evenodd" clipRule="evenodd" d="M22 12.0005C22 17.5233 17.5228 22.0005 12 22.0005C6.47715 22.0005 2 17.5233 2 12.0005C2 6.47764 6.47715 2.00049 12 2.00049C17.5228 2.00049 22 6.47764 22 12.0005Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 5.25049C12.4142 5.25049 12.75 5.58627 12.75 6.00049V6.31722C14.3804 6.60916 15.75 7.8341 15.75 9.50049C15.75 9.9147 15.4142 10.2505 15 10.2505C14.5858 10.2505 14.25 9.9147 14.25 9.50049C14.25 8.82203 13.6859 8.10388 12.75 7.84797V11.3172C14.3804 11.6092 15.75 12.8341 15.75 14.5005C15.75 16.1669 14.3804 17.3918 12.75 17.6838V18.0005C12.75 18.4147 12.4142 18.7505 12 18.7505C11.5858 18.7505 11.25 18.4147 11.25 18.0005V17.6838C9.61957 17.3918 8.25 16.1669 8.25 14.5005C8.25 14.0863 8.58579 13.7505 9 13.7505C9.41421 13.7505 9.75 14.0863 9.75 14.5005C9.75 15.1789 10.3141 15.8971 11.25 16.153V12.6838C9.61957 12.3918 8.25 11.1669 8.25 9.50049C8.25 7.8341 9.61957 6.60916 11.25 6.31722V6.00049C11.25 5.58627 11.5858 5.25049 12 5.25049ZM11.25 7.84797C10.3141 8.10388 9.75 8.82203 9.75 9.50049C9.75 10.1789 10.3141 10.8971 11.25 11.153V7.84797ZM14.25 14.5005C14.25 13.822 13.6859 13.1039 12.75 12.848V16.153C13.6859 15.8971 14.25 15.1789 14.25 14.5005Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.25 7.84797C10.3141 8.10388 9.75 8.82203 9.75 9.50049C9.75 10.1789 10.3141 10.8971 11.25 11.153V7.84797Z" fill="currentColor" /><path d="M12.75 12.848V16.153C13.6859 15.8971 14.25 15.1789 14.25 14.5005C14.25 13.822 13.6859 13.1039 12.75 12.848Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M22 12.0005C22 17.5233 17.5228 22.0005 12 22.0005C6.47715 22.0005 2 17.5233 2 12.0005C2 6.47764 6.47715 2.00049 12 2.00049C17.5228 2.00049 22 6.47764 22 12.0005ZM12 5.25049C12.4142 5.25049 12.75 5.58627 12.75 6.00049V6.31722C14.3804 6.60916 15.75 7.8341 15.75 9.50049C15.75 9.9147 15.4142 10.2505 15 10.2505C14.5858 10.2505 14.25 9.9147 14.25 9.50049C14.25 8.82203 13.6859 8.10388 12.75 7.84797V11.3172C14.3804 11.6092 15.75 12.8341 15.75 14.5005C15.75 16.1669 14.3804 17.3918 12.75 17.6838V18.0005C12.75 18.4147 12.4142 18.7505 12 18.7505C11.5858 18.7505 11.25 18.4147 11.25 18.0005V17.6838C9.61957 17.3918 8.25 16.1669 8.25 14.5005C8.25 14.0863 8.58579 13.7505 9 13.7505C9.41421 13.7505 9.75 14.0863 9.75 14.5005C9.75 15.1789 10.3141 15.8971 11.25 16.153V12.6838C9.61957 12.3918 8.25 11.1669 8.25 9.50049C8.25 7.8341 9.61957 6.60916 11.25 6.31722V6.00049C11.25 5.58627 11.5858 5.25049 12 5.25049Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDollar as IconComponent).keywords = [
  "dollar",
  "dollar bill",
  "dollar sign",
  "buck",
  "clam",
  "dollar mark",
  "one dollar bill",
  "loonie",
  "dime",
  "penny"
];

export default IconDollar as IconComponent;