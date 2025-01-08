import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconDiagramDown: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M22 22H12C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12V2" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M19.0002 15L15.8821 11.0736C15.4045 10.4722 15.1657 10.1714 14.8916 10.0249C14.47 9.79953 13.9663 9.78857 13.5354 9.99537C13.2551 10.1299 13.0035 10.4199 12.5002 11C11.9968 11.5801 11.7452 11.8701 11.4649 12.0046C11.034 12.2115 10.5303 12.2005 10.1088 11.9752C9.83461 11.8286 9.5958 11.5279 9.11819 10.9265L6 7" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M2.75 2C2.75 1.58579 2.41421 1.25 2 1.25C1.58579 1.25 1.25 1.58579 1.25 2V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22C22.75 21.5858 22.4142 21.25 22 21.25H12C9.62178 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12V2Z" fill="currentColor" /><path d="M6.58735 6.53361C6.32976 6.20924 5.85798 6.15511 5.53361 6.4127C5.20924 6.6703 5.15511 7.14208 5.4127 7.46645L8.54622 11.4122C8.77195 11.6965 8.96444 11.9389 9.13539 12.1265C9.3131 12.3216 9.50875 12.5049 9.75521 12.6366C10.3875 12.9746 11.143 12.9911 11.7894 12.6808C12.0414 12.5599 12.2448 12.3853 12.4309 12.1982C12.6098 12.0182 12.8127 11.7843 13.0505 11.5102L13.0667 11.4916C13.3251 11.1937 13.4946 10.9989 13.6334 10.8594C13.7691 10.7228 13.8316 10.6852 13.8599 10.6716C14.0754 10.5682 14.3272 10.5736 14.538 10.6863C14.5657 10.7011 14.6265 10.7415 14.7562 10.8838C14.8887 11.0293 15.0496 11.2312 15.2948 11.54L18.4129 15.4664C18.6705 15.7908 19.1422 15.845 19.4666 15.5874C19.791 15.3298 19.8451 14.858 19.5875 14.5336L16.4542 10.5879C16.2284 10.3036 16.0359 10.0612 15.865 9.8736C15.6873 9.67853 15.4917 9.49525 15.2452 9.36349C14.6129 9.02546 13.8573 9.00903 13.2109 9.31923C12.959 9.44015 12.7555 9.61475 12.5695 9.8019C12.3906 9.98193 12.1877 10.2157 11.9499 10.4899L11.9337 10.5085C11.6752 10.8064 11.5057 11.0012 11.367 11.1407C11.2313 11.2773 11.1688 11.3149 11.1405 11.3285C10.925 11.4319 10.6731 11.4264 10.4624 11.3138C10.4347 11.299 10.3739 11.2586 10.2442 11.1163C10.1117 10.9708 9.9508 10.7689 9.70554 10.4601L6.58735 6.53361Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.75 2C2.75 1.58579 2.41421 1.25 2 1.25C1.58579 1.25 1.25 1.58579 1.25 2V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22C22.75 21.5858 22.4142 21.25 22 21.25H12C9.62178 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12V2Z" fill="currentColor" /><path d="M6.58733 6.53358C6.32973 6.20921 5.85795 6.15508 5.53358 6.41267C5.20921 6.67027 5.15508 7.14205 5.41267 7.46642L8.54619 11.4122C8.77192 11.6964 8.96441 11.9388 9.13536 12.1265C9.31307 12.3215 9.50872 12.5048 9.75518 12.6366C10.3875 12.9746 11.143 12.991 11.7894 12.6808C12.0414 12.5599 12.2448 12.3853 12.4308 12.1982C12.6098 12.0181 12.8126 11.7843 13.0505 11.5101L13.0666 11.4915C13.3251 11.1937 13.4946 10.9989 13.6333 10.8593C13.7691 10.7228 13.8316 10.6851 13.8599 10.6715C14.0754 10.5681 14.3272 10.5736 14.538 10.6863C14.5657 10.7011 14.6265 10.7415 14.7561 10.8838C14.8887 11.0292 15.0496 11.2312 15.2948 11.54L18.4128 15.4664C18.6704 15.7908 19.1422 15.8449 19.4666 15.5873C19.791 15.3297 19.8451 14.858 19.5875 14.5336L16.4541 10.5879C16.2284 10.3036 16.0359 10.0612 15.865 9.87357C15.6873 9.6785 15.4916 9.49522 15.2452 9.36346C14.6129 9.02543 13.8573 9.009 13.2109 9.3192C12.9589 9.44012 12.7555 9.61472 12.5695 9.80187C12.3905 9.9819 12.1877 10.2157 11.9498 10.4899L11.9337 10.5085C11.6752 10.8064 11.5057 11.0011 11.367 11.1407C11.2313 11.2772 11.1687 11.3149 11.1404 11.3285C10.925 11.4319 10.6731 11.4264 10.4623 11.3137C10.4347 11.2989 10.3738 11.2586 10.2442 11.1163C10.1116 10.9708 9.95077 10.7689 9.70551 10.46L6.58733 6.53358Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDiagramDown as IconComponentType).keywords = [
  "diagram",
  "down",
  "plot",
  "flowchart",
  "plan",
  "graphical",
  "figure",
  "organigram",
  "schema",
  "organigramme",
  "graph",
  "downwards",
  "downward",
  "downbound",
  "falling",
  "fallen",
  "pull down",
  "downwardly",
  "declining",
  "descending"
];

export default IconDiagramDown as IconComponentType;