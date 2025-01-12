import { FC } from 'react';

const IconBagTick: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M10.2891 16L11.7891 17.5L15.0391 14.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M9.47938 2L5.85938 5.63" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.8594 2L19.4794 5.63" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M2.66992 7.8501C2.66992 6.0001 3.65992 5.8501 4.88992 5.8501H20.4499C21.6799 5.8501 22.6699 6.0001 22.6699 7.8501C22.6699 10.0001 21.6799 9.8501 20.4499 9.8501H4.88992C3.65992 9.8501 2.66992 10.0001 2.66992 7.8501Z" stroke="currentColor" strokeWidth={width} /><path d="M4.16992 10L5.57992 18.64C5.89992 20.58 6.66992 22 9.52992 22H15.5599C18.6699 22 19.1299 20.64 19.4899 18.76L21.1699 10" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.9099 5.58006H19.5099L16.1299 2.20006C15.8599 1.93006 15.4199 1.93006 15.1399 2.20006C14.8699 2.47006 14.8699 2.91006 15.1399 3.19006L17.5299 5.58006H7.80992L10.1999 3.19006C10.4699 2.92006 10.4699 2.48006 10.1999 2.20006C9.92992 1.93006 9.48992 1.93006 9.20992 2.20006L5.83992 5.58006H5.43992C4.53992 5.58006 2.66992 5.58006 2.66992 8.14006C2.66992 9.11006 2.86992 9.75006 3.28992 10.1701C3.52992 10.4201 3.81992 10.5501 4.12992 10.6201C4.41992 10.6901 4.72992 10.7001 5.02992 10.7001H20.3099C20.6199 10.7001 20.9099 10.6801 21.1899 10.6201C22.0299 10.4201 22.6699 9.82006 22.6699 8.14006C22.6699 5.58006 20.7999 5.58006 19.9099 5.58006Z" fill="currentColor" /><path d="M20.3299 10.6999H5.02988C4.73988 10.6999 4.41988 10.6899 4.12988 10.6099L5.38988 18.2999C5.67988 20.0199 6.42988 21.9999 9.75988 21.9999H15.3699C18.7399 21.9999 19.3399 20.3099 19.6999 18.4199L21.2099 10.6099C20.9299 10.6799 20.6299 10.6999 20.3299 10.6999ZM15.5499 15.0499L12.2999 18.0499C12.1599 18.1799 11.9699 18.2499 11.7899 18.2499C11.5999 18.2499 11.4099 18.1799 11.2599 18.0299L9.75988 16.5299C9.46988 16.2399 9.46988 15.7599 9.75988 15.4699C10.0499 15.1799 10.5299 15.1799 10.8199 15.4699L11.8099 16.4599L14.5299 13.9499C14.8299 13.6699 15.3099 13.6899 15.5899 13.9899C15.8799 14.2999 15.8599 14.7699 15.5499 15.0499Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9099 5.58006H19.5099L16.1299 2.20006C15.8599 1.93006 15.4199 1.93006 15.1399 2.20006C14.8699 2.47006 14.8699 2.91006 15.1399 3.19006L17.5299 5.58006H7.80992L10.1999 3.19006C10.4699 2.92006 10.4699 2.48006 10.1999 2.20006C9.92992 1.93006 9.48992 1.93006 9.20992 2.20006L5.83992 5.58006H5.43992C4.53992 5.58006 2.66992 5.58006 2.66992 8.14006C2.66992 9.11006 2.86992 9.75006 3.28992 10.1701C3.52992 10.4201 3.81992 10.5501 4.12992 10.6201C4.41992 10.6901 4.72992 10.7001 5.02992 10.7001H20.3099C20.6199 10.7001 20.9099 10.6801 21.1899 10.6201C22.0299 10.4201 22.6699 9.82006 22.6699 8.14006C22.6699 5.58006 20.7999 5.58006 19.9099 5.58006Z" fill="currentColor" /><path d="M19.7596 12H5.57963C4.95963 12 4.48963 12.55 4.58963 13.16L5.42963 18.3C5.70963 20.02 6.45963 22 9.78963 22H15.3996C18.7696 22 19.3696 20.31 19.7296 18.42L20.7396 13.19C20.8596 12.57 20.3896 12 19.7596 12ZM15.5496 16.05L12.2996 19.05C12.1596 19.18 11.9796 19.25 11.7896 19.25C11.5996 19.25 11.4096 19.18 11.2596 19.03L9.75963 17.53C9.46963 17.24 9.46963 16.76 9.75963 16.47C10.0596 16.18 10.5296 16.18 10.8296 16.47L11.8196 17.46L14.5396 14.95C14.8396 14.67 15.3196 14.69 15.5996 14.99C15.8796 15.3 15.8596 15.77 15.5496 16.05Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBagTick as IconComponent).keywords = [
  "bag",
  "tick",
  "purse",
  "pocketbook",
  "handbag",
  "pocket",
  "bagful",
  "suitcase",
  "dish",
  "grip",
  "cup of tea",
  "click",
  "ticktock",
  "beat",
  "ticktack",
  "retick",
  "ixodid",
  "acarid",
  "spinose",
  "gene"
];

export default IconBagTick as IconComponent;