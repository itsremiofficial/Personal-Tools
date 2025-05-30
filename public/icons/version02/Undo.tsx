import { FC } from "react";

const IconUndo: FC<IconProps> = ({
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
            d="M7.7998 18.3101H15.7998C18.5598 18.3101 20.7998 16.0701 20.7998 13.3101C20.7998 10.5501 18.5598 8.31006 15.7998 8.31006H4.7998"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.10004 10.8099L4.54004 8.24994L7.10004 5.68994"
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
            d="M8.47992 2H16.8499C20.4999 2 22.6699 4.17 22.6699 7.81V16.18C22.6699 19.82 20.4999 21.99 16.8599 21.99H8.47992C4.83992 22 2.66992 19.83 2.66992 16.19V7.81C2.66992 4.17 4.83992 2 8.47992 2Z"
            fill="currentColor"
          />
          <path
            d="M14.5899 8.98006H9.43986L9.76986 8.65006C10.0599 8.36006 10.0599 7.88006 9.76986 7.59006C9.47986 7.30006 8.99986 7.30006 8.70986 7.59006L7.13986 9.16006C6.84986 9.45006 6.84986 9.93006 7.13986 10.2201L8.70986 11.7901C8.85986 11.9401 9.04986 12.0101 9.23986 12.0101C9.42986 12.0101 9.61986 11.9401 9.76986 11.7901C10.0599 11.5001 10.0599 11.0201 9.76986 10.7301L9.50986 10.4701H14.5899C15.8699 10.4701 16.9199 11.5101 16.9199 12.8001C16.9199 14.0901 15.8799 15.1301 14.5899 15.1301H9.66986C9.25986 15.1301 8.91986 15.4701 8.91986 15.8801C8.91986 16.2901 9.25986 16.6301 9.66986 16.6301H14.5899C16.6999 16.6301 18.4199 14.9101 18.4199 12.8001C18.4199 10.6901 16.6999 8.98006 14.5899 8.98006Z"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM14.5899 16.63H9.66992C9.25992 16.63 8.91992 16.29 8.91992 15.88C8.91992 15.47 9.25992 15.13 9.66992 15.13H14.5899C15.8699 15.13 16.9199 14.09 16.9199 12.8C16.9199 11.51 15.8799 10.47 14.5899 10.47H9.51992L9.77992 10.73C10.0699 11.02 10.0699 11.5 9.77992 11.79C9.62992 11.94 9.43992 12.01 9.24992 12.01C9.05992 12.01 8.86992 11.94 8.71992 11.79L7.14992 10.22C6.85992 9.93 6.85992 9.45 7.14992 9.16L8.71992 7.59C9.00992 7.3 9.48992 7.3 9.77992 7.59C10.0699 7.88 10.0699 8.36 9.77992 8.65L9.43992 8.98H14.5899C16.6999 8.98 18.4199 10.7 18.4199 12.81C18.4199 14.92 16.6999 16.63 14.5899 16.63Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconUndo as IconComponent).keywords = [
  "undo",
  "unmake",
  "dispose",
  "rescind",
  "disconnect",
  "vacate",
  "revoke",
  "rid",
  "annul",
  "repeal",
];

export default IconUndo as IconComponent;
