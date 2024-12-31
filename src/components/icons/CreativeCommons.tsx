import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCreativeCommons: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.8792 14.1499C10.3692 14.5899 9.70914 14.8699 8.98914 14.8699C7.40914 14.8699 6.11914 13.5899 6.11914 11.9999C6.11914 10.4099 7.39914 9.12988 8.98914 9.12988C9.71914 9.12988 10.3792 9.39985 10.8792 9.84985" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.8792 14.1499C17.3692 14.5899 16.7091 14.8699 15.9891 14.8699C14.4091 14.8699 13.1191 13.5899 13.1191 11.9999C13.1191 10.4099 14.3991 9.12988 15.9891 9.12988C16.7191 9.12988 17.3792 9.39985 17.8792 9.84985" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22Z" fill="currentColor" /><path d="M8.98914 15.6199C6.98914 15.6199 5.36914 13.9999 5.36914 11.9999C5.36914 9.99988 6.98914 8.37988 8.98914 8.37988C9.86914 8.37988 10.7092 8.69991 11.3792 9.27991C11.6892 9.54991 11.7192 10.0299 11.4492 10.3399C11.1792 10.6499 10.6992 10.6799 10.3892 10.4099C9.99916 10.0699 9.50914 9.87988 8.98914 9.87988C7.81914 9.87988 6.86914 10.8299 6.86914 11.9999C6.86914 13.1699 7.81914 14.1199 8.98914 14.1199C9.49914 14.1199 9.99916 13.9299 10.3892 13.5899C10.6992 13.3199 11.1792 13.3499 11.4492 13.6599C11.7192 13.9699 11.6892 14.4498 11.3792 14.7198C10.7092 15.2998 9.85914 15.6199 8.98914 15.6199Z" fill="currentColor" /><path d="M15.9891 15.6199C13.9891 15.6199 12.3691 13.9999 12.3691 11.9999C12.3691 9.99988 13.9891 8.37988 15.9891 8.37988C16.8691 8.37988 17.7092 8.69991 18.3792 9.27991C18.6892 9.54991 18.7192 10.0299 18.4492 10.3399C18.1792 10.6499 17.6992 10.6799 17.3892 10.4099C16.9992 10.0699 16.5091 9.87988 15.9891 9.87988C14.8191 9.87988 13.8691 10.8299 13.8691 11.9999C13.8691 13.1699 14.8191 14.1199 15.9891 14.1199C16.4991 14.1199 16.9992 13.9299 17.3892 13.5899C17.6992 13.3199 18.1792 13.3499 18.4492 13.6599C18.7192 13.9699 18.6892 14.4498 18.3792 14.7198C17.7092 15.2998 16.8591 15.6199 15.9891 15.6199Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCreativeCommons as IconComponentType).keywords = [
  "creative",
  "commons",
  "imaginative",
  "inventive",
  "ingenious",
  "originative",
  "notional",
  "fictive",
  "generative",
  "fanciful",
  "constructive",
  "commonalty",
  "commonality",
  "park",
  "common land",
  "green",
  "commune",
  "joint",
  "cooperative",
  "collective"
];

export default IconCreativeCommons as IconComponentType;