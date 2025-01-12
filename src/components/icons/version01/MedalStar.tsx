import { FC } from 'react';

const IconMedalStar: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M17 8.00037V6.00037C17 4.11475 17 3.17194 16.4142 2.58615C15.8284 2.00037 14.8856 2.00037 13 2.00037H11C9.11438 2.00037 8.17157 2.00037 7.58579 2.58615C7 3.17194 7 4.11475 7 6.00037V8.00037" stroke="currentColor" strokeWidth={width} /><path d="M10.5638 5.78347C11.4591 5.29532 12.541 5.29532 13.4362 5.78347L18.2305 8.39765C19.1944 8.92328 19.7943 9.93355 19.7943 11.0315V15.9692C19.7943 17.0672 19.1944 18.0774 18.2305 18.6031L13.4362 21.2172C12.541 21.7054 11.4591 21.7054 10.5638 21.2172L5.76962 18.6031C4.80563 18.0774 4.20581 17.0672 4.20581 15.9692V11.0315C4.20581 9.93355 4.80563 8.92329 5.76962 8.39765L10.5638 5.78347Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M11.1459 11.523C11.5259 10.8414 11.7159 10.5005 12 10.5005C12.2841 10.5005 12.4741 10.8414 12.8541 11.523L12.9524 11.6994C13.0603 11.8931 13.1143 11.99 13.1985 12.0539C13.2827 12.1178 13.3875 12.1415 13.5972 12.1889L13.7881 12.2321C14.526 12.3991 14.895 12.4826 14.9828 12.7648C15.0706 13.0471 14.819 13.3412 14.316 13.9295L14.1858 14.0817C14.0429 14.2488 13.9714 14.3324 13.9392 14.4358C13.9071 14.5392 13.9179 14.6508 13.9395 14.8738L13.9592 15.0768C14.0352 15.8617 14.0733 16.2541 13.8435 16.4286C13.6136 16.603 13.2682 16.444 12.5773 16.1259L12.3986 16.0436C12.2022 15.9532 12.1041 15.908 12 15.908C11.8959 15.908 11.7978 15.9532 11.6014 16.0436L11.4227 16.1259C10.7318 16.444 10.3864 16.603 10.1565 16.4286C9.92674 16.2541 9.96476 15.8617 10.0408 15.0768L10.0605 14.8738C10.0821 14.6508 10.0929 14.5392 10.0608 14.4358C10.0286 14.3324 9.95713 14.2488 9.81418 14.0817L9.68403 13.9295C9.18097 13.3412 8.92945 13.0471 9.01723 12.7648C9.10501 12.4826 9.47396 12.3991 10.2119 12.2321L10.4028 12.1889C10.6125 12.1415 10.7173 12.1178 10.8015 12.0539C10.8857 11.99 10.9397 11.8931 11.0476 11.6994L11.1459 11.523Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M12.7949 2.00037H10.7949C8.9093 2.00037 7.96649 2.00037 7.38071 2.58615C6.79492 3.17194 6.79492 4.11475 6.79492 6.00037V8.00037V9.50037H16.7949V8.00037V6.00037C16.7949 4.11475 16.7949 3.17194 16.2091 2.58615C15.6233 2.00037 14.6805 2.00037 12.7949 2.00037Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M13.2304 5.78347C12.3352 5.29532 11.2533 5.29532 10.358 5.78347L5.56381 8.39765C4.59982 8.92329 4 9.93355 4 11.0315V15.9692C4 17.0672 4.59982 18.0774 5.56381 18.6031L10.358 21.2172C11.2533 21.7054 12.3352 21.7054 13.2304 21.2172L18.0246 18.6031C18.9886 18.0774 19.5885 17.0672 19.5885 15.9692V11.0315C19.5885 9.93355 18.9886 8.92328 18.0246 8.39765L13.2304 5.78347ZM11.7944 10.5004C11.5104 10.5004 11.3204 10.8412 10.9404 11.5229L10.8421 11.6992C10.7341 11.8929 10.6801 11.9898 10.5959 12.0537C10.5117 12.1176 10.4069 12.1413 10.1972 12.1888L10.0063 12.232C9.26839 12.3989 8.89944 12.4824 8.81166 12.7647C8.72388 13.047 8.97541 13.3411 9.47846 13.9293L9.60861 14.0815C9.75156 14.2487 9.82304 14.3323 9.85519 14.4357C9.88735 14.5391 9.87654 14.6506 9.85493 14.8736L9.83525 15.0767C9.7592 15.8615 9.72117 16.254 9.95098 16.4284C10.1808 16.6029 10.5262 16.4438 11.2171 16.1257L11.3959 16.0434C11.5922 15.953 11.6904 15.9078 11.7944 15.9078C11.8985 15.9078 11.9967 15.953 12.193 16.0434L12.3717 16.1257C13.0626 16.4438 13.4081 16.6029 13.6379 16.4284C13.8677 16.254 13.8297 15.8615 13.7536 15.0767L13.7339 14.8736C13.7123 14.6506 13.7015 14.5391 13.7337 14.4357C13.7658 14.3323 13.8373 14.2487 13.9802 14.0815L14.1104 13.9293C14.6135 13.3411 14.865 13.047 14.7772 12.7647C14.6894 12.4824 14.3205 12.3989 13.5826 12.232L13.3917 12.1888C13.182 12.1413 13.0771 12.1176 12.993 12.0537C12.9088 11.9898 12.8548 11.8929 12.7468 11.6992L12.6485 11.5229C12.2685 10.8412 12.0785 10.5004 11.7944 10.5004Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M13.436 5.78347C12.5407 5.29532 11.4588 5.29532 10.5636 5.78347L5.76937 8.39765C4.80539 8.92329 4.20557 9.93355 4.20557 11.0315V15.9692C4.20557 17.0672 4.80539 18.0774 5.76937 18.6031L10.5636 21.2172C11.4588 21.7054 12.5407 21.7054 13.436 21.2172L18.2302 18.6031C19.1942 18.0774 19.794 17.0672 19.794 15.9692V11.0315C19.794 9.93355 19.1942 8.92328 18.2302 8.39765L13.436 5.78347ZM12 10.5004C11.7159 10.5004 11.5259 10.8412 11.1459 11.5229L11.0476 11.6992C10.9397 11.8929 10.8857 11.9898 10.8015 12.0537C10.7173 12.1176 10.6125 12.1413 10.4028 12.1888L10.2119 12.232C9.47396 12.3989 9.10501 12.4824 9.01723 12.7647C8.92945 13.047 9.18097 13.3411 9.68403 13.9293L9.81418 14.0815C9.95713 14.2487 10.0286 14.3323 10.0608 14.4357C10.0929 14.5391 10.0821 14.6506 10.0605 14.8736L10.0408 15.0767C9.96476 15.8615 9.92674 16.254 10.1565 16.4284C10.3864 16.6029 10.7318 16.4438 11.4227 16.1257L11.6014 16.0434C11.7978 15.953 11.8959 15.9078 12 15.9078C12.1041 15.9078 12.2022 15.953 12.3986 16.0434L12.5773 16.1257C13.2682 16.4438 13.6136 16.6029 13.8435 16.4284C14.0733 16.254 14.0352 15.8615 13.9592 15.0767L13.9395 14.8736C13.9179 14.6506 13.9071 14.5391 13.9392 14.4357C13.9714 14.3323 14.0429 14.2487 14.1858 14.0815L14.316 13.9293C14.819 13.3411 15.0706 13.047 14.9828 12.7647C14.895 12.4824 14.526 12.3989 13.7881 12.232L13.5972 12.1888C13.3875 12.1413 13.2827 12.1176 13.1985 12.0537C13.1143 11.9898 13.0603 11.8929 12.9524 11.6992L12.8541 11.5229C12.4741 10.8412 12.2841 10.5004 12 10.5004Z" fill="currentColor" /><path d="M11 2.00037H13C14.8856 2.00037 15.8284 2.00037 16.4142 2.58615C17 3.17194 17 4.11475 17 6.00037V6.01834L14.1541 4.46653C12.8112 3.7343 11.1884 3.7343 9.84551 4.46653L7 6.01811V6.00037C7 4.11475 7 3.17194 7.58579 2.58615C8.17157 2.00037 9.11438 2.00037 11 2.00037Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMedalStar as IconComponent).keywords = [
  "medal",
  "star",
  "medallion",
  "decoration",
  "laurel wreath",
  "ribbon",
  "palm",
  "medalist",
  "decorating",
  "décor",
  "plaque",
  "stellar",
  "asterisk",
  "lead",
  "leading",
  "maven",
  "sensation",
  "principal",
  "whizz",
  "headliner"
];

export default IconMedalStar as IconComponent;