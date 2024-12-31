import { FC } from 'react';
import { IconProps } from "@/types";

const IconLikeShapes: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7509 2.44982C11.4409 1.85982 12.5708 1.85982 13.2708 2.44982L14.8509 3.80993C15.1509 4.06993 15.7108 4.2799 16.1108 4.2799H17.8109C18.8709 4.2799 19.7408 5.14983 19.7408 6.20983V7.90991C19.7408 8.29991 19.9508 8.86992 20.2108 9.16992L21.5709 10.7499C22.1609 11.4399 22.1609 12.5699 21.5709 13.2699L20.2108 14.8498C19.9508 15.1498 19.7408 15.7099 19.7408 16.1099V17.8099C19.7408 18.8699 18.8709 19.7399 17.8109 19.7399H16.1108C15.7208 19.7399 15.1509 19.9498 14.8509 20.2098L13.2708 21.5698C12.5808 22.1598 11.4509 22.1598 10.7509 21.5698L9.17087 20.2098C8.87087 19.9498 8.31086 19.7399 7.91086 19.7399H6.18085C5.12085 19.7399 4.25086 18.8699 4.25086 17.8099V16.0998C4.25086 15.7098 4.04087 15.1498 3.79087 14.8498L2.44086 13.2599C1.86086 12.5699 1.86086 11.4499 2.44086 10.7599L3.79087 9.16992C4.04087 8.86992 4.25086 8.30992 4.25086 7.91992V6.20983C4.25086 5.14983 5.12085 4.2799 6.18085 4.2799H7.91086C8.30086 4.2799 8.87087 4.06993 9.17087 3.80993L10.7509 2.44982Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M9.89111 14.82L11.3411 15.94C11.5311 16.13 11.9511 16.22 12.2311 16.22H14.0011C14.5611 16.22 15.1711 15.8 15.3111 15.24L16.4311 11.82C16.6611 11.17 16.2411 10.6 15.5411 10.6H13.6711C13.3911 10.6 13.1611 10.3701 13.2011 10.0401L13.4311 8.54008C13.5211 8.12008 13.2411 7.65005 12.8211 7.51005C12.4511 7.37005 11.9811 7.56 11.7911 7.84L9.87109 10.69" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /><path d="M7.5 14.8201V10.2401C7.5 9.58011 7.78 9.3501 8.44 9.3501H8.91C9.56 9.3501 9.85001 9.58011 9.85001 10.2401V14.8201C9.85001 15.4701 9.57 15.7101 8.91 15.7101H8.44C7.78 15.7101 7.5 15.4801 7.5 14.8201Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M10.7509 2.45007C11.4409 1.86007 12.5708 1.86007 13.2708 2.45007L14.8509 3.81005C15.1509 4.07005 15.7108 4.28009 16.1108 4.28009H17.8109C18.8709 4.28009 19.7408 5.15008 19.7408 6.21008V7.91003C19.7408 8.30003 19.9508 8.87004 20.2108 9.17004L21.5709 10.7501C22.1609 11.4401 22.1609 12.5701 21.5709 13.2701L20.2108 14.85C19.9508 15.15 19.7408 15.71 19.7408 16.11V17.8101C19.7408 18.8701 18.8709 19.74 17.8109 19.74H16.1108C15.7208 19.74 15.1509 19.9501 14.8509 20.2101L13.2708 21.5701C12.5808 22.1601 11.4509 22.1601 10.7509 21.5701L9.17087 20.2101C8.87087 19.9501 8.31086 19.74 7.91086 19.74H6.18085C5.12085 19.74 4.25086 18.8701 4.25086 17.8101V16.1C4.25086 15.71 4.04087 15.15 3.79087 14.85L2.44086 13.2601C1.86086 12.5701 1.86086 11.4501 2.44086 10.7601L3.79087 9.17004C4.04087 8.87004 4.25086 8.31004 4.25086 7.92004V6.21008C4.25086 5.15008 5.12085 4.28009 6.18085 4.28009H7.91086C8.30086 4.28009 8.87087 4.07005 9.17087 3.81005L10.7509 2.45007Z" fill="currentColor" /><path d="M16.5804 11.07C16.3904 10.8 16.0705 10.65 15.6905 10.65H13.7404C13.6104 10.65 13.4905 10.6 13.4105 10.5C13.3305 10.4 13.2905 10.27 13.3105 10.13L13.5504 8.56998C13.6504 8.10998 13.3405 7.57997 12.8805 7.42997C12.4505 7.26997 11.9404 7.48995 11.7404 7.78995L9.80045 10.67V10.31C9.80045 9.60997 9.50047 9.31998 8.76047 9.31998H8.27045C7.53045 9.31998 7.23047 9.60997 7.23047 10.31V15.09C7.23047 15.79 7.53045 16.08 8.27045 16.08H8.76047C9.46047 16.08 9.76047 15.81 9.79047 15.17L11.2605 16.3C11.4605 16.5 11.9105 16.61 12.2305 16.61H14.0804C14.7204 16.61 15.3605 16.13 15.5005 15.54L16.6705 11.98C16.8005 11.66 16.7704 11.33 16.5804 11.07Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconLikeShapes;