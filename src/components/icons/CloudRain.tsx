import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCloudRain: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M14.381 8.02721C14.9767 7.81911 15.6178 7.70588 16.2857 7.70588C16.9404 7.70588 17.5693 7.81468 18.1551 8.01498M7.11616 10.6089C6.8475 10.5567 6.56983 10.5294 6.28571 10.5294C3.91878 10.5294 2 12.4256 2 14.7647C2 16.0746 2.60178 17.2457 3.54704 18.0226M7.11616 10.6089C6.88706 9.9978 6.7619 9.33687 6.7619 8.64706C6.7619 5.52827 9.32028 3 12.4762 3C15.4159 3 17.8371 5.19371 18.1551 8.01498M7.11616 10.6089C7.68059 10.7184 8.20528 10.9374 8.66667 11.2426M18.1551 8.01498C20.393 8.78024 22 10.8811 22 13.3529C22 15.2939 21.0091 17.0061 19.5 18.0226" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M17 19L15 21" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M16 15.5L14 17.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M12 20L10 22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M11.5 15.5L9.5 17.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M7.5 19L5.5 21" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.0303 14.9697C12.3232 15.2626 12.3232 15.7374 12.0303 16.0303L10.0303 18.0303C9.73744 18.3232 9.26256 18.3232 8.96967 18.0303C8.67678 17.7374 8.67678 17.2626 8.96967 16.9697L10.9697 14.9697C11.2626 14.6768 11.7374 14.6768 12.0303 14.9697ZM16.5303 14.9697C16.8232 15.2626 16.8232 15.7374 16.5303 16.0303L14.5303 18.0303C14.2374 18.3232 13.7626 18.3232 13.4697 18.0303C13.1768 17.7374 13.1768 17.2626 13.4697 16.9697L15.4697 14.9697C15.7626 14.6768 16.2374 14.6768 16.5303 14.9697ZM8.03033 18.4697C8.32322 18.7626 8.32322 19.2374 8.03033 19.5303L6.03033 21.5303C5.73744 21.8232 5.26256 21.8232 4.96967 21.5303C4.67678 21.2374 4.67678 20.7626 4.96967 20.4697L6.96967 18.4697C7.26256 18.1768 7.73744 18.1768 8.03033 18.4697ZM17.5303 18.4697C17.8232 18.7626 17.8232 19.2374 17.5303 19.5303L15.5303 21.5303C15.2374 21.8232 14.7626 21.8232 14.4697 21.5303C14.1768 21.2374 14.1768 20.7626 14.4697 20.4697L16.4697 18.4697C16.7626 18.1768 17.2374 18.1768 17.5303 18.4697ZM12.5303 19.4697C12.8232 19.7626 12.8232 20.2374 12.5303 20.5303L10.5303 22.5303C10.2374 22.8232 9.76256 22.8232 9.46967 22.5303C9.17678 22.2374 9.17678 21.7626 9.46967 21.4697L11.4697 19.4697C11.7626 19.1768 12.2374 19.1768 12.5303 19.4697Z" fill="currentColor" /><path d="M12.0303 14.9697C12.3232 15.2626 12.3232 15.7374 12.0303 16.0303L10.0303 18.0303C9.91413 18.1465 9.7693 18.2166 9.61855 18.2406C9.3893 18.2771 9.14637 18.207 8.96967 18.0303C8.87927 17.9399 8.81677 17.8322 8.78218 17.7178C8.72864 17.5409 8.74191 17.348 8.82198 17.1789C8.85782 17.1032 8.90705 17.0323 8.96967 16.9697L10.9697 14.9697C11.2626 14.6768 11.7374 14.6768 12.0303 14.9697Z" fill="currentColor" /><path d="M15.4697 14.9697L13.4697 16.9697C13.1768 17.2626 13.1768 17.7374 13.4697 18.0303C13.7626 18.3232 14.2374 18.3232 14.5303 18.0303L16.5303 16.0303C16.8232 15.7374 16.8232 15.2626 16.5303 14.9697C16.2374 14.6768 15.7626 14.6768 15.4697 14.9697Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M16.2857 19C19.4416 19 22 16.4717 22 13.3529C22 10.8811 20.393 8.78024 18.1551 8.01498C17.8371 5.19371 15.4159 3 12.4762 3C9.32028 3 6.7619 5.52827 6.7619 8.64706C6.7619 9.33687 6.88706 9.9978 7.11616 10.6089C6.8475 10.5567 6.56983 10.5294 6.28571 10.5294C3.91878 10.5294 2 12.4256 2 14.7647C2 17.1038 3.91878 19 6.28571 19H16.2857Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.0303 14.9697C12.3232 15.2626 12.3232 15.7374 12.0303 16.0303L10.0303 18.0303C9.73744 18.3232 9.26256 18.3232 8.96967 18.0303C8.67678 17.7374 8.67678 17.2626 8.96967 16.9697L10.9697 14.9697C11.2626 14.6768 11.7374 14.6768 12.0303 14.9697ZM16.5303 14.9697C16.8232 15.2626 16.8232 15.7374 16.5303 16.0303L14.5303 18.0303C14.2374 18.3232 13.7626 18.3232 13.4697 18.0303C13.1768 17.7374 13.1768 17.2626 13.4697 16.9697L15.4697 14.9697C15.7626 14.6768 16.2374 14.6768 16.5303 14.9697ZM8.03033 18.4697C8.32322 18.7626 8.32322 19.2374 8.03033 19.5303L6.03033 21.5303C5.73744 21.8232 5.26256 21.8232 4.96967 21.5303C4.67678 21.2374 4.67678 20.7626 4.96967 20.4697L6.96967 18.4697C7.26256 18.1768 7.73744 18.1768 8.03033 18.4697ZM17.5303 18.4697C17.8232 18.7626 17.8232 19.2374 17.5303 19.5303L15.5303 21.5303C15.2374 21.8232 14.7626 21.8232 14.4697 21.5303C14.1768 21.2374 14.1768 20.7626 14.4697 20.4697L16.4697 18.4697C16.7626 18.1768 17.2374 18.1768 17.5303 18.4697ZM12.5303 19.4697C12.8232 19.7626 12.8232 20.2374 12.5303 20.5303L10.5303 22.5303C10.2374 22.8232 9.76256 22.8232 9.46967 22.5303C9.17678 22.2374 9.17678 21.7626 9.46967 21.4697L11.4697 19.4697C11.7626 19.1768 12.2374 19.1768 12.5303 19.4697Z" fill="currentColor" /><path d="M19.1238 18.2554C19.0156 17.9463 18.838 17.6561 18.591 17.409C18.3514 17.1694 18.0712 16.9951 17.7725 16.8862C18.4648 16.0033 18.4043 14.7223 17.591 13.909C16.7123 13.0303 15.2877 13.0303 14.409 13.909L13.6075 14.7105C13.4982 14.4182 13.326 14.1441 13.091 13.909C12.2123 13.0303 10.7877 13.0303 9.90901 13.909L7.90901 15.909C7.6625 16.1555 7.48514 16.445 7.37695 16.7533C6.8428 16.7824 6.31704 17.001 5.90901 17.409L4.64108 18.6769C3.09035 18.0396 2 16.528 2 14.7647C2 12.4256 3.91878 10.5294 6.28571 10.5294C6.56983 10.5294 6.8475 10.5567 7.11616 10.6089C6.88706 9.9978 6.7619 9.33687 6.7619 8.64706C6.7619 5.52827 9.32028 3 12.4762 3C15.4159 3 17.8371 5.19371 18.1551 8.01498C20.393 8.78024 22 10.8811 22 13.3529C22 15.4509 20.8423 17.2817 19.1238 18.2554Z" fill="currentColor" /><path d="M12.0303 14.9697C12.3232 15.2626 12.3232 15.7374 12.0303 16.0303L10.0303 18.0303C9.91413 18.1465 9.7693 18.2166 9.61855 18.2406C9.3893 18.2771 9.14637 18.207 8.96967 18.0303C8.87927 17.9399 8.81677 17.8322 8.78218 17.7178C8.72864 17.5409 8.74191 17.348 8.82198 17.1789C8.85782 17.1032 8.90705 17.0323 8.96967 16.9697L10.9697 14.9697C11.2626 14.6768 11.7374 14.6768 12.0303 14.9697Z" fill="currentColor" /><path d="M15.4697 14.9697L13.4697 16.9697C13.1768 17.2626 13.1768 17.7374 13.4697 18.0303C13.7626 18.3232 14.2374 18.3232 14.5303 18.0303L16.5303 16.0303C16.8232 15.7374 16.8232 15.2626 16.5303 14.9697C16.2374 14.6768 15.7626 14.6768 15.4697 14.9697Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCloudRain as IconComponentType).keywords = [
  "cloud",
  "rain",
  "fog",
  "mist",
  "befog",
  "haze over",
  "becloud",
  "dapple",
  "mottle",
  "sully",
  "defile",
  "rainwater",
  "rain down",
  "rainfall",
  "pelting",
  "flurry",
  "shower",
  "downpour",
  "rainy",
  "rainstorm"
];

export default IconCloudRain as IconComponentType;