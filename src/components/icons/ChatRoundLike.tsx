import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconChatRoundLike: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22.0002C17.5228 22.0002 22 17.5231 22 12.0002C22 6.4774 17.5228 2.00024 12 2.00024C6.47715 2.00024 2 6.4774 2 12.0002C2 13.5999 2.37562 15.1119 3.04346 16.4527C3.22094 16.809 3.28001 17.2163 3.17712 17.6009L2.58151 19.8269C2.32295 20.7932 3.20701 21.6773 4.17335 21.4187L6.39939 20.8231C6.78393 20.7202 7.19121 20.7793 7.54753 20.9568C8.88837 21.6246 10.4003 22.0002 12 22.0002Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M10.0286 14.942L9.54259 15.5133L10.0286 14.942ZM12 9.50008L11.4641 10.0248C11.6052 10.1689 11.7983 10.2501 12 10.2501C12.2017 10.2501 12.3948 10.1689 12.5359 10.0248L12 9.50008ZM13.9714 14.942L13.4855 14.3708L13.9714 14.942ZM12 15.9933L12 15.2433H12L12 15.9933ZM10.5145 14.3708C9.93292 13.876 9.34909 13.3029 8.91635 12.7103C8.47476 12.1055 8.25 11.5614 8.25 11.1087H6.75C6.75 12.0244 7.18465 12.8823 7.70492 13.5949C8.23403 14.3195 8.91448 14.9789 9.54259 15.5133L10.5145 14.3708ZM8.25 11.1087C8.25 10.0009 8.74454 9.41765 9.25333 9.2274C9.77052 9.03402 10.5951 9.13724 11.4641 10.0248L12.5359 8.97537C11.38 7.79483 9.95456 7.36377 8.72797 7.82241C7.49299 8.2842 6.75 9.53925 6.75 11.1087H8.25ZM14.4574 15.5133C15.0855 14.9789 15.766 14.3195 16.2951 13.5949C16.8154 12.8823 17.25 12.0244 17.25 11.1087H15.75C15.75 11.5614 15.5252 12.1055 15.0837 12.7103C14.6509 13.303 14.0671 13.876 13.4855 14.3708L14.4574 15.5133ZM17.25 11.1087C17.25 9.53924 16.507 8.28419 15.272 7.82241C14.0454 7.36377 12.62 7.79483 11.4641 8.97537L12.5359 10.0248C13.4049 9.13724 14.2295 9.03402 14.7467 9.2274C15.2555 9.41765 15.75 10.0009 15.75 11.1087H17.25ZM9.54259 15.5133C10.3221 16.1764 10.9428 16.7433 12 16.7433L12 15.2433C11.586 15.2433 11.3828 15.1094 10.5145 14.3708L9.54259 15.5133ZM13.4855 14.3708C12.6172 15.1094 12.414 15.2433 12 15.2433L12 16.7433C13.0572 16.7433 13.6779 16.1764 14.4574 15.5133L13.4855 14.3708Z" fill="currentColor" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M12 22.0002C17.5228 22.0002 22 17.5231 22 12.0002C22 6.4774 17.5228 2.00024 12 2.00024C6.47715 2.00024 2 6.4774 2 12.0002C2 13.5999 2.37562 15.1119 3.04346 16.4527C3.22094 16.809 3.28001 17.2163 3.17712 17.6009L2.58151 19.8269C2.32295 20.7932 3.20701 21.6773 4.17335 21.4187L6.39939 20.8231C6.78393 20.7202 7.19121 20.7793 7.54753 20.9568C8.88837 21.6246 10.4003 22.0002 12 22.0002Z" fill="currentColor" /><path d="M7.5 11.1086C7.5 12.477 8.81884 13.9127 10.0286 14.9419C10.8524 15.6428 11.2644 15.9932 12 15.9932C12.7356 15.9932 13.1476 15.6428 13.9714 14.9419C15.1812 13.9128 16.5 12.477 16.5 11.1085C16.5 8.43139 14.0249 7.43187 12 9.49995C9.97507 7.43187 7.5 8.43139 7.5 11.1086Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M22 12.0002C22 17.5231 17.5228 22.0002 12 22.0002C10.4003 22.0002 8.88837 21.6246 7.54753 20.9568C7.19121 20.7793 6.78393 20.7202 6.39939 20.8231L4.17335 21.4187C3.20701 21.6773 2.32295 20.7932 2.58151 19.8269L3.17712 17.6009C3.28001 17.2163 3.22094 16.809 3.04346 16.4527C2.37562 15.1119 2 13.5999 2 12.0002C2 6.4774 6.47715 2.00024 12 2.00024C17.5228 2.00024 22 6.4774 22 12.0002ZM7.5 11.1087C7.5 12.4771 8.81884 13.9128 10.0286 14.942C10.8524 15.6429 11.2644 15.9933 12 15.9933C12.7356 15.9933 13.1476 15.6429 13.9714 14.942C15.1812 13.9128 16.5 12.4771 16.5 11.1086C16.5 8.43149 14.0249 7.43196 12 9.50005C9.97507 7.43196 7.5 8.43148 7.5 11.1087Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconChatRoundLike as IconComponentType).keywords = [
  "chat",
  "round",
  "like",
  "confabulate",
  "confab",
  "confabulation",
  "chitchat",
  "natter",
  "gossip",
  "visit",
  "chatter",
  "claver",
  "orbicular",
  "rotund",
  "orbiculate",
  "discoidal",
  "disklike",
  "discoid",
  "ringlike",
  "globular",
  "globose",
  "wish",
  "ish",
  "like-minded",
  "suchlike",
  "corresponding",
  "similar",
  "alike",
  "equal",
  "comparable"
];

export default IconChatRoundLike as IconComponentType;