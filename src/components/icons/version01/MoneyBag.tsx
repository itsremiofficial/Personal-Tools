import { FC } from 'react';

const IconMoneyBag: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 14.0005C2 10.2293 2 8.34363 3.17157 7.17206C4.34315 6.00049 6.22876 6.00049 10 6.00049H14C17.7712 6.00049 19.6569 6.00049 20.8284 7.17206C22 8.34363 22 10.2293 22 14.0005C22 17.7717 22 19.6573 20.8284 20.8289C19.6569 22.0005 17.7712 22.0005 14 22.0005H10C6.22876 22.0005 4.34315 22.0005 3.17157 20.8289C2 19.6573 2 17.7717 2 14.0005Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M16 6.00049C16 4.11487 16 3.17206 15.4142 2.58627C14.8284 2.00049 13.8856 2.00049 12 2.00049C10.1144 2.00049 9.17157 2.00049 8.58579 2.58627C8 3.17206 8 4.11487 8 6.00049" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M12 17.3338C13.1046 17.3338 14 16.5876 14 15.6672C14 14.7467 13.1046 14.0005 12 14.0005C10.8954 14.0005 10 13.2543 10 12.3338C10 11.4133 10.8954 10.6672 12 10.6672M12 17.3338C10.8954 17.3338 10 16.5876 10 15.6672M12 17.3338V18.0005M12 10.0005V10.6672M12 10.6672C13.1046 10.6672 14 11.4133 14 12.3338" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M3.17157 7.17206C4.01536 6.32827 5.22954 6.0922 7.25179 6.02615L8.75208 6.00236C9.1435 6.00049 9.55885 6.00049 10 6.00049H14C14.4412 6.00049 14.8565 6.00049 15.2479 6.00236L16.7482 6.02615C18.7705 6.0922 19.9846 6.32827 20.8284 7.17206C22 8.34363 22 10.2293 22 14.0005C22 17.7717 22 19.6573 20.8284 20.8289C19.6569 22.0005 17.7712 22.0005 14 22.0005H9.99998C6.22876 22.0005 4.34314 22.0005 3.17157 20.8289C2 19.6573 2 17.7717 2 14.0005C2 10.2293 2 8.34363 3.17157 7.17206Z" fill="currentColor" /><path d="M12.75 10.0005C12.75 9.58628 12.4142 9.25049 12 9.25049C11.5858 9.25049 11.25 9.58628 11.25 10.0005V10.0107C10.1612 10.285 9.25 11.1435 9.25 12.3338C9.25 13.7907 10.6151 14.7505 12 14.7505C12.8242 14.7505 13.25 15.2831 13.25 15.6672C13.25 16.0512 12.8242 16.5838 12 16.5838C11.1758 16.5838 10.75 16.0512 10.75 15.6672C10.75 15.2529 10.4142 14.9172 10 14.9172C9.58579 14.9172 9.25 15.2529 9.25 15.6672C9.25 16.8575 10.1612 17.716 11.25 17.9903V18.0005C11.25 18.4147 11.5858 18.7505 12 18.7505C12.4142 18.7505 12.75 18.4147 12.75 18.0005V17.9903C13.8388 17.716 14.75 16.8575 14.75 15.6672C14.75 14.2102 13.3849 13.2505 12 13.2505C11.1758 13.2505 10.75 12.7179 10.75 12.3338C10.75 11.9498 11.1758 11.4172 12 11.4172C12.8242 11.4172 13.25 11.9498 13.25 12.3338C13.25 12.748 13.5858 13.0838 14 13.0838C14.4142 13.0838 14.75 12.748 14.75 12.3338C14.75 11.1435 13.8388 10.285 12.75 10.0107V10.0005Z" fill="currentColor" /><path d="M12.0522 1.25049H11.9482C11.0497 1.25046 10.3005 1.25044 9.70568 1.3304C9.07789 1.41481 8.51109 1.60048 8.05562 2.05595C7.60015 2.51142 7.41448 3.07822 7.33007 3.70601C7.27275 4.13238 7.25653 5.15196 7.25195 6.02615L8.75224 6.00237C8.75677 5.15572 8.77116 4.24456 8.8167 3.90588C8.87874 3.44442 8.98596 3.24692 9.11628 3.11661C9.24659 2.98629 9.44409 2.87907 9.90555 2.81703C10.3886 2.75208 11.0362 2.75049 12.0002 2.75049C12.9642 2.75049 13.6117 2.75208 14.0948 2.81703C14.5562 2.87907 14.7537 2.98629 14.884 3.11661C15.0144 3.24692 15.1216 3.44442 15.1836 3.90588C15.2292 4.24456 15.2436 5.15572 15.2481 6.00237L16.7484 6.02615C16.7438 5.15196 16.7276 4.13238 16.6702 3.70601C16.5858 3.07822 16.4002 2.51142 15.9447 2.05595C15.4892 1.60048 14.9224 1.41481 14.2946 1.3304C13.6999 1.25044 12.9506 1.25046 12.0522 1.25049Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.052 1.25049H11.948C11.0495 1.25046 10.3003 1.25044 9.70552 1.3304C9.07773 1.41481 8.51093 1.60048 8.05546 2.05595C7.59999 2.51142 7.41432 3.07822 7.32991 3.70601C7.27259 4.13238 7.25637 5.15196 7.25179 6.02615C5.22954 6.0922 4.01536 6.32827 3.17157 7.17206C2 8.34364 2 10.2293 2 14.0005C2 17.7717 2 19.6573 3.17157 20.8289C4.34314 22.0005 6.22876 22.0005 9.99998 22.0005H14C17.7712 22.0005 19.6569 22.0005 20.8284 20.8289C22 19.6573 22 17.7717 22 14.0005C22 10.2293 22 8.34364 20.8284 7.17206C19.9846 6.32827 18.7705 6.0922 16.7482 6.02615C16.7436 5.15196 16.7274 4.13238 16.6701 3.70601C16.5857 3.07822 16.4 2.51142 15.9445 2.05595C15.4891 1.60048 14.9223 1.41481 14.2945 1.3304C13.6997 1.25044 12.9505 1.25046 12.052 1.25049ZM15.2479 6.00237C15.2434 5.15572 15.229 4.24456 15.1835 3.90588C15.1214 3.44442 15.0142 3.24692 14.8839 3.11661C14.7536 2.98629 14.5561 2.87907 14.0946 2.81703C13.6116 2.75208 12.964 2.75049 12 2.75049C11.036 2.75049 10.3884 2.75208 9.90539 2.81703C9.44393 2.87907 9.24644 2.98629 9.11612 3.11661C8.9858 3.24692 8.87858 3.44442 8.81654 3.90588C8.771 4.24456 8.75661 5.15572 8.75208 6.00237C9.1435 6.00049 9.55885 6.00049 10 6.00049H14C14.4412 6.00049 14.8565 6.00049 15.2479 6.00237ZM12 9.25049C12.4142 9.25049 12.75 9.58628 12.75 10.0005V10.0107C13.8388 10.285 14.75 11.1435 14.75 12.3338C14.75 12.748 14.4142 13.0838 14 13.0838C13.5858 13.0838 13.25 12.748 13.25 12.3338C13.25 11.9498 12.8242 11.4172 12 11.4172C11.1758 11.4172 10.75 11.9498 10.75 12.3338C10.75 12.7179 11.1758 13.2505 12 13.2505C13.3849 13.2505 14.75 14.2102 14.75 15.6672C14.75 16.8575 13.8388 17.716 12.75 17.9903V18.0005C12.75 18.4147 12.4142 18.7505 12 18.7505C11.5858 18.7505 11.25 18.4147 11.25 18.0005V17.9903C10.1612 17.716 9.25 16.8575 9.25 15.6672C9.25 15.2529 9.58579 14.9172 10 14.9172C10.4142 14.9172 10.75 15.2529 10.75 15.6672C10.75 16.0512 11.1758 16.5838 12 16.5838C12.8242 16.5838 13.25 16.0512 13.25 15.6672C13.25 15.2831 12.8242 14.7505 12 14.7505C10.6151 14.7505 9.25 13.7907 9.25 12.3338C9.25 11.1435 10.1612 10.285 11.25 10.0107V10.0005C11.25 9.58628 11.5858 9.25049 12 9.25049Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMoneyBag as IconComponent).keywords = [
  "money",
  "bag",
  "rich",
  "monied",
  "wealthy",
  "affluent",
  "loaded",
  "flush",
  "muni",
  "finance",
  "financing",
  "purse",
  "pocketbook",
  "handbag",
  "pocket",
  "bagful",
  "suitcase",
  "dish",
  "grip",
  "cup of tea"
];

export default IconMoneyBag as IconComponent;