import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBatteryFull: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H11.5C15.2712 4 17.1569 4 18.3284 5.17157C19.5 6.34315 19.5 8.22876 19.5 12C19.5 15.7712 19.5 17.6569 18.3284 18.8284C17.1569 20 15.2712 20 11.5 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z" stroke="currentColor" strokeWidth={width} /><path d="M7 9C7 9 7.5 9.9 7.5 12C7.5 14.1 7 15 7 15" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M10.5 9C10.5 9 11 9.9 11 12C11 14.1 10.5 15 10.5 15" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M14 9C14 9 14.5 9.9 14.5 12C14.5 14.1 14 15 14 15" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M20 10C20.9428 10 21.4142 10 21.7071 10.2929C22 10.5858 22 11.0572 22 12C22 12.9428 22 13.4142 21.7071 13.7071C21.4142 14 20.9428 14 20 14V10Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H11.5C15.2712 20 17.1569 20 18.3284 18.8284C19.5 17.6569 19.5 15.7712 19.5 12C19.5 8.22876 19.5 6.34315 18.3284 5.17157C17.1569 4 15.2712 4 11.5 4H10C6.22876 4 4.34315 4 3.17157 5.17157Z" fill="currentColor" /><path d="M19.4913 14C19.5 13.3993 19.5 12.7355 19.5 12C19.5 11.2645 19.5 10.6007 19.4913 10H19.9998C20.9426 10 21.414 10 21.7069 10.2929C21.9998 10.5858 21.9998 11.0572 21.9998 12C21.9998 12.9428 21.9998 13.4142 21.7069 13.7071C21.414 14 20.9426 14 19.9998 14H19.4913Z" fill="currentColor" /><path d="M6.6359 8.34452C6.99799 8.14336 7.45459 8.27382 7.65575 8.6359L7.00014 9.00014C7.65575 8.6359 7.65648 8.63722 7.65648 8.63722L7.65725 8.63861L7.65892 8.64166L7.66277 8.64877L7.6724 8.66712C7.67965 8.6812 7.68852 8.69895 7.69877 8.72046C7.71925 8.76349 7.7452 8.82149 7.77462 8.89503C7.83348 9.04219 7.90606 9.25113 7.97663 9.52635C8.1179 10.0773 8.25014 10.89 8.25014 12.0001C8.25014 13.1103 8.1179 13.923 7.97663 14.4739C7.90606 14.7491 7.83348 14.9581 7.77462 15.1052C7.7452 15.1788 7.71925 15.2368 7.69877 15.2798C7.68852 15.3013 7.67965 15.3191 7.6724 15.3331L7.66277 15.3515L7.65892 15.3586L7.65725 15.3617L7.65648 15.3631L7.65575 15.3644C7.45459 15.7265 6.99799 15.8569 6.6359 15.6558C6.27689 15.4563 6.14559 15.0057 6.33947 14.6451L6.34448 14.6349C6.35133 14.6205 6.36445 14.5918 6.3819 14.5482C6.41679 14.4609 6.46921 14.3136 6.52364 14.1014C6.63237 13.6773 6.75014 12.99 6.75014 12.0001C6.75014 11.0103 6.63237 10.323 6.52364 9.89892C6.46921 9.68664 6.41679 9.53933 6.3819 9.45212C6.36445 9.40848 6.35133 9.37976 6.34448 9.36536L6.33947 9.35513C6.14559 8.99455 6.27689 8.54397 6.6359 8.34452Z" fill="currentColor" /><path d="M11.1558 8.6359C10.9546 8.27382 10.498 8.14336 10.1359 8.34452C9.77689 8.54397 9.64559 8.99455 9.83947 9.35513L9.84448 9.36536C9.85133 9.37976 9.86445 9.40848 9.8819 9.45212C9.91679 9.53933 9.96921 9.68664 10.0236 9.89892C10.1324 10.323 10.2501 11.0103 10.2501 12.0001C10.2501 12.99 10.1324 13.6773 10.0236 14.1014C9.96921 14.3136 9.91679 14.4609 9.8819 14.5482C9.86445 14.5918 9.85133 14.6205 9.84448 14.6349L9.83947 14.6451C9.64559 15.0057 9.77689 15.4563 10.1359 15.6558C10.498 15.8569 10.9546 15.7265 11.1558 15.3644L10.5001 15.0001C11.1558 15.3644 11.1565 15.3631 11.1565 15.3631L11.1573 15.3617L11.1589 15.3586L11.1628 15.3515L11.1724 15.3331C11.1797 15.3191 11.1885 15.3013 11.1988 15.2798C11.2193 15.2368 11.2452 15.1788 11.2746 15.1052C11.3335 14.9581 11.4061 14.7491 11.4766 14.4739C11.6179 13.923 11.7501 13.1103 11.7501 12.0001C11.7501 10.89 11.6179 10.0773 11.4766 9.52635C11.4061 9.25113 11.3335 9.04219 11.2746 8.89503C11.2452 8.82149 11.2193 8.76349 11.1988 8.72046C11.1885 8.69895 11.1797 8.6812 11.1724 8.66712L11.1628 8.64877L11.1589 8.64166L11.1573 8.63861L11.1565 8.63722L11.1558 8.6359Z" fill="currentColor" /><path d="M13.6359 8.34452C13.998 8.14336 14.4546 8.27382 14.6558 8.6359L14.0001 9.00014C14.6558 8.6359 14.6565 8.63722 14.6565 8.63722L14.6573 8.63861L14.6589 8.64166L14.6628 8.64877L14.6724 8.66712C14.6797 8.6812 14.6885 8.69895 14.6988 8.72046C14.7193 8.76349 14.7452 8.82149 14.7746 8.89503C14.8335 9.04219 14.9061 9.25113 14.9766 9.52635C15.1179 10.0773 15.2501 10.89 15.2501 12.0001C15.2501 13.1103 15.1179 13.923 14.9766 14.4739C14.9061 14.7491 14.8335 14.9581 14.7746 15.1052C14.7452 15.1788 14.7193 15.2368 14.6988 15.2798C14.6885 15.3013 14.6797 15.3191 14.6724 15.3331L14.6628 15.3515L14.6589 15.3586L14.6573 15.3617L14.6565 15.3631L14.6558 15.3644C14.4546 15.7265 13.998 15.8569 13.6359 15.6558C13.2769 15.4563 13.1456 15.0057 13.3395 14.6451L13.3445 14.6349C13.3513 14.6205 13.3644 14.5918 13.3819 14.5482C13.4168 14.4609 13.4692 14.3136 13.5236 14.1014C13.6324 13.6773 13.7501 12.99 13.7501 12.0001C13.7501 11.0103 13.6324 10.323 13.5236 9.89892C13.4692 9.68664 13.4168 9.53933 13.3819 9.45212C13.3644 9.40848 13.3513 9.37976 13.3445 9.36536L13.3395 9.35513C13.1456 8.99455 13.2769 8.54397 13.6359 8.34452Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H11.5C15.2712 4 17.1569 4 18.3284 5.17157C19.2715 6.11466 19.4554 7.52043 19.4913 10H19.9999C20.9427 10 21.4141 10 21.707 10.2929C21.9999 10.5858 21.9999 11.0572 21.9999 12C21.9999 12.9428 21.9999 13.4142 21.707 13.7071C21.4141 14 20.9427 14 19.9999 14H19.4913C19.4554 16.4796 19.2715 17.8853 18.3284 18.8284C17.1569 20 15.2712 20 11.5 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12ZM6.63577 8.34438C6.99786 8.14322 7.45446 8.27368 7.65562 8.63577L7 9C7.65562 8.63577 7.65616 8.63675 7.65634 8.63708L7.65711 8.63847L7.65878 8.64152L7.66263 8.64864L7.67226 8.66699C7.67951 8.68106 7.68839 8.69881 7.69863 8.72032C7.71912 8.76335 7.74506 8.82135 7.77448 8.89489C7.83335 9.04206 7.90593 9.251 7.9765 9.52622C8.11776 10.0772 8.25 10.8899 8.25 12C8.25 13.1101 8.11776 13.9228 7.9765 14.4738C7.90593 14.749 7.83335 14.9579 7.77448 15.1051C7.74506 15.1787 7.71912 15.2367 7.69863 15.2797C7.68839 15.3012 7.67951 15.3189 7.67226 15.333L7.66263 15.3514L7.65878 15.3585L7.65711 15.3615L7.65634 15.3629L7.65562 15.3642L7 15C7.65052 15.3614 7.65541 15.3645 7.65562 15.3642C7.45446 15.7263 6.99786 15.8568 6.63577 15.6556C6.27675 15.4562 6.14545 15.0056 6.33933 14.645L6.34434 14.6348C6.35119 14.6204 6.36431 14.5917 6.38177 14.548C6.41665 14.4608 6.46907 14.3135 6.5235 14.1012C6.63224 13.6772 6.75 12.9899 6.75 12C6.75 11.0101 6.63224 10.3228 6.5235 9.89878C6.46907 9.6865 6.41665 9.53919 6.38177 9.45198C6.36431 9.40834 6.35119 9.37962 6.34434 9.36522L6.33933 9.35499C6.14545 8.99441 6.27675 8.54383 6.63577 8.34438ZM11.1556 8.63577C10.9545 8.27368 10.4979 8.14322 10.1358 8.34438C9.77675 8.54383 9.64545 8.99441 9.83933 9.35499L9.84434 9.36522C9.85119 9.37962 9.86431 9.40834 9.88177 9.45198C9.91665 9.53919 9.96907 9.6865 10.0235 9.89878C10.1322 10.3228 10.25 11.0101 10.25 12C10.25 12.9899 10.1322 13.6772 10.0235 14.1012C9.96907 14.3135 9.91665 14.4608 9.88177 14.548C9.86431 14.5917 9.85119 14.6204 9.84434 14.6348L9.83933 14.645C9.64545 15.0056 9.77675 15.4562 10.1358 15.6556C10.4979 15.8568 10.9545 15.7263 11.1556 15.3642L10.5 15C11.1556 15.3642 11.1562 15.3632 11.1563 15.3629L11.1571 15.3615L11.1588 15.3585L11.1626 15.3514L11.1723 15.333C11.1795 15.3189 11.1884 15.3012 11.1986 15.2797C11.2191 15.2367 11.2451 15.1787 11.2745 15.1051C11.3333 14.9579 11.4059 14.749 11.4765 14.4738C11.6178 13.9228 11.75 13.1101 11.75 12C11.75 10.8899 11.6178 10.0772 11.4765 9.52622C11.4059 9.251 11.3333 9.04206 11.2745 8.89489C11.2451 8.82135 11.2191 8.76335 11.1986 8.72032C11.1884 8.69881 11.1795 8.68106 11.1723 8.66699L11.1626 8.64864L11.1588 8.64152L11.1571 8.63847L11.1563 8.63708L11.1556 8.63577ZM10.5002 8.99986C11.1505 8.63861 11.1554 8.63548 11.1556 8.63577L10.5002 8.99986ZM13.6358 8.34438C13.9979 8.14322 14.4545 8.27368 14.6556 8.63577L14 9C14.6556 8.63577 14.6562 8.63675 14.6563 8.63708L14.6571 8.63847L14.6588 8.64152L14.6626 8.64864L14.6723 8.66699C14.6795 8.68106 14.6884 8.69881 14.6986 8.72032C14.7191 8.76335 14.7451 8.82135 14.7745 8.89489C14.8333 9.04206 14.9059 9.251 14.9765 9.52622C15.1178 10.0772 15.25 10.8899 15.25 12C15.25 13.1101 15.1178 13.9228 14.9765 14.4738C14.9059 14.749 14.8333 14.9579 14.7745 15.1051C14.7451 15.1787 14.7191 15.2367 14.6986 15.2797C14.6884 15.3012 14.6795 15.3189 14.6723 15.333L14.6626 15.3514L14.6588 15.3585L14.6571 15.3615L14.6563 15.3629L14.6556 15.3642L14.0024 15.0014C14.6505 15.3614 14.6554 15.3645 14.6556 15.3642C14.4545 15.7263 13.9979 15.8568 13.6358 15.6556C13.2768 15.4562 13.1455 15.0056 13.3393 14.645L13.3443 14.6348C13.3512 14.6204 13.3643 14.5917 13.3818 14.548C13.4167 14.4608 13.4691 14.3135 13.5235 14.1012C13.6322 13.6772 13.75 12.9899 13.75 12C13.75 11.0101 13.6322 10.3228 13.5235 9.89878C13.4691 9.6865 13.4167 9.53919 13.3818 9.45198C13.3643 9.40834 13.3512 9.37962 13.3443 9.36522L13.3393 9.35499C13.1455 8.99441 13.2768 8.54383 13.6358 8.34438Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBatteryFull as IconComponentType).keywords = [
  "battery",
  "full",
  "bombardment",
  "stamp battery",
  "barrage",
  "shelling",
  "assault and battery",
  "assault",
  "barrage fire",
  "electric battery",
  "alternator",
  "filled",
  "brimming",
  "brimful",
  "overfull",
  "high",
  "brimfull",
  "overflowing",
  "replete",
  "overladen"
];

export default IconBatteryFull as IconComponentType;