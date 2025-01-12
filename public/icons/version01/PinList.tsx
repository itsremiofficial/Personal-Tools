import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconPinList: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.6315 8.22382L13.2651 7.85744C11.735 6.32736 10.97 5.56232 10.1406 5.56299C9.86971 5.56321 9.60165 5.61847 9.35273 5.72542C8.59071 6.05283 8.19063 7.05807 7.39047 9.06855L7.33256 9.21406C7.10572 9.78403 6.9923 10.069 6.81015 10.2989C6.67197 10.4733 6.50565 10.6235 6.31804 10.7431C6.07076 10.9009 5.77568 10.9846 5.18554 11.1521C4.27042 11.4118 3.81287 11.5417 3.60981 11.8186C3.4589 12.0244 3.3924 12.2802 3.42392 12.5334C3.46633 12.8742 3.80265 13.2105 4.47529 13.8832L7.60579 17.0137C8.27843 17.6863 8.61475 18.0226 8.95553 18.065C9.20879 18.0966 9.46451 18.03 9.67033 17.8791C9.94727 17.6761 10.0771 17.2185 10.3369 16.3034C10.5044 15.7133 10.5881 15.4182 10.7458 15.1709C10.8655 14.9833 11.0156 14.817 11.19 14.6788C11.4199 14.4967 11.7049 14.3832 12.2749 14.1564L12.4204 14.0985C14.4309 13.2983 15.4361 12.8982 15.7635 12.1362C15.8705 11.8873 15.9257 11.6192 15.926 11.3483C15.9266 10.5189 15.1616 9.7539 13.6315 8.22382Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M3.34679 18.142L6.04053 15.4482" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M22 8H17" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M22 12.5H18" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M22 17H13" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.9508 8.59515L12.5872 8.23781C11.0688 6.7455 10.3096 5.99934 9.48648 6C9.21762 6.00021 8.9516 6.05411 8.70457 6.15843C7.94834 6.47775 7.5513 7.45818 6.75723 9.41903L6.69976 9.56094C6.47464 10.1168 6.36208 10.3948 6.18132 10.619C6.04419 10.7891 5.87913 10.9356 5.69296 11.0523C5.44755 11.2061 5.15472 11.2878 4.56906 11.4511C3.6609 11.7045 3.20682 11.8311 3.00531 12.1012C2.85555 12.302 2.78955 12.5514 2.82083 12.7984C2.86292 13.1307 3.19668 13.4588 3.86421 14.1148L4.88124 15.1143L5.92607 16.1412L5.94385 16.1586L6.97091 17.168C7.63844 17.8241 7.9722 18.1521 8.31039 18.1934C8.56172 18.2242 8.8155 18.1593 9.01975 18.0121C9.29459 17.8141 9.42347 17.3678 9.68122 16.4753C9.84744 15.8997 9.93055 15.6119 10.0871 15.3708C10.2058 15.1878 10.3548 15.0256 10.5279 14.8908C10.7561 14.7132 11.0389 14.6025 11.6045 14.3813L11.7489 14.3248C13.7441 13.5444 14.7417 13.1542 15.0666 12.411C15.1728 12.1682 15.2276 11.9068 15.2278 11.6425C15.2285 10.8336 14.4693 10.0875 12.9508 8.59515Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M3.2706 18.7857L5.94386 16.1586L5.92608 16.1411L4.88125 15.1143L2.218 17.7512C1.92733 18.0369 1.92733 18.5 2.218 18.7857C2.50867 19.0714 2.97993 19.0714 3.2706 18.7857Z" fill="currentColor" /><g opacity={duotone ? "0.5" : "1"}><path fillRule="evenodd" clipRule="evenodd" d="M22.0003 8.37699C22.0003 8.78098 21.667 9.10848 21.256 9.10848H16.294C15.8829 9.10848 15.5497 8.78098 15.5497 8.37699C15.5497 7.97301 15.8829 7.64551 16.294 7.64551H21.256C21.667 7.64551 22.0003 7.97301 22.0003 8.37699Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M22.0003 12.7659C22.0003 13.1699 21.667 13.4974 21.256 13.4974H17.2864C16.8753 13.4974 16.5421 13.1699 16.5421 12.7659C16.5421 12.3619 16.8753 12.0344 17.2864 12.0344H21.256C21.667 12.0344 22.0003 12.3619 22.0003 12.7659Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M22.0003 17.1548C22.0003 17.5588 21.667 17.8863 21.256 17.8863H12.3244C11.9133 17.8863 11.5801 17.5588 11.5801 17.1548C11.5801 16.7508 11.9133 16.4234 12.3244 16.4234H21.256C21.667 16.4234 22.0003 16.7508 22.0003 17.1548Z" fill="currentColor" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M22 8.37688C22 8.78086 21.6668 9.10836 21.2557 9.10836H16.2937C15.8826 9.10836 15.5494 8.78086 15.5494 8.37688C15.5494 7.97289 15.8826 7.64539 16.2937 7.64539H21.2557C21.6668 7.64539 22 7.97289 22 8.37688Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M22 12.7658C22 13.1698 21.6668 13.4973 21.2557 13.4973H17.2861C16.875 13.4973 16.5418 13.1698 16.5418 12.7658C16.5418 12.3618 16.875 12.0343 17.2861 12.0343H21.2557C21.6668 12.0343 22 12.3618 22 12.7658Z" fill="currentColor" /><path d="M12.5872 8.23781L12.9508 8.59515C14.4693 10.0875 15.2285 10.8336 15.2278 11.6425C15.2276 11.9068 15.1728 12.1682 15.0666 12.411C14.7417 13.1542 13.7441 13.5444 11.7489 14.3248L11.6045 14.3813C11.0389 14.6025 10.7561 14.7132 10.5279 14.8908C10.3548 15.0256 10.2058 15.1878 10.0871 15.3708C9.93056 15.6119 9.84745 15.8997 9.68123 16.4753C9.42348 17.3678 9.2946 17.8141 9.01976 18.0121C8.81551 18.1593 8.56173 18.2242 8.3104 18.1934C7.97221 18.1521 7.63845 17.8241 6.97092 17.168L5.94386 16.1586L3.2706 18.7858C2.97993 19.0714 2.50867 19.0714 2.218 18.7858C1.92733 18.5001 1.92733 18.0369 2.218 17.7513L4.88125 15.1143L3.86422 14.1148C3.1967 13.4588 2.86293 13.1307 2.82084 12.7984C2.78956 12.5514 2.85556 12.302 3.00532 12.1012C3.20683 11.8311 3.66091 11.7045 4.56907 11.4511C5.15473 11.2878 5.44756 11.2061 5.69297 11.0523C5.87915 10.9356 6.0442 10.7891 6.18133 10.619C6.36209 10.3948 6.47465 10.1168 6.69977 9.56094L6.75724 9.41903C7.55132 7.45818 7.94835 6.47775 8.70458 6.15843C8.95161 6.05411 9.21763 6.00021 9.4865 6C10.3096 5.99934 11.0688 6.7455 12.5872 8.23781Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M22 17.1547C22 17.5587 21.6668 17.8862 21.2557 17.8862H12.3241C11.9131 17.8862 11.5798 17.5587 11.5798 17.1547C11.5798 16.7507 11.9131 16.4232 12.3241 16.4232H21.2557C21.6668 16.4232 22 16.7507 22 17.1547Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconPinList;