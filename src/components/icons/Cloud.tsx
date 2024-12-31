import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCloud: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.26906 13.0098C6.73906 12.7398 6.14906 12.5998 5.54906 12.5998C0.869062 12.9298 0.869062 19.7398 5.54906 20.0698H16.6391C17.9891 20.0798 19.2891 19.5798 20.2791 18.6698C23.5691 15.7998 21.8091 10.0298 17.4791 9.47976C15.9191 0.109757 2.38906 3.66976 5.59906 12.5998" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.8496 9.91977C16.3696 9.65977 16.9396 9.51977 17.5196 9.50977" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.4798 10.6901L2.00977 15.7201C2.11977 14.1301 3.10977 12.4601 5.10977 11.9701C4.51977 9.6401 5.01977 7.4501 6.53977 5.8601C8.26977 4.0501 11.0298 3.3301 13.4098 4.0701C15.5998 4.7401 17.1398 6.5401 17.6898 9.0401C18.7798 9.2901 19.7498 9.8601 20.4798 10.6901Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.17 18.7399C19.13 19.6899 17.77 20.2199 16.35 20.2199H5.97C3.23 20.0199 2 17.9099 2 16.0299C2 15.9299 2 15.8299 2.01 15.7199L20.48 10.6899C21.05 11.2999 21.48 12.0499 21.74 12.9099C22.4 15.0799 21.8 17.3099 20.17 18.7399Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCloud as IconComponentType).keywords = [
  "cloud",
  "fog",
  "mist",
  "befog",
  "haze over",
  "becloud",
  "dapple",
  "mottle",
  "sully",
  "defile"
];

export default IconCloud as IconComponentType;