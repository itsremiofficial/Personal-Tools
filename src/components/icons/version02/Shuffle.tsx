import { FC } from "react";

const IconShuffle: FC<IconProps> = ({
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
            d="M3.66992 17.98L6.21991 17.99C7.12991 17.99 7.97992 17.54 8.47992 16.79L14.8699 7.21C15.3699 6.46 16.2199 5.99999 17.1299 6.00999L21.6799 6.03001"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.55994 8.61999L8.47992 7.11999C7.96992 6.40999 7.14991 5.98999 6.27991 5.99999L3.66992 6.01"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M19.6699 19.9805L21.6699 17.9805"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.6406 15.3799L14.8606 16.9499C15.3706 17.6099 16.1706 17.9999 17.0106 17.9999L21.6806 17.9799"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M21.6699 6.02002L19.6699 4.02002"
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
            opacity={duotone ? "0.4" : "1"}
            d="M22.4196 17.98C22.4196 17.96 22.4096 17.94 22.4096 17.92C22.3996 17.84 22.3897 17.76 22.3597 17.69C22.3197 17.6 22.2697 17.53 22.2097 17.46C22.2097 17.46 22.2096 17.45 22.1996 17.45C22.1296 17.38 22.0497 17.3299 21.9597 17.2899C21.8697 17.2499 21.7696 17.23 21.6696 17.23L16.9996 17.25C16.9996 17.25 16.9997 17.25 16.9897 17.25C16.3897 17.25 15.8096 16.97 15.4496 16.49L14.2296 14.92C13.9796 14.59 13.5097 14.5299 13.1797 14.7899C12.8497 15.0499 12.7897 15.51 13.0497 15.84L14.2697 17.4099C14.9197 18.2499 15.9396 18.75 16.9996 18.75H17.0096L19.8597 18.74L19.1497 19.45C18.8597 19.74 18.8597 20.22 19.1497 20.51C19.2997 20.66 19.4897 20.73 19.6797 20.73C19.8697 20.73 20.0597 20.66 20.2097 20.51L22.2097 18.51C22.2797 18.44 22.3297 18.36 22.3697 18.27C22.3997 18.17 22.4196 18.07 22.4196 17.98Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.09018 6.69C8.44018 5.79 7.40016 5.26001 6.29016 5.26001C6.28016 5.26001 6.28017 5.26001 6.27017 5.26001L3.66016 5.27002C3.25016 5.27002 2.91016 5.61002 2.91016 6.02002C2.91016 6.43002 3.25016 6.77002 3.66016 6.77002L6.27017 6.76001H6.28015C6.91015 6.76001 7.50017 7.06001 7.86017 7.57001L8.94016 9.07001C9.09016 9.27001 9.32017 9.38 9.55017 9.38C9.70017 9.38 9.86017 9.32999 9.99017 9.23999C10.3302 8.99999 10.4002 8.53 10.1602 8.19L9.09018 6.69Z"
            fill="currentColor"
          />
          <path
            d="M22.4102 6.07999C22.4102 6.05999 22.4202 6.04 22.4202 6.03C22.4202 5.93 22.4002 5.82996 22.3602 5.73996C22.3202 5.64996 22.2702 5.56997 22.2002 5.49997L20.2002 3.49997C19.9102 3.20997 19.4302 3.20997 19.1402 3.49997C18.8502 3.78997 18.8502 4.26997 19.1402 4.55997L19.8502 5.26999L17.1202 5.25998C17.1102 5.25998 17.1102 5.25998 17.1002 5.25998C15.9502 5.25998 14.8702 5.82996 14.2302 6.79996L7.84018 16.38C7.48018 16.92 6.87015 17.25 6.22015 17.25H6.21017L3.66016 17.24C3.25016 17.24 2.91016 17.57 2.91016 17.99C2.91016 18.4 3.24016 18.74 3.66016 18.74L6.21017 18.75C6.22017 18.75 6.22016 18.75 6.23016 18.75C7.39016 18.75 8.46016 18.18 9.10016 17.21L15.4902 7.62998C15.8502 7.08998 16.4602 6.75998 17.1102 6.75998H17.1202L21.6702 6.78C21.7702 6.78 21.8602 6.75994 21.9602 6.71994C22.0502 6.67994 22.1302 6.62997 22.2002 6.55997C22.2002 6.55997 22.2002 6.54996 22.2102 6.54996C22.2702 6.47996 22.3302 6.40998 22.3602 6.31998C22.3902 6.23998 22.4002 6.15999 22.4102 6.07999Z"
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
            d="M22.4197 17.98C22.4197 17.96 22.4097 17.94 22.4097 17.92C22.3997 17.84 22.3897 17.76 22.3597 17.69C22.3197 17.6 22.2697 17.53 22.2097 17.46C22.2097 17.46 22.2097 17.45 22.1997 17.45C22.1297 17.38 22.0497 17.33 21.9597 17.29C21.8697 17.25 21.7697 17.23 21.6697 17.23L16.9997 17.25C16.9997 17.25 16.9997 17.25 16.9897 17.25C16.3897 17.25 15.8097 16.97 15.4497 16.49L14.2297 14.92C13.9797 14.59 13.5097 14.53 13.1797 14.79C12.8497 15.05 12.7897 15.51 13.0497 15.84L14.2697 17.41C14.9197 18.25 15.9397 18.75 16.9997 18.75H17.0097L19.8597 18.74L19.1497 19.45C18.8597 19.74 18.8597 20.22 19.1497 20.51C19.2997 20.66 19.4897 20.73 19.6797 20.73C19.8697 20.73 20.0597 20.66 20.2097 20.51L22.2097 18.51C22.2797 18.44 22.3297 18.36 22.3697 18.27C22.3997 18.17 22.4197 18.07 22.4197 17.98Z"
            fill="currentColor"
          />
          <path
            d="M9.08992 6.69001C8.43992 5.79001 7.39992 5.26001 6.28992 5.26001C6.27992 5.26001 6.27992 5.26001 6.26992 5.26001L3.66992 5.27001C3.25992 5.27001 2.91992 5.61001 2.91992 6.02001C2.91992 6.43001 3.25992 6.77001 3.66992 6.77001L6.27992 6.76001H6.28992C6.91992 6.76001 7.50992 7.06001 7.86992 7.57001L8.94992 9.07001C9.09992 9.27001 9.32992 9.38001 9.55992 9.38001C9.70992 9.38001 9.86992 9.33001 9.99992 9.24001C10.3399 8.99001 10.4099 8.52001 10.1699 8.19001L9.08992 6.69001Z"
            fill="currentColor"
          />
          <path
            d="M22.4099 6.08C22.4099 6.06 22.4199 6.04 22.4199 6.03C22.4199 5.93 22.3999 5.83 22.3599 5.74C22.3199 5.65 22.2699 5.57 22.1999 5.5L20.1999 3.5C19.9099 3.21 19.4299 3.21 19.1399 3.5C18.8499 3.79 18.8499 4.27 19.1399 4.56L19.8499 5.27L17.1199 5.26C17.1099 5.26 17.1099 5.26 17.0999 5.26C15.9499 5.26 14.8699 5.83 14.2299 6.8L7.83992 16.38C7.47992 16.92 6.86992 17.25 6.21992 17.25H6.20992L3.66992 17.23C3.25992 17.23 2.91992 17.56 2.91992 17.98C2.91992 18.39 3.24992 18.73 3.66992 18.73L6.21992 18.74C6.22992 18.74 6.22992 18.74 6.23992 18.74C7.39992 18.74 8.46992 18.17 9.10992 17.2L15.4999 7.62C15.8599 7.08 16.4699 6.75 17.1199 6.75H17.1299L21.6699 6.77C21.7699 6.77 21.8599 6.75 21.9599 6.71C22.0499 6.67 22.1299 6.62 22.1999 6.55C22.1999 6.55 22.1999 6.54 22.2099 6.54C22.2699 6.47 22.3299 6.4 22.3599 6.31C22.3899 6.24 22.3999 6.16 22.4099 6.08Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconShuffle as IconComponent).keywords = [
  "shuffle",
  "scuffle",
  "make",
  "mix",
  "shamble",
  "shambling",
  "ruffle",
  "reshuffle",
  "move",
  "realignment",
];

export default IconShuffle as IconComponent;
