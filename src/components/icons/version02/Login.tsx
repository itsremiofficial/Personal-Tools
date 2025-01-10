import { FC } from "react";

const IconLogin: FC<IconProps> = ({
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M12.3496 14.62L14.9096 12.06L12.3496 9.5"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.66992 12.0596H14.8399"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M12.6699 4C17.0899 4 20.6699 7 20.6699 12C20.6699 17 17.0899 20 12.6699 20"
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
            d="M11.4298 2C10.9498 2 10.5698 2.38 10.5698 2.86V21.15C10.5698 21.62 10.9498 22.01 11.4298 22.01C17.3198 22.01 21.4298 17.9 21.4298 12.01C21.4298 6.12 17.3098 2 11.4298 2Z"
            fill="currentColor"
          />
          <path
            d="M16.5702 11.54L13.7302 8.69003C13.4402 8.40003 12.9602 8.40003 12.6702 8.69003C12.3802 8.98003 12.3802 9.46003 12.6702 9.75003L14.2302 11.31H4.66016C4.25016 11.31 3.91016 11.65 3.91016 12.06C3.91016 12.47 4.25016 12.81 4.66016 12.81H14.2302L12.6702 14.38C12.3802 14.67 12.3802 15.15 12.6702 15.44C12.8202 15.59 13.0102 15.66 13.2002 15.66C13.3902 15.66 13.5802 15.59 13.7302 15.44L16.5702 12.59C16.8702 12.3 16.8702 11.83 16.5702 11.54Z"
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
            d="M11.4298 2C10.9498 2 10.5698 2.38 10.5698 2.86V11.32H14.2398L12.6698 9.75C12.3798 9.46 12.3798 8.98 12.6698 8.69C12.9598 8.4 13.4398 8.4 13.7298 8.69L16.5698 11.54C16.8598 11.83 16.8598 12.31 16.5698 12.6L13.7298 15.45C13.5798 15.6 13.3898 15.67 13.1998 15.67C13.0098 15.67 12.8198 15.6 12.6698 15.45C12.3798 15.16 12.3798 14.68 12.6698 14.39L14.2298 12.83H10.5698V21.16C10.5698 21.63 10.9498 22.02 11.4298 22.02C17.3198 22.02 21.4298 17.91 21.4298 12.02C21.4298 6.13 17.3098 2 11.4298 2Z"
            fill="currentColor"
          />
          <path
            d="M4.66016 11.3199C4.25016 11.3199 3.91016 11.6599 3.91016 12.0699C3.91016 12.4799 4.25016 12.8199 4.66016 12.8199H10.5602V11.3199H4.66016Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLogin as IconComponent).keywords = [
  "login",
  "log in",
  "log on",
  "logon",
  "username",
  "sign-on",
  "bootable",
  "pluggable",
  "uplink",
  "log-in",
];

export default IconLogin as IconComponent;
