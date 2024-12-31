import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSmallcaps: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.99023 5.92982V4.41982C1.99023 3.39982 2.82023 2.56982 3.84023 2.56982H16.7602C17.7802 2.56982 18.6102 3.39982 18.6102 4.41982V5.92982" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.3008 18.0998V3.31982" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.90039 18.1001H12.4804" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M13.6797 10.3398H20.6897C21.4197 10.3398 22.0097 10.9298 22.0097 11.6598V12.4598" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.0801 21.4301V10.8701" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.9395 21.4297H18.2195" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 7.81V16.19C22 19.83 19.83 22 16.19 22H7.81C7.61 22 7.41 21.99 7.22 21.98C5.99 21.9 4.95 21.55 4.13 20.95C3.71 20.66 3.34 20.29 3.05 19.87C2.36 18.92 2 17.68 2 16.19V7.81C2 4.37 3.94 2.24 7.22 2.03C7.41 2.01 7.61 2 7.81 2H16.19C17.68 2 18.92 2.36 19.87 3.05C20.29 3.34 20.66 3.71 20.95 4.13C21.64 5.08 22 6.32 22 7.81Z" fill="currentColor" /><path d="M11.39 14.3799H11.02V7.9099H13.59C13.7 7.9099 13.79 7.9999 13.79 8.1099V8.8899C13.79 9.2999 14.13 9.6399 14.54 9.6399C14.95 9.6399 15.29 9.2999 15.29 8.8899V8.0999C15.29 7.1599 14.53 6.3999 13.59 6.3999H6.95C6.01 6.3999 5.25 7.1599 5.25 8.0999V8.8799C5.25 9.2999 5.59 9.6299 6 9.6299C6.41 9.6299 6.75 9.2999 6.75 8.8799V8.0999C6.75 7.9899 6.84 7.8999 6.95 7.8999H9.52V14.3799H8.52C8.11 14.3799 7.77 14.7199 7.77 15.1299C7.77 15.5399 8.11 15.8799 8.52 15.8799H11.38C11.79 15.8799 12.13 15.5399 12.13 15.1299C12.13 14.7199 11.8 14.3799 11.39 14.3799Z" fill="currentColor" /><path d="M17.3207 10.3999H13.7207C13.3107 10.3999 12.9707 10.7399 12.9707 11.1499C12.9707 11.5599 13.3107 11.8999 13.7207 11.8999H14.2007V16.0999H13.8507C13.4407 16.0999 13.1007 16.4399 13.1007 16.8499C13.1007 17.2599 13.4407 17.5999 13.8507 17.5999H16.0507C16.4607 17.5999 16.8007 17.2599 16.8007 16.8499C16.8007 16.4399 16.4607 16.0999 16.0507 16.0999H15.7007V11.8999H17.2507V12.2399C17.2507 12.6499 17.5907 12.9899 18.0007 12.9899C18.4107 12.9899 18.7507 12.6499 18.7507 12.2399V11.8299C18.7507 11.0399 18.1107 10.3999 17.3207 10.3999Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSmallcaps as IconComponentType).keywords = [
  "smallcaps"
];

export default IconSmallcaps as IconComponentType;