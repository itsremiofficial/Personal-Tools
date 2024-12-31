import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconTagUser: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.41 21.42C12.63 22.19 11.36 22.19 10.58 21.42L8.87 19.73C8.31 19.17 7.54 18.86 6.75 18.86H6C4.34 18.86 3 17.53 3 15.89V4.97C3 3.33 4.34 2 6 2H18C19.66 2 21 3.33 21 4.97V15.88C21 17.52 19.66 18.86 18 18.86Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.0691 8.9498C12.0291 8.9498 11.9691 8.9498 11.9191 8.9498C10.8691 8.9098 10.0391 8.0598 10.0391 6.9998C10.0391 5.9198 10.9091 5.0498 11.9891 5.0498C13.0691 5.0498 13.9391 5.9298 13.9391 6.9998C13.9491 8.0598 13.1191 8.9198 12.0691 8.9498Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.24945 11.96C7.91945 12.85 7.91945 14.3 9.24945 15.19C10.7595 16.2 13.2395 16.2 14.7495 15.19C16.0795 14.3 16.0795 12.85 14.7495 11.96C13.2395 10.96 10.7695 10.96 9.24945 11.96Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.0691 8.95005C12.0291 8.95005 11.9691 8.95005 11.9191 8.95005C10.8691 8.91005 10.0391 8.06005 10.0391 7.00005C10.0391 5.92005 10.9091 5.05005 11.9891 5.05005C13.0691 5.05005 13.9391 5.93005 13.9391 7.00005C13.9491 8.06005 13.1191 8.92005 12.0691 8.95005Z" fill="currentColor" /><path d="M9.24945 11.96C7.91945 12.85 7.91945 14.3 9.24945 15.19C10.7595 16.2 13.2395 16.2 14.7495 15.19C16.0795 14.3 16.0795 12.85 14.7495 11.96C13.2395 10.96 10.7695 10.96 9.24945 11.96Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18 2H6C4.34 2 3 3.33 3 4.97V15.88C3 17.52 4.34 18.85 6 18.85H6.76C7.56 18.85 8.32 19.16 8.88 19.72L10.59 21.41C11.37 22.18 12.64 22.18 13.42 21.41L15.13 19.72C15.69 19.16 16.46 18.85 17.25 18.85H18C19.66 18.85 21 17.52 21 15.88V4.97C21 3.33 19.66 2 18 2ZM12 5.05C13.08 5.05 13.95 5.93 13.95 7C13.95 8.06 13.11 8.91 12.07 8.95C12.03 8.95 11.97 8.95 11.92 8.95C10.87 8.91 10.04 8.06 10.04 7C10.05 5.93 10.92 5.05 12 5.05ZM14.75 15.19C13.24 16.2 10.76 16.2 9.25 15.19C7.92 14.31 7.92 12.85 9.25 11.96C10.77 10.95 13.25 10.95 14.75 11.96C16.08 12.85 16.08 14.3 14.75 15.19Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTagUser as IconComponentType).keywords = [
  "tag",
  "user",
  "label",
  "mark",
  "trail",
  "chase",
  "go after",
  "tag end",
  "dog",
  "shred",
  "chase after",
  "exploiter",
  "enjoyer",
  "drug user",
  "substance abuser",
  "customer",
  "client",
  "employer",
  "consumer",
  "employee"
];

export default IconTagUser as IconComponentType;