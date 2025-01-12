import { FC } from 'react';

const IconTornadoSmall: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5C7.02944 5 3 5.67157 3 6.5C3 7.32843 7.02944 8 12 8C16.9706 8 21 7.32843 21 6.5C21 5.97993 19.412 5.52168 17 5.25259" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M20 10C20 10 17.2089 11 11.7241 11C6.23938 11 4 10 4 10" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M16 16C16 16 14.7424 16.5 12 16.5C9.25762 16.5 8 16 8 16" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M16 18.5C15.2525 18.7554 14.3516 19 13 19C11.6484 19 10.6575 18.8786 10 18.7554" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M18 13C18 13 17.4848 14 12 14M6 13C6 13 6.21904 13.4251 7.8918 13.721" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.31274 6.5C4.67997 6.38779 5.16504 6.27819 5.75934 6.17914C7.33609 5.91634 9.54289 5.75 12 5.75C12.4142 5.75 12.75 5.41421 12.75 5C12.75 4.58579 12.4142 4.25 12 4.25C9.48655 4.25 7.19335 4.41944 5.51274 4.69954C4.67845 4.83859 3.95965 5.01055 3.43231 5.21835C3.17237 5.32078 2.91483 5.44871 2.70921 5.61618C2.51293 5.77605 2.25 6.0689 2.25 6.5C2.25 6.9311 2.51293 7.22395 2.70921 7.38382C2.91483 7.55129 3.17237 7.67922 3.43231 7.78165C3.95965 7.98945 4.67845 8.16141 5.51274 8.30046C7.19335 8.58056 9.48655 8.75 12 8.75C14.5135 8.75 16.8067 8.58056 18.4873 8.30046C19.3215 8.16141 20.0403 7.98945 20.5677 7.78165C20.8276 7.67922 21.0852 7.55129 21.2908 7.38382C21.4871 7.22395 21.75 6.9311 21.75 6.5C21.75 5.96462 21.3529 5.64298 21.1206 5.49321C20.8491 5.31812 20.4993 5.17957 20.1234 5.06485C19.361 4.83211 18.3088 4.64395 17.0832 4.50722C16.6715 4.46129 16.3006 4.75778 16.2546 5.16944C16.2087 5.58109 16.5052 5.95204 16.9168 5.99797C18.1032 6.13032 19.051 6.30583 19.6855 6.49951C19.6861 6.49968 19.6866 6.49985 19.6872 6.50002C19.32 6.61222 18.8349 6.72182 18.2407 6.82086C16.6639 7.08366 14.4571 7.25 12 7.25C9.54289 7.25 7.33609 7.08366 5.75934 6.82086C5.16504 6.72181 4.67997 6.61221 4.31274 6.5ZM3.64796 6.78666C3.64789 6.78666 3.64884 6.78572 3.65099 6.78384C3.64911 6.78572 3.64803 6.78667 3.64796 6.78666ZM20.3582 6.79149C20.3576 6.79154 20.3527 6.78778 20.3454 6.78004C20.3551 6.78757 20.3588 6.79144 20.3582 6.79149ZM20.349 6.21616C20.3509 6.21428 20.352 6.21333 20.352 6.21334C20.3521 6.21334 20.3512 6.21428 20.349 6.21616ZM3.65099 6.21616C3.64883 6.21428 3.64789 6.21334 3.64796 6.21334C3.64803 6.21333 3.64911 6.21428 3.65099 6.21616Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} fillRule="evenodd" clipRule="evenodd" d="M20.706 9.74698C20.8457 10.1369 20.6428 10.5663 20.2529 10.706L19.9999 9.99994C20.2529 10.706 20.2529 10.706 20.2529 10.706L20.2519 10.7063L20.2507 10.7068L20.2474 10.7079L20.2378 10.7113L20.2063 10.7221C20.1798 10.731 20.1424 10.7432 20.0941 10.7584C19.9975 10.7888 19.8572 10.8307 19.6736 10.8803C19.3062 10.9794 18.7652 11.1091 18.0522 11.238C16.6259 11.4957 14.5123 11.7499 11.7241 11.7499C8.93602 11.7499 6.95533 11.4958 5.65762 11.2353C5.00882 11.105 4.53107 10.9733 4.20884 10.8711C4.04774 10.82 3.92559 10.7763 3.84043 10.744C3.79785 10.7278 3.76453 10.7145 3.74023 10.7044L3.71051 10.6919L3.70066 10.6876L3.69698 10.686L3.69546 10.6854C3.69546 10.6854 3.69413 10.6848 3.99994 9.99994L3.69413 10.6848C3.31592 10.5159 3.14623 10.0724 3.31512 9.69413C3.48354 9.31699 3.92502 9.14719 4.30253 9.31369M4.30253 9.31369L4.31263 9.31793C4.32381 9.32254 4.34396 9.33068 4.37333 9.34184C4.43206 9.36416 4.52771 9.39861 4.66225 9.44128C4.9313 9.5266 5.35619 9.64485 5.95283 9.76461C7.14601 10.0041 9.02738 10.2499 11.7241 10.2499C14.4206 10.2499 16.445 10.0041 17.7854 9.7619C18.4557 9.64076 18.9553 9.52045 19.2827 9.4321C19.4464 9.38792 19.5671 9.35172 19.6445 9.32739C19.6832 9.31523 19.7111 9.30603 19.7282 9.30029L19.747 9.29389L19.9812 9.94752C19.747 9.29389 19.747 9.29389 19.747 9.29389C20.1368 9.15446 20.5663 9.35717 20.706 9.74698" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} fillRule="evenodd" clipRule="evenodd" d="M8.27302 15.3014C7.8891 15.1513 7.45551 15.3393 7.30302 15.7229C7.14999 16.1078 7.33796 16.5439 7.72287 16.6969L7.99996 16C7.72287 16.6969 7.72313 16.697 7.72339 16.6971L7.72395 16.6973L7.72514 16.6978L7.72788 16.6989L7.73475 16.7015L7.7541 16.7088C7.7695 16.7145 7.78991 16.7219 7.81538 16.7307C7.86633 16.7482 7.93751 16.7713 8.02935 16.7981C8.21307 16.8517 8.47927 16.9198 8.83143 16.9867C9.53596 17.1207 10.5829 17.25 12 17.25C13.417 17.25 14.464 17.1207 15.1685 16.9867C15.5206 16.9198 15.7868 16.8517 15.9706 16.7981C16.0624 16.7713 16.1336 16.7482 16.1845 16.7307C16.21 16.7219 16.2304 16.7145 16.2458 16.7088L16.2652 16.7015L16.272 16.6989L16.2748 16.6978L16.276 16.6973L16.2765 16.6971C16.2768 16.697 16.277 16.6969 16 16L16.277 16.6969C16.662 16.5439 16.8499 16.1078 16.6969 15.7229C16.5444 15.3393 16.1108 15.1513 15.7269 15.3014C15.7273 15.3013 15.7275 15.3012 15.7274 15.3013L15.726 15.3018L15.7247 15.3023M15.7245 15.3023C15.7202 15.3039 15.7109 15.3073 15.6966 15.3122C15.6681 15.322 15.6196 15.338 15.5506 15.3581C15.4129 15.3982 15.1933 15.4551 14.8882 15.5132C14.2783 15.6292 13.3253 15.75 12 15.75C10.6746 15.75 9.72158 15.6292 9.1117 15.5132C8.80666 15.4551 8.58705 15.3982 8.44926 15.3581C8.38035 15.338 8.33186 15.322 8.30332 15.3122C8.28904 15.3073 8.27976 15.3039 8.2754 15.3023M15.7234 15.3028L15.7238 15.3026L15.7245 15.3023" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M16.7096 18.2575C16.8435 18.6495 16.6343 19.0758 16.2424 19.2097C15.4415 19.4833 14.4566 19.75 12.9999 19.75C11.6031 19.75 10.5659 19.6244 9.86177 19.4925C9.45464 19.4162 9.18644 19.0243 9.26272 18.6172C9.339 18.2101 9.73088 17.9419 10.138 18.0182C10.7488 18.1326 11.6935 18.25 12.9999 18.25C14.2464 18.25 15.0633 18.0274 15.7574 17.7902C16.1494 17.6563 16.5757 17.8655 16.7096 18.2575Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M6.59098 12.538C6.37364 12.2592 5.98212 12.1654 5.6564 12.3332C5.28819 12.5229 5.14349 12.9752 5.33321 13.3434L5.99991 12.9999C5.33321 13.3434 5.33368 13.3443 5.33416 13.3453L5.33512 13.3471L5.33708 13.3508L5.34111 13.3584L5.34965 13.3737C5.35556 13.384 5.36191 13.3946 5.36871 13.4053C5.38233 13.4269 5.39772 13.4492 5.41506 13.472C5.44981 13.5178 5.49197 13.5654 5.54286 13.6139C5.64444 13.7107 5.77993 13.8104 5.96065 13.9086C6.31819 14.1027 6.87539 14.3028 7.76108 14.4594C8.16896 14.5316 8.5581 14.2594 8.63025 13.8515C8.70239 13.4437 8.43022 13.0545 8.02234 12.9824C7.23527 12.8432 6.84657 12.6827 6.6764 12.5904C6.63316 12.5669 6.60596 12.5488 6.59098 12.538ZM18.3434 12.3332C18.7116 12.5229 18.8563 12.9752 18.6666 13.3434L17.9999 12.9999C18.6666 13.3434 18.6659 13.3448 18.6652 13.3463L18.6637 13.3491L18.6606 13.3548L18.6542 13.3665C18.6499 13.3743 18.6452 13.3823 18.6403 13.3904C18.6305 13.4066 18.6197 13.4233 18.6078 13.4404C18.5838 13.4747 18.5557 13.5103 18.5226 13.5468C18.4564 13.6197 18.3717 13.6951 18.2636 13.7707C18.0494 13.9206 17.7375 14.0755 17.2768 14.2169C16.3612 14.498 14.7773 14.7499 11.9999 14.7499C11.5857 14.7499 11.2499 14.4141 11.2499 13.9999C11.2499 13.5857 11.5857 13.2499 11.9999 13.2499C14.7072 13.2499 16.1234 13.0019 16.8366 12.7829C17.1903 12.6744 17.35 12.5793 17.4038 12.5416C17.4056 12.5403 17.4073 12.5391 17.4088 12.538C17.6262 12.2592 18.0177 12.1654 18.3434 12.3332Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.31274 6.5C4.67997 6.38779 5.16504 6.27819 5.75934 6.17914C7.33609 5.91634 9.54289 5.75 12 5.75C12.4142 5.75 12.75 5.41421 12.75 5C12.75 4.58579 12.4142 4.25 12 4.25C9.48655 4.25 7.19335 4.41944 5.51274 4.69954C4.67845 4.83859 3.95965 5.01055 3.43231 5.21835C3.17237 5.32078 2.91483 5.44871 2.70921 5.61618C2.51293 5.77605 2.25 6.0689 2.25 6.5C2.25 6.9311 2.51293 7.22395 2.70921 7.38382C2.91483 7.55129 3.17237 7.67922 3.43231 7.78165C3.95965 7.98945 4.67845 8.16141 5.51274 8.30046C7.19335 8.58056 9.48655 8.75 12 8.75C14.5135 8.75 16.8067 8.58056 18.4873 8.30046C19.3215 8.16141 20.0403 7.98945 20.5677 7.78165C20.8276 7.67922 21.0852 7.55129 21.2908 7.38382C21.4871 7.22395 21.75 6.9311 21.75 6.5C21.75 5.96462 21.3529 5.64298 21.1206 5.49321C20.8491 5.31812 20.4993 5.17957 20.1234 5.06485C19.361 4.83211 18.3088 4.64395 17.0832 4.50722C16.6715 4.46129 16.3006 4.75778 16.2546 5.16944C16.2087 5.58109 16.5052 5.95204 16.9168 5.99797C18.1032 6.13032 19.051 6.30583 19.6855 6.49951C19.6861 6.49968 19.6866 6.49985 19.6872 6.50002C19.32 6.61222 18.8349 6.72182 18.2407 6.82086C16.6639 7.08366 14.4571 7.25 12 7.25C9.54289 7.25 7.33609 7.08366 5.75934 6.82086C5.16504 6.72181 4.67997 6.61221 4.31274 6.5ZM3.64796 6.78666C3.64789 6.78666 3.64884 6.78572 3.65099 6.78384C3.64911 6.78572 3.64803 6.78667 3.64796 6.78666ZM20.3582 6.79149C20.3576 6.79154 20.3527 6.78778 20.3454 6.78004C20.3551 6.78757 20.3588 6.79144 20.3582 6.79149ZM20.349 6.21616C20.3509 6.21428 20.352 6.21333 20.352 6.21334C20.3521 6.21334 20.3512 6.21428 20.349 6.21616ZM3.65099 6.21616C3.64883 6.21428 3.64789 6.21334 3.64796 6.21334C3.64803 6.21333 3.64911 6.21428 3.65099 6.21616Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M20.706 9.74698C20.8457 10.1369 20.6428 10.5663 20.2529 10.706L19.9999 9.99994C20.2529 10.706 20.2531 10.7059 20.2529 10.706L20.2519 10.7063L20.2507 10.7068L20.2474 10.7079L20.2378 10.7113L20.2063 10.7221C20.1798 10.731 20.1424 10.7432 20.0941 10.7584C19.9975 10.7888 19.8572 10.8307 19.6736 10.8803C19.3062 10.9794 18.7652 11.1091 18.0522 11.238C16.6259 11.4957 14.5123 11.7499 11.7241 11.7499C8.93602 11.7499 6.95533 11.4958 5.65762 11.2353C5.00882 11.105 4.53107 10.9733 4.20884 10.8711C4.04774 10.82 3.92559 10.7763 3.84043 10.744C3.79785 10.7278 3.76453 10.7145 3.74023 10.7044L3.71051 10.6919L3.70066 10.6876L3.69698 10.686L3.69546 10.6854C3.69513 10.6852 3.69413 10.6848 3.99994 9.99994L3.69413 10.6848C3.31592 10.5159 3.14623 10.0724 3.31512 9.69413C3.48354 9.31699 3.92502 9.14719 4.30253 9.31369C4.30199 9.31346 4.30201 9.31346 4.30253 9.31369M4.30253 9.31369C4.30199 9.31346 4.30201 9.31346 4.30253 9.31369L4.31263 9.31793C4.32381 9.32254 4.34396 9.33068 4.37333 9.34184C4.43206 9.36416 4.52771 9.39861 4.66225 9.44128C4.9313 9.5266 5.35619 9.64485 5.95283 9.76461C7.14601 10.0041 9.02738 10.2499 11.7241 10.2499C14.4206 10.2499 16.445 10.0041 17.7854 9.7619C18.4557 9.64076 18.9553 9.52045 19.2827 9.4321C19.4464 9.38792 19.5671 9.35172 19.6445 9.32739C19.6832 9.31523 19.7111 9.30603 19.7282 9.30029L19.747 9.29389L19.9812 9.94752C19.747 9.29389 19.7468 9.29396 19.747 9.29389C20.1368 9.15446 20.5663 9.35717 20.706 9.74698M19.747 9.29389C19.7468 9.29394 19.7471 9.29384 19.747 9.29389V9.29389Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M8.27302 15.3014C7.8891 15.1513 7.45551 15.3393 7.30302 15.7229C7.14999 16.1078 7.33796 16.5439 7.72287 16.6969L7.99996 16C7.72287 16.6969 7.72313 16.697 7.72339 16.6971L7.72395 16.6973L7.72514 16.6978L7.72788 16.6989L7.73475 16.7015L7.7541 16.7088C7.7695 16.7145 7.78991 16.7219 7.81538 16.7307C7.86633 16.7482 7.93751 16.7713 8.02935 16.7981C8.21307 16.8517 8.47927 16.9198 8.83143 16.9867C9.53596 17.1207 10.5829 17.25 12 17.25C13.417 17.25 14.464 17.1207 15.1685 16.9867C15.5206 16.9198 15.7868 16.8517 15.9706 16.7981C16.0624 16.7713 16.1336 16.7482 16.1845 16.7307C16.21 16.7219 16.2304 16.7145 16.2458 16.7088L16.2652 16.7015L16.272 16.6989L16.2748 16.6978L16.276 16.6973L16.2765 16.6971C16.2768 16.697 16.277 16.6969 16 16L16.277 16.6969C16.662 16.5439 16.8499 16.1078 16.6969 15.7229C16.5444 15.3393 16.1108 15.1513 15.7269 15.3014C15.7273 15.3013 15.7275 15.3012 15.7274 15.3013L15.726 15.3018L15.7247 15.3023M15.7245 15.3023C15.7202 15.3039 15.7109 15.3073 15.6966 15.3122C15.6681 15.322 15.6196 15.338 15.5506 15.3581C15.4129 15.3982 15.1933 15.4551 14.8882 15.5132C14.2783 15.6292 13.3253 15.75 12 15.75C10.6746 15.75 9.72158 15.6292 9.1117 15.5132C8.80666 15.4551 8.58705 15.3982 8.44926 15.3581C8.38035 15.338 8.33186 15.322 8.30332 15.3122C8.28904 15.3073 8.27976 15.3039 8.2754 15.3023M15.7234 15.3028L15.7238 15.3026L15.7245 15.3023" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M16.7096 18.2575C16.8435 18.6495 16.6343 19.0758 16.2424 19.2097C15.4415 19.4833 14.4566 19.75 12.9999 19.75C11.6031 19.75 10.5659 19.6244 9.86177 19.4925C9.45464 19.4162 9.18644 19.0243 9.26272 18.6172C9.339 18.2101 9.73088 17.9419 10.138 18.0182C10.7488 18.1326 11.6935 18.25 12.9999 18.25C14.2464 18.25 15.0633 18.0274 15.7574 17.7902C16.1494 17.6563 16.5757 17.8655 16.7096 18.2575Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M6.59098 12.538C6.37364 12.2592 5.98212 12.1654 5.6564 12.3332C5.28819 12.5229 5.14349 12.9752 5.33321 13.3434L5.99991 12.9999C5.33321 13.3434 5.33368 13.3443 5.33416 13.3453L5.33512 13.3471L5.33708 13.3508L5.34111 13.3584L5.34965 13.3737C5.35556 13.384 5.36191 13.3946 5.36871 13.4053C5.38233 13.4269 5.39772 13.4492 5.41506 13.472C5.44981 13.5178 5.49197 13.5654 5.54286 13.6139C5.64444 13.7107 5.77993 13.8104 5.96065 13.9086C6.31819 14.1027 6.87539 14.3028 7.76108 14.4594C8.16896 14.5316 8.5581 14.2594 8.63025 13.8515C8.70239 13.4437 8.43022 13.0545 8.02234 12.9824C7.23527 12.8432 6.84657 12.6827 6.6764 12.5904C6.63316 12.5669 6.60596 12.5488 6.59098 12.538ZM18.3434 12.3332C18.7116 12.5229 18.8563 12.9752 18.6666 13.3434L17.9999 12.9999C18.6666 13.3434 18.6659 13.3448 18.6652 13.3463L18.6637 13.3491L18.6606 13.3548L18.6542 13.3665C18.6499 13.3743 18.6452 13.3823 18.6403 13.3904C18.6305 13.4066 18.6197 13.4233 18.6078 13.4404C18.5838 13.4747 18.5557 13.5103 18.5226 13.5468C18.4564 13.6197 18.3717 13.6951 18.2636 13.7707C18.0494 13.9206 17.7375 14.0755 17.2768 14.2169C16.3612 14.498 14.7773 14.7499 11.9999 14.7499C11.5857 14.7499 11.2499 14.4141 11.2499 13.9999C11.2499 13.5857 11.5857 13.2499 11.9999 13.2499C14.7072 13.2499 16.1234 13.0019 16.8366 12.7829C17.1903 12.6744 17.35 12.5793 17.4038 12.5416C17.4056 12.5403 17.4073 12.5391 17.4088 12.538C17.6262 12.2592 18.0177 12.1654 18.3434 12.3332Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTornadoSmall as IconComponent).keywords = [
  "tornado",
  "small",
  "twister",
  "whirlwind",
  "cyclone",
  "hurricane",
  "typhoon",
  "storm",
  "twist",
  "alert",
  "torpedo",
  "undersize",
  "small-scale",
  "undersized",
  "lowercase",
  "puny",
  "lesser",
  "petty",
  "diminutive",
  "inferior"
];

export default IconTornadoSmall as IconComponent;