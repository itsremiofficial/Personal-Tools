import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconMaximize2: FC<IconProps> = ({
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
            d="M2.66992 9V6.5C2.66992 4.01 4.67992 2 7.16992 2H9.66992"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.6699 2H18.1699C20.6599 2 22.6699 4.01 22.6699 6.5V9"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.6699 16V17.5C22.6699 19.99 20.6599 22 18.1699 22H16.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.66992 22H7.16992C4.67992 22 2.66992 19.99 2.66992 17.5V15"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2Z"
            fill="currentColor"
          />
          <path
            d="M3.41992 9.97C3.00992 9.97 2.66992 9.64 2.66992 9.22V6.91C2.66992 4.2 4.86992 2 7.57992 2H9.88992C10.2999 2 10.6399 2.34 10.6399 2.75C10.6399 3.16 10.3099 3.5 9.88992 3.5H7.57992C5.69992 3.5 4.16992 5.03 4.16992 6.91V9.22C4.16992 9.64 3.82992 9.97 3.41992 9.97Z"
            fill="currentColor"
          />
          <path
            d="M21.9197 9.97C21.5097 9.97 21.1697 9.63 21.1697 9.22V6.91C21.1697 5.03 19.6397 3.5 17.7597 3.5H15.4497C15.0397 3.5 14.6997 3.16 14.6997 2.75C14.6997 2.34 15.0297 2 15.4497 2H17.7597C20.4697 2 22.6697 4.2 22.6697 6.91V9.22C22.6697 9.64 22.3297 9.97 21.9197 9.97Z"
            fill="currentColor"
          />
          <path
            d="M17.7601 22H16.3701C15.9601 22 15.6201 21.66 15.6201 21.25C15.6201 20.84 15.9601 20.5 16.3701 20.5H17.7601C19.6401 20.5 21.1701 18.97 21.1701 17.09V15.7C21.1701 15.29 21.5101 14.95 21.9201 14.95C22.3301 14.95 22.6701 15.29 22.6701 15.7V17.09C22.6701 19.8 20.4701 22 17.7601 22Z"
            fill="currentColor"
          />
          <path
            d="M9.88992 22H7.57992C4.86992 22 2.66992 19.8 2.66992 17.09V14.78C2.66992 14.37 3.00992 14.03 3.41992 14.03C3.82992 14.03 4.16992 14.37 4.16992 14.78V17.09C4.16992 18.97 5.69992 20.5 7.57992 20.5H9.88992C10.2999 20.5 10.6399 20.84 10.6399 21.25C10.6399 21.66 10.3099 22 9.88992 22Z"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM10.8899 21H8.57992C5.86992 21 3.66992 18.8 3.66992 16.09V13.78C3.66992 13.37 4.00992 13.03 4.41992 13.03C4.82992 13.03 5.16992 13.37 5.16992 13.78V16.09C5.16992 17.97 6.69992 19.5 8.57992 19.5H10.8899C11.2999 19.5 11.6399 19.84 11.6399 20.25C11.6399 20.66 11.3099 21 10.8899 21ZM10.8899 4.5H8.57992C6.69992 4.5 5.16992 6.03 5.16992 7.91V10.22C5.16992 10.63 4.82992 10.97 4.41992 10.97C4.00992 10.97 3.66992 10.64 3.66992 10.22V7.91C3.66992 5.2 5.86992 3 8.57992 3H10.8899C11.2999 3 11.6399 3.34 11.6399 3.75C11.6399 4.16 11.3099 4.5 10.8899 4.5ZM21.6699 16.09C21.6699 18.8 19.4699 21 16.7599 21H15.3699C14.9599 21 14.6199 20.66 14.6199 20.25C14.6199 19.84 14.9599 19.5 15.3699 19.5H16.7599C18.6399 19.5 20.1699 17.97 20.1699 16.09V14.7C20.1699 14.29 20.5099 13.95 20.9199 13.95C21.3299 13.95 21.6699 14.29 21.6699 14.7V16.09ZM21.6699 10.22C21.6699 10.63 21.3299 10.97 20.9199 10.97C20.5099 10.97 20.1699 10.63 20.1699 10.22V7.91C20.1699 6.03 18.6399 4.5 16.7599 4.5H14.4499C14.0399 4.5 13.6999 4.16 13.6999 3.75C13.6999 3.34 14.0299 3 14.4499 3H16.7599C19.4699 3 21.6699 5.2 21.6699 7.91V10.22Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMaximize2 as IconComponentType).keywords = [
  "maximize",
  "2",
  "max",
  "maximum",
  "maximal",
  "optimum",
  "broaden",
  "optimal",
  "maximisation",
  "maximise",
  "optimizing",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out",
];

export default IconMaximize2 as IconComponentType;