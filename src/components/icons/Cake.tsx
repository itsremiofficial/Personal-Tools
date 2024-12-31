import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCake: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 22H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M3.10938 22V13C3.10938 11.34 4.59938 10 6.43938 10H17.5494C19.3894 10 20.8794 11.34 20.8794 13V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.56055 10V7.17C5.56055 5.97 6.64055 5 7.98055 5H16.0305C17.3605 5 18.4405 5.97 18.4405 7.17V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M3.5293 13.98L3.8993 13.99C4.6393 14 5.2293 14.6 5.2293 15.34V15.67C5.2293 16.41 5.8293 17.02 6.5793 17.02C7.3193 17.02 7.9293 16.42 7.9293 15.67V15.36C7.9293 14.62 8.5293 14.01 9.2793 14.01C10.0193 14.01 10.6293 14.61 10.6293 15.36V15.67C10.6293 16.41 11.2293 17.02 11.9793 17.02C12.7193 17.02 13.3293 16.42 13.3293 15.67V15.36C13.3293 14.62 13.9293 14.01 14.6793 14.01C15.4193 14.01 16.0293 14.61 16.0293 15.36V15.67C16.0293 16.41 16.6293 17.02 17.3793 17.02C18.1193 17.02 18.7293 16.42 18.7293 15.67V15.36C18.7293 14.62 19.3293 14.01 20.0793 14.01H20.5293" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M8 5V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M16 5V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M12 5V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.8894 13V14H20.0194C19.2794 14 18.6794 14.6 18.6794 15.35V15.65C18.6794 16.4 18.0794 17 17.3294 17C16.5894 17 15.9894 16.4 15.9894 15.65V15.35C15.9894 14.6 15.3794 14 14.6394 14C13.8994 14 13.2994 14.6 13.2994 15.35V15.65C13.2994 16.4 12.6894 17 11.9494 17C11.2094 17 10.5994 16.4 10.5994 15.65V15.35C10.5994 14.6 9.99938 14 9.25938 14C8.51938 14 7.90938 14.6 7.90938 15.35V15.65C7.90938 16.4 7.30938 17 6.56938 17C5.81938 17 5.21937 16.4 5.21937 15.65V15.33C5.21937 14.59 4.62938 13.99 3.89938 13.98H3.10938V13C3.10938 11.62 4.14938 10.45 5.55938 10.11C5.83938 10.04 6.12938 10 6.43938 10H17.5594C17.8694 10 18.1594 10.04 18.4394 10.11C19.8494 10.45 20.8894 11.62 20.8894 13Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.4405 7.17V10.11C18.1605 10.04 17.8705 10 17.5605 10H6.44055C6.13055 10 5.84055 10.04 5.56055 10.11V7.17C5.56055 5.97 6.64055 5 7.98055 5H16.0205C17.3605 5 18.4405 5.97 18.4405 7.17Z" fill="currentColor" /><path d="M8.75 3.5499V5.0099H7.98C7.72 5.0099 7.48 5.0399 7.25 5.0999V3.5499C7.25 3.1999 7.59 2.8999 8 2.8999C8.41 2.8999 8.75 3.1999 8.75 3.5499Z" fill="currentColor" /><path d="M16.75 3.33008V5.10008C16.52 5.03008 16.28 5.00008 16.02 5.00008H15.25V3.33008C15.25 2.92008 15.59 2.58008 16 2.58008C16.41 2.58008 16.75 2.92008 16.75 3.33008Z" fill="currentColor" /><path d="M12.75 2.82V5H11.25V2.82C11.25 2.37 11.59 2 12 2C12.41 2 12.75 2.37 12.75 2.82Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.25 20.5H20.89V14H20.02C19.28 14 18.68 14.6 18.68 15.35V15.65C18.68 16.4 18.08 17 17.33 17C16.59 17 15.99 16.4 15.99 15.65V15.35C15.99 14.6 15.38 14 14.64 14C13.9 14 13.3 14.6 13.3 15.35V15.65C13.3 16.4 12.69 17 11.95 17C11.21 17 10.6 16.4 10.6 15.65V15.35C10.6 14.6 10 14 9.26 14C8.52 14 7.91 14.6 7.91 15.35V15.65C7.91 16.4 7.31 17 6.57 17C5.82 17 5.22 16.4 5.22 15.65V15.33C5.22 14.59 4.63 13.99 3.9 13.98H3.11V20.5H2.75C2.34 20.5 2 20.84 2 21.25C2 21.66 2.34 22 2.75 22H3.11H20.89H21.25C21.66 22 22 21.66 22 21.25C22 20.84 21.66 20.5 21.25 20.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCake as IconComponentType).keywords = [
  "cake",
  "coat",
  "bar",
  "patty",
  "doughnut",
  "pudding",
  "fruitcake",
  "twinkie",
  "biscuit",
  "cookie"
];

export default IconCake as IconComponentType;