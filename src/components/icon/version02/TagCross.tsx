import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconTagCross: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9496 20.25H17.6696C20.4296 20.25 22.6696 18.01 22.6696 15.25V8.75C22.6696 5.99 20.4296 3.75 17.6696 3.75H10.9496C9.53961 3.75 8.19961 4.34 7.24961 5.39L3.71961 9.27C2.30961 10.82 2.30961 13.18 3.71961 14.73L7.24961 18.61C8.19961 19.66 9.53961 20.25 10.9496 20.25Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M16.6705 14.4703L11.7305 9.53027" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M11.7305 14.4703L16.6705 9.53027" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M10.9496 20.25H17.6696C20.4296 20.25 22.6696 18.01 22.6696 15.25V8.75C22.6696 5.99 20.4296 3.75 17.6696 3.75H10.9496C9.53961 3.75 8.19961 4.34 7.24961 5.39L3.71961 9.27C2.30961 10.82 2.30961 13.18 3.71961 14.73L7.24961 18.61C8.19961 19.66 9.53961 20.25 10.9496 20.25Z" fill="currentColor" /><path d="M15.2599 12L17.1999 10.06C17.4899 9.77 17.4899 9.29 17.1999 9C16.9099 8.71 16.4299 8.71 16.1399 9L14.1999 10.94L12.2599 9C11.9699 8.71 11.4899 8.71 11.1999 9C10.9099 9.29 10.9099 9.77 11.1999 10.06L13.1399 12L11.1999 13.94C10.9099 14.23 10.9099 14.71 11.1999 15C11.3499 15.15 11.5399 15.22 11.7299 15.22C11.9199 15.22 12.1099 15.15 12.2599 15L14.1999 13.06L16.1399 15C16.2899 15.15 16.4799 15.22 16.6699 15.22C16.8599 15.22 17.0499 15.15 17.1999 15C17.4899 14.71 17.4899 14.23 17.1999 13.94L15.2599 12Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6696 3.75H10.9496C9.53961 3.75 8.19961 4.34 7.24961 5.39L3.71961 9.27C2.30961 10.82 2.30961 13.18 3.71961 14.73L7.24961 18.61C8.19961 19.65 9.53961 20.25 10.9496 20.25H17.6696C20.4296 20.25 22.6696 18.01 22.6696 15.25V8.75C22.6696 5.99 20.4296 3.75 17.6696 3.75ZM17.1996 13.94C17.4896 14.23 17.4896 14.71 17.1996 15C17.0496 15.15 16.8596 15.22 16.6696 15.22C16.4796 15.22 16.2896 15.15 16.1396 15L14.1996 13.06L12.2596 15C12.1096 15.15 11.9196 15.22 11.7296 15.22C11.5396 15.22 11.3496 15.15 11.1996 15C10.9096 14.71 10.9096 14.23 11.1996 13.94L13.1396 12L11.1996 10.06C10.9096 9.77 10.9096 9.29 11.1996 9C11.4896 8.71 11.9696 8.71 12.2596 9L14.1996 10.94L16.1396 9C16.4296 8.71 16.9096 8.71 17.1996 9C17.4896 9.29 17.4896 9.77 17.1996 10.06L15.2596 12L17.1996 13.94Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTagCross as IconComponentType).keywords = [
  "tag",
  "cross",
  "label",
  "mark",
  "trail",
  "chase",
  "go after",
  "tag end",
  "dog",
  "shred",
  "chase after",
  "foil",
  "crisscross",
  "intersect",
  "transverse",
  "transversal",
  "crosswise",
  "cut across",
  "hybridization"
];

export default IconTagCross as IconComponentType;