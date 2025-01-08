import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const Icon3dRotate: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.37109 9.25977L12.6711 12.3298L17.9311 9.27976" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6709 17.7698V12.3198" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M11.4312 6.28986L8.23114 8.06986C7.51114 8.46986 6.91113 9.47985 6.91113 10.3099V13.6999C6.91113 14.5299 7.50114 15.5399 8.23114 15.9399L11.4312 17.7199C12.1112 18.0999 13.2311 18.0999 13.9211 17.7199L17.1212 15.9399C17.8412 15.5399 18.4411 14.5299 18.4411 13.6999V10.2999C18.4411 9.46986 17.8512 8.45985 17.1212 8.05985L13.9211 6.27985C13.2311 5.89985 12.1112 5.89986 11.4312 6.28986Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22.6709 15C22.6709 18.87 19.5409 22 15.6709 22L16.7209 20.25" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2.6709 9C2.6709 5.13 5.8009 2 9.6709 2L8.62091 3.75" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8.24813 2.91194C5.47902 3.55436 3.41992 6.03342 3.41992 9C3.41992 9.41421 3.08414 9.75 2.66992 9.75C2.25571 9.75 1.91992 9.41421 1.91992 9C1.91992 4.71579 5.38571 1.25 9.66992 1.25C9.94012 1.25 10.1894 1.39534 10.3226 1.63047C10.4557 1.8656 10.4521 2.15417 10.313 2.38587L9.26306 4.13587C9.04995 4.49105 8.58925 4.60623 8.23407 4.39312C7.87888 4.18001 7.7637 3.71932 7.97681 3.36413L8.24813 2.91194ZM22.6699 14.25C23.0841 14.25 23.4199 14.5858 23.4199 15C23.4199 19.2842 19.9541 22.75 15.6699 22.75C15.3997 22.75 15.1504 22.6047 15.0173 22.3695C14.8841 22.1344 14.8878 21.8458 15.0268 21.6141L16.0768 19.8641C16.2899 19.5089 16.7506 19.3938 17.1058 19.6069C17.461 19.82 17.5761 20.2807 17.363 20.6359L17.0917 21.0881C19.8608 20.4456 21.9199 17.9666 21.9199 15C21.9199 14.5858 22.2557 14.25 22.6699 14.25Z" fill="currentColor" /><path d="M17.0703 8.20996L13.3103 6.17996C12.9103 5.96996 12.4403 5.96996 12.0403 6.17996L8.2803 8.20996C8.0103 8.35996 7.84033 8.64996 7.84033 8.97996C7.84033 9.30996 8.0103 9.59996 8.2803 9.74996L12.0403 11.78C12.2403 11.89 12.4603 11.94 12.6803 11.94C12.9003 11.94 13.1203 11.89 13.3203 11.78L17.0803 9.74996C17.3503 9.59996 17.5203 9.30996 17.5203 8.97996C17.5103 8.64996 17.3403 8.35996 17.0703 8.20996Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M11.4102 12.4699L7.91016 10.7199C7.64016 10.5899 7.33016 10.5999 7.07016 10.7599C6.81016 10.9199 6.66016 11.1899 6.66016 11.4899V14.7999C6.66016 15.3699 6.98017 15.8899 7.49017 16.1399L10.9902 17.8899C11.1102 17.9499 11.2402 17.9799 11.3802 17.9799C11.5402 17.9799 11.6902 17.9399 11.8302 17.8499C12.0902 17.6899 12.2402 17.4199 12.2402 17.1199V13.8099C12.2402 13.2399 11.9302 12.7299 11.4102 12.4699Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.2603 10.7599C18.0003 10.5999 17.6903 10.5899 17.4203 10.7199L13.9203 12.4699C13.4103 12.7299 13.0903 13.2399 13.0903 13.8099V17.1199C13.0903 17.4199 13.2403 17.6899 13.5003 17.8499C13.6403 17.9399 13.7903 17.9799 13.9503 17.9799C14.0803 17.9799 14.2103 17.9499 14.3403 17.8899L17.8403 16.1399C18.3503 15.8799 18.6703 15.3699 18.6703 14.7999V11.4899C18.6703 11.1899 18.5203 10.9199 18.2603 10.7599Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.6711 22.7502C15.4011 22.7502 15.1511 22.6002 15.0211 22.3702C14.8911 22.1302 14.8911 21.8502 15.0311 21.6102L16.0811 19.8602C16.2911 19.5102 16.7511 19.3902 17.1111 19.6002C17.4711 19.8102 17.5811 20.2702 17.3711 20.6302L17.1011 21.0802C19.8611 20.4302 21.9311 17.9502 21.9311 14.9902C21.9311 14.5802 22.2711 14.2402 22.6811 14.2402C23.0911 14.2402 23.4311 14.5802 23.4311 14.9902C23.4211 19.2702 19.9411 22.7502 15.6711 22.7502Z" fill="currentColor" /><path d="M2.6709 9.75C2.2609 9.75 1.9209 9.41 1.9209 9C1.9209 4.73 5.4009 1.25 9.6709 1.25C9.9409 1.25 10.1909 1.4 10.3209 1.63C10.4509 1.87 10.4509 2.15 10.3109 2.39L9.2609 4.14C9.0509 4.49 8.5909 4.61 8.2309 4.39C7.8809 4.18 7.7609 3.72 7.9809 3.36L8.2509 2.91C5.4809 3.56 3.4209 6.04 3.4209 9C3.4209 9.41 3.0809 9.75 2.6709 9.75Z" fill="currentColor" /><path d="M17.0711 8.20996L13.3111 6.17996C12.9111 5.96996 12.4411 5.96996 12.0411 6.17996L8.27105 8.20996C8.00105 8.35996 7.83105 8.64996 7.83105 8.96996C7.83105 9.29996 8.00105 9.58996 8.27105 9.73996L12.0311 11.77C12.2311 11.88 12.4511 11.93 12.6711 11.93C12.8911 11.93 13.1111 11.88 13.3111 11.77L17.0711 9.73996C17.3411 9.58996 17.5111 9.29996 17.5111 8.96996C17.5111 8.64996 17.3411 8.35996 17.0711 8.20996Z" fill="currentColor" /><path d="M11.4109 12.4699L7.9109 10.7199C7.6409 10.5899 7.3309 10.5999 7.0709 10.7599C6.8209 10.9199 6.6709 11.1899 6.6709 11.4899V14.7999C6.6709 15.3699 6.9909 15.8899 7.5009 16.1399L11.0009 17.8899C11.1209 17.9499 11.2509 17.9799 11.3909 17.9799C11.5509 17.9799 11.7009 17.9399 11.8409 17.8499C12.1009 17.6899 12.2509 17.4199 12.2509 17.1199V13.8099C12.2409 13.2399 11.9309 12.7299 11.4109 12.4699Z" fill="currentColor" /><path d="M18.2608 10.7599C18.0008 10.5999 17.6908 10.5899 17.4208 10.7199L13.9208 12.4699C13.4108 12.7299 13.0908 13.2399 13.0908 13.8099V17.1199C13.0908 17.4199 13.2408 17.6899 13.5008 17.8499C13.6408 17.9399 13.7908 17.9799 13.9508 17.9799C14.0808 17.9799 14.2108 17.9499 14.3408 17.8899L17.8408 16.1399C18.3508 15.8799 18.6708 15.3699 18.6708 14.7999V11.4899C18.6708 11.1899 18.5208 10.9199 18.2608 10.7599Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(Icon3dRotate as IconComponentType).keywords = [
  "3d",
  "rotate",
  "3-d",
  "three-d",
  "postage",
  "qsar",
  "abit",
  "abstinent",
  "amityville",
  "arist",
  "barque",
  "go around",
  "revolve",
  "rotation",
  "rotational",
  "slue",
  "turn",
  "tilt",
  "spinning",
  "counterclockwise"
];

export default Icon3dRotate as IconComponentType;