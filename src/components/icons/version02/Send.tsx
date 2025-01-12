import { FC } from "react";

const IconSend: FC<IconProps> = ({
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
            d="M4.16992 22H21.1699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.66992 3.5L19.6699 17.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.66992 13.77V3.5H15.9399"
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
            d="M21.1701 22.7999H4.17012C3.77012 22.7999 3.37012 22.5 3.37012 22C3.37012 21.5 3.67012 21.2 4.17012 21.2H21.1701C21.5701 21.2 21.9701 21.5 21.9701 22C21.9701 22.5 21.5701 22.7999 21.1701 22.7999Z"
            fill="currentColor"
          />
          <path
            d="M19.6703 18.1999C19.4703 18.1999 19.2703 18.0999 19.1703 17.9999L5.17031 3.9999C4.87031 3.6999 4.87031 3.2999 5.17031 2.9999C5.47031 2.6999 5.97031 2.6999 6.27031 2.9999L20.2703 16.9999C20.5703 17.2999 20.5703 17.7999 20.2703 18.0999C20.0703 18.1999 19.8703 18.1999 19.6703 18.1999Z"
            fill="currentColor"
          />
          <path
            d="M5.67012 14.5C5.27012 14.5 4.87012 14.2 4.87012 13.7V3.49995C4.87012 3.09995 5.17012 2.69995 5.67012 2.69995H15.9701C16.3701 2.69995 16.7701 2.99995 16.7701 3.49995C16.7701 3.99995 16.4701 4.29995 15.9701 4.29995H6.47012V13.8C6.47012 14.2 6.07012 14.5 5.67012 14.5Z"
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
            d="M21.1699 21.25H4.16992C3.75992 21.25 3.41992 21.59 3.41992 22C3.41992 22.41 3.75992 22.75 4.16992 22.75H21.1699C21.5799 22.75 21.9199 22.41 21.9199 22C21.9199 21.59 21.5799 21.25 21.1699 21.25Z"
            fill="currentColor"
          />
          <path
            d="M5.66992 14.52C6.07992 14.52 6.41992 14.18 6.41992 13.77V5.31L19.1399 18.03C19.2899 18.18 19.4799 18.25 19.6699 18.25C19.8599 18.25 20.0499 18.18 20.1999 18.03C20.4899 17.74 20.4899 17.26 20.1999 16.97L7.47992 4.25H15.9399C16.3499 4.25 16.6899 3.91 16.6899 3.5C16.6899 3.09 16.3499 2.75 15.9399 2.75H5.66992C5.56992 2.75 5.47992 2.77 5.37992 2.81C5.19992 2.88 5.04992 3.03 4.97992 3.21C4.93992 3.31 4.91992 3.4 4.91992 3.5V13.77C4.91992 14.18 5.25992 14.52 5.66992 14.52Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSend as IconComponent).keywords = [
  "send",
  "transmit",
  "charge",
  "transport",
  "mail",
  "base",
  "institutionalize",
  "place",
  "broadcast",
  "commit",
];

export default IconSend as IconComponent;
