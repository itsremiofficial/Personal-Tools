import { FC } from 'react';

const IconLetterUnread: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M22 10.0002C22.0185 10.7273 22 11.0545 22 12.0002C22 15.7715 22 17.6571 20.8284 18.8287C19.6569 20.0002 17.7712 20.0002 14 20.0002H10C6.22876 20.0002 4.34315 20.0002 3.17157 18.8287C2 17.6571 2 15.7715 2 12.0002C2 8.22901 2 6.34339 3.17157 5.17182C4.34315 4.00024 6.22876 4.00024 10 4.00024H13" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M6 8.00024L8.1589 9.79932C9.99553 11.3299 10.9139 12.0951 12 12.0951C13.0861 12.0951 14.0045 11.3299 15.8411 9.79932" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><circle cx="19" cy="5.00024" r="3" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 5.00024C24 6.6571 22.6569 8.00024 21 8.00024C19.3431 8.00024 18 6.6571 18 5.00024C18 3.34339 19.3431 2.00024 21 2.00024C22.6569 2.00024 24 3.34339 24 5.00024Z" fill="currentColor" /><path d="M17.2339 7.46418L15.6973 8.74469C14.671 9.5999 13.9585 10.1917 13.357 10.5786C12.7747 10.9531 12.3798 11.0788 12.0002 11.0788C11.6206 11.0788 11.2258 10.9531 10.6435 10.5786C10.0419 10.1917 9.32941 9.5999 8.30315 8.74469L5.92837 6.7657C5.57834 6.47401 5.05812 6.5213 4.76643 6.87133C4.47474 7.22136 4.52204 7.74158 4.87206 8.03327L7.28821 10.0467C8.2632 10.8592 9.05344 11.5178 9.75091 11.9664C10.4775 12.4337 11.185 12.7288 12.0002 12.7288C12.8154 12.7288 13.523 12.4337 14.2495 11.9664C14.947 11.5178 15.7372 10.8592 16.7122 10.0467L18.3785 8.65819C17.9274 8.33438 17.5388 7.92923 17.2339 7.46418Z" fill="currentColor" /><path d="M18.4538 6.58744C18.7362 6.53677 19.0372 6.63512 19.234 6.87133C19.3965 7.06638 19.4538 7.31428 19.4121 7.54603C19.0244 7.30369 18.696 6.97523 18.4538 6.58744Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M16.9576 3.02123C16.156 3.00024 15.2437 3.00024 14.2 3.00024H9.8C5.65164 3.00024 3.57746 3.00024 2.28873 4.31826C1 5.63628 1 7.7576 1 12.0002C1 16.2429 1 18.3642 2.28873 19.6822C3.57746 21.0002 5.65164 21.0002 9.8 21.0002H14.2C18.3484 21.0002 20.4225 21.0002 21.7113 19.6822C23 18.3642 23 16.2429 23 12.0002C23 10.9329 23 9.99977 22.9795 9.17995C22.3821 9.47968 21.7103 9.64797 21 9.64797C18.5147 9.64797 16.5 7.58746 16.5 5.0457C16.5 4.31928 16.6646 3.63217 16.9576 3.02123Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 6.00024C22 7.6571 20.6569 9.00024 19 9.00024C17.3431 9.00024 16 7.6571 16 6.00024C16 4.34339 17.3431 3.00024 19 3.00024C20.6569 3.00024 22 4.34339 22 6.00024Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M14 5.00024H10C6.22876 5.00024 4.34315 5.00024 3.17157 6.17182C2 7.34339 2 9.22901 2 13.0002C2 16.7715 2 18.6571 3.17157 19.8287C4.34315 21.0002 6.22876 21.0002 10 21.0002H14C17.7712 21.0002 19.6569 21.0002 20.8284 19.8287C22 18.6571 22 16.7715 22 13.0002C22 11.5469 22 10.3736 21.9329 9.41324C21.1453 10.0907 20.1205 10.5002 19 10.5002C18.5213 10.5002 18.0601 10.4255 17.6274 10.2871L16.2837 11.4068C15.3973 12.1455 14.6789 12.7442 14.0448 13.152C13.3843 13.5768 12.7411 13.8451 12 13.8451C11.2589 13.8451 10.6157 13.5768 9.95518 13.152C9.32112 12.7442 8.60271 12.1455 7.71636 11.4068L5.51986 9.57641C5.20165 9.31124 5.15866 8.83831 5.42383 8.52011C5.68901 8.2019 6.16193 8.15891 6.48014 8.42408L8.63903 10.2232C9.57199 11.0006 10.2197 11.5387 10.7666 11.8904C11.2959 12.2308 11.6549 12.3451 12 12.3451C12.3451 12.3451 12.7041 12.2308 13.2334 11.8904C13.7803 11.5387 14.428 11.0006 15.361 10.2232L16.2004 9.5236C15.1643 8.69918 14.5 7.42728 14.5 6.00024C14.5 5.65662 14.5385 5.322 14.6115 5.00045C14.4133 5.00024 14.2096 5.00024 14 5.00024Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLetterUnread as IconComponent).keywords = [
  "letter",
  "unread",
  "missive",
  "varsity letter",
  "alphabetic character",
  "letter of the alphabet",
  "writing",
  "text",
  "write",
  "alphabetic",
  "courier",
  "uninformed",
  "unused",
  "unutilized",
  "unspent",
  "unencumbered",
  "unwatched",
  "unplayed",
  "unsent",
  "unreviewed"
];

export default IconLetterUnread as IconComponent;