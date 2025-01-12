import { FC } from 'react';

const IconUFO: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M5.50036 15.5L4.5 17.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M18.4996 15.5L19.5 17.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M17 8.21094C19.989 8.93258 22 10.2814 22 11.8262C22 14.1313 17.5228 15.9999 12 15.9999C6.47715 15.9999 2 14.1313 2 11.8262C2 10.2814 4.01099 8.93258 7 8.21094" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M7 8.72876C7 6.11714 9.11714 4 11.7288 4H12.2712C14.8829 4 17 6.11714 17 8.72876C17 8.90601 16.9458 9.07918 16.8003 9.18039C16.3862 9.4684 15.1898 10 12 10C8.81016 10 7.6138 9.4684 7.19972 9.18039C7.0542 9.07918 7 8.90601 7 8.72876Z" fill="currentColor" stroke="currentColor" strokeWidth={width} /><path d="M12 16V19" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><circle opacity={duotone ? "0.5" : "1"} cx="12" cy="13" r="1" fill="currentColor" /><circle cx="7" cy="12" r="1" fill="currentColor" /><circle cx="17" cy="12" r="1" fill="currentColor" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5.67459 8.59351C3.4317 9.35888 2 10.5228 2 11.8263C2 13.0342 3.22958 14.1223 5.19488 14.8845L3.85699 17.1143C3.64388 17.4695 3.75906 17.9302 4.11424 18.1433C4.46943 18.3564 4.93012 18.2412 5.14323 17.886L6.64323 15.386C6.64924 15.376 6.65498 15.3659 6.66046 15.3558C8.00688 15.7113 9.57078 15.9364 11.2501 15.9884V19.0002C11.2501 19.4144 11.5859 19.7502 12.0001 19.7502C12.4143 19.7502 12.7501 19.4144 12.7501 19.0002V15.9883C14.4294 15.9364 15.9933 15.7113 17.3397 15.3557C17.3452 15.3659 17.351 15.376 17.357 15.386L18.857 17.886C19.0701 18.2412 19.5308 18.3564 19.886 18.1433C20.2412 17.9302 20.3563 17.4695 20.1432 17.1143L18.8053 14.8844C20.7705 14.1223 22 13.0342 22 11.8263C22 10.5228 20.5683 9.35887 18.3254 8.59351C18.2008 8.88378 17.9937 9.17752 17.6568 9.41187C16.8685 9.96014 15.3013 10.5 12 10.5C8.6987 10.5 7.1315 9.96014 6.34322 9.41187C6.00629 9.17752 5.79918 8.88378 5.67459 8.59351ZM13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 12.4478 11.4477 12 12 12C12.5523 12 13 12.4478 13 13ZM7 13C7.55228 13 8 12.5523 8 12C8 11.4478 7.55228 11 7 11C6.44772 11 6 11.4478 6 12C6 12.5523 6.44772 13 7 13ZM18 12C18 12.5523 17.5523 13 17 13C16.4477 13 16 12.5523 16 12C16 11.4478 16.4477 11 17 11C17.5523 11 18 11.4478 18 12Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M7.05518 8.0054C7.40336 5.73714 9.36329 4 11.729 4H12.2714C14.6371 4 16.597 5.73714 16.9452 8.0054C16.9133 8.07425 16.8662 8.13466 16.8005 8.18039C16.3864 8.4684 15.19 9 12.0002 9C8.81036 9 7.614 8.4684 7.19991 8.18039C7.13417 8.13466 7.08706 8.07425 7.05518 8.0054Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5.67459 8.59346C3.4317 9.35883 2 10.5227 2 11.8262C2 13.0342 3.22958 14.1223 5.19488 14.8844L3.85699 17.1142C3.64388 17.4694 3.75906 17.9301 4.11424 18.1432C4.46943 18.3563 4.93012 18.2412 5.14323 17.886L6.64323 15.386C6.64924 15.376 6.65498 15.3659 6.66046 15.3557C8.00688 15.7113 9.57078 15.9363 11.2501 15.9883V19.0001C11.2501 19.4143 11.5859 19.7501 12.0001 19.7501C12.4143 19.7501 12.7501 19.4143 12.7501 19.0001V15.9883C14.4294 15.9363 15.9933 15.7112 17.3397 15.3557C17.3452 15.3659 17.351 15.376 17.357 15.386L18.857 17.886C19.0701 18.2412 19.5308 18.3563 19.886 18.1432C20.2412 17.9301 20.3563 17.4694 20.1432 17.1142L18.8053 14.8844C20.7705 14.1222 22 13.0342 22 11.8262C22 10.5227 20.5683 9.35883 18.3254 8.59346C18.2008 8.88374 17.9937 9.17747 17.6568 9.41182C16.8685 9.96009 15.3013 10.5 12 10.5C8.6987 10.5 7.1315 9.96009 6.34322 9.41182C6.00629 9.17747 5.79918 8.88374 5.67459 8.59346ZM13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13ZM7 13C7.55228 13 8 12.5523 8 12C8 11.4477 7.55228 11 7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13ZM18 12C18 12.5523 17.5523 13 17 13C16.4477 13 16 12.5523 16 12C16 11.4477 16.4477 11 17 11C17.5523 11 18 11.4477 18 12Z" fill="currentColor" /><path d="M7.05498 8.0054C7.40316 5.73714 9.3631 4 11.7288 4H12.2712C14.6369 4 16.5968 5.73714 16.945 8.0054C16.9131 8.07425 16.866 8.13466 16.8003 8.18039C16.3862 8.4684 15.1898 9 12 9C8.81016 9 7.6138 8.4684 7.19972 8.18039C7.13397 8.13466 7.08687 8.07425 7.05498 8.0054Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconUFO as IconComponent).keywords = [];

export default IconUFO as IconComponent;