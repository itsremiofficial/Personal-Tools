import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconAtom: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.9423 3.05768C23.4117 5.52701 21.4099 11.5324 16.4712 16.4711C11.5326 21.4097 5.5272 23.4115 3.05787 20.9422C0.588547 18.4728 2.59033 12.4675 7.52899 7.5288C12.4676 2.59014 18.473 0.588345 20.9423 3.05768ZM3.05768 3.05782C0.588349 5.52715 2.59013 11.5325 7.52879 16.4712C12.4674 21.4099 18.4728 23.4117 20.9421 20.9423C23.4115 18.473 21.4097 12.4676 16.471 7.52894C11.5324 2.59028 5.527 0.588485 3.05768 3.05782Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.3" : "1"} d="M16.4712 16.4711C21.4099 11.5324 23.4117 5.52701 20.9423 3.05768C18.473 0.588345 12.4676 2.59014 7.52899 7.5288C2.59033 12.4675 0.588547 18.4728 3.05787 20.9422C5.5272 23.4115 11.5326 21.4097 16.4712 16.4711Z" fill="currentColor" /><path opacity={duotone ? "0.3" : "1"} d="M7.52879 16.4712C2.59013 11.5325 0.588349 5.52715 3.05768 3.05782C5.527 0.588485 11.5324 2.59028 16.471 7.52894C21.4097 12.4676 23.4115 18.473 20.9421 20.9423C18.4728 23.4117 12.4674 21.4099 7.52879 16.4712Z" fill="currentColor" /><path d="M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.0016 6.99793C15.8625 5.85879 14.6653 4.86861 13.4619 4.04619C14.8393 3.34512 16.1436 2.92369 17.2752 2.79313C18.7023 2.62848 19.7567 2.93171 20.4123 3.58732C21.0679 4.24294 21.3711 5.29736 21.2065 6.72444C21.0759 7.85601 20.6545 9.16032 19.9534 10.5378C19.131 9.3343 18.1408 8.13709 17.0016 6.99793Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M15.941 8.05859C17.2144 9.33197 18.2826 10.6744 19.1196 11.9995C18.2827 13.3245 17.2145 14.6668 15.9412 15.94C14.6677 17.2135 13.3253 18.2818 12.0002 19.1187C10.6751 18.2818 9.33276 17.2135 8.05941 15.9402C6.78608 14.6668 5.71785 13.3245 4.88094 11.9995C5.71788 10.6743 6.78618 9.33188 8.05961 8.05845C9.3329 6.78516 10.6752 5.71695 12.0002 4.88005C13.3253 5.71697 14.6676 6.78523 15.941 8.05859ZM12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z" fill="currentColor" /><path d="M13.4619 19.9526C14.6654 19.1301 15.8626 18.1399 17.0018 17.0007C18.1409 15.8616 19.131 14.6646 19.9534 13.4612C20.6544 14.8386 21.0758 16.1428 21.2063 17.2743C21.3709 18.7013 21.0677 19.7557 20.4121 20.4113C19.7565 21.0669 18.7021 21.3701 17.2751 21.2055C16.1435 21.075 14.8393 20.6536 13.4619 19.9526Z" fill="currentColor" /><path d="M6.99875 17.0008C8.13786 18.14 9.33502 19.1301 10.5384 19.9525C9.16109 20.6535 7.8569 21.0749 6.72543 21.2054C5.29844 21.37 4.24408 21.0668 3.5885 20.4112C2.93291 19.7556 2.62968 18.7012 2.79429 17.2742C2.92481 16.1428 3.34616 14.8386 4.04711 13.4612C4.86952 14.6646 5.85966 15.8617 6.99875 17.0008Z" fill="currentColor" /><path d="M4.04708 10.5377C4.86953 9.33424 5.85975 8.13699 6.99895 6.99779C8.13801 5.85872 9.33511 4.8686 10.5385 4.04621C9.16108 3.3452 7.85682 2.9238 6.72531 2.79326C5.29828 2.62863 4.2439 2.93186 3.5883 3.58746C2.93269 4.24307 2.62946 5.29747 2.7941 6.72453C2.92465 7.85606 3.34606 9.16034 4.04708 10.5377Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAtom as IconComponentType).keywords = [
  "atom",
  "mote",
  "molecule",
  "speck",
  "particle",
  "atomic",
  "nuclear",
  "supercell",
  "scintilla",
  "iota"
];

export default IconAtom as IconComponentType;