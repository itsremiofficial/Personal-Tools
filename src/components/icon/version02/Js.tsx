import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconJs: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66992 9L9.65991 16.93C9.65991 18.45 8.01994 19.42 6.68994 18.68L4.17993 17.29C3.85993 17.11 3.66992 16.78 3.66992 16.42V7.6C3.66992 7.24 3.86993 6.90001 4.17993 6.73001L12.1799 2.29001C12.4799 2.12001 12.8499 2.12001 13.1499 2.29001L21.1499 6.73001C21.4699 6.91001 21.6599 7.24 21.6599 7.6V16.42C21.6599 16.78 21.4599 17.12 21.1499 17.29L13.1499 21.73C12.8499 21.9 12.4799 21.9 12.1799 21.73L10.6699 21" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.6699 10.75C17.6699 9.78 16.8899 9 15.9199 9H14.1699C13.1999 9 12.4199 9.78 12.4199 10.75C12.4199 11.72 13.1999 12.5 14.1699 12.5H15.9199C16.8899 12.5 17.6699 13.28 17.6699 14.25C17.6699 15.22 16.8899 16 15.9199 16H14.1699C13.1999 16 12.4199 15.22 12.4199 14.25" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.58" : "1"} d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path d="M12.6702 22.61C12.3802 22.61 12.0902 22.54 11.8202 22.39L10.3401 21.68C9.97015 21.5 9.81017 21.05 9.99017 20.68C10.1702 20.31 10.6102 20.15 10.9902 20.33L12.5002 21.06C12.6102 21.12 12.7102 21.12 12.7802 21.08L20.7802 16.64C20.8602 16.6 20.9102 16.51 20.9102 16.42V7.60002C20.9102 7.51002 20.8602 7.43001 20.7802 7.38001L12.7802 2.94002C12.7002 2.90002 12.6102 2.90002 12.5402 2.94002L4.54016 7.38001C4.46016 7.42001 4.41016 7.51002 4.41016 7.60002V16.42C4.41016 16.51 4.46016 16.59 4.54016 16.64L7.05017 18.03C7.44017 18.25 7.90016 18.24 8.29016 18.01C8.68016 17.78 8.91016 17.38 8.91016 16.93L8.92017 9.00002C8.92017 8.59002 9.26017 8.25002 9.67017 8.25002C10.0802 8.25002 10.4202 8.59002 10.4202 9.00002L10.4102 16.93C10.4102 17.91 9.90017 18.8 9.05017 19.3C8.20017 19.8 7.18019 19.81 6.32019 19.33L3.81018 17.94C3.25018 17.63 2.91016 17.04 2.91016 16.41V7.59001C2.91016 6.96001 3.25018 6.37001 3.81018 6.06001L11.8102 1.62002C12.3402 1.32002 12.9802 1.32002 13.5102 1.62002L21.5102 6.06001C22.0702 6.37001 22.4102 6.96001 22.4102 7.59001V16.41C22.4102 17.04 22.0702 17.63 21.5102 17.94L13.5102 22.38C13.2502 22.53 12.9602 22.61 12.6702 22.61Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.9199 16.75H14.1699C12.7899 16.75 11.6699 15.63 11.6699 14.25C11.6699 13.84 12.0099 13.5 12.4199 13.5C12.8299 13.5 13.1699 13.84 13.1699 14.25C13.1699 14.8 13.6199 15.25 14.1699 15.25H15.9199C16.4699 15.25 16.9199 14.8 16.9199 14.25C16.9199 13.7 16.4699 13.25 15.9199 13.25H14.1699C12.7899 13.25 11.6699 12.13 11.6699 10.75C11.6699 9.37 12.7899 8.25 14.1699 8.25H15.9199C17.2999 8.25 18.4199 9.37 18.4199 10.75C18.4199 11.16 18.0799 11.5 17.6699 11.5C17.2599 11.5 16.9199 11.16 16.9199 10.75C16.9199 10.2 16.4699 9.75 15.9199 9.75H14.1699C13.6199 9.75 13.1699 10.2 13.1699 10.75C13.1699 11.3 13.6199 11.75 14.1699 11.75H15.9199C17.2999 11.75 18.4199 12.87 18.4199 14.25C18.4199 15.63 17.2999 16.75 15.9199 16.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.9199 16.75H14.1699C12.7899 16.75 11.6699 15.63 11.6699 14.25C11.6699 13.84 12.0099 13.5 12.4199 13.5C12.8299 13.5 13.1699 13.84 13.1699 14.25C13.1699 14.8 13.6199 15.25 14.1699 15.25H15.9199C16.4699 15.25 16.9199 14.8 16.9199 14.25C16.9199 13.7 16.4699 13.25 15.9199 13.25H14.1699C12.7899 13.25 11.6699 12.13 11.6699 10.75C11.6699 9.37 12.7899 8.25 14.1699 8.25H15.9199C17.2999 8.25 18.4199 9.37 18.4199 10.75C18.4199 11.16 18.0799 11.5 17.6699 11.5C17.2599 11.5 16.9199 11.16 16.9199 10.75C16.9199 10.2 16.4699 9.75 15.9199 9.75H14.1699C13.6199 9.75 13.1699 10.2 13.1699 10.75C13.1699 11.3 13.6199 11.75 14.1699 11.75H15.9199C17.2999 11.75 18.4199 12.87 18.4199 14.25C18.4199 15.63 17.2999 16.75 15.9199 16.75Z" fill="none" /><path d="M12.6702 22.61C12.3802 22.61 12.0902 22.54 11.8202 22.39L10.3401 21.68C9.97015 21.5 9.81017 21.05 9.99017 20.68C10.1702 20.31 10.6102 20.15 10.9902 20.33L12.5002 21.06C12.6102 21.12 12.7102 21.12 12.7802 21.08L20.7802 16.64C20.8602 16.6 20.9102 16.51 20.9102 16.42V7.6C20.9102 7.51 20.8602 7.43 20.7802 7.38L12.7802 2.94C12.7002 2.9 12.6102 2.9 12.5402 2.94L4.54016 7.38C4.46016 7.42 4.41016 7.51 4.41016 7.6V16.42C4.41016 16.51 4.46016 16.59 4.54016 16.64L7.05017 18.03C7.44017 18.25 7.90016 18.24 8.29016 18.01C8.68016 17.78 8.91016 17.38 8.91016 16.93L8.92017 8.99999C8.92017 8.58999 9.26017 8.24999 9.67017 8.24999C10.0802 8.24999 10.4202 8.58999 10.4202 8.99999L10.4102 16.93C10.4102 17.91 9.90017 18.8 9.05017 19.3C8.20017 19.8 7.18019 19.81 6.32019 19.33L3.81018 17.94C3.25018 17.63 2.91016 17.04 2.91016 16.41V7.58999C2.91016 6.95999 3.25018 6.36999 3.81018 6.05999L11.8102 1.61999C12.3402 1.31999 12.9802 1.31999 13.5102 1.61999L21.5102 6.05999C22.0702 6.36999 22.4102 6.95999 22.4102 7.58999V16.41C22.4102 17.04 22.0702 17.63 21.5102 17.94L13.5102 22.38C13.2502 22.53 12.9602 22.61 12.6702 22.61Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconJs as IconComponentType).keywords = [
  "js",
  "flier",
  "gruss",
  "pinochle",
  "3s",
  "ap"
];

export default IconJs as IconComponentType;