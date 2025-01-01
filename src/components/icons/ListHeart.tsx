import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconListHeart: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5203 18.341L16.0758 18.9451H16.0758L16.5203 18.341ZM17.5 13.8299L16.9737 14.3642C17.2657 14.6517 17.7343 14.6517 18.0263 14.3642L17.5 13.8299ZM18.4797 18.341L18.0351 17.737L18.4797 18.341ZM17.5 18.8204L17.5 19.5704L17.5 18.8204ZM16.9649 17.737C16.4677 17.3711 15.8871 16.8913 15.4382 16.3743C14.9683 15.8331 14.75 15.3735 14.75 15.0363H13.25C13.25 15.934 13.7742 16.7457 14.3056 17.3577C14.858 17.9939 15.5376 18.549 16.0758 18.9451L16.9649 17.737ZM14.75 15.0363C14.75 14.2798 15.0929 13.9197 15.4138 13.804C15.7508 13.6825 16.3333 13.7335 16.9737 14.3642L18.0263 13.2955C17.0918 12.3752 15.9243 12.0254 14.905 12.3929C13.8697 12.7663 13.25 13.7849 13.25 15.0363H14.75ZM18.9242 18.9451C19.4624 18.549 20.142 17.9939 20.6944 17.3578C21.2258 16.7457 21.75 15.934 21.75 15.0363H20.25C20.25 15.3735 20.0317 15.8331 19.5618 16.3743C19.1129 16.8913 18.5323 17.3711 18.0351 17.737L18.9242 18.9451ZM21.75 15.0363C21.75 13.7849 21.1303 12.7662 20.095 12.3929C19.0757 12.0254 17.9082 12.3752 16.9737 13.2955L18.0263 14.3642C18.6667 13.7335 19.2492 13.6825 19.5862 13.804C19.9071 13.9197 20.25 14.2798 20.25 15.0363H21.75ZM16.0758 18.9451C16.4541 19.2234 16.8783 19.5704 17.5 19.5704L17.5 18.0704C17.4796 18.0704 17.4637 18.0713 17.4032 18.0389C17.3121 17.9903 17.1982 17.9086 16.9649 17.737L16.0758 18.9451ZM18.0351 17.737C17.8019 17.9086 17.688 17.9903 17.5968 18.0389C17.5363 18.0713 17.5204 18.0704 17.5 18.0704L17.5 19.5704C18.1217 19.5704 18.5459 19.2234 18.9242 18.9451L18.0351 17.737Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M21 6.00024L3 6.00024" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M21 10.0002L3 10.0002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M10 14.0002H3" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M10 18.0002H3" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.5" : "1"}><path fillRule="evenodd" clipRule="evenodd" d="M2.25 6.00024C2.25 5.58603 2.58579 5.25024 3 5.25024H21C21.4142 5.25024 21.75 5.58603 21.75 6.00024C21.75 6.41446 21.4142 6.75024 21 6.75024H3C2.58579 6.75024 2.25 6.41446 2.25 6.00024ZM2.25 10.0002C2.25 9.58603 2.58579 9.25024 3 9.25024H21C21.4142 9.25024 21.75 9.58603 21.75 10.0002C21.75 10.4145 21.4142 10.7502 21 10.7502H3C2.58579 10.7502 2.25 10.4145 2.25 10.0002ZM2.25 14.0002C2.25 13.586 2.58579 13.2502 3 13.2502H10C10.4142 13.2502 10.75 13.586 10.75 14.0002C10.75 14.4145 10.4142 14.7502 10 14.7502H3C2.58579 14.7502 2.25 14.4145 2.25 14.0002ZM2.25 18.0002C2.25 17.586 2.58579 17.2502 3 17.2502H10C10.4142 17.2502 10.75 17.586 10.75 18.0002C10.75 18.4145 10.4142 18.7502 10 18.7502H3C2.58579 18.7502 2.25 18.4145 2.25 18.0002Z" fill="currentColor" /></g><path d="M14 15.0363C14 16.2711 15.4849 17.5791 16.5203 18.341C16.9546 18.6606 17.1717 18.8204 17.5 18.8204C17.8283 18.8204 18.0454 18.6606 18.4797 18.341C19.5151 17.5791 21 16.2712 21 15.0363C21 13.0284 19.0749 12.2788 17.5 13.8299C15.9251 12.2788 14 13.0284 14 15.0363Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 15.0363C14 16.2711 15.4849 17.5791 16.5203 18.341C16.9546 18.6606 17.1717 18.8204 17.5 18.8204C17.8283 18.8204 18.0454 18.6606 18.4797 18.341C19.5151 17.5791 21 16.2712 21 15.0363C21 13.0284 19.0749 12.2788 17.5 13.8299C15.9251 12.2788 14 13.0284 14 15.0363Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M2.25 6.00024C2.25 5.58603 2.58579 5.25024 3 5.25024H21C21.4142 5.25024 21.75 5.58603 21.75 6.00024C21.75 6.41446 21.4142 6.75024 21 6.75024H3C2.58579 6.75024 2.25 6.41446 2.25 6.00024ZM2.25 10.0002C2.25 9.58603 2.58579 9.25024 3 9.25024H21C21.4142 9.25024 21.75 9.58603 21.75 10.0002C21.75 10.4145 21.4142 10.7502 21 10.7502H3C2.58579 10.7502 2.25 10.4145 2.25 10.0002ZM2.25 14.0002C2.25 13.586 2.58579 13.2502 3 13.2502H10C10.4142 13.2502 10.75 13.586 10.75 14.0002C10.75 14.4145 10.4142 14.7502 10 14.7502H3C2.58579 14.7502 2.25 14.4145 2.25 14.0002ZM2.25 18.0002C2.25 17.586 2.58579 17.2502 3 17.2502H10C10.4142 17.2502 10.75 17.586 10.75 18.0002C10.75 18.4145 10.4142 18.7502 10 18.7502H3C2.58579 18.7502 2.25 18.4145 2.25 18.0002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconListHeart as IconComponentType).keywords = [
  "list",
  "heart",
  "tilt",
  "inclination",
  "lean",
  "leaning",
  "name",
  "number",
  "sheet",
  "heel",
  "table",
  "nerve",
  "marrow",
  "eye",
  "nub",
  "pith",
  "bosom",
  "spunk",
  "core",
  "meat"
];

export default IconListHeart as IconComponentType;