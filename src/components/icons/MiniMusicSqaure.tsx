import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMiniMusicSqaure: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 10V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M15.2701 21.9996C16.0654 21.9996 16.7101 21.3549 16.7101 20.5596C16.7101 19.7643 16.0654 19.1196 15.2701 19.1196C14.4748 19.1196 13.8301 19.7643 13.8301 20.5596C13.8301 21.3549 14.4748 21.9996 15.2701 21.9996Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.9992 19.5998V13.9599C21.9992 12.7599 21.2492 12.5898 20.4792 12.7998L17.5892 13.5899C17.0692 13.7299 16.6992 14.1498 16.6992 14.7498V15.7598V16.4398V20.5698" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20.5611 21.0397C21.3564 21.0397 22.0011 20.395 22.0011 19.5997C22.0011 18.8044 21.3564 18.1597 20.5611 18.1597C19.7658 18.1597 19.1211 18.8044 19.1211 19.5997C19.1211 20.395 19.7658 21.0397 20.5611 21.0397Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.7109 16.4297L22.0009 14.9897" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.7098 17.52C20.3398 18.74 19.6098 19.68 18.5698 20.26C18.5298 20.1 18.5098 19.93 18.5098 19.76C18.5098 18.54 19.4998 17.54 20.7098 17.52Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21 7.52002V15.48C21 15.7 20.99 15.91 20.98 16.12L17.53 17.07V20.71C17.06 20.86 16.55 20.95 15.99 20.98C16.02 20.91 16.03 20.84 16.03 20.76C16.03 20.35 15.69 20.02 15.29 20.02C14.88 20.02 14.54 20.35 14.54 20.76C14.54 20.84 14.55 20.93 14.59 21H7.52C4.07 21 2 18.94 2 15.48V7.52002C2 4.06002 4.07 2 7.52 2H15.48C18.93 2 21 4.06002 21 7.52002Z" fill="currentColor" /><path d="M22.3091 12.25C22.0491 12.06 21.6291 11.86 20.9991 11.92C20.8391 11.93 20.6691 11.96 20.4791 12.01L17.4991 12.8301C16.6091 13.0601 16.0291 13.81 16.0291 14.74V18.6501C15.7991 18.5701 15.5491 18.5201 15.2891 18.5201C14.0491 18.5201 13.0391 19.52 13.0391 20.76C13.0391 20.84 13.0391 20.92 13.0491 21C13.1691 22.12 14.1291 23 15.2891 23C16.5091 23 17.4991 22.01 17.5191 20.8C17.5191 20.78 17.5291 20.77 17.5291 20.76V17.07L20.9791 16.12L21.4991 15.98V17.66C21.2691 17.58 21.0191 17.5201 20.7491 17.5201H20.7091C19.4991 17.5401 18.5091 18.54 18.5091 19.76C18.5091 19.93 18.5291 20.1 18.5691 20.26C18.7991 21.26 19.6891 22.01 20.7491 22.01C21.9791 22.01 22.9691 21.02 22.9891 19.8C22.9891 19.79 22.9991 19.78 22.9991 19.76V13.93C22.9991 13.17 22.7691 12.61 22.3091 12.25ZM15.2891 21.5C14.9591 21.5 14.6791 21.29 14.5891 21C14.5491 20.93 14.5391 20.84 14.5391 20.76C14.5391 20.35 14.8791 20.0201 15.2891 20.0201C15.6891 20.0201 16.0291 20.35 16.0291 20.76C16.0291 20.84 16.0191 20.91 15.9891 20.98C15.8991 21.28 15.6191 21.5 15.2891 21.5ZM20.7491 20.51C20.3491 20.51 20.0091 20.17 20.0091 19.76C20.0091 19.36 20.3491 19.0201 20.7491 19.0201C21.1591 19.0201 21.4991 19.36 21.4991 19.76C21.4991 20.17 21.1591 20.51 20.7491 20.51Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMiniMusicSqaure as IconComponentType).keywords = [
  "mini",
  "music",
  "sqaure",
  "tiny",
  "little",
  "small-scale",
  "micro",
  "small",
  "minimum",
  "minimalist",
  "partial",
  "minor",
  "sheet music",
  "euphony",
  "medicine",
  "melody",
  "symphony",
  "orchestra",
  "musician",
  "song",
  "singing"
];

export default IconMiniMusicSqaure as IconComponentType;