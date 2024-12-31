import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconGridLock: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 11V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M2.0293 8.5H21.9993" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M2.0293 15.5H11.9993" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.50977 21.9897V2.00977" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.5098 11.9897V2.00977" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M15.5996 17.2V16.4C15.5996 15.07 15.9996 14 17.9996 14C19.9996 14 20.3996 15.07 20.3996 16.4V17.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20 22.0002H16C14.4 22.0002 14 21.6002 14 20.0002V19.2002C14 17.6002 14.4 17.2002 16 17.2002H20C21.6 17.2002 22 17.6002 22 19.2002V20.0002C22 21.6002 21.6 22.0002 20 22.0002Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.5298 17.31V17.15C21.5298 15.22 20.5498 14.25 18.6298 14.25C16.7098 14.25 15.7298 15.23 15.7298 17.15V17.31C14.6798 17.57 14.2598 18.29 14.2598 19.73V20.47C14.2598 22.32 14.9498 23 16.7898 23H20.4698C22.3198 23 22.9998 22.31 22.9998 20.47V19.73C22.9998 18.3 22.5798 17.57 21.5298 17.31ZM18.6198 15.63C19.9098 15.63 20.1398 16.12 20.1398 17.15V17.2H17.0998V17.15C17.0998 16.12 17.3298 15.63 18.6198 15.63Z" fill="currentColor" /><path d="M8.38971 2.16992V8.61993H1.92969V7.93994C1.92969 4.32994 4.0797 2.17993 7.6897 2.17993H8.38971V2.16992Z" fill="currentColor" /><path d="M21.7698 7.93018C21.7698 8.31018 21.4598 8.61017 21.0898 8.61017H15.3398V2.16016H16.0099C19.1899 2.17016 21.7698 4.75018 21.7698 7.93018Z" fill="currentColor" /><path d="M8.38947 15.5503V21.3103C8.38947 21.6903 8.07944 21.9903 7.70944 21.9903H7.69946C4.51946 21.9903 1.93945 19.4103 1.93945 16.2303V15.5503H8.38947Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M8.39944 8.61035H1.93945V15.5504H8.39944V8.61035Z" fill="currentColor" /><path d="M15.3306 8.61035V14.5504C15.3306 15.1004 14.8806 15.5504 14.3306 15.5504H8.39062V8.61035H15.3306Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.3306 2.16992H8.39062V8.61993H15.3306V2.16992Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGridLock as IconComponentType).keywords = [
  "grid",
  "lock",
  "gridiron",
  "control grid",
  "power grid",
  "power system",
  "reference grid",
  "crossword",
  "card",
  "bars",
  "parcel",
  "interlock",
  "lock in",
  "mesh",
  "interlace",
  "whorl",
  "lock away",
  "curl",
  "ringlet",
  "put away"
];

export default IconGridLock as IconComponentType;