import { FC } from 'react';

const IconTennis: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.33995 17.0004C6.10137 21.7834 12.2173 23.4221 17.0002 20.6607C18.9498 19.5351 20.377 17.8521 21.1967 15.9293C22.388 13.1349 22.2963 9.83377 20.6605 7.00045C19.0246 4.16713 16.2117 2.43715 13.196 2.07161C11.1209 1.82008 8.94981 2.21459 7.00021 3.3402C2.21728 6.10162 0.578527 12.2175 3.33995 17.0004Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M13.1958 2.07153C13.1958 2.07153 12.9641 5.67024 15.4641 10.0004C17.9641 14.3305 21.1965 15.9292 21.1965 15.9292M2.80347 8.07153C2.80347 8.07153 6.03588 9.67024 8.53588 14.0004C11.0359 18.3305 10.8042 21.9292 10.8042 21.9292" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.1959 2.07137C11.1208 1.81984 8.94969 2.21434 7.00008 3.33995C5.14622 4.41028 3.76471 5.98457 2.92871 7.78986C3.94512 8.5117 6.56318 10.5836 8.53601 14.0006C8.69226 14.2712 8.83784 14.539 8.97347 14.8032C9.09981 15.0494 9.21752 15.2924 9.32719 15.5318C9.4307 15.7578 9.52704 15.9805 9.61671 16.1994C9.70467 16.4143 9.78621 16.6255 9.86178 16.8327C10.9301 19.7615 10.8071 21.8836 10.8043 21.9295C12.2386 22.1033 13.7187 21.9682 15.1398 21.4967C15.2278 21.4675 15.3156 21.437 15.4031 21.4052C15.6118 21.3294 15.819 21.2462 16.0245 21.1556C16.1073 21.1191 16.1898 21.0814 16.272 21.0424C16.5177 20.926 16.7605 20.7988 17.0001 20.6605C18.9497 19.5349 20.3769 17.8519 21.1966 15.929C21.1966 15.929 17.9642 14.3307 15.4642 10.0006C12.9642 5.67049 13.1959 2.07137 13.1959 2.07137Z" fill="currentColor" /><g opacity={duotone ? "0.5" : "1"}><path d="M3.83026 17.7682L3.87336 17.8289C4.0828 18.1217 4.30583 18.4002 4.54109 18.6641C4.82414 18.9816 5.12486 19.2779 5.44089 19.5525C5.52558 19.626 5.61137 19.6981 5.69821 19.7685C7.17265 20.9642 8.95022 21.7051 10.8044 21.9299C10.8078 21.8743 10.9276 19.7549 9.86191 16.8331C9.78633 16.6259 9.70479 16.4147 9.61683 16.1999C9.52717 15.9809 9.43082 15.7582 9.32731 15.5322C9.21765 15.2928 9.09993 15.0498 8.97359 14.8037C8.83796 14.5394 8.69238 14.2717 8.53613 14.001C6.5633 10.584 3.94524 8.51211 2.92883 7.79027C1.60797 10.6426 1.64886 14.0716 3.33995 17.0006C3.49331 17.2662 3.65701 17.5222 3.83026 17.7682Z" fill="currentColor" /><path d="M20.6605 7.00062C19.0246 4.1673 16.2117 2.43732 13.196 2.07178C13.196 2.07178 12.9643 5.6709 15.4643 10.001C17.9643 14.3312 21.1967 15.9295 21.1967 15.9295C22.388 13.135 22.2963 9.83393 20.6605 7.00062Z" fill="currentColor" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.6881 16.5084C20.5832 16.4498 20.435 16.3632 20.2514 16.2465C19.8844 16.0131 19.3751 15.6586 18.787 15.1648C17.6106 14.177 16.1165 12.6297 14.816 10.3772C13.5156 8.12474 12.9226 6.05709 12.6553 4.54447C12.5217 3.7882 12.4694 3.16995 12.4508 2.7354C12.4415 2.51806 12.4406 2.34645 12.4422 2.22626C12.4431 2.16615 12.4495 2.04475 12.4508 2.01101C10.6072 1.92639 8.71856 2.35066 7.00167 3.3419C5.28578 4.33257 3.97456 5.75498 3.126 7.39268L3.31486 7.49596C3.41977 7.55464 3.56795 7.6412 3.75151 7.75793C4.11855 7.99132 4.6278 8.34577 5.21594 8.83961C6.39229 9.82736 7.88643 11.3747 9.18688 13.6272C10.4873 15.8797 11.0803 17.9473 11.3476 19.4599C11.4812 20.2162 11.5335 20.8344 11.5521 21.269C11.5614 21.4863 11.5623 21.6579 11.5607 21.7781V21.9937C13.4017 22.0767 15.2873 21.6522 17.0017 20.6624C18.7158 19.6728 20.0261 18.2523 20.8747 16.6167L20.6881 16.5084Z" fill="currentColor" /><path d="M10.0598 21.8119C10.0611 21.7184 10.0615 21.5209 10.0535 21.3332C10.0374 20.9576 9.99142 20.4056 9.87046 19.7209C9.62854 18.3516 9.08739 16.4549 7.88784 14.3772C6.6883 12.2995 5.31623 10.8825 4.25137 9.98835C3.7189 9.54125 3.26381 9.22539 2.94663 9.0237C2.7881 8.92289 2.61686 8.82458 2.53523 8.77892C1.63973 11.4124 1.84135 14.404 3.34142 17.0022C4.84147 19.6003 7.33139 21.2707 10.0598 21.8119Z" fill="currentColor" /><path d="M13.9431 2.1923C13.9419 2.28582 13.9414 2.48354 13.9494 2.67123C13.9655 3.04676 14.0115 3.59882 14.1325 4.2835C14.3744 5.65276 14.9155 7.54952 16.1151 9.6272C17.3146 11.7049 18.6867 13.1219 19.7516 14.016C20.284 14.4631 20.7391 14.779 21.0563 14.9807C21.2148 15.0815 21.3864 15.18 21.468 15.2256C22.3636 12.5921 22.162 9.60044 20.6619 7.00216C19.1618 4.40386 16.6717 2.73345 13.9431 2.1923Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTennis as IconComponent).keywords = [
  "tennis",
  "lawn tennis",
  "volleyball",
  "championship",
  "tournament",
  "arena",
  "ball",
  "open",
  "game",
  "striker"
];

export default IconTennis as IconComponent;