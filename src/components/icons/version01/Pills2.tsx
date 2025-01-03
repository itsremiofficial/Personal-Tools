import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconPills2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5355 10.5358C12.4404 9.63096 13 8.38096 13 7.00024C13 4.23882 10.7614 2.00024 8 2.00024C6.61929 2.00024 5.36929 2.55989 4.46447 3.46471M11.5355 10.5358C10.6307 11.4406 9.38071 12.0002 8 12.0002C5.23858 12.0002 3 9.76167 3 7.00024C3 5.61953 3.55964 4.36953 4.46447 3.46471M11.5355 10.5358L4.46447 3.46471" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M22 17.0002C22 15.7206 21.5118 14.441 20.5355 13.4647C18.5829 11.5121 15.4171 11.5121 13.4645 13.4647C12.4882 14.441 12 15.7206 12 17.0002M22 17.0002C22 18.2799 21.5118 19.5595 20.5355 20.5358C18.5829 22.4884 15.4171 22.4884 13.4645 20.5358C12.4882 19.5595 12 18.2799 12 17.0002M22 17.0002H12" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M13.4645 20.5358C15.4171 22.4884 18.5829 22.4884 20.5355 20.5358C21.5118 19.5595 22 18.2799 22 17.0002C22 15.7206 21.5118 14.441 20.5355 13.4647C18.5829 11.5121 15.4171 11.5121 13.4645 13.4647C12.4882 14.441 12 15.7206 12 17.0002C12 18.2799 12.4882 19.5595 13.4645 20.5358Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M3 7.00024C3 9.76167 5.23858 12.0002 8 12.0002C9.38071 12.0002 10.6307 11.4406 11.5355 10.5358C12.4404 9.63096 13 8.38096 13 7.00024C13 4.23882 10.7614 2.00024 8 2.00024C6.61929 2.00024 5.36929 2.55989 4.46447 3.46471C3.55964 4.36953 3 5.61953 3 7.00024Z" fill="currentColor" /><path d="M12.0562 17.7502H21.9438C21.9813 17.5018 22 17.251 22 17.0002C22 16.7495 21.9813 16.4987 21.9438 16.2502H12.0562C12.0187 16.4987 12 16.7495 12 17.0002C12 17.251 12.0187 17.5018 12.0562 17.7502Z" fill="currentColor" /><path d="M3.97388 4.03478L10.9654 11.0263C11.1676 10.8771 11.3582 10.7131 11.5355 10.5358C11.7128 10.3584 11.8769 10.1679 12.0261 9.96565L5.03454 2.97412C4.83232 3.12331 4.64175 3.28737 4.46444 3.46468C4.28712 3.642 4.12307 3.83257 3.97388 4.03478Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0261 9.96568C12.6382 9.13602 13 8.11038 13 7.00024C13 4.23882 10.7614 2.00024 8 2.00024C6.88986 2.00024 5.86422 2.36204 5.03456 2.97415L12.0261 9.96568Z" fill="currentColor" /><path d="M10.9654 11.0263C10.1358 11.6385 9.11014 12.0002 8 12.0002C5.23858 12.0002 3 9.76167 3 7.00024C3 5.89011 3.36179 4.86447 3.9739 4.03481L10.9654 11.0263Z" fill="currentColor" /><path d="M21.9438 16.2502C21.79 15.2308 21.3206 14.2497 20.5356 13.4647C18.5829 11.5121 15.4171 11.5121 13.4645 13.4647C12.6795 14.2497 12.2101 15.2308 12.0563 16.2502H21.9438Z" fill="currentColor" /><path d="M21.9438 17.7502H12.0563C12.2101 18.7697 12.6795 19.7508 13.4645 20.5358C15.4171 22.4884 18.5829 22.4884 20.5356 20.5358C21.3206 19.7508 21.79 18.7697 21.9438 17.7502Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPills2 as IconComponentType).keywords = [
  "pills",
  "2",
  "tablet",
  "lozenge",
  "anovulatory drug",
  "birth control pill",
  "contraceptive pill",
  "oral contraceptive",
  "oral contraceptive pill",
  "antibilious",
  "aspirins",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out"
];

export default IconPills2 as IconComponentType;