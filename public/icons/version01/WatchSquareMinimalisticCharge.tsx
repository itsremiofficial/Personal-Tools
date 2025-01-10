import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconWatchSquareMinimalisticCharge: FC<IconProps> = ({
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
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M5 12.0005C5 9.19156 5 7.7871 5.67412 6.77821C5.96596 6.34145 6.34096 5.96644 6.77772 5.67461C7.78661 5.00049 9.19108 5.00049 12 5.00049C14.8089 5.00049 16.2134 5.00049 17.2223 5.67461C17.659 5.96644 18.034 6.34145 18.3259 6.77821C19 7.7871 19 9.19156 19 12.0005C19 14.8094 19 16.2139 18.3259 17.2228C18.034 17.6595 17.659 18.0345 17.2223 18.3264C16.2134 19.0005 14.8089 19.0005 12 19.0005C9.19108 19.0005 7.78661 19.0005 6.77772 18.3264C6.34096 18.0345 5.96596 17.6595 5.67412 17.2228C5 16.2139 5 14.8094 5 12.0005Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M12.8571 9.00049L10 12.0005H14L11.1429 15.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 2.00049H17"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M7 22.0005H17"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
        </svg>
      ) : duotone ? (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M6.77772 18.3264C7.78661 19.0005 9.19108 19.0005 12 19.0005C14.8089 19.0005 16.2134 19.0005 17.2223 18.3264C17.659 18.0345 18.034 17.6595 18.3259 17.2228C19 16.2139 19 14.8094 19 12.0005C19 9.19156 19 7.7871 18.3259 6.77821C18.034 6.34145 17.659 5.96644 17.2223 5.67461C16.2134 5.00049 14.8089 5.00049 12 5.00049C9.19108 5.00049 7.78661 5.00049 6.77772 5.67461C6.34096 5.96644 5.96596 6.34145 5.67412 6.77821C5 7.7871 5 9.19156 5 12.0005C5 14.8094 5 16.2139 5.67412 17.2228C5.96596 17.6595 6.34096 18.0345 6.77772 18.3264Z"
            fill="currentColor"
          />
          <path
            d="M13.3744 8.45739C13.6743 8.74305 13.6859 9.21778 13.4003 9.51773L11.75 11.2505H14C14.3 11.2505 14.5712 11.4293 14.6894 11.7051C14.8076 11.9808 14.75 12.3005 14.5431 12.5177L11.686 15.5177C11.4003 15.8177 10.9256 15.8293 10.6256 15.5436C10.3257 15.2579 10.3141 14.7832 10.5998 14.4832L12.25 12.7505H10C9.7 12.7505 9.42884 12.5717 9.31066 12.2959C9.19248 12.0202 9.25 11.7005 9.45691 11.4832L12.3141 8.48325C12.5997 8.1833 13.0745 8.17172 13.3744 8.45739Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.25 2.00049C6.25 1.58627 6.58579 1.25049 7 1.25049H17C17.4142 1.25049 17.75 1.58627 17.75 2.00049C17.75 2.4147 17.4142 2.75049 17 2.75049H7C6.58579 2.75049 6.25 2.4147 6.25 2.00049ZM6.25 22.0005C6.25 21.5863 6.58579 21.2505 7 21.2505H17C17.4142 21.2505 17.75 21.5863 17.75 22.0005C17.75 22.4147 17.4142 22.7505 17 22.7505H7C6.58579 22.7505 6.25 22.4147 6.25 22.0005Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.67412 6.77821C5 7.7871 5 9.19156 5 12.0005C5 14.8094 5 16.2139 5.67412 17.2228C5.96596 17.6595 6.34096 18.0345 6.77772 18.3264C7.78661 19.0005 9.19108 19.0005 12 19.0005C14.8089 19.0005 16.2134 19.0005 17.2223 18.3264C17.659 18.0345 18.034 17.6595 18.3259 17.2228C19 16.2139 19 14.8094 19 12.0005C19 9.19156 19 7.7871 18.3259 6.77821C18.034 6.34145 17.659 5.96644 17.2223 5.67461C16.2134 5.00049 14.8089 5.00049 12 5.00049C9.19108 5.00049 7.78661 5.00049 6.77772 5.67461C6.34096 5.96644 5.96596 6.34145 5.67412 6.77821ZM13.3744 8.45739C13.6743 8.74305 13.6859 9.21778 13.4002 9.51773L11.75 11.2505H14C14.3 11.2505 14.5712 11.4293 14.6894 11.705C14.8075 11.9808 14.75 12.3005 14.5431 12.5177L11.686 15.5177C11.4003 15.8177 10.9256 15.8293 10.6256 15.5436C10.3257 15.2579 10.3141 14.7832 10.5998 14.4832L12.25 12.7505H10C9.69998 12.7505 9.42883 12.5717 9.31064 12.2959C9.19246 12.0202 9.24999 11.7005 9.4569 11.4832L12.314 8.48325C12.5997 8.1833 13.0744 8.17172 13.3744 8.45739Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.25 2.00049C6.25 1.58627 6.58579 1.25049 7 1.25049H17C17.4142 1.25049 17.75 1.58627 17.75 2.00049C17.75 2.4147 17.4142 2.75049 17 2.75049H7C6.58579 2.75049 6.25 2.4147 6.25 2.00049ZM6.25 22.0005C6.25 21.5863 6.58579 21.2505 7 21.2505H17C17.4142 21.2505 17.75 21.5863 17.75 22.0005C17.75 22.4147 17.4142 22.7505 17 22.7505H7C6.58579 22.7505 6.25 22.4147 6.25 22.0005Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWatchSquareMinimalisticCharge as IconComponentType).keywords = [
  "watch",
  "square",
  "minimalistic",
  "charge",
  "picket",
  "ticker",
  "sentry",
  "lookout man",
  "lookout",
  "sentinel",
  "determine",
  "scout",
  "catch",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
  "modularistic",
  "brutalistic",
  "localistic",
  "reductionist",
  "exhibitional",
  "monogynous",
  "simplificational",
  "reductionistic",
  "automatistic",
  "consign",
  "commission",
  "mission",
  "appoint",
  "billing",
  "guardianship",
  "tutelage",
  "institutionalize",
  "send",
];

export default IconWatchSquareMinimalisticCharge as IconComponentType;
