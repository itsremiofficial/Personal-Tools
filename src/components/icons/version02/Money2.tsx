import { FC } from "react";

const IconMoney2: FC<IconProps> = ({
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
            d="M17.6719 20.5H7.67188C4.67188 20.5 2.67188 19 2.67188 15.5V8.5C2.67188 5 4.67188 3.5 7.67188 3.5H17.6719C20.6719 3.5 22.6719 5 22.6719 8.5V15.5C22.6719 19 20.6719 20.5 17.6719 20.5Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6719 15C14.3287 15 15.6719 13.6569 15.6719 12C15.6719 10.3431 14.3287 9 12.6719 9C11.015 9 9.67188 10.3431 9.67188 12C9.67188 13.6569 11.015 15 12.6719 15Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.67188 9H3.67188C6.67188 9 7.67188 8 7.67188 5V4"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.6719 9H21.6719C18.6719 9 17.6719 8 17.6719 5V4"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.67188 15H3.67188C6.67188 15 7.67188 16 7.67188 19V20"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.6719 15H21.6719C18.6719 15 17.6719 16 17.6719 19V20"
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
            d="M22.6719 9V15H21.6719C18.6719 15 17.6719 16 17.6719 19V20.5H7.67188V19C7.67188 16 6.67188 15 3.67188 15H2.67188V9H3.67188C6.67188 9 7.67188 8 7.67188 5V3.5H17.6719V5C17.6719 8 18.6719 9 21.6719 9H22.6719Z"
            fill="currentColor"
          />
          <path
            d="M12.6719 15C14.3287 15 15.6719 13.6569 15.6719 12C15.6719 10.3431 14.3287 9 12.6719 9C11.015 9 9.67188 10.3431 9.67188 12C9.67188 13.6569 11.015 15 12.6719 15Z"
            fill="currentColor"
          />
          <path
            d="M7.67188 3.5V5C7.67188 8 6.67188 9 3.67188 9H2.67188V8.5C2.67188 5 4.67188 3.5 7.67188 3.5Z"
            fill="currentColor"
          />
          <path
            d="M22.6719 8.5V9H21.6719C18.6719 9 17.6719 8 17.6719 5V3.5C20.6719 3.5 22.6719 5 22.6719 8.5Z"
            fill="currentColor"
          />
          <path
            d="M7.67188 19V20.5C4.67188 20.5 2.67188 19 2.67188 15.5V15H3.67188C6.67188 15 7.67188 16 7.67188 19Z"
            fill="currentColor"
          />
          <path
            d="M22.6719 15V15.5C22.6719 19 20.6719 20.5 17.6719 20.5V19C17.6719 16 18.6719 15 21.6719 15H22.6719Z"
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
            d="M12.6738 15C14.3307 15 15.6738 13.6569 15.6738 12C15.6738 10.3431 14.3307 9 12.6738 9C11.017 9 9.67383 10.3431 9.67383 12C9.67383 13.6569 11.017 15 12.6738 15Z"
            fill="currentColor"
          />
          <path
            d="M17.6738 3.5H7.67383C4.67383 3.5 2.67383 5 2.67383 8.5V9V15V15.5C2.67383 19 4.67383 20.5 7.67383 20.5H17.6738C20.6738 20.5 22.6738 19 22.6738 15.5V15V9V8.5C22.6738 5 20.6738 3.5 17.6738 3.5ZM7.67383 19C7.67383 16.18 6.76383 15.14 4.17383 15.02V15V9V8.98C6.76383 8.86 7.67383 7.82 7.67383 5H17.6738C17.6738 7.82 18.5838 8.86 21.1738 8.98V9V15V15.02C18.5838 15.14 17.6738 16.18 17.6738 19H7.67383Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMoney2 as IconComponent).keywords = [
  "money",
  "2",
  "rich",
  "monied",
  "wealthy",
  "affluent",
  "loaded",
  "flush",
  "muni",
  "finance",
  "financing",
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

export default IconMoney2 as IconComponent;
