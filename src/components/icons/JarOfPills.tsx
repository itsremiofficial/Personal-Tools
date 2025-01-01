import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconJarOfPills: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 3.50024C6 3.0343 6 2.80133 6.07612 2.61756C6.17761 2.37253 6.37229 2.17786 6.61732 2.07636C6.80109 2.00024 7.03406 2.00024 7.5 2.00024H16.5C16.9659 2.00024 17.1989 2.00024 17.3827 2.07636C17.6277 2.17786 17.8224 2.37253 17.9239 2.61756C18 2.80133 18 3.0343 18 3.50024C18 3.96619 18 4.19916 17.9239 4.38293C17.8224 4.62796 17.6277 4.82263 17.3827 4.92412C17.1989 5.00024 16.9659 5.00024 16.5 5.00024H7.5C7.03406 5.00024 6.80109 5.00024 6.61732 4.92412C6.37229 4.82263 6.17761 4.62796 6.07612 4.38293C6 4.19916 6 3.96619 6 3.50024Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M4.5 18.0002H19.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M4.5 10.0002H19.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M5.50122 7.79927L7.90434 5.87677C8.44688 5.44274 8.71814 5.22573 9.03955 5.11299C9.36095 5.00024 9.70834 5.00024 10.4031 5.00024H13.6427C14.3438 5.00024 14.6943 5.00024 15.0182 5.11491C15.3421 5.22957 15.6146 5.45014 16.1595 5.89126L18.5168 7.79955C19.455 8.55901 20 9.7015 20 10.9085V17.5652C20 18.4929 19.6775 19.3918 19.0877 20.108L18.7294 20.5431C17.9696 21.4657 16.837 22.0002 15.6417 22.0002H8.95693C8.38582 22.0002 8.10026 22.0002 7.82957 21.9631C7.02661 21.8529 6.27608 21.5013 5.67738 20.9551C5.47554 20.7709 5.29272 20.5515 4.92711 20.1128C4.32806 19.3939 4 18.4878 4 17.552V10.9227C4 9.70761 4.55236 8.55836 5.50122 7.79927Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M12 12.0002V16.0002M10 14.0002L14 14.0002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M6 3.50024C6 3.0343 6 2.80133 6.07612 2.61756C6.17761 2.37253 6.37229 2.17786 6.61732 2.07636C6.80109 2.00024 7.03406 2.00024 7.5 2.00024H16.5C16.9659 2.00024 17.1989 2.00024 17.3827 2.07636C17.6277 2.17786 17.8224 2.37253 17.9239 2.61756C18 2.80133 18 3.0343 18 3.50024C18 3.96619 18 4.19916 17.9239 4.38293C17.8224 4.62796 17.6277 4.82263 17.3827 4.92412C17.1989 5.00024 16.9659 5.00024 16.5 5.00024H7.5C7.03406 5.00024 6.80109 5.00024 6.61732 4.92412C6.37229 4.82263 6.17761 4.62796 6.07612 4.38293C6 4.19916 6 3.96619 6 3.50024Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M4 10.9227V17.552C4 17.7024 4.00847 17.852 4.02518 18.0002H19.9763C19.992 17.8563 20 17.7111 20 17.5652V10.9085C20 10.5998 19.9643 10.2952 19.8955 10.0002H4.10779C4.03683 10.2996 4 10.609 4 10.9227Z" fill="currentColor" /><path d="M5.50118 7.79927L8.99996 5.00024H15.0182L16.1595 5.89126L18.5168 7.79955C19.2149 8.36474 19.6954 9.14206 19.8955 10.0002H4.10776C4.31164 9.14014 4.79732 8.36236 5.50118 7.79927Z" fill="currentColor" /><path d="M4.02515 18.0002C4.11241 18.7742 4.4243 19.5094 4.92708 20.1128C5.29269 20.5515 5.4755 20.7709 5.67734 20.9551C6.27605 21.5013 7.02658 21.8529 7.82953 21.9631C8.10023 22.0002 8.38578 22.0002 8.95689 22.0002H15.6417C16.8369 22.0002 17.9696 21.4657 18.7294 20.5431L19.0877 20.108C19.5847 19.5045 19.8919 18.7712 19.9762 18.0002H4.02515Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 11.2502C12.4142 11.2502 12.75 11.586 12.75 12.0002V13.2502H14C14.4142 13.2502 14.75 13.586 14.75 14.0002C14.75 14.4145 14.4142 14.7502 14 14.7502H12.75V16.0002C12.75 16.4145 12.4142 16.7502 12 16.7502C11.5858 16.7502 11.25 16.4145 11.25 16.0002V14.7502H10C9.58579 14.7502 9.25 14.4145 9.25 14.0002C9.25 13.586 9.58579 13.2502 10 13.2502H11.25V12.0002C11.25 11.586 11.5858 11.2502 12 11.2502Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.07612 2.61756C6 2.80133 6 3.0343 6 3.50024C6 3.96619 6 4.19916 6.07612 4.38293C6.17761 4.62796 6.37229 4.82263 6.61732 4.92412C6.80109 5.00024 7.03406 5.00024 7.5 5.00024H9H15H16.5C16.9659 5.00024 17.1989 5.00024 17.3827 4.92412C17.6277 4.82263 17.8224 4.62796 17.9239 4.38293C18 4.19916 18 3.96619 18 3.50024C18 3.0343 18 2.80133 17.9239 2.61756C17.8224 2.37253 17.6277 2.17786 17.3827 2.07636C17.1989 2.00024 16.9659 2.00024 16.5 2.00024H7.5C7.03406 2.00024 6.80109 2.00024 6.61732 2.07636C6.37229 2.17786 6.17761 2.37253 6.07612 2.61756Z" fill="currentColor" /><path d="M7.74997 6.00024L5.50122 7.7992C5.00902 8.19297 4.62351 8.69171 4.36644 9.25018H19.6401C19.3862 8.6929 19.0046 8.19441 18.5168 7.79949L16.2942 6.00024H7.74997Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M20 10.9085C20 10.8556 19.999 10.8028 19.9969 10.7502H4.00371C4.00124 10.8075 4 10.865 4 10.9227V17.2502H20V10.9085ZM12.75 13.2502V12.0002C12.75 11.586 12.4142 11.2502 12 11.2502C11.5858 11.2502 11.25 11.586 11.25 12.0002V13.2502H10C9.58579 13.2502 9.25 13.586 9.25 14.0002C9.25 14.4144 9.58579 14.7502 10 14.7502H11.25V16.0002C11.25 16.4144 11.5858 16.7502 12 16.7502C12.4142 16.7502 12.75 16.4144 12.75 16.0002V14.7502H14C14.4142 14.7502 14.75 14.4144 14.75 14.0002C14.75 13.586 14.4142 13.2502 14 13.2502H12.75Z" fill="currentColor" /><path d="M4.92711 20.1127C4.5902 19.7084 4.33901 19.2449 4.18368 18.7502H19.8204C19.6677 19.2425 19.4202 19.7042 19.0877 20.1079L18.7294 20.543C17.9696 21.4657 16.837 22.0002 15.6417 22.0002H8.95693C8.38582 22.0002 8.10026 22.0002 7.82957 21.963C7.02661 21.8528 6.27608 21.5013 5.67738 20.955C5.47554 20.7708 5.29272 20.5514 4.92711 20.1127Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconJarOfPills as IconComponentType).keywords = [
  "jar",
  "of",
  "pills",
  "collide",
  "clash",
  "jounce",
  "jolt",
  "shake up",
  "bump around",
  "flagon",
  "jug",
  "bottle",
  "bsf",
  "fos",
  "fso",
  "office",
  "osb",
  "tso",
  "tsos",
  "cup of tea",
  "flight of fancy",
  "tablet",
  "lozenge",
  "anovulatory drug",
  "birth control pill",
  "contraceptive pill",
  "oral contraceptive",
  "oral contraceptive pill",
  "antibilious",
  "aspirins"
];

export default IconJarOfPills as IconComponentType;