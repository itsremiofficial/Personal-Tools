import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconSecurityCard: FC<IconProps> = ({
  className,
  fill = false,
  duotone = true,
  width = "1.5",
}) => {
  return (
    <>
      {!fill ? (
        <svg
          className={className}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.4099 17.75H18.3299C18.2399 17.83 18.1499 17.9 18.0599 17.98L13.7899 21.18C12.3799 22.23 10.0799 22.23 8.65993 21.18L4.37993 17.98C3.43993 17.28 2.66992 15.73 2.66992 14.56V7.14998C2.66992 5.92998 3.59993 4.57998 4.73993 4.14998L9.71992 2.27999C10.5399 1.96999 11.8999 1.96999 12.7199 2.27999L17.6899 4.14998C18.6399 4.50998 19.4499 5.50999 19.6999 6.52999H12.3999C12.1799 6.52999 11.9799 6.54 11.7899 6.54C9.93992 6.65 9.45992 7.31998 9.45992 9.42998V14.86C9.46992 17.16 10.0599 17.75 12.4099 17.75Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.46973 11.22H22.6697"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.6697 9.42001V14.97C22.6497 17.19 22.0397 17.74 19.7297 17.74H12.4097C10.0597 17.74 9.46973 17.15 9.46973 14.84V9.41C9.46973 7.31 9.94973 6.63999 11.7997 6.51999C11.9897 6.51999 12.1897 6.51001 12.4097 6.51001H19.7297C22.0797 6.52001 22.6697 7.10001 22.6697 9.42001Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.9902 15.26H13.3202"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.4199 15.26H18.6899"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : duotone ? (
        <svg
          className={className}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.0897 2.15994L4.58969 4.21994C3.53969 4.60994 2.67969 5.85993 2.67969 6.97993V15.0799C2.67969 15.8899 3.2097 16.9599 3.8597 17.4399L9.3597 21.5499C10.3297 22.2799 11.9197 22.2799 12.8897 21.5499L18.3897 17.4399C19.0397 16.9499 19.5697 15.8899 19.5697 15.0799V6.97993C19.5697 5.85993 18.7097 4.60994 17.6597 4.21994L12.1597 2.15994C11.5897 1.94994 10.6597 1.94994 10.0897 2.15994Z"
            fill="currentColor"
          />
          <path
            d="M19.9301 6.76001H13.0801C12.8801 6.76001 12.6901 6.77002 12.5101 6.77002C10.7901 6.87002 10.3301 7.50002 10.3301 9.46002V9.85002C10.3301 10.2642 10.6659 10.6 11.0801 10.6H21.9201C22.3343 10.6 22.6701 10.2642 22.6701 9.85002V9.46002C22.6701 7.30002 22.1201 6.76001 19.9301 6.76001Z"
            fill="currentColor"
          />
          <path
            d="M11.0898 11.7C10.6756 11.7 10.3398 12.0357 10.3398 12.45V14.5399C10.3398 16.6999 10.8898 17.25 13.0798 17.25H19.9298C22.0798 17.25 22.6498 16.73 22.6698 14.66V12.45C22.6698 12.0357 22.3341 11.7 21.9198 11.7H11.0898ZM13.9398 15.47H12.6898C12.3898 15.47 12.1498 15.2299 12.1498 14.9299C12.1498 14.6299 12.3898 14.39 12.6898 14.39H13.9398C14.2398 14.39 14.4798 14.6299 14.4798 14.9299C14.4798 15.2299 14.2398 15.47 13.9398 15.47ZM17.9899 15.47H15.4998C15.1998 15.47 14.9598 15.2299 14.9598 14.9299C14.9598 14.6299 15.1998 14.39 15.4998 14.39H17.9899C18.2899 14.39 18.5298 14.6299 18.5298 14.9299C18.5398 15.2299 18.2899 15.47 17.9899 15.47Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          className={className}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.1618 13.38H11.6718C11.3718 13.38 11.1318 13.62 11.1318 13.92C11.1318 14.22 11.3718 14.46 11.6718 14.46H14.1618C14.4618 14.46 14.7018 14.22 14.7018 13.92C14.7018 13.62 14.4618 13.38 14.1618 13.38Z"
            fill="currentColor"
          />
          <path
            d="M10.1123 13.38H8.86227C8.56227 13.38 8.32227 13.62 8.32227 13.92C8.32227 14.22 8.56227 14.46 8.86227 14.46H10.1123C10.4123 14.46 10.6523 14.22 10.6523 13.92C10.6523 13.62 10.4123 13.38 10.1123 13.38Z"
            fill="currentColor"
          />
          <path
            d="M19.2117 4.21994L13.7117 2.15994C13.1417 1.94994 12.2117 1.94994 11.6417 2.15994L6.14168 4.21994C5.08168 4.61994 4.22168 5.85994 4.22168 6.98994V15.0899C4.22168 15.8999 4.75168 16.9699 5.40168 17.4499L10.9017 21.5599C11.8717 22.2899 13.4617 22.2899 14.4317 21.5599L19.9317 17.4499C20.5817 16.9599 21.1117 15.8999 21.1117 15.0899V6.98994C21.1217 5.85994 20.2617 4.61994 19.2117 4.21994ZM18.8417 13.6499C18.8217 15.7199 18.2517 16.2399 16.1017 16.2399H9.25168C7.06168 16.2399 6.51168 15.6999 6.51168 13.5299V11.1999C6.51168 10.9199 6.73168 10.6999 7.01168 10.6999H18.3417C18.6217 10.6999 18.8417 10.9199 18.8417 11.1999V13.6499ZM18.8417 9.10994C18.8417 9.38994 18.6217 9.60994 18.3417 9.60994H7.01168C6.73168 9.60994 6.51168 9.38994 6.51168 9.10994V8.46994C6.51168 6.50994 6.97168 5.87994 8.68168 5.76994C8.86168 5.76994 9.05168 5.75994 9.25168 5.75994H16.1017C18.2917 5.75994 18.8417 6.29994 18.8417 8.46994V9.10994Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSecurityCard as IconComponentType).keywords = [
  "security",
  "card",
  "surety",
  "protection",
  "certificate",
  "security system",
  "security measures",
  "confidentiality",
  "safe",
  "secure",
  "peace",
  "scorecard",
  "batting order",
  "identity card",
  "visiting card",
  "calling card",
  "lineup",
  "poster",
  "placard",
  "tease",
];

export default IconSecurityCard as IconComponentType;
