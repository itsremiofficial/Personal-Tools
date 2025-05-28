import { FC } from "react";

const IconRecord: FC<IconProps> = ({
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
            d="M12.6699 21C17.6405 21 21.6699 16.9706 21.6699 12C21.6699 7.02944 17.6405 3 12.6699 3C7.69936 3 3.66992 7.02944 3.66992 12C3.66992 16.9706 7.69936 21 12.6699 21Z"
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
            d="M20.7899 8.13L19.3699 8.98L5.42992 17.34C4.32992 15.85 3.66992 14 3.66992 12C3.66992 7.03 7.69992 3 12.6699 3C16.2499 3 19.3499 5.1 20.7899 8.13Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.6698 12C21.6698 16.97 17.6398 21 12.6698 21C10.1998 21 7.96984 20.01 6.33984 18.39L6.42984 18.34L20.3698 9.97999L21.2998 9.42999C21.5398 10.25 21.6698 11.11 21.6698 12Z"
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
            d="M20.2996 7.24C20.5996 7.71 20.4396 8.34 19.9596 8.63L19.3696 8.98L6.25959 16.84C5.77959 17.13 5.14959 16.97 4.86959 16.48C3.86959 14.74 3.41959 12.62 3.80959 10.4C4.46959 6.63 7.56959 3.63 11.3596 3.09C15.1096 2.56 18.4996 4.36 20.2996 7.24Z"
            fill="currentColor"
          />
          <path
            d="M21.5601 13.43C20.8801 17.68 17.1201 20.93 12.8101 21C10.9101 21.03 9.15007 20.48 7.69007 19.49C7.07007 19.08 7.09007 18.16 7.73007 17.78L20.1401 10.49C20.7901 10.11 21.5901 10.55 21.6501 11.3C21.7001 12 21.6701 12.71 21.5601 13.43Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRecord as IconComponent).keywords = [
  "record",
  "phonograph record",
  "book",
  "register",
  "read",
  "disk",
  "disc",
  "show",
  "memorialize",
  "commemorate",
];

export default IconRecord as IconComponent;
