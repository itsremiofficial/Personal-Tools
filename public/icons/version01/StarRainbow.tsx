import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconStarRainbow: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9464 3.11402L14.6772 3.81406L14.6772 3.81406L14.9464 3.11402ZM16.5812 3.02776L16.2484 2.35565L16.2484 2.35565L16.5812 3.02776ZM11.7711 5.17542L11.0261 5.26153L11.0261 5.26154L11.7711 5.17542ZM14.5776 2.97224L14.8468 2.2722L14.8468 2.2722L14.5776 2.97224ZM11.3325 7.14811L11.906 7.63138H11.906L11.3325 7.14811ZM11.8168 5.57079L12.5619 5.48468L12.5619 5.48467L11.8168 5.57079ZM12.1968 10.7259L12.0764 11.4661H12.0764L12.1968 10.7259ZM11.0696 7.46012L10.496 6.97685H10.496L11.0696 7.46012ZM13.925 11.6784L14.5634 11.2848L14.5634 11.2848L13.925 11.6784ZM12.5895 10.7898L12.71 10.0495H12.71L12.5895 10.7898ZM17.6344 11.8281L18.2906 12.1913L18.2906 12.1913L17.6344 11.8281ZM14.1312 12.013L13.4928 12.4065L13.4928 12.4065L14.1312 12.013ZM19.1411 10.4441L18.9459 9.71996L19.1411 10.4441ZM17.8314 11.4723L17.1752 11.1091L17.1752 11.1091L17.8314 11.4723ZM20.5693 6.95892L20.0268 7.47676L20.0268 7.47676L20.5693 6.95892ZM19.5315 10.3389L19.7267 11.0631L19.5315 10.3389ZM19.7724 5.15106L20.5195 5.21651V5.21651L19.7724 5.15106ZM20.2984 6.67507L20.841 6.15724L20.841 6.15724L20.2984 6.67507ZM19.8074 4.75143L19.0602 4.68598V4.68598L19.8074 4.75143ZM16.9456 2.84731L17.2784 3.51942L17.2784 3.51942L16.9456 2.84731ZM19.0602 4.68598L19.0252 5.08562L20.5195 5.21651L20.5545 4.81687L19.0602 4.68598ZM19.7559 7.1929L20.0268 7.47676L21.1119 6.44109L20.841 6.15724L19.7559 7.1929ZM19.3363 9.61474L18.9459 9.71996L19.3363 11.1683L19.7267 11.0631L19.3363 9.61474ZM17.1752 11.1091L16.9782 11.465L18.2906 12.1913L18.4876 11.8355L17.1752 11.1091ZM14.7697 11.6194L14.5634 11.2848L13.2865 12.0719L13.4928 12.4065L14.7697 11.6194ZM12.71 10.0495L12.3173 9.98562L12.0764 11.4661L12.469 11.53L12.71 10.0495ZM11.6431 7.9434L11.906 7.63138L10.759 6.66483L10.496 6.97685L11.6431 7.9434ZM12.5619 5.48467L12.5162 5.08929L11.0261 5.26154L11.0718 5.65692L12.5619 5.48467ZM14.3085 3.67229L14.6772 3.81406L15.2155 2.41397L14.8468 2.2722L14.3085 3.67229ZM16.914 3.69988L17.2784 3.51942L16.6128 2.1752L16.2484 2.35565L16.914 3.69988ZM14.6772 3.81406C15.0219 3.94658 15.3971 4.10692 15.8069 4.0853L15.7278 2.58738C15.7272 2.58741 15.7266 2.58743 15.7254 2.58737C15.7241 2.5873 15.7209 2.58709 15.7153 2.58626C15.7035 2.58451 15.6806 2.58006 15.6398 2.56811C15.5481 2.5412 15.4291 2.49608 15.2155 2.41397L14.6772 3.81406ZM16.2484 2.35565C16.0381 2.45977 15.918 2.51868 15.8244 2.5563C15.7823 2.57323 15.7575 2.5808 15.7437 2.58431C15.7371 2.58599 15.7332 2.5867 15.7312 2.587C15.7294 2.58728 15.7284 2.58735 15.7278 2.58738L15.8069 4.0853C16.2113 4.06396 16.5724 3.86903 16.914 3.69988L16.2484 2.35565ZM12.5162 5.0893C12.4249 4.3001 12.3684 3.79374 12.3803 3.43516C12.386 3.26436 12.4069 3.17545 12.4227 3.13278C12.4263 3.1232 12.4292 3.11696 12.4311 3.11332C12.433 3.10974 12.4341 3.10818 12.4342 3.10798C12.4343 3.10781 12.4341 3.10806 12.4339 3.10836C12.4336 3.10863 12.4341 3.10804 12.436 3.10657L11.5097 1.9267C11.0157 2.31454 10.898 2.87655 10.8811 3.38549C10.8647 3.88264 10.9406 4.52247 11.0261 5.26153L12.5162 5.0893ZM14.8468 2.2722C14.1581 2.00741 13.5603 1.77538 13.0769 1.66905C12.5801 1.5598 12.006 1.53715 11.5097 1.9267L12.436 3.10657C12.4387 3.1044 12.4382 3.10519 12.4364 3.10588C12.4352 3.10635 12.4413 3.1036 12.4595 3.10156C12.5018 3.09684 12.5902 3.09787 12.7547 3.13404C13.1005 3.21011 13.5718 3.38908 14.3085 3.67229L14.8468 2.2722ZM11.906 7.63138C12.1535 7.33772 12.4272 7.03466 12.5459 6.64827L11.1119 6.20798C11.1116 6.20913 11.1102 6.21386 11.1039 6.22561C11.0968 6.23895 11.0831 6.26177 11.0563 6.29902C10.9969 6.38162 10.9106 6.48491 10.759 6.66483L11.906 7.63138ZM11.0718 5.65691C11.0982 5.88561 11.1125 6.01383 11.1158 6.11103C11.1173 6.15438 11.116 6.17875 11.1146 6.19185C11.1135 6.20313 11.1123 6.20691 11.1119 6.20798L12.5459 6.64827C12.6658 6.25754 12.6048 5.85594 12.5619 5.48468L11.0718 5.65691ZM12.3173 9.98562C11.5328 9.85795 11.0316 9.77428 10.6956 9.66617C10.3659 9.56007 10.4181 9.49944 10.4416 9.56757L9.02373 10.057C9.2347 10.6682 9.7601 10.9409 10.2361 11.0941C10.7059 11.2452 11.3431 11.3468 12.0764 11.4661L12.3173 9.98562ZM10.496 6.97685C10.0037 7.56117 9.5794 8.0618 9.31355 8.48761C9.04744 8.91385 8.81639 9.4563 9.02373 10.057L10.4416 9.56757C10.4615 9.62516 10.3908 9.59455 10.5859 9.282C10.7813 8.96902 11.1192 8.56511 11.6431 7.9434L10.496 6.97685ZM14.5634 11.2848C14.3727 10.9755 14.1693 10.6149 13.8262 10.3867L12.9953 11.6355C12.9853 11.6288 12.9971 11.6309 13.0446 11.6955C13.1004 11.771 13.1669 11.8779 13.2865 12.0719L14.5634 11.2848ZM12.469 11.53C12.6964 11.567 12.8232 11.5883 12.9165 11.6113C12.9971 11.6313 13.0049 11.6419 12.9953 11.6355L13.8262 10.3867C13.4852 10.1597 13.0734 10.1087 12.71 10.0495L12.469 11.53ZM16.9782 11.4649C16.5858 12.174 16.33 12.6323 16.107 12.9269C16.0001 13.0681 15.929 13.1325 15.889 13.1603C15.8715 13.1725 15.8639 13.1749 15.8651 13.1745C15.8655 13.1744 15.8667 13.174 15.8683 13.1737C15.87 13.1733 15.8708 13.1733 15.8702 13.1733L15.9493 14.6712C16.5769 14.6381 16.9973 14.2362 17.3031 13.8321C17.6064 13.4313 17.9217 12.8579 18.2906 12.1913L16.9782 11.4649ZM13.4928 12.4065C13.8776 13.0308 14.2114 13.5764 14.5301 13.9505C14.8567 14.334 15.3077 14.7051 15.9493 14.6712L15.8702 13.1733C15.8697 13.1734 15.8711 13.1733 15.874 13.1735C15.877 13.1738 15.8801 13.1744 15.8828 13.1751C15.8891 13.1766 15.887 13.1773 15.8748 13.1702C15.845 13.1529 15.7792 13.1038 15.672 12.9778C15.4463 12.7129 15.1822 12.2885 14.7697 11.6194L13.4928 12.4065ZM18.9459 9.71996C18.5773 9.81932 18.1829 9.91123 17.8638 10.1618L18.79 11.3416C18.7904 11.3413 18.806 11.3269 18.8884 11.2977C18.983 11.264 19.111 11.229 19.3363 11.1683L18.9459 9.71996ZM18.4876 11.8355C18.7342 11.3899 18.7664 11.3602 18.79 11.3416L17.8638 10.1618C17.5455 10.4116 17.3613 10.7728 17.1752 11.1091L18.4876 11.8355ZM20.0268 7.47676C20.5686 8.04436 20.9115 8.40674 21.1107 8.69245C21.2053 8.82813 21.2369 8.90524 21.2468 8.94048C21.2508 8.95512 21.25 8.95849 21.25 8.95388C21.25 8.94869 21.2511 8.94517 21.2506 8.94663L22.6845 9.38692C22.872 8.7765 22.6304 8.24947 22.3411 7.83455C22.0599 7.43116 21.6173 6.97066 21.1119 6.44109L20.0268 7.47676ZM19.7267 11.0631C20.4575 10.8661 21.087 10.6984 21.5476 10.4998C22.0143 10.2986 22.5005 9.98615 22.6845 9.38692L21.2506 8.94663C21.2502 8.94796 21.2501 8.94793 21.2505 8.94708C21.2509 8.94623 21.2513 8.94571 21.2512 8.94584C21.2511 8.94601 21.2499 8.94775 21.247 8.95107C21.244 8.95445 21.2388 8.95984 21.2306 8.96708C21.1939 8.99936 21.115 9.05288 20.9538 9.12239C20.6167 9.2677 20.1145 9.40502 19.3363 9.61474L19.7267 11.0631ZM19.0252 5.08562C18.9927 5.45688 18.9413 5.8676 19.0744 6.25316L20.4923 5.76374C20.4954 5.77279 20.487 5.76063 20.4877 5.6755C20.4884 5.5777 20.4993 5.4476 20.5195 5.21651L19.0252 5.08562ZM20.841 6.15724C20.6838 5.99261 20.5976 5.90139 20.5387 5.82841C20.4886 5.76631 20.4889 5.75376 20.4923 5.76374L19.0744 6.25316C19.2089 6.64276 19.5048 6.92986 19.7559 7.19291L20.841 6.15724ZM20.5545 4.81688C20.6199 4.06996 20.6786 3.42367 20.6488 2.92892C20.6187 2.43063 20.4877 1.85111 19.9499 1.49328L19.119 2.74211C19.0571 2.70093 19.1302 2.66592 19.1515 3.01916C19.173 3.37592 19.1301 3.88818 19.0602 4.68598L20.5545 4.81688ZM17.2784 3.51942C18.0049 3.15969 18.4753 2.92886 18.8232 2.81494C19.1708 2.70112 19.1757 2.77988 19.119 2.74211L19.9499 1.49328C19.4172 1.13885 18.8321 1.23366 18.3564 1.38943C17.881 1.54511 17.2949 1.83742 16.6128 2.1752L17.2784 3.51942Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M13.9793 19.98L14.7276 20.0304L13.9793 19.98ZM2.0908 20.0316L2.79538 20.2887H2.79538L2.0908 20.0316ZM14.856 12.9392C14.6356 13.2123 14.4535 13.605 14.2999 14.023C14.1397 14.4588 13.9867 14.9897 13.8481 15.5881C13.5705 16.7859 13.3411 18.2937 13.231 19.9297L14.7276 20.0304C14.8328 18.4669 15.0515 17.0392 15.3093 15.9267C15.4384 15.37 15.5749 14.902 15.7078 14.5404C15.8473 14.1609 15.9618 13.9575 16.0234 13.8812L14.856 12.9392ZM2.79538 20.2887C3.45363 18.4843 4.62845 16.5587 6.09089 14.8935C7.55571 13.2256 9.27065 11.8625 10.9824 11.1345L10.3953 9.75416C8.4182 10.595 6.52859 12.1219 4.96384 13.9037C3.3967 15.6881 2.11693 17.7716 1.38623 19.7746L2.79538 20.2887ZM11.8718 21.2502H9.83304V22.7502H11.8718V21.2502ZM9.83304 21.2502H5.5V22.7502H9.83304V21.2502ZM5.5 21.2502H3.71668V22.7502H5.5V21.2502ZM10.583 22.0002C10.583 21.1039 10.9201 19.1955 11.5981 17.1879C12.279 15.1717 13.2496 13.2209 14.4206 12.1347L13.4006 11.035C11.9467 12.3835 10.8786 14.6303 10.1769 16.708C9.47234 18.7943 9.08304 20.8763 9.08304 22.0002H10.583ZM1.38623 19.7746C1.09591 20.5704 1.28974 21.3467 1.77173 21.9015C2.23942 22.4398 2.95493 22.7502 3.71668 22.7502V21.2502C3.35244 21.2502 3.06353 21.1012 2.90404 20.9177C2.75886 20.7506 2.70275 20.5426 2.79538 20.2887L1.38623 19.7746ZM13.231 19.9297C13.1808 20.6757 12.5775 21.2502 11.8718 21.2502V22.7502C13.4181 22.7502 14.6279 21.5119 14.7276 20.0304L13.231 19.9297ZM6.25 22.0002C6.25 21.8461 6.29212 21.5599 6.40349 21.1405C6.51136 20.7342 6.67275 20.2446 6.88265 19.7011C7.30253 18.6137 7.90444 17.3414 8.62489 16.132C9.34809 14.918 10.1729 13.7974 11.0298 12.9901C11.9015 12.1689 12.7099 11.7613 13.4108 11.7613V10.2613C12.1452 10.2613 10.9816 10.9747 10.0012 11.8983C9.0062 12.8357 8.09909 14.0837 7.33621 15.3643C6.57058 16.6496 5.93221 17.9983 5.48334 19.1608C5.25886 19.7421 5.07876 20.2846 4.95372 20.7555C4.83219 21.2133 4.75 21.6493 4.75 22.0002H6.25Z" fill="currentColor" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9456 2.84731C18.3542 2.14979 19.0585 1.80104 19.5344 2.11769C20.0104 2.43435 19.9427 3.20671 19.8074 4.75143L19.7724 5.15106C19.7339 5.59003 19.7147 5.80951 19.7834 6.00845C19.852 6.2074 20.0008 6.36329 20.2984 6.67507L20.5693 6.95892C21.6166 8.05609 22.1402 8.60468 21.9676 9.16677C21.795 9.72887 21.0405 9.93221 19.5315 10.3389L19.1411 10.4441C18.7123 10.5597 18.4979 10.6175 18.3269 10.7517C18.1559 10.8859 18.0478 11.0814 17.8314 11.4723L17.6344 11.8281C16.873 13.2038 16.4923 13.8916 15.9098 13.9223C15.3272 13.953 14.9285 13.3063 14.1312 12.013L13.925 11.6784C13.6984 11.3108 13.5851 11.1271 13.4108 11.0111C13.2364 10.8951 13.0208 10.86 12.5895 10.7898L12.1968 10.7259C10.679 10.4789 9.92014 10.3554 9.73268 9.81228C9.54522 9.26918 10.0533 8.66616 11.0696 7.46012L11.3325 7.14811C11.6213 6.80539 11.7657 6.63403 11.8289 6.42812C11.8921 6.22222 11.867 6.00508 11.8168 5.57079L11.7711 5.17542C11.5945 3.64716 11.5061 2.88303 11.9729 2.51664C12.4396 2.15025 13.1523 2.42425 14.5776 2.97224L14.9464 3.11402C15.3514 3.26974 15.5539 3.3476 15.7674 3.33634C15.9808 3.32508 16.1809 3.22598 16.5812 3.02776L16.9456 2.84731Z" fill="currentColor" /><g opacity={duotone ? "0.5" : "1"}><path d="M9.04452 11.3198C5.99048 13.2692 3.27111 16.7962 2.0908 20.0316C1.70785 21.0813 2.59069 22.0001 3.71668 22.0001H4.75C4.75007 21.6493 4.83224 21.2135 4.95372 20.7559C5.07876 20.285 5.25886 19.7425 5.48334 19.1611C5.93221 17.9987 6.57058 16.65 7.33621 15.3647C8.09909 14.084 9.0062 12.8361 10.0012 11.8987C10.0258 11.8755 10.0506 11.8525 10.0754 11.8296C10.052 11.8225 10.0289 11.8152 10.0062 11.8079C9.72191 11.7164 9.36664 11.5709 9.04452 11.3198Z" fill="currentColor" /><path d="M12.0202 12.2168C11.7015 12.4118 11.3705 12.6695 11.0298 12.9905C10.1729 13.7978 9.34809 14.9183 8.62489 16.1324C7.90444 17.3418 7.30253 18.6141 6.88264 19.7015C6.67275 20.245 6.51136 20.7346 6.40349 21.1409C6.29223 21.5599 6.25008 21.8459 6.25 22.0001H9.08304C9.08314 20.8761 9.47243 18.7944 10.1769 16.7083C10.6939 15.1776 11.4097 13.555 12.3322 12.2676L12.0202 12.2168Z" fill="currentColor" /><path d="M13.2982 13.5129C12.6225 14.5566 12.0472 15.8582 11.5981 17.1883C10.9202 19.1956 10.5832 21.1037 10.583 22.0001H11.8718C12.9978 22.0001 13.9043 21.0937 13.9793 19.9799C14.1081 18.0658 14.4036 16.3406 14.7411 15.1137C14.407 14.9175 14.1488 14.6597 13.9589 14.4367C13.7399 14.1796 13.5196 13.8585 13.2982 13.5129Z" fill="currentColor" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9456 2.84731C18.3542 2.14979 19.0585 1.80104 19.5344 2.11769C20.0104 2.43435 19.9427 3.20671 19.8074 4.75143L19.7724 5.15106C19.7339 5.59003 19.7147 5.80951 19.7834 6.00845C19.852 6.2074 20.0008 6.36329 20.2984 6.67507L20.5693 6.95892C21.6166 8.05609 22.1402 8.60468 21.9676 9.16677C21.795 9.72887 21.0405 9.93221 19.5315 10.3389L19.1411 10.4441C18.7123 10.5597 18.4979 10.6175 18.3269 10.7517C18.1559 10.8859 18.0478 11.0814 17.8314 11.4723L17.6344 11.8281C16.873 13.2038 16.4923 13.8916 15.9098 13.9223C15.3272 13.953 14.9285 13.3063 14.1312 12.013L13.925 11.6784C13.6984 11.3108 13.5851 11.1271 13.4108 11.0111C13.2364 10.8951 13.0208 10.86 12.5895 10.7898L12.1968 10.7259C10.679 10.4789 9.92014 10.3554 9.73268 9.81228C9.54522 9.26918 10.0533 8.66616 11.0696 7.46012L11.3325 7.14811C11.6213 6.80539 11.7657 6.63403 11.8289 6.42812C11.8921 6.22222 11.867 6.00508 11.8168 5.57079L11.7711 5.17542C11.5945 3.64716 11.5061 2.88303 11.9729 2.51664C12.4396 2.15025 13.1523 2.42425 14.5776 2.97224L14.9464 3.11402C15.3514 3.26974 15.5539 3.3476 15.7674 3.33634C15.9808 3.32508 16.1809 3.22598 16.5812 3.02776L16.9456 2.84731Z" fill="currentColor" /><path d="M9.04452 11.3198C5.99048 13.2692 3.27111 16.7962 2.0908 20.0316C1.70785 21.0813 2.59069 22.0001 3.71668 22.0001H4.75C4.75007 21.6493 4.83224 21.2135 4.95372 20.7559C5.07876 20.285 5.25886 19.7425 5.48334 19.1611C5.93221 17.9987 6.57058 16.65 7.33621 15.3647C8.09909 14.084 9.0062 12.8361 10.0012 11.8987C10.0258 11.8755 10.0506 11.8525 10.0754 11.8296C10.052 11.8225 10.0289 11.8152 10.0062 11.8079C9.72191 11.7164 9.36664 11.5709 9.04452 11.3198Z" fill="currentColor" /><path d="M12.0202 12.2168C11.7015 12.4118 11.3705 12.6695 11.0298 12.9905C10.1729 13.7978 9.34809 14.9183 8.62489 16.1324C7.90444 17.3418 7.30253 18.6141 6.88264 19.7015C6.67275 20.245 6.51136 20.7346 6.40349 21.1409C6.29223 21.5599 6.25008 21.8459 6.25 22.0001H9.08304C9.08314 20.8761 9.47243 18.7944 10.1769 16.7083C10.6939 15.1776 11.4097 13.555 12.3322 12.2676L12.0202 12.2168Z" fill="currentColor" /><path d="M13.2982 13.5129C12.6225 14.5566 12.0472 15.8582 11.5981 17.1883C10.9202 19.1956 10.5832 21.1037 10.583 22.0001H11.8718C12.9978 22.0001 13.9043 21.0937 13.9793 19.9799C14.1081 18.0658 14.4036 16.3406 14.7411 15.1137C14.407 14.9175 14.1488 14.6597 13.9589 14.4367C13.7399 14.1796 13.5196 13.8585 13.2982 13.5129Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconStarRainbow;