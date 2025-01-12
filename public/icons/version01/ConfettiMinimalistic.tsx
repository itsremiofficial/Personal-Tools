import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconConfettiMinimalistic: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.01207 15.7618L5.70156 10.6933C6.46758 8.39525 6.85059 7.24623 7.75684 7.03229C8.6631 6.81835 9.51953 7.67478 11.2324 9.38764L14.6114 12.7666C16.3242 14.4795 17.1807 15.3359 16.9667 16.2422C16.7528 17.1484 15.6038 17.5314 13.3057 18.2975L8.23724 19.987C5.47183 20.9088 4.08912 21.3697 3.35924 20.6398C2.62936 19.9099 3.09026 18.5272 4.01207 15.7618Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M12.2351 18.3463C12.2351 18.3463 11.477 16.0652 11.477 14.5554C11.477 13.0457 12.2351 10.7646 12.2351 10.7646M8.06517 19.4836C8.06517 19.4836 7.42484 16.7317 7.307 14.9345C7.11229 11.9653 8.06517 7.35278 8.06517 7.35278" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M14.5093 10.0061L14.6533 9.28614C14.7986 8.55924 15.3224 7.96597 16.0256 7.73155C16.7289 7.49714 17.2526 6.90387 17.398 6.17697L17.542 5.45703" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M17.5691 12.2536L17.7819 12.3765C18.4391 12.7558 19.2652 12.6722 19.8329 12.1688C20.347 11.7129 21.0792 11.5973 21.7087 11.8725L22.0002 12" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M10.5352 3C10.1977 3.55206 10.2823 4.26344 10.7399 4.72097L10.8377 4.81885C11.2309 5.21201 11.3759 5.78959 11.215 6.32182" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><g opacity={duotone ? "0.5" : "1"}><path d="M13.561 4.39623C13.7621 4.19518 13.8626 4.09465 13.9788 4.0578C14.0772 4.02663 14.1827 4.02663 14.281 4.0578C14.3973 4.09465 14.4978 4.19518 14.6989 4.39623C14.8999 4.59729 15.0004 4.69782 15.0373 4.81405C15.0685 4.91237 15.0685 5.01792 15.0373 5.11624C15.0004 5.23248 14.8999 5.33301 14.6989 5.53406C14.4978 5.73512 14.3973 5.83565 14.281 5.8725C14.1827 5.90366 14.0772 5.90366 13.9788 5.8725C13.8626 5.83565 13.7621 5.73512 13.561 5.53406C13.36 5.33301 13.2594 5.23248 13.2226 5.11624C13.1914 5.01792 13.1914 4.91237 13.2226 4.81405C13.2594 4.69782 13.36 4.59729 13.561 4.39623Z" fill="currentColor" /></g><path d="M19.4682 7.46822C19.7136 7.22283 19.8363 7.10014 19.9747 7.04681C20.1367 6.9844 20.3161 6.9844 20.4781 7.04681C20.6165 7.10014 20.7392 7.22283 20.9846 7.46822C21.23 7.71362 21.3527 7.83631 21.406 7.97472C21.4684 8.1367 21.4684 8.31609 21.406 8.47807C21.3527 8.61649 21.23 8.73918 20.9846 8.98457C20.7392 9.22996 20.6165 9.35266 20.4781 9.40599C20.3161 9.4684 20.1367 9.4684 19.9747 9.40599C19.8363 9.35266 19.7136 9.22996 19.4682 8.98457C19.2228 8.73918 19.1001 8.61649 19.0468 8.47807C18.9844 8.31609 18.9844 8.1367 19.0468 7.97472C19.1001 7.83631 19.2228 7.71362 19.4682 7.46822Z" fill="currentColor" /><g opacity={duotone ? "0.5" : "1"}><path d="M6.92737 3.94079C7.13683 3.73132 7.47645 3.73132 7.68592 3.94079C7.89539 4.15026 7.89539 4.48988 7.68592 4.69935C7.47645 4.90882 7.13683 4.90882 6.92737 4.69935C6.7179 4.48988 6.7179 4.15026 6.92737 3.94079Z" fill="currentColor" /></g><path opacity={duotone ? "0.5" : "1"} d="M19.0582 15.3134C19.2677 15.1039 19.6073 15.1039 19.8168 15.3134C20.0262 15.5228 20.0262 15.8624 19.8168 16.0719C19.6073 16.2814 19.2677 16.2814 19.0582 16.0719C18.8488 15.8624 18.8488 15.5228 19.0582 15.3134Z" fill="currentColor" /><g opacity={duotone ? "0.5" : "1"}><path d="M17.5 9.74145C17.7095 9.53198 18.0491 9.53198 18.2586 9.74145C18.468 9.95092 18.468 10.2905 18.2586 10.5C18.0491 10.7095 17.7095 10.7095 17.5 10.5C17.2905 10.2905 17.2905 9.95092 17.5 9.74145Z" fill="currentColor" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9264 2.36021C11.2798 2.57626 11.3912 3.03789 11.1752 3.3913C11.0184 3.64775 11.0577 3.97821 11.2702 4.19075L11.3681 4.28863C11.9567 4.87729 12.1738 5.74206 11.9329 6.53894C11.8131 6.93543 11.3945 7.1597 10.998 7.03985C10.6015 6.91999 10.3772 6.50141 10.4971 6.10492C10.578 5.83734 10.5051 5.54695 10.3074 5.34929L10.2095 5.25141C9.50703 4.54889 9.37715 3.45659 9.89535 2.60892C10.1114 2.25551 10.573 2.14416 10.9264 2.36021Z" fill="currentColor" /><path d="M19.9747 7.04681C19.8363 7.10014 19.7136 7.22283 19.4682 7.46822C19.2228 7.71362 19.1002 7.83631 19.0468 7.97472C18.9844 8.1367 18.9844 8.31609 19.0468 8.47807C19.1002 8.61649 19.2228 8.73918 19.4682 8.98457C19.7136 9.22996 19.8363 9.35266 19.9747 9.40599C20.1367 9.4684 20.3161 9.4684 20.4781 9.40599C20.6165 9.35266 20.7392 9.22996 20.9846 8.98457C21.23 8.73918 21.3527 8.61649 21.406 8.47807C21.4684 8.31609 21.4684 8.1367 21.406 7.97472C21.3527 7.83631 21.23 7.71362 20.9846 7.46822C20.7392 7.22283 20.6165 7.10014 20.4781 7.04681C20.3161 6.9844 20.1367 6.9844 19.9747 7.04681Z" fill="currentColor" /><path d="M21.4082 12.5596C21.0465 12.4015 20.6258 12.4679 20.3305 12.7298C19.5212 13.4474 18.3435 13.5667 17.4069 13.0259L17.194 12.903C16.8353 12.6959 16.7124 12.2372 16.9195 11.8785C17.1266 11.5198 17.5853 11.3968 17.944 11.604L18.1569 11.7268C18.5344 11.9448 19.0091 11.8967 19.3352 11.6075C20.0681 10.9577 21.1117 10.7929 22.0091 11.1852L22.3006 11.3127C22.6801 11.4786 22.8533 11.9208 22.6873 12.3003C22.5214 12.6799 22.0792 12.853 21.6997 12.6871L21.4082 12.5596Z" fill="currentColor" /><path opacity={duotone ? "0.7" : "1"} d="M13.561 4.39648C13.7621 4.19542 13.8626 4.09489 13.9788 4.05804C14.0772 4.02688 14.1827 4.02688 14.281 4.05804C14.3973 4.09489 14.4978 4.19542 14.6989 4.39648C14.8999 4.59753 15.0004 4.69806 15.0373 4.8143C15.0685 4.91262 15.0685 5.01817 15.0373 5.11648C15.0004 5.23272 14.8999 5.33325 14.6989 5.5343C14.4978 5.73536 14.3973 5.83589 14.281 5.87274C14.1827 5.90391 14.0772 5.90391 13.9788 5.87274C13.8626 5.83589 13.7621 5.73536 13.561 5.53431C13.36 5.33325 13.2594 5.23272 13.2226 5.11648C13.1914 5.01817 13.1914 4.91262 13.2226 4.8143C13.2594 4.69806 13.36 4.59753 13.561 4.39648Z" fill="currentColor" /><path opacity={duotone ? "0.7" : "1"} d="M19.0575 15.3134C19.267 15.1039 19.6066 15.1039 19.816 15.3134C20.0255 15.5228 20.0255 15.8624 19.816 16.0719C19.6066 16.2814 19.267 16.2814 19.0575 16.0719C18.848 15.8624 18.848 15.5228 19.0575 15.3134Z" fill="currentColor" /><g opacity={duotone ? "0.5" : "1"}><path d="M6.92663 3.94079C7.1361 3.73132 7.47572 3.73132 7.68519 3.94079C7.89466 4.15026 7.89466 4.48988 7.68519 4.69935C7.47572 4.90882 7.1361 4.90882 6.92663 4.69935C6.71716 4.48988 6.71716 4.15026 6.92663 3.94079Z" fill="currentColor" /><path d="M17.6887 4.72163C18.0949 4.80287 18.3583 5.19799 18.2771 5.60416L18.1331 6.32409C17.9349 7.31491 17.221 8.12357 16.2625 8.4431C15.8145 8.59241 15.481 8.97028 15.3884 9.43326L15.2444 10.1532C15.1631 10.5594 14.768 10.8228 14.3618 10.7415C13.9557 10.6603 13.6923 10.2652 13.7735 9.85903L13.9175 9.13909C14.1156 8.14828 14.8295 7.33961 15.7881 7.02008C16.236 6.87077 16.5696 6.4929 16.6622 6.02992L16.8062 5.30998C16.8874 4.90381 17.2825 4.6404 17.6887 4.72163Z" fill="currentColor" /></g><path opacity={duotone ? "0.2" : "1"} d="M17.4999 9.74157C17.7093 9.53211 18.049 9.53211 18.2584 9.74157C18.4679 9.95104 18.4679 10.2907 18.2584 10.5001C18.049 10.7096 17.7093 10.7096 17.4999 10.5001C17.2904 10.2907 17.2904 9.95104 17.4999 9.74157Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M4.01207 15.7618L5.70156 10.6933C6.46758 8.39525 6.85059 7.24623 7.75684 7.03229C8.6631 6.81835 9.51953 7.67478 11.2324 9.38764L14.6114 12.7666C16.3242 14.4795 17.1807 15.3359 16.9667 16.2422C16.7528 17.1484 15.6038 17.5314 13.3057 18.2975L8.23724 19.987L8.23723 19.987C5.47182 20.9088 4.08912 21.3697 3.35924 20.6398C2.62936 19.9099 3.09026 18.5272 4.01207 15.7618Z" fill="currentColor" /><path d="M8.8001 7.50424L8.85072 7.25922C8.45761 7.02857 8.111 6.94867 7.75679 7.03229C7.61235 7.06638 7.4812 7.12423 7.35967 7.2067L8.05611 7.35058C7.57757 7.25172 7.41498 7.21808 7.35967 7.2067C7.34804 7.2146 7.3364 7.22279 7.32494 7.23114L7.31964 7.25736C7.31242 7.29328 7.30199 7.34575 7.28885 7.41325C7.26258 7.54824 7.22547 7.74345 7.18165 7.98662C7.09406 8.47264 6.97937 9.15184 6.87078 9.92573C6.65564 11.4589 6.45638 13.4179 6.55904 14.9834C6.62115 15.9306 6.81822 17.1057 6.9941 18.0238C7.08286 18.4872 7.16784 18.8933 7.23066 19.1838C7.26209 19.3291 7.28803 19.4457 7.30619 19.5264L7.32733 19.6195L7.333 19.6441L7.33493 19.6525C7.33494 19.6526 7.33512 19.6533 8.0656 19.4833L7.33493 19.6525L7.47191 20.2412C7.71447 20.1612 7.96933 20.0762 8.23717 19.987L8.90132 19.7656L8.79453 19.3066L8.78944 19.2845L8.76953 19.1968C8.75221 19.1199 8.7272 19.0075 8.69676 18.8667C8.63584 18.585 8.55336 18.1909 8.46732 17.7416C8.29357 16.8346 8.11155 15.7351 8.05582 14.8852C7.96377 13.4814 8.1436 11.6495 8.35623 10.1342C8.46152 9.38377 8.57288 8.72427 8.65787 8.25265C8.70034 8.017 8.73615 7.82867 8.76123 7.69981C8.77376 7.63539 8.78361 7.58587 8.79026 7.55277L8.79777 7.51563L8.7996 7.50665L8.8001 7.50424Z" fill="currentColor" /><path d="M13.0393 18.3863L11.6162 18.8606L11.5238 18.5826L12.2356 18.3461C11.5238 18.5826 11.5239 18.5827 11.5238 18.5826L11.5229 18.5798L11.5209 18.5738L11.5138 18.552C11.5077 18.5333 11.499 18.5064 11.4881 18.472C11.4663 18.4031 11.4354 18.3042 11.3986 18.1811C11.325 17.9354 11.227 17.5917 11.1288 17.1985C10.9367 16.4293 10.7274 15.407 10.7274 14.5552C10.7274 13.7034 10.9367 12.6811 11.1288 11.9119C11.227 11.5187 11.325 11.175 11.3986 10.9293C11.4354 10.8062 11.4663 10.7073 11.4881 10.6384C11.499 10.604 11.5077 10.5771 11.5138 10.5584L11.5209 10.5366L11.5229 10.5305L11.5235 10.5287C11.5235 10.5287 11.5238 10.5278 12.2356 10.7643L11.5238 10.5278L11.7355 9.89084L12.9224 11.0777C12.921 11.0824 12.9194 11.0872 12.9178 11.0922C12.8982 11.154 12.8698 11.245 12.8356 11.3594C12.767 11.5886 12.6755 11.9095 12.5841 12.2753C12.3971 13.0241 12.2274 13.8973 12.2274 14.5552C12.2274 15.2131 12.3971 16.0863 12.5841 16.8351C12.6755 17.2009 12.767 17.5218 12.8356 17.751C12.8698 17.8654 12.8982 17.9564 12.9178 18.0182C12.9276 18.0491 12.9352 18.0727 12.9403 18.0881L12.9458 18.1052L12.9471 18.109L13.0393 18.3863Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.0389 18.3864L13.3057 18.2975C15.6038 17.5314 16.7528 17.1484 16.9667 16.2422C17.1807 15.3359 16.3242 14.4795 14.6114 12.7666L12.9221 11.0774C12.9206 11.0821 12.919 11.087 12.9174 11.0922C12.8978 11.154 12.8694 11.245 12.8352 11.3594C12.7666 11.5886 12.6751 11.9095 12.5837 12.2753C12.3967 13.0241 12.227 13.8973 12.227 14.5552C12.227 15.2131 12.3967 16.0863 12.5837 16.8351C12.6751 17.2009 12.7666 17.5218 12.8352 17.751C12.8694 17.8654 12.8978 17.9564 12.9174 18.0182C12.9272 18.0491 12.9348 18.0727 12.9398 18.0881L12.9454 18.1052L12.9467 18.109L13.0389 18.3864Z" fill="currentColor" /><path d="M7.47151 20.2413C5.20995 20.9869 4.01839 21.2989 3.35924 20.6398C2.62936 19.9099 3.09026 18.5272 4.01207 15.7618L5.70156 10.6933C6.33358 8.79725 6.70486 7.68339 7.32442 7.23155L7.31921 7.25736C7.31199 7.29327 7.30156 7.34575 7.28842 7.41325C7.26215 7.54824 7.22504 7.74345 7.18122 7.98662C7.09363 8.47264 6.97894 9.15184 6.87035 9.92573C6.65521 11.4589 6.45595 13.4179 6.5586 14.9834C6.62072 15.9306 6.81779 17.1057 6.99367 18.0238C7.08243 18.4872 7.16741 18.8933 7.23023 19.1838C7.26166 19.3291 7.2876 19.4457 7.30576 19.5264L7.3269 19.6195L7.47151 20.2413Z" fill="currentColor" /><path d="M8.85034 7.25896L8.79967 7.50424L8.79917 7.50665L8.79734 7.51562L8.78983 7.55277C8.78318 7.58587 8.77333 7.63539 8.7608 7.69981C8.73572 7.82867 8.6999 8.017 8.65744 8.25266C8.57244 8.72427 8.46109 9.38377 8.35579 10.1342C8.14317 11.6495 7.96334 13.4814 8.05539 14.8852C8.11112 15.7351 8.29314 16.8346 8.46689 17.7416C8.55293 18.1909 8.63541 18.585 8.69633 18.8667C8.72677 19.0075 8.75178 19.1199 8.7691 19.1968L8.78901 19.2845L8.7941 19.3066L8.90092 19.7657L11.6159 18.8608L11.5134 18.552C11.5073 18.5333 11.4986 18.5064 11.4877 18.472C11.4658 18.4031 11.435 18.3042 11.3982 18.1811C11.3246 17.9354 11.2266 17.5917 11.1284 17.1985C10.9363 16.4293 10.727 15.407 10.727 14.5552C10.727 13.7034 10.9363 12.6811 11.1284 11.9119C11.2266 11.5187 11.3246 11.175 11.3982 10.9293C11.435 10.8062 11.4658 10.7073 11.4877 10.6384C11.4986 10.604 11.5073 10.5771 11.5134 10.5584L11.5225 10.5305L11.7352 9.89048L11.2324 9.38764C10.1888 8.34402 9.46308 7.61833 8.85034 7.25896Z" fill="currentColor" /><path d="M10.9264 2.36021C11.2798 2.57626 11.3912 3.03789 11.1751 3.3913C11.0184 3.64775 11.0577 3.97821 11.2702 4.19075L11.3681 4.28863C11.9567 4.87729 12.1738 5.74206 11.9329 6.53894C11.8131 6.93543 11.3945 7.1597 10.998 7.03985C10.6015 6.91999 10.3772 6.50141 10.4971 6.10492C10.578 5.83734 10.5051 5.54695 10.3074 5.34929L10.2095 5.25141C9.50701 4.54889 9.37713 3.45659 9.89534 2.60892C10.1114 2.25551 10.573 2.14416 10.9264 2.36021Z" fill="currentColor" /><path d="M13.561 4.39658C13.7621 4.19553 13.8626 4.095 13.9788 4.05815C14.0772 4.02698 14.1827 4.02698 14.281 4.05815C14.3973 4.095 14.4978 4.19553 14.6989 4.39658C14.8999 4.59764 15.0004 4.69817 15.0373 4.81441C15.0685 4.91272 15.0685 5.01827 15.0373 5.11659C15.0004 5.23283 14.8999 5.33336 14.6989 5.53441C14.4978 5.73547 14.3973 5.836 14.281 5.87285C14.1827 5.90401 14.0772 5.90401 13.9788 5.87285C13.8626 5.836 13.7621 5.73547 13.561 5.53441C13.36 5.33336 13.2594 5.23283 13.2226 5.11659C13.1914 5.01827 13.1914 4.91272 13.2226 4.81441C13.2594 4.69817 13.36 4.59764 13.561 4.39658Z" fill="currentColor" /><path d="M6.92712 3.9409C7.13659 3.73143 7.47621 3.73143 7.68567 3.9409C7.89514 4.15037 7.89514 4.48999 7.68567 4.69945C7.47621 4.90892 7.13659 4.90892 6.92712 4.69945C6.71765 4.48999 6.71765 4.15037 6.92712 3.9409Z" fill="currentColor" /><path d="M19.9747 7.04681C19.8363 7.10014 19.7136 7.22283 19.4682 7.46822C19.2228 7.71362 19.1001 7.83631 19.0468 7.97472C18.9844 8.1367 18.9844 8.31609 19.0468 8.47807C19.1001 8.61649 19.2228 8.73918 19.4682 8.98457C19.7136 9.22996 19.8363 9.35266 19.9747 9.40599C20.1367 9.4684 20.3161 9.4684 20.4781 9.40599C20.6165 9.35266 20.7392 9.22996 20.9846 8.98457C21.23 8.73918 21.3527 8.61649 21.406 8.47807C21.4684 8.31609 21.4684 8.1367 21.406 7.97472C21.3527 7.83631 21.23 7.71362 20.9846 7.46822C20.7392 7.22283 20.6165 7.10014 20.4781 7.04681C20.3161 6.9844 20.1367 6.9844 19.9747 7.04681Z" fill="currentColor" /><path d="M19.058 15.3134C19.2674 15.1039 19.6071 15.1039 19.8165 15.3134C20.026 15.5228 20.026 15.8624 19.8165 16.0719C19.6071 16.2814 19.2674 16.2814 19.058 16.0719C18.8485 15.8624 18.8485 15.5228 19.058 15.3134Z" fill="currentColor" /><path d="M17.6892 4.72174C18.0954 4.80297 18.3588 5.19809 18.2776 5.60426L18.1336 6.3242C17.9354 7.31501 17.2215 8.12368 16.2629 8.44321C15.815 8.59252 15.4814 8.97039 15.3888 9.43337L15.2449 10.1533C15.1636 10.5595 14.7685 10.8229 14.3623 10.7417C13.9562 10.6604 13.6928 10.2653 13.774 9.85913L13.918 9.1392C14.1161 8.14838 14.83 7.33971 15.7886 7.02019C16.2365 6.87088 16.5701 6.49301 16.6627 6.03002L16.8067 5.31009C16.8879 4.90392 17.283 4.64051 17.6892 4.72174Z" fill="currentColor" /><path d="M21.4082 12.5596C21.0465 12.4015 20.6258 12.4679 20.3304 12.7298C19.5212 13.4474 18.3435 13.5667 17.4068 13.0259L17.194 12.903C16.8353 12.6959 16.7124 12.2372 16.9195 11.8785C17.1266 11.5198 17.5853 11.3968 17.944 11.604L18.1568 11.7268C18.5344 11.9448 19.0091 11.8967 19.3352 11.6075C20.0681 10.9577 21.1117 10.7929 22.0091 11.1852L22.3006 11.3127C22.6801 11.4786 22.8532 11.9208 22.6873 12.3003C22.5214 12.6799 22.0792 12.853 21.6997 12.6871L21.4082 12.5596Z" fill="currentColor" /><path d="M17.5001 9.74159C17.7096 9.53212 18.0492 9.53212 18.2587 9.74159C18.4682 9.95106 18.4682 10.2907 18.2587 10.5001C18.0492 10.7096 17.7096 10.7096 17.5001 10.5001C17.2907 10.2907 17.2907 9.95106 17.5001 9.74159Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconConfettiMinimalistic;