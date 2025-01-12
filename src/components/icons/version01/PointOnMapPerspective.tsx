import { FC } from 'react';

const IconPointOnMapPerspective: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M21 21.0002L3 11.0002M3.5 21.0002L12 16.0002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M17 8.00024C18.6569 8.00024 20 6.6571 20 5.00024C20 3.34339 18.6569 2.00024 17 2.00024C15.3431 2.00024 14 3.34339 14 5.00024C14 6.6571 15.3431 8.00024 17 8.00024ZM17 8.00024V13.0002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M21.1213 21.1216C22 20.2429 22 18.8287 22 16.0002C22 13.1718 22 11.7576 21.1213 10.8789M21.1213 21.1216C20.2426 22.0002 18.8284 22.0002 16 22.0002H8C5.17157 22.0002 3.75736 22.0002 2.87868 21.1216M21.1213 21.1216V21.1216ZM21.1213 10.8789C20.2426 10.0002 18.8284 10.0002 16 10.0002L8 10.0002C5.17157 10.0002 3.75736 10.0002 2.87868 10.8789M21.1213 10.8789V10.8789ZM2.87868 10.8789C2 11.7576 2 13.1718 2 16.0002C2 18.8287 2 20.2429 2.87868 21.1216M2.87868 10.8789V10.8789ZM2.87868 21.1216V21.1216Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M22 16.0002C22 13.1718 22 11.7576 21.1213 10.8789C20.6314 10.389 19.9751 10.1723 19 10.0764C18.1667 10.051 16.2001 10.0002 15 10.0002H8C5.95512 10.0002 4.64944 10.0002 3.75091 10.3323L21.6868 20.197C22 19.3003 22 18.0058 22 16.0002Z" fill="currentColor" /><path d="M10.7576 15.8981L2.51112 11.3625C2 12.2638 2 13.6394 2 16.0005C2 18.6662 2 20.0757 2.73557 20.9646L10.7576 15.8981Z" fill="currentColor" /><path d="M8.00004 22.0004H16C18.4823 22.0004 19.8753 22.0004 20.773 21.4065L12.2591 16.7239L4.21582 21.8038C5.08709 22.0004 6.28296 22.0004 8.00004 22.0004Z" fill="currentColor" /><path d="M17 2.00024C15.3431 2.00024 14 3.34339 14 5.00024C14 6.39812 14.9561 7.5727 16.25 7.90573L16.25 13.0002C16.25 13.4145 16.5858 13.7502 17 13.7502C17.4142 13.7502 17.75 13.4145 17.75 13.0002V7.90573C19.0439 7.5727 20 6.39812 20 5.00024C20 3.34339 18.6569 2.00024 17 2.00024Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 2.00024C15.3431 2.00024 14 3.34339 14 5.00024C14 6.39812 14.9561 7.5727 16.25 7.90573L16.25 13.0002C16.25 13.4145 16.5858 13.7502 17 13.7502C17.4142 13.7502 17.75 13.4145 17.75 13.0002V7.90573C19.0439 7.5727 20 6.39812 20 5.00024C20 3.34339 18.6569 2.00024 17 2.00024Z" fill="currentColor" /><path d="M8 22.0002H16C18.4822 22.0002 19.8752 22.0002 20.773 21.4063L12.2591 16.7237L4.21578 21.8037C5.08705 22.0002 6.28293 22.0002 8 22.0002Z" fill="currentColor" /><path d="M10.7576 15.8979L2.51112 11.3623C2 12.2636 2 13.6392 2 16.0002C2 18.6659 2 20.0755 2.73557 20.9644L10.7576 15.8979Z" fill="currentColor" /><path d="M22 16.0002C22 13.1718 22 11.7576 21.1213 10.8789C20.6314 10.389 19.9751 10.1723 19 10.0764V13.0002C19 14.1048 18.1046 15.0002 17 15.0002C15.8954 15.0002 15 14.1048 15 13.0002V10.0002H8C5.95512 10.0002 4.64944 10.0002 3.75091 10.3323L21.6868 20.197C22 19.3003 22 18.0058 22 16.0002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPointOnMapPerspective as IconComponent).keywords = [
  "point",
  "on",
  "map",
  "perspective",
  "item",
  "betoken",
  "indicate",
  "bespeak",
  "period",
  "point in time",
  "show",
  "stage",
  "detail",
  "bps",
  "add",
  "nso",
  "our",
  "bsi",
  "nbs",
  "opti",
  "sno",
  "weap",
  "map out",
  "correspondence",
  "represent",
  "chart",
  "cartography",
  "cartographic",
  "topography",
  "plan",
  "charting",
  "view",
  "position",
  "linear perspective",
  "viewpoint",
  "vista",
  "standpoint",
  "outlook",
  "prospect",
  "aspect"
];

export default IconPointOnMapPerspective as IconComponent;