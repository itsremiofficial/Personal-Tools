import { FC } from 'react';

const IconUserHeartRounded: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="6.00049" r="4" stroke="currentColor" strokeWidth={width} /><ellipse opacity={duotone ? "0.5" : "1"} cx="10" cy="17.0005" rx="7" ry="4" stroke="currentColor" strokeWidth={width} /><path d="M19 8.69184L18.4813 9.23356C18.7713 9.51126 19.2287 9.51126 19.5187 9.23356L19 8.69184ZM19.9571 12.3661L19.5135 11.7614L19.9571 12.3661ZM18.4865 11.7614C18.0686 11.4547 17.6081 11.0717 17.2595 10.6686C16.8912 10.2428 16.75 9.9118 16.75 9.69722H15.25C15.25 10.4671 15.6912 11.1483 16.1249 11.6498C16.5782 12.174 17.1391 12.6332 17.5992 12.9708L18.4865 11.7614ZM16.75 9.69722C16.75 9.12117 17.0126 8.87051 17.2419 8.79013C17.4922 8.70238 17.9558 8.73035 18.4813 9.23356L19.5187 8.15011C18.6943 7.36077 17.6579 7.05481 16.7457 7.37458C15.8125 7.70172 15.25 8.60004 15.25 9.69722H16.75ZM20.4008 12.9708C20.8609 12.6332 21.4218 12.174 21.8751 11.6498C22.3088 11.1483 22.75 10.4671 22.75 9.69721H21.25C21.25 9.9118 21.1088 10.2428 20.7405 10.6686C20.3919 11.0717 19.9314 11.4547 19.5135 11.7614L20.4008 12.9708ZM22.75 9.69721C22.75 8.60003 22.1875 7.70172 21.2543 7.37458C20.3421 7.05481 19.3057 7.36077 18.4813 8.15011L19.5187 9.23356C20.0442 8.73035 20.5078 8.70238 20.7581 8.79013C20.9874 8.87051 21.25 9.12116 21.25 9.69721H22.75ZM17.5992 12.9708C17.9678 13.2412 18.3816 13.578 19 13.578L19 12.078C18.9756 12.078 18.9605 12.078 18.9061 12.0493C18.8202 12.0039 18.7128 11.9274 18.4865 11.7614L17.5992 12.9708ZM19.5135 11.7614C19.2872 11.9274 19.1798 12.0039 19.0939 12.0493C19.0395 12.078 19.0244 12.078 19 12.078L19 13.578C19.6184 13.578 20.0322 13.2412 20.4008 12.9708L19.5135 11.7614Z" fill="currentColor" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="6.00049" r="4" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M18.0947 15.0316C17.6699 15.0005 17.1487 15.0005 16.5 15.0005C14.8501 15.0005 14.0251 15.0005 13.5126 15.5131C13 16.0256 13 16.8506 13 18.5005C13 19.6668 13 20.4209 13.1811 20.9438C12.7971 20.9811 12.4025 21.0005 12 21.0005C8.13401 21.0005 5 19.2096 5 17.0005C5 14.7913 8.13401 13.0005 12 13.0005C14.6134 13.0005 16.8924 13.8189 18.0947 15.0316Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M13.5126 21.4879C14.0251 22.0005 14.8501 22.0005 16.5 22.0005C18.1499 22.0005 18.9749 22.0005 19.4874 21.4879C20 20.9754 20 20.1504 20 18.5005C20 16.8506 20 16.0256 19.4874 15.5131C18.9749 15.0005 18.1499 15.0005 16.5 15.0005C14.8501 15.0005 14.0251 15.0005 13.5126 15.5131C13 16.0256 13 16.8506 13 18.5005C13 20.1504 13 20.9754 13.5126 21.4879ZM15.5266 19.977C14.8245 19.4743 14 18.8838 14 17.8603C14 16.7303 15.375 15.929 16.5 17.0153C17.625 15.929 19 16.7303 19 17.8603C19 18.8838 18.1755 19.4743 17.4734 19.977C17.4005 20.0292 17.3288 20.0805 17.2596 20.1312C17 20.3214 16.75 20.5005 16.5 20.5005C16.25 20.5005 16 20.3214 15.7404 20.1312C15.6712 20.0805 15.5995 20.0292 15.5266 19.977Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="6.00049" r="4" fill="currentColor" /><ellipse cx="10" cy="17.0005" rx="7" ry="4" fill="currentColor" /><path d="M16 9.69722C16 10.6816 17.1649 11.7218 18.0429 12.3661C18.4626 12.6741 18.6725 12.828 19 12.828C19.3275 12.828 19.5374 12.6741 19.9571 12.3661C20.8352 11.7218 22 10.6817 22 9.69721C22 8.02398 20.35 7.39928 19 8.69184C17.65 7.39928 16 8.02398 16 9.69722Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconUserHeartRounded as IconComponent).keywords = [
  "user",
  "heart",
  "rounded",
  "exploiter",
  "enjoyer",
  "drug user",
  "substance abuser",
  "customer",
  "client",
  "employer",
  "consumer",
  "employee",
  "nerve",
  "marrow",
  "eye",
  "nub",
  "pith",
  "bosom",
  "spunk",
  "core",
  "meat",
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

export default IconUserHeartRounded as IconComponent;