import { FC } from 'react';

const IconCat: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.0993 10.6602C20.2113 11.9744 19.98 13.5815 19.9801 15C19.9801 18.9062 14.7132 20 12 20C9.28677 20 4.01994 18.9062 4.01994 15C4.01995 13.5815 3.78875 11.9744 4.90066 10.6602M19.0993 10.6602C18.9048 10.4303 18.6692 10.2094 18.384 10M19.0993 10.6602C19.7993 11.0634 19.9781 9.55469 19.9801 9.0625V7.18761C19.9801 5.56261 18.8629 5.00011 17.9053 5.00011C16.9477 5.00011 15.0324 6.5625 14.394 6.5625C13.6279 6.5625 13.4804 6.40636 12 6.40636C10.5197 6.40636 10.3721 6.5625 9.60601 6.5625C8.9676 6.5625 7.05236 5 6.09476 5C5.13715 5 4.01995 5.5625 4.01995 7.1875V9.0625C4.02188 9.55469 4.20072 11.0634 4.90066 10.6602M4.90066 10.6602C5.09519 10.4303 5.33082 10.2094 5.61599 10" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M12.8259 16C12.8259 16.1726 12.4649 16.3125 12.0195 16.3125C11.5741 16.3125 11.213 16.1726 11.213 16C11.213 15.8274 11.5741 15.6875 12.0195 15.6875C12.4649 15.6875 12.8259 15.8274 12.8259 16Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M15.5 13.5938C15.5 14.0252 15.2834 14.375 15.0161 14.375C14.7489 14.375 14.5323 14.0252 14.5323 13.5938C14.5323 13.1623 14.7489 12.8125 15.0161 12.8125C15.2834 12.8125 15.5 13.1623 15.5 13.5938Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M9.50012 13.5938C9.50012 14.0252 9.28349 14.375 9.01625 14.375C8.74901 14.375 8.53238 14.0252 8.53238 13.5938C8.53238 13.1623 8.74901 12.8125 9.01625 12.8125C9.28349 12.8125 9.50012 13.1623 9.50012 13.5938Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M22.0004 15.4688C21.5165 15.1562 19.4197 14.375 18.6133 14.375" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M20.3871 17.9688C19.9033 17.6562 18.7742 16.875 17.9678 16.875" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M2 15.4688C2.48387 15.1562 4.58065 14.375 5.3871 14.375" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M3.61279 17.9688C4.09667 17.6562 5.2257 16.875 6.03215 16.875" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M9.60601 5.5625C10.3721 5.5625 10.5197 5.40636 12 5.40636C13.4804 5.40636 13.6279 5.5625 14.394 5.5625C15.0324 5.5625 16.9477 4.00011 17.9053 4.00011C18.8629 4.00011 19.9801 4.56261 19.9801 6.18761V8.0625C19.9781 8.55469 19.7993 10.0634 19.0993 9.66022C20.2113 10.9744 19.98 12.5815 19.9801 14C19.9801 17.9062 14.7132 19 12 19C9.28677 19 4.01994 17.9062 4.01994 14C4.01995 12.5815 3.78875 10.9744 4.90066 9.66022C4.20072 10.0634 4.02188 8.55469 4.01995 8.0625V6.1875C4.01995 4.5625 5.13715 4 6.09476 4C7.05236 4 8.9676 5.5625 9.60601 5.5625Z" fill="currentColor" /><path d="M9.0161 11.0625C8.52726 11.0625 8.20136 11.38 8.03634 11.6464C7.8642 11.9243 7.78222 12.2612 7.78222 12.5938C7.78222 12.9263 7.8642 13.2632 8.03634 13.5411C8.20136 13.8075 8.52726 14.125 9.0161 14.125C9.50493 14.125 9.83083 13.8075 9.99586 13.5411C10.168 13.2632 10.25 12.9263 10.25 12.5938C10.25 12.2612 10.168 11.9243 9.99586 11.6464C9.83083 11.38 9.50493 11.0625 9.0161 11.0625Z" fill="currentColor" /><path d="M14.0363 11.6464C14.2014 11.38 14.5273 11.0625 15.0161 11.0625C15.5049 11.0625 15.8308 11.38 15.9959 11.6464C16.168 11.9243 16.25 12.2612 16.25 12.5938C16.25 12.9263 16.168 13.2632 15.9959 13.5411C15.8308 13.8075 15.5049 14.125 15.0161 14.125C14.5273 14.125 14.2014 13.8075 14.0363 13.5411C13.8642 13.2632 13.7822 12.9263 13.7822 12.5938C13.7822 12.2612 13.8642 11.9243 14.0363 11.6464Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M11.1781 14.0797C11.4304 13.9819 11.7281 13.9375 12.0193 13.9375C12.3106 13.9375 12.6082 13.9819 12.8605 14.0797C12.9843 14.1276 13.1357 14.2032 13.269 14.3254C13.4029 14.448 13.5758 14.675 13.5758 15C13.5758 15.325 13.4029 15.552 13.269 15.6746C13.1357 15.7968 12.9843 15.8724 12.8605 15.9203C12.6082 16.0181 12.3106 16.0625 12.0193 16.0625C11.7281 16.0625 11.4304 16.0181 11.1781 15.9203C11.0543 15.8724 10.9029 15.7968 10.7696 15.6746C10.6358 15.552 10.4629 15.325 10.4629 15C10.4629 14.675 10.6358 14.448 10.7696 14.3254C10.9029 14.2032 11.0543 14.1276 11.1781 14.0797Z" fill="currentColor" /><path d="M17.8632 13.375C17.8632 12.9608 18.199 12.625 18.6132 12.625C18.909 12.625 19.2635 12.6924 19.5938 12.7737C19.9385 12.8585 20.3133 12.9729 20.6704 13.095C21.3543 13.3289 22.0796 13.6271 22.4072 13.8387C22.7552 14.0634 22.8551 14.5277 22.6304 14.8756C22.4056 15.2236 21.9414 15.3235 21.5934 15.0988C21.4372 14.9979 20.8722 14.7493 20.1851 14.5144C19.8568 14.4021 19.5259 14.3017 19.2355 14.2302C18.9308 14.1553 18.7207 14.125 18.6132 14.125C18.199 14.125 17.8632 13.7892 17.8632 13.375Z" fill="currentColor" /><path d="M17.9677 15.125C17.5535 15.125 17.2177 15.4608 17.2177 15.875C17.2177 16.2892 17.5535 16.625 17.9677 16.625C18.1739 16.625 18.5173 16.7402 18.948 16.9678C19.29 17.1485 19.6037 17.3533 19.849 17.5134C19.8951 17.5435 19.9392 17.5723 19.9802 17.5988C20.3282 17.8235 20.7924 17.7236 21.0171 17.3756C21.2418 17.0277 21.1419 16.5634 20.794 16.3387C20.7609 16.3173 20.723 16.2926 20.6811 16.2652C20.4387 16.1067 20.0585 15.8581 19.6488 15.6416C19.1923 15.4004 18.568 15.125 17.9677 15.125Z" fill="currentColor" /><path d="M3.81519 14.5144C3.12811 14.7493 2.56308 14.9979 2.40686 15.0988C2.05891 15.3235 1.59466 15.2236 1.36994 14.8756C1.14522 14.5277 1.24512 14.0634 1.59307 13.8387C1.92073 13.6271 2.64602 13.3289 3.32991 13.095C3.68706 12.9729 4.06178 12.8585 4.40648 12.7737C4.73684 12.6924 5.09131 12.625 5.38707 12.625C5.80129 12.625 6.13707 12.9608 6.13707 13.375C6.13707 13.7892 5.80129 14.125 5.38707 14.125C5.2796 14.125 5.06956 14.1553 4.76484 14.2302C4.47446 14.3017 4.14353 14.4021 3.81519 14.5144Z" fill="currentColor" /><path d="M4.02014 17.5988C4.06127 17.5722 4.10509 17.5436 4.15135 17.5134C4.39668 17.3533 4.71036 17.1485 5.05236 16.9678C5.48301 16.7402 5.82642 16.625 6.03261 16.625C6.44682 16.625 6.78261 16.2892 6.78261 15.875C6.78261 15.4608 6.44682 15.125 6.03261 15.125C5.43235 15.125 4.80801 15.4004 4.35157 15.6416C3.94185 15.8581 3.56166 16.1067 3.31926 16.2652C3.27739 16.2925 3.23944 16.3174 3.20636 16.3387C2.8584 16.5634 2.7585 17.0277 2.98322 17.3756C3.20794 17.7236 3.67219 17.8235 4.02014 17.5988Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.7501 6.40636C10.2698 6.40636 10.1222 6.5625 9.3561 6.5625C8.71769 6.5625 6.80245 5 5.84485 5C4.88724 5 3.77004 5.5625 3.77004 7.1875V9.0625C3.77197 9.55469 3.95081 11.0634 4.65075 10.6602C3.82323 11.6382 3.73963 12.7786 3.751 13.8826C3.52812 13.947 3.30072 14.0196 3.08003 14.095C2.39614 14.3289 1.67085 14.6271 1.3432 14.8387C0.995241 15.0634 0.895339 15.5277 1.12006 15.8756C1.34478 16.2236 1.80903 16.3235 2.15698 16.0988C2.3132 15.9979 2.87823 15.7493 3.56532 15.5144C3.64124 15.4884 3.71731 15.4631 3.79298 15.4386C3.83925 15.8724 3.95408 16.2684 4.12478 16.6292L4.1012 16.6416C3.69148 16.8581 3.3113 17.1067 3.06889 17.2652C3.02694 17.2926 2.98912 17.3173 2.95599 17.3387C2.60803 17.5634 2.50813 18.0277 2.73285 18.3756C2.95757 18.7236 3.42182 18.8235 3.76978 18.5988C3.8109 18.5722 3.85472 18.5436 3.90097 18.5134C4.1463 18.3533 4.45999 18.1485 4.80199 17.9678C4.88218 17.9254 4.95935 17.887 5.03317 17.8524C6.76347 19.4748 9.86991 20 11.7501 20C13.6302 20 16.7367 19.4748 18.467 17.8524C18.5408 17.887 18.6179 17.9254 18.6981 17.9678C19.0401 18.1485 19.3538 18.3533 19.5991 18.5134C19.6454 18.5436 19.6892 18.5722 19.7303 18.5988C20.0783 18.8235 20.5425 18.7236 20.7673 18.3756C20.992 18.0277 20.8921 17.5634 20.5441 17.3387C20.511 17.3173 20.4732 17.2926 20.4312 17.2652C20.1888 17.1067 19.8086 16.8581 19.3989 16.6416L19.3754 16.6292C19.5461 16.2683 19.6609 15.8724 19.7072 15.4385C19.783 15.463 19.8592 15.4883 19.9352 15.5144C20.6223 15.7493 21.1874 15.9979 21.3436 16.0988C21.6915 16.3235 22.1558 16.2236 22.3805 15.8756C22.6052 15.5277 22.5053 15.0634 22.1574 14.8387C21.8297 14.6271 21.1044 14.3289 20.4205 14.095C20.1997 14.0195 19.9722 13.947 19.7492 13.8825C19.7605 12.7785 19.6769 11.6382 18.8494 10.6602C19.5494 11.0634 19.7282 9.55469 19.7302 9.0625V7.18761C19.7302 5.56261 18.6129 5.00011 17.6553 5.00011C16.6977 5.00011 14.7825 6.5625 14.1441 6.5625C13.378 6.5625 13.2305 6.40636 11.7501 6.40636ZM11.0745 15.6004C11.2771 15.5314 11.5162 15.5 11.7501 15.5C11.984 15.5 12.2231 15.5314 12.4257 15.6004C12.5251 15.6342 12.6467 15.6876 12.7537 15.7738C12.8612 15.8603 13.0001 16.0206 13.0001 16.25C13.0001 16.4794 12.8612 16.6397 12.7537 16.7262C12.6467 16.8124 12.5251 16.8658 12.4257 16.8996C12.2231 16.9686 11.984 17 11.7501 17C11.5162 17 11.2771 16.9686 11.0745 16.8996C10.9751 16.8658 10.8535 16.8124 10.7464 16.7262C10.6389 16.6397 10.5001 16.4794 10.5001 16.25C10.5001 16.0206 10.6389 15.8603 10.7464 15.7738C10.8535 15.6876 10.9751 15.6342 11.0745 15.6004ZM13.9201 12.5005C14.0566 12.2721 14.326 12 14.7301 12C15.1342 12 15.4036 12.2721 15.54 12.5005C15.6823 12.7387 15.7501 13.0274 15.7501 13.3125C15.7501 13.5976 15.6823 13.8863 15.54 14.1245C15.4036 14.3529 15.1342 14.625 14.7301 14.625C14.326 14.625 14.0566 14.3529 13.9201 14.1245C13.7778 13.8863 13.7101 13.5976 13.7101 13.3125C13.7101 13.0274 13.7778 12.7387 13.9201 12.5005ZM7.96016 12.5005C8.09658 12.2721 8.36599 12 8.7701 12C9.17421 12 9.44362 12.2721 9.58004 12.5005C9.72234 12.7387 9.79011 13.0274 9.79011 13.3125C9.79011 13.5976 9.72234 13.8863 9.58004 14.1245C9.44362 14.3529 9.17421 14.625 8.7701 14.625C8.36599 14.625 8.09658 14.3529 7.96016 14.1245C7.81786 13.8863 7.75009 13.5976 7.75009 13.3125C7.75009 13.0274 7.81786 12.7387 7.96016 12.5005Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCat as IconComponent).keywords = [
  "cat",
  "big cat",
  "chuck",
  "caterpillar",
  "vomit",
  "regurgitate",
  "spew",
  "regorge",
  "disgorge",
  "retch"
];

export default IconCat as IconComponent;