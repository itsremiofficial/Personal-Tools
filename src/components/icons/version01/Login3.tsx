import { FC } from "react";

const IconLogin3: FC<IconProps> = ({
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
            d="M2.00098 11.999L16.001 11.999M16.001 11.999L12.501 8.99902M16.001 11.999L12.501 14.999"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.2429 22 18.8286 22 16.0002 22H15.0002C12.1718 22 10.7576 22 9.87889 21.1213C9.11051 20.3529 9.01406 19.175 9.00195 17"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
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
            d="M15.9998 2L14.9998 2C12.1714 2 10.7576 2.00023 9.87891 2.87891C9.00023 3.75759 9.00023 5.1718 9.00023 8.00023L9.00023 16.0002C9.00023 18.8287 9.00023 20.2429 9.87891 21.1215C10.7574 22 12.1706 22 14.9976 22L14.9998 22L15.9998 22C18.8282 22 20.2424 22 21.1211 21.1213C21.9998 20.2426 21.9998 18.8284 21.9998 16L21.9998 8L21.9998 7.99998C21.9998 5.17157 21.9998 3.75736 21.1211 2.87868C20.2424 2 18.8282 2 15.9998 2Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.25098 11.999C1.25098 11.5848 1.58676 11.249 2.00098 11.249L13.9735 11.249L12.0129 9.56845C11.6984 9.29889 11.662 8.82541 11.9315 8.51092C12.2011 8.19642 12.6746 8.16 12.9891 8.42957L16.4891 11.4296C16.6553 11.5721 16.751 11.7801 16.751 11.999C16.751 12.218 16.6553 12.426 16.4891 12.5685L12.9891 15.5685C12.6746 15.838 12.2011 15.8016 11.9315 15.4871C11.662 15.1726 11.6984 14.6991 12.0129 14.4296L13.9735 12.749L2.00098 12.749C1.58676 12.749 1.25098 12.4132 1.25098 11.999Z"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.625 12C1.625 12.4142 1.96079 12.75 2.375 12.75L13.3476 12.75L11.3869 14.4306C11.0724 14.7001 11.036 15.1736 11.3056 15.4881C11.5751 15.8026 12.0486 15.839 12.3631 15.5694L15.8631 12.5694C16.0293 12.427 16.125 12.2189 16.125 12C16.125 11.7811 16.0293 11.573 15.8631 11.4306L12.3631 8.43056C12.0486 8.16099 11.5751 8.19741 11.3056 8.51191C11.036 8.8264 11.0724 9.29988 11.3869 9.56944L13.3476 11.25L2.375 11.25C1.96079 11.25 1.625 11.5858 1.625 12Z"
            fill="currentColor"
          />
          <path
            d="M9.375 9.75004L9.75328 9.75004C9.49473 9.01645 9.6241 8.16876 10.1667 7.53576C10.9754 6.59228 12.3958 6.48301 13.3393 7.29171L16.8393 10.2917C17.338 10.7192 17.625 11.3432 17.625 12C17.625 12.6569 17.338 13.2809 16.8393 13.7084L13.3393 16.7084C12.3958 17.5171 10.9754 17.4078 10.1667 16.4643C9.6241 15.8313 9.49473 14.9836 9.75328 14.25L9.375 14.25L9.375 16C9.375 18.8284 9.375 20.2426 10.2537 21.1213C11.1324 22 12.5466 22 15.375 22L16.375 22C19.2034 22 20.6176 22 21.4963 21.1213C22.375 20.2426 22.375 18.8284 22.375 16L22.375 8C22.375 5.17158 22.375 3.75736 21.4963 2.87868C20.6176 2 19.2034 2 16.375 2L15.375 2C12.5466 2 11.1324 2 10.2537 2.87868C9.375 3.75736 9.375 5.17157 9.375 8L9.375 9.75004Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLogin3 as IconComponent).keywords = [
  "login",
  "3",
  "log in",
  "log on",
  "logon",
  "username",
  "sign-on",
  "bootable",
  "pluggable",
  "uplink",
  "log-in",
  "omega",
  "wash out",
  "cut up",
  "pull out",
  "pull up",
  "pull over",
  "pull in",
  "work out",
  "ride down",
];

export default IconLogin3 as IconComponent;
