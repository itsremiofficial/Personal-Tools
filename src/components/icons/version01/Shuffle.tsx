import { FC } from 'react';

const IconShuffle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 16.25C1.58579 16.25 1.25 16.5858 1.25 17C1.25 17.4142 1.58579 17.75 2 17.75V16.25ZM10.7478 14.087L10.1047 13.7011L10.7478 14.087ZM13.2522 9.91303L13.8953 10.2989L13.2522 9.91303ZM22 7L22.5303 7.53033C22.8232 7.23744 22.8232 6.76256 22.5303 6.46967L22 7ZM19.4697 8.46967C19.1768 8.76256 19.1768 9.23744 19.4697 9.53033C19.7626 9.82322 20.2374 9.82322 20.5303 9.53033L19.4697 8.46967ZM20.5303 4.46967C20.2374 4.17678 19.7626 4.17678 19.4697 4.46967C19.1768 4.76256 19.1768 5.23744 19.4697 5.53033L20.5303 4.46967ZM15.2205 7.3894L14.851 6.73675V6.73675L15.2205 7.3894ZM2 17.75H5.60286V16.25H2V17.75ZM11.3909 14.4728L13.8953 10.2989L12.6091 9.52716L10.1047 13.7011L11.3909 14.4728ZM18.3971 7.75H22V6.25H18.3971V7.75ZM21.4697 6.46967L19.4697 8.46967L20.5303 9.53033L22.5303 7.53033L21.4697 6.46967ZM22.5303 6.46967L20.5303 4.46967L19.4697 5.53033L21.4697 7.53033L22.5303 6.46967ZM13.8953 10.2989C14.3295 9.57518 14.6286 9.07834 14.9013 8.70996C15.1644 8.35464 15.3692 8.16707 15.59 8.04205L14.851 6.73675C14.384 7.00113 14.0315 7.36397 13.6958 7.8174C13.3697 8.25778 13.0285 8.82806 12.6091 9.52716L13.8953 10.2989ZM18.3971 6.25C17.5819 6.25 16.9173 6.24918 16.3719 6.30219C15.8104 6.35677 15.3179 6.47237 14.851 6.73675L15.59 8.04205C15.8108 7.91703 16.077 7.83793 16.517 7.79516C16.9733 7.75082 17.5531 7.75 18.3971 7.75V6.25ZM5.60286 17.75C6.41814 17.75 7.0827 17.7508 7.62807 17.6978C8.18961 17.6432 8.6821 17.5276 9.14905 17.2632L8.41 15.9579C8.18919 16.083 7.92299 16.1621 7.48296 16.2048C7.02675 16.2492 6.44685 16.25 5.60286 16.25V17.75ZM10.1047 13.7011C9.67046 14.4248 9.37141 14.9217 9.09867 15.29C8.8356 15.6454 8.63081 15.8329 8.41 15.9579L9.14905 17.2632C9.616 16.9989 9.96851 16.636 10.3042 16.1826C10.6303 15.7422 10.9715 15.1719 11.3909 14.4728L10.1047 13.7011Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M2 7.75C1.58579 7.75 1.25 7.41421 1.25 7C1.25 6.58579 1.58579 6.25 2 6.25V7.75ZM10.7478 9.91303L10.1047 10.2989L10.7478 9.91303ZM13.2522 14.087L13.8953 13.7011L13.2522 14.087ZM22 17L22.5303 16.4697C22.8232 16.7626 22.8232 17.2374 22.5303 17.5303L22 17ZM19.4697 15.5303C19.1768 15.2374 19.1768 14.7626 19.4697 14.4697C19.7626 14.1768 20.2374 14.1768 20.5303 14.4697L19.4697 15.5303ZM20.5303 19.5303C20.2374 19.8232 19.7626 19.8232 19.4697 19.5303C19.1768 19.2374 19.1768 18.7626 19.4697 18.4697L20.5303 19.5303ZM15.2205 16.6106L14.851 17.2632V17.2632L15.2205 16.6106ZM2 6.25H5.60286V7.75H2V6.25ZM11.3909 9.52715L13.8953 13.7011L12.6091 14.4728L10.1047 10.2989L11.3909 9.52715ZM18.3971 16.25H22V17.75H18.3971V16.25ZM21.4697 17.5303L19.4697 15.5303L20.5303 14.4697L22.5303 16.4697L21.4697 17.5303ZM22.5303 17.5303L20.5303 19.5303L19.4697 18.4697L21.4697 16.4697L22.5303 17.5303ZM13.8953 13.7011C14.3295 14.4248 14.6286 14.9217 14.9013 15.29C15.1644 15.6454 15.3692 15.8329 15.59 15.9579L14.851 17.2632C14.384 16.9989 14.0315 16.636 13.6958 16.1826C13.3697 15.7422 13.0285 15.1719 12.6091 14.4728L13.8953 13.7011ZM18.3971 17.75C17.5819 17.75 16.9173 17.7508 16.3719 17.6978C15.8104 17.6432 15.3179 17.5276 14.851 17.2632L15.59 15.9579C15.8108 16.083 16.077 16.1621 16.517 16.2048C16.9733 16.2492 17.5531 16.25 18.3971 16.25V17.75ZM5.60286 6.25C6.41814 6.25 7.0827 6.24918 7.62807 6.30219C8.18961 6.35677 8.6821 6.47237 9.14905 6.73675L8.41 8.04205C8.18919 7.91703 7.92299 7.83793 7.48296 7.79516C7.02675 7.75082 6.44685 7.75 5.60286 7.75V6.25ZM10.1047 10.2989C9.67046 9.57518 9.37141 9.07834 9.09867 8.70996C8.8356 8.35464 8.63081 8.16707 8.41 8.04205L9.14905 6.73675C9.616 7.00113 9.96851 7.36397 10.3042 7.8174C10.6303 8.25778 10.9715 8.82806 11.3909 9.52715L10.1047 10.2989Z" fill="currentColor" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22Z" fill="currentColor" /><path d="M16.2623 7.47719C16.551 7.1802 17.0258 7.17351 17.3228 7.46225L18.5228 8.62892C18.6681 8.77013 18.75 8.96409 18.75 9.16667C18.75 9.36924 18.6681 9.5632 18.5228 9.70441L17.3228 10.8711C17.0258 11.1598 16.551 11.1531 16.2623 10.8561C16.011 10.5977 15.9834 10.2046 16.1762 9.91667H15.8383C15.3265 9.91667 14.9944 9.91744 14.7373 9.94173C14.4955 9.96458 14.3787 10.0042 14.294 10.0509C14.2102 10.0969 14.1178 10.1718 13.9758 10.3582C13.8236 10.5581 13.6532 10.8325 13.3896 11.2598L11.8693 13.7233L11.8693 13.7233C11.6282 14.1138 11.4197 14.4518 11.2175 14.7172C11.0002 15.0026 10.7583 15.2488 10.4294 15.4299C10.1015 15.6104 9.76303 15.6843 9.40387 15.7183C9.06785 15.75 8.66434 15.75 8.1946 15.75L6 15.75C5.58579 15.75 5.25 15.4142 5.25 15C5.25 14.5858 5.58579 14.25 6 14.25H8.16171C8.67346 14.25 9.00564 14.2492 9.26275 14.2249C9.50453 14.2021 9.62126 14.1625 9.70604 14.1158C9.78978 14.0697 9.88225 13.9948 10.0242 13.8085C10.1764 13.6086 10.3468 13.3341 10.6104 12.9068L12.1307 10.4434C12.3717 10.0528 12.5803 9.71485 12.7825 9.44943C12.9998 9.16404 13.2417 8.91784 13.5706 8.73678C13.8985 8.55631 14.237 8.48233 14.5961 8.44839C14.9322 8.41663 15.3357 8.41665 15.8054 8.41667L16.1762 8.41667C15.9834 8.12871 16.011 7.73562 16.2623 7.47719Z" fill="currentColor" /><path d="M9.38531 9.76916C9.30046 9.7531 9.19932 9.75 8.80057 9.75H6C5.58579 9.75 5.25 9.41421 5.25 9C5.25 8.58579 5.58579 8.25 6 8.25H8.80057L8.85843 8.24998C9.17103 8.24981 9.42305 8.24968 9.66421 8.29532C10.2033 8.39734 10.6972 8.66783 11.0694 9.07011C11.2363 9.25039 11.3679 9.4639 11.5278 9.72347L11.5278 9.72348L11.5582 9.77278C11.7758 10.1253 11.6664 10.5874 11.3139 10.8049C10.9614 11.0224 10.4993 10.913 10.2818 10.5606C10.0759 10.2269 10.0234 10.1482 9.96852 10.0889C9.81783 9.92609 9.61368 9.81237 9.38531 9.76916Z" fill="currentColor" /><path d="M12.6861 13.0284C13.0386 12.8109 13.5007 12.9203 13.7182 13.2728C13.9241 13.6064 13.9766 13.6851 14.0315 13.7444C14.1822 13.9072 14.3863 14.021 14.6147 14.0642C14.6995 14.0802 14.8007 14.0833 15.1994 14.0833H16.1762C15.9834 13.7954 16.011 13.4023 16.2623 13.1439C16.551 12.8469 17.0258 12.8402 17.3228 13.1289L18.5228 14.2956C18.6681 14.4368 18.75 14.6308 18.75 14.8333C18.75 15.0359 18.6681 15.2299 18.5228 15.3711L17.3228 16.5377C17.0258 16.8265 16.551 16.8198 16.2623 16.5228C16.011 16.2644 15.9834 15.8713 16.1762 15.5833H15.1994L15.1416 15.5834H15.1415C14.8289 15.5835 14.5769 15.5837 14.3358 15.538C13.7967 15.436 13.3028 15.1655 12.9306 14.7632C12.7637 14.5829 12.6321 14.3694 12.4722 14.1099L12.4722 14.1098L12.4418 14.0606C12.2242 13.7081 12.3336 13.246 12.6861 13.0284Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM16.2623 7.47719C16.551 7.1802 17.0258 7.17351 17.3228 7.46225L18.5228 8.62892C18.6681 8.77013 18.75 8.96409 18.75 9.16667C18.75 9.36924 18.6681 9.5632 18.5228 9.70441L17.3228 10.8711C17.0258 11.1598 16.551 11.1531 16.2623 10.8561C16.011 10.5977 15.9834 10.2046 16.1762 9.91667H15.8383C15.3265 9.91667 14.9944 9.91744 14.7373 9.94173C14.4955 9.96458 14.3787 10.0042 14.294 10.0509C14.2102 10.0969 14.1178 10.1718 13.9758 10.3582C13.8236 10.5581 13.6532 10.8325 13.3896 11.2598L11.8693 13.7233C11.6282 14.1138 11.4197 14.4518 11.2175 14.7172C11.0002 15.0026 10.7583 15.2488 10.4294 15.4299C10.1015 15.6104 9.76303 15.6843 9.40387 15.7183C9.06785 15.75 8.66434 15.75 8.1946 15.75L6 15.75C5.58579 15.75 5.25 15.4142 5.25 15C5.25 14.5858 5.58579 14.25 6 14.25H8.16171C8.67346 14.25 9.00564 14.2492 9.26275 14.2249C9.50453 14.2021 9.62126 14.1625 9.70604 14.1158C9.78978 14.0697 9.88225 13.9948 10.0242 13.8085C10.1764 13.6086 10.3468 13.3341 10.6104 12.9068L12.1307 10.4434C12.3717 10.0528 12.5803 9.71485 12.7825 9.44943C12.9998 9.16404 13.2417 8.91784 13.5706 8.73678C13.8985 8.55631 14.237 8.48233 14.5961 8.44839C14.9322 8.41663 15.3357 8.41665 15.8054 8.41667L16.1762 8.41667C15.9834 8.12871 16.011 7.73562 16.2623 7.47719ZM9.38531 9.76916C9.30046 9.7531 9.19932 9.75 8.80057 9.75H6C5.58579 9.75 5.25 9.41421 5.25 9C5.25 8.58579 5.58579 8.25 6 8.25H8.80057L8.85843 8.24998C9.17103 8.24981 9.42305 8.24968 9.66421 8.29532C10.2033 8.39734 10.6972 8.66783 11.0694 9.07011C11.2363 9.25039 11.3679 9.4639 11.5278 9.72348L11.5582 9.77278C11.7758 10.1253 11.6664 10.5874 11.3139 10.8049C10.9614 11.0224 10.4993 10.913 10.2818 10.5606C10.0759 10.2269 10.0234 10.1482 9.96852 10.0889C9.81783 9.92609 9.61368 9.81237 9.38531 9.76916ZM12.6861 13.0284C13.0386 12.8109 13.5007 12.9203 13.7182 13.2728C13.9241 13.6064 13.9766 13.6851 14.0315 13.7444C14.1822 13.9072 14.3863 14.021 14.6147 14.0642C14.6995 14.0802 14.8007 14.0833 15.1994 14.0833H16.1762C15.9834 13.7954 16.011 13.4023 16.2623 13.1439C16.551 12.8469 17.0258 12.8402 17.3228 13.1289L18.5228 14.2956C18.6681 14.4368 18.75 14.6308 18.75 14.8333C18.75 15.0359 18.6681 15.2299 18.5228 15.3711L17.3228 16.5377C17.0258 16.8265 16.551 16.8198 16.2623 16.5228C16.011 16.2644 15.9834 15.8713 16.1762 15.5833H15.1994L15.1416 15.5834C14.829 15.5835 14.5769 15.5837 14.3358 15.538C13.7967 15.436 13.3028 15.1655 12.9306 14.7632C12.7637 14.5829 12.6321 14.3694 12.4722 14.1098L12.4418 14.0606C12.2242 13.7081 12.3336 13.246 12.6861 13.0284Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconShuffle as IconComponent).keywords = [
  "shuffle",
  "scuffle",
  "make",
  "mix",
  "shamble",
  "shambling",
  "ruffle",
  "reshuffle",
  "move",
  "realignment"
];

export default IconShuffle as IconComponent;