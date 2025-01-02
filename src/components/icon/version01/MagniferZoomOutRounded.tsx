import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMagniferZoomOutRounded: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity={duotone ? "0.5" : "1"} cx="11" cy="11.0005" r="9" stroke="currentColor" strokeWidth={width} /><path d="M9 11.0005H11H13" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M21.812 20.9753C21.7493 21.0699 21.636 21.1833 21.4094 21.4099C21.1828 21.6365 21.0695 21.7498 20.9748 21.8125C20.4202 22.1798 19.6699 21.9905 19.3559 21.4041C19.3023 21.304 19.2563 21.1505 19.1643 20.8435C19.0638 20.508 19.0136 20.3403 19.0038 20.2223C18.9466 19.5273 19.5268 18.9471 20.2218 19.0043C20.3398 19.0141 20.5075 19.0643 20.843 19.1648C21.15 19.2568 21.3035 19.3028 21.4036 19.3564C21.99 19.6704 22.1793 20.4207 21.812 20.9753Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17.8196 19.7006C17.7303 18.6064 18.6359 17.6929 19.7206 17.783C19.9087 17.7986 20.1339 17.867 20.3632 17.9367C20.3853 17.9435 20.4074 17.9502 20.4295 17.9569C20.4495 17.9629 20.4695 17.9689 20.4895 17.975C20.7003 18.0383 20.9099 18.1013 21.0693 18.1874C21.9846 18.6818 22.28 19.8631 21.7068 20.7363C21.6069 20.8884 21.452 21.0441 21.2963 21.2007C21.2815 21.2156 21.2668 21.2305 21.252 21.2454C21.2373 21.2602 21.2225 21.2752 21.2078 21.2901C21.0525 21.4471 20.8981 21.6034 20.7473 21.7041C19.8817 22.2823 18.7106 21.9843 18.2205 21.0611C18.1351 20.9002 18.0727 20.6888 18.0099 20.4762C18.0039 20.4561 17.9979 20.4359 17.9919 20.4157C17.9853 20.3934 17.9786 20.3711 17.972 20.3488C17.9029 20.1175 17.835 19.8903 17.8196 19.7006Z" fill="currentColor" /><g opacity={duotone ? "0.5" : "1"}><path d="M11.1566 20.3137C16.2137 20.3137 20.3133 16.2142 20.3133 11.1571C20.3133 6.10005 16.2137 2.00049 11.1566 2.00049C6.09956 2.00049 2 6.10005 2 11.1571C2 16.2142 6.09956 20.3137 11.1566 20.3137Z" fill="currentColor" /></g><path fillRule="evenodd" clipRule="evenodd" d="M8.02344 11.157C8.02344 10.7577 8.34709 10.4341 8.74633 10.4341H13.5656C13.9648 10.4341 14.2885 10.7577 14.2885 11.157C14.2885 11.5562 13.9648 11.8799 13.5656 11.8799H8.74633C8.34709 11.8799 8.02344 11.5562 8.02344 11.157Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17.8196 19.7006C17.7303 18.6064 18.6359 17.6929 19.7206 17.783C19.9087 17.7986 20.1339 17.867 20.3632 17.9367C20.3853 17.9435 20.4074 17.9502 20.4295 17.9569C20.4495 17.9629 20.4695 17.9689 20.4895 17.975C20.7003 18.0383 20.9099 18.1013 21.0693 18.1874C21.9846 18.6818 22.28 19.8631 21.7068 20.7363C21.6069 20.8884 21.452 21.0441 21.2963 21.2007C21.2815 21.2156 21.2668 21.2305 21.252 21.2454C21.2373 21.2602 21.2225 21.2752 21.2078 21.2901C21.0525 21.4471 20.8981 21.6034 20.7473 21.7041C19.8817 22.2823 18.7106 21.9843 18.2205 21.0611C18.1351 20.9002 18.0727 20.6888 18.0099 20.4762C18.0039 20.4561 17.9979 20.4359 17.9919 20.4157C17.9853 20.3934 17.9786 20.3711 17.972 20.3488C17.9029 20.1175 17.835 19.8903 17.8196 19.7006Z" fill="currentColor" /><path d="M11.1566 20.3137C16.2137 20.3137 20.3133 16.2142 20.3133 11.1571C20.3133 6.10005 16.2137 2.00049 11.1566 2.00049C6.09956 2.00049 2 6.10005 2 11.1571C2 16.2142 6.09956 20.3137 11.1566 20.3137Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M8.02344 11.157C8.02344 10.7577 8.34709 10.4341 8.74633 10.4341H13.5656C13.9648 10.4341 14.2885 10.7577 14.2885 11.157C14.2885 11.5562 13.9648 11.8799 13.5656 11.8799H8.74633C8.34709 11.8799 8.02344 11.5562 8.02344 11.157Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMagniferZoomOutRounded as IconComponentType).keywords = [
  "magnifer",
  "zoom",
  "out",
  "rounded",
  "whizz",
  "surge",
  "soar",
  "rapid climb",
  "rapid growth",
  "soar up",
  "soar upwards",
  "whizz along",
  "zoom along",
  "away",
  "outer",
  "exterior",
  "retired",
  "extinct",
  "dead",
  "down",
  "extinguished",
  "come out",
  "ringed",
  "ring-shaped",
  "annulate",
  "annular",
  "circular",
  "rotund",
  "bowfront",
  "prolate",
  "domed"
];

export default IconMagniferZoomOutRounded as IconComponentType;