import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconFigma: FC<IconProps> = ({
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
            d="M12.6697 2H9.33972C7.49972 2 6.00977 3.48999 6.00977 5.32999C6.00977 7.16999 7.49972 8.66 9.33972 8.66H12.6697V2Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
          />
          <path
            d="M12.6697 8.67004H9.33972C7.49972 8.67004 6.00977 10.16 6.00977 12C6.00977 13.84 7.49972 15.33 9.33972 15.33H12.6697V8.67004Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
          />
          <path
            d="M12.6697 15.33H9.33972C7.49972 15.33 6.00977 16.82 6.00977 18.66C6.00977 20.5 7.49972 21.99 9.33972 21.99C11.1797 21.99 12.6697 20.5 12.6697 18.66V15.33Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M12.6699 2H15.9999C17.8399 2 19.3299 3.48999 19.3299 5.32999C19.3299 7.16999 17.8399 8.66 15.9999 8.66H12.6699V2Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.9999 8.67004C17.8399 8.67004 19.3299 10.16 19.3299 12C19.3299 13.84 17.8399 15.33 15.9999 15.33C14.1599 15.33 12.6699 13.84 12.6699 12C12.6699 10.16 14.1599 8.67004 15.9999 8.67004Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
            />
          </g>
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
            opacity={duotone ? "0.58" : "1"}
            d="M24.6699 0H0.669922V24H24.6699V0Z"
            fill="none"
          />
          <path
            d="M12.6697 2H9.33972C7.49972 2 6.00977 3.49 6.00977 5.33C6.00977 7.17 7.49972 8.66 9.33972 8.66H12.6697V2Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6697 8.67004H9.33972C7.49972 8.67004 6.00977 10.16 6.00977 12C6.00977 13.84 7.49972 15.33 9.33972 15.33H12.6697V8.67004Z"
            fill="currentColor"
          />
          <path
            d="M12.6697 15.33H9.33972C7.49972 15.33 6.00977 16.82 6.00977 18.66C6.00977 20.5 7.49972 21.99 9.33972 21.99C11.1797 21.99 12.6697 20.5 12.6697 18.66V15.33Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6699 2H15.9999C17.8399 2 19.3299 3.49 19.3299 5.33C19.3299 7.17 17.8399 8.66 15.9999 8.66H12.6699V2Z"
            fill="currentColor"
          />
          <path
            d="M15.9999 8.67004C17.8399 8.67004 19.3299 10.16 19.3299 12C19.3299 13.84 17.8399 15.33 15.9999 15.33C14.1599 15.33 12.6699 13.84 12.6699 12C12.6699 10.16 14.1599 8.67004 15.9999 8.67004Z"
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
            d="M12.6697 2H9.33972C7.49972 2 6.00977 3.48999 6.00977 5.32999C6.00977 7.16999 7.49972 8.66 9.33972 8.66H12.6697V2Z"
            fill="none"
          />
          <path
            d="M12.6697 8.67001H9.33972C7.49972 8.67001 6.00977 10.16 6.00977 12C6.00977 13.84 7.49972 15.33 9.33972 15.33H12.6697V8.67001Z"
            fill="none"
          />
          <path
            d="M12.6697 15.33H9.33972C7.49972 15.33 6.00977 16.82 6.00977 18.66C6.00977 20.5 7.49972 21.99 9.33972 21.99C11.1797 21.99 12.6697 20.5 12.6697 18.66V15.33Z"
            fill="none"
          />
          <path
            d="M12.6699 2H15.9999C17.8399 2 19.3299 3.48999 19.3299 5.32999C19.3299 7.16999 17.8399 8.66 15.9999 8.66H12.6699V2Z"
            fill="none"
          />
          <path
            d="M15.9999 8.67001C17.8399 8.67001 19.3299 10.16 19.3299 12C19.3299 13.84 17.8399 15.33 15.9999 15.33C14.1599 15.33 12.6699 13.84 12.6699 12C12.6699 10.16 14.1599 8.67001 15.9999 8.67001Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFigma as IconComponentType).keywords = [
  "figma",
  "nendoroid",
  "kubrick",
  "marvel legends",
  "marvel universe",
  "shinkansen henkei robo shinkalion",
  "dinozaurs",
  "dc universe classics",
  "batman unlimited",
  "hikarian",
];

export default IconFigma as IconComponentType;
