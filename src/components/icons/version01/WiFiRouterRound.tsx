import { FC } from "react";

const IconWiFiRouterRound: FC<IconProps> = ({
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
            d="M2 15.0004C2 12.2389 4.23858 10.0004 7 10.0004H17C19.7614 10.0004 22 12.2389 22 15.0004C22 17.7618 19.7614 20.0004 17 20.0004H7C4.23858 20.0004 2 17.7618 2 15.0004Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M18.3292 22.3358C18.5144 22.7063 18.9649 22.8564 19.3354 22.6712C19.7059 22.4859 19.8561 22.0354 19.6708 21.665L18.3292 22.3358ZM17.3292 20.3358L18.3292 22.3358L19.6708 21.665L18.6708 19.665L17.3292 20.3358Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M5.67082 22.3358C5.48558 22.7063 5.03507 22.8564 4.66459 22.6712C4.29411 22.4859 4.14394 22.0354 4.32918 21.665L5.67082 22.3358ZM6.67082 20.3358L5.67082 22.3358L4.32918 21.665L5.32918 19.665L6.67082 20.3358Z"
            fill="currentColor"
          />
          <path
            d="M8.5 15.0004C8.5 15.8288 7.82843 16.5004 7 16.5004C6.17157 16.5004 5.5 15.8288 5.5 15.0004C5.5 14.1719 6.17157 13.5004 7 13.5004C7.82843 13.5004 8.5 14.1719 8.5 15.0004Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 15.0004H18.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.5833 5.39739C20.7574 3.40322 18.7924 2.00037 16.4996 2.00037C14.2069 2.00037 12.2419 3.40322 11.416 5.39739"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.7" : "1"}
            d="M19.3806 6.65847C19.0167 5.41143 17.865 4.50037 16.5004 4.50037C15.1358 4.50037 13.984 5.41143 13.6201 6.65847"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M17.5 7.00037C17.5 7.55265 17.0523 8.00037 16.5 8.00037C15.9477 8.00037 15.5 7.55265 15.5 7.00037C15.5 6.44808 15.9477 6.00037 16.5 6.00037C17.0523 6.00037 17.5 6.44808 17.5 7.00037Z"
            fill="currentColor"
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
            d="M7 14.0004C6.58579 14.0004 6.25 14.3362 6.25 14.7504C6.25 15.1646 6.58579 15.5004 7 15.5004C7.41421 15.5004 7.75 15.1646 7.75 14.7504C7.75 14.3362 7.41421 14.0004 7 14.0004Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 14.7504C2 11.9889 4.23858 9.75037 7 9.75037H17C19.7614 9.75037 22 11.9889 22 14.7504C22 17.5118 19.7614 19.7504 17 19.7504H7C4.23858 19.7504 2 17.5118 2 14.7504ZM4.75 14.7504C4.75 13.5077 5.75736 12.5004 7 12.5004C8.24264 12.5004 9.25 13.5077 9.25 14.7504C9.25 15.993 8.24264 17.0004 7 17.0004C5.75736 17.0004 4.75 15.993 4.75 14.7504ZM12 14.0004C11.5858 14.0004 11.25 14.3362 11.25 14.7504C11.25 15.1646 11.5858 15.5004 12 15.5004H18.5C18.9142 15.5004 19.25 15.1646 19.25 14.7504C19.25 14.3362 18.9142 14.0004 18.5 14.0004H12Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M5.46864 19.5115L4.35684 21.3645C4.14373 21.7197 4.2589 22.1804 4.61409 22.3935C4.96927 22.6066 5.42997 22.4914 5.64308 22.1362L7.07461 19.7503H7.00001C6.46585 19.7503 5.95126 19.6666 5.46864 19.5115Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M16.9254 19.7503L18.3569 22.1362C18.5701 22.4914 19.0307 22.6066 19.3859 22.3935C19.7411 22.1804 19.8563 21.7197 19.6432 21.3645L18.5314 19.5115C18.0488 19.6666 17.5342 19.7503 17 19.7503H16.9254Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.4998 3.50037C14.521 3.50037 12.823 4.71068 12.1091 6.43435C11.9507 6.81705 11.5119 6.9988 11.1292 6.84031C10.7466 6.68183 10.5648 6.24311 10.7233 5.86042C11.6612 3.59576 13.8933 2.00037 16.4998 2.00037C19.1064 2.00037 21.3385 3.59576 22.2764 5.86042C22.4349 6.24311 22.2531 6.68183 21.8704 6.84031C21.4878 6.9988 21.049 6.81705 20.8905 6.43435C20.1767 4.71068 18.4787 3.50037 16.4998 3.50037Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.7" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.5006 6.00037C15.4782 6.00037 14.6133 6.68281 14.3403 7.61857C14.2243 8.0162 13.8078 8.24448 13.4102 8.12845C13.0126 8.01241 12.7843 7.59601 12.9003 7.19838C13.3551 5.64006 14.7938 4.50037 16.5006 4.50037C18.2074 4.50037 19.6461 5.64006 20.1008 7.19838C20.2168 7.59601 19.9886 8.01241 19.5909 8.12845C19.1933 8.24448 18.7769 8.0162 18.6609 7.61857C18.3878 6.68281 17.5229 6.00037 16.5006 6.00037Z"
            fill="currentColor"
          />
          <path
            d="M17.5 7.75037C17.5 8.30265 17.0523 8.75037 16.5 8.75037C15.9477 8.75037 15.5 8.30265 15.5 7.75037C15.5 7.19808 15.9477 6.75037 16.5 6.75037C17.0523 6.75037 17.5 7.19808 17.5 7.75037Z"
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
            d="M16.4998 3.50037C14.521 3.50037 12.823 4.71068 12.1091 6.43435C11.9507 6.81705 11.5119 6.9988 11.1292 6.84031C10.7466 6.68183 10.5648 6.24311 10.7233 5.86042C11.6612 3.59576 13.8933 2.00037 16.4998 2.00037C19.1064 2.00037 21.3385 3.59576 22.2764 5.86042C22.4349 6.24311 22.2531 6.68183 21.8704 6.84031C21.4878 6.9988 21.049 6.81705 20.8906 6.43435C20.1767 4.71068 18.4787 3.50037 16.4998 3.50037Z"
            fill="currentColor"
          />
          <path
            d="M16.5006 6.00037C15.4782 6.00037 14.6133 6.68281 14.3403 7.61857C14.2243 8.0162 13.8078 8.24448 13.4102 8.12845C13.0126 8.01241 12.7843 7.59601 12.9003 7.19838C13.3551 5.64006 14.7938 4.50037 16.5006 4.50037C18.2074 4.50037 19.6461 5.64006 20.1008 7.19838C20.2168 7.59601 19.9886 8.01241 19.5909 8.12845C19.1933 8.24448 18.7769 8.0162 18.6609 7.61857C18.3878 6.68281 17.5229 6.00037 16.5006 6.00037Z"
            fill="currentColor"
          />
          <path
            d="M16.5 8.75037C17.0523 8.75037 17.5 8.30265 17.5 7.75037C17.5 7.19808 17.0523 6.75037 16.5 6.75037C15.9477 6.75037 15.5 7.19808 15.5 7.75037C15.5 8.30265 15.9477 8.75037 16.5 8.75037Z"
            fill="currentColor"
          />
          <path
            d="M7 14.0004C6.58579 14.0004 6.25 14.3362 6.25 14.7504C6.25 15.1646 6.58579 15.5004 7 15.5004C7.41421 15.5004 7.75 15.1646 7.75 14.7504C7.75 14.3362 7.41421 14.0004 7 14.0004Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 14.7504C2 11.9889 4.23858 9.75037 7 9.75037H17C19.7614 9.75037 22 11.9889 22 14.7504C22 16.9776 20.5437 18.8648 18.5314 19.5115L19.6432 21.3645C19.8563 21.7197 19.7411 22.1804 19.3859 22.3935C19.0307 22.6066 18.57 22.4914 18.3569 22.1362L16.9254 19.7504H7.07459L5.64307 22.1362C5.42996 22.4914 4.96926 22.6066 4.61407 22.3935C4.25889 22.1804 4.14372 21.7197 4.35683 21.3645L5.46863 19.5115C3.45629 18.8648 2 16.9776 2 14.7504ZM4.75 14.7504C4.75 13.5077 5.75736 12.5004 7 12.5004C8.24264 12.5004 9.25 13.5077 9.25 14.7504C9.25 15.993 8.24264 17.0004 7 17.0004C5.75736 17.0004 4.75 15.993 4.75 14.7504ZM12 14.0004C11.5858 14.0004 11.25 14.3362 11.25 14.7504C11.25 15.1646 11.5858 15.5004 12 15.5004H18.5C18.9142 15.5004 19.25 15.1646 19.25 14.7504C19.25 14.3362 18.9142 14.0004 18.5 14.0004H12Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWiFiRouterRound as IconComponent).keywords = [
  "wi",
  "fi",
  "router",
  "round",
  "tl",
  "t2",
  "jon",
  "chak",
  "claire",
  "crosse",
  "dsl",
  "ethernet",
  "sci",
  "semper",
  "initiative",
  "audio",
  "abyss",
  "agent",
  "alien",
  "routing",
  "switch",
  "route",
  "adapter",
  "hub",
  "lsa",
  "cisco",
  "linksys",
  "modem",
  "orbicular",
  "rotund",
  "orbiculate",
  "discoidal",
  "disklike",
  "discoid",
  "ringlike",
  "globular",
  "globose",
];

export default IconWiFiRouterRound as IconComponent;
