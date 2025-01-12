import { FC } from 'react';

const IconDonut: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12.0001" r="10" stroke="currentColor" strokeWidth={width} /><circle cx="12" cy="12.0001" r="3" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M2 13.0001C2 13.0001 4.20085 15.0001 6 15.0001C7.21199 15.0001 8.60628 14.0925 9.38725 13.5001" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M14 14.2237C14.4713 14.639 15.0875 15.0001 15.8053 15.0001C17.4948 15.0001 17.4948 13.0001 19.1842 13.0001C20.2618 13.0001 21.1102 13.8137 21.5835 14.4031" stroke="currentColor" strokeWidth={width} /><path d="M14.5 7.00012L16 5.00012" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M19 7.00012L20 6.00012" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M12 5.00012L11 4.00012" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M10.5 7.00012L9.13397 7.36615" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M16.6499 8.9766L16.7162 10.3893" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M20.6777 10.0851L18.9996 11.563" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M7 5.00012L6 4.00012" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M6.79245 9.14398L6.20722 7.85653" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M5.6649 12.6415L6.50013 11.5003" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M3.68272 10.3498L3.60406 8.93781" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M12 2.00012C6.47715 2.00012 2 6.47727 2 12.0001C2 12.3541 2.01839 12.7037 2.05426 13.0481C2.40307 13.3525 4.367 15.0001 6 15.0001C7.21199 15.0001 8.60628 14.0925 9.38725 13.5001L9.39619 13.4912C9.14413 13.0519 9 12.5429 9 12.0001C9 10.3433 10.3431 9.00012 12 9.00012C13.6569 9.00012 15 10.3433 15 12.0001C15 12.8852 14.6167 13.6808 14.007 14.2299C14.4774 14.6426 15.0911 15.0001 15.8053 15.0001C17.4948 15.0001 17.4948 13.0001 19.1842 13.0001C20.2618 13.0001 21.1102 13.8137 21.5835 14.4031L21.6758 14.5354C21.8874 13.7257 22 12.8761 22 12.0001C22 6.47727 17.5228 2.00012 12 2.00012Z" fill="currentColor" /><path d="M9.38719 13.5001C8.60622 14.0925 7.21193 15.0001 5.99994 15.0001C4.36694 15.0001 2.40301 13.3525 2.0542 13.0481C2.57808 18.0784 6.83103 22.0001 11.9999 22.0001C16.6468 22.0001 20.5534 18.8306 21.6757 14.5354L21.5834 14.4031C21.1102 13.8137 20.2617 13.0001 19.1842 13.0001C17.4947 13.0001 17.4947 15.0001 15.8053 15.0001C15.091 15.0001 14.4774 14.6426 14.007 14.2299C13.4754 14.7087 12.7717 15.0001 11.9999 15.0001C10.8858 15.0001 9.91356 14.3928 9.39613 13.4912L9.38719 13.5001Z" fill="currentColor" /><path d="M19.5279 5.41729C19.5078 5.4336 19.4884 5.4511 19.4697 5.46979L18.4697 6.46979C18.1768 6.76269 18.1768 7.23756 18.4697 7.53045C18.7626 7.82335 19.2374 7.82335 19.5303 7.53045L20.4347 6.62606C20.1627 6.20007 19.8594 5.79606 19.5279 5.41729Z" fill="currentColor" /><path d="M5.41716 4.47224C5.43347 4.49232 5.45097 4.51176 5.46967 4.53045L6.46967 5.53045C6.76256 5.82335 7.23744 5.82335 7.53033 5.53045C7.82322 5.23756 7.82322 4.76269 7.53033 4.46979L6.62594 3.5654C6.19995 3.83738 5.79594 4.14075 5.41716 4.47224Z" fill="currentColor" /><path d="M10.4697 4.53045C10.1768 4.23756 10.1768 3.76269 10.4697 3.46979C10.7626 3.1769 11.2374 3.1769 11.5303 3.46979L12.5303 4.46979C12.8232 4.76269 12.8232 5.23756 12.5303 5.53045C12.2374 5.82335 11.7626 5.82335 11.4697 5.53045L10.4697 4.53045Z" fill="currentColor" /><path d="M16.6 5.45012C16.8485 5.11875 16.7814 4.64865 16.45 4.40012C16.1186 4.15159 15.6485 4.21875 15.4 4.55012L13.9 6.55012C13.6515 6.88149 13.7186 7.35159 14.05 7.60012C14.3814 7.84865 14.8515 7.78149 15.1 7.45012L16.6 5.45012Z" fill="currentColor" /><path d="M8.40953 7.56026C8.51674 7.96036 8.92799 8.1978 9.32809 8.09059L10.6941 7.72457C11.0942 7.61736 11.3316 7.20611 11.2244 6.80601C11.1172 6.40591 10.706 6.16847 10.3059 6.27568L8.93986 6.6417C8.53976 6.74891 8.30232 7.16016 8.40953 7.56026Z" fill="currentColor" /><path d="M17.4653 10.3542C17.4847 10.7679 17.1651 11.1191 16.7513 11.1386C16.3376 11.158 15.9864 10.8383 15.967 10.4246L15.9006 9.01194C15.8811 8.59818 16.2008 8.247 16.6145 8.22755C17.0283 8.20811 17.3795 8.52776 17.3989 8.94152L17.4653 10.3542Z" fill="currentColor" /><path d="M18.4368 12.0587C18.7106 12.3695 19.1845 12.3996 19.4953 12.1258L21.1734 10.648C21.4843 10.3742 21.5143 9.9003 21.2406 9.58945C20.9668 9.2786 20.4929 9.24854 20.182 9.5223L18.504 11.0001C18.1931 11.2739 18.163 11.7478 18.4368 12.0587Z" fill="currentColor" /><path d="M5.52445 8.16689C5.35304 7.78981 5.51977 7.34517 5.89686 7.17376C6.27394 7.00235 6.71858 7.16909 6.88999 7.54617L7.47521 8.83361C7.64662 9.2107 7.47989 9.65534 7.10281 9.82675C6.72572 9.99815 6.28108 9.83142 6.10967 9.45434L5.52445 8.16689Z" fill="currentColor" /><path d="M6.94295 10.8951C7.2772 11.1398 7.34986 11.6091 7.10522 11.9433L6.26999 13.0845C6.02535 13.4188 5.55607 13.4914 5.22182 13.2468C4.88756 13.0022 4.81491 12.5329 5.05954 12.1986L5.89478 11.0574C6.13941 10.7232 6.60869 10.6505 6.94295 10.8951Z" fill="currentColor" /><path d="M2.85543 8.97941C2.83239 8.56583 3.14898 8.21189 3.56255 8.18885C3.97612 8.16581 4.33006 8.4824 4.3531 8.89597L4.43177 10.308C4.45481 10.7216 4.13822 11.0755 3.72464 11.0986C3.31107 11.1216 2.95713 10.805 2.93409 10.3914L2.85543 8.97941Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.6772 14.5311C19.1703 14.0392 19.4791 13.7501 20.1526 13.7501C20.7467 13.7501 21.2865 13.9875 21.7349 14.2974C20.6968 18.713 16.7323 22.0001 12 22.0001C7.46768 22.0001 3.6396 18.9849 2.41225 14.851C3.23745 15.3037 4.30084 15.7501 5.33179 15.7501C6.14547 15.7501 6.96656 15.4734 7.65714 15.1524C8.18936 14.9049 8.67974 14.6141 9.07926 14.3523C9.76665 15.2048 10.8196 15.7501 12 15.7501C12.7517 15.7501 13.4518 15.5289 14.0387 15.1481C14.6126 15.4846 15.3239 15.7501 16.1426 15.7501C17.4558 15.7501 18.1486 15.0587 18.6561 14.5522L18.6772 14.5311Z" fill="currentColor" /><path d="M9.75 12.0001C9.75 10.7575 10.7574 9.75012 12 9.75012C13.2426 9.75012 14.25 10.7575 14.25 12.0001C14.25 13.2428 13.2426 14.2501 12 14.2501C10.7574 14.2501 9.75 13.2428 9.75 12.0001Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 8.25012C9.92893 8.25012 8.25 9.92905 8.25 12.0001C8.25 12.3503 8.298 12.6893 8.38778 13.0108C8.00909 13.266 7.53309 13.5558 7.02472 13.7922C6.42077 14.073 5.83063 14.2501 5.33179 14.2501C4.57197 14.2501 3.63776 13.8434 2.81907 13.3558C2.51915 13.1771 2.25149 12.9979 2.03514 12.8444C2.01187 12.5661 2 12.2845 2 12.0001C2 8.99821 3.32274 6.30523 5.41717 4.47224C5.43347 4.49232 5.45097 4.51176 5.46967 4.53045L6.46967 5.53045C6.76256 5.82335 7.23744 5.82335 7.53033 5.53045C7.82322 5.23756 7.82322 4.76269 7.53033 4.46979L6.62594 3.5654C8.17806 2.57443 10.022 2.00012 12 2.00012C15.0019 2.00012 17.6949 3.32286 19.5279 5.41729C19.5078 5.4336 19.4884 5.4511 19.4697 5.46979L18.4697 6.46979C18.1768 6.76269 18.1768 7.23756 18.4697 7.53045C18.7626 7.82335 19.2374 7.82335 19.5303 7.53045L20.4347 6.62606C21.4257 8.17818 22 10.0221 22 12.0001C22 12.2352 21.9919 12.4684 21.9759 12.6994C21.4528 12.4365 20.8399 12.2501 20.1526 12.2501C18.8394 12.2501 18.1465 12.9416 17.639 13.4481L17.6179 13.4691C17.1248 13.961 16.816 14.2501 16.1426 14.2501C15.7922 14.2501 15.4596 14.1681 15.1508 14.0344C15.5299 13.4484 15.75 12.75 15.75 12.0001C15.75 9.92905 14.0711 8.25012 12 8.25012ZM16.45 4.40012C16.7814 4.64865 16.8485 5.11875 16.6 5.45012L15.1 7.45012C14.8515 7.78149 14.3814 7.84865 14.05 7.60012C13.7186 7.35159 13.6515 6.88149 13.9 6.55012L15.4 4.55012C15.6485 4.21875 16.1186 4.15159 16.45 4.40012ZM10.4697 3.46979C10.1768 3.76269 10.1768 4.23756 10.4697 4.53045L11.4697 5.53045C11.7626 5.82335 12.2374 5.82335 12.5303 5.53045C12.8232 5.23756 12.8232 4.76269 12.5303 4.46979L11.5303 3.46979C11.2374 3.1769 10.7626 3.1769 10.4697 3.46979ZM8.40953 7.56026C8.51674 7.96036 8.92799 8.1978 9.32809 8.09059L10.6941 7.72457C11.0942 7.61736 11.3317 7.20611 11.2244 6.80601C11.1172 6.40591 10.706 6.16847 10.3059 6.27568L8.93986 6.6417C8.53976 6.74891 8.30232 7.16016 8.40953 7.56026ZM16.7515 11.1385C17.1652 11.119 17.4849 10.7678 17.4654 10.3541L17.399 8.94142C17.3796 8.52766 17.0284 8.20801 16.6146 8.22745C16.2009 8.2469 15.8812 8.59808 15.9007 9.01184L15.9671 10.4245C15.9865 10.8382 16.3377 11.1579 16.7515 11.1385ZM18.9413 11.554C19.2151 11.8649 19.689 11.895 19.9998 11.6212L21.1734 10.648C21.4843 10.3742 21.5143 9.90031 21.2406 9.58946C20.9668 9.27861 20.4929 9.24854 20.182 9.5223L19.0085 10.4955C18.6976 10.7693 18.6675 11.2432 18.9413 11.554ZM5.89686 7.17376C5.51977 7.34517 5.35304 7.78981 5.52445 8.16689L6.10968 9.45434C6.28108 9.83142 6.72572 9.99815 7.10281 9.82675C7.47989 9.65534 7.64662 9.2107 7.47522 8.83361L6.88999 7.54617C6.71858 7.16909 6.27394 7.00235 5.89686 7.17376ZM6.94308 10.8951C7.27734 11.1397 7.34999 11.609 7.10536 11.9432L6.27012 13.0845C6.02549 13.4187 5.55621 13.4914 5.22195 13.2467C4.88769 13.0021 4.81504 12.5328 5.05967 12.1986L5.89491 11.0573C6.13954 10.7231 6.60883 10.6504 6.94308 10.8951ZM3.56234 8.18896C3.14877 8.212 2.83218 8.56594 2.85522 8.97951L2.93388 10.3915C2.95692 10.8051 3.31086 11.1217 3.72444 11.0987C4.13801 11.0756 4.4546 10.7217 4.43156 10.3081L4.35289 8.89608C4.32985 8.48251 3.97591 8.16592 3.56234 8.18896Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDonut as IconComponent).keywords = [
  "donut",
  "doughnut",
  "sinker",
  "jelly",
  "bagel",
  "pillow",
  "cushion",
  "slap",
  "doughnuts",
  "cruller"
];

export default IconDonut as IconComponent;