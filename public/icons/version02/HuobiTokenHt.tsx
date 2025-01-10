import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconHuobiTokenHt: FC<IconProps> = ({
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
            d="M16.8298 10C16.8298 10 16.6798 11 13.5798 15C10.6698 18.77 14.8799 21.64 15.3799 21.97C15.4099 21.99 15.4398 21.99 15.4798 21.97C16.1598 21.55 23.7298 16.68 16.8298 10Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.4297 7.79C14.4297 5.49 13.5297 3.39 12.6297 2.19C12.3297 1.89 11.8297 1.99 11.7297 2.39C11.3297 3.89 10.1297 7.09 7.22969 10.89C3.52969 15.69 6.9297 20.89 10.4297 21.89C12.3297 22.39 9.92971 20.89 9.62971 17.79C9.32971 13.89 14.4297 10.99 14.4297 7.79Z"
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
          <path d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.8298 10C16.8298 10 16.6798 11 13.5798 15C10.6698 18.77 14.8798 21.64 15.3798 21.97C15.4098 21.99 15.4398 21.99 15.4798 21.97C16.1598 21.55 23.7298 16.68 16.8298 10Z"
            fill="currentColor"
          />
          <path
            d="M14.4297 7.79C14.4297 5.49 13.5297 3.39 12.6297 2.19C12.3297 1.89 11.8297 1.99 11.7297 2.39C11.3297 3.89 10.1297 7.09 7.22969 10.89C3.52969 15.69 6.92969 20.89 10.4297 21.89C12.3297 22.39 9.92969 20.89 9.62969 17.79C9.32969 13.89 14.4297 10.99 14.4297 7.79Z"
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
            d="M16.8298 10C16.8298 10 16.6798 11 13.5798 15C10.6698 18.77 14.8799 21.64 15.3799 21.97C15.4099 21.99 15.4398 21.99 15.4798 21.97C16.1598 21.55 23.7298 16.68 16.8298 10Z"
            fill="none"
          />
          <path
            d="M14.4297 7.79C14.4297 5.49 13.5297 3.39 12.6297 2.19C12.3297 1.89 11.8297 1.99 11.7297 2.39C11.3297 3.89 10.1297 7.09 7.22969 10.89C3.52969 15.69 6.9297 20.89 10.4297 21.89C12.3297 22.39 9.92971 20.89 9.62971 17.79C9.32971 13.89 14.4297 10.99 14.4297 7.79Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHuobiTokenHt as IconComponentType).keywords = [
  "huobi",
  "token",
  "ht",
  "bitstamp",
  "bithumb",
  "shapeshift",
  "mauritius commercial bank",
  "mt. gox",
  "neo exchange",
  "szse 100 index",
  "hsbc",
  "tsx venture exchange",
  "tokenish",
  "item",
  "nominal",
  "keepsake",
  "souvenir",
  "relic",
  "minimal",
  "minimum",
  "tokenistic",
  "hrt",
  "tso",
  "sts",
  "utes",
  "alt",
  "serotonin",
  "98",
  "73",
  "acetylcholine",
];

export default IconHuobiTokenHt as IconComponentType;
