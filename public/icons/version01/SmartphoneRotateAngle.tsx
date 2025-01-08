import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSmartphoneRotateAngle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M15 5.00012H9" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M3.50523 15.588C3.82989 15.3307 3.88455 14.859 3.62731 14.5344C3.37008 14.2097 2.89836 14.155 2.5737 14.4123L3.50523 15.588ZM12 20.6876L12.4939 21.2521C12.6566 21.1096 12.75 20.9039 12.75 20.6876C12.75 20.4714 12.6566 20.2656 12.4939 20.1232L12 20.6876ZM10.5 19.3751L10.9939 18.8107C10.7724 18.6169 10.4581 18.5705 10.1901 18.6921C9.9221 18.8137 9.75 19.0808 9.75 19.3751H10.5ZM10.5 22.0001H9.75C9.75 22.2944 9.9221 22.5615 10.1901 22.6831C10.4581 22.8047 10.7724 22.7583 10.9939 22.5646L10.5 22.0001ZM2.75 16.7501C2.75 16.4431 2.93157 16.0425 3.50523 15.588L2.5737 14.4123C1.81667 15.0121 1.25 15.7999 1.25 16.7501H2.75ZM12.4939 20.1232L10.9939 18.8107L10.0061 19.9396L11.5061 21.2521L12.4939 20.1232ZM10.9939 22.5646L12.4939 21.2521L11.5061 20.1232L10.0061 21.4357L10.9939 22.5646ZM9.75 19.3751V20.6436H11.25V19.3751H9.75ZM9.75 20.6436V22.0001H11.25V20.6436H9.75ZM10.5443 19.8949C8.20148 19.7562 6.17254 19.2898 4.75556 18.6472C4.04582 18.3253 3.52438 17.9748 3.19064 17.6297C2.86028 17.2882 2.75 16.9931 2.75 16.7501H1.25C1.25 17.4941 1.60081 18.1436 2.11244 18.6726C2.62069 19.198 3.32214 19.6441 4.13599 20.0132C5.76619 20.7526 7.98726 21.2461 10.4557 21.3923L10.5443 19.8949Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M20.9605 15.0001C21.6259 15.5273 22 16.1215 22 16.7501C22 18.5848 18.8131 20.1265 14.5 20.5636" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M5.50174 17.0001C5.5 16.6879 5.5 16.3552 5.5 16.0001V8.00012C5.5 5.17169 5.5 3.75748 6.37868 2.8788C7.25736 2.00012 8.67157 2.00012 11.5 2.00012H12.5C15.3284 2.00012 16.7426 2.00012 17.6213 2.8788C18.5 3.75748 18.5 5.17169 18.5 8.00012V16.0001C18.5 16.3552 18.5 16.6879 18.4983 17.0001" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.62731 14.5344C3.88455 14.859 3.82989 15.3308 3.50523 15.588C2.93157 16.0425 2.75 16.4432 2.75 16.7502C2.75 17.0166 2.88413 17.3496 3.29688 17.7339C3.71071 18.1191 4.35043 18.5006 5.20371 18.8365C6.41418 19.3132 7.97893 19.6688 9.75 19.8344V19.3752C9.75 19.0809 9.9221 18.8138 10.1901 18.6922C10.4581 18.5706 10.7724 18.6169 10.9939 18.8107L12.4939 20.1232C12.6566 20.2656 12.75 20.4714 12.75 20.6877C12.75 20.9039 12.6566 21.1097 12.4939 21.2521L10.9939 22.5646C10.7724 22.7584 10.4581 22.8047 10.1901 22.6831C9.9221 22.5615 9.75 22.2944 9.75 22.0002V21.3405C7.80576 21.17 6.04974 20.7818 4.65415 20.2322C3.69779 19.8557 2.87304 19.3887 2.27482 18.8318C1.67551 18.2738 1.25 17.571 1.25 16.7502C1.25 15.7999 1.81667 15.0121 2.5737 14.4123C2.89836 14.1551 3.37008 14.2097 3.62731 14.5344ZM20.3727 14.5344C20.6299 14.2097 21.1016 14.1551 21.4263 14.4123C22.1833 15.0121 22.75 15.7999 22.75 16.7502C22.75 18.1282 21.5819 19.1607 20.2034 19.8515C18.7617 20.5739 16.791 21.0853 14.5756 21.3098C14.1635 21.3515 13.7956 21.0513 13.7538 20.6392C13.7121 20.2271 14.0123 19.8592 14.4244 19.8174C16.522 19.6048 18.3014 19.1268 19.5314 18.5105C20.8246 17.8625 21.25 17.2068 21.25 16.7502C21.25 16.4432 21.0684 16.0425 20.4948 15.588C20.1701 15.3308 20.1155 14.859 20.3727 14.5344Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M19 9.00012V19.0001C19 19.0001 14.8431 21.0001 12 21.0001C9.15694 21.0001 5 19.0001 5 19.0001V9.00012C5 6.1912 5 4.78674 5.67412 3.77784C5.96596 3.34108 6.34096 2.96608 6.77772 2.67424C7.78661 2.00012 9.19108 2.00012 12 2.00012C14.8089 2.00012 16.2134 2.00012 17.2223 2.67424C17.659 2.96608 18.034 3.34108 18.3259 3.77784C19 4.78674 19 6.1912 19 9.00012Z" fill="currentColor" /><path d="M9 4.25012C8.58579 4.25012 8.25 4.58591 8.25 5.00012C8.25 5.41434 8.58579 5.75012 9 5.75012H15C15.4142 5.75012 15.75 5.41434 15.75 5.00012C15.75 4.58591 15.4142 4.25012 15 4.25012H9Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M19 9.00012V14.9343C19 15.5934 18.6469 16.2019 18.0746 16.5289C14.3105 18.6798 9.68952 18.6798 5.92538 16.5289C5.35315 16.2019 5 15.5934 5 14.9343V9.00012C5 6.1912 5 4.78674 5.67412 3.77784C5.96596 3.34108 6.34096 2.96608 6.77772 2.67424C7.78661 2.00012 9.19108 2.00012 12 2.00012C14.8089 2.00012 16.2134 2.00012 17.2223 2.67424C17.659 2.96608 18.034 3.34108 18.3259 3.77784C19 4.78674 19 6.1912 19 9.00012ZM9 4.25012C8.58579 4.25012 8.25 4.58591 8.25 5.00012C8.25 5.41434 8.58579 5.75012 9 5.75012H15C15.4142 5.75012 15.75 5.41434 15.75 5.00012C15.75 4.58591 15.4142 4.25012 15 4.25012H9Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M3.62731 14.5344C3.88455 14.859 3.82989 15.3307 3.50523 15.588C2.93157 16.0425 2.75 16.4431 2.75 16.7501C2.75 17.0166 2.88413 17.3496 3.29688 17.7338C3.71071 18.1191 4.35043 18.5005 5.20371 18.8365C6.41418 19.3131 7.97893 19.6687 9.75 19.8344V19.3751C9.75 19.0808 9.9221 18.8137 10.1901 18.6921C10.4581 18.5705 10.7724 18.6169 10.9939 18.8107L12.4939 20.1232C12.6566 20.2656 12.75 20.4713 12.75 20.6876C12.75 20.9039 12.6566 21.1096 12.4939 21.2521L10.9939 22.5646C10.7724 22.7583 10.4581 22.8047 10.1901 22.6831C9.9221 22.5615 9.75 22.2944 9.75 22.0001V21.3405C7.80576 21.1699 6.04974 20.7817 4.65415 20.2322C3.69779 19.8556 2.87304 19.3886 2.27482 18.8317C1.67551 18.2738 1.25 17.571 1.25 16.7501C1.25 15.7999 1.81667 15.0121 2.5737 14.4123C2.89836 14.155 3.37008 14.2097 3.62731 14.5344ZM20.3727 14.5344C20.6299 14.2097 21.1016 14.155 21.4263 14.4123C22.1833 15.0121 22.75 15.7999 22.75 16.7501C22.75 18.1282 21.5819 19.1607 20.2034 19.8515C18.7617 20.5739 16.791 21.0852 14.5756 21.3098C14.1635 21.3515 13.7956 21.0513 13.7538 20.6392C13.7121 20.2271 14.0123 19.8592 14.4244 19.8174C16.522 19.6048 18.3014 19.1268 19.5314 18.5104C20.8246 17.8624 21.25 17.2068 21.25 16.7501C21.25 16.4431 21.0684 16.0425 20.4948 15.588C20.1701 15.3307 20.1155 14.859 20.3727 14.5344Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSmartphoneRotateAngle as IconComponentType).keywords = [
  "smartphone",
  "rotate",
  "angle",
  "intelligent",
  "smart",
  "screenphone",
  "featurephone",
  "superphone",
  "touchphone",
  "mobile device",
  "cellular phone",
  "smartwatch",
  "go around",
  "revolve",
  "rotation",
  "rotational",
  "slue",
  "turn",
  "tilt",
  "spinning",
  "counterclockwise",
  "weight",
  "slant",
  "lean",
  "tip",
  "fish",
  "side",
  "prism",
  "dimension"
];

export default IconSmartphoneRotateAngle as IconComponentType;