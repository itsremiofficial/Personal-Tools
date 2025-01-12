import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconDocumentAdd: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.18 8.0397L18.6435 7.57626C19.4113 6.8084 20.6563 6.8084 21.4241 7.57626C22.192 8.34411 22.192 9.58904 21.4241 10.3569L20.9607 10.8203M18.18 8.0397C18.18 8.0397 18.238 9.0245 19.1069 9.89345C19.9759 10.7624 20.9607 10.8203 20.9607 10.8203M18.18 8.0397L13.9194 12.3003C13.6308 12.5889 13.4865 12.7332 13.3624 12.8923C13.2161 13.08 13.0906 13.283 12.9882 13.4979C12.9014 13.68 12.8368 13.8736 12.7078 14.2608L12.2946 15.5004L12.1609 15.9014M20.9607 10.8203L16.7001 15.081C16.4115 15.3695 16.2672 15.5138 16.1081 15.6379C15.9204 15.7843 15.7173 15.9098 15.5025 16.0122C15.3203 16.099 15.1268 16.1635 14.7396 16.2926L13.5 16.7058L13.099 16.8395M13.099 16.8395L12.6979 16.9731C12.5074 17.0367 12.2973 16.9871 12.1553 16.845C12.0133 16.703 11.9637 16.493 12.0272 16.3024L12.1609 15.9014M13.099 16.8395L12.1609 15.9014" stroke="currentColor" strokeWidth={width} /><path d="M8 13.0004H10.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M8 9.00037H14.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M8 17.0004H9.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M3 10.0004C3 6.22913 3 4.34351 4.17157 3.17194C5.34315 2.00037 7.22876 2.00037 11 2.00037H13C16.7712 2.00037 18.6569 2.00037 19.8284 3.17194C21 4.34351 21 6.22913 21 10.0004V14.0004C21 17.7716 21 19.6572 19.8284 20.8288C18.6569 22.0004 16.7712 22.0004 13 22.0004H11C7.22876 22.0004 5.34315 22.0004 4.17157 20.8288C3 19.6572 3 17.7716 3 14.0004V10.0004Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M3 10.0004C3 6.22913 3 4.34351 4.17157 3.17194C5.34315 2.00037 7.22876 2.00037 11 2.00037H13C16.7712 2.00037 18.6569 2.00037 19.8284 3.17194C21 4.34351 21 6.22913 21 10.0004V14.0004C21 17.7716 21 19.6572 19.8284 20.8288C18.6569 22.0004 16.7712 22.0004 13 22.0004H11C7.22876 22.0004 5.34315 22.0004 4.17157 20.8288C3 19.6572 3 17.7716 3 14.0004V10.0004Z" fill="currentColor" /><path d="M16.5189 16.5017C16.6939 16.3652 16.8526 16.2065 17.1701 15.889L21.1275 11.9316C21.2231 11.8359 21.1793 11.6711 21.0515 11.6268C20.5844 11.4647 19.9767 11.1605 19.4083 10.592C18.8399 10.0236 18.5356 9.41598 18.3736 8.94885C18.3292 8.82102 18.1644 8.77723 18.0688 8.87291L14.1114 12.8303C13.7939 13.1477 13.6352 13.3065 13.4987 13.4815C13.3377 13.6879 13.1996 13.9113 13.087 14.1476C12.9915 14.348 12.9205 14.5609 12.7786 14.9868L12.5951 15.5371L12.3034 16.4122L12.0299 17.2327C11.9601 17.4422 12.0146 17.6733 12.1708 17.8295C12.3271 17.9857 12.5581 18.0403 12.7677 17.9704L13.5882 17.6969L14.4632 17.4052L15.0135 17.2218L15.0136 17.2218C15.4394 17.0798 15.6524 17.0089 15.8527 16.9134C16.0891 16.8007 16.3124 16.6627 16.5189 16.5017Z" fill="currentColor" /><path d="M22.3665 10.6925C23.2112 9.84791 23.2112 8.47848 22.3665 7.63384C21.5219 6.78921 20.1525 6.78921 19.3078 7.63384L19.1806 7.76107C19.0578 7.88384 19.0022 8.05533 19.0329 8.22622C19.0522 8.33373 19.0879 8.4909 19.153 8.67844C19.2831 9.0535 19.5288 9.54585 19.9917 10.0087C20.4545 10.4715 20.9469 10.7172 21.3219 10.8474C21.5095 10.9124 21.6666 10.9482 21.7741 10.9675C21.945 10.9982 22.1165 10.9425 22.2393 10.8198L22.3665 10.6925Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M7.25 9.00037C7.25 8.58615 7.58579 8.25037 8 8.25037H14.5C14.9142 8.25037 15.25 8.58615 15.25 9.00037C15.25 9.41458 14.9142 9.75037 14.5 9.75037H8C7.58579 9.75037 7.25 9.41458 7.25 9.00037ZM7.25 13.0004C7.25 12.5862 7.58579 12.2504 8 12.2504H11C11.4142 12.2504 11.75 12.5862 11.75 13.0004C11.75 13.4146 11.4142 13.7504 11 13.7504H8C7.58579 13.7504 7.25 13.4146 7.25 13.0004ZM7.25 17.0004C7.25 16.5862 7.58579 16.2504 8 16.2504H9.5C9.91421 16.2504 10.25 16.5862 10.25 17.0004C10.25 17.4146 9.91421 17.7504 9.5 17.7504H8C7.58579 17.7504 7.25 17.4146 7.25 17.0004Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5189 16.5017C16.6939 16.3652 16.8526 16.2065 17.1701 15.889L21.1275 11.9316C21.2231 11.8359 21.1793 11.6711 21.0515 11.6268C20.5844 11.4647 19.9767 11.1605 19.4083 10.592C18.8399 10.0236 18.5356 9.41598 18.3736 8.94885C18.3292 8.82102 18.1644 8.77723 18.0688 8.87291L14.1114 12.8303C13.7939 13.1477 13.6352 13.3065 13.4987 13.4815C13.3377 13.6879 13.1996 13.9113 13.087 14.1476C12.9915 14.348 12.9205 14.5609 12.7786 14.9868L12.5951 15.5371L12.3034 16.4122L12.0299 17.2327C11.9601 17.4422 12.0146 17.6733 12.1708 17.8295C12.3271 17.9857 12.5581 18.0403 12.7677 17.9704L13.5882 17.6969L14.4632 17.4052L15.0135 17.2218L15.0136 17.2218C15.4394 17.0798 15.6524 17.0089 15.8527 16.9134C16.0891 16.8007 16.3124 16.6627 16.5189 16.5017Z" fill="currentColor" /><path d="M22.3665 10.6925C23.2112 9.84791 23.2112 8.47848 22.3665 7.63384C21.5219 6.78921 20.1525 6.78921 19.3078 7.63384L19.1806 7.76107C19.0578 7.88384 19.0022 8.05533 19.0329 8.22622C19.0522 8.33373 19.0879 8.4909 19.153 8.67844C19.2831 9.0535 19.5288 9.54585 19.9917 10.0087C20.4545 10.4715 20.9469 10.7172 21.3219 10.8474C21.5095 10.9124 21.6666 10.9482 21.7741 10.9675C21.945 10.9982 22.1165 10.9425 22.2393 10.8198L22.3665 10.6925Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M4.17157 3.17194C3 4.34351 3 6.22913 3 10.0004V14.0004C3 17.7716 3 19.6572 4.17157 20.8288C5.34315 22.0004 7.22876 22.0004 11 22.0004H13C16.7712 22.0004 18.6569 22.0004 19.8284 20.8288C20.9812 19.676 20.9997 17.8319 21 14.1804L18.1817 16.9987C17.9119 17.2687 17.691 17.4898 17.4415 17.6844C17.1491 17.9125 16.8328 18.108 16.4981 18.2675C16.2124 18.4036 15.9159 18.5023 15.5538 18.6229L13.2421 19.3934C12.4935 19.643 11.6682 19.4481 11.1102 18.8902C10.5523 18.3322 10.3574 17.5069 10.607 16.7583L10.8805 15.9378L11.3556 14.5125L11.3775 14.4467C11.4981 14.0846 11.5968 13.788 11.7329 13.5023C11.8924 13.1676 12.0879 12.8513 12.316 12.5589C12.5106 12.3094 12.7317 12.0885 13.0017 11.8187L17.0081 7.81225L18.12 6.70041L18.2472 6.57318C18.9626 5.85778 19.9003 5.50018 20.838 5.50037C20.6867 4.46982 20.3941 3.73764 19.8284 3.17194C18.6569 2.00037 16.7712 2.00037 13 2.00037H11C7.22876 2.00037 5.34315 2.00037 4.17157 3.17194ZM7.25 9.00037C7.25 8.58615 7.58579 8.25037 8 8.25037H14.5C14.9142 8.25037 15.25 8.58615 15.25 9.00037C15.25 9.41458 14.9142 9.75037 14.5 9.75037H8C7.58579 9.75037 7.25 9.41458 7.25 9.00037ZM7.25 13.0004C7.25 12.5862 7.58579 12.2504 8 12.2504H10.5C10.9142 12.2504 11.25 12.5862 11.25 13.0004C11.25 13.4146 10.9142 13.7504 10.5 13.7504H8C7.58579 13.7504 7.25 13.4146 7.25 13.0004ZM7.25 17.0004C7.25 16.5862 7.58579 16.2504 8 16.2504H9.5C9.91421 16.2504 10.25 16.5862 10.25 17.0004C10.25 17.4146 9.91421 17.7504 9.5 17.7504H8C7.58579 17.7504 7.25 17.4146 7.25 17.0004Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconDocumentAdd;