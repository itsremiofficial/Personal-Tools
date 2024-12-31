import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconQuoteDown: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9991 11.65H16.1991C14.6691 11.65 13.6191 10.49 13.6191 9.07001V5.84998C13.6191 4.42998 14.6691 3.27002 16.1991 3.27002H19.4191C20.8391 3.27002 21.9991 4.42998 21.9991 5.84998V11.65Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.9988 11.6499C21.9988 17.6999 20.8688 18.6998 17.4688 20.7198" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M10.3702 11.65H4.57023C3.04023 11.65 1.99023 10.49 1.99023 9.07001V5.84998C1.99023 4.42998 3.04023 3.27002 4.57023 3.27002H7.80023C9.22023 3.27002 10.3802 4.42998 10.3802 5.84998V11.65" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.3698 11.6499C10.3698 17.6999 9.23984 18.6998 5.83984 20.7198" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.9101 12.3699H20.6001C20.5201 17.0399 19.6001 17.8099 16.7301 19.5099C16.4001 19.7099 16.2901 20.1299 16.4901 20.4699C16.6901 20.7999 17.1101 20.91 17.4501 20.71C20.8301 18.71 22.0101 17.4899 22.0101 11.6699V6.27997C22.0101 4.56997 20.6201 3.18994 18.9201 3.18994H15.9201C14.1601 3.18994 12.8301 4.51997 12.8301 6.27997V9.27997C12.8201 11.04 14.1501 12.3699 15.9101 12.3699Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M5.08982 12.3699H9.77982C9.69982 17.0399 8.77982 17.8099 5.90982 19.5099C5.57982 19.7099 5.46982 20.1299 5.66982 20.4699C5.86982 20.7999 6.28982 20.91 6.62982 20.71C10.0098 18.71 11.1898 17.4899 11.1898 11.6699V6.27997C11.1898 4.56997 9.79982 3.18994 8.09982 3.18994H5.09982C3.33982 3.18994 2.00982 4.51997 2.00982 6.27997V9.27997C1.99982 11.04 3.32982 12.3699 5.08982 12.3699Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconQuoteDown as IconComponentType).keywords = [
  "quote",
  "down",
  "quotation",
  "cite",
  "quotation mark",
  "inverted comma",
  "cited",
  "phrase",
  "naming",
  "recite",
  "read",
  "downwards",
  "downward",
  "downbound",
  "falling",
  "fallen",
  "pull down",
  "downwardly",
  "declining",
  "descending"
];

export default IconQuoteDown as IconComponentType;