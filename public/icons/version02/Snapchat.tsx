import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSnapchat: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} fillRule="evenodd" clipRule="evenodd" d="M17.9797 15.31C17.6897 15.47 17.4497 15.54 17.2497 15.59C17.0797 15.63 16.9397 15.67 16.8197 15.75C16.6897 15.83 16.6797 15.96 16.6597 16.08C16.6397 16.19 16.6297 16.28 16.5497 16.34C16.4597 16.4 16.2897 16.41 16.0597 16.42C15.7597 16.44 15.3797 16.45 14.9197 16.59C14.6997 16.67 14.4997 16.79 14.2997 16.91C13.8997 17.16 13.4497 17.43 12.6597 17.43C11.8797 17.43 11.4297 17.16 11.0297 16.91C10.8297 16.78 10.6297 16.66 10.3997 16.58C9.94971 16.44 9.5597 16.42 9.2597 16.41C9.0297 16.4 8.86971 16.39 8.76971 16.33C8.68971 16.28 8.67969 16.18 8.65969 16.07C8.63969 15.95 8.62969 15.82 8.49969 15.74C8.37969 15.66 8.22969 15.62 8.06969 15.57C7.86969 15.52 7.62971 15.46 7.33971 15.3C6.99971 15.11 7.19972 15 7.30972 14.94C9.23972 14.01 9.53971 12.57 9.54971 12.46C9.54971 12.45 9.54971 12.45 9.54971 12.44C9.56971 12.32 9.57969 12.22 9.43969 12.09C9.34969 12 9.0397 11.8 8.7897 11.64C8.6797 11.56 8.57971 11.5 8.51971 11.47C8.23971 11.27 8.11971 11.08 8.20971 10.83C8.26971 10.66 8.42971 10.6 8.58971 10.6C8.63971 10.6 8.69971 10.61 8.73971 10.62C8.91971 10.66 9.0997 10.73 9.2597 10.79C9.3697 10.84 9.45969 10.87 9.52969 10.89C9.54969 10.9 9.57971 10.9 9.58971 10.9C9.68971 10.9 9.71971 10.85 9.70971 10.75C9.70971 10.72 9.7097 10.69 9.6997 10.66C9.6797 10.31 9.64969 9.70001 9.68969 9.14001C9.76969 8.30001 10.0397 7.87001 10.3597 7.51001C10.5197 7.33001 11.2497 6.56 12.6397 6.56C14.0297 6.56 14.7597 7.33 14.9197 7.5C15.2397 7.87 15.5097 8.29001 15.5897 9.14001C15.6397 9.73001 15.5997 10.36 15.5697 10.71V10.74C15.5597 10.85 15.5897 10.89 15.6897 10.89C15.7097 10.89 15.7297 10.89 15.7497 10.88C15.8197 10.86 15.9097 10.83 16.0197 10.79C16.1697 10.73 16.3497 10.66 16.5397 10.62C16.5897 10.6 16.6397 10.6 16.6897 10.6C16.8597 10.6 17.0097 10.67 17.0697 10.84C17.1597 11.08 17.0397 11.27 16.7597 11.47C16.7097 11.51 16.6097 11.58 16.4897 11.64C16.2497 11.8 15.9297 12 15.8397 12.09C15.6997 12.22 15.7097 12.32 15.7297 12.44C15.7297 12.45 15.7297 12.46 15.7297 12.46C15.7497 12.57 16.0497 14.01 17.9697 14.94C18.1197 15 18.3197 15.12 17.9797 15.31Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinejoin="round" /><path d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.58" : "1"} d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M17.9797 15.3101C17.6897 15.4701 17.4497 15.5401 17.2497 15.5901C17.0797 15.6301 16.9397 15.6701 16.8197 15.7501C16.6897 15.8301 16.6797 15.9601 16.6597 16.0801C16.6397 16.1901 16.6297 16.2801 16.5497 16.3401C16.4597 16.4001 16.2897 16.4101 16.0597 16.4201C15.7597 16.4401 15.3797 16.4501 14.9197 16.5901C14.6997 16.6701 14.4997 16.7901 14.2997 16.9101C13.8997 17.1601 13.4497 17.4301 12.6597 17.4301C11.8797 17.4301 11.4297 17.1601 11.0297 16.9101C10.8297 16.7801 10.6297 16.6601 10.3997 16.5801C9.94971 16.4401 9.5597 16.4201 9.2597 16.4101C9.0297 16.4001 8.86971 16.3901 8.76971 16.3301C8.68971 16.2801 8.67969 16.1801 8.65969 16.0701C8.63969 15.9501 8.62969 15.8201 8.49969 15.7401C8.37969 15.6601 8.22969 15.6201 8.06969 15.5701C7.86969 15.5201 7.62971 15.4601 7.33971 15.3001C6.99971 15.1101 7.19972 15.0001 7.30972 14.9401C9.23972 14.0101 9.53971 12.5701 9.54971 12.4601C9.54971 12.4501 9.54971 12.4501 9.54971 12.4401C9.56971 12.3201 9.57969 12.2201 9.43969 12.0901C9.34969 12.0001 9.0397 11.8001 8.7897 11.6401C8.6797 11.5601 8.57971 11.5001 8.51971 11.4701C8.23971 11.2701 8.11971 11.0801 8.20971 10.8301C8.26971 10.6601 8.42971 10.6001 8.58971 10.6001C8.63971 10.6001 8.69971 10.6101 8.73971 10.6201C8.91971 10.6601 9.0997 10.7301 9.2597 10.7901C9.3697 10.8401 9.45969 10.8701 9.52969 10.8901C9.54969 10.9001 9.57971 10.9001 9.58971 10.9001C9.68971 10.9001 9.71971 10.8501 9.70971 10.7501C9.70971 10.7201 9.7097 10.6901 9.6997 10.6601C9.6797 10.3101 9.64969 9.70006 9.68969 9.14006C9.76969 8.30006 10.0397 7.87006 10.3597 7.51006C10.5197 7.33006 11.2497 6.56006 12.6397 6.56006C14.0297 6.56006 14.7597 7.33006 14.9197 7.50006C15.2397 7.87006 15.5097 8.29006 15.5897 9.14006C15.6397 9.73006 15.5997 10.3601 15.5697 10.7101V10.7401C15.5597 10.8501 15.5897 10.8901 15.6897 10.8901C15.7097 10.8901 15.7297 10.8901 15.7497 10.8801C15.8197 10.8601 15.9097 10.8301 16.0197 10.7901C16.1697 10.7301 16.3497 10.6601 16.5397 10.6201C16.5897 10.6001 16.6397 10.6001 16.6897 10.6001C16.8597 10.6001 17.0097 10.6701 17.0697 10.8401C17.1597 11.0801 17.0397 11.2701 16.7597 11.4701C16.7097 11.5101 16.6097 11.5801 16.4897 11.6401C16.2497 11.8001 15.9297 12.0001 15.8397 12.0901C15.6997 12.2201 15.7097 12.3201 15.7297 12.4401C15.7297 12.4501 15.7297 12.4601 15.7297 12.4601C15.7497 12.5701 16.0497 14.0101 17.9697 14.9401C18.1197 15.0001 18.3197 15.1201 17.9797 15.3101Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM17.9799 15.31C17.6899 15.47 17.4499 15.54 17.2499 15.59C17.0799 15.63 16.9399 15.67 16.8199 15.75C16.6899 15.83 16.6799 15.96 16.6599 16.08C16.6399 16.19 16.6299 16.28 16.5499 16.34C16.4599 16.4 16.2899 16.41 16.0599 16.42C15.7599 16.44 15.3799 16.45 14.9199 16.59C14.6999 16.67 14.4999 16.79 14.2999 16.91C13.8999 17.16 13.4499 17.43 12.6599 17.43C11.8799 17.43 11.4299 17.16 11.0299 16.91C10.8299 16.78 10.6299 16.66 10.3999 16.58C9.94993 16.44 9.55992 16.42 9.25992 16.41C9.02992 16.4 8.86993 16.39 8.76993 16.33C8.68993 16.28 8.67991 16.18 8.65991 16.07C8.63991 15.95 8.62991 15.82 8.49991 15.74C8.37991 15.66 8.22992 15.62 8.06992 15.57C7.86992 15.52 7.62994 15.46 7.33994 15.3C6.99994 15.11 7.19994 15 7.30994 14.94C9.23994 14.01 9.53993 12.57 9.54993 12.46C9.54993 12.45 9.54993 12.45 9.54993 12.44C9.56993 12.32 9.57991 12.22 9.43991 12.09C9.34991 12 9.03992 11.8 8.78992 11.64C8.67992 11.56 8.57993 11.5 8.51993 11.47C8.23993 11.27 8.11993 11.08 8.20993 10.83C8.26993 10.66 8.42994 10.6 8.58994 10.6C8.63994 10.6 8.69993 10.61 8.73993 10.62C8.91993 10.66 9.09992 10.73 9.25992 10.79C9.36992 10.84 9.45991 10.87 9.52991 10.89C9.54991 10.9 9.57994 10.9 9.58994 10.9C9.68994 10.9 9.71993 10.85 9.70993 10.75C9.70993 10.72 9.70992 10.69 9.69992 10.66C9.67992 10.31 9.64991 9.70001 9.68991 9.14001C9.76991 8.30001 10.0399 7.87001 10.3599 7.51001C10.5199 7.33001 11.2499 6.56 12.6399 6.56C14.0399 6.56 14.7599 7.33 14.9199 7.5C15.2399 7.87 15.5099 8.29001 15.5899 9.14001C15.6399 9.73001 15.5999 10.36 15.5699 10.71V10.74C15.5599 10.85 15.5899 10.89 15.6899 10.89C15.7099 10.89 15.7299 10.89 15.7499 10.88C15.8199 10.86 15.9099 10.83 16.0199 10.79C16.1699 10.73 16.3499 10.66 16.5399 10.62C16.5899 10.6 16.6399 10.6 16.6899 10.6C16.8599 10.6 17.0099 10.67 17.0699 10.84C17.1599 11.08 17.0399 11.27 16.7599 11.47C16.7099 11.51 16.6099 11.58 16.4899 11.64C16.2499 11.8 15.9299 12 15.8399 12.09C15.6999 12.22 15.7099 12.32 15.7299 12.44C15.7299 12.45 15.7299 12.46 15.7299 12.46C15.7499 12.57 16.0499 14.01 17.9699 14.94C18.1199 15 18.3199 15.12 17.9799 15.31Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSnapchat as IconComponentType).keywords = [
  "snapchat",
  "snapchatter",
  "instagram",
  "whatsapp",
  "insta",
  "tinder",
  "facetime",
  "skype",
  "instaverse",
  "tiktok"
];

export default IconSnapchat as IconComponentType;