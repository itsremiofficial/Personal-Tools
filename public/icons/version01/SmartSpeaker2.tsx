import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSmartSpeaker2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.8825 14.4406L19.6314 14.3981L19.6304 14.3851L18.8825 14.4406ZM5.15426 14.3511L4.40718 14.285L4.40653 14.2923L4.40603 14.2997L5.15426 14.3511ZM7.02989 21.4132L6.64328 22.0558H6.64328L7.02989 21.4132ZM5.36308 19.555L4.68432 19.874H4.68432L5.36308 19.555ZM18.6162 19.5883L19.2922 19.913L18.6162 19.5883ZM16.9506 21.4219L17.3346 22.0661H17.3346L16.9506 21.4219ZM12.0156 21.2501C10.6647 21.2501 9.70304 21.2494 8.95547 21.18C8.21806 21.1115 7.76716 20.9814 7.41649 20.7705L6.64328 22.0558C7.26835 22.4318 7.97365 22.5953 8.81681 22.6735C9.64983 22.7509 10.6931 22.7501 12.0156 22.7501V21.2501ZM4.40603 14.2997C4.3117 15.6704 4.23703 16.7461 4.25191 17.6094C4.26694 18.4809 4.37259 19.2108 4.68432 19.874L6.04184 19.236C5.85905 18.8471 5.76506 18.359 5.75169 17.5836C5.73818 16.7999 5.80635 15.7997 5.90249 14.4026L4.40603 14.2997ZM7.41649 20.7705C6.8255 20.415 6.34551 19.882 6.04184 19.236L4.68432 19.874C5.11156 20.783 5.79211 21.5438 6.64328 22.0558L7.41649 20.7705ZM18.1337 14.483C18.212 15.8656 18.2674 16.8551 18.245 17.6301C18.2228 18.3968 18.1247 18.8794 17.9401 19.2636L19.2922 19.913C19.6068 19.258 19.7194 18.5362 19.7444 17.6736C19.7691 16.8193 19.7081 15.7545 19.6313 14.3981L18.1337 14.483ZM12.0156 22.7501C13.3231 22.7501 14.3549 22.7509 15.1795 22.6747C16.0144 22.5975 16.7133 22.4364 17.3346 22.0661L16.5666 20.7776C16.2178 20.9856 15.7708 21.1136 15.0415 21.181C14.3019 21.2494 13.3513 21.2501 12.0156 21.2501V22.7501ZM17.9401 19.2636C17.6336 19.9019 17.1544 20.4274 16.5666 20.7776L17.3346 22.0661C18.1812 21.5616 18.8609 20.8112 19.2922 19.913L17.9401 19.2636ZM17.3215 3.62294C17.3524 3.74288 17.3443 3.93447 17.1814 4.22224C17.0169 4.51295 16.7204 4.85052 16.2787 5.20388C15.3974 5.90889 14.0511 6.58622 12.447 7.03237L12.849 8.47752C14.6018 7.98999 16.1428 7.23353 17.2157 6.37521C17.7512 5.94689 18.1986 5.47041 18.4869 4.96099C18.7768 4.44863 18.9303 3.85403 18.7739 3.24802L17.3215 3.62294ZM12.447 7.03237C10.8425 7.47865 9.35258 7.59001 8.25441 7.43751C7.70388 7.36106 7.28986 7.22356 7.01353 7.06082C6.74234 6.9011 6.64753 6.74627 6.61731 6.62918L5.16492 7.00409C5.32209 7.61295 5.74597 8.0551 6.25231 8.35331C6.75351 8.6485 7.37587 8.8299 8.04809 8.92325C9.39543 9.11035 11.0966 8.96492 12.849 8.47752L12.447 7.03237ZM6.61731 6.62918C6.58635 6.50924 6.59452 6.31765 6.75736 6.02987C6.92187 5.73917 7.21833 5.40159 7.66005 5.04824C8.54137 4.34323 9.88766 3.6659 11.4917 3.21974L11.0898 1.7746C9.33695 2.26213 7.79602 3.01858 6.72304 3.87691C6.18761 4.30523 5.74016 4.78171 5.45189 5.29113C5.16196 5.80348 5.00848 6.39809 5.16492 7.00409L6.61731 6.62918ZM11.4917 3.21974C13.0963 2.77347 14.5862 2.66211 15.6844 2.81461C16.2349 2.89106 16.6489 3.02855 16.9252 3.1913C17.1964 3.35102 17.2912 3.50585 17.3215 3.62294L18.7739 3.24802C18.6167 2.63916 18.1928 2.19702 17.6865 1.89881C17.1853 1.60362 16.5629 1.42221 15.8907 1.32886C14.5433 1.14176 12.8422 1.2872 11.0898 1.7746L11.4917 3.21974ZM5.90134 14.4173L6.60912 6.42136L5.11496 6.2891L4.40718 14.285L5.90134 14.4173ZM17.337 3.74519L18.1345 14.4961L19.6304 14.3851L18.8329 3.63423L17.337 3.74519Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M4.71466 13.8386C5.46405 14.5911 7.37435 15.7504 11.9996 15.7504V14.2504C7.60609 14.2504 6.1461 13.1502 5.77753 12.7801L4.71466 13.8386ZM11.9996 15.7504C16.7469 15.7504 18.634 14.5287 19.3401 13.7813L18.2497 12.7512C17.9277 13.0921 16.5084 14.2504 11.9996 14.2504V15.7504Z" fill="currentColor" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M18.0477 3.43548C18.0691 3.51873 18.0815 3.60357 18.0849 3.68971C18.1421 5.10586 15.8124 6.8748 12.648 7.75494C9.29105 8.68862 6.26589 8.26853 5.89111 6.81664C5.85894 6.69201 5.84734 6.56384 5.85514 6.43305C5.85669 6.40721 5.85898 6.38127 5.86203 6.35523C6.02326 4.97772 8.27891 3.33488 11.2908 2.49717C14.6477 1.56349 17.6729 1.98359 18.0477 3.43548Z" fill="currentColor" /><path d="M12.648 7.75481C9.29106 8.68849 6.2659 8.2684 5.89111 6.8165C5.85894 6.69188 5.84735 6.56371 5.85515 6.43292L5.24609 13.3089C5.80507 13.8702 7.49022 14.9999 11.9996 14.9999C16.6277 14.9999 18.2809 13.8099 18.7949 13.2657L18.0849 3.68958C18.1421 5.10573 15.8124 6.87467 12.648 7.75481Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M7.02989 21.413C8.00563 22 9.34227 22 12.0156 22C14.6588 22 15.9804 22 16.9506 21.4218C17.6678 20.9943 18.2472 20.3564 18.6162 19.5882C19.1153 18.5489 19.0377 17.1794 18.8825 14.4404L18.7949 13.2657C18.2809 13.8099 16.6277 14.9999 11.9996 14.9999C7.49022 14.9999 5.80507 13.8702 5.24609 13.3089L5.15426 14.351C4.9638 17.1189 4.86856 18.5028 5.36308 19.5549C5.72853 20.3324 6.3088 20.9792 7.02989 21.413Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4922 3.21974C13.0968 2.77346 14.5867 2.6621 15.6848 2.8146C16.2354 2.89106 16.6494 3.02855 16.9257 3.1913C17.1969 3.35102 17.2917 3.50585 17.3219 3.62293C17.3529 3.74287 17.3447 3.93446 17.1819 4.22224C17.0174 4.51295 16.7209 4.85052 16.2792 5.20387C15.3979 5.90889 14.0516 6.58622 12.4475 7.03237C10.843 7.47865 9.35305 7.59001 8.25488 7.43751C7.70434 7.36106 7.29032 7.22356 7.014 7.06082C6.74281 6.90109 6.648 6.74627 6.61777 6.62918C6.58681 6.50924 6.59498 6.31765 6.75783 6.02987C6.92233 5.73917 7.2188 5.40159 7.66052 5.04824C8.54184 4.34322 9.88813 3.66589 11.4922 3.21974Z" fill="currentColor" /><path d="M18.2103 5.37954C17.9424 5.73265 17.6022 6.06644 17.2162 6.3752C16.1432 7.23353 14.6023 7.98998 12.8494 8.47751C11.097 8.96492 9.39589 9.11035 8.04855 8.92325C7.37633 8.8299 6.75398 8.6485 6.25277 8.35331C6.06018 8.23988 5.87953 8.10563 5.72093 7.94931L5.33284 12.3336L5.77764 12.7803C6.14621 13.1504 7.6062 14.2505 11.9997 14.2505C16.5085 14.2505 17.9278 13.0923 18.2498 12.7514L18.7202 12.2534L18.2103 5.37954Z" fill="currentColor" /><path d="M5.15426 14.3511L5.16572 14.2217C6.13919 14.9301 8.1088 15.7505 11.9997 15.7505C15.9332 15.7505 17.9031 14.9118 18.8646 14.1991L18.8825 14.4406C19.0377 17.1796 19.1153 18.5491 18.6162 19.5883C18.2472 20.3566 17.6678 20.9945 16.9506 21.4219C15.9804 22.0001 14.6588 22.0001 12.0156 22.0001C9.34227 22.0001 8.00563 22.0001 7.02989 21.4131C6.3088 20.9794 5.72853 20.3325 5.36308 19.555C4.86856 18.5029 4.9638 17.119 5.15426 14.3511Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSmartSpeaker2 as IconComponentType).keywords = [
  "smart",
  "speaker",
  "2",
  "hurt",
  "ache",
  "raffish",
  "rakish",
  "snappy",
  "cagy",
  "impertinent",
  "dashing",
  "impudent",
  "talker",
  "loudspeaker",
  "loudspeaker system",
  "speaker system",
  "speaker unit",
  "speaking",
  "orator",
  "speak",
  "speech",
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

export default IconSmartSpeaker2 as IconComponentType;