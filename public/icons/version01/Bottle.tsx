import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBottle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.4508 8.27856L19.1984 8.21867L18.4508 8.27856ZM18.4651 8.46623L19.2136 8.41863L18.4651 8.46623ZM16.6137 12.8999L17.1092 13.4629V13.4629L16.6137 12.8999ZM16.7511 12.778L17.2562 13.3324V13.3324L16.7511 12.778ZM10.0702 8.95805L10.8094 9.08482L10.0702 8.95805ZM10.1026 8.77301L10.8397 8.91195L10.1026 8.77301ZM12.9874 4.98738L13.3182 5.66048V5.66048L12.9874 4.98738ZM12.8245 5.0683L13.1671 5.73548L12.8245 5.0683ZM7.73204 13.466L7.2062 12.9312L7.73204 13.466ZM7.8603 13.3392L8.39225 13.8679L7.8603 13.3392ZM10.0385 9.13948L10.7763 9.2744L10.0385 9.13948ZM14.0411 17.2666L14.7726 17.4324L14.0411 17.2666ZM14.0823 17.0873L13.3527 16.9135L14.0823 17.0873ZM16.4789 13.0192L16.9809 13.5765L16.4789 13.0192ZM7.65135 20.4127L8.03836 19.7702H8.03835L7.65135 20.4127ZM5.46243 18.81L4.84069 19.2295L5.46243 18.81ZM6.9476 14.2373L7.47343 14.7721L6.9476 14.2373ZM5.17824 16.3162L4.47735 16.0493L5.17824 16.3162ZM8.31569 20.8129L7.92868 21.4553H7.92868L8.31569 20.8129ZM10.7404 21.9894L10.6702 22.7362L10.7404 21.9894ZM13.7931 18.3611L13.0617 18.1954L13.7931 18.3611ZM12.9523 20.9994L13.5501 21.4523L12.9523 20.9994ZM18.3395 2.89871L18.7265 2.25628L18.7265 2.25628L18.3395 2.89871ZM18.7506 3.20707L19.3826 2.80335L18.7506 3.20707ZM18.6267 3.97131L19.2829 4.33443H19.2829L18.6267 3.97131ZM18.8287 3.49881L18.0794 3.46492L18.8287 3.49881ZM16.446 2.72636L15.7898 2.36324V2.36324L16.446 2.72636ZM16.7589 2.27873L17.1718 2.90479L16.7589 2.27873ZM17.5588 2.42842L17.1718 3.07086L17.1718 3.07086L17.5588 2.42842ZM17.0641 2.197L17.109 1.44835L17.0641 2.197ZM15.6325 4.13961L17.7846 5.43608L18.5586 4.1512L16.4065 2.85474L15.6325 4.13961ZM8.70269 20.1704L8.03836 19.7702L7.26434 21.0551L7.92868 21.4553L8.70269 20.1704ZM13.3097 17.1009L13.0617 18.1954L14.5246 18.5268L14.7726 17.4324L13.3097 17.1009ZM7.47343 14.7721L8.25788 14.0008L7.2062 12.9312L6.42176 13.7025L7.47343 14.7721ZM13.3182 5.66048L16.3503 4.17027L15.6887 2.82407L12.6566 4.31428L13.3182 5.66048ZM17.424 4.85353L17.7032 8.33845L19.1984 8.21867L18.9192 4.73375L17.424 4.85353ZM16.6757 3.86029L17.1022 3.08948L15.7898 2.36324L15.3632 3.13405L16.6757 3.86029ZM17.1718 3.07086L17.9525 3.54115L18.7265 2.25628L17.9458 1.78598L17.1718 3.07086ZM17.9704 3.60819L17.5154 4.43052L18.8279 5.15676L19.2829 4.33443L17.9704 3.60819ZM17.7032 8.33845C17.711 8.43602 17.7142 8.47633 17.7166 8.51383L19.2136 8.41863C19.2102 8.36594 19.2058 8.31121 19.1984 8.21867L17.7032 8.33845ZM17.1092 13.4629C17.177 13.4032 17.2177 13.3675 17.2562 13.3324L16.2459 12.2236C16.2192 12.248 16.1901 12.2737 16.1182 12.3369L17.1092 13.4629ZM17.7166 8.51383C17.8068 9.93188 17.2577 11.3018 16.2459 12.2236L17.2562 13.3324C18.614 12.0953 19.3318 10.2781 19.2136 8.41863L17.7166 8.51383ZM10.8094 9.08482C10.8259 8.98849 10.8327 8.94875 10.8397 8.91195L9.36562 8.63407C9.35585 8.68589 9.3466 8.73996 9.33094 8.83128L10.8094 9.08482ZM12.6566 4.31428C12.5763 4.35373 12.528 4.37745 12.4819 4.40112L13.1671 5.73548C13.1987 5.71925 13.2331 5.70231 13.3182 5.66048L12.6566 4.31428ZM10.8397 8.91195C11.1019 7.52066 11.9683 6.35104 13.1671 5.73548L12.4819 4.40112C10.856 5.23601 9.71048 6.8048 9.36562 8.63407L10.8397 8.91195ZM8.25788 14.0008C8.32135 13.9384 8.35726 13.9031 8.39225 13.8679L7.32835 12.8105C7.30084 12.8382 7.27207 12.8665 7.2062 12.9312L8.25788 14.0008ZM9.33094 8.83128C9.31502 8.92415 9.30799 8.96507 9.30077 9.00457L10.7763 9.2744C10.7854 9.22488 10.794 9.17451 10.8094 9.08482L9.33094 8.83128ZM8.39225 13.8679C9.62602 12.6265 10.4568 11.0217 10.7763 9.2744L9.30077 9.00457C9.03457 10.4602 8.3439 11.7887 7.32835 12.8105L8.39225 13.8679ZM14.7726 17.4324C14.7934 17.3405 14.8026 17.3001 14.8118 17.2611L13.3527 16.9135C13.341 16.9624 13.3297 17.0122 13.3097 17.1009L14.7726 17.4324ZM16.1182 12.3369C16.0516 12.3955 16.0138 12.4287 15.977 12.4619L16.9809 13.5765C17.0098 13.5504 17.04 13.5239 17.1092 13.4629L16.1182 12.3369ZM14.8118 17.2611C15.1543 15.8236 15.9137 14.5377 16.9809 13.5765L15.977 12.4619C14.6786 13.6314 13.764 15.1869 13.3527 16.9135L14.8118 17.2611ZM8.03835 19.7702C7.40696 19.3899 6.96744 19.1246 6.64293 18.8963C6.32139 18.6701 6.17087 18.5191 6.08417 18.3906L4.84069 19.2295C5.0768 19.5794 5.39871 19.855 5.7799 20.1232C6.15814 20.3892 6.65167 20.686 7.26434 21.0551L8.03835 19.7702ZM6.42176 13.7025C5.9085 14.2072 5.49546 14.6127 5.18769 14.9609C4.8776 15.3118 4.62759 15.6548 4.47735 16.0493L5.87912 16.5832C5.93538 16.4355 6.04909 16.2513 6.31158 15.9544C6.57638 15.6548 6.94479 15.2919 7.47343 14.7721L6.42176 13.7025ZM6.08417 18.3906C5.7293 17.8645 5.65061 17.1832 5.87912 16.5832L4.47735 16.0493C4.07619 17.1026 4.21119 18.2964 4.84069 19.2295L6.08417 18.3906ZM7.92868 21.4553C8.54123 21.8243 9.0345 22.122 9.44478 22.3309C9.85683 22.5407 10.2516 22.6968 10.6702 22.7362L10.8105 21.2427C10.6706 21.2296 10.475 21.1722 10.1254 20.9942C9.774 20.8152 9.33421 20.5508 8.70269 20.1704L7.92868 21.4553ZM13.0617 18.1954C12.8947 18.9325 12.7774 19.4484 12.6606 19.839C12.5444 20.2281 12.4476 20.4235 12.3545 20.5464L13.5501 21.4523C13.8038 21.1175 13.9627 20.7207 14.0979 20.2685C14.2325 19.8178 14.3622 19.2435 14.5246 18.5268L13.0617 18.1954ZM10.6702 22.7362C11.7877 22.8411 12.8691 22.3511 13.5501 21.4523L12.3545 20.5464C11.9781 21.0433 11.3963 21.2977 10.8105 21.2427L10.6702 22.7362ZM17.9525 3.54115C18.0119 3.57696 18.0573 3.6043 18.0958 3.62834C18.1344 3.65238 18.1571 3.66759 18.1711 3.67763C18.1995 3.69799 18.1593 3.67472 18.1185 3.61079L19.3826 2.80335C19.2787 2.64071 19.149 2.53315 19.0457 2.45895C18.9496 2.39001 18.8321 2.31989 18.7265 2.25628L17.9525 3.54115ZM19.2829 4.33443C19.3426 4.22655 19.4093 4.10712 19.4581 3.99939C19.5106 3.88346 19.5692 3.72548 19.5779 3.5327L18.0794 3.46492C18.0829 3.38914 18.106 3.34891 18.0916 3.38073C18.0845 3.39641 18.0724 3.42096 18.051 3.46105C18.0296 3.50113 18.004 3.54746 17.9704 3.60819L19.2829 4.33443ZM18.1185 3.61079C18.0907 3.56735 18.0771 3.51641 18.0794 3.46492L19.5779 3.5327C19.5895 3.27526 19.5213 3.02053 19.3826 2.80335L18.1185 3.61079ZM17.1022 3.08948C17.1381 3.02464 17.1656 2.97492 17.1899 2.9326C17.2143 2.89026 17.2299 2.86489 17.2405 2.84905C17.2624 2.81622 17.2395 2.86016 17.1718 2.90479L16.3459 1.65267C16.1756 1.76501 16.0664 1.90612 15.9925 2.01685C15.9234 2.12052 15.8537 2.24762 15.7898 2.36324L17.1022 3.08948ZM17.9458 1.78598C17.8326 1.7178 17.7088 1.6425 17.5971 1.58724C17.4778 1.52822 17.3127 1.46056 17.109 1.44835L17.0192 2.94566C16.9383 2.9408 16.8965 2.91418 16.9319 2.93167C16.949 2.94012 16.9752 2.95427 17.0174 2.9788C17.0596 3.00331 17.1083 3.03262 17.1718 3.07086L17.9458 1.78598ZM17.1718 2.90479C17.1267 2.93456 17.0732 2.94889 17.0192 2.94566L17.109 1.44835C16.8392 1.43217 16.5715 1.50386 16.3459 1.65267L17.1718 2.90479Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M10 9.50011L11.4523 8.77393C12.3958 8.3022 13.5275 8.42208 14.3512 9.08103C15.0675 9.65409 16.0255 9.82495 16.8957 9.53486L18.5 9.00011" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M16.1557 3.3175L18.3344 4.62999L18.617 8.15798C18.6247 8.25421 18.6286 8.30232 18.6315 8.34797C18.737 10.007 18.0957 11.6203 16.8963 12.7131C16.8633 12.7431 16.8279 12.7742 16.7572 12.8364C16.6885 12.897 16.6541 12.9272 16.6208 12.9572C15.4234 14.0357 14.576 15.474 14.1945 17.0756C14.1839 17.1201 14.1735 17.1658 14.1528 17.2571L13.9018 18.3651C13.5684 19.8368 13.4016 20.5726 13.0506 21.036C12.5153 21.7424 11.6734 22.1193 10.8113 22.0383C10.2458 21.9852 9.6161 21.6059 8.35666 20.8472L7.68411 20.442C6.42467 19.6833 5.79495 19.304 5.46815 18.8196C4.96988 18.081 4.86171 17.1319 5.18044 16.295C5.38948 15.7461 5.91688 15.2275 6.97166 14.1904L7.7658 13.4095C7.83127 13.3452 7.86401 13.313 7.89565 13.2811C9.03421 12.1356 9.80432 10.6508 10.1008 9.02954C10.109 8.98449 10.117 8.93828 10.1328 8.84586C10.1491 8.75089 10.1572 8.7034 10.1657 8.65854C10.473 7.02836 11.4914 5.64223 12.9212 4.90805C12.9605 4.88785 13.0024 4.86727 13.0861 4.82613L16.1557 3.3175Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M16.8963 12.7127C17.9626 11.7411 18.5878 10.3582 18.6393 8.89745L17.0427 9.42963C16.1617 9.7233 15.1919 9.55033 14.4667 8.97019C13.6329 8.3031 12.4872 8.18173 11.5321 8.6593L10.0618 9.39445L10.0207 9.41496C9.67894 10.8855 8.94327 12.2267 7.89565 13.2808C7.86401 13.3126 7.83127 13.3448 7.7658 13.4092L6.97166 14.19C5.91688 15.2272 5.38948 15.7457 5.18044 16.2946C4.86171 17.1315 4.96988 18.0806 5.46815 18.8192C5.79495 19.3036 6.42467 19.683 7.68411 20.4417L8.35666 20.8468C9.6161 21.6055 10.2458 21.9848 10.8113 22.0379C11.6734 22.1189 12.5153 21.7421 13.0506 21.0356C13.4016 20.5723 13.5684 19.8364 13.9018 18.3648L14.1528 17.2568C14.1735 17.1654 14.1839 17.1197 14.1945 17.0752C14.576 15.4736 15.4234 14.0354 16.6208 12.9568C16.6541 12.9269 16.6885 12.8966 16.7572 12.8361C16.8279 12.7739 16.8633 12.7428 16.8963 12.7127Z" fill="currentColor" /><path d="M16.1553 3.31727L18.334 4.62976L18.7947 3.79726C18.9274 3.55734 18.9938 3.43737 18.9992 3.31892C19.0039 3.21468 18.9763 3.11152 18.9201 3.02358C18.8563 2.92365 18.7388 2.85291 18.504 2.71141L17.7136 2.23531C17.4626 2.08409 17.3371 2.00848 17.2128 2.00103C17.1036 1.99448 16.9952 2.02351 16.9038 2.08377C16.7999 2.15231 16.7289 2.28052 16.5871 2.53693L16.1553 3.31727Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M15.9925 2.01667C15.927 2.11493 15.861 2.23426 15.7998 2.34489L15.4773 2.92778L12.6497 4.31748C12.5735 4.35492 12.5266 4.37795 12.4819 4.40094C10.856 5.23583 9.71047 6.80462 9.36562 8.63388C9.35611 8.68431 9.34708 8.73697 9.33217 8.8239L9.33094 8.8311C9.31501 8.92397 9.30798 8.96489 9.30076 9.00438C9.03456 10.4601 8.3439 11.7885 7.32835 12.8103C7.30083 12.838 7.27207 12.8663 7.20619 12.931L6.4018 13.722C5.89777 14.2176 5.49146 14.6171 5.18768 14.9608C4.87759 15.3116 4.62758 15.6546 4.47734 16.0491C4.07618 17.1024 4.21118 18.2962 4.84068 19.2293C5.07679 19.5793 5.39871 19.8548 5.7799 20.123C6.15313 20.3855 6.63864 20.678 7.24012 21.0403L7.95314 21.4698C8.55438 21.832 9.03997 22.1246 9.44477 22.3307C9.85683 22.5405 10.2515 22.6967 10.6702 22.736C11.7877 22.8409 12.8691 22.3509 13.5501 21.4521C13.8038 21.1173 13.9627 20.7205 14.0978 20.2683C14.2308 19.8232 14.359 19.2575 14.5185 18.5534L14.7726 17.4322C14.7934 17.3404 14.8025 17.2999 14.8118 17.2609C15.1543 15.8234 15.9137 14.5375 16.9809 13.5763C17.0098 13.5503 17.04 13.5237 17.1092 13.4628L17.1147 13.4579C17.1793 13.4011 17.2187 13.3664 17.2562 13.3322C18.614 12.0952 19.3318 10.2779 19.2136 8.41845C19.2103 8.36721 19.206 8.31391 19.199 8.22592L18.9373 4.95884L19.2924 4.317C19.3496 4.21374 19.4119 4.10123 19.4581 3.99921C19.5106 3.88328 19.5692 3.7253 19.5779 3.53251C19.5895 3.27508 19.5213 3.02034 19.3826 2.80317C19.2787 2.64053 19.149 2.53297 19.0456 2.45877C18.9547 2.39348 18.8445 2.32713 18.7434 2.26625L17.928 1.77507C17.8197 1.70982 17.7029 1.63943 17.5971 1.58706C17.4778 1.52803 17.3127 1.46038 17.109 1.44817C16.8392 1.43198 16.5715 1.50367 16.3459 1.65249C16.1756 1.76482 16.0663 1.90593 15.9925 2.01667ZM15.983 4.3506L17.4548 5.23719L17.7032 8.33827C17.7083 8.40221 17.7115 8.44156 17.7137 8.47165L16.6585 8.82335C16.0296 9.03299 15.3373 8.90952 14.8196 8.49539C13.7675 7.65369 12.322 7.50056 11.1169 8.10312L11.0572 8.13296C11.4489 7.08941 12.1998 6.23199 13.1671 5.7353C13.1987 5.71906 13.2331 5.70213 13.3182 5.66029L15.983 4.3506Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBottle as IconComponentType).keywords = [
  "bottle",
  "cup",
  "jar",
  "vial",
  "bottleneck",
  "teapot",
  "pot",
  "pint",
  "canteen",
  "liquor"
];

export default IconBottle as IconComponentType;