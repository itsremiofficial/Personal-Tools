import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconEuro: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity={duotone ? "0.5" : "1"} cx="12" cy="12.0005" r="10" stroke="currentColor" strokeWidth={width} /><path d="M15 6.80318C14.1175 6.29267 13.0929 6.00049 12 6.00049C8.68629 6.00049 6 8.68678 6 12.0005C6 15.3142 8.68629 18.0005 12 18.0005C13.0929 18.0005 14.1175 17.7083 15 17.1978" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M5 10.5005H10" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M5 13.5005H10" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M12 22.0005C17.5228 22.0005 22 17.5233 22 12.0005C22 6.47764 17.5228 2.00049 12 2.00049C6.47715 2.00049 2 6.47764 2 12.0005C2 17.5233 6.47715 22.0005 12 22.0005Z" fill="currentColor" /><path d="M6.75 12.0005C6.75 11.7458 6.76813 11.4954 6.80317 11.2505H10C10.4142 11.2505 10.75 10.9147 10.75 10.5005C10.75 10.0863 10.4142 9.75049 10 9.75049H7.25522C8.09782 7.97678 9.9057 6.75049 12 6.75049C12.9575 6.75049 13.853 7.00613 14.6245 7.45239C14.983 7.65979 15.4418 7.53727 15.6492 7.17873C15.8566 6.82018 15.7341 6.36138 15.3755 6.15398C14.3819 5.57921 13.2282 5.25049 12 5.25049C9.06101 5.25049 6.56072 7.12881 5.63409 9.75049H5C4.58579 9.75049 4.25 10.0863 4.25 10.5005C4.25 10.9147 4.58579 11.2505 5 11.2505H5.2912C5.26397 11.4967 5.25 11.747 5.25 12.0005C5.25 12.254 5.26397 12.5042 5.2912 12.7505H5C4.58579 12.7505 4.25 13.0863 4.25 13.5005C4.25 13.9147 4.58579 14.2505 5 14.2505H5.63409C6.56072 16.8722 9.06101 18.7505 12 18.7505C13.2282 18.7505 14.3819 18.4218 15.3755 17.847C15.7341 17.6396 15.8566 17.1808 15.6492 16.8223C15.4418 16.4637 14.983 16.3412 14.6245 16.5486C13.853 16.9948 12.9575 17.2505 12 17.2505C9.9057 17.2505 8.09782 16.0242 7.25522 14.2505H10C10.4142 14.2505 10.75 13.9147 10.75 13.5005C10.75 13.0863 10.4142 12.7505 10 12.7505H6.80317C6.76813 12.5055 6.75 12.2551 6.75 12.0005Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 22.0005C17.5228 22.0005 22 17.5233 22 12.0005C22 6.47764 17.5228 2.00049 12 2.00049C6.47715 2.00049 2 6.47764 2 12.0005C2 17.5233 6.47715 22.0005 12 22.0005ZM6.75 12.0005C6.75 11.7458 6.76813 11.4954 6.80317 11.2505H10C10.4142 11.2505 10.75 10.9147 10.75 10.5005C10.75 10.0863 10.4142 9.75049 10 9.75049H7.25522C8.09782 7.97678 9.9057 6.75049 12 6.75049C12.9575 6.75049 13.853 7.00613 14.6245 7.45239C14.983 7.65979 15.4418 7.53727 15.6492 7.17873C15.8566 6.82018 15.7341 6.36138 15.3755 6.15398C14.3819 5.57921 13.2282 5.25049 12 5.25049C9.06101 5.25049 6.56072 7.12881 5.63409 9.75049H5C4.58579 9.75049 4.25 10.0863 4.25 10.5005C4.25 10.9147 4.58579 11.2505 5 11.2505H5.2912C5.26397 11.4967 5.25 11.747 5.25 12.0005C5.25 12.254 5.26397 12.5042 5.2912 12.7505H5C4.58579 12.7505 4.25 13.0863 4.25 13.5005C4.25 13.9147 4.58579 14.2505 5 14.2505H5.63409C6.56072 16.8722 9.06101 18.7505 12 18.7505C13.2282 18.7505 14.3819 18.4218 15.3755 17.847C15.7341 17.6396 15.8566 17.1808 15.6492 16.8223C15.4418 16.4637 14.983 16.3412 14.6245 16.5486C13.853 16.9948 12.9575 17.2505 12 17.2505C9.9057 17.2505 8.09782 16.0242 7.25522 14.2505H10C10.4142 14.2505 10.75 13.9147 10.75 13.5005C10.75 13.0863 10.4142 12.7505 10 12.7505H6.80317C6.76813 12.5055 6.75 12.2551 6.75 12.0005Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconEuro as IconComponentType).keywords = [
  "euro",
  "euroland",
  "eurozone",
  "coin",
  "ecu",
  "regional",
  "dollar",
  "ecb",
  "currency",
  "monetary"
];

export default IconEuro as IconComponentType;