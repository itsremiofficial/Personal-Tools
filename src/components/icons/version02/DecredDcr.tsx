import { FC } from 'react';

const IconDecredDcr: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.31992 7.64999L2.66992 4H7.66992L13.6699 10H9.16992C7.23992 10 5.66992 11.57 5.66992 13.5C5.66992 15.43 7.23992 17 9.16992 17H10.6699L13.6699 20H9.16992C5.57992 20 2.66992 17.09 2.66992 13.5C2.66992 11.01 4.06992 8.84 6.13992 7.75L6.31992 7.64999Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M19.0199 16.35L22.6699 20H17.6699L11.6699 14H16.1699C18.0999 14 19.6699 12.43 19.6699 10.5C19.6699 8.57 18.0999 7 16.1699 7H14.6699L11.6699 4H16.1699C19.7599 4 22.6699 6.91 22.6699 10.5C22.6699 12.99 21.2699 15.16 19.1999 16.25L19.0199 16.35Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.58" : "1"} d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path d="M6.31995 7.65L3.51996 4.85C3.20996 4.54 3.42994 4 3.87994 4H7.46994C7.59994 4 7.72995 4.05 7.81995 4.15L12.8199 9.15C13.1299 9.46 12.9099 10 12.4699 10H9.17996C7.24996 10 5.67996 11.57 5.67996 13.5C5.67996 15.43 7.24996 17 9.17996 17H10.68L12.83 19.15C13.14 19.46 12.9199 20 12.4799 20H9.18994C5.59994 20 2.68994 17.09 2.68994 13.5C2.68994 11.01 4.08994 8.84 6.15994 7.75L6.31995 7.65Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M19.0196 16.35L21.8196 19.15C22.1296 19.46 21.9096 20 21.4696 20H17.8796C17.7496 20 17.6196 19.95 17.5296 19.85L12.5296 14.85C12.2196 14.54 12.4396 14 12.8796 14H16.1696C18.0996 14 19.6696 12.43 19.6696 10.5C19.6696 8.57 18.0996 7 16.1696 7H14.6696L12.5196 4.85C12.2096 4.54 12.4296 4 12.8796 4H16.1696C19.7596 4 22.6696 6.91 22.6696 10.5C22.6696 12.99 21.2696 15.16 19.1996 16.25L19.0196 16.35Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.31967 7.64999L3.51968 4.85001C3.20968 4.54001 3.42969 4 3.86969 4H7.45969C7.58969 4 7.71969 4.04999 7.80969 4.14999L12.8097 9.14999C13.1197 9.45999 12.8997 10 12.4597 10H9.16968C7.23968 10 5.66968 11.57 5.66968 13.5C5.66968 15.43 7.23968 17 9.16968 17H10.6697L12.8197 19.15C13.1297 19.46 12.9097 20 12.4697 20H9.17969C5.58969 20 2.67969 17.09 2.67969 13.5C2.67969 11.01 4.07969 8.84 6.14969 7.75L6.31967 7.64999Z" fill="none" /><path d="M19.02 16.35L21.8199 19.15C22.1299 19.46 21.9099 20 21.4699 20H17.8799C17.7499 20 17.6199 19.95 17.5299 19.85L12.5299 14.85C12.2199 14.54 12.4399 14 12.8799 14H16.1699C18.0999 14 19.6699 12.43 19.6699 10.5C19.6699 8.57 18.0999 7 16.1699 7H14.6699L12.52 4.85001C12.21 4.54001 12.43 4 12.87 4H16.1599C19.7499 4 22.6599 6.91 22.6599 10.5C22.6599 12.99 21.2599 15.16 19.1899 16.25L19.02 16.35Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDecredDcr as IconComponent).keywords = [
  "decred",
  "dcr",
  "rcd",
  "crd",
  "cid",
  "crb",
  "drc",
  "rct",
  "acb",
  "rcu",
  "rsd"
];

export default IconDecredDcr as IconComponent;