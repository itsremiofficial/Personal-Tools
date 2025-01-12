import { FC } from 'react';

const IconLike: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.6699 18.8597H17.9099C17.1099 18.8597 16.3499 19.1697 15.7899 19.7297L14.0799 21.4197C13.2999 22.1897 12.0299 22.1897 11.2499 21.4197L9.53992 19.7297C8.97992 19.1697 8.20992 18.8597 7.41992 18.8597H6.66992C5.00992 18.8597 3.66992 17.5298 3.66992 15.8898V4.97974C3.66992 3.33974 5.00992 2.00977 6.66992 2.00977H18.6699C20.3299 2.00977 21.6699 3.33974 21.6699 4.97974V15.8898C21.6699 17.5198 20.3299 18.8597 18.6699 18.8597Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.9499 14.96C12.7999 15.01 12.5499 15.01 12.3899 14.96C11.0899 14.51 8.16992 12.66 8.16992 9.51001C8.16992 8.12001 9.28992 7 10.6699 7C11.4899 7 12.2099 7.39 12.6699 8C13.1299 7.39 13.8499 7 14.6699 7C16.0499 7 17.1699 8.12001 17.1699 9.51001C17.1599 12.66 14.2499 14.51 12.9499 14.96Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18.6699 18.8597H17.9099C17.1099 18.8597 16.3499 19.1698 15.7899 19.7298L14.0799 21.4198C13.2999 22.1898 12.0299 22.1898 11.2499 21.4198L9.53992 19.7298C8.97992 19.1698 8.20992 18.8597 7.41992 18.8597H6.66992C5.00992 18.8597 3.66992 17.5298 3.66992 15.8898V4.97977C3.66992 3.33977 5.00992 2.00977 6.66992 2.00977H18.6699C20.3299 2.00977 21.6699 3.33977 21.6699 4.97977V15.8898C21.6699 17.5198 20.3299 18.8597 18.6699 18.8597Z" fill="currentColor" /><path d="M12.9499 14.96C12.7999 15.01 12.5499 15.01 12.3899 14.96C11.0899 14.51 8.16992 12.66 8.16992 9.51001C8.16992 8.12001 9.28992 7 10.6699 7C11.4899 7 12.2099 7.39 12.6699 8C13.1299 7.39 13.8499 7 14.6699 7C16.0499 7 17.1699 8.12001 17.1699 9.51001C17.1599 12.66 14.2499 14.51 12.9499 14.96Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.6699 2H6.66992C5.00992 2 3.66992 3.33 3.66992 4.97V15.88C3.66992 17.52 5.00992 18.85 6.66992 18.85H7.42992C8.22992 18.85 8.98992 19.16 9.54992 19.72L11.2599 21.41C12.0399 22.18 13.3099 22.18 14.0899 21.41L15.7999 19.72C16.3599 19.16 17.1299 18.85 17.9199 18.85H18.6699C20.3299 18.85 21.6699 17.52 21.6699 15.88V4.97C21.6699 3.33 20.3299 2 18.6699 2ZM12.9499 14.96C12.7999 15.01 12.5499 15.01 12.3899 14.96C11.0899 14.51 8.16992 12.66 8.16992 9.51C8.17992 8.12 9.28992 7 10.6699 7C11.4899 7 12.2099 7.39 12.6699 8C13.1299 7.39 13.8499 7 14.6699 7C16.0499 7 17.1699 8.12 17.1699 9.51C17.1599 12.66 14.2499 14.51 12.9499 14.96Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLike as IconComponent).keywords = [
  "like",
  "wish",
  "ish",
  "like-minded",
  "suchlike",
  "corresponding",
  "similar",
  "alike",
  "equal",
  "comparable"
];

export default IconLike as IconComponent;