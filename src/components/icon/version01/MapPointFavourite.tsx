import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMapPointFavourite: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M4 10.1435C4 5.64612 7.58172 2.00024 12 2.00024C16.4183 2.00024 20 5.64612 20 10.1435C20 14.6057 17.4467 19.8127 13.4629 21.6747C12.5343 22.1088 11.4657 22.1088 10.5371 21.6747C6.55332 19.8127 4 14.6057 4 10.1435Z" stroke="currentColor" strokeWidth={width} /><path d="M11.0429 11.5218L10.5891 12.1189H10.5891L11.0429 11.5218ZM12 7.71629L11.4719 8.24883C11.7643 8.53877 12.2357 8.53877 12.5281 8.24883L12 7.71629ZM12.9571 11.5218L13.4109 12.1189L12.9571 11.5218ZM12 12.0002L12 11.2502H12L12 12.0002ZM11.4967 10.9246C11.0789 10.6071 10.6177 10.21 10.2679 9.7911C9.90066 9.35133 9.75 8.99889 9.75 8.75758H8.25C8.25 9.53586 8.68177 10.2319 9.11649 10.7525C9.56863 11.294 10.1288 11.7691 10.5891 12.1189L11.4967 10.9246ZM9.75 8.75758C9.75 8.13534 10.0269 7.87092 10.2497 7.79001C10.4873 7.70375 10.9433 7.72462 11.4719 8.24883L12.5281 7.18375C11.7068 6.36923 10.6627 6.04424 9.73781 6.38006C8.79816 6.72123 8.25 7.64682 8.25 8.75758H9.75ZM13.4109 12.1189C13.8712 11.7692 14.4314 11.294 14.8835 10.7525C15.3182 10.2319 15.75 9.53586 15.75 8.75757H14.25C14.25 8.9989 14.0993 9.35134 13.7321 9.79111C13.3824 10.21 12.9211 10.6071 12.5034 10.9246L13.4109 12.1189ZM15.75 8.75757C15.75 7.64682 15.2018 6.72122 14.2622 6.38006C13.3373 6.04425 12.2932 6.36923 11.4719 7.18375L12.5281 8.24883C13.0567 7.72462 13.5127 7.70375 13.7503 7.79001C13.9731 7.87092 14.25 8.13533 14.25 8.75757H15.75ZM10.5891 12.1189C10.9545 12.3966 11.3725 12.7502 12 12.7502L12 11.2502C11.9808 11.2502 11.9691 11.2517 11.9158 11.2225C11.8303 11.1758 11.7231 11.0967 11.4967 10.9246L10.5891 12.1189ZM12.5034 10.9246C12.2769 11.0967 12.1697 11.1758 12.0842 11.2225C12.0309 11.2517 12.0192 11.2502 12 11.2502L12 12.7502C12.6275 12.7502 13.0455 12.3966 13.4109 12.1189L12.5034 10.9246Z" fill="currentColor" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M10.5371 21.6747C11.4657 22.1088 12.5343 22.1088 13.4629 21.6747C17.4467 19.8127 20 14.6057 20 10.1435C20 5.64612 16.4183 2.00024 12 2.00024C7.58172 2.00024 4 5.64612 4 10.1435C4 14.6057 6.55332 19.8127 10.5371 21.6747Z" fill="currentColor" /><path d="M10.7238 13.3304C9.55314 12.3962 8 10.8879 8 9.46052C8 7.03431 10.2001 6.12849 12 8.0027C13.7999 6.12849 16 7.03431 16 9.4605C16 10.888 14.4469 12.3963 13.2762 13.3304C12.7165 13.777 12.4367 14.0002 12 14.0002C11.5633 14.0002 11.2835 13.777 10.7238 13.3304Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 2.00024C7.58172 2.00024 4 5.64612 4 10.1435C4 14.6057 6.55332 19.8127 10.5371 21.6747C11.4657 22.1088 12.5343 22.1088 13.4629 21.6747C17.4467 19.8127 20 14.6057 20 10.1435C20 5.64612 16.4183 2.00024 12 2.00024ZM9 8.75758C9 9.77717 10.1649 10.8545 11.0429 11.5218C11.4626 11.8407 11.6725 12.0002 12 12.0002C12.3275 12.0002 12.5374 11.8408 12.9571 11.5218C13.8351 10.8545 15 9.77719 15 8.75757C15 7.02458 13.35 6.37756 12 7.71629C10.65 6.37756 9 7.02458 9 8.75758Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMapPointFavourite as IconComponentType).keywords = [
  "map",
  "point",
  "favourite",
  "map out",
  "correspondence",
  "represent",
  "chart",
  "cartography",
  "cartographic",
  "topography",
  "plan",
  "charting",
  "item",
  "betoken",
  "indicate",
  "bespeak",
  "period",
  "point in time",
  "show",
  "stage",
  "detail",
  "preferred",
  "favored",
  "favorite",
  "popular",
  "loved",
  "deary",
  "darling",
  "dearie",
  "front-runner"
];

export default IconMapPointFavourite as IconComponentType;