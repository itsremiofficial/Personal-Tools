import { FC } from 'react';

const IconBucketSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M9.60924 16.9301L6.77922 14.1C5.83922 13.16 5.83922 12.2101 6.77922 11.2701L11.4992 6.55005L16.6892 11.7401C16.9492 12.0001 16.9492 12.4201 16.6892 12.6801L12.4392 16.9301C11.4992 17.8701 10.5492 17.8701 9.60924 16.9301Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.5488 5.6001L11.4988 6.5401" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.10938 12.6401L16.7994 12.1702" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.9702 14.8101C17.9702 14.8101 16.6602 16.23 16.6602 17.1C16.6602 17.82 17.2502 18.41 17.9702 18.41C18.6902 18.41 19.2802 17.82 19.2802 17.1C19.2702 16.23 17.9702 14.8101 17.9702 14.8101Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g><path d="M22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8597 2H8.48969C4.84968 2 2.67969 4.17 2.67969 7.81V16.18C2.67969 19.82 4.84968 21.99 8.48969 21.99H16.8597C20.4997 21.99 22.6697 19.82 22.6697 16.18V7.81C22.6697 4.17 20.4997 2 16.8597 2Z" fill="currentColor" /><path d="M16.3304 11.93C16.3204 11.79 16.2604 11.64 16.1604 11.54L11.4604 6.84001L10.9104 6.28996C10.7204 6.09996 10.4204 6.09996 10.2304 6.28996C10.0404 6.47996 10.0404 6.77995 10.2304 6.96995L10.7804 7.52L7.18039 11.12C6.77039 11.53 6.55038 11.95 6.54038 12.36C6.53038 12.8 6.74039 13.24 7.18039 13.69L9.75037 16.26C10.6104 17.11 11.4704 17.11 12.3204 16.26L16.1704 12.41C16.2804 12.27 16.3404 12.09 16.3304 11.93Z" fill="currentColor" /><path d="M17.6308 14.1899C17.4708 14.0099 17.1608 14.0099 16.9908 14.1899C16.7908 14.3999 15.8008 15.5199 15.8008 16.3599C15.8008 17.1899 16.4708 17.8599 17.3008 17.8599C18.1308 17.8599 18.8008 17.1899 18.8008 16.3599C18.8108 15.5199 17.8308 14.4099 17.6308 14.1899Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM9.72992 16.25L7.16992 13.68C6.72992 13.24 6.51992 12.8 6.52992 12.35C6.53992 11.93 6.75992 11.52 7.16992 11.11L10.7699 7.51L10.2099 6.96C10.0199 6.77 10.0199 6.47 10.2099 6.28C10.3999 6.09 10.6999 6.09 10.8899 6.28L11.4399 6.83L16.1399 11.53C16.2399 11.63 16.3099 11.78 16.3099 11.92C16.3199 12.09 16.2699 12.26 16.1399 12.39L12.2899 16.24C11.4499 17.1 10.5899 17.1 9.72992 16.25ZM17.3099 17.86C16.4799 17.86 15.8099 17.19 15.8099 16.36C15.8099 15.52 16.7999 14.41 16.9999 14.19C17.1599 14.01 17.4699 14.01 17.6399 14.19C17.8399 14.4 18.8299 15.52 18.8299 16.36C18.8099 17.19 18.1399 17.86 17.3099 17.86Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBucketSquare as IconComponent).keywords = [
  "bucket",
  "square",
  "pail",
  "bucketful",
  "tub",
  "basin",
  "boiler",
  "spade",
  "basket",
  "trough",
  "shovel",
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

export default IconBucketSquare as IconComponent;