import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconPenNewSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M22 10.5002V12.0002C22 16.7143 22 19.0713 20.5355 20.5358C19.0711 22.0002 16.714 22.0002 12 22.0002C7.28595 22.0002 4.92893 22.0002 3.46447 20.5358C2 19.0713 2 16.7143 2 12.0002C2 7.2862 2 4.92918 3.46447 3.46471C4.92893 2.00024 7.28595 2.00024 12 2.00024H13.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M17.3009 2.80649L16.652 3.4553L10.6872 9.42017C10.2832 9.82419 10.0812 10.0262 9.90743 10.2489C9.70249 10.5117 9.52679 10.796 9.38344 11.0968C9.26191 11.3518 9.17157 11.6228 8.99089 12.1648L8.41242 13.9002L8.03811 15.0232C7.9492 15.2899 8.01862 15.584 8.21744 15.7828C8.41626 15.9816 8.71035 16.051 8.97709 15.9621L10.1 15.5878L11.8354 15.0093C12.3775 14.8287 12.6485 14.7383 12.9035 14.6168C13.2043 14.4734 13.4886 14.2977 13.7513 14.0928C13.9741 13.9191 14.1761 13.7171 14.5801 13.3131L20.5449 7.3482L21.1938 6.69938C22.2687 5.62439 22.2687 3.88148 21.1938 2.80649C20.1188 1.7315 18.3759 1.7315 17.3009 2.80649Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M16.6522 3.45532C16.6522 3.45532 16.7333 4.83406 17.9499 6.05058C19.1664 7.26711 20.5451 7.34822 20.5451 7.34822M10.1002 15.5878L8.4126 13.9003" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M1 12.0002C1 6.81479 1 4.22207 2.61091 2.61116C4.22183 1.00024 6.81455 1.00024 12 1.00024C17.1854 1.00024 19.7782 1.00024 21.3891 2.61116C23 4.22207 23 6.81479 23 12.0002C23 17.1857 23 19.7784 21.3891 21.3893C19.7782 23.0002 17.1854 23.0002 12 23.0002C6.81455 23.0002 4.22183 23.0002 2.61091 21.3893C1 19.7784 1 17.1857 1 12.0002Z" fill="currentColor" /><path d="M13.9265 14.3021C14.1716 14.111 14.3938 13.8888 14.8382 13.4443L20.3785 7.90399C20.5125 7.77004 20.4512 7.53934 20.2722 7.47725C19.6182 7.25036 18.7675 6.82438 17.9717 6.0286C17.176 5.23281 16.75 4.3821 16.5231 3.72813C16.461 3.54916 16.2303 3.48786 16.0964 3.62181L10.556 9.16216C10.1116 9.60658 9.88937 9.82879 9.69827 10.0738C9.47284 10.3628 9.27957 10.6755 9.12188 11.0064C8.9882 11.2869 8.88883 11.585 8.69008 12.1813L8.43327 12.9517L8.02491 14.1768L7.64202 15.3254C7.54422 15.6189 7.62058 15.9424 7.83928 16.1611C8.05798 16.3798 8.38148 16.4561 8.6749 16.3583L9.82357 15.9754L11.0486 15.5671L11.8191 15.3103L11.8191 15.3103C12.4153 15.1115 12.7134 15.0121 12.9939 14.8785C13.3248 14.7208 13.6375 14.5275 13.9265 14.3021Z" fill="currentColor" /><path d="M22.1132 6.1693C23.2957 4.9868 23.2957 3.06961 22.1132 1.88711C20.9307 0.704621 19.0135 0.704621 17.831 1.88711L17.6529 2.06523C17.481 2.23711 17.4032 2.47719 17.4461 2.71644C17.4731 2.86695 17.5232 3.08699 17.6143 3.34955C17.7965 3.87464 18.1405 4.56392 18.7885 5.21189C19.4364 5.85986 20.1257 6.20388 20.6508 6.38605C20.9134 6.47715 21.1334 6.52722 21.2839 6.55423C21.5231 6.59717 21.7632 6.5193 21.9351 6.34742L22.1132 6.1693Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.1938 2.80649C22.2687 3.88148 22.2687 5.62439 21.1938 6.69938L20.6982 7.19493C20.5539 7.16369 20.3722 7.11613 20.1651 7.04428C19.6108 6.85196 18.8823 6.48851 18.197 5.80325C17.5117 5.11798 17.1483 4.38947 16.956 3.83514C16.8841 3.62805 16.8366 3.44633 16.8053 3.30204L17.3009 2.80649C18.3759 1.7315 20.1188 1.7315 21.1938 2.80649Z" fill="currentColor" /><path d="M14.5801 13.3131C14.1761 13.7171 13.9741 13.9191 13.7513 14.0928C13.4886 14.2977 13.2043 14.4734 12.9035 14.6168C12.6485 14.7383 12.3775 14.8287 11.8354 15.0093L8.97709 15.9621C8.71035 16.051 8.41626 15.9816 8.21744 15.7828C8.01862 15.584 7.9492 15.2899 8.03811 15.0232L8.99089 12.1648C9.17157 11.6228 9.26191 11.3518 9.38344 11.0968C9.52679 10.796 9.70249 10.5117 9.90743 10.2489C10.0812 10.0262 10.2832 9.82419 10.6872 9.42017L15.6033 4.50409C15.867 5.19828 16.3293 6.05688 17.1363 6.86391C17.9434 7.67094 18.802 8.13321 19.4962 8.39699L14.5801 13.3131Z" fill="currentColor" /><path d="M20.5355 20.5358C22 19.0713 22 16.7143 22 12.0002C22 10.452 22 9.15798 21.9481 8.06634L15.586 14.4285C15.2347 14.7799 14.9708 15.0439 14.6738 15.2756C14.3252 15.5475 13.948 15.7807 13.5488 15.9709C13.2088 16.1329 12.8546 16.2509 12.3833 16.4079L9.45143 17.3852C8.64568 17.6537 7.75734 17.444 7.15678 16.8435C6.55621 16.2429 6.34651 15.3546 6.61509 14.5488L7.59235 11.617C7.74936 11.1456 7.86732 10.7914 8.02935 10.4514C8.21958 10.0523 8.45272 9.67505 8.72466 9.3264C8.9563 9.02942 9.22032 8.76552 9.57173 8.41428L15.9339 2.05213C14.8423 2.00024 13.5483 2.00024 12 2.00024C7.28595 2.00024 4.92893 2.00024 3.46447 3.46471C2 4.92918 2 7.2862 2 12.0002C2 16.7143 2 19.0713 3.46447 20.5358C4.92893 22.0002 7.28595 22.0002 12 22.0002C16.714 22.0002 19.0711 22.0002 20.5355 20.5358Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPenNewSquare as IconComponentType).keywords = [
  "pen",
  "new",
  "square",
  "playpen",
  "penitentiary",
  "compose",
  "indite",
  "write",
  "paddock",
  "corral",
  "basin",
  "sty",
  "newfound",
  "fresh",
  "freshly",
  "newly",
  "brand-new",
  "recent",
  "novel",
  "recently",
  "newfangled",
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

export default IconPenNewSquare as IconComponentType;