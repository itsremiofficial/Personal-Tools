import { FC } from "react";

const IconMinusCirlce: FC<IconProps> = ({
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
            d="M12.5898 22C18.0898 22 22.5898 17.5 22.5898 12C22.5898 6.5 18.0898 2 12.5898 2C7.08984 2 2.58984 6.5 2.58984 12C2.58984 17.5 7.08984 22 12.5898 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.34" : "1"}
            d="M8.58984 12H16.5898"
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
            d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z"
            fill="currentColor"
          />
          <path
            d="M16.5898 12.75H8.58984C8.17984 12.75 7.83984 12.41 7.83984 12C7.83984 11.59 8.17984 11.25 8.58984 11.25H16.5898C16.9998 11.25 17.3398 11.59 17.3398 12C17.3398 12.41 17.0098 12.75 16.5898 12.75Z"
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
            d="M12.6699 2C7.15992 2 2.66992 6.49 2.66992 12C2.66992 17.51 7.15992 22 12.6699 22C18.1799 22 22.6699 17.51 22.6699 12C22.6699 6.49 18.1799 2 12.6699 2ZM16.5899 12.75H8.58992C8.17992 12.75 7.83992 12.41 7.83992 12C7.83992 11.59 8.17992 11.25 8.58992 11.25H16.5899C16.9999 11.25 17.3399 11.59 17.3399 12C17.3399 12.41 17.0099 12.75 16.5899 12.75Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMinusCirlce as IconComponent).keywords = [
  "minus",
  "cirlce",
  "subtraction",
  "negative",
  "disadvantageous",
  "harmful",
  "sans",
  "min",
  "least",
  "unary",
  "nec",
];

export default IconMinusCirlce as IconComponent;
