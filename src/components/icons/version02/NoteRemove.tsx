import { FC } from "react";

const IconNoteRemove: FC<IconProps> = ({
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
            d="M7.66992 14H12.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M7.66992 5.95996L3.91992 2.20996"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.63086 2.25L3.88086 6"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.66992 10H15.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.6699 2H16.6699C19.9999 2.18 21.6699 3.41 21.6699 7.99V16"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.66992 9.01001V15.98C3.66992 19.99 4.66992 22 9.66992 22H12.6699C12.8399 22 15.5099 22 15.6699 22"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.6699 16L15.6699 22V19C15.6699 17 16.6699 16 18.6699 16H21.6699Z"
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
            d="M6.63992 1H3.69992C2.42992 1 1.66992 1.76 1.66992 3.03V5.97C1.66992 7.24 2.42992 8 3.69992 8H6.63992C7.90992 8 8.66992 7.24 8.66992 5.97V3.03C8.66992 1.76 7.90992 1 6.63992 1ZM7.13992 5.56C7.38992 5.81 7.38992 6.22 7.13992 6.47C7.00992 6.59 6.83992 6.65 6.67992 6.65C6.51992 6.65 6.35992 6.59 6.22992 6.47L5.15992 5.41L4.11992 6.47C3.98992 6.59 3.82992 6.65 3.64992 6.65C3.48992 6.65 3.32992 6.59 3.19992 6.47C2.94992 6.22 2.94992 5.81 3.19992 5.56L4.26992 4.5L3.20992 3.45C2.95992 3.2 2.95992 2.79 3.20992 2.54C3.45992 2.29 3.86992 2.29 4.11992 2.54L5.15992 3.6L6.21992 2.54C6.46992 2.29 6.87992 2.29 7.12992 2.54C7.37992 2.79 7.37992 3.2 7.12992 3.45L6.07992 4.5L7.13992 5.56Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.2999 2H8.44992C8.58992 2.29 8.66992 2.63 8.66992 3.03V5.97C8.66992 7.24 7.90992 8 6.63992 8H3.69992C3.50992 8 3.33992 7.98 3.16992 7.94V17.13C3.16992 19.82 5.34992 22 8.03992 22H16.0099C16.1799 22 16.3499 21.94 16.4799 21.8C17.9599 20.31 20.5399 17.71 21.9899 16.25C22.1199 16.12 22.1699 15.97 22.1699 15.82V6.87C22.1699 4.18 19.9899 2 17.2999 2Z"
            fill="currentColor"
          />
          <path
            d="M22.1699 15.8201C22.1699 15.9701 22.1199 16.1201 21.9899 16.2501C20.5399 17.7101 17.9599 20.3101 16.4799 21.8001C16.3499 21.9401 16.1799 22.0001 16.0099 22.0001C15.6799 22.0001 15.3599 21.7401 15.3599 21.3601V17.8601C15.3599 16.4001 16.5999 15.1901 18.1199 15.1901C19.0699 15.1801 20.3899 15.1801 21.5199 15.1801C21.9099 15.1801 22.1699 15.4901 22.1699 15.8201Z"
            fill="currentColor"
          />
          <path
            d="M15.4498 12.71H8.02979C7.60979 12.71 7.27979 12.37 7.27979 11.96C7.27979 11.55 7.61979 11.21 8.02979 11.21H15.4498C15.8698 11.21 16.1998 11.55 16.1998 11.96C16.1998 12.37 15.8698 12.71 15.4498 12.71Z"
            fill="currentColor"
          />
          <path
            d="M12.6698 16.42H8.02979C7.60979 16.42 7.27979 16.08 7.27979 15.67C7.27979 15.25 7.61979 14.92 8.02979 14.92H12.6698C13.0898 14.92 13.4198 15.26 13.4198 15.67C13.4198 16.08 13.0898 16.42 12.6698 16.42Z"
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
            d="M6.63992 1H3.69992C2.42992 1 1.66992 1.76 1.66992 3.03V5.97C1.66992 7.24 2.42992 8 3.69992 8H6.63992C7.90992 8 8.66992 7.24 8.66992 5.97V3.03C8.66992 1.76 7.90992 1 6.63992 1ZM7.13992 5.56C7.38992 5.81 7.38992 6.22 7.13992 6.47C7.00992 6.59 6.83992 6.65 6.67992 6.65C6.51992 6.65 6.35992 6.59 6.22992 6.47L5.15992 5.41L4.11992 6.47C3.98992 6.59 3.82992 6.65 3.64992 6.65C3.48992 6.65 3.32992 6.59 3.19992 6.47C2.94992 6.22 2.94992 5.81 3.19992 5.56L4.26992 4.5L3.20992 3.45C2.95992 3.2 2.95992 2.79 3.20992 2.54C3.45992 2.29 3.86992 2.29 4.11992 2.54L5.15992 3.6L6.21992 2.54C6.46992 2.29 6.87992 2.29 7.12992 2.54C7.37992 2.79 7.37992 3.2 7.12992 3.45L6.07992 4.5L7.13992 5.56Z"
            fill="currentColor"
          />
          <path
            d="M22.1699 15.8201C22.1699 15.9701 22.1199 16.1201 21.9899 16.2501C20.5399 17.7101 17.9599 20.3101 16.4799 21.8001C16.3499 21.9401 16.1799 22.0001 16.0099 22.0001C15.6799 22.0001 15.3599 21.7401 15.3599 21.3601V17.8601C15.3599 16.4001 16.5999 15.1901 18.1199 15.1901C19.0699 15.1801 20.3899 15.1801 21.5199 15.1801C21.9099 15.1801 22.1699 15.4901 22.1699 15.8201Z"
            fill="currentColor"
          />
          <path
            d="M22.1699 15.8201C22.1699 15.9701 22.1199 16.1201 21.9899 16.2501C20.5399 17.7101 17.9599 20.3101 16.4799 21.8001C16.3499 21.9401 16.1799 22.0001 16.0099 22.0001C15.6799 22.0001 15.3599 21.7401 15.3599 21.3601V17.8601C15.3599 16.4001 16.5999 15.1901 18.1199 15.1901C19.0699 15.1801 20.3899 15.1801 21.5199 15.1801C21.9099 15.1801 22.1699 15.4901 22.1699 15.8201Z"
            fill="currentColor"
          />
          <path
            d="M17.2999 2H11.1699C10.6199 2 10.1699 2.45 10.1699 3V6.5C10.1699 8.16 8.82992 9.5 7.16992 9.5H4.16992C3.61992 9.5 3.16992 9.95 3.16992 10.5V17.13C3.16992 19.82 5.34992 22 8.03992 22H12.8599C13.4099 22 13.8599 21.55 13.8599 21V17.86C13.8599 15.56 15.7699 13.69 18.1199 13.69C18.6499 13.68 19.9399 13.68 21.1699 13.68C21.7199 13.68 22.1699 13.24 22.1699 12.68V6.87C22.1699 4.18 19.9899 2 17.2999 2ZM9.38992 17.01H6.74992C6.33992 17.01 5.99992 16.67 5.99992 16.26C5.99992 15.84 6.33992 15.5 6.74992 15.5H9.38992C9.81992 15.5 10.1399 15.84 10.1399 16.26C10.1399 16.67 9.81992 17.01 9.38992 17.01ZM12.1799 13.3H6.74992C6.33992 13.3 5.99992 12.96 5.99992 12.55C5.99992 12.13 6.33992 11.79 6.74992 11.79H12.1799C12.5899 11.79 12.9399 12.13 12.9399 12.55C12.9399 12.96 12.5899 13.3 12.1799 13.3Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconNoteRemove as IconComponent).keywords = [
  "note",
  "remove",
  "annotation",
  "notation",
  "mention",
  "remark",
  "notice",
  "observe",
  "take note",
  "distinction",
  "bank note",
  "take out",
  "get rid of",
  "take away",
  "move out",
  "bump off",
  "slay",
  "murder",
  "take",
  "transfer",
];

export default IconNoteRemove as IconComponent;