import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconCashOut: FC<IconProps> = ({
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
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M18.6667 12.0005C20.5513 11.7218 22 10.0462 22 8.02085C22 5.80046 20.2589 4.00049 18.1111 4.00049H5.88889C3.74112 4.00049 2 5.80046 2 8.02085C2 10.0462 3.44873 11.7218 5.33333 12.0005"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M12 7.00049V14.0005M12 14.0005L14 11.6672M12 14.0005L10 11.6672"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 11.0005C5 9.11487 5 8.17206 5.58579 7.58627C6.17157 7.00049 7.11438 7.00049 9 7.00049H15C16.8856 7.00049 17.8284 7.00049 18.4142 7.58627C19 8.17206 19 9.11487 19 11.0005V17.0005C19 18.8861 19 19.8289 18.4142 20.4147C17.8284 21.0005 16.8856 21.0005 15 21.0005H9C7.11438 21.0005 6.17157 21.0005 5.58579 20.4147C5 19.8289 5 18.8861 5 17.0005V11.0005Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M5 18.0005H19"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
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
            d="M8.99956 20.0005H14.9996C16.8852 20.0005 17.828 20.0005 18.4138 19.4147C18.8853 18.9432 18.9773 18.2403 18.9952 17.0005H5.00391C5.02184 18.2403 5.1138 18.9432 5.58535 19.4147C6.17113 20.0005 7.11394 20.0005 8.99956 20.0005Z"
            fill="currentColor"
          />
          <path
            d="M11.25 6.00049H9C7.11438 6.00049 6.17157 6.00049 5.58579 6.58627C5 7.17206 5 8.11487 5 10.0005V16.0005C5 16.3682 5 16.7001 5.00435 17.0005H18.9957C19 16.7001 19 16.3682 19 16.0005V10.0005C19 8.11487 19 7.17206 18.4142 6.58627C17.8284 6.00049 16.8856 6.00049 15 6.00049H12.75V10.973L13.4306 10.1791C13.7001 9.86457 14.1736 9.82815 14.4881 10.0977C14.8026 10.3673 14.839 10.8408 14.5694 11.1552L12.5694 13.4886C12.427 13.6548 12.2189 13.7505 12 13.7505C11.7811 13.7505 11.573 13.6548 11.4306 13.4886L9.43056 11.1552C9.16099 10.8408 9.19741 10.3673 9.51191 10.0977C9.8264 9.82815 10.2999 9.86457 10.5694 10.1791L11.25 10.973V6.00049Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M18.1111 3.00049H5.88889C3.74112 3.00049 2 4.80046 2 7.02085C2 8.92506 3.28058 10.5201 5 10.9357V10.0005C5 8.11487 5 7.17206 5.58579 6.58627C6.17157 6.00049 7.11438 6.00049 9 6.00049H11.25H12.75H15C16.8856 6.00049 17.8284 6.00049 18.4142 6.58627C19 7.17206 19 8.11487 19 10.0005V10.9357C20.7194 10.5201 22 8.92506 22 7.02085C22 4.80046 20.2589 3.00049 18.1111 3.00049Z"
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
            d="M11.25 6.00049H9C7.11438 6.00049 6.17157 6.00049 5.58579 6.58627C5 7.17206 5 8.11487 5 10.0005L5.00005 16.2505H18.9999L19 10.0005C19 8.11487 19 7.17206 18.4142 6.58627C17.8284 6.00049 16.8856 6.00049 15 6.00049H12.75V10.973L13.4306 10.1791C13.7001 9.86457 14.1736 9.82815 14.4881 10.0977C14.8026 10.3673 14.839 10.8408 14.5695 11.1552L12.5695 13.4886C12.427 13.6548 12.219 13.7505 12 13.7505C11.7811 13.7505 11.5731 13.6548 11.4306 13.4886L9.43057 11.1552C9.161 10.8408 9.19743 10.3673 9.51192 10.0977C9.82641 9.82815 10.2999 9.86457 10.5695 10.1791L11.25 10.973V6.00049Z"
            fill="currentColor"
          />
          <path
            d="M5.0306 17.7505H18.9694C18.9181 18.5411 18.781 19.0479 18.4142 19.4147C17.8284 20.0005 16.8856 20.0005 15 20.0005H9C7.11438 20.0005 6.17157 20.0005 5.58579 19.4147C5.21898 19.0479 5.08186 18.5411 5.0306 17.7505Z"
            fill="currentColor"
          />
          <path
            d="M5.88889 3.00049H18.1111C20.2589 3.00049 22 4.80046 22 7.02085C22 8.3102 21.4129 9.4578 20.5 10.1935L20.5 9.91101C20.5001 9.04539 20.5002 8.25171 20.4134 7.60609C20.3178 6.89513 20.0929 6.14367 19.4748 5.52563C18.8568 4.90758 18.1054 4.68269 17.3944 4.5871C16.7488 4.5003 15.9551 4.50039 15.0895 4.5005H8.91048C8.04485 4.50039 7.25118 4.5003 6.60556 4.5871C5.8946 4.68269 5.14315 4.90758 4.5251 5.52563C3.90706 6.14368 3.68216 6.89513 3.58657 7.60609C3.49977 8.25171 3.49987 9.04537 3.49997 9.911L3.49998 10.1935C2.58709 9.45776 2 8.31018 2 7.02085C2 4.80046 3.74112 3.00049 5.88889 3.00049Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCashOut as IconComponentType).keywords = [
  "cash",
  "out",
  "cash in",
  "immediate payment",
  "currency",
  "encashment",
  "financial",
  "capital",
  "money",
  "finance",
  "cashflow",
  "away",
  "outer",
  "exterior",
  "retired",
  "extinct",
  "dead",
  "down",
  "extinguished",
  "come out",
];

export default IconCashOut as IconComponentType;
