import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconLikeTag: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M10.3203 13.7999L11.9303 15.0499C12.1403 15.2599 12.6103 15.3598 12.9203 15.3598H14.9003C15.5203 15.3598 16.2003 14.8899 16.3603 14.2699L17.6103 10.4798C17.8703 9.74981 17.4003 9.12984 16.6203 9.12984H14.5403C14.2303 9.12984 13.9703 8.86984 14.0203 8.50984L14.2803 6.84981C14.3803 6.37981 14.0703 5.85979 13.6003 5.70979C13.1803 5.54979 12.6603 5.75978 12.4603 6.06978L10.3303 9.23982" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" /><path d="M7.66992 13.7998V8.70972C7.66992 7.97972 7.97992 7.71973 8.70992 7.71973H9.22992C9.95992 7.71973 10.2699 7.97972 10.2699 8.70972V13.7998C10.2699 14.5298 9.95992 14.7898 9.22992 14.7898H8.70992C7.97992 14.7898 7.66992 14.5298 7.66992 13.7998Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g><path d="M18.6699 18.8597H17.9099C17.1099 18.8597 16.3499 19.1697 15.7899 19.7297L14.0799 21.4198C13.2999 22.1898 12.0299 22.1898 11.2499 21.4198L9.53992 19.7297C8.97992 19.1697 8.20992 18.8597 7.41992 18.8597H6.66992C5.00992 18.8597 3.66992 17.5298 3.66992 15.8898V4.97974C3.66992 3.33974 5.00992 2.00977 6.66992 2.00977H18.6699C20.3299 2.00977 21.6699 3.33974 21.6699 4.97974V15.8898C21.6699 17.5198 20.3299 18.8597 18.6699 18.8597Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18.6699 18.8597H17.9099C17.1099 18.8597 16.3499 19.1697 15.7899 19.7297L14.0799 21.4197C13.2999 22.1897 12.0299 22.1897 11.2499 21.4197L9.53992 19.7297C8.97992 19.1697 8.20992 18.8597 7.41992 18.8597H6.66992C5.00992 18.8597 3.66992 17.5298 3.66992 15.8898V4.97974C3.66992 3.33974 5.00992 2.00977 6.66992 2.00977H18.6699C20.3299 2.00977 21.6699 3.33974 21.6699 4.97974V15.8898C21.6699 17.5198 20.3299 18.8597 18.6699 18.8597Z" fill="currentColor" /><path d="M17.2504 9.56974C17.0604 9.29974 16.7404 9.14976 16.3604 9.14976H14.4104C14.2804 9.14976 14.1604 9.09973 14.0804 8.99973C14.0004 8.89973 13.9604 8.76974 13.9804 8.62974L14.2204 7.06974C14.3204 6.60974 14.0104 6.07973 13.5504 5.92973C13.1204 5.76973 12.6104 5.98971 12.4104 6.28971L10.4704 9.16972V8.80973C10.4704 8.10973 10.1704 7.81974 9.43039 7.81974H8.9404C8.2004 7.81974 7.90039 8.10973 7.90039 8.80973V13.5898C7.90039 14.2898 8.2004 14.5798 8.9404 14.5798H9.43039C10.1304 14.5798 10.4304 14.3097 10.4604 13.6697L11.9304 14.7997C12.1304 14.9997 12.5804 15.1097 12.9004 15.1097H14.7504C15.3904 15.1097 16.0304 14.6297 16.1704 14.0397L17.3404 10.4797C17.4704 10.1597 17.4404 9.82974 17.2504 9.56974Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.6699 2H6.66992C5.00992 2 3.66992 3.33 3.66992 4.97V15.88C3.66992 17.52 5.00992 18.85 6.66992 18.85H7.42992C8.22992 18.85 8.98992 19.16 9.54992 19.72L11.2599 21.41C12.0399 22.18 13.3099 22.18 14.0899 21.41L15.7999 19.72C16.3599 19.16 17.1299 18.85 17.9199 18.85H18.6699C20.3299 18.85 21.6699 17.52 21.6699 15.88V4.97C21.6699 3.33 20.3299 2 18.6699 2ZM17.3499 10.5L16.1799 14.06C16.0299 14.65 15.3999 15.13 14.7599 15.13H12.9099C12.5899 15.13 12.1399 15.02 11.9399 14.82L10.4699 13.67C10.4399 14.31 10.1499 14.58 9.43992 14.58H8.95992C8.21992 14.58 7.91992 14.29 7.91992 13.59V8.82C7.91992 8.12 8.21992 7.83 8.95992 7.83H9.44992C10.1899 7.83 10.4899 8.12 10.4899 8.82V9.18L12.4299 6.3C12.6299 5.99 13.1399 5.77 13.5699 5.94C14.0399 6.1 14.3399 6.62 14.2399 7.08L13.9999 8.64C13.9699 8.77 13.9999 8.91 14.0899 9C14.1699 9.09 14.2899 9.15 14.4199 9.15H16.3699C16.7499 9.15 17.0699 9.3 17.2599 9.57C17.4399 9.83 17.4699 10.16 17.3499 10.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconLikeTag;