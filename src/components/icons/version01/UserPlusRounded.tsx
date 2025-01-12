import { FC } from 'react';

const IconUserPlusRounded: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="6.00049" r="4" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M15.5841 20.4371C14.5358 20.7949 13.3099 21.0005 12 21.0005C8.13401 21.0005 5 19.2096 5 17.0005C5 14.7913 8.13401 13.0005 12 13.0005C14.6083 13.0005 16.8834 13.8157 18.0877 15.0245" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M20.4141 18.5004H18.9999M18.9999 18.5004H17.5857M18.9999 18.5004L18.9999 17.0862M18.9999 18.5004L18.9999 19.9146" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="6.00049" r="4" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M18.0947 15.0316C17.6699 15.0005 17.1487 15.0005 16.5 15.0005C14.8501 15.0005 14.0251 15.0005 13.5126 15.5131C13 16.0256 13 16.8506 13 18.5005C13 19.6668 13 20.4209 13.1811 20.9438C12.7971 20.9811 12.4025 21.0005 12 21.0005C8.13401 21.0005 5 19.2096 5 17.0005C5 14.7913 8.13401 13.0005 12 13.0005C14.6134 13.0005 16.8924 13.8189 18.0947 15.0316Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M16.5 22.0005C14.8501 22.0005 14.0251 22.0005 13.5126 21.4879C13 20.9754 13 20.1504 13 18.5005C13 16.8506 13 16.0256 13.5126 15.5131C14.0251 15.0005 14.8501 15.0005 16.5 15.0005C18.1499 15.0005 18.9749 15.0005 19.4874 15.5131C20 16.0256 20 16.8506 20 18.5005C20 20.1504 20 20.9754 19.4874 21.4879C18.9749 22.0005 18.1499 22.0005 16.5 22.0005ZM17.0833 16.9449C17.0833 16.6228 16.8222 16.3616 16.5 16.3616C16.1778 16.3616 15.9167 16.6228 15.9167 16.9449V17.9172H14.9444C14.6223 17.9172 14.3611 18.1783 14.3611 18.5005C14.3611 18.8227 14.6223 19.0838 14.9444 19.0838H15.9167V20.056C15.9167 20.3782 16.1778 20.6394 16.5 20.6394C16.8222 20.6394 17.0833 20.3782 17.0833 20.056V19.0838H18.0556C18.3777 19.0838 18.6389 18.8227 18.6389 18.5005C18.6389 18.1783 18.3777 17.9172 18.0556 17.9172H17.0833V16.9449Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="6.00049" r="4" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M18.9999 16.3362C19.4141 16.3362 19.7499 16.672 19.7499 17.0862V17.7504H20.4141C20.8283 17.7504 21.1641 18.0862 21.1641 18.5004C21.1641 18.9146 20.8283 19.2504 20.4141 19.2504H19.7499V19.9146C19.7499 20.3288 19.4141 20.6646 18.9999 20.6646C18.5857 20.6646 18.2499 20.3288 18.2499 19.9146L18.2499 19.2504H17.5857C17.1715 19.2504 16.8357 18.9146 16.8357 18.5004C16.8357 18.0862 17.1715 17.7504 17.5857 17.7504H18.2499L18.2499 17.0862C18.2499 16.672 18.5857 16.3362 18.9999 16.3362Z" fill="currentColor" /><path d="M16.1421 20.2263C14.9822 20.7136 13.55 21.0015 12 21.0015C8.13401 21.0015 5 19.2106 5 17.0015C5 14.7923 8.13401 13.0015 12 13.0015C14.6101 13.0015 16.8866 13.8178 18.0902 15.028C17.5167 15.2819 17.0692 15.7684 16.8673 16.3678C15.9771 16.6677 15.3359 17.5093 15.3359 18.5006C15.3359 19.1937 15.6493 19.8136 16.1421 20.2263Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconUserPlusRounded as IconComponent).keywords = [
  "user",
  "plus",
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
  "addition",
  "summation",
  "advantageous",
  "positive",
  "asset",
  "nonnegative",
  "additional",
  "add",
  "along",
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

export default IconUserPlusRounded as IconComponent;