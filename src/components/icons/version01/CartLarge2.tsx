import { FC } from 'react';

const IconCartLarge2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.00049L2.26491 3.08879C3.58495 3.5288 4.24497 3.74881 4.62248 4.27259C5 4.79636 5 5.49208 5 6.88353V9.50049C5 12.3289 5 13.7431 5.87868 14.6218C6.75736 15.5005 8.17157 15.5005 11 15.5005H19" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M7.5 18.0005C8.32843 18.0005 9 18.6721 9 19.5005C9 20.3289 8.32843 21.0005 7.5 21.0005C6.67157 21.0005 6 20.3289 6 19.5005C6 18.6721 6.67157 18.0005 7.5 18.0005Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M16.5 18.0006C17.3284 18.0006 18 18.6721 18 19.5006C18 20.329 17.3284 21.0006 16.5 21.0006C15.6716 21.0006 15 20.329 15 19.5006C15 18.6721 15.6716 18.0006 16.5 18.0006Z" stroke="currentColor" strokeWidth={width} /><path d="M5 6.00049H16.4504C18.5054 6.00049 19.5328 6.00049 19.9775 6.67475C20.4221 7.34902 20.0173 8.29343 19.2078 10.1822L18.7792 11.1822C18.4013 12.0641 18.2123 12.505 17.8366 12.7527C17.4609 13.0005 16.9812 13.0005 16.0218 13.0005H5" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.28869 2.76328C1.41968 2.37032 1.84442 2.15795 2.23737 2.28894L2.50229 2.37724C2.51549 2.38164 2.52864 2.38602 2.54176 2.3904C3.16813 2.59916 3.69746 2.77559 4.11369 2.96922C4.55613 3.17504 4.94002 3.43014 5.23112 3.83401C5.52221 4.23789 5.64282 4.68275 5.69817 5.16757C5.75025 5.62367 5.75023 6.18163 5.7502 6.84187L5.7502 9.50045C5.7502 10.9359 5.7518 11.937 5.85335 12.6923C5.952 13.4261 6.13245 13.8147 6.40921 14.0914C6.68598 14.3682 7.07455 14.5486 7.80832 14.6473C8.56367 14.7489 9.56479 14.7504 11.0002 14.7504H18.0002C18.4144 14.7504 18.7502 15.0862 18.7502 15.5004C18.7502 15.9147 18.4144 16.2504 18.0002 16.2504H10.9453C9.57774 16.2505 8.47542 16.2505 7.60845 16.1339C6.70834 16.0129 5.95047 15.754 5.34855 15.1521C4.74664 14.5502 4.48774 13.7923 4.36673 12.8922C4.25017 12.0252 4.25018 10.9229 4.2502 9.55533L4.2502 6.88348C4.2502 6.17049 4.24907 5.69872 4.20785 5.33771C4.16883 4.99587 4.10068 4.83098 4.01426 4.71108C3.92784 4.59118 3.79296 4.47438 3.481 4.32926C3.15155 4.17599 2.70435 4.02573 2.02794 3.80026L1.76303 3.71196C1.37008 3.58097 1.15771 3.15623 1.28869 2.76328Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M5.74512 6.00049C5.75008 6.25961 5.75008 6.54006 5.75007 6.84189L5.75006 9.50049C5.75006 10.9359 5.75166 11.937 5.85321 12.6924C5.86803 12.8026 5.8847 12.905 5.90326 13.0005H16.0221C16.9815 13.0005 17.4612 13.0005 17.8369 12.7528C18.2126 12.505 18.4016 12.0641 18.7795 11.1822L19.2081 10.1822C20.0176 8.29343 20.4223 7.34902 19.9777 6.67475C19.5331 6.00049 18.5056 6.00049 16.4507 6.00049H5.74512Z" fill="currentColor" /><path d="M7.5 18.0005C8.32843 18.0005 9 18.6721 9 19.5005C9 20.3289 8.32843 21.0005 7.5 21.0005C6.67157 21.0005 6 20.3289 6 19.5005C6 18.6721 6.67157 18.0005 7.5 18.0005Z" fill="currentColor" /><path d="M18 19.5006C18 18.6721 17.3284 18.0006 16.5 18.0006C15.6716 18.0006 15 18.6721 15 19.5006C15 20.329 15.6716 21.0006 16.5 21.0006C17.3284 21.0006 18 20.329 18 19.5006Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.23737 2.28894C1.84442 2.15795 1.41968 2.37032 1.28869 2.76328C1.15771 3.15623 1.37008 3.58097 1.76303 3.71196L2.02794 3.80026C2.70435 4.02573 3.15155 4.17599 3.481 4.32926C3.79296 4.47438 3.92784 4.59118 4.01426 4.71108C4.10068 4.83098 4.16883 4.99587 4.20785 5.33771C4.24907 5.69872 4.2502 6.17049 4.2502 6.88348L4.2502 9.55533C4.25018 10.9229 4.25017 12.0252 4.36673 12.8922C4.48774 13.7923 4.74664 14.5502 5.34855 15.1521C5.95047 15.754 6.70834 16.0129 7.60845 16.1339C8.47542 16.2505 9.57773 16.2505 10.9453 16.2504H18.0002C18.4144 16.2504 18.7502 15.9147 18.7502 15.5004C18.7502 15.0862 18.4144 14.7504 18.0002 14.7504H11.0002C9.56479 14.7504 8.56367 14.7489 7.80832 14.6473C7.07455 14.5486 6.68598 14.3682 6.40921 14.0914C6.17403 13.8563 6.00839 13.5403 5.9034 13.0004H16.0222C16.9817 13.0004 17.4614 13.0004 17.8371 12.7527C18.2128 12.505 18.4017 12.064 18.7797 11.1822L19.2082 10.1822C20.0177 8.29338 20.4225 7.34897 19.9779 6.67471C19.5333 6.00045 18.5058 6.00045 16.4508 6.00045H5.74526C5.73936 5.69276 5.72644 5.41516 5.69817 5.16757C5.64282 4.68275 5.52222 4.23789 5.23112 3.83401C4.94002 3.43014 4.55613 3.17504 4.1137 2.96922C3.69746 2.77559 3.16814 2.59916 2.54176 2.3904L2.23737 2.28894Z" fill="currentColor" /><path d="M7.5 18.0005C8.32843 18.0005 9 18.6721 9 19.5005C9 20.3289 8.32843 21.0005 7.5 21.0005C6.67157 21.0005 6 20.3289 6 19.5005C6 18.6721 6.67157 18.0005 7.5 18.0005Z" fill="currentColor" /><path d="M16.5 18.0006C17.3284 18.0006 18 18.6721 18 19.5006C18 20.329 17.3284 21.0006 16.5 21.0006C15.6716 21.0006 15 20.329 15 19.5006C15 18.6721 15.6716 18.0006 16.5 18.0006Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCartLarge2 as IconComponent).keywords = [
  "cart",
  "large",
  "2",
  "handcart",
  "pushcart",
  "go-cart",
  "haul",
  "drag",
  "dray",
  "wheelbarrow",
  "wagon",
  "bandwagon",
  "great",
  "large-scale",
  "vast",
  "larger-than-life",
  "colossal",
  "huge",
  "prodigious",
  "humongous",
  "massive",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out"
];

export default IconCartLarge2 as IconComponent;