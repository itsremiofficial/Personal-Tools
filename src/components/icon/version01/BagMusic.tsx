import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBagMusic: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.74157 20.555C4.94119 22.0005 7.17389 22.0005 11.6393 22.0005H12.3605C16.8259 22.0005 19.0586 22.0005 20.2582 20.555M3.74157 20.555C2.54194 19.1096 2.9534 16.9151 3.77633 12.5262C4.36155 9.405 4.65416 7.84441 5.76506 6.92245M3.74157 20.555V20.555ZM20.2582 20.555C21.4578 19.1096 21.0464 16.9151 20.2235 12.5262C19.6382 9.405 19.3456 7.84441 18.2347 6.92245M20.2582 20.555V20.555ZM18.2347 6.92245C17.1238 6.00049 15.5361 6.00049 12.3605 6.00049H11.6393C8.46374 6.00049 6.87596 6.00049 5.76506 6.92245M18.2347 6.92245V6.92245ZM5.76506 6.92245V6.92245Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M9 6.00049V5.00049C9 3.34363 10.3431 2.00049 12 2.00049C13.6569 2.00049 15 3.34363 15 5.00049V6.00049" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M12.7416 10.6297L12.4062 9.9589L12.4062 9.9589L12.7416 10.6297ZM14.0584 9.97136L13.7229 9.30054V9.30054L14.0584 9.97136ZM13.9416 13.0297L13.6062 12.3589L13.6062 12.3589L13.9416 13.0297ZM12.0598 12.7231L12.7649 12.4677V12.4677L12.0598 12.7231ZM13.1159 13.3758L13.029 12.6308H13.029L13.1159 13.3758ZM15.9822 11.5705L16.7188 11.7115V11.7115L15.9822 11.5705ZM15.6074 12.1769L16.0629 12.7727L16.0629 12.7727L15.6074 12.1769ZM14.8841 9.62531L14.971 10.3703L14.8841 9.62531ZM15.9402 10.278L15.2351 10.5334V10.5334L15.9402 10.278ZM12.3926 10.8242L12.8482 11.42L12.8482 11.42L12.3926 10.8242ZM12.0178 11.4306L11.2812 11.2896V11.2896L12.0178 11.4306ZM11.25 17.0005C11.25 17.6909 10.6904 18.2505 10 18.2505V19.7505C11.5188 19.7505 12.75 18.5193 12.75 17.0005H11.25ZM10 18.2505C9.30964 18.2505 8.75 17.6909 8.75 17.0005H7.25C7.25 18.5193 8.48122 19.7505 10 19.7505V18.2505ZM8.75 17.0005C8.75 16.3102 9.30964 15.7505 10 15.7505V14.2505C8.48122 14.2505 7.25 15.4818 7.25 17.0005H8.75ZM10 15.7505C10.6904 15.7505 11.25 16.3102 11.25 17.0005H12.75C12.75 15.4818 11.5188 14.2505 10 14.2505V15.7505ZM12.75 17.0005V12.0005H11.25V17.0005H12.75ZM13.0771 11.3005L14.3938 10.6422L13.7229 9.30054L12.4062 9.9589L13.0771 11.3005ZM14.9229 11.7005L13.6062 12.3589L14.2771 13.7005L15.5938 13.0422L14.9229 11.7005ZM11.25 11.8297C11.25 12.0643 11.2498 12.2696 11.2585 12.436C11.2672 12.6004 11.2866 12.7907 11.3546 12.9785L12.7649 12.4677C12.7732 12.4904 12.7627 12.4769 12.7564 12.3572C12.7502 12.2395 12.75 12.0807 12.75 11.8297H11.25ZM13.6062 12.3589C13.3817 12.4712 13.2396 12.542 13.1316 12.589C13.0217 12.6369 13.0049 12.6336 13.029 12.6308L13.2028 14.1207C13.4012 14.0976 13.5801 14.0298 13.731 13.9641C13.8837 13.8975 14.0673 13.8054 14.2771 13.7005L13.6062 12.3589ZM11.3546 12.9785C11.6311 13.7419 12.3963 14.2148 13.2028 14.1207L13.029 12.6308C12.9138 12.6443 12.8044 12.5767 12.7649 12.4677L11.3546 12.9785ZM15.25 11.1714C15.25 11.2785 15.2499 11.3396 15.2482 11.3858C15.2468 11.4274 15.2446 11.4345 15.2455 11.4295L16.7188 11.7115C16.7532 11.5318 16.75 11.345 16.75 11.1714H15.25ZM15.5938 13.0422C15.7491 12.9645 15.9176 12.8838 16.0629 12.7727L15.1518 11.5811C15.1559 11.578 15.1505 11.5832 15.114 11.6031C15.0734 11.6252 15.0188 11.6526 14.9229 11.7005L15.5938 13.0422ZM15.2455 11.4295C15.234 11.4898 15.2006 11.5438 15.1518 11.5811L16.0629 12.7727C16.4045 12.5116 16.638 12.1338 16.7188 11.7115L15.2455 11.4295ZM14.3938 10.6422C14.6183 10.5299 14.7604 10.4591 14.8684 10.4121C14.9783 10.3642 14.9951 10.3675 14.971 10.3703L14.7972 8.88036C14.5988 8.90351 14.4199 8.97125 14.269 9.03702C14.1163 9.10359 13.9327 9.19565 13.7229 9.30054L14.3938 10.6422ZM16.75 11.1714C16.75 10.9368 16.7502 10.7315 16.7415 10.5651C16.7328 10.4007 16.7134 10.2104 16.6454 10.0226L15.2351 10.5334C15.2268 10.5106 15.2373 10.5242 15.2436 10.6439C15.2498 10.7616 15.25 10.9204 15.25 11.1714H16.75ZM14.971 10.3703C15.0862 10.3568 15.1956 10.4244 15.2351 10.5334L16.6454 10.0226C16.3689 9.25923 15.6037 8.7863 14.7972 8.88036L14.971 10.3703ZM12.4062 9.9589C12.2509 10.0366 12.0824 10.1172 11.9371 10.2284L12.8482 11.42C12.8441 11.4231 12.8495 11.4179 12.886 11.398C12.9266 11.3759 12.9812 11.3485 13.0771 11.3005L12.4062 9.9589ZM12.75 11.8297C12.75 11.7226 12.7501 11.6615 12.7518 11.6153C12.7532 11.5737 12.7554 11.5666 12.7545 11.5716L11.2812 11.2896C11.2468 11.4693 11.25 11.6561 11.25 11.8297H12.75ZM11.9371 10.2284C11.5955 10.4895 11.362 10.8673 11.2812 11.2896L12.7545 11.5716C12.766 11.5112 12.7994 11.4573 12.8482 11.42L11.9371 10.2284Z" fill="currentColor" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M4.0828 10.8948C4.52171 8.55388 4.74117 7.38343 5.57434 6.69196C6.40752 6.00049 7.59835 6.00049 9.98003 6.00049H14.0209C16.4026 6.00049 17.5934 6.00049 18.4266 6.69196C19.2598 7.38343 19.4792 8.55387 19.9181 10.8948L20.6681 14.8948C21.2853 18.1865 21.5939 19.8323 20.6942 20.9164C19.7945 22.0005 18.12 22.0005 14.7709 22.0005H9.23003C5.88097 22.0005 4.20644 22.0005 3.30672 20.9164C2.40701 19.8323 2.7156 18.1865 3.3328 14.8948L4.0828 10.8948Z" fill="currentColor" /><path d="M9.75 5.00049C9.75 3.75785 10.7574 2.75049 12 2.75049C13.2426 2.75049 14.25 3.75785 14.25 5.00049V6.00049C14.25 6.00048 14.25 6.0005 14.25 6.00049C14.816 6.00067 15.3119 6.00223 15.7499 6.01537C15.75 6.01042 15.75 6.00546 15.75 6.00049V5.00049C15.75 2.92942 14.0711 1.25049 12 1.25049C9.92893 1.25049 8.25 2.92942 8.25 5.00049V6.00049C8.25 6.00547 8.25005 6.01044 8.25015 6.0154C8.68814 6.00224 9.18397 6.00069 9.75 6.00051C9.75 6.0005 9.75 6.00052 9.75 6.00051V5.00049Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12.75 17.0005C12.75 18.5192 11.5188 19.7505 10 19.7505C8.48122 19.7505 7.25 18.5192 7.25 17.0005C7.25 15.4817 8.48122 14.2505 10 14.2505C10.4501 14.2505 10.875 14.3586 11.25 14.5503V11.8296C11.2498 11.6677 11.2495 11.4552 11.2812 11.2895C11.362 10.8672 11.5955 10.4894 11.9371 10.2283C12.0711 10.1258 12.2248 10.0492 12.3697 9.97703L13.7397 9.29209C13.9425 9.19067 14.1204 9.10173 14.269 9.03693C14.4199 8.97116 14.5988 8.90342 14.7972 8.88028C15.6037 8.78621 16.3689 9.25914 16.6454 10.0225C16.7134 10.2103 16.7328 10.4006 16.7415 10.565C16.75 10.7269 16.75 10.9258 16.75 11.1526L16.75 11.2121C16.7503 11.374 16.7505 11.5457 16.7188 11.7114C16.638 12.1337 16.4045 12.5115 16.0629 12.7726C15.9289 12.8751 15.7752 12.9517 15.6303 13.0239L14.2603 13.7088C14.0575 13.8102 13.8796 13.8992 13.731 13.964C13.5801 14.0297 13.4012 14.0975 13.2028 14.1206C13.0493 14.1385 12.8974 14.1359 12.75 14.1147V17.0005ZM14.8684 10.412C14.9383 10.3815 14.9705 10.3718 14.9785 10.3694C15.0885 10.3599 15.1917 10.4237 15.2324 10.5263C15.2339 10.5345 15.2396 10.5677 15.2436 10.6438C15.2498 10.7615 15.25 10.9203 15.25 11.1713C15.25 11.2784 15.2499 11.3395 15.2482 11.3857C15.2472 11.4147 15.2458 11.4269 15.2454 11.43C15.2338 11.4899 15.2007 11.5435 15.1523 11.5807C15.1498 11.5824 15.1394 11.5891 15.114 11.603C15.0734 11.6251 15.0188 11.6525 14.9229 11.7005L13.6062 12.3588C13.3817 12.4711 13.2396 12.5419 13.1316 12.5889C13.0617 12.6194 13.0295 12.6291 13.0215 12.6315C12.9115 12.641 12.8083 12.5772 12.7676 12.4746C12.7661 12.4664 12.7604 12.4332 12.7564 12.3571C12.7502 12.2394 12.75 12.0806 12.75 11.8296C12.75 11.7225 12.7501 11.6614 12.7518 11.6152C12.7528 11.5862 12.7542 11.574 12.7546 11.5709C12.7662 11.511 12.7993 11.4574 12.8477 11.4202C12.8502 11.4185 12.8606 11.4118 12.886 11.3979C12.9266 11.3758 12.9812 11.3484 13.0771 11.3005L14.3938 10.6421C14.6183 10.5298 14.7604 10.459 14.8684 10.412ZM10 15.7505C10.6904 15.7505 11.25 16.3101 11.25 17.0005C11.25 17.6908 10.6904 18.2505 10 18.2505C9.30964 18.2505 8.75 17.6908 8.75 17.0005C8.75 16.3101 9.30964 15.7505 10 15.7505Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.8684 10.412C14.9382 10.3815 14.9705 10.3718 14.9785 10.3694C15.0884 10.3599 15.1917 10.4237 15.2324 10.5263C15.2339 10.5345 15.2395 10.5677 15.2435 10.6438C15.2497 10.7615 15.25 10.9203 15.25 11.1713C15.25 11.2784 15.2499 11.3395 15.2482 11.3857C15.2472 11.4147 15.2458 11.4269 15.2454 11.43C15.2338 11.4899 15.2007 11.5435 15.1523 11.5807C15.1497 11.5824 15.1394 11.5891 15.114 11.603C15.0733 11.6251 15.0188 11.6525 14.9229 11.7005L13.6062 12.3588C13.3817 12.4711 13.2396 12.5419 13.1316 12.5889C13.0617 12.6194 13.0295 12.6291 13.0214 12.6315C12.9115 12.641 12.8083 12.5772 12.7676 12.4746C12.7661 12.4664 12.7604 12.4332 12.7564 12.3571C12.7502 12.2394 12.75 12.0806 12.75 11.8296C12.75 11.7225 12.7501 11.6614 12.7517 11.6152C12.7528 11.5862 12.7541 11.574 12.7546 11.5709C12.7662 11.511 12.7993 11.4574 12.8477 11.4202C12.8502 11.4185 12.8606 11.4118 12.886 11.3979C12.9266 11.3758 12.9812 11.3484 13.077 11.3005L14.3938 10.6421C14.6183 10.5298 14.7604 10.459 14.8684 10.412Z" fill="currentColor" /><path d="M9.99998 15.7505C10.6903 15.7505 11.25 16.3101 11.25 17.0005C11.25 17.6908 10.6903 18.2505 9.99998 18.2505C9.30963 18.2505 8.74998 17.6908 8.74998 17.0005C8.74998 16.3101 9.30963 15.7505 9.99998 15.7505Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M8.25014 6.01538C8.25005 6.01043 8.25 6.00546 8.25 6.00049V5.00049C8.25 2.92942 9.92893 1.25049 12 1.25049C14.0711 1.25049 15.75 2.92942 15.75 5.00049V6.00049C15.75 6.00547 15.75 6.01043 15.7499 6.01538C17.0371 6.05402 17.8248 6.19289 18.4261 6.69196C19.2593 7.38343 19.4787 8.55387 19.9177 10.8948L20.6677 14.8948C21.2849 18.1865 21.5934 19.8323 20.6937 20.9164C19.794 22.0005 18.1195 22.0005 14.7704 22.0005H9.22954C5.88048 22.0005 4.20595 22.0005 3.30624 20.9164C2.40652 19.8323 2.71512 18.1865 3.33231 14.8948L4.08231 10.8948C4.52122 8.55388 4.74068 7.38343 5.57386 6.69196C6.17521 6.19288 6.96288 6.05402 8.25014 6.01538ZM9.75 5.00049C9.75 3.75785 10.7574 2.75049 12 2.75049C13.2426 2.75049 14.25 3.75785 14.25 5.00049V6.00049C14.25 6.00048 14.25 6.0005 14.25 6.00049C14.1747 6.00046 14.0982 6.00049 14.0204 6.00049H9.97954C9.90177 6.00049 9.82526 6.00049 9.75 6.00051C9.75 6.0005 9.75 6.00052 9.75 6.00051V5.00049ZM9.99998 19.7505C11.5188 19.7505 12.75 18.5192 12.75 17.0005V14.1147C12.8974 14.1359 13.0493 14.1385 13.2027 14.1206C13.4012 14.0975 13.5801 14.0297 13.731 13.964C13.8796 13.8992 14.0575 13.8102 14.2603 13.7088L15.6303 13.0239C15.7752 12.9517 15.9289 12.8751 16.0629 12.7726C16.4045 12.5115 16.6379 12.1337 16.7188 11.7114C16.7505 11.5457 16.7503 11.374 16.75 11.2121L16.75 11.1526C16.75 10.9258 16.75 10.7269 16.7415 10.565C16.7328 10.4006 16.7134 10.2103 16.6454 10.0225C16.3689 9.25914 15.6036 8.78621 14.7972 8.88028C14.5988 8.90342 14.4199 8.97116 14.269 9.03693C14.1204 9.10173 13.9425 9.19067 13.7397 9.29209L12.3697 9.97703C12.2248 10.0492 12.0711 10.1258 11.9371 10.2283C11.5955 10.4894 11.362 10.8672 11.2812 11.2895C11.2495 11.4552 11.2498 11.6677 11.25 11.8296V14.5503C10.875 14.3586 10.4501 14.2505 9.99998 14.2505C8.4812 14.2505 7.24998 15.4817 7.24998 17.0005C7.24998 18.5192 8.4812 19.7505 9.99998 19.7505Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBagMusic as IconComponentType).keywords = [
  "bag",
  "music",
  "purse",
  "pocketbook",
  "handbag",
  "pocket",
  "bagful",
  "suitcase",
  "dish",
  "grip",
  "cup of tea",
  "sheet music",
  "euphony",
  "medicine",
  "melody",
  "symphony",
  "orchestra",
  "musician",
  "song",
  "singing"
];

export default IconBagMusic as IconComponentType;