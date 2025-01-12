import { FC } from 'react';

const IconMoneys: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9699 7.91998V13.07C19.9699 16.15 18.2099 17.47 15.5699 17.47H6.77988C6.32988 17.47 5.89988 17.43 5.49988 17.34C5.24988 17.3 5.00989 17.23 4.78989 17.15C3.28989 16.59 2.37988 15.29 2.37988 13.07V7.91998C2.37988 4.83998 4.13988 3.52002 6.77988 3.52002H15.5699C17.8099 3.52002 19.4199 4.47001 19.8499 6.64001C19.9199 7.04001 19.9699 7.44998 19.9699 7.91998Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22.97 10.92V16.07C22.97 19.15 21.21 20.47 18.57 20.47H9.78C9.04 20.47 8.37001 20.37 7.79001 20.15C6.60001 19.71 5.79 18.8 5.5 17.34C5.9 17.43 6.33 17.47 6.78 17.47H15.57C18.21 17.47 19.97 16.15 19.97 13.07V7.91998C19.97 7.44998 19.93 7.03001 19.85 6.64001C21.75 7.04001 22.97 8.37998 22.97 10.92Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.1703 13.14C12.6283 13.14 13.8103 11.958 13.8103 10.5C13.8103 9.04197 12.6283 7.85999 11.1703 7.85999C9.71226 7.85999 8.53027 9.04197 8.53027 10.5C8.53027 11.958 9.71226 13.14 11.1703 13.14Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5.4502 8.30005V12.7001" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.8896 8.30005V12.7001" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.9699 7.91998V13.07C19.9699 16.15 18.2099 17.47 15.5699 17.47H6.77988C6.32988 17.47 5.89988 17.43 5.49988 17.34C5.24988 17.3 5.00989 17.23 4.78989 17.15C3.28989 16.59 2.37988 15.29 2.37988 13.07V7.91998C2.37988 4.83998 4.13988 3.52002 6.77988 3.52002H15.5699C17.8099 3.52002 19.4199 4.47001 19.8499 6.64001C19.9199 7.04001 19.9699 7.44998 19.9699 7.91998Z" fill="currentColor" /><path d="M22.97 10.92V16.07C22.97 19.15 21.21 20.47 18.57 20.47H9.78C9.04 20.47 8.37001 20.37 7.79001 20.15C6.60001 19.71 5.79 18.8 5.5 17.34C5.9 17.43 6.33 17.47 6.78 17.47H15.57C18.21 17.47 19.97 16.15 19.97 13.07V7.91998C19.97 7.44998 19.93 7.03001 19.85 6.64001C21.75 7.04001 22.97 8.37998 22.97 10.92Z" fill="currentColor" /><path d="M11.1703 13.14C12.6283 13.14 13.8103 11.958 13.8103 10.5C13.8103 9.04197 12.6283 7.85999 11.1703 7.85999C9.71226 7.85999 8.53027 9.04197 8.53027 10.5C8.53027 11.958 9.71226 13.14 11.1703 13.14Z" fill="currentColor" /><path d="M5.4502 8.25C5.0402 8.25 4.7002 8.59 4.7002 9V12C4.7002 12.41 5.0402 12.75 5.4502 12.75C5.8602 12.75 6.2002 12.41 6.2002 12V9C6.2002 8.59 5.8702 8.25 5.4502 8.25Z" fill="currentColor" /><path d="M16.8799 8.25C16.4699 8.25 16.1299 8.59 16.1299 9V12C16.1299 12.41 16.4699 12.75 16.8799 12.75C17.2899 12.75 17.6299 12.41 17.6299 12V9C17.6299 8.59 17.2999 8.25 16.8799 8.25Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.8418 6.64002C19.4118 4.47002 17.8018 3.52002 15.5618 3.52002H6.78184C4.14184 3.52002 2.38184 4.84002 2.38184 7.92002V13.07C2.38184 15.29 3.29184 16.59 4.79184 17.15C5.01184 17.23 5.25184 17.3 5.50184 17.34C5.90184 17.43 6.33184 17.47 6.78184 17.47H15.5718C18.2118 17.47 19.9718 16.15 19.9718 13.07V7.92002C19.9718 7.45002 19.9318 7.03002 19.8418 6.64002ZM6.20184 12C6.20184 12.41 5.86184 12.75 5.45184 12.75C5.04184 12.75 4.70184 12.41 4.70184 12V9.00002C4.70184 8.59002 5.04184 8.25002 5.45184 8.25002C5.86184 8.25002 6.20184 8.59002 6.20184 9.00002V12ZM11.1718 13.14C9.71184 13.14 8.53184 11.96 8.53184 10.5C8.53184 9.04002 9.71184 7.86002 11.1718 7.86002C12.6318 7.86002 13.8118 9.04002 13.8118 10.5C13.8118 11.96 12.6318 13.14 11.1718 13.14ZM17.6318 12C17.6318 12.41 17.2918 12.75 16.8818 12.75C16.4718 12.75 16.1318 12.41 16.1318 12V9.00002C16.1318 8.59002 16.4718 8.25002 16.8818 8.25002C17.2918 8.25002 17.6318 8.59002 17.6318 9.00002V12Z" fill="currentColor" /><path d="M22.9716 10.92V16.07C22.9716 19.15 21.2116 20.48 18.5616 20.48H9.78164C9.03164 20.48 8.36164 20.37 7.78164 20.15C7.31164 19.98 6.90164 19.73 6.57164 19.41C6.39164 19.24 6.53164 18.97 6.78164 18.97H15.5616C19.2616 18.97 21.4616 16.77 21.4616 13.08V7.92003C21.4616 7.68003 21.7316 7.53003 21.9016 7.71003C22.5816 8.43003 22.9716 9.48003 22.9716 10.92Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMoneys as IconComponent).keywords = [
  "moneys",
  "rich",
  "monied",
  "wealthy",
  "affluent",
  "loaded",
  "flush",
  "dues",
  "funds",
  "fund"
];

export default IconMoneys as IconComponent;