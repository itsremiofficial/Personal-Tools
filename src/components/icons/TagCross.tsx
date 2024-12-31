import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconTagCross: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2797 20.25H16.9997C19.7597 20.25 21.9997 18.01 21.9997 15.25V8.75C21.9997 5.99 19.7597 3.75 16.9997 3.75H10.2797C8.86969 3.75 7.52969 4.34 6.57969 5.39L3.04969 9.27C1.63969 10.82 1.63969 13.18 3.04969 14.73L6.57969 18.61C7.52969 19.66 8.86969 20.25 10.2797 20.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M16.0005 14.4703L11.0605 9.53027" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M11.0605 14.4703L16.0005 9.53027" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M10.2797 20.25H16.9997C19.7597 20.25 21.9997 18.01 21.9997 15.25V8.75C21.9997 5.99 19.7597 3.75 16.9997 3.75H10.2797C8.86969 3.75 7.52969 4.34 6.57969 5.39L3.04969 9.27C1.63969 10.82 1.63969 13.18 3.04969 14.73L6.57969 18.61C7.52969 19.66 8.86969 20.25 10.2797 20.25Z" fill="currentColor" /><path d="M14.59 12L16.53 10.06C16.82 9.76997 16.82 9.28997 16.53 8.99997C16.24 8.70997 15.76 8.70997 15.47 8.99997L13.53 10.94L11.59 8.99997C11.3 8.70997 10.82 8.70997 10.53 8.99997C10.24 9.28997 10.24 9.76997 10.53 10.06L12.47 12L10.53 13.94C10.24 14.23 10.24 14.71 10.53 15C10.68 15.15 10.87 15.22 11.06 15.22C11.25 15.22 11.44 15.15 11.59 15L13.53 13.06L15.47 15C15.62 15.15 15.81 15.22 16 15.22C16.19 15.22 16.38 15.15 16.53 15C16.82 14.71 16.82 14.23 16.53 13.94L14.59 12Z" fill="currentColor" /></svg> 
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