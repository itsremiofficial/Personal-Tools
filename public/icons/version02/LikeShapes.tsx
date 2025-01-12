import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconLikeShapes: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4198 2.44982C12.1098 1.85982 13.2398 1.85982 13.9398 2.44982L15.5198 3.80993C15.8198 4.06993 16.3798 4.2799 16.7798 4.2799H18.4798C19.5398 4.2799 20.4098 5.14983 20.4098 6.20983V7.90991C20.4098 8.29991 20.6198 8.86992 20.8798 9.16992L22.2398 10.7499C22.8298 11.4399 22.8298 12.5699 22.2398 13.2699L20.8798 14.8498C20.6198 15.1498 20.4098 15.7099 20.4098 16.1099V17.8099C20.4098 18.8699 19.5398 19.7399 18.4798 19.7399H16.7798C16.3898 19.7399 15.8198 19.9498 15.5198 20.2098L13.9398 21.5698C13.2498 22.1598 12.1198 22.1598 11.4198 21.5698L9.83982 20.2098C9.53982 19.9498 8.97981 19.7399 8.57981 19.7399H6.84979C5.78979 19.7399 4.9198 18.8699 4.9198 17.8099V16.0998C4.9198 15.7098 4.70981 15.1498 4.45981 14.8498L3.1098 13.2599C2.5298 12.5699 2.5298 11.4499 3.1098 10.7599L4.45981 9.16992C4.70981 8.86992 4.9198 8.30992 4.9198 7.91992V6.20983C4.9198 5.14983 5.78979 4.2799 6.84979 4.2799H8.57981C8.96981 4.2799 9.53982 4.06993 9.83982 3.80993L11.4198 2.44982Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M10.5601 14.82L12.01 15.94C12.2 16.13 12.6201 16.22 12.9001 16.22H14.67C15.23 16.22 15.84 15.8 15.98 15.24L17.1 11.82C17.33 11.17 16.9101 10.6 16.2101 10.6H14.3401C14.0601 10.6 13.8301 10.3701 13.8701 10.0401L14.1 8.54008C14.19 8.12008 13.9101 7.65005 13.4901 7.51005C13.1201 7.37005 12.6501 7.56 12.4601 7.84L10.54 10.69" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" /><path d="M8.16992 14.8201V10.2401C8.16992 9.58011 8.44992 9.3501 9.10992 9.3501H9.57993C10.2299 9.3501 10.5199 9.58011 10.5199 10.2401V14.8201C10.5199 15.4701 10.2399 15.7101 9.57993 15.7101H9.10992C8.44992 15.7101 8.16992 15.4801 8.16992 14.8201Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M11.4198 2.44982C12.1098 1.85982 13.2398 1.85982 13.9398 2.44982L15.5198 3.80981C15.8198 4.06981 16.3798 4.27984 16.7798 4.27984H18.4798C19.5398 4.27984 20.4098 5.14983 20.4098 6.20983V7.90979C20.4098 8.29979 20.6198 8.86979 20.8798 9.1698L22.2398 10.7498C22.8298 11.4398 22.8298 12.5698 22.2398 13.2698L20.8798 14.8498C20.6198 15.1498 20.4098 15.7098 20.4098 16.1098V17.8098C20.4098 18.8698 19.5398 19.7398 18.4798 19.7398H16.7798C16.3898 19.7398 15.8198 19.9498 15.5198 20.2098L13.9398 21.5698C13.2498 22.1598 12.1198 22.1598 11.4198 21.5698L9.83982 20.2098C9.53982 19.9498 8.97981 19.7398 8.57981 19.7398H6.84979C5.78979 19.7398 4.9198 18.8698 4.9198 17.8098V16.0998C4.9198 15.7098 4.70981 15.1498 4.45981 14.8498L3.1098 13.2598C2.5298 12.5698 2.5298 11.4498 3.1098 10.7598L4.45981 9.1698C4.70981 8.86979 4.9198 8.30979 4.9198 7.9198V6.20983C4.9198 5.14983 5.78979 4.27984 6.84979 4.27984H8.57981C8.96981 4.27984 9.53982 4.06981 9.83982 3.80981L11.4198 2.44982Z" fill="currentColor" /><path d="M17.2504 11.0697C17.0604 10.7997 16.7404 10.6498 16.3604 10.6498H14.4104C14.2804 10.6498 14.1604 10.5997 14.0804 10.4997C14.0004 10.3997 13.9604 10.2697 13.9804 10.1297L14.2204 8.56974C14.3204 8.10974 14.0104 7.57973 13.5504 7.42973C13.1204 7.26973 12.6104 7.48971 12.4104 7.78971L10.4704 10.6697V10.3097C10.4704 9.60973 10.1704 9.31974 9.43039 9.31974H8.94037C8.20037 9.31974 7.90039 9.60973 7.90039 10.3097V15.0898C7.90039 15.7898 8.20037 16.0798 8.94037 16.0798H9.43039C10.1304 16.0798 10.4304 15.8097 10.4604 15.1697L11.9304 16.2997C12.1304 16.4997 12.5804 16.6097 12.9004 16.6097H14.7504C15.3904 16.6097 16.0304 16.1297 16.1704 15.5397L17.3404 11.9797C17.4704 11.6597 17.4404 11.3297 17.2504 11.0697Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.2298 10.7401L20.8698 9.16006C20.6098 8.86006 20.3998 8.30006 20.3998 7.90006V6.20006C20.3998 5.14006 19.5298 4.27006 18.4698 4.27006H16.7698C16.3798 4.27006 15.8098 4.06006 15.5098 3.80006L13.9298 2.44006C13.2398 1.85006 12.1098 1.85006 11.4098 2.44006L9.8398 3.81006C9.5398 4.06006 8.9698 4.27006 8.5798 4.27006H6.8498C5.7898 4.27006 4.9198 5.14006 4.9198 6.20006V7.91006C4.9198 8.30006 4.7098 8.86006 4.4598 9.16006L3.1098 10.7501C2.5298 11.4401 2.5298 12.5601 3.1098 13.2501L4.4598 14.8401C4.7098 15.1401 4.9198 15.7001 4.9198 16.0901V17.8001C4.9198 18.8601 5.7898 19.7301 6.8498 19.7301H8.5798C8.9698 19.7301 9.5398 19.9401 9.8398 20.2001L11.4198 21.5601C12.1098 22.1501 13.2398 22.1501 13.9398 21.5601L15.5198 20.2001C15.8198 19.9401 16.3798 19.7301 16.7798 19.7301H18.4798C19.5398 19.7301 20.4098 18.8601 20.4098 17.8001V16.1001C20.4098 15.7101 20.6198 15.1401 20.8798 14.8401L22.2398 13.2601C22.8198 12.5701 22.8198 11.4301 22.2298 10.7401ZM17.3498 12.0001L16.1798 15.5601C16.0298 16.1501 15.3998 16.6301 14.7598 16.6301H12.9098C12.5898 16.6301 12.1398 16.5201 11.9398 16.3201L10.4698 15.1701C10.4398 15.8101 10.1498 16.0801 9.43981 16.0801H8.9598C8.2198 16.0801 7.9198 15.7901 7.9198 15.0901V10.3101C7.9198 9.61006 8.2198 9.32006 8.9598 9.32006H9.4498C10.1898 9.32006 10.4898 9.61006 10.4898 10.3101V10.6701L12.4298 7.79006C12.6298 7.48006 13.1398 7.26006 13.5698 7.43006C14.0398 7.59006 14.3398 8.11006 14.2398 8.57006L13.9998 10.1301C13.9798 10.2701 14.0098 10.4001 14.0998 10.5001C14.1798 10.5901 14.2998 10.6501 14.4298 10.6501H16.3798C16.7598 10.6501 17.0798 10.8001 17.2698 11.0701C17.4398 11.3301 17.4698 11.6601 17.3498 12.0001Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconLikeShapes;