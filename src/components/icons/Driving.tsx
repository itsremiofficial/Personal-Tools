import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconDriving: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5512 2H9.45117C7.65117 2 7.25118 2.90001 7.02118 4.01001L6.20117 7.92999H17.8012L16.9812 4.01001C16.7512 2.90001 16.3512 2 14.5512 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.2405 14.3199C19.3205 15.1699 18.6405 15.9 17.7705 15.9H16.4105C15.6305 15.9 15.5205 15.57 15.3805 15.15L15.2305 14.7199C15.0305 14.1299 14.9005 13.7299 13.8505 13.7299H10.1405C9.10054 13.7299 8.94054 14.1799 8.76054 14.7199L8.61054 15.15C8.47054 15.56 8.36054 15.9 7.58054 15.9H6.22054C5.35054 15.9 4.67054 15.1699 4.75054 14.3199L5.16055 9.89996C5.26055 8.80996 5.47054 7.91992 7.37054 7.91992H16.6205C18.5205 7.91992 18.7305 8.80996 18.8305 9.89996L19.2405 14.3199Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.2007 5.75H5.4707" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.5308 5.75H17.8008" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.65039 10.8301H9.8204" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14.1797 10.8301H16.3497" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 17V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 21V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M3 18L2 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M21 18L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V17C11.25 16.59 11.59 16.25 12 16.25C12.41 16.25 12.75 16.59 12.75 17V18C12.75 18.41 12.41 18.75 12 18.75Z" fill="currentColor" /><path d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V21C11.25 20.59 11.59 20.25 12 20.25C12.41 20.25 12.75 20.59 12.75 21V22C12.75 22.41 12.41 22.75 12 22.75Z" fill="currentColor" /><path d="M2.00009 22.7501C1.94009 22.7501 1.8801 22.7401 1.8201 22.7301C1.4201 22.6301 1.1701 22.2201 1.2701 21.8201L2.2701 17.8201C2.3701 17.4201 2.77009 17.1701 3.18009 17.2701C3.58009 17.3701 3.83009 17.7801 3.73009 18.1801L2.73009 22.1801C2.64009 22.5201 2.34009 22.7501 2.00009 22.7501Z" fill="currentColor" /><path d="M22.0007 22.7499C21.6607 22.7499 21.3607 22.5199 21.2707 22.1799L20.2707 18.1799C20.1707 17.7799 20.4107 17.3699 20.8207 17.2699C21.2207 17.1699 21.6307 17.4099 21.7307 17.8199L22.7307 21.8199C22.8307 22.2199 22.5907 22.6299 22.1807 22.7299C22.1207 22.7399 22.0607 22.7499 22.0007 22.7499Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M19.2602 9.52008C19.1502 8.34008 18.8402 7.09009 16.5502 7.09009H7.45024C5.16024 7.09009 4.85024 8.35008 4.74024 9.52008L4.34024 13.86C4.29024 14.4 4.47024 14.94 4.84024 15.35C5.22024 15.76 5.76025 16.0001 6.32025 16.0001H7.66024C8.81024 16.0001 9.03023 15.3401 9.18023 14.9001L9.32025 14.47C9.48025 13.98 9.52024 13.86 10.1702 13.86H13.8202C14.4602 13.86 14.4802 13.93 14.6702 14.47L14.8102 14.9001C14.9602 15.3401 15.1802 16.0001 16.3302 16.0001H17.6702C18.2302 16.0001 18.7702 15.76 19.1502 15.35C19.5202 14.95 19.7002 14.4 19.6502 13.86L19.2602 9.52008Z" fill="currentColor" /><path d="M18.4208 4.94H17.7108C17.7008 4.94 17.7008 4.94 17.7008 4.94L17.4308 3.65002C17.1708 2.40002 16.6408 1.25 14.5108 1.25H12.5408H11.4708H9.50078C7.37078 1.25 6.84078 2.40002 6.58078 3.65002L6.31078 4.94C6.30078 4.94 6.30078 4.94 6.30078 4.94H5.59077C5.29077 4.94 5.05078 5.17998 5.05078 5.47998C5.05078 5.77998 5.29077 6.02002 5.59077 6.02002H6.10078L5.80078 7.45001C6.19078 7.23001 6.72078 7.09003 7.46078 7.09003H16.5608C17.3008 7.09003 17.8408 7.23001 18.2208 7.45001L17.9208 6.02002H18.4308C18.7308 6.02002 18.9708 5.77998 18.9708 5.47998C18.9608 5.17998 18.7208 4.94 18.4208 4.94Z" fill="currentColor" /><path d="M9.8597 11.0099H7.7197C7.4197 11.0099 7.17969 10.7699 7.17969 10.4699C7.17969 10.1699 7.4197 9.92993 7.7197 9.92993H9.8597C10.1597 9.92993 10.3997 10.1699 10.3997 10.4699C10.3897 10.7699 10.1497 11.0099 9.8597 11.0099Z" fill="currentColor" /><path d="M16.2796 11.0099H14.1396C13.8396 11.0099 13.5996 10.7699 13.5996 10.4699C13.5996 10.1699 13.8396 9.92993 14.1396 9.92993H16.2796C16.5796 9.92993 16.8196 10.1699 16.8196 10.4699C16.8196 10.7699 16.5796 11.0099 16.2796 11.0099Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDriving as IconComponentType).keywords = [
  "driving",
  "motoring",
  "dynamical",
  "dynamic",
  "impulsive",
  "energetic",
  "vehicular",
  "vehicle",
  "driver",
  "traffic"
];

export default IconDriving as IconComponentType;