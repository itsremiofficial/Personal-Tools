import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconDropper3: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.5071V10.0002C22 8.11463 22 7.17182 21.4142 6.58603C20.8284 6.00024 19.8856 6.00024 18 6.00024H14C12.1144 6.00024 11.1716 6.00024 10.5858 6.58603C10 7.17182 10 8.11463 10 10.0002V16.5071C10 17.1642 10.277 17.7908 10.7629 18.2331C13.7315 20.9353 18.2685 20.9353 21.2371 18.2331C21.723 17.7908 22 17.1642 22 16.5071Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M18 16.0002H14" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M18 11.4169C18 12.5675 17.1046 13.5002 16 13.5002C14.8954 13.5002 14 12.5675 14 11.4169C14 10.697 14.783 9.73613 15.3691 9.11767C15.7161 8.75155 16.2839 8.75155 16.6309 9.11767C17.217 9.73613 18 10.697 18 11.4169Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M16 21.0002V22.0002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M2 22.0002V8.00024C2 5.17182 2 3.7576 2.87868 2.87892C3.75736 2.00024 5.17157 2.00024 8 2.00024H11.8913L11.9355 2.00032C12.6224 2.00527 13.2869 2.24583 13.8178 2.68181L13.8517 2.71C13.8926 2.74407 13.913 2.7611 13.9309 2.77557C14.5341 3.26274 15.2747 3.48059 16 3.43605M18.5 2.00024L17.9774 2.52285C17.9398 2.56048 17.9209 2.5793 17.9044 2.59533C17.3724 3.11122 16.6932 3.39348 16 3.43605M16 2.00024V3.43605M16 3.43605V6.00024" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M22 16.5071V10.0002C22 8.11463 22 7.17182 21.4142 6.58603C20.8284 6.00024 19.8856 6.00024 18 6.00024H14C12.1144 6.00024 11.1716 6.00024 10.5858 6.58603C10 7.17182 10 8.11463 10 10.0002V16.5071C10 17.1642 10.277 17.7908 10.7629 18.2331C13.7315 20.9353 18.2685 20.9353 21.2371 18.2331C21.723 17.7908 22 17.1642 22 16.5071ZM13.25 16.0002C13.25 15.586 13.5858 15.2502 14 15.2502H18C18.4142 15.2502 18.75 15.586 18.75 16.0002C18.75 16.4145 18.4142 16.7502 18 16.7502H14C13.5858 16.7502 13.25 16.4145 13.25 16.0002ZM16 13.5002C17.1046 13.5002 18 12.5674 18 11.4168C18 10.6969 17.217 9.73607 16.6309 9.11761C16.2839 8.75149 15.7161 8.75149 15.3691 9.11761C14.783 9.73607 14 10.6969 14 11.4168C14 12.5674 14.8954 13.5002 16 13.5002Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M14.2937 2.1022C13.6301 1.55723 12.7996 1.25652 11.9409 1.25033L11.8927 1.25024H7.94513C6.57755 1.25023 5.47521 1.25021 4.60825 1.36677C3.70814 1.48779 2.95027 1.74668 2.34835 2.3486C1.74644 2.95051 1.48754 3.70839 1.36653 4.60849C1.24997 5.47546 1.24998 6.57777 1.25 7.94534L1.25 22.2502C1.25 22.6645 1.58579 23.0002 2 23.0002C2.41422 23.0002 2.75 22.6645 2.75 22.2502V8.00025C2.75 6.56483 2.7516 5.56372 2.85315 4.80837C2.9518 4.07459 3.13225 3.68602 3.40901 3.40926C3.68577 3.13249 4.07435 2.95205 4.80812 2.85339L8 2.75025H11.8907L11.9301 2.7503L11.932 2.75032C12.4459 2.75445 12.9429 2.93441 13.3403 3.26024L13.3418 3.26142L13.3726 3.28701L13.3767 3.29045C13.4124 3.32023 13.4373 3.34098 13.4597 3.35903C13.9929 3.78969 14.6125 4.05198 15.25 4.14896V6.00025H16.75V4.07373C17.3633 3.91634 17.9437 3.60197 18.4266 3.13373C18.4473 3.11359 18.47 3.0909 18.5033 3.05762L19.0303 2.53058C19.3232 2.23768 19.3232 1.76281 19.0303 1.46992C18.7374 1.17702 18.2626 1.17702 17.9697 1.46992L17.4471 1.99253C17.4075 2.03206 17.3937 2.0459 17.3823 2.05692C17.1927 2.24075 16.9785 2.38498 16.75 2.48919V2.00025C16.75 1.58603 16.4142 1.25024 16 1.25024C15.5858 1.25024 15.25 1.58603 15.25 2.00025V2.61981C14.9482 2.54158 14.6588 2.39933 14.4022 2.19211L14.3318 2.13383L14.2969 2.10479L14.2937 2.1022Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M15.25 20.2236V21.2502C15.25 21.6645 15.5858 22.0002 16 22.0002C16.4142 22.0002 16.75 21.6645 16.75 21.2502V20.2236C16.2512 20.2717 15.7488 20.2717 15.25 20.2236Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M22 10.0002V16.5071C22 17.1642 21.723 17.7908 21.2371 18.2331C19.9508 19.404 18.3701 20.0675 16.75 20.2237V21.2502C16.75 21.6645 16.4142 22.0002 16 22.0002C15.5858 22.0002 15.25 21.6645 15.25 21.2502V20.2237C13.6299 20.0675 12.0492 19.404 10.7629 18.2331C10.277 17.7908 10 17.1642 10 16.5071V10.0002C10 8.11463 10 7.17182 10.5858 6.58603C11.1716 6.00024 12.1144 6.00024 14 6.00024H18C19.8856 6.00024 20.8284 6.00024 21.4142 6.58603C22 7.17182 22 8.11463 22 10.0002ZM14 15.2502C13.5858 15.2502 13.25 15.586 13.25 16.0002C13.25 16.4145 13.5858 16.7502 14 16.7502H18C18.4142 16.7502 18.75 16.4145 18.75 16.0002C18.75 15.586 18.4142 15.2502 18 15.2502H14ZM18 11.4169C18 12.5675 17.1046 13.5002 16 13.5002C14.8954 13.5002 14 12.5675 14 11.4169C14 10.697 14.783 9.73614 15.3691 9.11768C15.7161 8.75156 16.2839 8.75156 16.6309 9.11768C17.217 9.73614 18 10.697 18 11.4169Z" fill="currentColor" /><path d="M14.2937 2.1022C13.6301 1.55723 12.7996 1.25652 11.9409 1.25033L11.8927 1.25024H7.94513C6.57755 1.25023 5.47521 1.25021 4.60825 1.36677C3.70814 1.48779 2.95027 1.74668 2.34835 2.3486C1.74644 2.95051 1.48754 3.70839 1.36653 4.60849C1.24997 5.47546 1.24998 6.57777 1.25 7.94534L1.25 22.2502C1.25 22.6645 1.58579 23.0002 2 23.0002C2.41422 23.0002 2.75 22.6645 2.75 22.2502V8.00025C2.75 6.56483 2.7516 5.56372 2.85315 4.80837C2.9518 4.07459 3.13225 3.68602 3.40901 3.40926C3.68577 3.13249 4.07435 2.95205 4.80812 2.85339L8 2.75025H11.8907L11.9301 2.7503L11.932 2.75032C12.4459 2.75445 12.9429 2.93441 13.3403 3.26024L13.3418 3.26142L13.3726 3.28701L13.3767 3.29045C13.4124 3.32023 13.4373 3.34098 13.4597 3.35903C13.9929 3.78969 14.6125 4.05198 15.25 4.14896V6.00025H16.75V4.07373C17.3633 3.91634 17.9437 3.60197 18.4266 3.13373C18.4473 3.11359 18.47 3.0909 18.5033 3.05762L19.0303 2.53058C19.3232 2.23768 19.3232 1.76281 19.0303 1.46992C18.7374 1.17702 18.2626 1.17702 17.9697 1.46992L17.4471 1.99253C17.4075 2.03206 17.3937 2.0459 17.3823 2.05692C17.1927 2.24075 16.9785 2.38498 16.75 2.48919V2.00025C16.75 1.58603 16.4142 1.25024 16 1.25024C15.5858 1.25024 15.25 1.58603 15.25 2.00025V2.61981C14.9482 2.54158 14.6588 2.39933 14.4022 2.19211L14.3318 2.13383L14.2969 2.10479L14.2937 2.1022Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDropper3 as IconComponentType).keywords = [
  "dropper",
  "3",
  "eye dropper",
  "strainer",
  "sieve",
  "colander",
  "eyedropper",
  "dropperful",
  "dripper",
  "syringe",
  "drops",
  "omega",
  "wash out",
  "cut up",
  "pull out",
  "pull up",
  "pull over",
  "pull in",
  "work out",
  "ride down"
];

export default IconDropper3 as IconComponentType;