import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconChatRoundDots: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.5" : "1"}><path d="M9 12.0002C9 12.5525 8.55228 13.0002 8 13.0002C7.44772 13.0002 7 12.5525 7 12.0002C7 11.448 7.44772 11.0002 8 11.0002C8.55228 11.0002 9 11.448 9 12.0002Z" fill="currentColor" /><path d="M13 12.0002C13 12.5525 12.5523 13.0002 12 13.0002C11.4477 13.0002 11 12.5525 11 12.0002C11 11.448 11.4477 11.0002 12 11.0002C12.5523 11.0002 13 11.448 13 12.0002Z" fill="currentColor" /><path d="M17 12.0002C17 12.5525 16.5523 13.0002 16 13.0002C15.4477 13.0002 15 12.5525 15 12.0002C15 11.448 15.4477 11.0002 16 11.0002C16.5523 11.0002 17 11.448 17 12.0002Z" fill="currentColor" /></g><path d="M12 22.0002C17.5228 22.0002 22 17.5231 22 12.0002C22 6.4774 17.5228 2.00024 12 2.00024C6.47715 2.00024 2 6.4774 2 12.0002C2 13.5999 2.37562 15.1119 3.04346 16.4527C3.22094 16.809 3.28001 17.2163 3.17712 17.6009L2.58151 19.8269C2.32295 20.7932 3.20701 21.6773 4.17335 21.4187L6.39939 20.8231C6.78393 20.7202 7.19121 20.7793 7.54753 20.9568C8.88837 21.6246 10.4003 22.0002 12 22.0002Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M12 23.0002C18.0751 23.0002 23 18.0754 23 12.0002C23 5.92511 18.0751 1.00024 12 1.00024C5.92487 1.00024 1 5.92511 1 12.0002C1 13.7599 1.41318 15.423 2.14781 16.898C2.34303 17.2899 2.40801 17.7379 2.29483 18.1609L1.63966 20.6096C1.35525 21.6725 2.32772 22.645 3.39068 22.3606L5.83932 21.7054C6.26233 21.5922 6.71033 21.6572 7.10228 21.8524C8.5772 22.5871 10.2404 23.0002 12 23.0002Z" fill="currentColor" /><path d="M10.9 12.0006C10.9 12.6081 11.3925 13.1006 12 13.1006C12.6075 13.1006 13.1 12.6081 13.1 12.0006C13.1 11.3931 12.6075 10.9006 12 10.9006C11.3925 10.9006 10.9 11.3931 10.9 12.0006Z" fill="currentColor" /><path d="M6.5 12.0006C6.5 12.6081 6.99249 13.1006 7.6 13.1006C8.20751 13.1006 8.7 12.6081 8.7 12.0006C8.7 11.3931 8.20751 10.9006 7.6 10.9006C6.99249 10.9006 6.5 11.3931 6.5 12.0006Z" fill="currentColor" /><path d="M15.3 12.0006C15.3 12.6081 15.7925 13.1006 16.4 13.1006C17.0075 13.1006 17.5 12.6081 17.5 12.0006C17.5 11.3931 17.0075 10.9006 16.4 10.9006C15.7925 10.9006 15.3 11.3931 15.3 12.0006Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M22 12.0002C22 17.5231 17.5228 22.0002 12 22.0002C10.4003 22.0002 8.88836 21.6246 7.54753 20.9568C7.19121 20.7793 6.78393 20.7202 6.39939 20.8231L4.17335 21.4187C3.20701 21.6773 2.32295 20.7932 2.58151 19.8269L3.17712 17.6009C3.28001 17.2163 3.22094 16.809 3.04346 16.4527C2.37562 15.1119 2 13.5999 2 12.0002C2 6.4774 6.47715 2.00024 12 2.00024C17.5228 2.00024 22 6.4774 22 12.0002ZM6.5 12.0006C6.5 12.6081 6.99249 13.1006 7.6 13.1006C8.20751 13.1006 8.7 12.6081 8.7 12.0006C8.7 11.3931 8.20751 10.9006 7.6 10.9006C6.99249 10.9006 6.5 11.3931 6.5 12.0006ZM10.9 12.0006C10.9 12.6081 11.3925 13.1006 12 13.1006C12.6075 13.1006 13.1 12.6081 13.1 12.0006C13.1 11.3931 12.6075 10.9006 12 10.9006C11.3925 10.9006 10.9 11.3931 10.9 12.0006ZM16.4 13.1006C15.7925 13.1006 15.3 12.6081 15.3 12.0006C15.3 11.3931 15.7925 10.9006 16.4 10.9006C17.0075 10.9006 17.5 11.3931 17.5 12.0006C17.5 12.6081 17.0075 13.1006 16.4 13.1006Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconChatRoundDots as IconComponentType).keywords = [
  "chat",
  "round",
  "dots",
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
  "sprinkle",
  "scatter",
  "disperse",
  "dust",
  "dit",
  "stud",
  "point",
  "constellate",
  "pts"
];

export default IconChatRoundDots as IconComponentType;