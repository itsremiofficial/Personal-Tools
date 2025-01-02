import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBroom: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M10.5402 5.66998L7.12023 7.74999L5.56023 5.19C4.99023 4.25 5.29023 3.01 6.23023 2.44C7.17023 1.87 8.41023 2.16998 8.98023 3.10998L10.5402 5.66998Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.49 9.15997L9.33004 11.08C7.49004 12.2 6.93003 14.46 7.82003 16.26L9.87003 20.44C10.53 21.79 12.13 22.26 13.41 21.47L19.84 17.56C21.13 16.78 21.44 15.15 20.55 13.94L17.78 10.2C16.58 8.58001 14.33 8.03997 12.49 9.15997Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M11.4264 5.09797L6.30176 8.21857L8.38216 11.635L13.5068 8.51437L11.4264 5.09797Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14.9795 16.81L16.6295 19.52" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.4199 18.37L14.0699 21.08" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.54 15.25L19.19 17.96" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M10.5004 5.57001L7.03038 7.68L5.45038 5.08002C4.87038 4.13002 5.17039 2.86998 6.13039 2.28998C7.08039 1.70998 8.34038 2.00998 8.92038 2.96998L10.5004 5.57001Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M19.9396 17.64L19.9296 17.65L18.6296 18.44L17.3296 19.23L16.0296 20.02L14.7296 20.81L13.4296 21.6H13.4196C12.1096 22.4 10.4896 21.92 9.81958 20.55L7.7396 16.31C7.0096 14.83 7.23959 13.03 8.35959 11.8C8.61959 11.52 8.91959 11.26 9.26959 11.05L12.4796 9.1C12.8396 8.89 13.1996 8.73004 13.5696 8.64004C15.1696 8.20004 16.8696 8.82005 17.8496 10.15L20.6596 13.95C21.5696 15.2 21.2496 16.85 19.9396 17.64Z" fill="currentColor" /><path d="M13.5697 8.66C13.1997 8.75 12.8397 8.90002 12.4797 9.12002L9.26973 11.07C8.90973 11.28 8.61973 11.54 8.35973 11.82C8.34973 11.82 8.34972 11.81 8.34972 11.81L6.69972 9.08005C6.40972 8.60005 6.55972 7.97003 7.02972 7.69003L10.4997 5.58005C10.9797 5.29005 11.5997 5.44 11.8897 5.91L13.5497 8.64004C13.5597 8.65004 13.5697 8.65 13.5697 8.66Z" fill="currentColor" /><path d="M17.3303 19.23L16.0303 20.02L14.3603 17.27C14.1503 16.91 14.2603 16.45 14.6103 16.22C14.9803 16.01 15.4403 16.12 15.6603 16.47L17.3303 19.23Z" fill="currentColor" /><path d="M14.7296 20.82L13.4296 21.61L11.7596 18.86C11.5396 18.5 11.6496 18.04 12.0096 17.81C12.3696 17.6 12.8296 17.71 13.0596 18.06L14.7296 20.82Z" fill="currentColor" /><path d="M19.9299 17.65L18.6299 18.44L16.9599 15.69C16.7499 15.33 16.8599 14.87 17.2099 14.64C17.5799 14.43 18.0399 14.54 18.2599 14.89L19.9299 17.65Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.48997 4.9L8.20997 2.78C7.72997 2 6.77997 1.56 5.88997 1.82C4.54997 2.22 4.02997 3.73 4.69997 4.84L6.01997 7.01C6.16997 7.24 6.47997 7.32 6.70997 7.18L9.31997 5.59C9.55997 5.44 9.63997 5.13 9.48997 4.9Z" fill="currentColor" /><path d="M20.4103 14.21L17.6003 10.41C16.6203 9.08999 14.9203 8.46999 13.3203 8.89999C13.3203 8.88999 13.3103 8.88999 13.3103 8.87999L11.6503 6.14999C11.3503 5.67999 10.7303 5.52999 10.2603 5.81999L6.79029 7.92999C6.31029 8.20999 6.16029 8.83999 6.45029 9.31999L8.10029 12.05C8.10029 12.05 8.10029 12.06 8.11029 12.06C7.00029 13.29 6.76029 15.08 7.50029 16.57L9.58029 20.81C10.2203 22.12 11.7303 22.62 13.0103 21.96C13.1103 21.91 13.1403 21.79 13.0803 21.69L11.5203 19.11C11.3003 18.75 11.4103 18.29 11.7703 18.06C12.1303 17.85 12.5903 17.96 12.8203 18.31L14.3903 20.89C14.4503 20.98 14.5703 21.01 14.6603 20.96L15.6203 20.38C15.7103 20.32 15.7403 20.2 15.6903 20.11L14.1203 17.53C13.9103 17.17 14.0203 16.71 14.3703 16.48C14.7403 16.27 15.2003 16.38 15.4203 16.73L16.9903 19.31C17.0503 19.4 17.1703 19.43 17.2603 19.38L18.2203 18.8C18.3103 18.74 18.3403 18.62 18.2903 18.53L16.7203 15.95C16.5103 15.59 16.6203 15.13 16.9703 14.9C17.3403 14.69 17.8003 14.8 18.0203 15.15L19.6003 17.72C19.6603 17.81 19.7803 17.84 19.8703 17.78C21.0303 16.95 21.2903 15.39 20.4103 14.21Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBroom as IconComponentType).keywords = [
  "broom",
  "sweep",
  "heather",
  "ling",
  "calluna vulgaris",
  "scots heather",
  "broomstick",
  "mop",
  "dustpan",
  "sweeper"
];

export default IconBroom as IconComponentType;