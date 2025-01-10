import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconTransactionMinus: FC<IconProps> = ({
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
            d="M7.40796 19.7C8.22796 18.82 9.47797 18.89 10.198 19.85L11.208 21.2C12.018 22.27 13.328 22.27 14.138 21.2L15.148 19.85C15.868 18.89 17.118 18.82 17.938 19.7C19.718 21.6 21.168 20.97 21.168 18.31V7.04C21.168 3.01 20.228 2 16.448 2H8.88797C5.10797 2 4.16797 3.01 4.16797 7.04V18.3C4.17797 20.97 5.63796 21.59 7.40796 19.7Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.92773 10H15.4277"
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
            d="M7.40796 19.7C8.22796 18.82 9.47797 18.89 10.198 19.85L11.208 21.2C12.018 22.27 13.328 22.27 14.138 21.2L15.148 19.85C15.868 18.89 17.118 18.82 17.938 19.7C19.718 21.6 21.168 20.97 21.168 18.31V7.04C21.168 3.01 20.228 2 16.448 2H8.88797C5.10797 2 4.16797 3.01 4.16797 7.04V18.3C4.17797 20.97 5.63796 21.59 7.40796 19.7Z"
            fill="currentColor"
          />
          <path
            d="M15.4277 10.75H9.92773C9.51773 10.75 9.17773 10.41 9.17773 10C9.17773 9.59 9.51773 9.25 9.92773 9.25H15.4277C15.8377 9.25 16.1777 9.59 16.1777 10C16.1777 10.41 15.8377 10.75 15.4277 10.75Z"
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
            d="M16.4597 2H8.89969C5.11969 2 4.17969 3.01 4.17969 7.04V18.3C4.17969 20.96 5.63969 21.59 7.40969 19.69L7.41969 19.68C8.23969 18.81 9.48969 18.88 10.1997 19.83L11.2097 21.18C12.0197 22.25 13.3297 22.25 14.1397 21.18L15.1497 19.83C15.8697 18.87 17.1197 18.8 17.9397 19.68C19.7197 21.58 21.1697 20.95 21.1697 18.29V7.04C21.1797 3.01 20.2397 2 16.4597 2ZM15.4297 10.75H9.92969C9.51969 10.75 9.17969 10.41 9.17969 10C9.17969 9.59 9.51969 9.25 9.92969 9.25H15.4297C15.8397 9.25 16.1797 9.59 16.1797 10C16.1797 10.41 15.8397 10.75 15.4297 10.75Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTransactionMinus as IconComponentType).keywords = [
  "transaction",
  "minus",
  "dealing",
  "dealings",
  "sale",
  "exchange",
  "purchase",
  "trading",
  "trade",
  "turnover",
  "dealer",
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

export default IconTransactionMinus as IconComponentType;
