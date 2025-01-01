import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconChatRound: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22.0002C17.5228 22.0002 22 17.5231 22 12.0002C22 6.4774 17.5228 2.00024 12 2.00024C6.47715 2.00024 2 6.4774 2 12.0002C2 13.5999 2.37562 15.1119 3.04346 16.4527C3.22094 16.809 3.28001 17.2163 3.17712 17.6009L2.58151 19.8269C2.32295 20.7932 3.20701 21.6773 4.17335 21.4187L6.39939 20.8231C6.78393 20.7202 7.19121 20.7793 7.54753 20.9568C8.88837 21.6246 10.4003 22.0002 12 22.0002Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.45648 3.08963C4.21754 4.74447 2 8.11339 2 12.0002C2 13.5999 2.37562 15.1119 3.04346 16.4527C3.22094 16.809 3.28001 17.2163 3.17712 17.6008L2.58151 19.8269C2.32295 20.7932 3.20701 21.6773 4.17335 21.4187L6.39939 20.8231C6.78393 20.7202 7.19121 20.7793 7.54753 20.9568C8.88836 21.6246 10.4003 22.0002 12 22.0002C16.8853 22.0002 20.9524 18.4971 21.8263 13.8658C20.1758 15.7849 17.7298 17.0002 15 17.0002C10.0294 17.0002 6 12.9708 6 8.00024C6 6.18848 6.53534 4.50176 7.45648 3.08963Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M21.8263 13.8658C21.9403 13.2614 22 12.6378 22 12.0002C22 6.4774 17.5228 2.00024 12 2.00024C10.4467 2.00024 8.97611 2.35439 7.66459 2.98635C7.59476 3.02 7.52539 3.05443 7.45648 3.08964C6.53534 4.50177 6 6.18849 6 8.00024C6 12.9708 10.0294 17.0002 15 17.0002C17.7298 17.0002 20.1758 15.7849 21.8263 13.8658Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22.0002C17.5228 22.0002 22 17.5231 22 12.0002C22 6.4774 17.5228 2.00024 12 2.00024C6.47715 2.00024 2 6.4774 2 12.0002C2 13.5999 2.37562 15.1119 3.04346 16.4527C3.22094 16.809 3.28001 17.2163 3.17712 17.6009L2.58151 19.8269C2.32295 20.7932 3.20701 21.6773 4.17335 21.4187L6.39939 20.8231C6.78393 20.7202 7.19121 20.7793 7.54753 20.9568C8.88836 21.6246 10.4003 22.0002 12 22.0002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconChatRound as IconComponentType).keywords = [
  "chat",
  "round",
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
  "globose"
];

export default IconChatRound as IconComponentType;