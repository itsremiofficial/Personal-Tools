import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconZelZel: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M11.1699 11.46V14.31L8.66992 15.75L6.16992 14.31V11.46L8.66992 10.02L9.91992 10.74L11.1699 11.46Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinejoin="round" /><path d="M19.1699 11.46V14.31L16.6699 15.75L14.1699 14.31V11.46L15.4199 10.74L16.6699 10.02L19.1699 11.46Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinejoin="round" /><path d="M15.4199 9.33V10.74L14.1699 11.46V13.19L12.6699 14.05L11.1699 13.19V11.46L9.91992 10.74V9.33L12.6699 7.75L15.4199 9.33Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinejoin="round" /></g><path d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.58" : "1"} d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" fill="currentColor" /><path d="M11.1699 11.46V14.03C11.1699 14.21 11.0699 14.37 10.9199 14.46L8.91992 15.61C8.76992 15.7 8.57992 15.7 8.41992 15.61L6.41992 14.46C6.25992 14.37 6.16992 14.21 6.16992 14.03V11.75C6.16992 11.57 6.26992 11.41 6.41992 11.32L8.41992 10.17C8.56992 10.08 8.76992 10.08 8.91992 10.17L9.91992 10.75L11.1699 11.46Z" fill="currentColor" /><path d="M19.1699 11.75V14.03C19.1699 14.21 19.0699 14.37 18.9199 14.46L16.9199 15.61C16.7699 15.7 16.5799 15.7 16.4199 15.61L14.4199 14.46C14.2599 14.37 14.1699 14.21 14.1699 14.03V11.46L15.4199 10.75L16.4199 10.17C16.5699 10.08 16.7599 10.08 16.9199 10.17L18.9199 11.32C19.0699 11.4 19.1699 11.57 19.1699 11.75Z" fill="currentColor" /><path d="M15.4199 9.62002V10.75L14.1699 11.46V13.19L12.9199 13.91C12.7699 14 12.5799 14 12.4199 13.91L11.1699 13.19V11.46L9.91992 10.75V9.62002C9.91992 9.44002 10.0199 9.28002 10.1699 9.19002L12.4199 7.90002C12.5699 7.81002 12.7599 7.81002 12.9199 7.90002L15.1699 9.19002C15.3199 9.27002 15.4199 9.44002 15.4199 9.62002Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM19.1699 14.02C19.1699 14.2 19.0699 14.36 18.9199 14.45L16.9199 15.6C16.7699 15.69 16.5799 15.69 16.4199 15.6L14.4199 14.45C14.2599 14.36 14.1699 14.2 14.1699 14.02V13.19L12.9199 13.91C12.7699 14 12.5799 14 12.4199 13.91L11.1699 13.19V14.02C11.1699 14.2 11.0699 14.36 10.9199 14.45L8.91992 15.6C8.76992 15.69 8.57992 15.69 8.41992 15.6L6.41992 14.45C6.25992 14.36 6.16992 14.2 6.16992 14.02V11.74C6.16992 11.56 6.26992 11.4 6.41992 11.31L8.41992 10.16C8.56992 10.07 8.76992 10.07 8.91992 10.16L9.91992 10.74V9.61C9.91992 9.43 10.0199 9.26999 10.1699 9.17999L12.4199 7.89C12.5699 7.8 12.7599 7.8 12.9199 7.89L15.1699 9.17999C15.3299 9.26999 15.4199 9.43 15.4199 9.61V10.74L16.4199 10.16C16.5699 10.07 16.7599 10.07 16.9199 10.16L18.9199 11.31C19.0799 11.4 19.1699 11.56 19.1699 11.74V14.02Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconZelZel as IconComponentType).keywords = [
  "zel",
  "zak",
  "leese",
  "kuhn",
  "reh",
  "etta",
  "rer",
  "mel",
  "kel",
  "hawn"
];

export default IconZelZel as IconComponentType;