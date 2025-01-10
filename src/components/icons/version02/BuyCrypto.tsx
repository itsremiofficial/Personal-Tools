import { FC } from "react";

const IconBuyCrypto: FC<IconProps> = ({
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
            d="M22.6699 8.5C22.6699 12.09 19.7599 15 16.1699 15C15.9999 15 15.8199 14.99 15.6499 14.98C15.3999 11.81 12.8599 9.26999 9.68991 9.01999C9.67991 8.84999 9.66992 8.67 9.66992 8.5C9.66992 4.91 12.5799 2 16.1699 2C19.7599 2 22.6699 4.91 22.6699 8.5Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.6699 15.5C15.6699 19.09 12.7599 22 9.16992 22C5.57992 22 2.66992 19.09 2.66992 15.5C2.66992 11.91 5.57992 9 9.16992 9C9.33992 9 9.51991 9.00999 9.68991 9.01999C12.8599 9.26999 15.3999 11.81 15.6499 14.98C15.6599 15.15 15.6699 15.33 15.6699 15.5Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.28992 14.62L9.16992 13L10.0499 14.62L11.6699 15.5L10.0499 16.38L9.16992 18L8.28992 16.38L6.66992 15.5L8.28992 14.62Z"
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
            d="M22.6699 8.5C22.6699 12.09 19.7599 15 16.1699 15C15.9999 15 15.8199 14.99 15.6499 14.98C15.3999 11.81 12.8599 9.27 9.68991 9.02C9.67991 8.85 9.66992 8.67 9.66992 8.5C9.66992 4.91 12.5799 2 16.1699 2C19.7599 2 22.6699 4.91 22.6699 8.5Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.6699 15.5C15.6699 19.09 12.7599 22 9.16992 22C5.57992 22 2.66992 19.09 2.66992 15.5C2.66992 11.91 5.57992 9 9.16992 9C9.33992 9 9.51991 9.01 9.68991 9.02C12.8599 9.27 15.3999 11.81 15.6499 14.98C15.6599 15.15 15.6699 15.33 15.6699 15.5Z"
            fill="currentColor"
          />
          <path
            d="M8.28992 14.62L9.16992 13L10.0499 14.62L11.6699 15.5L10.0499 16.38L9.16992 18L8.28992 16.38L6.66992 15.5L8.28992 14.62Z"
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
            d="M22.67 8.5C22.67 11.76 20.27 14.45 17.15 14.92V14.86C16.84 10.98 13.69 7.83 9.78 7.52H9.75C10.22 4.4 12.91 2 16.17 2C19.76 2 22.67 4.91 22.67 8.5Z"
            fill="currentColor"
          />
          <path
            d="M15.6499 14.98C15.3999 11.81 12.8599 9.27 9.68992 9.02C9.51992 9.01 9.33992 9 9.16992 9C5.57992 9 2.66992 11.91 2.66992 15.5C2.66992 19.09 5.57992 22 9.16992 22C12.7599 22 15.6699 19.09 15.6699 15.5C15.6699 15.33 15.6599 15.15 15.6499 14.98ZM10.0499 16.38L9.16992 18L8.28992 16.38L6.66992 15.5L8.28992 14.62L9.16992 13L10.0499 14.62L11.6699 15.5L10.0499 16.38Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBuyCrypto as IconComponent).keywords = [
  "buy",
  "crypto",
  "purchase",
  "bargain",
  "bribe",
  "corrupt",
  "steal",
  "pay",
  "paid",
  "sell",
  "sale",
  "cypher",
  "cipher",
  "encrypted",
  "cryptographic",
  "cryptology",
  "encrypt",
  "cryptography",
  "encryption",
  "encode",
];

export default IconBuyCrypto as IconComponent;
