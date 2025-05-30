import { FC } from "react";

const IconAirdrop: FC<IconProps> = ({
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
            d="M14.8002 11.3401C15.1902 9.70008 13.7601 8.27003 12.1201 8.66003C11.3501 8.85003 10.7201 9.48005 10.5301 10.2501C10.1401 11.8901 11.5701 13.32 13.2101 12.93C13.9901 12.74 14.6202 12.1101 14.8002 11.3401Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.6799 17.19C20.3899 15.59 21.4599 13.32 21.4599 10.79C21.4599 5.92998 17.5199 2 12.6699 2C7.81988 2 3.87988 5.93998 3.87988 10.79C3.87988 13.33 4.95988 15.62 6.68988 17.22"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.66969 14.55C7.74969 13.57 7.17969 12.25 7.17969 10.79C7.17969 7.76004 9.63969 5.30005 12.6697 5.30005C15.6997 5.30005 18.1597 7.76004 18.1597 10.79C18.1597 12.25 17.5897 13.56 16.6697 14.55"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.9701 16.66L9.53014 18.4501C8.39014 19.8801 9.40014 21.99 11.2301 21.99H14.1001C15.9301 21.99 16.9501 19.8701 15.8001 18.4501L14.3601 16.66C13.5001 15.57 11.8401 15.57 10.9701 16.66Z"
            stroke="currentColor"
            strokeWidth={width}
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
            d="M14.8002 11.3401C15.1902 9.70008 13.7601 8.27003 12.1201 8.66003C11.3501 8.85003 10.7201 9.48005 10.5301 10.2501C10.1401 11.8901 11.5701 13.32 13.2101 12.93C13.9901 12.74 14.6202 12.1101 14.8002 11.3401Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.68988 17.97C6.50988 17.97 6.31987 17.9 6.17987 17.77C4.23987 15.97 3.12988 13.43 3.12988 10.79C3.12988 5.52998 7.40988 1.25 12.6699 1.25C17.9299 1.25 22.2099 5.52998 22.2099 10.79C22.2099 13.45 21.1399 15.91 19.1999 17.74C18.8999 18.02 18.4199 18.01 18.1399 17.71C17.8599 17.41 17.8699 16.93 18.1699 16.65C19.8099 15.11 20.7099 13.04 20.7099 10.8C20.7099 6.36999 17.0999 2.76001 12.6699 2.76001C8.23988 2.76001 4.62988 6.36999 4.62988 10.8C4.62988 13.06 5.53988 15.14 7.19987 16.68C7.49988 16.96 7.51988 17.44 7.23988 17.74C7.08988 17.89 6.88988 17.97 6.68988 17.97Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.6699 15.3C16.4899 15.3 16.2999 15.23 16.1599 15.1C15.8599 14.82 15.8399 14.34 16.1299 14.04C16.9599 13.16 17.4199 12 17.4199 10.8C17.4199 8.18005 15.2899 6.06006 12.6799 6.06006C10.0699 6.06006 7.93994 8.19005 7.93994 10.8C7.93994 12.01 8.39993 13.16 9.22993 14.04C9.50993 14.34 9.49994 14.82 9.19994 15.1C8.89994 15.39 8.41994 15.3701 8.13994 15.0701C7.04994 13.9101 6.43994 12.39 6.43994 10.8C6.43994 7.36005 9.23993 4.56006 12.6799 4.56006C16.1199 4.56006 18.9199 7.36005 18.9199 10.8C18.9199 12.39 18.3199 13.9101 17.2199 15.0701C17.0699 15.2201 16.8699 15.3 16.6699 15.3Z"
            fill="currentColor"
          />
          <path
            d="M10.9701 16.66L9.53014 18.4501C8.39014 19.8801 9.40014 21.99 11.2301 21.99H14.1001C15.9301 21.99 16.9501 19.8701 15.8001 18.4501L14.3601 16.66C13.5001 15.57 11.8401 15.57 10.9701 16.66Z"
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
            d="M14.8001 11.34C15.1901 9.70003 13.7601 8.27003 12.1201 8.66003C11.3501 8.85003 10.7201 9.48003 10.5301 10.25C10.1401 11.89 11.5701 13.32 13.2101 12.93C13.9901 12.74 14.6201 12.11 14.8001 11.34Z"
            fill="currentColor"
          />
          <path
            d="M6.68988 17.97C6.50988 17.97 6.31988 17.9 6.17988 17.77C4.23988 15.97 3.12988 13.43 3.12988 10.79C3.12988 5.53 7.40988 1.25 12.6699 1.25C17.9299 1.25 22.2099 5.53 22.2099 10.79C22.2099 13.45 21.1399 15.91 19.1999 17.74C18.8999 18.02 18.4199 18.01 18.1399 17.71C17.8599 17.41 17.8699 16.93 18.1699 16.65C19.8099 15.11 20.7099 13.04 20.7099 10.8C20.7099 6.37 17.0999 2.76 12.6699 2.76C8.23988 2.76 4.62988 6.37 4.62988 10.8C4.62988 13.06 5.53988 15.14 7.19988 16.68C7.49988 16.96 7.51988 17.44 7.23988 17.74C7.08988 17.89 6.88988 17.97 6.68988 17.97Z"
            fill="currentColor"
          />
          <path
            d="M16.6699 15.3001C16.4899 15.3001 16.2999 15.2301 16.1599 15.1001C15.8599 14.8201 15.8399 14.3401 16.1299 14.0401C16.9599 13.1601 17.4199 12.0001 17.4199 10.8001C17.4199 8.18006 15.2899 6.06006 12.6799 6.06006C10.0699 6.06006 7.93994 8.19006 7.93994 10.8001C7.93994 12.0101 8.39994 13.1601 9.22994 14.0401C9.50994 14.3401 9.49994 14.8201 9.19994 15.1001C8.89994 15.3901 8.41994 15.3701 8.13994 15.0701C7.04994 13.9101 6.43994 12.3901 6.43994 10.8001C6.43994 7.36006 9.23994 4.56006 12.6799 4.56006C16.1199 4.56006 18.9199 7.36006 18.9199 10.8001C18.9199 12.3901 18.3199 13.9101 17.2199 15.0701C17.0699 15.2201 16.8699 15.3001 16.6699 15.3001Z"
            fill="currentColor"
          />
          <path
            d="M10.9698 16.66L9.52981 18.45C8.38981 19.88 9.40981 22 11.2298 22H14.0998C15.9298 22 16.9498 19.88 15.7998 18.46L14.3598 16.67C13.4998 15.57 11.8398 15.57 10.9698 16.66Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAirdrop as IconComponent).keywords = [
  "airdrop",
  "landing",
  "parachute",
  "infliction",
  "drop",
  "airlift",
  "paradrop",
  "air support",
  "airbridge",
  "airmail",
];

export default IconAirdrop as IconComponent;
