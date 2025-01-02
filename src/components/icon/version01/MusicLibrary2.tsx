import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMusicLibrary2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.90565 13.793C2.48385 10.6294 2.27294 9.04765 3.16932 8.02383C4.0657 7 5.66147 7 8.85302 7H15.1468C18.3384 7 19.9341 7 20.8305 8.02383C21.7269 9.04765 21.516 10.6294 21.0942 13.793L20.6942 16.793C20.3634 19.2739 20.198 20.5143 19.3495 21.2572C18.5011 22 17.2497 22 14.7468 22H9.25302C6.75018 22 5.49877 22 4.6503 21.2572C3.80183 20.5143 3.63644 19.2739 3.30565 16.793L2.90565 13.793Z" stroke="currentColor" strokeWidth={width} /><path d="M12 17C12 17.8284 11.3284 18.5 10.5 18.5C9.67157 18.5 9 17.8284 9 17C9 16.1716 9.67157 15.5 10.5 15.5C11.3284 15.5 12 16.1716 12 17ZM12 17V10.5C12 12.1569 13.8954 13.5 15 13.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.5" : "1"} d="M19.562 7C19.7906 5.69523 18.7866 4.5 17.4619 4.5H6.53812C5.21347 4.5 4.20946 5.69523 4.43809 7M17.5 4.5C17.5284 4.24092 17.5426 4.11135 17.5428 4.00435C17.5451 2.98072 16.774 2.12064 15.7562 2.01142C15.6498 2 15.5195 2 15.2589 2H8.74109C8.48044 2 8.35012 2 8.24372 2.01142C7.22594 2.12064 6.45491 2.98072 6.45713 4.00434C6.45736 4.11135 6.47155 4.2409 6.49993 4.5" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M14.9948 7.54199H9.00515C5.96782 7.54199 4.44915 7.54199 3.59609 8.52881C2.74302 9.51563 2.94373 11.0402 3.34516 14.0894L3.72583 16.981C4.04063 19.3722 4.19803 20.5678 5.0055 21.2838C5.81297 21.9998 7.00392 21.9998 9.38581 21.9998H14.6142C16.9961 21.9998 18.187 21.9998 18.9945 21.2838C19.802 20.5678 19.9594 19.3722 20.2742 16.981L20.6548 14.0894C21.0563 11.0402 21.257 9.51563 20.4039 8.52881C19.5509 7.54199 18.0322 7.54199 14.9948 7.54199ZM12.75 10.5C12.75 10.0858 12.4142 9.75 12 9.75C11.5858 9.75 11.25 10.0858 11.25 10.5V14.878C11.0154 14.7951 10.763 14.75 10.5 14.75C9.25736 14.75 8.25 15.7574 8.25 17C8.25 18.2426 9.25736 19.25 10.5 19.25C11.7426 19.25 12.75 18.2426 12.75 17V13.3197C13.4202 13.8634 14.2617 14.25 15 14.25C15.4142 14.25 15.75 13.9142 15.75 13.5C15.75 13.0858 15.4142 12.75 15 12.75C14.6946 12.75 14.1145 12.5314 13.5835 12.0603C13.0654 11.6006 12.75 11.0386 12.75 10.5Z" fill="currentColor" /><path opacity={duotone ? "0.7" : "1"} d="M6.87957 4.72266C5.62801 4.72266 4.60177 5.5624 4.2593 6.67643C4.25216 6.69965 4.24531 6.723 4.23877 6.74645C4.5971 6.62588 4.97003 6.54712 5.34755 6.49334C6.31989 6.35484 7.54869 6.35491 8.97611 6.35499H15.179C16.6064 6.35491 17.8352 6.35484 18.8076 6.49334C19.1851 6.54712 19.558 6.62588 19.9164 6.74645C19.9098 6.723 19.903 6.69966 19.8958 6.67643C19.5534 5.5624 18.5271 4.72266 17.2756 4.72266H6.87957Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M8.85899 2.00001H15.1411C15.3503 1.99995 15.5107 1.99991 15.651 2.01515C16.648 2.12351 17.4641 2.78957 17.8101 3.68676H6.18994C6.53601 2.78957 7.35208 2.12351 8.34912 2.01515C8.48935 1.99991 8.64976 1.99995 8.85899 2.00001Z" fill="currentColor" /><path d="M10.5 16.25C10.9142 16.25 11.25 16.5858 11.25 17C11.25 17.4142 10.9142 17.75 10.5 17.75C10.0858 17.75 9.75 17.4142 9.75 17C9.75 16.5858 10.0858 16.25 10.5 16.25Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.8589 2.00001H15.141C15.3502 1.99995 15.5106 1.99991 15.6509 2.01515C16.6479 2.12351 17.464 2.78957 17.81 3.68676H6.18985C6.53591 2.78957 7.35199 2.12351 8.34903 2.01515C8.48926 1.99991 8.64967 1.99995 8.8589 2.00001Z" fill="currentColor" /><path d="M6.87946 4.72309C5.6279 4.72309 4.60167 5.56284 4.25919 6.67687C4.25205 6.70009 4.24521 6.72343 4.23866 6.74689C4.597 6.62632 4.96993 6.54755 5.34745 6.49378C6.31978 6.35527 7.54858 6.35534 8.97601 6.35543H15.1789C16.6063 6.35534 17.8351 6.35527 18.8075 6.49378C19.185 6.54755 19.5579 6.62632 19.9163 6.74689C19.9097 6.72343 19.9029 6.70009 19.8957 6.67687C19.5533 5.56284 18.527 4.72309 17.2755 4.72309H6.87946Z" fill="currentColor" /><path d="M10.5 16.25C10.9142 16.25 11.25 16.5858 11.25 17C11.25 17.4142 10.9142 17.75 10.5 17.75C10.0858 17.75 9.75 17.4142 9.75 17C9.75 16.5858 10.0858 16.25 10.5 16.25Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M14.9948 7.54199H9.00515C5.96782 7.54199 4.44915 7.54199 3.59609 8.52881C2.74302 9.51563 2.94373 11.0402 3.34516 14.0894L3.72583 16.981C4.04063 19.3722 4.19803 20.5678 5.0055 21.2838C5.81297 21.9998 7.00392 21.9998 9.38581 21.9998H14.6142C16.9961 21.9998 18.187 21.9998 18.9945 21.2838C19.802 20.5678 19.9594 19.3722 20.2742 16.981L20.6548 14.0894C21.0563 11.0402 21.257 9.51563 20.4039 8.52881C19.5509 7.54199 18.0322 7.54199 14.9948 7.54199ZM12.75 10.5C12.75 10.0858 12.4142 9.75 12 9.75C11.5858 9.75 11.25 10.0858 11.25 10.5V14.878C11.0154 14.7951 10.763 14.75 10.5 14.75C9.25736 14.75 8.25 15.7574 8.25 17C8.25 18.2426 9.25736 19.25 10.5 19.25C11.7426 19.25 12.75 18.2426 12.75 17V13.3197C13.4202 13.8634 14.2617 14.25 15 14.25C15.4142 14.25 15.75 13.9142 15.75 13.5C15.75 13.0858 15.4142 12.75 15 12.75C14.6946 12.75 14.1145 12.5314 13.5835 12.0603C13.0654 11.6006 12.75 11.0386 12.75 10.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMusicLibrary2 as IconComponentType).keywords = [
  "music",
  "library",
  "2",
  "sheet music",
  "euphony",
  "medicine",
  "melody",
  "symphony",
  "orchestra",
  "musician",
  "song",
  "singing",
  "depository library",
  "program library",
  "librarianship",
  "librarian",
  "bookstore",
  "catalogue",
  "bookselling",
  "bookshop",
  "bibliotheca",
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

export default IconMusicLibrary2 as IconComponentType;