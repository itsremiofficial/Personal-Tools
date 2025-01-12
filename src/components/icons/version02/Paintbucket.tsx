import { FC } from 'react';

const IconPaintbucket: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_12_78591)"><path d="M4.43954 15.56L7.89954 19.02C10.3295 21.45 11.1595 21.41 13.5595 19.02L19.1295 13.45C21.0695 11.51 21.5595 10.22 19.1295 7.78996L15.6695 4.32996C13.0795 1.73996 11.9495 2.38996 10.0095 4.32996L4.43954 9.89996C2.04954 12.3 1.84954 12.97 4.43954 15.56Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M19.8704 16.79L19.2104 17.88C18.2804 19.43 19.0004 20.7 20.8104 20.7C22.6204 20.7 23.3404 19.43 22.4104 17.88L21.7504 16.79C21.2304 15.93 20.3804 15.93 19.8704 16.79Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2.66992 12.2401C8.22992 10.7301 14.0899 10.6801 19.6699 12.1101L20.1699 12.2401" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g><defs><clipPath ><rect width="24" height="24" fill="none" transform="translate(0.669922)" /></clipPath></defs></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.78 7.46999L16.26 3.94999C13.1 0.799986 11.44 1.95999 9.43997 3.94999L3.77997 9.60999C2.62997 10.76 1.99997 11.5 1.76997 12.32C1.76997 12.33 1.75997 12.33 1.75997 12.33C1.75997 12.34 1.75997 12.34 1.75997 12.34C1.75997 12.35 1.75997 12.35 1.75997 12.35V12.38C1.34997 13.84 2.42997 15.08 3.77997 16.43L7.30997 19.94C8.56997 21.21 9.58997 22 10.72 22C11.85 22 12.82 21.24 14.12 19.94L19.78 14.29C20.27 13.79 20.63 13.38 20.91 12.99C20.91 12.98 20.91 12.98 20.91 12.98C20.91 12.98 20.91 12.98 20.92 12.98C22.2 11.19 21.86 9.53999 19.78 7.46999ZM19.82 9.91999C20.25 10.65 19.57 11.55 18.74 11.37C18.43 11.3 18.13 11.24 17.82 11.18C17.8 11.18 17.78 11.17 17.75 11.17C17.05 11.04 16.34 10.93 15.62 10.84H15.58C14.86 10.75 14.13 10.68 13.4 10.64H13.32C12.68 10.6 12.03 10.58 11.39 10.58C10.61 10.58 9.82997 10.62 9.05997 10.67C8.92997 10.68 8.80997 10.69 8.68997 10.7C8.10997 10.74 7.52997 10.8 6.95997 10.87C6.79997 10.89 6.64997 10.91 6.49997 10.93C5.91997 11.02 5.34997 11.11 4.77997 11.22C4.64997 11.25 4.52997 11.27 4.39997 11.29C4.34997 11.3 4.28997 11.31 4.23997 11.32C4.41997 11.12 4.62997 10.91 4.85997 10.68L10.51 5.02999C12.33 3.22999 12.95 2.79999 15.19 5.02999L18.7 8.54999C19.24 9.07999 19.6 9.52999 19.82 9.91999Z" fill="currentColor" /><path d="M19.8202 9.91993C20.2502 10.6499 19.5702 11.5499 18.7402 11.3699C18.4302 11.2999 18.1302 11.2399 17.8202 11.1799C17.8002 11.1799 17.7802 11.1699 17.7502 11.1699C17.0502 11.0399 16.3402 10.9299 15.6202 10.8399H15.5802C14.8602 10.7499 14.1302 10.6799 13.4002 10.6399H13.3202C12.6802 10.5999 12.0302 10.5799 11.3902 10.5799C10.6102 10.5799 9.83024 10.6199 9.06024 10.6699C8.93023 10.6799 8.81024 10.6899 8.69024 10.6999C8.11024 10.7399 7.53023 10.7999 6.96023 10.8699C6.80023 10.8899 6.65023 10.9099 6.50023 10.9299C5.92023 11.0199 5.35023 11.1099 4.78023 11.2199C4.65023 11.2499 4.53023 11.2699 4.40023 11.2899C4.35023 11.2999 4.29023 11.3099 4.24023 11.3199C4.42023 11.1199 4.63023 10.9099 4.86023 10.6799L10.5102 5.02993C12.3302 3.22993 12.9502 2.79993 15.1902 5.02993L18.7002 8.54993C19.2402 9.07993 19.6002 9.52993 19.8202 9.91993Z" fill="currentColor" /><path d="M21.6198 16.87C21.2398 16.4 20.9098 16 20.1698 16C19.4298 16 19.0998 16.4 18.7298 16.87C17.9298 17.86 17.5698 18.94 17.6998 19.98C17.8498 21.17 18.8698 22 20.1698 22C21.4698 22 22.4898 21.17 22.6398 19.97C22.7698 18.93 22.4198 17.86 21.6198 16.87Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.78 7.46999L16.26 3.94999C13.1 0.799986 11.44 1.95999 9.43997 3.94999L3.77997 9.60999C2.62997 10.76 1.99997 11.5 1.76997 12.32C1.76997 12.33 1.75997 12.33 1.75997 12.33C1.75997 12.34 1.75997 12.34 1.75997 12.34C1.75997 12.35 1.75997 12.35 1.75997 12.35V12.38C1.34997 13.84 2.42997 15.08 3.77997 16.43L7.30997 19.94C8.56997 21.21 9.58997 22 10.72 22C11.85 22 12.82 21.24 14.12 19.94L19.78 14.29C20.27 13.79 20.63 13.38 20.91 12.99C20.91 12.98 20.91 12.98 20.91 12.98C20.91 12.98 20.91 12.98 20.92 12.98C22.2 11.19 21.86 9.53999 19.78 7.46999ZM18.75 11.37H18.74C18.44 11.3 18.13 11.24 17.82 11.18C17.8 11.18 17.78 11.17 17.75 11.17C17.05 11.04 16.34 10.93 15.62 10.84H15.58C14.86 10.75 14.13 10.68 13.4 10.64H13.32C12.68 10.6 12.03 10.58 11.39 10.58C10.61 10.58 9.82997 10.62 9.05997 10.67C8.92997 10.68 8.80997 10.69 8.68997 10.7C8.10997 10.74 7.52997 10.8 6.95997 10.87C6.79997 10.89 6.64997 10.91 6.49997 10.93C5.91997 11.02 5.34997 11.11 4.77997 11.22C4.64997 11.25 4.52997 11.27 4.39997 11.29C4.34997 11.3 4.28997 11.31 4.23997 11.32C4.41997 11.12 4.62997 10.91 4.85997 10.68L10.51 5.02999C12.33 3.22999 12.95 2.79999 15.19 5.02999L18.7 8.54999C19.24 9.07999 19.6 9.52999 19.82 9.91999C19.82 9.91999 19.82 9.92999 19.83 9.92999C20.25 10.66 19.57 11.53 18.75 11.37Z" fill="currentColor" /><path d="M21.6198 16.87C21.2398 16.4 20.9098 16 20.1698 16C19.4298 16 19.0998 16.4 18.7298 16.87C17.9298 17.86 17.5698 18.94 17.6998 19.98C17.8498 21.17 18.8698 22 20.1698 22C21.4698 22 22.4898 21.17 22.6398 19.97C22.7698 18.93 22.4198 17.86 21.6198 16.87Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPaintbucket as IconComponent).keywords = [
  "paintbucket"
];

export default IconPaintbucket as IconComponent;