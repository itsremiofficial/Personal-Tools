import { FC } from 'react';

const IconDropperMinimalistic2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 15.8833V8.00024C19 6.11463 19 5.17182 18.4142 4.58603C17.8284 4.00024 16.8856 4.00024 15 4.00024H9C7.11438 4.00024 6.17157 4.00024 5.58579 4.58603C5 5.17182 5 6.11462 5 8.00024V15.8833C5 16.6441 5.31911 17.37 5.87966 17.8843C9.3416 21.0609 14.6584 21.0609 18.1203 17.8843C18.6809 17.37 19 16.6441 19 15.8833Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M14 16.0002H10" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M14 10.9168C14 12.0674 13.1046 13.0001 12 13.0001C10.8954 13.0001 10 12.0674 10 10.9168C10 10.1969 10.783 9.23601 11.3691 8.61755C11.7161 8.25143 12.2839 8.25143 12.6309 8.61755C13.217 9.23601 14 10.1969 14 10.9168Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M12 21.0002V22.0002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M14 4.00024C14 2.89567 13.1046 2.00024 12 2.00024C10.8954 2.00024 10 2.89567 10 4.00024" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M19 15.8833V8.00024C19 6.11463 19 5.17182 18.4142 4.58603C17.8284 4.00024 16.8856 4.00024 15 4.00024H9C7.11438 4.00024 6.17157 4.00024 5.58579 4.58603C5 5.17182 5 6.11462 5 8.00024V15.8833C5 16.6441 5.31911 17.37 5.87966 17.8843C9.3416 21.0609 14.6584 21.0609 18.1203 17.8843C18.6809 17.37 19 16.6441 19 15.8833Z" fill="currentColor" /><path d="M18.9983 7.25024H17C16.5858 7.25024 16.25 7.58603 16.25 8.00024C16.25 8.41446 16.5858 8.75024 17 8.75024H19V8.00024C19 7.73168 19 7.48225 18.9983 7.25024Z" fill="currentColor" /><path d="M19 10.2502H17C16.5858 10.2502 16.25 10.586 16.25 11.0002C16.25 11.4145 16.5858 11.7502 17 11.7502H19V10.2502Z" fill="currentColor" /><path d="M19 13.2502H17C16.5858 13.2502 16.25 13.586 16.25 14.0002C16.25 14.4145 16.5858 14.7502 17 14.7502H19V13.2502Z" fill="currentColor" /><path d="M14 4.00024C14 2.89567 13.1046 2.00024 12 2.00024C10.8954 2.00024 10 2.89567 10 4.00024H14Z" fill="currentColor" /><path d="M11.25 20.2358C11.7491 20.2771 12.2509 20.2771 12.75 20.2358V21.2503C12.75 21.6645 12.4142 22.0003 12 22.0003C11.5858 22.0003 11.25 21.6645 11.25 21.2503V20.2358Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M9.25 16.0002C9.25 15.586 9.58579 15.2502 10 15.2502H14C14.4142 15.2502 14.75 15.586 14.75 16.0002C14.75 16.4145 14.4142 16.7502 14 16.7502H10C9.58579 16.7502 9.25 16.4145 9.25 16.0002Z" fill="currentColor" /><path d="M14 10.9168C14 12.0674 13.1046 13.0002 12 13.0002C10.8954 13.0002 10 12.0674 10 10.9168C10 10.1969 10.783 9.23607 11.3691 8.61761C11.7161 8.25149 12.2839 8.25149 12.6309 8.61761C13.217 9.23607 14 10.1969 14 10.9168Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M19 8.00024V15.8833C19 16.6441 18.6809 17.37 18.1203 17.8843C16.5867 19.2915 14.6891 20.0754 12.75 20.2358V21.2502C12.75 21.6645 12.4142 22.0002 12 22.0002C11.5858 22.0002 11.25 21.6645 11.25 21.2502V20.2358C9.31089 20.0754 7.41327 19.2915 5.87966 17.8843C5.31911 17.37 5 16.6441 5 15.8833V8.00024C5 6.11462 5 5.17182 5.58579 4.58603C6.17157 4.00024 7.11438 4.00024 9 4.00024H15C16.8856 4.00024 17.8284 4.00024 18.4142 4.58603C19 5.17182 19 6.11463 19 8.00024ZM12 13.0002C13.1046 13.0002 14 12.0674 14 10.9168C14 10.1969 13.217 9.23607 12.6309 8.61761C12.2839 8.25149 11.7161 8.25149 11.3691 8.61761C10.783 9.23607 10 10.1969 10 10.9168C10 12.0674 10.8954 13.0002 12 13.0002ZM9.25 16.0002C9.25 15.586 9.58579 15.2502 10 15.2502H14C14.4142 15.2502 14.75 15.586 14.75 16.0002C14.75 16.4145 14.4142 16.7502 14 16.7502H10C9.58579 16.7502 9.25 16.4145 9.25 16.0002Z" fill="currentColor" /><path d="M13.7325 3.00025C13.3866 2.40244 12.7403 2.00024 12 2.00024C11.2597 2.00024 10.6134 2.40244 10.2676 3.00025L13.7325 3.00025Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDropperMinimalistic2 as IconComponent).keywords = [
  "dropper",
  "minimalistic",
  "2",
  "eye dropper",
  "strainer",
  "sieve",
  "colander",
  "eyedropper",
  "dropperful",
  "dripper",
  "syringe",
  "drops",
  "modularistic",
  "brutalistic",
  "localistic",
  "reductionist",
  "exhibitional",
  "monogynous",
  "simplificational",
  "reductionistic",
  "automatistic",
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

export default IconDropperMinimalistic2 as IconComponent;