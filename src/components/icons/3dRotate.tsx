import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const Icon3dRotate: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.70117 9.25977L12.0012 12.3298L17.2612 9.27976" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.002 17.7698V12.3198" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.7603 6.28986L7.56024 8.06986C6.84024 8.46986 6.24023 9.47985 6.24023 10.3099V13.6999C6.24023 14.5299 6.83024 15.5399 7.56024 15.9399L10.7603 17.7199C11.4403 18.0999 12.5602 18.0999 13.2502 17.7199L16.4503 15.9399C17.1703 15.5399 17.7702 14.5299 17.7702 13.6999V10.2999C17.7702 9.46986 17.1803 8.45985 16.4503 8.05985L13.2502 6.27985C12.5602 5.89985 11.4403 5.89986 10.7603 6.28986Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2 9C2 5.13 5.13 2 9 2L7.95001 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.57821 2.91194C4.8091 3.55436 2.75 6.03342 2.75 9C2.75 9.41421 2.41421 9.75 2 9.75C1.58579 9.75 1.25 9.41421 1.25 9C1.25 4.71579 4.71579 1.25 9 1.25C9.2702 1.25 9.51952 1.39534 9.65265 1.63047C9.78578 1.8656 9.78214 2.15417 9.64312 2.38587L8.59313 4.13587C8.38002 4.49105 7.91933 4.60623 7.56414 4.39312C7.20896 4.18001 7.09378 3.71932 7.30689 3.36413L7.57821 2.91194ZM22 14.25C22.4142 14.25 22.75 14.5858 22.75 15C22.75 19.2842 19.2842 22.75 15 22.75C14.7298 22.75 14.4805 22.6047 14.3474 22.3695C14.2142 22.1344 14.2179 21.8458 14.3569 21.6141L15.4069 19.8641C15.62 19.5089 16.0807 19.3938 16.4359 19.6069C16.791 19.82 16.9062 20.2807 16.6931 20.6359L16.4218 21.0881C19.1909 20.4456 21.25 17.9666 21.25 15C21.25 14.5858 21.5858 14.25 22 14.25Z" fill="currentColor" /><path d="M16.3999 8.20996L12.6399 6.17996C12.2399 5.96996 11.7699 5.96996 11.3699 6.17996L7.60989 8.20996C7.33989 8.35996 7.16992 8.64996 7.16992 8.97996C7.16992 9.30996 7.33989 9.59996 7.60989 9.74996L11.3699 11.78C11.5699 11.89 11.7899 11.94 12.0099 11.94C12.2299 11.94 12.4499 11.89 12.6499 11.78L16.4099 9.74996C16.6799 9.59996 16.8499 9.30996 16.8499 8.97996C16.8399 8.64996 16.6699 8.35996 16.3999 8.20996Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M10.7402 12.4699L7.24023 10.7199C6.97023 10.5899 6.66024 10.5999 6.40024 10.7599C6.14024 10.9199 5.99023 11.1899 5.99023 11.4899V14.7999C5.99023 15.3699 6.31025 15.8899 6.82025 16.1399L10.3203 17.8899C10.4403 17.9499 10.5702 17.9799 10.7102 17.9799C10.8702 17.9799 11.0202 17.9399 11.1602 17.8499C11.4202 17.6899 11.5703 17.4199 11.5703 17.1199V13.8099C11.5703 13.2399 11.2602 12.7299 10.7402 12.4699Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17.5899 10.7599C17.3299 10.5999 17.0199 10.5899 16.7499 10.7199L13.2499 12.4699C12.7399 12.7299 12.4199 13.2399 12.4199 13.8099V17.1199C12.4199 17.4199 12.5699 17.6899 12.8299 17.8499C12.9699 17.9399 13.1199 17.9799 13.2799 17.9799C13.4099 17.9799 13.5399 17.9499 13.6699 17.8899L17.1699 16.1399C17.6799 15.8799 17.9999 15.3699 17.9999 14.7999V11.4899C17.9999 11.1899 17.8499 10.9199 17.5899 10.7599Z" fill="currentColor" /></svg> 
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