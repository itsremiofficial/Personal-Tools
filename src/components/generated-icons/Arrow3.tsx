import { FC } from 'react';
import { IconProps } from "@/types";

const IconArrow3: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M10.4498 6.71997L6.72974 3L3.00977 6.71997" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.73047 21V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M13.5508 17.2803L17.2708 21.0002L20.9908 17.2803" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.2695 3V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10.9795 6.19L7.2695 2.47998C7.1995 2.40998 7.10949 2.35 7.00949 2.31C6.99949 2.31 6.98946 2.30999 6.97946 2.29999C6.89946 2.26999 6.80945 2.25 6.71945 2.25C6.51945 2.25 6.32948 2.32997 6.18948 2.46997L2.46945 6.19C2.17945 6.48 2.17945 6.96 2.46945 7.25C2.75945 7.54 3.23951 7.54 3.52951 7.25L5.97946 4.79999V21C5.97946 21.41 6.31946 21.75 6.72946 21.75C7.13946 21.75 7.47946 21.41 7.47946 21V4.81L9.91947 7.25C10.0695 7.4 10.2595 7.46997 10.4495 7.46997C10.6395 7.46997 10.8295 7.4 10.9795 7.25C11.2695 6.96 11.2695 6.49 10.9795 6.19Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.5302 16.75C21.2402 16.46 20.7602 16.46 20.4702 16.75L18.0202 19.2V3C18.0202 2.59 17.6802 2.25 17.2702 2.25C16.8602 2.25 16.5202 2.59 16.5202 3V19.19L14.0802 16.75C13.7902 16.46 13.3102 16.46 13.0202 16.75C12.7302 17.04 12.7302 17.52 13.0202 17.81L16.7302 21.52C16.8002 21.59 16.8902 21.65 16.9902 21.69C17.0002 21.69 17.0102 21.69 17.0202 21.7C17.1002 21.73 17.1902 21.75 17.2802 21.75C17.4802 21.75 17.6702 21.67 17.8102 21.53L21.5302 17.81C21.8202 17.51 21.8202 17.04 21.5302 16.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconArrow3;