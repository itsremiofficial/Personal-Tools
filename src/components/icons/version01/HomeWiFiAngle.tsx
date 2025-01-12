import { FC } from 'react';

const IconHomeWiFiAngle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M2.36395 12.9581C1.98451 10.3211 1.79478 9.00253 2.33524 7.87519C2.87571 6.74785 4.02607 6.06258 6.32679 4.69205L7.71163 3.86711C9.80092 2.62253 10.8456 2.00024 11.9999 2.00024C13.1542 2.00024 14.1988 2.62253 16.2881 3.86711L17.673 4.69205C19.9737 6.06258 21.1241 6.74785 21.6645 7.87519C22.205 9.00253 22.0153 10.3211 21.6358 12.9581L21.357 14.8955C20.8696 18.2829 20.6259 19.9766 19.4509 20.9884C18.2758 22.0002 16.5525 22.0002 13.106 22.0002H10.8938C7.44725 22.0002 5.72397 22.0002 4.54891 20.9884C3.37384 19.9766 3.13013 18.2829 2.64272 14.8955L2.36395 12.9581Z" stroke="currentColor" strokeWidth={width} /><path d="M6 11.6825C9.31371 8.10583 14.6863 8.10583 18 11.6825M8.00002 13.841C10.2092 11.4566 13.7909 11.4566 16 13.841M10 16C11.1046 14.8078 12.8955 14.8078 14 16" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M13.1061 22H10.8939C7.44737 22 5.72409 22 4.54903 20.9882C3.37396 19.9764 3.13025 18.2827 2.64284 14.8952L2.36407 12.9579C1.98463 10.3208 1.79491 9.00229 2.33537 7.87495C2.87583 6.7476 4.02619 6.06234 6.32691 4.69181L7.71175 3.86687C9.80104 2.62229 10.8457 2 12 2C13.1543 2 14.199 2.62229 16.2882 3.86687L17.6731 4.69181C19.9738 6.06234 21.1242 6.7476 21.6646 7.87495C22.2051 9.00229 22.0154 10.3208 21.6359 12.9579L21.3572 14.8952C20.8697 18.2827 20.626 19.9764 19.451 20.9882C18.2759 22 16.5526 22 13.1061 22Z" fill="currentColor" /><path d="M17.4498 12.1922C14.4329 8.93592 9.56706 8.93592 6.55017 12.1922C6.26866 12.4961 5.79414 12.5142 5.49029 12.2327C5.18643 11.9512 5.16832 11.4766 5.44983 11.1728C9.06036 7.27573 14.9396 7.27573 18.5502 11.1728C18.8317 11.4766 18.8136 11.9512 18.5097 12.2327C18.2059 12.5142 17.7313 12.4961 17.4498 12.1922Z" fill="currentColor" /><path d="M15.4499 14.3507C13.5375 12.2866 10.4625 12.2866 8.55019 14.3507C8.26868 14.6546 7.79415 14.6727 7.4903 14.3912C7.18645 14.1097 7.16834 13.6351 7.44985 13.3313C9.95581 10.6265 14.0442 10.6265 16.5502 13.3313C16.8317 13.6351 16.8136 14.1097 16.5097 14.3912C16.2059 14.6727 15.7314 14.6546 15.4499 14.3507Z" fill="currentColor" /><path d="M13.4499 16.5097C12.6421 15.6379 11.358 15.6379 10.5502 16.5097C10.2687 16.8136 9.79417 16.8317 9.49032 16.5502C9.18647 16.2687 9.16836 15.7941 9.44987 15.4903C10.8513 13.9777 13.1488 13.9777 14.5502 15.4903C14.8317 15.7941 14.8136 16.2687 14.5098 16.5502C14.2059 16.8317 13.7314 16.8136 13.4499 16.5097Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.33537 7.87495C1.79491 9.00229 1.98463 10.3208 2.36407 12.9579L2.64284 14.8952C3.13025 18.2827 3.37396 19.9764 4.54903 20.9882C5.72409 22 7.44737 22 10.8939 22H13.1061C16.5526 22 18.2759 22 19.451 20.9882C20.626 19.9764 20.8697 18.2827 21.3572 14.8952L21.6359 12.9579C22.0154 10.3208 22.2051 9.00229 21.6646 7.87495C21.1242 6.7476 19.9738 6.06234 17.6731 4.69181L16.2882 3.86687C14.199 2.62229 13.1543 2 12 2C10.8457 2 9.80104 2.62229 7.71175 3.86687L6.32691 4.69181C4.02619 6.06234 2.87583 6.7476 2.33537 7.87495ZM13.45 16.5095C12.6422 15.6377 11.3581 15.6377 10.5503 16.5095C10.2688 16.8134 9.79427 16.8315 9.49041 16.55C9.18656 16.2684 9.16845 15.7939 9.44996 15.4901C10.8514 13.9775 13.1489 13.9775 14.5503 15.4901C14.8318 15.7939 14.8137 16.2684 14.5099 16.55C14.206 16.8315 13.7315 16.8134 13.45 16.5095ZM8.55029 14.3505C10.4626 12.2864 13.5376 12.2864 15.4499 14.3505C15.7315 14.6544 16.206 14.6725 16.5098 14.391C16.8137 14.1095 16.8318 13.6349 16.5503 13.3311C14.0443 10.6262 9.9559 10.6262 7.44995 13.3311C7.16844 13.6349 7.18655 14.1095 7.4904 14.391C7.79425 14.6725 8.26878 14.6544 8.55029 14.3505ZM17.4499 12.192C14.433 8.93571 9.56716 8.93571 6.55027 12.192C6.26876 12.4959 5.79423 12.514 5.49038 12.2325C5.18653 11.951 5.16842 11.4764 5.44993 11.1726C9.06046 7.27552 14.9397 7.27552 18.5503 11.1726C18.8318 11.4764 18.8137 11.951 18.5098 12.2325C18.206 12.514 17.7314 12.4959 17.4499 12.192Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHomeWiFiAngle as IconComponent).keywords = [
  "home",
  "wi",
  "fi",
  "angle",
  "domicile",
  "habitation",
  "domestic",
  "dwelling",
  "nursing home",
  "rest home",
  "house",
  "dwelling house",
  "household",
  "tl",
  "t2",
  "jon",
  "chak",
  "claire",
  "crosse",
  "dsl",
  "ethernet",
  "sci",
  "semper",
  "initiative",
  "audio",
  "abyss",
  "agent",
  "alien",
  "weight",
  "slant",
  "tilt",
  "lean",
  "tip",
  "fish",
  "side",
  "prism",
  "dimension"
];

export default IconHomeWiFiAngle as IconComponent;