import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconVolleyball2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5697 12.5537L12.1617 13.0142V13.0142L11.5697 12.5537ZM11.3142 3.64634L12.0065 3.93481V3.93481L11.3142 3.64634ZM3.5 15.7505C3.08579 15.7505 2.75 16.0863 2.75 16.5005C2.75 16.9147 3.08579 17.2505 3.5 17.2505V15.7505ZM19.876 16.9165C20.1057 17.2612 20.5714 17.3543 20.916 17.1245C21.2607 16.8948 21.3538 16.4291 21.124 16.0845L19.876 16.9165ZM12 21.2505C6.89137 21.2505 2.75 17.1091 2.75 12.0005H1.25C1.25 17.9375 6.06294 22.7505 12 22.7505V21.2505ZM21.25 12.0005C21.25 17.1091 17.1086 21.2505 12 21.2505V22.7505C17.9371 22.7505 22.75 17.9375 22.75 12.0005H21.25ZM12 2.75049C17.1086 2.75049 21.25 6.89185 21.25 12.0005H22.75C22.75 6.06343 17.9371 1.25049 12 1.25049V2.75049ZM12 1.25049C6.06294 1.25049 1.25 6.06343 1.25 12.0005H2.75C2.75 6.89185 6.89137 2.75049 12 2.75049V1.25049ZM12 12.7505H12.0917V11.2505H12V12.7505ZM11.408 11.54L10.9777 12.0933L12.1617 13.0142L12.592 12.4609L11.408 11.54ZM11.3077 1.71203L10.6219 3.35788L12.0065 3.93481L12.6923 2.28895L11.3077 1.71203ZM10.6219 3.35788C9.39039 6.31356 9.66695 9.68271 11.364 12.398L12.636 11.603C11.1965 9.29978 10.9619 6.44193 12.0065 3.93481L10.6219 3.35788ZM10.9777 12.0933C9.18293 14.4008 6.42334 15.7505 3.5 15.7505V17.2505C6.88622 17.2505 10.0828 15.6871 12.1617 13.0142L10.9777 12.0933ZM12.0917 12.7505C15.2197 12.7505 18.1408 14.3138 19.876 16.9165L21.124 16.0845C19.1107 13.0645 15.7213 11.2505 12.0917 11.2505V12.7505Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M21.2426 10.7432L21.7773 10.2172L21.7729 10.2129L21.2426 10.7432ZM21.453 12.0266C21.7435 12.3218 22.2184 12.3257 22.5137 12.0352C22.8089 11.7447 22.8128 11.2699 22.5223 10.9746L21.453 12.0266ZM5.73267 19.0434C5.31845 19.0434 4.98267 19.3792 4.98267 19.7934C4.98267 20.2076 5.31845 20.5434 5.73267 20.5434V19.0434ZM8.19228 3.35633C8.35159 2.97398 8.17078 2.53488 7.78843 2.37556C7.40608 2.21625 6.96698 2.39706 6.80766 2.77941L8.19228 3.35633ZM5.85303 12.1452C5.93288 12.5516 6.3271 12.8164 6.73354 12.7365C7.13998 12.6567 7.40474 12.2624 7.32489 11.856L5.85303 12.1452ZM15.4334 17.323C15.7714 17.0837 15.8514 16.6156 15.612 16.2775C15.3727 15.9395 14.9046 15.8595 14.5665 16.0989L15.4334 17.323ZM14.1553 6.08085C13.7501 5.99506 13.352 6.25401 13.2662 6.65924C13.1804 7.06448 13.4394 7.46253 13.8446 7.54832L14.1553 6.08085ZM20.708 11.2692L21.453 12.0266L22.5223 10.9746L21.7773 10.2172L20.708 11.2692ZM6.80766 2.77941C5.55816 5.77822 5.23914 9.0204 5.85303 12.1452L7.32489 11.856C6.76828 9.02278 7.0566 6.08195 8.19228 3.35633L6.80766 2.77941ZM14.5665 16.0989C11.9691 17.9383 8.82241 19.0434 5.73267 19.0434V20.5434C9.16947 20.5434 12.6141 19.3195 15.4334 17.323L14.5665 16.0989ZM13.8446 7.54832C16.4265 8.09495 18.8177 9.37893 20.7123 11.2735L21.7729 10.2129C19.6714 8.11132 17.0191 6.68715 14.1553 6.08085L13.8446 7.54832Z" fill="currentColor" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.46609 3.66999C3.77398 5.46192 2 8.52404 2 12.0005C2 13.6191 2.38456 15.1479 3.06729 16.5005H3.5C6.65478 16.5005 9.63285 15.044 11.5697 12.5537L12 12.0005C10.4317 9.49124 10.1761 6.37775 11.3142 3.64634L12 2.00049C10.7892 2.00049 9.62861 2.21569 8.55447 2.60992L8.18409 3.37544C7.05502 6.0957 6.76934 9.0294 7.32465 11.856C7.4045 12.2624 7.13974 12.6567 6.7333 12.7365C6.32685 12.8164 5.93263 12.5516 5.85278 12.1452C5.29921 9.3274 5.50423 6.41416 6.46609 3.66999Z" fill="currentColor" /><path opacity={duotone ? "0.7" : "1"} d="M14.1551 6.08085C13.7498 5.99506 13.3518 6.25401 13.266 6.65925C13.1802 7.06448 13.4392 7.46253 13.8444 7.54832C16.4253 8.09473 18.8156 9.37793 20.7098 11.2713L20.712 11.2735L21.9788 12.5612L21.9846 12.5555C21.8994 14.1125 21.4581 15.5746 20.7407 16.8618L20.4997 16.5005C18.6255 13.6891 15.4702 12.0005 12.0914 12.0005H11.9997C10.4315 9.49124 10.1759 6.37775 11.314 3.64634L11.9997 2.00049C16.9418 2.00049 21.0465 5.58545 21.8552 10.2967L21.777 10.2172L21.7727 10.2129C19.6711 8.11132 17.0188 6.68715 14.1551 6.08085Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.4332 17.323C15.7712 17.0837 15.8512 16.6156 15.6118 16.2775C15.3724 15.9395 14.9043 15.8595 14.5663 16.0989C11.9689 17.9383 8.82217 19.0434 5.73242 19.0434H4.90097C4.16435 18.3009 3.54339 17.4435 3.06738 16.5005H3.50009C6.65487 16.5005 9.63295 15.044 11.5698 12.5537L12.0001 12.0005H12.0918C15.4706 12.0005 18.6259 13.6891 20.5001 16.5005L20.741 16.8618C19.0325 19.9271 15.7584 22.0005 12.0001 22.0005C10.0714 22.0005 8.27017 21.4545 6.74265 20.5085C9.83849 20.2961 12.8902 19.1239 15.4332 17.323Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.756 13.3262L12.0171 12.9939C15.365 13.0733 18.4787 14.6945 20.4402 17.3658C18.6653 20.1521 15.5485 22.0004 12 22.0004C10.7177 22.0004 9.49181 21.759 8.36522 21.3193C10.9132 20.7506 13.3607 19.6441 15.4931 18.1498C15.8324 17.9121 15.9146 17.4444 15.6769 17.1052C15.4392 16.766 14.9715 16.6837 14.6323 16.9214C12.1358 18.6709 9.19271 19.8341 6.21503 20.1582C5.33562 19.5335 4.56158 18.7701 3.92479 17.8999C7.00231 17.4197 9.81188 15.7997 11.756 13.3262Z" fill="currentColor" /><path d="M10.7467 12.1829L10.5766 12.3993C8.73919 14.7371 6.0175 16.2098 3.06576 16.4973C2.38398 15.1455 2 13.6178 2 12.0004C2 9.27197 3.09268 6.79877 4.86432 4.99452L4.86305 5.00018C4.3182 7.43465 4.2879 9.94289 4.77311 12.3869C4.85376 12.7932 5.24851 13.0572 5.65479 12.9765C6.06108 12.8959 6.32505 12.5011 6.24439 12.0948C5.67155 9.20938 5.8825 6.22512 6.87932 3.40914C7.93127 2.78079 9.1083 2.34017 10.3642 2.13352L10.1849 2.55936C8.86607 5.69148 9.08193 9.24003 10.7467 12.1829Z" fill="currentColor" /><path d="M12.0812 11.4951C10.6179 8.94495 10.4221 5.86133 11.5673 3.14144L12.0477 2.00049C16.6319 2.02191 20.4872 5.12788 21.6449 9.34959C19.4613 7.51653 16.8587 6.25953 14.0806 5.6775C13.6752 5.59256 13.2777 5.85236 13.1928 6.25777C13.1078 6.66318 13.3676 7.06069 13.773 7.14562C16.7254 7.76417 19.4587 9.21663 21.6241 11.3586L21.6261 11.3606L21.9965 11.7332C21.9988 11.822 22 11.911 22 12.0004C22 13.3881 21.7173 14.7097 21.2065 15.911C18.9642 13.2089 15.6375 11.5876 12.0812 11.4951Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconVolleyball2 as IconComponentType).keywords = [
  "volleyball",
  "2",
  "volleyball game",
  "handball",
  "tennis",
  "football",
  "weightlifting",
  "volley",
  "platoon",
  "airliner",
  "aircraft",
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

export default IconVolleyball2 as IconComponentType;