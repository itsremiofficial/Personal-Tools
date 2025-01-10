import { FC } from "react";

const IconFacemaskCircle: FC<IconProps> = ({
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
          <circle
            opacity={duotone ? "0.5" : "1"}
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M16.5 20.5001L17 15.0001L13.857 13.7429C12.6649 13.266 11.3351 13.266 10.143 13.7429L7 15.0001L7.5 20.5001"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M7 15L2.5 13"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M17 15L21.5 13"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <ellipse cx="15" cy="10.5" rx="1" ry="1.5" fill="currentColor" />
          <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="currentColor" />
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
            d="M21.9982 12.193C21.9994 12.1288 22 12.0645 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 12.1294 2.00246 12.2582 2.00733 12.3864L6.98724 14.1969L9.8645 13.046C11.2354 12.4977 12.7646 12.4977 14.1355 13.046L17 14.1918L21.9982 12.193Z"
            fill="currentColor"
          />
          <path
            d="M10 10.5C10 11.3284 9.55228 12 9 12C8.44772 12 8 11.3284 8 10.5C8 9.67157 8.44772 9 9 9C9.55228 9 10 9.67157 10 10.5Z"
            fill="currentColor"
          />
          <path
            d="M16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5Z"
            fill="currentColor"
          />
          <path
            d="M15.7657 21.2667L16.21 15.4914L13.5784 14.4387C12.5652 14.0334 11.4348 14.0334 10.4216 14.4387L7.79004 15.4914L8.23427 21.2667C9.39657 21.7395 10.6679 22 12 22C13.3321 22 14.6034 21.7395 15.7657 21.2667Z"
            fill="currentColor"
          />
          <path
            d="M21.8241 13.8779L17.7122 15.5224L17.3323 20.4611C19.6317 19.009 21.2982 16.6455 21.8241 13.8779Z"
            fill="currentColor"
          />
          <path
            d="M6.66807 20.4611L6.28947 15.539L2.21191 14.0565C2.77441 16.7471 4.41824 19.0404 6.66807 20.4611Z"
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
            d="M21.8239 13.8782L17.712 15.5226L17.3321 20.4614C19.6316 19.0093 21.298 16.6457 21.8239 13.8782Z"
            fill="currentColor"
          />
          <path
            d="M15.7657 21.2667L16.21 15.4914L13.5784 14.4387C12.5652 14.0334 11.4348 14.0334 10.4216 14.4387L7.79004 15.4914L8.23427 21.2667C9.39657 21.7395 10.6679 22 12 22C13.3321 22 14.6034 21.7395 15.7657 21.2667Z"
            fill="currentColor"
          />
          <path
            d="M6.66789 20.4614L6.28929 15.5392L2.21174 14.0568C2.77423 16.7473 4.41806 19.0406 6.66789 20.4614Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.9982 12.193C21.9994 12.1288 22 12.0645 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 12.1294 2.00246 12.2582 2.00733 12.3864L6.98724 14.1969L9.8645 13.046C11.2354 12.4977 12.7646 12.4977 14.1355 13.046L17 14.1918L21.9982 12.193ZM16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5ZM9 12C9.55228 12 10 11.3284 10 10.5C10 9.67157 9.55228 9 9 9C8.44772 9 8 9.67157 8 10.5C8 11.3284 8.44772 12 9 12Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFacemaskCircle as IconComponent).keywords = [
  "facemask",
  "circle",
  "diving mask",
  "scuba diving",
  "snorkel",
  "swimcap",
  "scuba",
  "backplate",
  "aqualung",
  "scaphander",
  "bailout",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle",
];

export default IconFacemaskCircle as IconComponent;
