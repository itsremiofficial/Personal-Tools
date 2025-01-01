import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconPet: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.41064 16.75C4.17064 19.64 6.35064 22 9.25064 22H14.0406C17.3006 22 19.5406 19.37 19.0006 16.15C18.4306 12.77 15.1706 10 11.7406 10C8.02064 10 4.72064 13.04 4.41064 16.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M10.4707 7.5C11.8514 7.5 12.9707 6.38071 12.9707 5C12.9707 3.61929 11.8514 2.5 10.4707 2.5C9.08999 2.5 7.9707 3.61929 7.9707 5C7.9707 6.38071 9.08999 7.5 10.4707 7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M17.3008 8.7002C18.4053 8.7002 19.3008 7.80476 19.3008 6.7002C19.3008 5.59563 18.4053 4.7002 17.3008 4.7002C16.1962 4.7002 15.3008 5.59563 15.3008 6.7002C15.3008 7.80476 16.1962 8.7002 17.3008 8.7002Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M21 12.7002C21.8284 12.7002 22.5 12.0286 22.5 11.2002C22.5 10.3718 21.8284 9.7002 21 9.7002C20.1716 9.7002 19.5 10.3718 19.5 11.2002C19.5 12.0286 20.1716 12.7002 21 12.7002Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M3.9707 10.7002C5.07527 10.7002 5.9707 9.80476 5.9707 8.7002C5.9707 7.59563 5.07527 6.7002 3.9707 6.7002C2.86613 6.7002 1.9707 7.59563 1.9707 8.7002C1.9707 9.80476 2.86613 10.7002 3.9707 10.7002Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.0803 15.7201C18.4903 12.1901 15.1003 9.32007 11.5203 9.32007C7.63028 9.32007 4.21028 12.4701 3.88028 16.3501C3.75028 17.8501 4.23028 19.2701 5.22028 20.3401C6.20028 21.4101 7.58028 22.0001 9.08028 22.0001H13.7603C15.4503 22.0001 16.9303 21.3401 17.9403 20.1501C18.9503 18.9601 19.3503 17.3801 19.0803 15.7201Z" fill="currentColor" /><path d="M10.2796 7.86C11.8978 7.86 13.2096 6.54819 13.2096 4.93C13.2096 3.31181 11.8978 2 10.2796 2C8.66141 2 7.34961 3.31181 7.34961 4.93C7.34961 6.54819 8.66141 7.86 10.2796 7.86Z" fill="currentColor" /><path d="M16.94 9.0299C18.2876 9.0299 19.38 7.93748 19.38 6.5899C19.38 5.24233 18.2876 4.1499 16.94 4.1499C15.5924 4.1499 14.5 5.24233 14.5 6.5899C14.5 7.93748 15.5924 9.0299 16.94 9.0299Z" fill="currentColor" /><path d="M20.5496 12.93C21.6266 12.93 22.4996 12.057 22.4996 10.98C22.4996 9.90307 21.6266 9.03003 20.5496 9.03003C19.4727 9.03003 18.5996 9.90307 18.5996 10.98C18.5996 12.057 19.4727 12.93 20.5496 12.93Z" fill="currentColor" /><path d="M3.94 10.9801C5.28757 10.9801 6.38 9.88767 6.38 8.5401C6.38 7.19252 5.28757 6.1001 3.94 6.1001C2.59243 6.1001 1.5 7.19252 1.5 8.5401C1.5 9.88767 2.59243 10.9801 3.94 10.9801Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPet as IconComponentType).keywords = [
  "pet",
  "ducky",
  "positron emission tomography",
  "dearie",
  "deary",
  "loved",
  "darling",
  "favored",
  "favorite",
  "favourite"
];

export default IconPet as IconComponentType;